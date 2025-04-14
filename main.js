import puppeteer from 'puppeteer';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import * as sass from 'sass';

const scssPaths = [
    resolve('./styles.scss'),
    resolve('./test.scss'),
    // resolve('./components/buttons.scss')
];

const url = 'https://google.com';

const compiledCSSArray = await Promise.all(
    scssPaths.map(async (path) => {
        const scssCode = await readFile(path, 'utf-8');
        const { css } = sass.compileString(scssCode, { url: new URL(`file://${path}`) });
        return css;
    })
);

const combinedCSS = compiledCSSArray.join('\n');

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

const page = await browser.newPage();
await page.goto(url);

await page.addStyleTag({ content: combinedCSS });

console.log('🎨 Todos los estilos SCSS compilados e inyectados');
