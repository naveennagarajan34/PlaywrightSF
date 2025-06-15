# Playwright Automation Framework with Cucumber

This project uses [Playwright](https://playwright.dev/) and [Cucumber.js](https://github.com/cucumber/cucumber-js) for end-to-end testing using BDD-style feature files.

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- Git (optional but recommended)
- VS Code or any modern code editor

## 📦 Installation

After cloning the repository:

bash
git clone https://github.com/your-repo/playwright-automation.git
cd playwright-automation
npm install

Install Playwright browsers (only needed once):
npx playwright install

Open Playwright Inspector for debugging:
PWDEBUG=1 npx cucumber-js

To run all tests:

bash
Copy
Edit
npx cucumber-js
To run a specific feature file:

bash
Copy
Edit
npx cucumber-js features/login.feature
