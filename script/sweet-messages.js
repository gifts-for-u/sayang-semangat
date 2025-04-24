const messages = [
  "Haloo kesayangan akuuu❣️",
  "Sayang aku lagi pusing banget yaa karena tadi abis bimbingann",
  "Gapapa sayangg kalo kamu pusing tapi jangan terlalu dipikirin yaa, jangan overthinking sayanggg",
  "Gapapa banget juga kalo ngerasa overwhelmed, karena kamu juga nanti mulai bulan mei kelasnya nambah dan itu sangat melelahkan pastinyaa kann",
  "Tapi aku yakin kamu bisa ngelewatin semuanyaa sayangg, kamu pasti bisaaa sayangg",
  "Memang setelah bimbingan tadi terdengar banyak sekali yang harus dilakukan buat skripsi kamu, dan gapapa banget kalo kamu pusing. Tapi setidaknya kamu jadi tau kan apa yang harus dilakuin selanjutnyaaa, setelah ini pasti akan lebih mudahh",
  "Semua usaha kamu juga pasti akan dibantu ko sama Allah, jadi jangan khawatir yaa sayanggg",
  "Aku juga siap ko semisal kamu butuh bantuann, bilang ajaa yaa sayanggg",
  "Mungkin segini dulu yaa sayanggg, pesen aku jangan terlalu dipikirin yaa, kamu pasti bisa ngelewatin semua ini",
  "Aku juga sekalian minta maaf karena tadi udah ngomong sesuatu yang tidak pantas diomongin, maaf yaa sayanggg",
  "Aku gamau hal itu terucap lagi, karena itu bukan hal yang baik dan aku juga gamau bikin kamu ngerasa ga nyaman, aku minta maaff sayangg",
  "Kedepannya aku sangat mau untuk menjadi lebih baik dan akan memastikan hal-hal yang menjadi kesalahan aku dulu ga keulang lagi",
  "Maafff yaa cantikk, maaf aku bikin kamu berpikiran bahwa aku cowo yang ngerendahin perempuan, aku minta maaff sayangg, aku gamau itu terulang lagiii",
  "Maaf juga udah menambah pikiran kamu yang udah banyak banget nget nget iniii, maaf yaa sayangg",
  "Cantik aku bisa ko lewatin skripsi inii, aku yakin kamu bisa, aku yakin kamu kuat, aku yakin kamu hebat. Hebat laaa kesayangan aku ma hebattt pastiii",
  "Cantik aku selamat bobo yaaa, bobo nyenyakk sayangg, walaupun kamu akan liat ini di pagi tapi aku mau tetep bilang selamat bobo yaa sayanggg",
  "Jangan cemberut lagi yaa sayangg, walopun kamu cemberut cantik dan lucu, tapi lebi cantik lagi kalo kamu senyumm sampe matanya ilangg hihihi",
  "Terakhir, Semangattt sayanggg, aku akan support kamu teruss, dan aku bangga sama kamu, aku yakin kamu bisa lewatin ini semuaa❣️",
  "Aku sayang kamu, love u 3000 and in all other universe❣️",
];

const motivasiText = document.getElementById("motivasi-text");
const pesanBtn = document.getElementById("pesan-btn");
const pesanSpesial = document.getElementById("pesan-spesial");

let msgIndex = 0;

function typeMessage(message, i = 0) {
  if (i < message.length) {
    motivasiText.textContent += message.charAt(i);
    setTimeout(() => typeMessage(message, i + 1), 25);
  } else {
    setTimeout(() => {
      motivasiText.textContent = "";
      msgIndex = (msgIndex + 1) % messages.length;
      typeMessage(messages[msgIndex]);
    }, 5000);
  }
}

const pesanArray = [
  "Tetep semangatt yaa sayangg akuuu❣️",
  "Kalo kamu terus berusaha dan berdoa, pasti usaha kamu bakal kebayar koo",
  "Kalo butuh bantuan, bilang aja yaa sayanggg",
  "Aku sayang kamu❣️",
];

let pesanIndex = 0;
// Mulai animasi ketikan pesan motivasi
typeMessage(messages[msgIndex]);

// Tombol untuk menampilkan pesan spesial
pesanBtn.addEventListener("click", () => {
  pesanSpesial.textContent = pesanArray[pesanIndex];
  pesanIndex = (pesanIndex + 1) % pesanArray.length; // loop kembali ke awal
});
