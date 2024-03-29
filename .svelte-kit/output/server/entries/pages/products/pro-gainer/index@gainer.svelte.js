import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
/* empty css                                                                              */import { j as modal } from "../../../../_app/immutable/chunks/index-fe7c0294.js";
import { p as productList } from "../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
/* empty css                                                                               */import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-e272f300.js";
import { S as SectionOne, a as SectionTwelve, b as SectionTwo, c as SectionThree, d as SectionFour, e as SectionFive, f as SectionCertified, g as SectionSix, h as SectionEleven, i as SectionNine, j as SectionTen, k as SectionDisclaimer } from "../../../../_app/immutable/chunks/SectionDisclaimer-3b641f53.js";
import { S as SectionSize, a as SectionThirteen } from "../../../../_app/immutable/chunks/SectionSize-24acb597.js";
import { I as Icon1, e as Icon2, f as Icon3, g as Icon4, R as Rasa1, a as Rasa2, b as Rasa3, c as Rasa4, d as Rasa5 } from "../../../../_app/immutable/chunks/rasa-5-0b65fe19.js";
import "../../../../_app/immutable/chunks/crown-f3b9967b.js";
import "../../../../_app/immutable/chunks/Index-1d60b221.js";
import "../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const Testi1 = "/_app/immutable/assets/testi-01-dab32d80.webp";
const Testi2 = "/_app/immutable/assets/testi-02-19824606.webp";
const Testi3 = "/_app/immutable/assets/testi-03-0479c6c2.webp";
const Testi4 = "/_app/immutable/assets/testi-04-4e20b676.webp";
const cocokCardList = [
  {
    id: "1",
    title: "Waktu Makan",
    linkImg: Icon1,
    altImg: "Waktu Makan",
    txtDesc: "Tidak punya waktu makan"
  },
  {
    id: "2",
    title: "Berat Badan",
    linkImg: Icon2,
    altImg: "Berat Badan",
    txtDesc: "Ingin menambah berat badan namun rendah lemak"
  },
  {
    id: "3",
    title: "Kalori",
    linkImg: Icon3,
    altImg: "Kalori",
    txtDesc: "Mau menambah asupan kalori dengan mudah"
  },
  {
    id: "4",
    title: "Kenyang Lebih Lama",
    linkImg: Icon4,
    altImg: "Kenyang Lebih Lama",
    txtDesc: "Mengenyangkan lebih lama"
  }
];
const rasaList = [
  {
    id: "1",
    title: "Chocolate <br> Glame",
    linkImg: Rasa1,
    altImg: "RasaSatu"
  },
  {
    id: "2",
    title: "Caramel <br> Fusion",
    linkImg: Rasa2,
    altImg: "RasaDua"
  },
  {
    id: "3",
    title: "Honeydrew <br> Melon",
    linkImg: Rasa3,
    altImg: "RasaTiga"
  },
  {
    id: "4",
    title: "Chocolate <br> Mint",
    linkImg: Rasa4,
    altImg: "RasaEmpat"
  },
  {
    id: "5",
    title: "Vanilla <br> Popcorn",
    linkImg: Rasa5,
    altImg: "RasaLima"
  }
];
const manfaatList = [
  {
    id: "1",
    title: "KADAR PROTEIN TINGGI",
    txtDesc: "Kalian bisa dapetin 55gram/sajian protein untuk membantu <b>pembentukan otot</b>."
  },
  {
    id: "2",
    title: "HARGA TERJANGKAU",
    txtDesc: "Dengan kualitas yang juara, <b>PRO GAINER</b> ini bisa kalian beli dengan <b>harga yang sangat terjangkau</b>."
  },
  {
    id: "3",
    title: "TINGGI KALORI",
    txtDesc: "Dapatkan 1.030 kalori dengan konsumsi <b>PRO GAINER</b>."
  },
  {
    id: "4",
    title: "TINGGI KARBOHIDRAT",
    txtDesc: "Dalam 1 sajian PRO Gainer kamu bisa dapatkan 160gram karbohidrat kompleks."
  },
  {
    id: "5",
    title: "RASA YANG ENAK",
    txtDesc: "Rasa nya enak dan cocok dengan lidah, masyarakat Indonesia, banyak juga varian dari rasa yang kami punya loh."
  },
  {
    id: "6",
    title: "AMAN DIKONSUMSI",
    txtDesc: "Jangan lupa, PRO ISOLATE juga aman di konsumsi setiap hari karena manfaat yang didapat sangat banyak banget."
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
const testimonialCardList = [
  {
    id: "1",
    title: "Testimonial Review 1",
    linkImg: Testi1,
    altImg: "Testimonial 1"
  },
  {
    id: "2",
    title: "Testimonial Review 2",
    linkImg: Testi2,
    altImg: "Testimonial 2"
  },
  {
    id: "3",
    title: "Testimonial Review 3",
    linkImg: Testi3,
    altImg: "Testimonial 3"
  },
  {
    id: "4",
    title: "Testimonial Review 4",
    linkImg: Testi4,
    altImg: "Testimonial 4"
  }
];
const educationCardList = [
  {
    id: "1",
    title: "Education 1",
    txtDesc: '<span class="font-bold text-amber-500">PRO GAINER</span> merupakan susu protein tinggi kalori dan rendah lemak yang bermanfaat untuk menambah massa tubuh.'
  },
  {
    id: "2",
    title: "Education 2",
    txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> Dibuat secara alami dengan menggunakan serat gandum, produk ini tidak menimbulkan efek samping berbahaya.'
  },
  {
    id: "3",
    title: "Education 3",
    txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> memiliki pilihan rasa yang unik, ada 5 rasa jumlahnya : <span class="font-normal">cokelat, caramel, melon, cokelat mint, dan vanila popcorn</span> jadi <small class="font-bold  text-amber-500 uppercase">GAK NGEBOSENIN</small> buat di konsumsi. '
  },
  {
    id: "4",
    title: "Education 4",
    txtDesc: '<span class="font-bold  text-amber-500">PRO GAINER</span> bersertifikasi Halal dan telah lulus uji Badan Pengawas Obat dan Makanan sehingga cocok untuk semua.'
  }
];
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-055bdb18.webp";
const GainerOne = "/_app/immutable/assets/produk-01-1-65d19134.webp";
const EducationImg = "/_app/immutable/assets/education-product-img-88baa3d4.webp";
const FeatureImage = "/_app/immutable/assets/produk-02-3-8c6d7920.webp";
const load = async ({ url }) => {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 3600, private: false }
  };
};
let pilihButton = 3;
let discountTag = false;
let productName = "Pro Gainer";
let disablePriceJumbotron = false;
let pinLogo = false;
let labelTxtPembelian = false;
let subTitlePin = false;
let crownPin = false;
let hargaActual = "Rp235.000";
let orderButton = false;
const Index_gainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  $$unsubscribe_modal();
  return `${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      crownPin,
      hashtagText: "",
      productName,
      pilihButton,
      disablePriceJumbotron,
      banner: BannerJumbotron,
      txtPenawaran: "MENAMBAH MASA OTOT BEBAS LEMAK",
      classTxtPenawaran: "text-white",
      classTxtBtnOrder: "text-amber-900",
      txtPembelian: "Pembelian " + productName,
      classTxtPembelian: "text-white",
      hargaAwal: "RP. 265.000,-",
      hargaAkhir: "RP. 235.000,-",
      persenPotongan: "11",
      discountTag,
      orderBtnText: "Cek Produknya",
      bannerBawah: "BEST SELLER MUSCLE FIRST PRODUCT",
      waLink: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      shopeeLink: "https://shopee.co.id/musclefirstofficialshop",
      labelTxtPembelian
    },
    {},
    {}
  )}


${validate_component(SectionTwelve, "SectionTwelve").$$render(
    $$result,
    {
      id: "musclefirst-education",
      pinLogo,
      title: "GOLD SERIES",
      subtitle: productName + "?",
      titlePart: "",
      image: EducationImg,
      educationCardList
    },
    {},
    {}
  )}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      title: "Promo Terbaik",
      subtitle: productName + " Gold Series",
      description: 'Muscle First <span class="font-bold italic">' + productName + "</span> Gold Series kemasan baru, dapatkan kesempatan terbatas untuk pembelian " + productName,
      image: GainerOne,
      classTxtBtnOrder: "text-amber-900",
      orderBtnText: "Cek Produknya"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      subTitlePin,
      subtitle: productName,
      title: "COCOK BUAT KAMU YANG",
      cocokCardList,
      gridCount: cocokCardList.length
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      productName,
      bgImg: FeatureImage,
      imgLink: "",
      altImg: "FeatureImage",
      subTitle: "Muscle First",
      sizeOne: "",
      sizeTwo: "",
      title: productName,
      btnText: "Beli Sekarang",
      rasaList,
      cocokCardOtherList: cocokCardList
    },
    {},
    {}
  )}

${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      title: "ORDER " + productName + " SEKARANG",
      btnText: "Beli Sekarang"
    },
    {},
    {}
  )}
    
${validate_component(SectionSize, "SectionSize").$$render(
    $$result,
    {
      productName,
      title: "ORDER SEKARANG",
      products: productList
    },
    {},
    {}
  )}

${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}

${validate_component(SectionSix, "SectionSix").$$render(
    $$result,
    {
      subtitle: "Kenapa Harus",
      title: '<span class="uppercase">' + productName + '</span> <span class="max-w-xl uppercase">GOLD SERIES</span>',
      manfaatList
    },
    {},
    {}
  )}



${``}

${validate_component(SectionThirteen, "SectionThirteen").$$render(
    $$result,
    {
      subtitleOne: "Gold Series",
      titleOne: productName,
      subtitleTwo: "Buruan",
      titleTwo: '<span class="block uppercase font-black">Tunggu</span> <span class="block uppercase font-black">Apalagi?</span>',
      btnText: "Beli Sekarang!!",
      descText: 'Mengandung <span class="text-amber-500 font-bold">55 gram</span> protein per saji yang mampu menambah massa otot lebih berisi, <span class="text-amber-500 font-bold">160 gram</span> karbohidrat kompleks yang mengandung lebih banyak nutrisi untuk tubuh. Selain itu, dengan konsumsi ' + productName + ', kamu sudah bisa dapatkan <span class="text-amber-500 font-bold">1.030 kalori</span> per saji.'
    },
    {},
    {}
  )}


${validate_component(SectionEleven, "SectionEleven").$$render(
    $$result,
    {
      subtitle: productName,
      title: "Testimonial",
      testimonialCardList
    },
    {},
    {}
  )}

${validate_component(SectionNine, "SectionNine").$$render(
    $$result,
    {
      orderButton,
      classShopee: "gainer-shopee",
      classWa: "gainer-wa",
      subtitle: "Order Now",
      title: productName,
      description: "Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini",
      linkShopee: "https://shopee.co.id/universal-link/product/8802988/896956194?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_lp-gainer_bp&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=lp-gainer",
      linkWhatsapp: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+" + productName + "+(" + hargaActual + ")+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      linkOrderOnline: "https://musclefirst.orderonline.id/muscle-first-pro-gainer"
    },
    {},
    {}
  )}

${validate_component(SectionTen, "SectionTen").$$render(
    $$result,
    {
      subtitle: "Temukan Agen Tedekat di Kota mu",
      title: "Muscle First " + productName
    },
    {},
    {}
  )}

${validate_component(SectionDisclaimer, "SectionDisclaimer").$$render(
    $$result,
    {
      subtitleOne: "Disclaimer Product",
      titleOne: productName,
      descTextOne: 'Konten yang terdapat dalam website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> merupakan informasi yang disediakan sebagai layanan umum. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> tidak memberikan jaminan atau garansi terhadap keakuratan, kelengkapan, atau keandalan informasi yang tersedia di website ini. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan atau kepercayaan terhadap informasi yang tersedia di website ini.',
      descTextTwo: 'Informasi yang tersedia di website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website <b class="text-amber-600 uppercase text-sm">Musclefirst</b>.',
      descTextThree: 'Kami berhak untuk mengubah atau memperbaharui informasi yang tersedia di website <b class="text-sm uppercase text-amber-500">musclefirst.co.id</b> tanpa pemberitahuan terlebih dahulu. <b class="text-amber-600 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas keakuratan atau kelengkapan informasi yang tersedia di website lain yang terhubung ke website ini.'
    },
    {},
    {}
  )}`;
});
export {
  Index_gainer as default,
  load
};
