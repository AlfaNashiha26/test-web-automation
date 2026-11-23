class LoginPage {
  constructor(page) {
    this.page = page;
    // Menyimpan seluruh locator halaman Login di satu tempat
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Aksi membuka halaman utama
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Aksi melakukan proses login
  async login(username, password) {
    if (username) {
      await this.usernameInput.fill(username);
    }
    if (password) {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };