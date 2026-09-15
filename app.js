// DATA 40 PERTANYAAN
const questions = [
  // Sumbu 1: ANA (Analytical & Numerical) - 7 Soal
  { id: 1, axis: "ANA", text: "Ketika membaca berita ekonomi atau laporan, saya lebih percaya pada data grafik atau angka dibanding opini naratif.", isReverse: false },
  { id: 2, axis: "ANA", text: "Saya menikmati memecah masalah yang rumit menjadi komponen-komponen logika yang lebih teratur.", isReverse: false },
  { id: 3, axis: "ANA", text: "Saya merasa cepat pusing dan menghindari tugas yang mengharuskan menganalisis tabel data atau mencocokkan selisih nilai.", isReverse: true },
  { id: 4, axis: "ANA", text: "Saat melihat produk bisnis, saya terbiasa memperkirakan perbandingan harga modal dan potensi margin keuntungannya.", isReverse: false },
  { id: 5, axis: "ANA", text: "Saya lebih yakin mengambil keputusan jika didasari data riil daripada sekadar firasat (gut feeling).", isReverse: false },
  { id: 6, axis: "ANA", text: "Saya merasa tertantang memecahkan teka-teki logika angka atau studi kasus finansial.", isReverse: false },
  { id: 7, axis: "ANA", text: "Saya kesulitan memahami hubungan sebab-akibat saat melihat grafik fluktuasi harga atau laporan kinerja.", isReverse: true },

  // Sumbu 2: CRE (Commercial & Creative) - 7 Soal
  { id: 8, axis: "CRE", text: "Saat melihat tren viral di media sosial, pikiran pertama saya adalah bagaimana tren ini bisa jadi peluang bisnis.", isReverse: false },
  { id: 9, axis: "CRE", text: "Saya sering memikirkan ide promosi atau kampanye unik yang bisa menarik minat calon pembeli.", isReverse: false },
  { id: 10, axis: "CRE", text: "Saya lebih suka cara kerja lama yang sudah pasti daripada mengambil risiko mencoba ide bisnis baru.", isReverse: true },
  { id: 11, axis: "CRE", text: "Saya cepat menangkap apa yang sedang disukai atau dibutuhkan konsumen seusia saya saat ini.", isReverse: false },
  { id: 12, axis: "CRE", text: "Saya suka mengamati bagaimana sebuah brand membangun citra agar terlihat berbeda dari kompetitornya.", isReverse: false },
  { id: 13, axis: "CRE", text: "Saya memiliki keinginan kuat untuk merintis usaha mandiri atau menciptakan produk sendiri.", isReverse: false },
  { id: 14, axis: "CRE", text: "Saya merasa kurang berbakat dalam mempromosikan atau meyakinkan orang lain tentang sebuah produk.", isReverse: true },

  // Sumbu 3: LEA (Leadership & Execution) - 7 Soal
  { id: 15, axis: "LEA", text: "Ketika tim kehilangan arah, saya secara spontan mengambil kendali dan membagi tugas ke tiap anggota.", isReverse: false },
  { id: 16, axis: "LEA", text: "Saya merasa tertantang dan bersemangat ketika diberikan target kerja dengan tenggat waktu ketat.", isReverse: false },
  { id: 17, axis: "LEA", text: "Saya memilih diam daripada menegur teman kelompok yang tidak mengerjakan tugasnya dengan benar.", isReverse: true },
  { id: 18, axis: "LEA", text: "Saya percaya diri saat harus mempresentasikan ide atau mempertahankan argumen tim di depan banyak orang.", isReverse: false },
  { id: 19, axis: "LEA", text: "Saya berani mengambil risiko dan bertanggung jawab atas keputusan kelompok yang saya pimpin.", isReverse: false },
  { id: 20, axis: "LEA", text: "Saya lebih nyaman diberi instruksi mendetail dibanding harus menentukan strategi kelompok sendiri.", isReverse: true },
  { id: 21, axis: "LEA", text: "Saya terbiasa memastikan setiap target yang direncanakan selesai tepat waktu tanpa menunda.", isReverse: false },

  // Sumbu 4: COL (Collaborative & Communication) - 7 Soal
  { id: 22, axis: "COL", text: "Saya mudah mencairkan suasana dan membangun obrolan akrab dengan orang-orang baru di kampus.", isReverse: false },
  { id: 23, axis: "COL", text: "Saat terjadi silang pendapat sengit, saya berusaha menjadi penengah dan mencari solusi kompromi.", isReverse: false },
  { id: 24, axis: "COL", text: "Saya jauh lebih nyaman dan produktif bekerja sendirian daripada harus berkoordinasi dalam tim.", isReverse: true },
  { id: 25, axis: "COL", text: "Teman-teman sering meminta saran kepada saya karena saya pendengar yang baik dan empati.", isReverse: false },
  { id: 26, axis: "COL", text: "Saya mampu menyampaikan kritik yang membangun tanpa membuat rekan saya merasa tersinggung.", isReverse: false },
  { id: 27, axis: "COL", text: "Saya merasa cemas saat harus bekerja sama dengan orang yang punya karakter sangat berbeda dari saya.", isReverse: true },
  { id: 28, axis: "COL", text: "Saya antusias terlibat dalam kegiatan organisasi yang menuntut interaksi aktif dengan banyak orang.", isReverse: false },

  // Sumbu 5: DIS (Detail & Compliance Discipline) - 6 Soal
  { id: 29, axis: "DIS", text: "Saya sangat terganggu jika melihat catatan anggaran atau laporan keuangan yang tidak seimbang (balance).", isReverse: false },
  { id: 30, axis: "DIS", text: "Saya selalu membuat daftar checklist tugas yang terstruktur sebelum mulai mengerjakan proyek.", isReverse: false },
  { id: 31, axis: "DIS", text: "Saya kerap melewatkan detail kecil seperti salah ketik angka (typo) atau lupa menyimpan file revisi.", isReverse: true },
  { id: 32, axis: "DIS", text: "Menaati aturan tertulis dan SOP secara tertib jauh lebih aman daripada mengambil jalan pintas.", isReverse: false },
  { id: 33, axis: "DIS", text: "Saya memiliki kesabaran memeriksa lembar data berulang kali demi memastikan keakuratannya.", isReverse: false },
  { id: 34, axis: "DIS", text: "Saya sering menunda-nunda merapikan berkas tugas sampai akhirnya menumpuk berantakan.", isReverse: true },

  // Sumbu 6: AGI (Digital & Learning Agility) - 6 Soal
  { id: 35, axis: "AGI", text: "Saya antusias mencoba aplikasi baru atau AI tools untuk mempermudah tugas dan analisis kuliah.", isReverse: false },
  { id: 36, axis: "AGI", text: "Ketika menemui istilah bisnis baru, saya proaktif mencari tutorialnya di internet secara mandiri.", isReverse: false },
  { id: 37, axis: "AGI", text: "Saya merasa lambat beradaptasi jika portal sistem kuliah atau aplikasi mendadak berganti ke versi baru.", isReverse: true },
  { id: 38, axis: "AGI", text: "Saya suka memanfaatkan software grafis/spreadsheet agar laporan tugas saya terlihat rapi dan modern.", isReverse: false },
  { id: 39, axis: "AGI", text: "Saya secara berkala memantau perkembangan teknologi terkini yang relevan dengan dunia kerja.", isReverse: false },
  { id: 40, axis: "AGI", text: "Saya lebih suka cara manual lama daripada harus meluangkan waktu mempelajari software otomatisasi baru.", isReverse: true }
];

