const { sleep } = require('sleep');
const setTitle = require('node-bash-title');
setTitle('Token Generator');
const fs = require('fs');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const { uniqueNamesGenerator, NumberDictionary } = require('unique-names-generator');
const { PuppeteerBlocker } = require('@cliqz/adblocker-puppeteer');

async function main() {
    console.clear();

    'use-strict';

    const ps = require('prompt-sync')();
    const colors = require('colors');

    console.log('╭━━━━╮╱╭╮╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮'.brightBlue);
    console.log('┃╭╮╭╮┃╱┃┃╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮'.brightBlue);
    console.log('╰╯┃┃┣┻━┫┃╭┳━━┳━╮╱┃┃╱╰╋━━┳━╮╭━━┳━┳━┻╮╭╋━━┳━╮'.brightBlue);
    console.log('╱╱┃┃┃╭╮┃╰╯┫┃━┫╭╮╮┃┃╭━┫┃━┫╭╮┫┃━┫╭┫╭╮┃┃┃╭╮┃╭╯'.brightBlue);
    console.log('╱╱┃┃┃╰╯┃╭╮┫┃━┫┃┃┃┃╰┻━┃┃━┫┃┃┃┃━┫┃┃╭╮┃╰┫╰╯┃┃');
    console.log('╱╱╰╯╰━━┻╯╰┻━━┻╯╰╯╰━━━┻━━┻╯╰┻━━┻╯╰╯╰┻━┻━━┻╯');
    console.log('[' + '1'.brightBlue + '] Start');
    console.log('[' + '2'.brightBlue + '] Help');
    console.log('[' + '3'.brightBlue + '] Exit');
    let choice = ps('[' + '?'.brightBlue + ']>');

    if (choice == 1) {
        console.log('[' + '1'.brightBlue + '] Temp-mail');
        console.log('[' + '2'.brightBlue + '] 10minemai');
        console.log('[' + '3'.brightBlue + '] Tempmaildev');
        let emailchoice = ps('[?]>');

        console.log('[' + '!'.red + '] Do you want to send your tokens to the webhook? y/n: ');
        let choicewbwile = ps('[?]>');

        if (choicewbwile == 'y') {
            webhook = ps('Webhook: ')
        }

        let tokensname = ps('Tokens username: ');
        let HowTokens = ps('How many tokens do you wanna generate: ');

        puppeteer.use(StealthPlugin());
        puppeteer.use(
            RecaptchaPlugin({
                provider: {
                    id: '2captcha',
                },
                visualFeedback: true,
                throwOnError: true
            })
        );

        const cfg = {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-infobars',
                '--window-position=0,0',
                '--window-size=1366,768',
            ],
            defaultViewport: null,
            ignoreHTTPSErrors: true,
            headless: false,
        }

        const accounts = fs.createWriteStream('tokens.txt', { flags: 'a' });

        async function dsne(page, infoname, info) {
            const p = await page.$('input[name=' + infoname + ']');
            await p.focus();
            await page.keyboard.type(info);
        }

        async function cli(page, name, min, max) {
            var i = await page.$('[class*=input' + name + "]");
            await i.click();
            var r = Math.floor(Math.random() * (max - min + 1)) + min;

            await page.waitForSelector('[class*=option]');
            await page.$eval("[class$=option]", function (e, r) { e.parentNode.childNodes[r].click() }, r);

            return r
        }

        async function discordInput(dspagee, username, password, email) {
            await dspagee.bringToFront();
            await dspagee.goto('https://discord.com/register', { "waitUntil": "networkidle0", timeout: 70000 });

            await cli(dspagee, "Year", 17, 24);
            await cli(dspagee, "Day", 0, 28);
            await cli(dspagee, "Month", 0, 11);

            dspagee.waitForSelector('input[type*=checkbox]').then(() => {
                dsp
