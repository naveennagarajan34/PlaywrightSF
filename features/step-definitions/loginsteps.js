const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const fs = require("fs");

Given("I launch Scripture forge", async function () {
  await this.page.goto("https://qa.scriptureforge.org");
});

When(
  "I login with paratext using {string} and {string}",
  async function (email, password) {
    const username = email.split("@")[0];
    await this.page
      .locator("a.mdl-button")
      .filter({ hasText: "LOG IN" })
      .click();
    await this.page
      .locator("div.auth0-lock-social-button-text")
      .filter({ hasText: "Paratext" })
      .click();
    await this.page.locator("input#email").fill(email);
    await this.page.locator("input#email").press("Enter");
    await this.page.waitForLoadState("load");

    await this.page
      .locator("//span[contains(text(),'Next')]/parent::button")
      .click();
    await this.page.locator("input[type='password']").fill(password);
    await this.page
      .locator("//span[contains(text(),'Next')]/parent::button")
      .click();
    await this.page.waitForTimeout(2000);
  }
);

Then("I should be redirected to the projects page", async function () {
  await expect(this.page.locator("div h1")).toBeVisible({
    timeout: 30000,
  }); // waits up to 30s
});

Then("logout the application", async function () {
  await this.page
    .locator("button.user-menu-btn span.mat-mdc-button-touch-target")
    .click();
  await this.page.locator("#log-out-link").click();
  // await this.page.waitForTimeout(20000);
});

When("I login with {string} and {string}", async function (email, password) {
  await this.page.locator("div.login-buttons a.mdl-button--raised").click();
  await this.page.locator("input[type='email']").fill(email);
  await this.page.locator("input[type='password']").fill(password);
  await this.page.locator("button[type='submit']").click();
});