// STATE APLIKASI
let currentUser = { name: "", nim: "", prodi: "" };
let currentQuestionIndex = 0;
let userAnswers = [];
let radarChartInstance = null;

// ELEMEN DOM
const stepReg = document.getElementById("step-registration");
const stepQuiz = document.getElementById("step-quiz");
const stepResult = document.getElementById("step-result");
const studentForm = document.getElementById("student-form");

const qProgressText = document.getElementById("quiz-progress-text");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".btn-option");

// EVENT 1: SUBMIT FORM DATA DIRI
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentUser.name = document.getElementById("student-name").value.trim();
  currentUser.nim = document.getElementById("student-nim").value.trim();
  currentUser.prodi = document.getElementById("student-prodi").value;

  if (!currentUser.name || !currentUser.nim || !currentUser.prodi) {
    alert("Mohon lengkapi seluruh data diri Anda.");
    return;
  }

  stepReg.classList.add("hidden");
  stepQuiz.classList.remove("hidden");
  loadQuestion(0);
});

// FUNGSI LOAD SOAL
function loadQuestion(index) {
  const q = questions[index];
  qProgressText.innerText = `Soal ${index + 1} dari ${questions.length}`;
  progressBarFill.style.width = `${((index + 1) / questions.length) * 100}%`;
  questionText.innerText = q.text;
}

// EVENT 2: KLIK OPSI JAWABAN (1 - 5)
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const rawVal = parseInt(button.getAttribute("data-value"));
    const currentQ = questions[currentQuestionIndex];
    
    // Reverse score logic
    const finalScore = currentQ.isReverse ? (6 - rawVal) : rawVal;

    userAnswers.push({
      id: currentQ.id,
      axis: currentQ.axis,
      score: finalScore
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      finishQuiz();
    }
  });
});

