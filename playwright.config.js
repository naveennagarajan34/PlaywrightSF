const { defineConfig } = require("@playwright/test");

const config = defineConfig({
  timeout: 60 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  reporter: "html",
  use: {
    actionTimeout: 20000,
    navigationTimeout: 15000,
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace: "retain-on-failure",

    // ✅ Use saved session state
    storageState: "storageState.json",
  },
});

module.exports = config;
