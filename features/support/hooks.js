const {
  BeforeAll,
  AfterAll,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

let browser;
let context;
let page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  const email = "naveen.n@ecgroup-intl.com";
  const password = "naveT23LMN#23";
  await page.goto("https://qa.scriptureforge.org/");
  await page.locator("a.mdl-button").filter({ hasText: "LOG IN" }).click();
  await page
    .locator("div.auth0-lock-social-button-text")
    .filter({ hasText: "Paratext" })
    .click();
  await page.locator("input#email").fill(email);
  await page.locator("input#email").press("Enter");
  await page.waitForLoadState("load");

  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
  await page.locator("input[type='password']").fill(password);
  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
  await page.waitForTimeout(2000);
});

Before(async function () {
  this.browser = browser;
  this.context = context;
  this.page = await context.newPage();
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

setDefaultTimeout(60 * 1000);
