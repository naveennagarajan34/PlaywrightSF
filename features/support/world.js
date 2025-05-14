const { setWorldConstructor } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const fs = require("fs");

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async initBrowser() {
    this.browser = await chromium.launch({ headless: false });
    const sessionExists = fs.existsSync("storageState.json");
    if (sessionExists) {
      try {
        this.context = await this.browser.newContext({
          storageState: "storageState.json",
        });
        this.page = await this.context.newPage();
        await this.page.goto("https://qa.scriptureforge.org");
        // Validate if session is still active
        if (
          await this.page.locator("text=LOG IN").isVisible({ timeout: 3000 })
        ) {
          console.log("Session expired — logging in again");
          await this.createNewSession();
        } else {
          console.log("Session valid — using existing session");
        }
      } catch (error) {
        console.log("Error validating session, logging in again");
        await this.createNewSession();
      }
    } else {
      await this.createNewSession();
    }
  }

  async createNewSession() {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto("https://qa.scriptureforge.org");

    // LOGIN FLOW (Use your exact working login flow here)
    await this.page.locator("a.mdl-button", { hasText: "LOG IN" }).click();
    await this.page
      .locator("div.auth0-lock-social-button-text", { hasText: "Paratext" })
      .click();
    await this.page.locator("input#email").fill("naveen.n@ecgroup-intl.com");
    await this.page.locator("//*[@id='password-group']/button").click();
    await this.page.waitForSelector(
      "//span[contains(text(),'Next')]/parent::button",
      { timeout: 15000 }
    );
    await this.page
      .locator("//span[contains(text(),'Next')]/parent::button")
      .click();
    await this.page.locator("input[type='password']").fill("naveT23LMN#23");
    await this.page
      .locator("//span[contains(text(),'Next')]/parent::button")
      .click();

    // Save session
    await this.context.storageState({ path: "storageState.json" });
    console.log("✅ New session saved");
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
