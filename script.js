document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    { code: "nama", text: "Halo! Sebelum mulai, boleh tahu nama kamu siapa?" },

    { code: "Q1", text: "Sistem chatbot berbasis AI dapat meningkatkan kecepatan respons layanan pelanggan pada toko furnitur." },
    { code: "Q2", text: "Respons pelanggan yang cepat dapat meningkatkan peluang terjadinya pembelian." },
    { code: "Q3", text: "Layanan pelanggan otomatis selama 24 jam dapat membantu UMKM menjangkau pelanggan lebih luas." },
    { code: "Q4", text: "Informasi produk seperti harga, ukuran, stok, dan pengiriman sebaiknya dapat diakses pelanggan secara cepat." },
    { code: "Q5", text: "Pemanfaatan AI dapat membantu toko furnitur membuat konten promosi secara lebih konsisten." },
    { code: "Q6", text: "Konten media sosial yang konsisten dapat meningkatkan visibilitas dan kepercayaan pelanggan." },
    { code: "Q7", text: "AI dapat membantu menghasilkan ide konten, caption, dan materi promosi yang relevan dengan produk furnitur." },
    { code: "Q8", text: "Branding digital yang konsisten penting untuk membedakan toko furnitur dari kompetitor." },
    { code: "Q9", text: "Sistem inventaris digital dapat mengurangi risiko kesalahan dalam pencatatan stok barang." },
    { code: "Q10", text: "Informasi stok secara real-time dapat membantu pemilik toko mengambil keputusan restock dengan lebih tepat." },
    { code: "Q11", text: "AI dapat membantu mengidentifikasi produk yang cepat terjual dan produk yang kurang diminati." },
    { code: "Q12", text: "Manajemen stok berbasis AI dapat meningkatkan efisiensi operasional UMKM." },
    { code: "Q13", text: "Analisis data penjualan dapat membantu toko memahami pola pembelian pelanggan." },
    { code: "Q14", text: "AI dapat membantu memprediksi permintaan produk pada periode tertentu, seperti hari raya atau akhir tahun." },
    { code: "Q15", text: "Dashboard penjualan digital dapat membantu pemilik toko mengevaluasi performa bisnis secara lebih akurat." },
    { code: "Q16", text: "Rekomendasi produk berbasis AI dapat meningkatkan pengalaman belanja pelanggan." },
    { code: "Q17", text: "Penggunaan AI pada UMKM tetap perlu diawasi manusia agar informasi yang diberikan akurat." },
    { code: "Q18", text: "Perlindungan data pelanggan merupakan aspek penting dalam penerapan AI pada bisnis ritel." },
    { code: "Q19", text: "Implementasi AI sebaiknya dilakukan secara bertahap agar sesuai dengan kemampuan UMKM." },
    { code: "Q20", text: "Secara keseluruhan, AI berpotensi meningkatkan daya saing UMKM furnitur." }
  ];

  let step = 0;
  let answers = {};
  let userName = "";

  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function addProgress() {
    const progress = document.createElement("div");
    progress.classList.add("progress-message");
    progress.innerText = `Pernyataan ${step} dari ${questions.length - 1}`;
    chatBox.appendChild(progress);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    const currentQuestion = questions[step];

    const allowedAnswers = [
      "sangat setuju",
      "setuju",
      "netral",
      "tidak setuju"
    ];

    if (currentQuestion.code !== "nama" && !allowedAnswers.includes(text.toLowerCase())) {
      addMessage(text, "user");
      addMessage("Maaf, jawaban tidak sesuai. Silakan jawab dengan: Sangat Setuju / Setuju / Netral / Tidak Setuju.", "bot");
      userInput.value = "";
      return;
    }

    addMessage(text, "user");
    answers[currentQuestion.code] = text;

    if (currentQuestion.code === "nama") {
      userName = text;
      step++;
      userInput.value = "";

      setTimeout(() => {
        addMessage(`Terima kasih, ${userName}.`, "bot");
        addMessage("Silakan jawab setiap pernyataan berikut dengan: Sangat Setuju / Setuju / Netral / Tidak Setuju.", "bot");
        addProgress();
        addMessage(questions[step].text, "bot");
      }, 400);

      return;
    }

    step++;
    userInput.value = "";

    setTimeout(() => {
      if (step < questions.length) {
        addProgress();
        addMessage(questions[step].text, "bot");
      } else {
        addMessage(`Terima kasih, ${userName}! Semua jawaban kamu sudah selesai.`, "bot");
        addMessage("Jawaban ini dapat digunakan untuk melihat persepsi responden terhadap penerapan AI pada UMKM furnitur.", "bot");
        console.log("Hasil jawaban:", answers);
      }
    }, 400);
  }

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  addMessage(questions[0].text, "bot");
});