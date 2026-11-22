const { test, expect } = require('@playwright/test');

test('Negatif 1: Login gagal jika password salah', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'password_salah_123');
  await page.click('#login-button');

  const errorBox = page.locator('[data-test="error"]');
  await expect(errorBox).toBeVisible();
  await expect(errorBox).toContainText('Username and password do not match');
});

test('Negatif 2: Login gagal jika username dan password kosong', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.click('#login-button');

  const errorBox = page.locator('[data-test="error"]');
  await expect(errorBox).toBeVisible();
  await expect(errorBox).toContainText('Username is required');
});

test('Negatif 3: Login gagal menggunakan akun yang terkunci (locked_out_user)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const errorBox = page.locator('[data-test="error"]');
  await expect(errorBox).toBeVisible();
  await expect(errorBox).toContainText('Sorry, this user has been locked out');
});