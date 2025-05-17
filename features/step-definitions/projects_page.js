const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("launch Scripture forge", async function () {
  await this.page.goto("https://qa.scriptureforge.org/projects/");
  expect(
    await this.page.locator("mat-toolbar-row.mat-toolbar-row")
  ).toBeVisible({
    timeout: 20000,
  });
  //   await this.page.waitForTimeout(10000);
});

Given("user is on projects page", async function () {
  this.page.goto("https://qa.scriptureforge.org/projects");
});

When(
  "I click the Connect button on the project {string}",
  async function (projectCode) {
    await this.page
      .locator(
        `//b[text()='${projectCode}']/parent::span/parent::div//a//span[2]`
      )
      .click();
    await this.page.locator("//span[contains(text(),'Connect')]").click();
  }
);

When("I click the on the project {string}", async function (projectCode) {
  await this.page
    .locator(
      `//mat-card//b[contains(text(),'${projectCode}')]/ancestor::mat-card`
    )
    .click();
  await this.page.waitForTimeout(5000);
});

Then("I should be redirected inside the project", async function () {
  expect(await this.page.locator("app-navigation")).toBeVisible({
    timeout: 20000,
  });
});
