const { setWorldConstructor } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const fs = require("fs");

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  // Initialize the browser and session
  async initBrowser() {
    this.browser = await chromium.launch({ headless: false });

    // Check if session file exists
    const sessionExists = fs.existsSync("storageState.json");

    if (sessionExists) {
      try {
        // Load saved session
        this.context = await this.browser.newContext({
          storageState: "storageState.json",
        });
        this.page = await this.context.newPage();
        await this.page.goto("https://qa.scriptureforge.org/");

        // Check if user is logged in by verifying the presence of a login button
        const loginButton = await this.page.locator("a.mdl-button", {
          hasText: "LOG IN",
        });

        // If login button is visible, it means the session has expired or is invalid
        if (await loginButton.isVisible()) {
          console.log("Session expired or invalid, logging in again...");
          await this.createNewSession(); // Perform login and save session
        } else {
          console.log("Session is valid, using existing session.");
        }
      } catch (error) {
        console.log("Error loading session, logging in again...");
        await this.createNewSession();
      }
    } else {
      // If session does not exist, perform login and save session
      console.log("No saved session, logging in...");
      await this.createNewSession();
    }
  }

  // Create a new session (login process)
  async createNewSession() {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto("https://qa.scriptureforge.org");

    // Perform login (make sure this is correct for your login flow)
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
    await this.page.waitForLoadState("load");

    // Save session after login
    await this.context.storageState({ path: "storageState.json" });
    console.log("✅ New session saved");
    // await this.browser.close();
    // console.log("Browser closed after saving session.");
  }

  // Close the browser after tests
  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }
}

// Make CustomWorld available to the cucumber framework
setWorldConstructor(CustomWorld);
