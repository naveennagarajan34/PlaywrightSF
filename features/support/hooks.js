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

  // Login once
  await page.goto("https://qa.scriptureforge.org/");
  await page.locator("a.mdl-button", { hasText: "LOG IN" }).click();
  await page
    .locator("div.auth0-lock-social-button-text", { hasText: "Paratext" })
    .click();
  await page.locator("input#email").fill("naveen.n@ecgroup-intl.com");
  await page.locator("//*[@id='password-group']/button").click();
  await page.waitForSelector("//span[contains(text(),'Next')]/parent::button");
  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
  await page.locator("input[type='password']").fill("naveT23LMN#23");
  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
});

Before(function () {
  this.browser = browser;
  this.context = context;
  this.page = page;
});

AfterAll(async function () {
  await browser.close();
});

setDefaultTimeout(60 * 1000);
