// =========================================================================
// AUDITOR CHALLENGE: TES KETELITIAN TINGKAT LANJUT - STIE SURAKARTA
// =========================================================================

// Fallback data questionsData jika running via direct file:// protocol
window.__inlineQuestionsData = {
  quizConfig: {
    title: "Auditor Challenge: Tes Ketelitian Tingkat Lanjut",
    durationMinutes: 20,
    institution: "STIE Surakarta"
  },
  questions: [
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
  ],
  evaluateResult: (score) => {
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
  }
};

// =========================================================================
// INISIALISASI DAN CORE LOGIC APLIKASI
// =========================================================================
window.initAuditorChallenge = function(dataPackage) {
  if (window.__appInitialized) return;
  window.__appInitialized = true;

  const quizConfig = dataPackage.quizConfig || window.__inlineQuestionsData.quizConfig;
  const questions = dataPackage.questions || window.__inlineQuestionsData.questions;
  const evaluateResult = dataPackage.evaluateResult || window.__inlineQuestionsData.evaluateResult;

  // Matrix reference data (Questions 1 to 4 share the same 20x20 matrix)
  const sharedMatrixData = questions[0].matrixData;

  // APP STATE
  let currentUser = { name: "", nim: "", prodi: "" };
  let currentQuestionIndex = 0;
  // userAnswers: id -> answer (number string or array of numbers for Q5)
  let userAnswers = {};
  let totalTimeSeconds = (quizConfig.durationMinutes || 20) * 60;
  let remainingSeconds = totalTimeSeconds;
  let timerInterval = null;
  let startTime = null;
  let finishTime = null;

  // DOM ELEMENTS
  const mainContainer = document.getElementById("main-container");
  const stepReg = document.getElementById("step-registration");
  const stepQuiz = document.getElementById("step-quiz");
  const stepResult = document.getElementById("step-result");
  const studentForm = document.getElementById("student-form");

  const quizSectionBadge = document.getElementById("quiz-section-badge");
  const quizProgressText = document.getElementById("quiz-progress-text");
  const timerText = document.getElementById("timer-text");
  const timerBox = document.getElementById("timer-box");
  const stepperNav = document.getElementById("stepper-nav");
  const progressBarFill = document.getElementById("progress-bar-fill");

  const instructionWrapper = document.getElementById("instruction-wrapper");
  const instructionText = document.getElementById("instruction-text");
  const dynamicContentSlot = document.getElementById("dynamic-content-slot");
  const qNumberPill = document.getElementById("q-number-pill");
  const questionText = document.getElementById("question-text");
  const inputContainer = document.getElementById("input-container");

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnFinish = document.getElementById("btn-finish");
  const navAnsweredStatus = document.getElementById("nav-answered-status");

  // MODAL CONFIRMATION
  const confirmModal = document.getElementById("confirm-modal");
  const modalSummaryText = document.getElementById("modal-summary-text");
  const btnModalCancel = document.getElementById("btn-modal-cancel");
  const btnModalConfirm = document.getElementById("btn-modal-confirm");

  // RESULT ELEMENTS
  const resName = document.getElementById("res-name");
  const resNimProdi = document.getElementById("res-nim-prodi");
  const resTimeSpent = document.getElementById("res-time-spent");
  const resScoreValue = document.getElementById("res-score-value");
  const resAccuracyPct = document.getElementById("res-accuracy-pct");
  const resBadgePill = document.getElementById("res-badge-pill");
  const resTierTitle = document.getElementById("res-tier-title");
  const resRecommendedMajor = document.getElementById("res-recommended-major");
  const resEvaluationMessage = document.getElementById("res-evaluation-message");
  const breakdownGrid = document.getElementById("breakdown-grid");
  const btnDownload = document.getElementById("btn-download");
  const btnRestart = document.getElementById("btn-restart");

  // -----------------------------------------------------------------------
  // STEP 1: REGISTRASI & MULAI
  // -----------------------------------------------------------------------
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentUser.name = document.getElementById("student-name").value.trim();
    currentUser.nim = document.getElementById("student-nim").value.trim();
    currentUser.prodi = document.getElementById("student-prodi").value;

    if (!currentUser.name || !currentUser.nim || !currentUser.prodi) {
      alert("Harap lengkapi semua kolom data diri terlebih dahulu.");
      return;
    }

    // Switch views
    stepReg.classList.add("hidden");
    stepQuiz.classList.remove("hidden");
    mainContainer.classList.add("wide-container");

    // Initialize state
    currentQuestionIndex = 0;
    userAnswers = {};
    remainingSeconds = totalTimeSeconds;
    startTime = new Date();

    buildStepper();
    startTimer();
    renderQuestion(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // -----------------------------------------------------------------------
  // TIMER COUNTDOWN (20 MENIT)
  // -----------------------------------------------------------------------
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();

      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("⏱️ Waktu pengerjaan 20 menit telah habis! Jawaban Anda akan otomatis dikumpulkan.");
        finishQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, remainingSeconds) / 60);
    const secs = Math.max(0, remainingSeconds) % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    timerText.innerText = formatted;

    // Visual warning when <= 3 minutes left
    if (remainingSeconds <= 180) {
      timerBox.classList.add("timer-warning");
    } else {
      timerBox.classList.remove("timer-warning");
    }
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    finishTime = new Date();
  }

  // -----------------------------------------------------------------------
  // STEPPER NAVIGATION
  // -----------------------------------------------------------------------
  function buildStepper() {
    stepperNav.innerHTML = "";
    questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "stepper-btn";
      btn.id = `stepper-btn-${idx}`;
      btn.innerHTML = `
        <span class="step-num">${idx + 1}</span>
        <span class="step-check">✓</span>
      `;
      btn.title = `Lompat ke Soal ${idx + 1}: ${q.section}`;
      btn.addEventListener("click", () => {
        saveCurrentInputState();
        renderQuestion(idx);
      });
      stepperNav.appendChild(btn);
    });
  }

  function updateStepper() {
    questions.forEach((q, idx) => {
      const btn = document.getElementById(`stepper-btn-${idx}`);
      if (!btn) return;

      btn.classList.toggle("active", idx === currentQuestionIndex);

      // Check if answered
      const ans = userAnswers[q.id];
      const isAnswered = isQuestionAnswered(q, ans);
      btn.classList.toggle("answered", isAnswered);
    });

    const currentQ = questions[currentQuestionIndex];
    const isCurrentAnswered = isQuestionAnswered(currentQ, userAnswers[currentQ.id]);
    navAnsweredStatus.innerHTML = isCurrentAnswered
      ? `<span class="status-saved">● Jawaban tersimpan</span>`
      : `<span class="status-empty">○ Belum dijawab</span>`;
  }

  function isQuestionAnswered(q, ans) {
    if (ans === undefined || ans === null) return false;
    if (q.type === "reconciliation") {
      return Array.isArray(ans) && ans.length > 0;
    }
    return String(ans).trim() !== "";
  }

  // -----------------------------------------------------------------------
  // RENDER SOAL BERDASARKAN TIPE
  // -----------------------------------------------------------------------
  function renderQuestion(index) {
    currentQuestionIndex = index;
    const q = questions[index];

    // Update Header badges & progress
    quizSectionBadge.innerText = q.section;
    quizProgressText.innerText = `Soal ${index + 1} dari ${questions.length}`;
    qNumberPill.innerText = `Soal #${index + 1}`;
    questionText.innerText = q.question;

    const progressPct = ((index + 1) / questions.length) * 100;
    progressBarFill.style.width = `${progressPct}%`;

    // Instruction block
    if (q.instruction) {
      instructionWrapper.classList.remove("hidden");
      instructionText.innerText = q.instruction;
    } else if (q.section === "Bagian 1: Matriks Visual") {
      instructionWrapper.classList.remove("hidden");
      instructionText.innerText = "Gunakan matriks 400 angka (20x20) yang sama di bawah untuk menjawab pertanyaan ini:";
    } else {
      instructionWrapper.classList.add("hidden");
    }

    // Dynamic slot render
    dynamicContentSlot.innerHTML = "";
    inputContainer.innerHTML = "";

    if (q.section === "Bagian 1: Matriks Visual") {
      renderMatrixView(sharedMatrixData, q);
      renderNumberInput(q);
    } else if (q.type === "reconciliation") {
      renderReconciliationView(q);
    } else if (q.type === "format_validation") {
      renderInvoiceValidationView(q);
      renderNumberInput(q);
    }

    // Navigation buttons state
    btnPrev.disabled = index === 0;

    if (index === questions.length - 1) {
      btnNext.classList.add("hidden");
      btnFinish.classList.remove("hidden");
    } else {
      btnNext.classList.remove("hidden");
      btnFinish.classList.add("hidden");
    }

    updateStepper();
  }

  // -----------------------------------------------------------------------
  // RENDER BAGIAN 1: MATRIKS 20x20 MONOSPACE GRID
  // -----------------------------------------------------------------------
  function renderMatrixView(matrix, q) {
    const wrapper = document.createElement("div");
    wrapper.className = "matrix-card-wrapper";

    const headerBar = document.createElement("div");
    headerBar.className = "matrix-toolbar";
    headerBar.innerHTML = `
      <div class="matrix-info-badge">
        <span class="mono-tag">MATRIKS KONSENTRASI: 20 BARIS × 20 KOLOM (400 ANGKA)</span>
      </div>
      <div class="matrix-guide-hint">
        ${q.id === 4 ? '<span class="col-highlight-note">💡 Perhatikan Kolom 5 dari kiri</span>' : '<span class="scan-note">🔍 Pindai teliti per baris / kolom</span>'}
      </div>
    `;
    wrapper.appendChild(headerBar);

    const scrollBox = document.createElement("div");
    scrollBox.className = "matrix-scroll-box";

    const table = document.createElement("table");
    table.className = "matrix-table";

    // Table Header with Column Numbers (1 to 20)
    const thead = document.createElement("thead");
    const colHeaderRow = document.createElement("tr");
    const cornerCell = document.createElement("th");
    cornerCell.className = "matrix-corner-cell";
    cornerCell.innerText = "B\\K";
    colHeaderRow.appendChild(cornerCell);

    for (let c = 1; c <= 20; c++) {
      const th = document.createElement("th");
      th.className = `matrix-col-header ${q.id === 4 && c === 5 ? "col-5-active" : ""}`;
      th.innerText = c;
      colHeaderRow.appendChild(th);
    }
    thead.appendChild(colHeaderRow);
    table.appendChild(thead);

    // Table Body with 20 Rows
    const tbody = document.createElement("tbody");
    matrix.forEach((row, rowIdx) => {
      const tr = document.createElement("tr");
      tr.className = "matrix-row";

      // Row Header (1 to 20)
      const rowHeader = document.createElement("th");
      rowHeader.className = "matrix-row-header";
      rowHeader.innerText = rowIdx + 1;
      tr.appendChild(rowHeader);

      row.forEach((val, colIdx) => {
        const td = document.createElement("td");
        td.className = `matrix-cell ${q.id === 4 && colIdx === 4 ? "cell-col-5" : ""}`;
        td.innerText = val;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    scrollBox.appendChild(table);
    wrapper.appendChild(scrollBox);

    dynamicContentSlot.appendChild(wrapper);
  }

  // -----------------------------------------------------------------------
  // RENDER BAGIAN 2: REKONSILIASI 30 TRANSAKSI (MULTISELECT MAX 5)
  // -----------------------------------------------------------------------
  function renderReconciliationView(q) {
    const currentSelections = Array.isArray(userAnswers[q.id]) ? [...userAnswers[q.id]] : [];

    const container = document.createElement("div");
    container.className = "reconcile-container";

    // Selection status bar
    const statusBar = document.createElement("div");
    statusBar.className = "reconcile-status-bar";
    statusBar.id = "reconcile-status-bar";

    function updateStatusText() {
      const count = currentSelections.length;
      statusBar.innerHTML = `
        <div class="status-badge-wrap">
          <span class="reconcile-counter-badge ${count === 5 ? 'complete' : ''}">
            ${count} / 5 Transaksi Dipilih
          </span>
          <span class="reconcile-hint">
            ${count === 5 ? '✓ Kuota 5 pilihan terpenuhi. Siap lanjut!' : 'Pilih tepat 5 transaksi dengan selisih nominal.'}
          </span>
        </div>
        <button type="button" class="btn-clear-selection ${count === 0 ? 'hidden' : ''}" id="btn-clear-reconcile">
          Reset Pilihan
        </button>
      `;

      const btnClear = statusBar.querySelector("#btn-clear-reconcile");
      if (btnClear) {
        btnClear.addEventListener("click", () => {
          currentSelections.length = 0;
          userAnswers[q.id] = [];
          renderReconcileRows();
          updateStatusText();
          updateStepper();
        });
      }
    }

    container.appendChild(statusBar);

    // Table of 30 Transactions
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "reconcile-table-wrapper";

    const table = document.createElement("table");
    table.className = "reconcile-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width: 50px;">Pilih</th>
          <th style="width: 50px;">No</th>
          <th>Kode Trx</th>
          <th>Data Internal (Buku)</th>
          <th>Rekening Bank (Koran)</th>
        </tr>
      </thead>
      <tbody id="reconcile-tbody"></tbody>
    `;

    tableWrapper.appendChild(table);
    container.appendChild(tableWrapper);
    dynamicContentSlot.appendChild(container);

    const tbody = table.querySelector("#reconcile-tbody");

    function renderReconcileRows() {
      tbody.innerHTML = "";
      q.tableData.forEach((item) => {
        const isSelected = currentSelections.includes(item.no);
        const tr = document.createElement("tr");
        tr.className = `reconcile-row ${isSelected ? 'row-selected' : ''}`;
        tr.setAttribute("data-no", item.no);

        tr.innerHTML = `
          <td class="cell-center">
            <input type="checkbox" class="reconcile-checkbox" ${isSelected ? 'checked' : ''} aria-label="Pilih nomor ${item.no}">
          </td>
          <td class="cell-center font-bold">${item.no}</td>
          <td class="cell-mono font-bold">${item.trx}</td>
          <td class="cell-amount">${item.internal}</td>
          <td class="cell-amount">${item.bank}</td>
        `;

        // Click row or checkbox to toggle
        tr.addEventListener("click", (e) => {
          toggleSelection(item.no);
        });

        // Prevent double toggle if user specifically clicks the checkbox directly
        const chk = tr.querySelector(".reconcile-checkbox");
        chk.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleSelection(item.no);
        });

        tbody.appendChild(tr);
      });
    }

    function toggleSelection(itemNo) {
      const idx = currentSelections.indexOf(itemNo);
      if (idx > -1) {
        // Deselect
        currentSelections.splice(idx, 1);
      } else {
        // Select (enforce max 5)
        if (currentSelections.length >= 5) {
          showToast("Maksimal 5 item! Batalkan salah satu pilihan terlebih dahulu untuk mengganti transaksi.");
          return;
        }
        currentSelections.push(itemNo);
        currentSelections.sort((a, b) => a - b);
      }

      userAnswers[q.id] = [...currentSelections];
      renderReconcileRows();
      updateStatusText();
      updateStepper();
    }

    updateStatusText();
    renderReconcileRows();

    // In input container, show selected summary
    inputContainer.innerHTML = `
      <div class="multiselect-footer-summary">
        <span>Transaksi terpilih: </span>
        <strong id="selected-items-badge">${currentSelections.length ? currentSelections.join(", ") : "Belum ada"}</strong>
      </div>
    `;
  }

  // -----------------------------------------------------------------------
  // RENDER BAGIAN 3: AUDIT FORMAT FAKTUR
  // -----------------------------------------------------------------------
  function renderInvoiceValidationView(q) {
    const container = document.createElement("div");
    container.className = "invoice-audit-container";

    // Rules Card
    const rulesBox = document.createElement("div");
    rulesBox.className = "invoice-rules-box";
    rulesBox.innerHTML = `
      <div class="rules-header">
        <span class="rule-badge-main">4 ATURAN BAKU NOMOR FAKTUR VALID</span>
        <span class="rule-pattern-chip">Format: <code>INV-YYYY/DIV/STIE</code></span>
      </div>
      <ol class="rules-list">
        ${q.rules.map((r, i) => `<li><strong>Aturan ${i + 1}:</strong> ${r}</li>`).join("")}
      </ol>
    `;
    container.appendChild(rulesBox);

    // List of 30 Invoices Grid
    const invoicesGridWrapper = document.createElement("div");
    invoicesGridWrapper.className = "invoices-grid-wrapper";

    const gridHeader = document.createElement("div");
    gridHeader.className = "invoices-grid-header";
    gridHeader.innerHTML = `
      <span>Daftar 30 Nomor Faktur untuk Diaudit:</span>
      <span class="hint-small">Pindai ketepatan awalan, 4 digit tahun, 3 huruf divisi kapital, &amp; akhiran STIE</span>
    `;
    invoicesGridWrapper.appendChild(gridHeader);

    const grid = document.createElement("div");
    grid.className = "invoices-grid";

    q.invoiceList.forEach((inv) => {
      const chip = document.createElement("div");
      chip.className = "invoice-chip";
      chip.innerText = inv;
      grid.appendChild(chip);
    });

    invoicesGridWrapper.appendChild(grid);
    container.appendChild(invoicesGridWrapper);

    dynamicContentSlot.appendChild(container);
  }

  // -----------------------------------------------------------------------
  // RENDER INPUT NUMBER UMUM
  // -----------------------------------------------------------------------
  function renderNumberInput(q) {
    const currentVal = userAnswers[q.id] !== undefined ? userAnswers[q.id] : "";

    const wrap = document.createElement("div");
    wrap.className = "number-input-wrap";
    wrap.innerHTML = `
      <label for="numeric-answer-field" class="input-field-label">Jawaban Anda (Ketik Angka Bulat):</label>
      <div class="input-with-action">
        <input 
          type="number" 
          id="numeric-answer-field" 
          class="numeric-input" 
          placeholder="Ketik jawaban angka di sini..." 
          value="${currentVal}"
          autocomplete="off"
        >
        <button type="button" class="btn-save-answer" id="btn-save-answer">Simpan</button>
      </div>
      <span class="input-helper">Jawaban tersimpan otomatis saat Anda mengetik atau berpindah soal.</span>
    `;

    inputContainer.appendChild(wrap);

    const inputField = wrap.querySelector("#numeric-answer-field");
    const btnSave = wrap.querySelector("#btn-save-answer");

    const saveVal = () => {
      const val = inputField.value.trim();
      userAnswers[q.id] = val;
      updateStepper();
    };

    inputField.addEventListener("input", saveVal);
    inputField.addEventListener("change", saveVal);
    btnSave.addEventListener("click", () => {
      saveVal();
      showToast("✓ Jawaban soal tersimpan!");
    });

    // Auto-focus input for smoother experience
    setTimeout(() => {
      inputField.focus();
    }, 150);
  }

  function saveCurrentInputState() {
    const currentQ = questions[currentQuestionIndex];
    if (currentQ.inputType === "number") {
      const field = document.getElementById("numeric-answer-field");
      if (field) {
        userAnswers[currentQ.id] = field.value.trim();
      }
    }
  }

  // -----------------------------------------------------------------------
  // NAVIGASI TOMBOL FOOTER
  // -----------------------------------------------------------------------
  btnPrev.addEventListener("click", () => {
    saveCurrentInputState();
    if (currentQuestionIndex > 0) {
      renderQuestion(currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  btnNext.addEventListener("click", () => {
    saveCurrentInputState();
    if (currentQuestionIndex < questions.length - 1) {
      renderQuestion(currentQuestionIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  btnFinish.addEventListener("click", () => {
    saveCurrentInputState();
    openConfirmModal();
  });

  // -----------------------------------------------------------------------
  // MODAL KONFIRMASI
  // -----------------------------------------------------------------------
  function openConfirmModal() {
    let answeredCount = 0;
    questions.forEach((q) => {
      if (isQuestionAnswered(q, userAnswers[q.id])) {
        answeredCount++;
      }
    });

    modalSummaryText.innerHTML = `
      Anda telah menjawab <strong>${answeredCount}</strong> dari <strong>${questions.length}</strong> soal.<br>
      ${answeredCount < questions.length ? '<span class="warn-text">⚠️ Masih ada soal yang belum Anda jawab. Yakin ingin mengumpulkan?</span>' : 'Semua soal telah terjawab. Siap melihat hasil evaluasi?'}
    `;
    confirmModal.classList.remove("hidden");
  }

  btnModalCancel.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
  });

  btnModalConfirm.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
    finishQuiz();
  });

  // -----------------------------------------------------------------------
  // EVALUASI HASIL & SCORE CALCULATION (0 - 6)
  // -----------------------------------------------------------------------
  function finishQuiz() {
    saveCurrentInputState();
    stopTimer();

    // Calculate score
    let score = 0;
    const questionReview = [];

    questions.forEach((q) => {
      let isCorrect = false;
      const userVal = userAnswers[q.id];

      if (q.type === "reconciliation") {
        // Multi-select matching [6, 13, 18, 24, 29]
        if (Array.isArray(userVal)) {
          const sortedUser = [...userVal].sort((a, b) => a - b);
          const sortedCorrect = [...q.correctAnswer].sort((a, b) => a - b);
          if (
            sortedUser.length === sortedCorrect.length &&
            sortedUser.every((val, i) => val === sortedCorrect[i])
          ) {
            isCorrect = true;
          }
        }
      } else {
        // Numeric matching
        if (userVal !== undefined && userVal !== "" && parseInt(userVal, 10) === q.correctAnswer) {
          isCorrect = true;
        }
      }

      if (isCorrect) score++;

      questionReview.push({
        id: q.id,
        section: q.section,
        question: q.question,
        userAnswer: userVal,
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect
      });
    });

    // Call evaluateResult(score)
    const evaluation = evaluateResult(score);

    // Calculate time taken
    const elapsedMs = finishTime - startTime;
    const elapsedMinutes = Math.floor(elapsedMs / 60000);
    const elapsedSeconds = Math.floor((elapsedMs % 60000) / 1000);
    const timeSpentString = `${elapsedMinutes}m ${elapsedSeconds}s`;

    // Render results view
    renderResultView(score, evaluation, timeSpentString, questionReview);

    // View switch
    stepQuiz.classList.add("hidden");
    stepResult.classList.remove("hidden");
    mainContainer.classList.remove("wide-container");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderResultView(score, evaluation, timeSpentString, questionReview) {
    resName.innerText = currentUser.name;
    resNimProdi.innerText = `${currentUser.nim} • Minat Awal: ${currentUser.prodi}`;
    resTimeSpent.innerText = `⏱️ Waktu Pengerjaan: ${timeSpentString}`;

    resScoreValue.innerText = score;
    const pct = Math.round((score / 6) * 100);
    resAccuracyPct.innerText = `${pct}% Akurasi Ketelitian`;

    resBadgePill.innerText = evaluation.badge;
    resTierTitle.innerText = evaluation.tier;
    resRecommendedMajor.innerText = evaluation.recommendedMajor;
    resEvaluationMessage.innerText = evaluation.message;

    // Render breakdown table/cards
    breakdownGrid.innerHTML = "";
    questionReview.forEach((item) => {
      const card = document.createElement("div");
      card.className = `breakdown-item ${item.isCorrect ? 'correct' : 'incorrect'}`;

      let displayUser = "";
      let displayCorrect = "";

      if (item.id === 5) {
        displayUser = Array.isArray(item.userAnswer) && item.userAnswer.length
          ? `No: ${item.userAnswer.join(", ")}`
          : "Tidak dijawab";
        displayCorrect = `No: ${item.correctAnswer.join(", ")}`;
      } else {
        displayUser = item.userAnswer !== undefined && item.userAnswer !== "" ? item.userAnswer : "Tidak dijawab";
        displayCorrect = item.correctAnswer;
      }

      card.innerHTML = `
        <div class="breakdown-item-header">
          <span class="breakdown-qnum">Soal #${item.id} (${item.section})</span>
          <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-incorrect'}">
            ${item.isCorrect ? '✓ TEPAT (+1)' : '✗ KURANG TEPAT (0)'}
          </span>
        </div>
        <div class="breakdown-item-body">
          <p class="breakdown-question-text">${item.question}</p>
          <div class="breakdown-answers-row">
            <span class="answer-pill user-ans">Jawaban Anda: <strong>${displayUser}</strong></span>
            <span class="answer-pill correct-ans">Kunci Valid: <strong>${displayCorrect}</strong></span>
          </div>
        </div>
      `;

      breakdownGrid.appendChild(card);
    });
  }

  // -----------------------------------------------------------------------
  // DOWNLOAD KARTU HASIL (HTML2CANVAS)
  // -----------------------------------------------------------------------
  btnDownload.addEventListener("click", () => {
    const cardElement = document.getElementById("capture-card");
    showToast("Mengunduh kartu sertifikat hasil...");

    html2canvas(cardElement, {
      scale: 2, // High DPI capture
      backgroundColor: "#ffffff",
      useCORS: true
    }).then((canvas) => {
      const link = document.createElement("a");
      const safeName = currentUser.name.replace(/[^a-zA-Z0-9]/g, "_");
      link.download = `AuditorChallenge_STIESurakarta_${currentUser.nim}_${safeName}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch((err) => {
      console.error("Gagal mengunduh kartu:", err);
      alert("Terjadi kendala saat merender gambar kartu. Silakan screenshot manual layar hasil Anda.");
    });
  });

  // -----------------------------------------------------------------------
  // RESTART TES
  // -----------------------------------------------------------------------
  btnRestart.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mengulang tes dari awal?")) {
      stopTimer();
      currentQuestionIndex = 0;
      userAnswers = {};
      stepResult.classList.add("hidden");
      stepReg.classList.remove("hidden");
      mainContainer.classList.remove("wide-container");
      studentForm.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // -----------------------------------------------------------------------
  // TOAST NOTIFIKASI HELPER
  // -----------------------------------------------------------------------
  function showToast(message) {
    let toast = document.getElementById("custom-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "custom-toast";
      toast.className = "custom-toast";
      document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
};
