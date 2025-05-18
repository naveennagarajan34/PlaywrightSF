const { chromium } = require('@playwright/test');
const fs = require('fs');

let browser;
let context;

module.exports = {
  async launchBrowser() {
    if (!browser) {
      browser = await chromium.launch({ headless: false, slowMo: 50 });
      const storage = JSON.parse(fs.readFileSync('storageState.json', 'utf-8'));
      context = await browser.newContext({ storageState: storage });
    }
    return context;
  },

  async newTab() {
    if (!context) {
      throw new Error('Context not initialized. Call launchBrowser first.');
    }
    return await context.newPage();
  },

  getContext() {
    return context;
  },

  async closeBrowser() {
    if (browser) {
      await browser.close();
    }
  },
};
