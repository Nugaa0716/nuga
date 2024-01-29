Untuk menambahkan gambar pada situs web Jekyll, Anda dapat menggunakan sintaks Markdown atau HTML. Berikut adalah cara menggunakan Markdown untuk menambahkan gambar:
1. Persiapkan Gambar:
Pastikan gambar yang ingin Anda tambahkan sudah ada dalam direktori proyek Jekyll Anda atau di direktori yang sesuai.

2. Gunakan Markdown:
Gunakan sintaks Markdown untuk gambar dalam file Markdown (seperti file berakhir dengan .md). Gunakan tag ![Alt Text](URL_Gambar) di mana "Alt Text" adalah teks deskripsi alternatif untuk gambar, dan "URL_Gambar" adalah URL atau path relatif ke gambar.
  
    ![Alt Text](/path/to/your/image.jpg)
    Jika gambar berada di dalam direktori assets/images, Anda dapat menulis sesuai dengan struktur proyek Anda:

    ![Alt Text](/assets/images/your_image.jpg)
   
4. Sesuaikan URL Base (Opsional):
Jika proyek Jekyll Anda memiliki base URL (misalnya, jika situs Anda ditempatkan di sub-direktori), pastikan untuk memperhitungkan base URL ini dalam URL gambar Anda.
Contoh, jika situs Anda memiliki base URL /blog:

   ![Alt Text](/blog/assets/images/your_image.jpg)
   
6. Jalankan Jekyll Locally (Opsional):
Untuk memeriksa tampilan gambar secara lokal, jalankan server Jekyll dengan perintah:

    bundle exec jekyll serve
    Kemudian, buka browser dan akses http://localhost:4000 atau URL yang ditampilkan oleh Jekyll.
   
5. Perbarui dan Deploy:
Setelah memastikan bahwa gambar ditambahkan dengan benar dan tampil dengan baik secara lokal, perbarui proyek Anda ke repositori dan deploy situs web Jekyll Anda seperti biasa. Jika menggunakan layanan hosting seperti GitHub Pages, perubahan akan otomatis diterapkan setelah melakukan push ke repositori.

Anda juga dapat menggunakan sintaks HTML jika Anda memilih untuk menambahkan gambar dengan elemen HTML img. Contohnya:
    <img src="/path/to/your/image.jpg" alt="Alt Text">
Dengan mengikuti langkah-langkah ini, Anda seharusnya dapat dengan mudah menambahkan gambar ke halaman-halaman Jekyll Anda. Jika mengalami masalah, pastikan untuk memeriksa dokumentasi resmi Jekyll atau bertanya lebih lanjut.





