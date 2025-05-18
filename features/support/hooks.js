const { BeforeAll, AfterAll, Before } = require("@cucumber/cucumber");
const browserManager = require("./browserManager");

BeforeAll(async function () {
  await browserManager.launchBrowser();
});

Before(async function () {
  await this.createNewTab(); // this is the CustomWorld instance
});

AfterAll(async function () {
  // await browserManager.closeBrowser(); // Optional: close at end
});
