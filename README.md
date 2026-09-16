# Auditor Challenge: Tes Ketelitian Tingkat Lanjut - STIE Surakarta

Aplikasi web **Auditor Challenge: Tes Ketelitian Tingkat Lanjut** untuk calon mahasiswa baru dan mahasiswa STIE Surakarta, dirancang dengan antarmuka Brutalist Modern Minimalist (Hitam, Putih, dan Neon Lime `#ddff00`).

## Fitur Utama

1. **Step 1: Registrasi Kandidat Auditor**
   - Nama Lengkap, NIM / Nomor Pendaftaran, dan Program Studi Peminatan Awal (S1 Akuntansi & S1 Manajemen).
   - Briefing ringkas ketentuan tes.

2. **Step 2: Pengerjaan Kuis Tantangan Ketelitian (6 Soal, 20 Menit)**
   - **Timer Countdown 20 Menit** otomatis dengan peringatan visual ketika waktu tersisa <= 3 menit.
   - **Navigasi Stepper Cepat (1 - 6)**: Memungkinkan kandidat berpindah antar-soal dengan indikator status tersimpan.
   - **Bagian 1: Matriks Visual (Soal 1 - 4)**
     - Menampilkan matriks 400 angka (20 baris × 20 kolom) dalam grid monospace rapi dengan penomoran baris & kolom untuk memudahkan pemindaian visual.
     - Soal 1: Menghitung frekuensi kemunculan angka '5'.
     - Soal 2: Menghitung kemunculan pola berdampingan '7 2'.
     - Soal 3: Menghitung kemunculan pola 3 angka berurutan '8 5 3'.
     - Soal 4: Penjumlahan seluruh angka pada Kolom ke-5 (disertai penanda visual kolom).
   - **Bagian 2: Rekonsiliasi Data (Soal 5)**
     - Tabel komparasi 30 transaksi antara Buku Internal dan Rekening Koran Bank.
     - Multi-select interaktif dengan proteksi kuota maksimal 5 pilihan item yang memiliki selisih nominal.
   - **Bagian 3: Audit Format Faktur (Soal 6)**
     - Kartu panduan 4 aturan baku nomor faktur (`INV-YYYY/DIV/STIE`).
     - Grid 30 nomor faktur untuk diaudit secara teliti.

3. **Step 3: Kartu Hasil Evaluasi & Rekomendasi Jurusan (Shareable Card)**
   - Perhitungan skor ketelitian otomatis (0 - 6).
   - Evaluasi tier & rekomendasi jurusan STIE Surakarta menggunakan fungsi `evaluateResult(score)`:
     - **Skor 5 - 6**: *The Natural Auditor* → **S1 Akuntansi - STIE Surakarta** (Tingkat Ketelitian Elit).
     - **Skor 3 - 4**: *The Balanced Professional* → **S1 Akuntansi / S1 Manajemen (Konsentrasi Keuangan)** (Ketelitian di Atas Rata-rata).
     - **Skor 0 - 2**: *The Big-Picture Strategist* → **S1 Manajemen (Marketing, SDM, atau Bisnis) - STIE Surakarta** (Pemikir Makro & Strategis).
   - **Auditor Log**: Lembar transparansi evaluasi setiap butir soal (Jawaban Kandidat vs Kunci Valid).
   - **Download Kartu Hasil PNG HD** (html2canvas).

## Struktur File
- `index.html`: Struktur antarmuka dan modal konfirmasi.
- `style.css`: Desain responsif Brutalist Modern dengan tema Hitam, Putih, dan Neon Lime.
- `questionsData.js`: Data soal, konfigurasi durasi, dan fungsi `evaluateResult(score)`.
- `app.js`: Logika aplikasi, timer 20 menit, kontrol interaktif tabel/matriks, scoring, dan rendering hasil.
