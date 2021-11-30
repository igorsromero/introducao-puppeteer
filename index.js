const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync');

const Conversor = async() => {

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe a moeda base: ') || `dolar`
    const moedaFinal = readlineSync.question('Informe a moeda desejada: ') || `real`
    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1ISCS_pt-PTBR981BR981&oq=dolar+para+real&aqs=chrome..69i57j0i131i433i512l3j0i433i512l4j0i131i433i512j0i10i131i433i512.1735j1j7&sourceid=chrome&ie=UTF-8`
    await page.goto(url);
    // await page.screenshot({ path: 'example.png' });
    const resultado = await page.evaluate(() => {
        return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value
    })
    
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
    await browser.close();
}

Conversor()