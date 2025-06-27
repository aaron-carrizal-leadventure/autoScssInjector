import 'dotenv/config';
import puppeteer from 'puppeteer';
import { readFile, readdir } from 'fs/promises';
import { resolve, extname } from 'path';
import * as sass from 'sass';
import chokidar from 'chokidar';

const url = process.env.URL;
const scssSourceFolder = process.env.SCSS_SOURCE_FOLDER;

let loadingAnimation;
let scssPaths = [];

async function updateScssPaths(directory) {
    try {
        const files = await readdir(directory, { withFileTypes: true });
        scssPaths = files
            .filter((file) => file.isFile() && extname(file.name) === '.scss')
            .map((file) => resolve(directory, file.name));
        console.log('📂 SCSS paths updated:', scssPaths);
    } catch (error) {
        console.error(`❌ Error updating SCSS paths: ${error.message}`);
    }
}

async function compileScss() {
    try {
        const compiledCSSArray = await Promise.all(
            scssPaths.map(async (path) => {
                const scssCode = await readFile(path, 'utf-8');
                const { css } = sass.compileString(scssCode, {
                    url: new URL(`file://${path}`),
                    quietDeps: true,
                    logger: {
                        warn: (message) => {
                            // if (!message.includes('Sass @import rules are deprecated')) {
                            //     console.warn(message);
                            // }
                        },
                    },
                });
                return css;
            })
        );
        return compiledCSSArray.join('\n');
    } catch (error) {
        console.error('❌ Error compiling SCSS:', error.message);
        return '';
    }
}


async function injectStyles(page, css) {
    try {
        await page.evaluate((styles) => {
            const existing = document.getElementById('injected-scss');
            if (existing) existing.remove();

            const style = document.createElement('style');
            style.id = 'injected-scss';
            style.textContent = styles;
            document.head.appendChild(style);
        }, css);

        console.log('🔄 Styles injected successfully');
    } catch (error) {
        console.error('❌ Error injecting styles:', error.message);
    }
}

async function compileAndInject(page) {
    const css = await compileScss();
    await injectStyles(page, css);
}

await updateScssPaths(scssSourceFolder);

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'],
});

const [page] = await browser.pages();

try {
    const loadingFrames = ['🔵', '🔵', '🟢', '🟢', '🟡', '🟡', '🟠', '🟠', '🔴', '🔴']
    let frameIndex = 0;

    loadingAnimation = setInterval(() => {
        process.stdout.write(`\r🌐 Loading page ${loadingFrames[frameIndex++ % loadingFrames.length]} `);
    }, 200);

    await page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' });

    clearInterval(loadingAnimation);
    process.stdout.write('\r✅ Navigation successful\n');
} catch (error) {
    clearInterval(loadingAnimation);
    console.error('\r❌ Navigation failed:', error.message);
}

// Initial compilation and injection
await compileAndInject(page);

// Reinject styles on page navigation or reload
page.on('framenavigated', async () => {
    console.log('🌐 Page navigated or reloaded');
    await compileAndInject(page);
});

// Watch SCSS files for changes and additions
const watcher = chokidar.watch(scssSourceFolder, {
    ignoreInitial: false,
});

watcher.on('change', async (path) => {
    if (extname(path) === '.scss') {
        console.log(`📁 Change detected in: ${path}`);
        await compileAndInject(page);
    }
});

watcher.on('add', async (path) => {
    if (extname(path) === '.scss') {
        console.log(`📁 New SCSS file detected: ${path}`);
        scssPaths.push(resolve(path));
        await compileAndInject(page);
    }
});

watcher.on('unlink', async (path) => {
    if (extname(path) === '.scss') {
        console.log(`📁 SCSS file removed: ${path}`);
        scssPaths = scssPaths.filter((p) => p !== resolve(path));
        await compileAndInject(page);
    }
});
