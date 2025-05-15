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
  // browser = await chromium.launch({ headless: false });
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();

  // Skip login — you can navigate directly to any protected or public page here
  await page.goto("https://qa.scriptureforge.org/");
});

Before(function () {
  this.browser = browser;
  this.context = context;
  this.page = page;
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

setDefaultTimeout(60 * 1000);
