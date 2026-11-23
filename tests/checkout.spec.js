const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('E2E: Pilih produk hingga selesai checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Tambah barang ke keranjang & cek badge
  await checkoutPage.addBackpackToCart();
  await expect(checkoutPage.cartBadge).toHaveText('1');

  // 3. Checkout & isi data pengiriman
  await checkoutPage.goToCheckout();
  await checkoutPage.fillShippingInfo('Alfa', 'Nashiha', '10110');

  // 4. Selesaikan pesanan & verifikasi
  await checkoutPage.finishOrder();
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});