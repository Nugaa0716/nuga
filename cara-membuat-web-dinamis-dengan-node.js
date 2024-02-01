1. Instalasi Node.js:
Pastikan Anda telah menginstal Node.js di sistem Anda. Anda dapat mengunduhnya dari situs resmi Node.js.

2. Buat Proyek Baru:
Buka terminal atau command prompt, lalu buat direktori untuk proyek Anda dan masuk ke dalamnya. Jalankan perintah untuk menginisialisasi proyek Node.js:

      mkdir nama-proyek
      cd nama-proyek
      npm init
Isi informasi yang diminta, atau tekan Enter untuk menggunakan nilai default.

3. Instalasi Express:
Instal Express sebagai dependensi proyek dengan menggunakan perintah berikut:

      npm install express --save

4. Buat File Utama (Contoh: app.js):
Buat file utama aplikasi, misalnya app.js. Inisialisasikan Express dan buat server sederhana:

      const express = require('express');
      const app = express();
      const port = 3000;
      
      app.get('/', (req, res) => {
        res.send('Hello, World!');
      });
      
      app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
      });

5. Jalankan Aplikasi:
Simpan perubahan pada file app.js dan jalankan aplikasi dengan perintah:


      node app.js
Buka browser dan akses http://localhost:3000 untuk melihat pesan "Hello, World!".

6. Menangani Rute dan Logika Bisnis:
Tambahkan rute dan logika bisnis sesuai kebutuhan aplikasi Anda. Misalnya:

      app.get('/about', (req, res) => {
        res.send('Tentang Kami');
      });
Buka http://localhost:3000/about untuk melihat pesan "Tentang Kami".

7. Penggunaan Template Engine (Opsional):
Jika Anda ingin membuat halaman HTML dinamis, Anda dapat menggunakan template engine seperti EJS. Install EJS dan konfigurasikan Express untuk menggunakannya:

      npm install ejs --save
Di dalam app.js:

      app.set('view engine', 'ejs');
      
      app.get('/dynamic', (req, res) => {
        res.render('dynamic', { message: 'Pesan dinamis dari server' });
      });
Buat file views/dynamic.ejs:

      <!-- views/dynamic.ejs -->
      <html>
        <body>
          <h1><%= message %></h1>
        </body>
      </html>
Buka http://localhost:3000/dynamic untuk melihat halaman dengan pesan dinamis.
