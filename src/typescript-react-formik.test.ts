import puppeteer from 'puppeteer';

describe('Google', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage();
    await page.goto('https://littlehorseboy.github.io/typescript-react/dist/');
  });

  afterAll(async () => {
    browser.close();
  });

  test('登入後按下示範表單有成功跳轉連結到 姓名年齡示範表單 頁面', async () => {
    const inputAccount = await page.$('#app > div > div.MuiContainer-root.jss16 > div:nth-child(3) > div > div > input');
    if (inputAccount) {
      await inputAccount.focus();
    }
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('a');
    await page.keyboard.up('ControlLeft');
    if (inputAccount) {
      await inputAccount.type('HORSE');
    }

    const loginSubmit = await page.$('#app > div > div.MuiContainer-root.jss16 > div:nth-child(3) > button');
    if (loginSubmit) {
      await loginSubmit.click();
    }

    const formikPageLink = await page.$('#app > div > div.MuiContainer-root.jss16 > div:nth-child(2) > a:nth-child(3)');
    if (formikPageLink) {
      await formikPageLink.click();
    }

    await expect(page).toMatch('姓名年齡示範表單');
  });
});