// FUNGSI KALKULASI DAN TAMPILKAN HASIL
function finishQuiz() {
  stepQuiz.classList.add("hidden");
  stepResult.classList.remove("hidden");

  // Hitung total skor per sumbu
  const axisRaw = { ANA: 0, CRE: 0, LEA: 0, COL: 0, DIS: 0, AGI: 0 };
  userAnswers.forEach(ans => {
    axisRaw[ans.axis] += ans.score;
  });

  // Normalisasi ke 0 - 100
  // Sumbu 7 soal: min 7, max 35 -> (raw - 7) / 28 * 100
  // Sumbu 6 soal: min 6, max 30 -> (raw - 6) / 24 * 100
  const normalizedScores = {
    ANA: Math.round(((axisRaw.ANA - 7) / 28) * 100),
    CRE: Math.round(((axisRaw.CRE - 7) / 28) * 100),
    LEA: Math.round(((axisRaw.LEA - 7) / 28) * 100),
    COL: Math.round(((axisRaw.COL - 7) / 28) * 100),
    DIS: Math.round(((axisRaw.DIS - 6) / 24) * 100),
    AGI: Math.round(((axisRaw.AGI - 6) / 24) * 100)
  };

  // Render teks identitas
  document.getElementById("res-name").innerText = currentUser.name;
  document.getElementById("res-nim-prodi").innerText = `${currentUser.nim} • ${currentUser.prodi}`;

  // Tentukan Arketipe
  const archetype = determineArchetype(normalizedScores, currentUser.prodi);
  document.getElementById("res-archetype-title").innerText = archetype.title;
  document.getElementById("res-archetype-desc").innerText = archetype.desc;

  // Render Radar Chart
  renderSpiderweb(normalizedScores);
}

// LOGIKA ARKETIPE
function determineArchetype(scores, prodi) {
  // Sort sumbu berdasarkan skor tertinggi
  const sortedAxes = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const top1 = sortedAxes[0];
  const top2 = sortedAxes[1];
  const pair = [top1, top2].sort().join("+");

  if (pair.includes("ANA") && pair.includes("DIS")) {
    return {
      title: "The Financial Architect",
      desc: "Memiliki akurasi presisi tinggi, terstruktur, dan unggul dalam menganalisis stabilitas keuangan serta kepatuhan sistem audit."
    };
  } else if (pair.includes("CRE") && pair.includes("LEA")) {
    return {
      title: "The Venture Pioneer",
      desc: "Naluri bisnis tajam, berani mengambil peluang pasar, dan piawai menggerakkan tim untuk mengeksekusi ide-ide komersial."
    };
  } else if (pair.includes("ANA") && pair.includes("AGI")) {
    return {
      title: "The Market Intelligence Analyst",
      desc: "Pola pikir analitis berpadu dengan ketangkasan digital. Berpotensi kuat di bidang pasar modal, investasi, atau riset data bisnis."
    };
  } else if (pair.includes("COL") && pair.includes("LEA")) {
    return {
      title: "The Strategic Orchestrator",
      desc: "Komunikator karismatik yang mampu menyatukan berbagai karakter tim, mengelola negosiasi, dan memimpin dinamika organisasi."
    };
  } else if (pair.includes("COL") && pair.includes("CRE")) {
    return {
      title: "The Brand Evangelist",
      desc: "Kreatif, peka terhadap empati konsumen, serta mahir dalam merancang strategi promosi dan komunikasi pemasaran modern."
    };
  } else {
    return {
      title: "The Agile Business Catalyst",
      desc: "Profil serba bisa yang adaptif, siap berkembang di berbagai spektrum konsentrasi bisnis dan akuntansi di STIE Surakarta."
    };
  }
}

// RENDER SPIDERWEB DENGAN PALET PUTIH, HITAM, DAN #ddff00
function renderSpiderweb(scores) {
  const ctx = document.getElementById("radarChart").getContext("2d");
  
  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  radarChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Analitika Data",
        "Kreativitas Bisnis",
        "Kepemimpinan",
        "Kolaborasi Tim",
        "Ketelitian & SOP",
        "Adaptasi Digital"
      ],
      datasets: [{
        label: "Skor Potensi",
        data: [
          scores.ANA,
          scores.CRE,
          scores.LEA,
          scores.COL,
          scores.DIS,
          scores.AGI
        ],
        // Area isi jaring: hijau neon transparan
        backgroundColor: "rgba(221, 255, 0, 0.45)", 
        // Garis batas jaring: hitam tegas
        borderColor: "#000000", 
        borderWidth: 2,
        // Titik sudut jaring
        pointBackgroundColor: "#ddff00",
        pointBorderColor: "#000000",
        pointBorderWidth: 2,
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { display: false, stepSize: 20 },
          // Garis grid lingkaran & sudut
          grid: { color: "#e5e5e5", lineWidth: 1 },
          angleLines: { color: "#e5e5e5", lineWidth: 1 },
          pointLabels: {
            color: "#000000",
            font: { size: 10, weight: "700" }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// DOWNLOAD HASIL KE GAMBAR (HTML2CANVAS)
document.getElementById("btn-download").addEventListener("click", () => {
  const cardElement = document.getElementById("capture-card");
  
  html2canvas(cardElement, {
    scale: 2, // Resolusi tinggi (Retina display)
    backgroundColor: null
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = `Potensi_STIESurakarta_${currentUser.nim}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

// RESTART TES
document.getElementById("btn-restart").addEventListener("click", () => {
  currentQuestionIndex = 0;
  userAnswers = [];
  stepResult.classList.add("hidden");
  stepReg.classList.remove("hidden");
  studentForm.reset();
});
