const { BeforeAll, AfterAll, Before } = require("@cucumber/cucumber");
const browserManager = require("./browserManager");
const { setDefaultTimeout } = require("@cucumber/cucumber");

// Set timeout to 60 seconds (adjust as needed)
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  await browserManager.launchBrowser();
});

Before(async function () {
  await this.createNewTab(); // this is the CustomWorld instance
});

AfterAll(async function () {
  // await browserManager.closeBrowser(); // Optional: close at end
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
  console.log("");
  console.log("Execution Completed.");
  process.exit(0); // force exit
});
