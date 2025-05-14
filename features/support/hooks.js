const { Before, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");

Before(async function () {
  await this.initBrowser(); // `this` refers to the CustomWorld instance
});

AfterAll(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

setDefaultTimeout(60 * 1000);
