const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");


When('I click on the settings', async function () {
    await this.page.waitForTimeout(2000);
    await this.page.locator("//span[contains(text(),'Settings')]/../parent::a").click();
});

Then('I should be navigated to settings page', async function () {

});

When('I click on the source project field and select {string} as source', async function (source) {
    await expect(
        this.page.locator("input[role='combobox'][type='text']")
    ).toBeEnabled({ timeout: 15000 });
    await this.page.click("input[role='combobox'][type='text']");
    await this.page.fill("input[role='combobox'][type='text']", source);
    await this.page.locator(`mat-option span`).first().click();
    // console.log(source);
    await this.page.pause();
    await this.page.waitForTimeout(30000); // Wait for 3 seconds
})

When('I click on the Translation suggestions checkbox {string} suggestions', async function (feature) {
    const translationSuggestion = await this.page.locator("input[type='checkbox'][id='checkbox-translation-suggestions-input']");

    // console.log(await translationSuggestion.isChecked());
    if (feature === 'enable') {
        if (!(await translationSuggestion.isChecked())) {
            await translationSuggestion.click();
        } else {}
    } else {
         if (await translationSuggestion.isChecked()) {
            await translationSuggestion.click();
        } else {}
    }
    await this.page.pause();
})