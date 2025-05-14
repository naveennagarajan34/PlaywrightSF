const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("launch Scripture forge", async function () {
  await this.page.goto("https://qa.scriptureforge.org/projects");
  expect(
    await this.page.locator("mat-toolbar-row.mat-toolbar-row")
  ).toBeVisible({
    timeout: 20000,
  });
  //   await this.page.waitForTimeout(10000);
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

Then("I should be redirected inside the project", async function () {
  expect(await this.page.locator("app-navigation")).toBeVisible({
    timeout: 10000,
  });
});
