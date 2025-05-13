const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

Before(async function () {
  await this.launchBrowser();
});

After(async function () {
  await this.closeBrowser();
});

// Set timeout to 90 seconds (or any desired value)
setDefaultTimeout(90 * 1000); // 90,000 milliseconds
