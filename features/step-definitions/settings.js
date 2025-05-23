const { When, Then } = require("@cucumber/cucumber");

When("I click on the Settings", async function () {
  await this.page.waitForTimeout(2000);
  await this.page
    .locator("//span[contains(text(),'Settings')]/../parent::a")
    .waitFor({ state: "visible", timeout: 10000 });
  await this.page
    .locator("//span[contains(text(),'Settings')]/../parent::a")
    .click();
  console.log("user is on settings page");
});

Then("I add the source {string} in the Source field", async function (source) {
  await this.page.waitForTimeout(10000);
});
