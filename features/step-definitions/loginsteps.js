const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const fs = require("fs");

Given("I launch Scripture Forge", async function () {
  await this.page.goto("https://qa.scriptureforge.org");
});

When("I login with {string} and {string}", async function (email, password) {
  await this.page.locator("a.mdl-button").filter({ hasText: "LOG IN" }).click();
  await this.page
    .locator("div.auth0-lock-social-button-text")
    .filter({ hasText: "Paratext" })
    .click();
  await this.page.locator("input#email").fill(email);
  await this.page.locator("//*[@id='password-group']/button").click();
  expect(
    await this.page.locator("//span[contains(text(),'Next')]/parent::button")
  ).toBeVisible({
    timeout: 10000,
  });
  await this.page.waitForTimeout(2000);
  await this.page
    .locator("//span[contains(text(),'Next')]/parent::button")
    .click();
  await this.page.locator("input[type='password']").fill(password);
  await this.page
    .locator("//span[contains(text(),'Next')]/parent::button")
    .click();
  // await this.page.waitForNavigation();
  // await this.saveSessionState(); // Save session after login
});

Then("I should be redirected to the project dashboard", async function () {
  await expect(this.page.locator("mat-icon.notranslate").first()).toBeVisible({
    timeout: 30000,
  }); // waits up to 30s
});

Then("logout the application", async function () {
  await this.page
    .locator("button.user-menu-btn span.mat-mdc-button-touch-target")
    .click();
  await this.page.locator("#log-out-link").click();
  await this.page.waitForTimeout(20000);
});
