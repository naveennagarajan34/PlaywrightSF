const { Before, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");

// Initialize browser before each scenario
Before(async function () {
  await this.initBrowser(); // Ensure this refers to the CustomWorld instance
});

// Close the browser after all tests are done
AfterAll(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

// Set the default timeout for the tests
setDefaultTimeout(60 * 1000);
