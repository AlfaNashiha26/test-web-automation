\# Web Automation Testing with Playwright



Repository ini berisi kumpulan script \*End-to-End (E2E) Web Automation Testing\* menggunakan \*\*Playwright\*\* dan \*\*JavaScript\*\*, yang terintegrasi dengan \*\*GitHub Actions\*\* untuk eksekusi pengujian secara otomatis setiap kali ada pembaruan kode.



\---



\## Fitur \& Skenario Pengujian

\- \*\*Login Automation (`tests/login.spec.js`)\*\*: Menguji alur masuk (login) otomatis ke situs latihan \[SauceDemo](https://www.saucedemo.com/) dan memverifikasi pengalihan ke halaman katalog produk.

\- \*\*CI/CD Integration (`.github/workflows/playwright.yml`)\*\*: Menjalankan seluruh pengujian secara otomatis di server Linux setiap kali terjadi `git push` atau \*Pull Request\* ke branch `main`.



\---



\## Struktur Folder

```text

├── .github/

│   └── workflows/

│       └── playwright.yml   # Konfigurasi otomatisasi GitHub Actions

├── tests/

│   ├── example.spec.js      # Contoh pengujian bawaan Playwright

│   └── login.spec.js        # Script pengujian login otomatis

├── package.json             # Daftar dependensi project

└── playwright.config.js     # Konfigurasi utama Playwright

