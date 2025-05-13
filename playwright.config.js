// playwright.config.js

const config = {
  timeout: 60 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  reporter: "html",
  use: {
    actionTimeout: 10000, // Default timeout for each action (10 seconds)
    navigationTimeout: 15000,
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace: "retain-on-failure", // off, on, retain-on-failure
  },
};
module.exports = config;
