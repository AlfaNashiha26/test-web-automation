const { test, expect } = require('@playwright/test');

test('Automation Login ke SauceDemo', async ({ page }) => {
  // 1. Buka website target
  await page.goto('https://www.saucedemo.com/');

  // 2. Isi username dan password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // 3. Klik tombol Login
  await page.click('#login-button');

  // 4. Pastikan halaman berpindah ke dashboard produk
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
