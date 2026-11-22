# Web Automation Testing with Playwright

[![Playwright Tests](https://github.com/AlfaNashiha26/test-web-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/AlfaNashiha26/test-web-automation/actions/workflows/playwright.yml)

Repository ini berisi kumpulan script *End-to-End (E2E) Web Automation Testing* menggunakan **Playwright** dan **JavaScript** untuk menguji fungsionalitas utama situs latihan [SauceDemo](https://www.saucedemo.com/). Pengujian terintegrasi dengan **GitHub Actions** sehingga berjalan secara otomatis setiap kali ada pembaruan kode (`git push`).

---

## Struktur Direktori

```text
├── .github/
│   └── workflows/
│       └── playwright.yml          # Konfigurasi CI/CD GitHub Actions
├── tests/
│   ├── checkout.spec.js            # Skenario E2E alur belanja hingga checkout
│   ├── example.spec.js             # Contoh pengujian bawaan Playwright
│   ├── login-negative.spec.js      # Skenario pengujian negatif pada halaman login
│   └── login.spec.js               # Skenario pengujian positif pada halaman login
├── package.json                    # Daftar dependensi dan konfigurasi project
└── playwright.config.js            # Konfigurasi utama Playwright



## Detail Test Cases

Seluruh skenario pengujian dikelompokkan secara modular ke dalam 3 file pengujian sesuai fitur dan jenis skenarionya:

### 1. Login Positive (`tests/login.spec.js`)
| Test ID | Nama Test Case | Langkah Pengujian (Test Steps) | Data Uji (Test Data) | Ekspektasi Hasil (Expected Result) |
| :--- | :--- | :--- | :--- | :--- |
| **TC-LOGIN-01** | Positif: Login berhasil dengan kredensial valid | 1. Buka halaman `https://www.saucedemo.com/`<br>2. Isi kolom `#user-name`<br>3. Isi kolom `#password`<br>4. Klik tombol `#login-button` | Username: `standard_user`<br>Password: `secret_sauce` | Berhasil masuk dan URL halaman berubah ke `https://www.saucedemo.com/inventory.html`. |

### 2. Login Negative (`tests/login-negative.spec.js`)
| Test ID | Nama Test Case | Langkah Pengujian (Test Steps) | Data Uji (Test Data) | Ekspektasi Hasil (Expected Result) |
| :--- | :--- | :--- | :--- | :--- |
| **TC-NEG-01** | Negatif 1: Login gagal jika password salah | 1. Buka halaman `https://www.saucedemo.com/`<br>2. Isi kolom `#user-name`<br>3. Isi kolom `#password` dengan password salah<br>4. Klik tombol `#login-button` | Username: `standard_user`<br>Password: `password_salah_123` | Kotak error (`[data-test="error"]`) muncul dan menampilkan teks *"Username and password do not match"*. |
| **TC-NEG-02** | Negatif 2: Login gagal jika username dan password kosong | 1. Buka halaman `https://www.saucedemo.com/`<br>2. Biarkan `#user-name` dan `#password` kosong<br>3. Klik tombol `#login-button` | Username: *(kosong)*<br>Password: *(kosong)* | Kotak error (`[data-test="error"]`) muncul dan menampilkan teks *"Username is required"*. |
| **TC-NEG-03** | Negatif 3: Login gagal menggunakan akun yang terkunci | 1. Buka halaman `https://www.saucedemo.com/`<br>2. Isi kolom `#user-name` dengan akun terkunci<br>3. Isi kolom `#password`<br>4. Klik tombol `#login-button` | Username: `locked_out_user`<br>Password: `secret_sauce` | Kotak error (`[data-test="error"]`) muncul dan menampilkan teks *"Sorry, this user has been locked out"*. |

### 3. End-to-End Checkout (`tests/checkout.spec.js`)
| Test ID | Nama Test Case | Langkah Pengujian (Test Steps) | Data Uji (Test Data) | Ekspektasi Hasil (Expected Result) |
| :--- | :--- | :--- | :--- | :--- |
| **TC-E2E-01** | E2E: Pilih produk hingga selesai checkout | 1. Login dengan akun valid<br>2. Klik `#add-to-cart-sauce-labs-backpack`<br>3. Verifikasi badge keranjang bernilai `1`<br>4. Klik ikon keranjang (`.shopping_cart_link`) lalu klik `#checkout`<br>5. Isi form `#first-name`, `#last-name`, `#postal-code` lalu klik `#continue`<br>6. Klik tombol `#finish` | User: `standard_user` / `secret_sauce`<br>Produk: *Sauce Labs Backpack*<br>First Name: `Alfa`<br>Last Name: `Nashiha`<br>Postal Code: `10110` | Pesanan berhasil diproses dan muncul pesan konfirmasi pada `.complete-header` bertuliskan *"Thank you for your order!"*. |