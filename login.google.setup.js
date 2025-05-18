const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });

  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto("https://qa.scriptureforge.org"); // Replace with your actual app URL

  console.log("👉 Please log in via Paratext manually...");

  await page.waitForTimeout(120000); // 60 sec for manual login

  await context.storageState({ path: "storageState.json" }); // ✅ Save session
  console.log("✅ Session saved to storageState.json");

  await browser.close();
})();
