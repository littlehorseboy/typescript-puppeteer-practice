import puppeteer from 'puppeteer';

(async (): Promise<void> => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  await page.goto('https://littlehorseboy.github.io/typescript-react/dist/');

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

  const nameInput = await page.$('#app > div > form > div:nth-child(2) > div > div > input');
  if (nameInput) {
    await nameInput.type('HORSE');
  }

  const ageInput = await page.$('#app > div > form > div:nth-child(3) > div > div > input');
  if (ageInput) {
    await ageInput.type('18');
  }

  const formikSubmit = await page.$('#app > div > form > button');
  if (formikSubmit) {
    await formikSubmit.click();
  }

  const genderSelect = await page.$('#app > div > form > div:nth-child(4) > div > div > select');
  if (genderSelect) {
    await genderSelect.select('male');
  }

  const favoriteLibRadioBtn = await page.$('#app > div > form > div:nth-child(5) > fieldset > div > label:nth-child(1)');
  if (favoriteLibRadioBtn) {
    await favoriteLibRadioBtn.click();
  }

  const activitiesCheckboxs = await page.$$('#app > div > form > div:nth-child(6) > fieldset > div > label');
  if (activitiesCheckboxs) {
    await activitiesCheckboxs.forEach((element) => {
      element.click();
    });
  }

  await page.waitFor(1000);

  if (formikSubmit) {
    await formikSubmit.click();
  }

  // await browser.close();
})();
