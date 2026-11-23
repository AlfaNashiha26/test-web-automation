const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Hybrid Testing: Bypass Login & Pre-populate Cart via Session Injection', () => {
  test.beforeEach(async ({ context, page }) => {
    // 1. Suntikkan Cookie autentikasi langsung ke browser (bypass form login UI)
    await context.addCookies([
      {
        name: 'session-username',
        value: 'standard_user',
        domain: 'www.saucedemo.com',
        path: '/',
      },
    ]);

    // 2. Suntikkan data keranjang (ID produk 4 = Sauce Labs Backpack) ke localStorage sebelum halaman dimuat
    await page.addInitScript(() => {
      window.localStorage.setItem('cart-contents', '[4]');
    });
  });

  test('TC-HYBRID-01 - Langsung membuka halaman keranjang & checkout tanpa login manual', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    // Langsung buka halaman keranjang tanpa melewati halaman login maupun klik "Add to cart"
    await page.goto('https://www.saucedemo.com/cart.html');

    // Verifikasi sesi login aktif dan badge keranjang otomatis bernilai 1
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(checkoutPage.cartBadge).toHaveText('1');

    // Langsung lanjutkan proses checkout
    await checkoutPage.checkoutButton.click();
    await checkoutPage.fillShippingInfo('Alfa', 'Nashiha', '10110');
    await checkoutPage.finishOrder();

    // Verifikasi pesanan selesai
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});