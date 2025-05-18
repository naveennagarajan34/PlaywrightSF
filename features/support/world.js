const { setWorldConstructor } = require('@cucumber/cucumber');
const browserManager = require('./browserManager');

class CustomWorld {
  constructor() {
    this.page = null;
  }

  async createNewTab() {
    this.page = await browserManager.newTab();
  }
}

setWorldConstructor(CustomWorld);
