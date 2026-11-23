class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Locator Katalog & Keranjang
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('#checkout');

    // Locator Form Pengiriman
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');

    // Locator Konfirmasi Akhir
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async goToCheckout() {
    await this.cartLink.click();
    await this.checkoutButton.click();
  }

  async fillShippingInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };