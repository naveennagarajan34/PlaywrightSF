const { chromium } = require("@playwright/test");
const fs = require("fs");

let browser;
let context;

module.exports = {
  async launchBrowser() {
    if (!browser) {
      console.log("🟢 Launching browser...");
      browser = await chromium.launch({ headless: false, slowMo: 50 });

      // Load storage state from file
      const storage = JSON.parse(fs.readFileSync("storageState.json", "utf-8"));
      context = await browser.newContext({ storageState: storage });
      console.log("✅ Browser loaded with context from storageState.json");
    }
    return context;
  },

  async newTab() {
    if (!context) {
      throw new Error("❌ Context not initialized. Call launchBrowser first.");
    }
    return await context.newPage();
  },

  getContext() {
    return context;
  },

  async closeBrowser() {
    if (browser) {
      await browser.close();
      browser = null;
    } else {
      console.warn("⚠️ Browser was already closed or never launched.");
    }
  },
};
