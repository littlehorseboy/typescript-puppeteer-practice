import puppeteer from 'puppeteer';

(async (): Promise<void> => {
  const browser = await puppeteer.launch({ headless: false });

  await browser.close();
})();
