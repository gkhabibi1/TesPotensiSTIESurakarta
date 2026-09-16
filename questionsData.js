// questionsData.js
export const quizConfig = {
  title: "Auditor Challenge: Tes Ketelitian Tingkat Lanjut",
  durationMinutes: 20,
  institution: "STIE Surakarta"
};

export const questions = [
  // --- BAGIAN 1: MATRIKS KONSENTRASI VISUAL ---
  {
    id: 1,
    section: "Bagian 1: Matriks Visual",
    type: "matrix_count",
    instruction: "Perhatikan matriks 400 angka (20x20) berikut:",
    matrixData: [
      [8, 3, 7, 9, 2, 5, 1, 4, 7, 6, 3, 9, 8, 5, 2, 7, 1, 4, 9, 6],
      [4, 9, 1, 5, 8, 3, 7, 2, 6, 9, 1, 4, 5, 7, 8, 2, 3, 6, 5, 1],
      [7, 2, 6, 8, 4, 9, 1, 5, 3, 8, 7, 2, 9, 6, 4, 1, 5, 8, 3, 7],
      [5, 8, 3, 1, 6, 7, 2, 9, 4, 5, 8, 3, 1, 9, 7, 2, 6, 4, 1, 8],
      [9, 4, 8, 2, 5, 1, 6, 3, 7, 2, 9, 4, 8, 5, 1, 6, 3, 7, 2, 9],
      [2, 6, 5, 7, 9, 4, 8, 1, 5, 3, 6, 7, 2, 9, 4, 1, 8, 5, 9, 3],
      [1, 7, 9, 4, 3, 8, 5, 6, 2, 1, 7, 9, 4, 3, 8, 5, 6, 2, 1, 7],
      [6, 1, 4, 3, 7, 2, 9, 8, 1, 6, 4, 3, 7, 2, 9, 8, 1, 6, 4, 3],
      [3, 5, 2, 9, 1, 6, 4, 7, 8, 9, 5, 2, 6, 1, 4, 7, 8, 9, 5, 2],
      [8, 9, 7, 6, 2, 5, 3, 4, 9, 8, 1, 6, 2, 5, 3, 4, 9, 8, 7, 6],
      [4, 2, 9, 1, 8, 7, 5, 3, 6, 1, 9, 4, 8, 2, 7, 5, 3, 6, 1, 9],
      [7, 5, 1, 8, 3, 9, 2, 4, 5, 7, 2, 8, 1, 9, 6, 3, 4, 5, 8, 2],
      [9, 1, 6, 4, 7, 2, 8, 5, 3, 9, 4, 1, 6, 7, 2, 8, 5, 3, 9, 4],
      [2, 8, 3, 5, 9, 1, 4, 6, 7, 2, 5, 8, 3, 9, 1, 4, 6, 7, 2, 5],
      [6, 4, 8, 2, 1, 5, 9, 7, 3, 6, 8, 4, 2, 1, 5, 9, 7, 3, 6, 8],
      [1, 9, 5, 7, 4, 8, 6, 2, 9, 1, 7, 5, 4, 8, 6, 2, 9, 1, 7, 5],
      [5, 3, 2, 9, 6, 4, 1, 8, 7, 5, 9, 3, 2, 6, 4, 1, 8, 7, 5, 9],
      [3, 7, 4, 1, 5, 9, 2, 8, 6, 3, 1, 7, 4, 5, 9, 2, 8, 6, 3, 1],
      [8, 6, 9, 3, 2, 7, 5, 1, 4, 8, 3, 6, 9, 2, 7, 5, 1, 4, 8, 6],
      [9, 5, 1, 6, 8, 3, 7, 2, 4, 9, 6, 5, 1, 8, 3, 7, 2, 4, 9, 5]
    ],
    question: "Hitung dengan teliti, ada berapa banyak angka '5' di seluruh matriks tersebut?",
    inputType: "number",
    correctAnswer: 36
  },
  {
    id: 2,
    section: "Bagian 1: Matriks Visual",
    type: "matrix_pattern",
    question: "Berapa kali kombinasi angka '7 dan 2' muncul berdampingan persis (7 2) secara horizontal dari kiri ke kanan?",
    inputType: "number",
    correctAnswer: 16
  },
  {
    id: 3,
    section: "Bagian 1: Matriks Visual",
    type: "matrix_pattern",
    question: "Berapa kali kombinasi 3 angka berurutan '8 5 3' muncul secara horizontal dari kiri ke kanan?",
    inputType: "number",
    correctAnswer: 2
  },
  {
    id: 4,
    section: "Bagian 1: Matriks Visual",
    type: "matrix_sum",
    question: "Lihat Kolom ke-5 (dari kiri) dari atas ke bawah (dimulai dari angka 2, 8, 4, 6...). Berapa hasil penjumlahan seluruh angka di kolom tersebut?",
    inputType: "number",
    correctAnswer: 95
  },

  // --- BAGIAN 2: REKONSILIASI DATA ---
  {
    id: 5,
    section: "Bagian 2: Rekonsiliasi Data",
    type: "reconciliation",
    instruction: "Periksa tabel pencocokan 30 transaksi berikut. Temukan 5 transaksi yang nominalnya BERBEDA antara Data Internal dan Rekening Bank.",
    tableData: [
      { no: 1, trx: "TRX-2001-A", internal: "Rp 124.500.000", bank: "Rp 124.500.000" },
      { no: 2, trx: "TRX-2002-B", internal: "Rp 87.950.500", bank: "Rp 87.950.500" },
      { no: 3, trx: "TRX-2003-C", internal: "Rp 34.120.000", bank: "Rp 34.120.000" },
      { no: 4, trx: "TRX-2004-D", internal: "Rp 175.550.000", bank: "Rp 175.550.000" },
      { no: 5, trx: "TRX-2005-E", internal: "Rp 99.001.000", bank: "Rp 99.001.000" },
      { no: 6, trx: "TRX-2006-F", internal: "Rp 45.678.900", bank: "Rp 45.687.900" }, // Beda
      { no: 7, trx: "TRX-2007-G", internal: "Rp 89.432.100", bank: "Rp 89.432.100" },
      { no: 8, trx: "TRX-2008-H", internal: "Rp 21.000.500", bank: "Rp 21.000.500" },
      { no: 9, trx: "TRX-2009-I", internal: "Rp 50.000.120", bank: "Rp 50.000.120" },
      { no: 10, trx: "TRX-2010-J", internal: "Rp 68.700.000", bank: "Rp 68.700.000" },
      { no: 11, trx: "TRX-2011-K", internal: "Rp 34.900.000", bank: "Rp 34.900.000" },
      { no: 12, trx: "TRX-2012-L", internal: "Rp 12.876.500", bank: "Rp 12.876.500" },
      { no: 13, trx: "TRX-2013-M", internal: "Rp 12.340.000", bank: "Rp 12.430.000" }, // Beda
      { no: 14, trx: "TRX-2014-N", internal: "Rp 77.800.200", bank: "Rp 77.800.200" },
      { no: 15, trx: "TRX-2015-O", internal: "Rp 41.050.000", bank: "Rp 41.050.000" },
      { no: 16, trx: "TRX-2016-P", internal: "Rp 93.300.750", bank: "Rp 93.300.750" },
      { no: 17, trx: "TRX-2017-Q", internal: "Rp 18.500.000", bank: "Rp 18.500.000" },
      { no: 18, trx: "TRX-2018-R", internal: "Rp 50.000.500", bank: "Rp 50.000.050" }, // Beda
      { no: 19, trx: "TRX-2019-S", internal: "Rp 22.440.100", bank: "Rp 22.440.100" },
      { no: 20, trx: "TRX-2020-T", internal: "Rp 36.600.000", bank: "Rp 36.600.000" },
      { no: 21, trx: "TRX-2021-U", internal: "Rp 81.120.900", bank: "Rp 81.120.900" },
      { no: 22, trx: "TRX-2022-V", internal: "Rp 55.400.000", bank: "Rp 55.400.000" },
      { no: 23, trx: "TRX-2023-W", internal: "Rp 70.005.000", bank: "Rp 70.005.000" },
      { no: 24, trx: "TRX-2024-X", internal: "Rp 99.100.000", bank: "Rp 99.010.000" }, // Beda
      { no: 25, trx: "TRX-2025-Y", internal: "Rp 14.560.800", bank: "Rp 14.560.800" },
      { no: 26, trx: "TRX-2026-Z", internal: "Rp 63.300.000", bank: "Rp 63.300.000" },
      { no: 27, trx: "TRX-2027-A", internal: "Rp 48.950.250", bank: "Rp 48.950.250" },
      { no: 28, trx: "TRX-2028-B", internal: "Rp 82.200.000", bank: "Rp 82.200.000" },
      { no: 29, trx: "TRX-2029-C", internal: "Rp 15.250.550", bank: "Rp 15.250.505" }, // Beda
      { no: 30, trx: "TRX-2030-D", internal: "Rp 39.900.000", bank: "Rp 39.900.000" }
    ],
    question: "Pilih 5 Nomor Urut transaksi yang memiliki selisih/nominal tidak cocok:",
    inputType: "multiselect",
    correctAnswer: [6, 13, 18, 24, 29]
  },

  // --- BAGIAN 3: AUDIT FORMAT FAKTUR ---
  {
    id: 6,
    section: "Bagian 3: Audit Faktur",
    type: "format_validation",
    rules: [
      "Harus diawali dengan 'INV-'",
      "Diikuti 4 digit angka tahun (contoh: 2024)",
      "Diikuti garis miring dan 3 huruf kapital (contoh: /AKT)",
      "Diakhiri garis miring dan kata 'STIE' (contoh: /STIE)"
    ],
    invoiceList: [
      "1. INV-2024/AKT/STIE", "2. INV/2023/KEU/STIE", "3. INV-2024/MNG/STIE",
      "4. INV-24/AKT/STIE", "5. INV-2022/TAX/STIE", "6. IN-2024/AKT/STIE",
      "7. INV-2024/PRJ/STIE", "8. INV-2021/HRD/STIE", "9. INV-2024/akt/STIE",
      "10. INV-2024/BKS/STIE", "11. INV-2024/MKT/STIE.", "12. INV-2020/AUD/STIE",
      "13. INV-2024/OPR/STEI", "14. INV-2019/FIN/STIE", "15. INV-2024/IT/STIE",
      "16. INV-2024/SDM/STIE", "17. INV-2025/MKT/STIE", "18. INV-2024-BIS/STIE",
      "19. INV-2024/LOG/STIE", "20. IVN-2024/KEU/STIE", "21. INV-2024/ACC/STIE",
      "22. INV-2024/HUKUM/STIE", "23. INV-2024/TAX/STIE", "24. INV-2024/MNG/STI",
      "25. INV-2024/PRD/STIE", "26. inv-2024/AKT/STIE", "27. INV-2024/KAS/STIE",
      "28. INV-2023/MKT/STIE", "29. INV-2024/OPS/STIE", "30. INV-2024/AKT/STIE"
    ],
    question: "Berdasarkan 4 aturan baku di atas, berapa total jumlah nomor faktur yang BENAR/VALID?",
    inputType: "number",
    correctAnswer: 18
  }
];

