const {
  BeforeAll,
  AfterAll,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");

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
  await page.waitForTimeout(3000);
  await page.locator("input[type='email']").fill("naveen.n");

  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
  await page.locator("input[type='password']").fill(password);
  await page.locator("//span[contains(text(),'Next')]/parent::button").click();
  expect(await page.locator("//header//a")).toBeVisible({
    timeout: 30000,
  });
  // await page.waitForTimeout(2000);
  // ✅ Save login session
  await context.storageState({ path: "storageState.json" });
});

Before(async function () {
  this.browser = browser;
  this.context = await browser.newContext({
    storageState: "storageState.json",
  });
  this.page = await context.newPage();
});

AfterAll(async function () {
  try {
    if (browser && browser.isConnected && typeof browser.close === "function") {
      await browser.close();
    }
  } catch (err) {
    console.error("Failed to close the browser in AfterAll:", err);
  }
});

setDefaultTimeout(60 * 1000);
