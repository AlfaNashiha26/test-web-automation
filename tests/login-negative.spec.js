const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginTestData = require('../data/login-data.json');

test.describe('Data-Driven: Skenario Login Negatif', () => {
  for (const data of loginTestData) {
    test(`${data.testId} - ${data.scenario}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(data.expectedError);
    });
  }
});