const puppeteer = require("puppeteer");

test("Go to sign in page", async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("localhost:3000");

  const text = await page.$eval("input[type='submit']", el => el.value);
  expect(text).toEqual("Sign in");
  await browser.close();
});