// Logika Scoring & Penjurusan Otomatis
export const evaluateResult = (score) => {
  if (score >= 5) {
    return {
      tier: "The Natural Auditor",
      recommendedMajor: "S1 Akuntansi - STIE Surakarta",
      badge: "Tingkat Ketelitian Elit",
      message: "Luar biasa! Ketelitian dan ketahanan visualmu berada di level teratas. Mengelola ratusan angka rumit tanpa kehilangan fokus adalah bakat alami seorang auditor dan analis keuangan andal. Jurusan S1 Akuntansi STIE Surakarta adalah wadah terbaik untuk memaksimalkan potensimu."
    };
  } else if (score >= 3) {
    return {
      tier: "The Balanced Professional",
      recommendedMajor: "S1 Akuntansi / S1 Manajemen (Konsentrasi Keuangan)",
      badge: "Ketelitian di Atas Rata-rata",
      message: "Kerja bagus! Kamu mampu memproses data rumit dengan cukup baik. Kamu memiliki fleksibilitas tinggi: bisa memilih S1 Akuntansi untuk mengasah detail analitismu atau S1 Manajemen STIE Surakarta untuk memadukan analisis angka dengan kemampuan manajerial."
    };
  } else {
    return {
      tier: "The Big-Picture Strategist",
      recommendedMajor: "S1 Manajemen (Marketing, SDM, atau Bisnis) - STIE Surakarta",
      badge: "Pemikir Makro & Strategis",
      message: "Hasilmu menunjukkan bahwa otakmu tidak menyukai rutinitas data mikro yang berulang, melainkan lebih unggul dalam berpikir strategis, melihat peluang besar, komunikasi, dan kepemimpinan. Calon manajer dan eksekutif bisnis hebat berawal dari karakter ini. Tempat terbaik untukmu adalah S1 Manajemen STIE Surakarta!"
    };
  }
};
