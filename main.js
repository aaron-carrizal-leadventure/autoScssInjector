import puppeteer from 'puppeteer';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import * as sass from 'sass';

const scssPath = resolve('./styles.scss');
const scssCode = await readFile(scssPath, 'utf-8');

const { css } = sass.compileString(scssCode);

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

const page = await browser.newPage();
await page.goto('https://google.com');

await page.addStyleTag({ content: css });

console.log('🎨 Estilos inyectados. Puedes interactuar con el sitio.');
