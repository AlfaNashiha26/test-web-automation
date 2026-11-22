const { test, expect } = require('@playwright/test');

test('E2E: Pilih produk hingga selesai checkout', async ({ page }) => {
  // 1. Login ke aplikasi
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Masukkan barang ke keranjang
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 3. Masuk ke keranjang dan mulai checkout
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // 4. Isi data pengiriman
  await page.fill('#first-name', 'Alfa');
  await page.fill('#last-name', 'Nashiha');
  await page.fill('#postal-code', '10110');
  await page.click('#continue');

  // 5. Konfirmasi dan verifikasi pesanan selesai
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});