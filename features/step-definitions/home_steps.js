//@ts-check
const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

When("click on help in the footer", async function () {
  await this.page
    .locator('li a[href="https://help.scriptureforge.org/"]')
    .filter({ hasText: "Help" })
    .click();
});

When("click on learn more in the footer", async function () {
  await this.page.locator("//li/a[contains(text(),'Learn')]").click();
});

Then("verify the user is redirected to help page", async function () {
  const [newPage] = await Promise.all([this.context.waitForEvent("page")]);
  await newPage.waitForLoadState("domcontentloaded");
  const actualTitle = await newPage.title();
  expect(actualTitle).toContain("Getting Started");
  await newPage.close();
});

Then("verify the user is redirected to learn more page", async function () {
  let actualTitle = await this.page.title();
  expect(actualTitle).toContain("Getting Started");
  await this.page.goBack();
  await this.page.locator("//div/a[contains(text(),'Learn')]").click();
  actualTitle = await this.page.title();
  expect(actualTitle).toContain("Getting Started");
});
