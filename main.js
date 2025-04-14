import puppeteer from 'puppeteer';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import * as sass from 'sass';
import chokidar from 'chokidar';

const scssPaths = [
    resolve('./styles.scss'),
    resolve('./test.scss'),
];

const url = 'https://google.com';

async function compileAndInject(page) {
    try {
        const compiledCSSArray = await Promise.all(
            scssPaths.map(async (path) => {
                const scssCode = await readFile(path, 'utf-8');
                const { css } = sass.compileString(scssCode, { url: new URL(`file://${path}`) });
                return css;
            })
        );

        const combinedCSS = compiledCSSArray.join('\n');

        await page.evaluate((css) => {
            const existing = document.getElementById('injected-scss');
            if (existing) existing.remove();

            const style = document.createElement('style');
            style.id = 'injected-scss';
            style.textContent = css;
            document.head.appendChild(style);
        }, combinedCSS);

        console.log('🔄 SCSS recompiled and injected');
    } catch (error) {
        console.error('❌ Error compiling SCSS:', error.message);
    }
}

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

const page = await browser.newPage();
await page.goto(url);

await compileAndInject(page);

const watcher = chokidar.watch(scssPaths, {
    ignoreInitial: true,
});

watcher.on('change', async (path) => {
    console.log(`📁 Change detected in: ${path}`);
    await compileAndInject(page);
});
