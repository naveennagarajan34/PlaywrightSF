const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

When("I click on the sf logo in the header", async function () {
  await this.page.locator("header a[href*='/projects']").click();
  const projectCode = "TLP";
});

When("user clicks on UI icon", async function () {
  await this.page
    .locator("//header//mat-icon[text()='translate']/ancestor::button")
    .click();
  expect(await this.page.locator("div[role='menu']")).toBeVisible({
    timeout: 5000,
  });
});

Then("click on the {string} locale", async function (locale) {
  expect(
    await this.page.locator(
      `//div[@role='menu']//button//span[text()='${locale}']/ancestor::button`
    )
  ).toBeVisible({
    timeout: 5000,
  });
  await this.page
    .locator(
      `//div[@role='menu']//button//span[text()='${locale}']/ancestor::button`
    )
    .click();
  await this.page.pause();    
});
