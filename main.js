import 'dotenv/config';
import puppeteer from 'puppeteer';
import { readFile, readdir } from 'fs/promises';
import { resolve, extname } from 'path';
import * as sass from 'sass';
import chokidar from 'chokidar';

const url = process.env.URL;
const scssSourceFolder = process.env.SCSS_SOURCE_FOLDER;

async function getScssPaths(directory) {
    try {
        const files = await readdir(directory, { withFileTypes: true });
        return files
            .filter((file) => file.isFile() && extname(file.name) === '.scss')
            .map((file) => resolve(directory, file.name));
    } catch (error) {
        console.error(`❌ Error reading SCSS directory: ${error.message}`);
        return [];
    }
}

const scssPaths = await getScssPaths(scssSourceFolder);

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

const [page] = await browser.pages();
await page.goto(url);

await compileAndInject(page);

const watcher = chokidar.watch(scssPaths, {
    ignoreInitial: true,
});

watcher.on('change', async (path) => {
    console.log(`📁 Change detected in: ${path}`);
    await compileAndInject(page);
});
