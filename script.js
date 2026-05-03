document.addEventListener("DOMContentLoaded", function () {

  const questions = [
    { code: "nama", text: "Halo! Sebelum mulai, boleh tahu nama kamu siapa?" },

    { code: "Q1", text: "Apakah Anda pernah berbelanja produk furnitur sebelumnya?" },
    { code: "Q2", text: "Menurut Anda, seberapa penting respon cepat dari penjual?" },
    { code: "Q3", text: "Apakah Anda pernah menggunakan chatbot untuk bertanya ke toko?" },
    { code: "Q4", text: "Seberapa penting informasi produk yang lengkap bagi Anda?" },
    { code: "Q5", text: "Apakah Anda tertarik membeli furnitur secara online?" },
    { code: "Q6", text: "Seberapa penting harga dalam keputusan membeli furnitur?" },
    { code: "Q7", text: "Apakah Anda mempertimbangkan review sebelum membeli?" },
    { code: "Q8", text: "Apakah pengiriman cepat penting bagi Anda?" },
    { code: "Q9", text: "Apakah Anda pernah membeli furnitur melalui chat?" },
    { code: "Q10", text: "Seberapa penting pelayanan ramah dari penjual?" },

    { code: "Q11", text: "Apakah Anda tertarik jika ada rekomendasi produk otomatis?" },
    { code: "Q12", text: "Apakah Anda ingin melihat katalog digital sebelum membeli?" },
    { code: "Q13", text: "Apakah Anda merasa chatbot membantu dalam mencari informasi?" },
    { code: "Q14", text: "Apakah Anda percaya dengan informasi dari chatbot?" },
    { code: "Q15", text: "Apakah Anda tertarik dengan promo yang dikirim otomatis?" },
    { code: "Q16", text: "Apakah Anda ingin proses pembelian yang lebih cepat?" },
    { code: "Q17", text: "Apakah Anda pernah kesulitan mencari informasi produk?" },
    { code: "Q18", text: "Apakah Anda ingin toko buka 24 jam secara online?" },
    { code: "Q19", text: "Apakah Anda merasa AI membantu UMKM berkembang?" },
    { code: "Q20", text: "Apakah Anda tertarik menggunakan chatbot untuk belanja furnitur?" }
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
    progress.innerText = `Pertanyaan ${step} dari ${questions.length - 1}`;
    chatBox.appendChild(progress);
  }

  // ==========================
  // 🔥 FAQ CUSTOMER
  // ==========================
function handleFAQ(text) {
  const t = text.toLowerCase();

  // HARGA
  if (
    t.includes("harga") ||
    t.includes("berapa") ||
    t.includes("price") ||
    t.includes("murah") ||
    t.includes("mahal")
  ) {
    return "Harga produk di Mebel Bintang Jaya sangat bervariasi, mulai dari sekitar Rp20.000 untuk produk kecil seperti bantal, guling, atau perlengkapan rumah, hingga puluhan juta rupiah untuk produk besar seperti kasur premium, lemari besar, sofa custom, atau set furnitur lengkap. Jika ingin harga lebih detail, silakan sebutkan produk yang dicari.";
  }

  // CUSTOM DESIGN
  if (
    t.includes("custom") ||
    t.includes("desain") ||
    t.includes("design") ||
    t.includes("model sendiri") ||
    t.includes("ukuran sendiri") ||
    t.includes("pesanan khusus")
  ) {
    return "Ya, beberapa produk dapat dibuat dengan custom design, terutama sofa dan produk tertentu sesuai kebutuhan pelanggan. Customer bisa menyesuaikan model, ukuran, bahan, dan warna tergantung ketersediaan material. Untuk hasil paling akurat, sebaiknya konsultasikan desain yang diinginkan terlebih dahulu.";
  }

  // PRODUK YANG DIJUAL
  if (
    t.includes("produk") ||
    t.includes("jual") ||
    t.includes("barang") ||
    t.includes("tersedia") ||
    t.includes("ada apa")
  ) {
    return "Mebel Bintang Jaya menyediakan berbagai kebutuhan furnitur dan perlengkapan rumah, seperti kasur, lemari, sofa, meja, kursi, rak sepatu, rak piring/rak cuci piring, spring bed, bantal, guling, bed cover, serta produk interior rumah lainnya.";
  }

  // KASUR / SPRING BED
  if (
    t.includes("kasur") ||
    t.includes("spring bed") ||
    t.includes("springbed") ||
    t.includes("guhdo") ||
    t.includes("central")
  ) {
    return "Untuk kasur dan spring bed, tersedia berbagai pilihan ukuran dan merek, seperti Guhdo dan Central. Harga tergantung ukuran, tipe, ketebalan, dan merek. Customer bisa menanyakan ukuran tertentu seperti single, queen, atau king size agar bisa diarahkan ke pilihan yang sesuai.";
  }

  // SOFA
  if (t.includes("sofa")) {
    return "Untuk sofa, tersedia pilihan sofa jadi dan beberapa model yang dapat disesuaikan. Customer bisa menanyakan ukuran, jumlah dudukan, warna, bahan, dan model yang diinginkan. Harga sofa tergantung ukuran, bahan, dan tingkat custom.";
  }

  // LEMARI
  if (t.includes("lemari")) {
    return "Untuk lemari, tersedia berbagai pilihan seperti lemari pakaian, lemari plastik, lemari kayu, dan lemari dengan berbagai ukuran. Harga tergantung bahan, ukuran, jumlah pintu, dan merek.";
  }

  // RAK
  if (
    t.includes("rak") ||
    t.includes("rak sepatu") ||
    t.includes("rak piring") ||
    t.includes("rak cuci piring")
  ) {
    return "Tersedia berbagai jenis rak seperti rak sepatu, rak piring, rak cuci piring, dan rak serbaguna. Harganya bervariasi tergantung ukuran, bahan, dan model.";
  }

  // BANTAL / GULING / BED COVER
  if (
    t.includes("bantal") ||
    t.includes("guling") ||
    t.includes("bed cover") ||
    t.includes("bedcover") ||
    t.includes("sprei")
  ) {
    return "Tersedia juga produk pelengkap seperti bantal, guling, bed cover, dan perlengkapan tidur lainnya. Untuk produk kecil seperti ini, harga bisa mulai dari sekitar Rp20.000 tergantung jenis dan kualitas produk.";
  }

  // PENGIRIMAN
  if (
    t.includes("kirim") ||
    t.includes("pengiriman") ||
    t.includes("diantar") ||
    t.includes("antar") ||
    t.includes("delivery")
  ) {
    return "Ya, produk dapat dikirim setelah pembayaran atau kesepakatan transaksi dilakukan. Pengiriman menyesuaikan lokasi pelanggan dan jenis barang yang dibeli.";
  }

  // ONGKIR
  if (
    t.includes("ongkir") ||
    t.includes("ongkos kirim") ||
    t.includes("biaya kirim") ||
    t.includes("biaya antar")
  ) {
    return "Ongkos kirim tergantung jarak lokasi, ukuran barang, dan jumlah produk yang dibeli. Untuk area sekitar toko biasanya lebih fleksibel, sedangkan luar kota akan menyesuaikan biaya pengiriman atau ekspedisi.";
  }

  // PEMBAYARAN
  if (
    t.includes("bayar") ||
    t.includes("payment") ||
    t.includes("transfer") ||
    t.includes("dp") ||
    t.includes("down payment") ||
    t.includes("cicil")
  ) {
    return "Pembayaran dapat dilakukan sesuai ketentuan toko, misalnya tunai atau transfer. Untuk pesanan tertentu, terutama custom, biasanya dapat didiskusikan apakah perlu DP terlebih dahulu.";
  }

  // STOK
  if (
    t.includes("stok") ||
    t.includes("ready") ||
    t.includes("ready stock") ||
    t.includes("habis") ||
    t.includes("tersedia")
  ) {
    return "Ketersediaan stok bisa berbeda setiap hari karena barang terus keluar-masuk. Sebaiknya customer menyebutkan produk, ukuran, atau model yang dicari agar bisa dicek ketersediaannya.";
  }

  // ALAMAT
  if (
    t.includes("alamat") ||
    t.includes("lokasi") ||
    t.includes("dimana") ||
    t.includes("di mana") ||
    t.includes("maps")
  ) {
    return "Toko Mebel Bintang Jaya berlokasi di Jl. MT. Haryono No.302, Jagalan, Semarang Tengah, Kota Semarang, Jawa Tengah.";
  }

  // JAM OPERASIONAL
  if (
    t.includes("jam") ||
    t.includes("buka") ||
    t.includes("tutup") ||
    t.includes("operasional")
  ) {
    return "Jam operasional Toko Mebel Bintang Jaya umumnya Senin–Sabtu pukul 08.30–19.00 WIB dan Minggu pukul 08.30–17.00 WIB.";
  }

  // GARANSI
  if (
    t.includes("garansi") ||
    t.includes("warranty")
  ) {
    return "Beberapa produk memiliki garansi, terutama produk bermerek seperti kasur atau spring bed tertentu. Lama garansi tergantung merek dan jenis produknya.";
  }

  // PERAKITAN
  if (
    t.includes("rakit") ||
    t.includes("perakitan") ||
    t.includes("pasang") ||
    t.includes("instalasi")
  ) {
    return "Untuk produk tertentu, toko dapat membantu proses perakitan atau pemasangan. Detail layanan perakitan bisa menyesuaikan jenis barang dan lokasi pengiriman.";
  }

  // REKOMENDASI PRODUK
  if (
    t.includes("rekomendasi") ||
    t.includes("saran") ||
    t.includes("cocok") ||
    t.includes("bagus")
  ) {
    return "Bisa. Customer dapat menyebutkan kebutuhan, ukuran ruangan, budget, dan jenis produk yang dicari. Nantinya toko dapat memberikan rekomendasi produk yang paling sesuai.";
  }

  return null;
}
  function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage(text, "user");

    // 🔥 CEK FAQ DULU
    const faqResponse = handleFAQ(text);
    if (faqResponse) {
      setTimeout(() => {
        addMessage(faqResponse, "bot");
      }, 300);
      userInput.value = "";
      return;
    }

    const currentQuestion = questions[step];

    answers[currentQuestion.code] = text;

    if (currentQuestion.code === "nama") {
      userName = text;
      step++;
      userInput.value = "";

      setTimeout(() => {
        addMessage(`Terima kasih, ${userName}.`, "bot");
        addMessage("Sekarang saya akan menanyakan beberapa pertanyaan 😊", "bot");
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
        addMessage(`Terima kasih ${userName}, semua pertanyaan sudah selesai 🙌`, "bot");
        addMessage("Jika ada pertanyaan tentang produk, silakan tanyakan kapan saja 😊", "bot");
        console.log(answers);
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
