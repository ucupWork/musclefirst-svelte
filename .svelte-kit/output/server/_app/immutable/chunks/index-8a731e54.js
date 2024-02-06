const Icon1 = "/_app/immutable/assets/icon-01-794109a0.png";
const Icon2 = "/_app/immutable/assets/icon-02-23356ceb.png";
const Icon3 = "/_app/immutable/assets/icon-03-00fda6b9.png";
const Icon4 = "/_app/immutable/assets/icon-04-7a69d444.png";
const Rasa1 = "/_app/immutable/assets/rasa-1-6fc2a191.png";
const Rasa2 = "/_app/immutable/assets/rasa-2-a072d0a9.png";
const Rasa3 = "/_app/immutable/assets/rasa-3-fcff0f7d.png";
const Rasa4 = "/_app/immutable/assets/rasa-4-9dfbf1fb.png";
const Rasa5 = "/_app/immutable/assets/rasa-5-7d283a56.png";
const Rasa6 = "/_app/immutable/assets/rasa-6-37cee205.png";
const cocokCardList = [
  {
    id: "1",
    title: "Daya Tahan Otot",
    linkImg: Icon1,
    altImg: "Daya Tahan Otot",
    txtDesc: "Meningkatkan daya tahan otot saat latihan"
  },
  {
    id: "2",
    title: "Keram Olahraga",
    linkImg: Icon2,
    altImg: "Keram Olahraga",
    txtDesc: "Mudah bosan, memiliki banyak varian rasa"
  },
  {
    id: "3",
    title: "Perkembangan Otot",
    linkImg: Icon3,
    altImg: "Perkembangan Otot",
    txtDesc: "Ingin menaikan massa otot dan bebas lemak"
  },
  {
    id: "4",
    title: "Mengurangi Resiko Cedera",
    linkImg: Icon4,
    altImg: "Mengurangi Resiko Cedera",
    txtDesc: "Mengurangi resiko cedera pada otot"
  }
];
const unflavList = [
  {
    id: "1",
    title: "Daya Tahan Otot",
    linkImg: Icon1,
    altImg: "Daya Tahan Otot",
    txtDesc: "Vegan Friendly"
  },
  {
    id: "2",
    title: "Keram Olahraga",
    linkImg: Icon2,
    altImg: "Keram Olahraga",
    txtDesc: "Gluten Free"
  },
  {
    id: "3",
    title: "Mengurangi Resiko Cedera",
    linkImg: Icon4,
    altImg: "Mengurangi Resiko Cedera",
    txtDesc: "Sudah Halal dan BPOM"
  },
  {
    id: "4",
    title: "Mengurangi Resiko Cedera",
    linkImg: Icon4,
    altImg: "Mengurangi Resiko Cedera",
    txtDesc: "No Added Sugar dan non GMO"
  }
];
const rasaList = [
  {
    id: "1",
    title: "Tropical <br> Fruit",
    linkImg: Rasa1,
    altImg: "RasaSatu"
  },
  {
    id: "2",
    title: "Guava",
    linkImg: Rasa2,
    altImg: "RasaDua"
  },
  {
    id: "3",
    title: "Green <br> Apple",
    linkImg: Rasa3,
    altImg: "RasaTiga"
  },
  {
    id: "4",
    title: "Peach",
    linkImg: Rasa4,
    altImg: "RasaEmpat"
  },
  {
    id: "5",
    title: "Mixberry",
    linkImg: Rasa5,
    altImg: "RasaLima"
  },
  {
    id: "6",
    title: "Bubblegum",
    linkImg: Rasa6,
    altImg: "RasaEnam"
  }
];
const manfaatList = [
  {
    id: "1",
    title: "KADAR CREATINE TINGGI",
    txtDesc: "Mengandung 5 gram creatine per saji lebih banyak dari pada creatine pada makanan."
  },
  {
    id: "2",
    title: "BANYAK VARIAN RASA",
    txtDesc: '<span class="font-bold">Pro Creatine</span> sudah hadir dengan banyak varian rasa unik, yaitu : <b>Tropical Fruit</b>, <b>Guava</b>, <b>Green Apple</b>, <b>Peach</b>, <b>Mixberry</b> dan <b>Bubblegum</b>.'
  },
  {
    id: "3",
    title: "HARGA TERJANGKAU",
    txtDesc: 'Dengan kualitas <span class="font-bold">Creatine</span> monohidrat terbaik dan harga terjangkau hanya 3 ribu per saji.'
  },
  {
    id: "4",
    title: "PEWARNA ALAMI BUAH",
    txtDesc: "Kami menggunakan pewarna alami dari buah buahan sehingga aman dikonsumsi."
  },
  {
    id: "5",
    title: "RASA YANG ENAK",
    txtDesc: "Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh."
  },
  {
    id: "6",
    title: "AMAN DIKONSUMSI",
    txtDesc: 'Jangan lupa, <span class="font-bold">Pro Creatine</span> juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget.'
  },
  {
    id: "7",
    title: "COCOK UNTUK SEMUA",
    txtDesc: "Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang pengen bentuk badan ideal boleh banget."
  },
  {
    id: "8",
    title: "HALAL DAN SUDAH BPOM",
    txtDesc: "MUSCLE FIRST sudah berstandar international dan banyak banget keunggulan nya, udah deh buruan beli."
  }
];
const testimonialCardList = [];
const educationCardList = [
  {
    id: "1",
    title: "Education 1",
    txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> merupakan suplemen efektif untuk meningkatkan performa olahraga sekaligus meningkatkan massa otot dan bebas lemak.'
  },
  {
    id: "2",
    title: "Education 2",
    txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> dibuat secara alami dengan menggunakan asam amino glisin dan arginin, produk ini tidak menimbulkan efek samping berbahaya.'
  },
  {
    id: "3",
    title: "Education 3",
    txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> memiliki pilihan rasa yang unik <span class="font-normal">tropical fruit, jambu, apel hijau, peach, mix berry, dan permen karet</span> jadi <small class="font-bold text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. '
  },
  {
    id: "4",
    title: "Education 4",
    txtDesc: '<span class="font-bold text-amber-500">Pro Creatine</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.'
  }
];
export {
  cocokCardList as c,
  educationCardList as e,
  manfaatList as m,
  rasaList as r,
  testimonialCardList as t,
  unflavList as u
};
