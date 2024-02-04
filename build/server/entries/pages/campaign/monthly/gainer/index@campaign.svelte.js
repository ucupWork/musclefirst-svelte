import { c as create_ssr_component, v as validate_component } from "../../../../../_app/immutable/chunks/index-b361c760.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionTwo, b as SectionThree, c as SectionFour, d as SectionSize, e as SectionCertified, f as SectionFive, g as SectionSeven, h as SectionEight, i as SectionNine } from "../../../../../_app/immutable/chunks/SectionCertified-6d8bacc4.js";
import { S as SectionCountdown } from "../../../../../_app/immutable/chunks/SectionCountdown-467d4a3b.js";
import { R as Rasa1, a as Rasa2, b as Rasa3, c as Rasa4, d as Rasa5, I as Icon1, e as Icon2, f as Icon3, g as Icon4 } from "../../../../../_app/immutable/chunks/rasa-5-0b65fe19.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/Index-e1670c10.js";
import "../../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
import "../../../../../_app/immutable/chunks/IndexCount-3e5ef3dc.js";
const Manfaat1 = "/_app/immutable/assets/icon-01-f2438933.webp";
const Manfaat3 = "/_app/immutable/assets/icon-03-1049267d.webp";
const Manfaat4 = "/_app/immutable/assets/icon-04-02251047.webp";
const Manfaat5 = "/_app/immutable/assets/icon-05-7c47a9cd.webp";
const Manfaat6 = "/_app/immutable/assets/icon-06-fac6ebba.webp";
const Manfaat7 = "/_app/immutable/assets/icon-07-e9af73c5.webp";
const Manfaat8 = "/_app/immutable/assets/icon-08-e177c572.webp";
const Manfaat9 = "/_app/immutable/assets/icon-09-ee40853c.webp";
const Testi1 = "/_app/immutable/assets/testi-01-41f8a1ee.png";
const Testi2 = "/_app/immutable/assets/testi-02-893f8549.png";
const Testi3 = "/_app/immutable/assets/testi-03-bdacd5d5.png";
const Testi4 = "/_app/immutable/assets/testi-04-883b949c.png";
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
    title: "Membantu menurunkan berat badan",
    linkImg: Manfaat1,
    altImg: "ProteinSupplement",
    txtDesc: "Buat kalian yang mau nurunin berat badan atau mau bentuk body goals, ini cocok banget buat kamu."
  },
  {
    id: "2",
    title: "Harga ekonomis cocok buat semua kalangan",
    linkImg: Manfaat8,
    altImg: "Corn",
    txtDesc: 'Dengan kualitas yang juara, <span class="font-bold">PRO WHEY</span> Strawberry ini bisa kalian beli dengan harga yang sangat terjangkau.'
  },
  {
    id: "3",
    title: "Rasa yang pasti enak!",
    linkImg: Manfaat3,
    altImg: "Discount",
    txtDesc: 'Rasa nya enak dan cocok dengan lidah Indonesia, tau kan kalo masalah RASA <span class="font-bold uppercase">Muscle First</span> PALING JUARA!!'
  },
  {
    id: "4",
    title: "Pastinya Halal dan BPOM",
    linkImg: Manfaat9,
    altImg: "Fat",
    txtDesc: '<span class="font-bold uppercase">Muscle First</span> sudah bersertifikasi HALAL dan BPOM dan ISO, udah deh buruan beli!!'
  },
  {
    id: "5",
    title: "Tanpa pemanis buatan",
    linkImg: Manfaat4,
    altImg: "Flavor",
    txtDesc: 'Eitss, meskipun rasanya enak, <span class="font-bold uppercase">Muscle First</span> menggunakan pemanis alami stevia yang pastinya Zero Calories.'
  },
  {
    id: "6",
    title: "Bisa dikonsumsi dengan banyak cara",
    linkImg: Manfaat5,
    altImg: "Protect",
    txtDesc: "Selain dapat di minum, pro whey juga bisa di kreasikan menjadi kue, oatmeal ataupun granola bar"
  },
  {
    id: "7",
    title: "Aman untuk lambung",
    linkImg: Manfaat6,
    altImg: "Eating",
    txtDesc: 'Konsumsi whey protein <span class="font-bold uppercase">Muscle First</span> ga bikin perut kembung dan begah karena aman buat lambung.'
  },
  {
    id: "8",
    title: "No amino spiking",
    linkImg: Manfaat7,
    altImg: "Halal",
    txtDesc: 'Produk <span class="font-bold uppercase">Muscle First</span> bebas Amino Spiking sehingga aman untuk dikonsumsi.'
  }
];
const cocokCardList = [
  {
    id: "1",
    title: "Waktu Makan",
    linkImg: Icon1,
    altImg: "Waktu Makan",
    txtDesc: "Terlalu sibuk hingga tidak ada waktu makan"
  },
  {
    id: "2",
    title: "Berat Badan",
    linkImg: Icon2,
    altImg: "Berat Badan",
    txtDesc: "Ingin membantu pembentukan otot tubuh"
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
    title: "Rendah Lemak",
    linkImg: Icon4,
    altImg: "Rendah Lemak",
    txtDesc: "Ingin membantu pembentukan otot tubuh namun tetap rendah lemak"
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
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-7785de51.webp";
const GainerOne = "/_app/immutable/assets/produk-01-1-75f72b12.webp";
const GainerTwo = "/_app/immutable/assets/produk-02-3-20339520.webp";
const GainerThree = "/_app/immutable/assets/produk-03-a53de201.webp";
let pilihButton = 1;
let discountTag = false;
let productName = "Pro Gainer";
let disableBottomBanner = false;
let disablePriceJumbotron = false;
let labelTxtPembelian = false;
let beforePriceLabel = true;
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Campaign Pro Gainer",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      pilihButton,
      discountTag,
      disableBottomBanner,
      disablePriceJumbotron,
      banner: BannerJumbotron,
      txtPenawaran: "Berisi makin keren, dengan pro gainer!",
      classTxtPenawaran: "text-white",
      txtPembelian: "Dengan " + productName,
      classTxtPembelian: "text-white",
      orderBtnText: "Cek Produknya Sekarang",
      beforePrice: "911.400",
      afterPrice: "600.000",
      persenPotongan: "11",
      bannerBawah: "BEST SELLER MUSCLE FIRST PRODUCT",
      waLink: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      shopeeLink: "https://shopee.co.id/musclefirstofficialshop",
      labelTxtPembelian
    },
    {},
    {}
  )}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      onBgColor: true,
      subtitle: "",
      title: "Apakah kamu pernah mengalami?",
      cocokCardList,
      gridCount: cocokCardList.length,
      bgColor: "zinc-900",
      textHead: "zinc-900",
      textSubHead: "zinc-100",
      borderColor: "zinz-50",
      cardColor: "zinc-800",
      bgImgColor: "white",
      txtDescColor: "gray-100"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      subtitle: productName + " ",
      title: '<span class="block uppercase">Penambah </span> \n<span class="block uppercase">Berat badan?</span> ',
      descriptionOne: productName + ' adalah susu suplemen yang mengandung komposisi yang lengkap, seperti protein, karboidrat, dna juga kalori yang cukup tinggi. maka dari itu <span class="font-bold italic">' + productName + "</span> adalah pilihan yang tepat untuk kamu yang ingin menambah berat badan, membentuk otot tubuh, menambah massa otot, dan memproduksi sumber energi saat beraktivitas.",
      descriptionTwo: ' <span class="font-bold uppercase">Pro Gainer</span> merupakan bubuk portein berkalori tinggi, dengan rata-rata mengandung 160 gram karbohidrat, 55 gram protein dan 1030 kalori gainer per serving-nya.',
      imgLink: GainerOne,
      altImg: "AboutImage",
      bgColor: "zinc-800",
      textHead: "white",
      textSubHead: "amber-500",
      txtDescColor: "zinc-100"
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      txtTitleColor: "zinc-900",
      bgColor: "transparent",
      productName,
      bgImg: GainerTwo,
      imgLink: "",
      altImg: "Gainer",
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

${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      subtitle: productName,
      title: '<span class="block">Ini Fungsi</span> \n<span class="block max-w-xl">' + productName + " Yang Baik Untuk Kesehatan</span>",
      manfaatList
    },
    {},
    {}
  )}



${validate_component(SectionSeven, "SectionSeven").$$render(
    $$result,
    {
      subtitle: productName,
      title: "Testimonial",
      testimonialCardList
    },
    {},
    {}
  )}

${validate_component(SectionCountdown, "SectionCountdown").$$render(
    $$result,
    {
      bgColorSection: "zinc-100",
      bgColor: "yellow-600",
      title: "Periode Akhir Bulan",
      subtitle: "Promo Terbatas",
      dateText: "1 - 30 Oktober 2022",
      textColor: "white"
    },
    {},
    {}
  )}

${validate_component(SectionEight, "SectionEight").$$render(
    $$result,
    {
      bgColorSection: "zinc-900",
      beforePriceLabel,
      subtitle: "Promo Khusus Pemesanan Pre Order",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      imgLink: GainerThree,
      altImg: "HargaImage",
      titlePrice: '<span class="block text-white">Pake Bulking Hemat</span>',
      descriptionPrice: '<h3 class="text-gray-100 font-base text-xl md:text-2xl">Dengan berbagai manfaat diatas</h3>\n<h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>' + productName + '</b> + <b>PRO Creatine</b> bisa didapatkan</h3>\n<h3 class="text-gray-100 font-base text-xl md:text-2xl uppercase font-bold">Cuma dengan harga</h3>',
      beforePrice: "486.600",
      afterPrice: "416.600",
      linkShopee: "https://shopee.co.id/Muscle-First-Paket-Bulking-Pembesar-Badan-Pro-Gold-Gainer-2lbs-Creatine-300gr-i.8802988.294373573?sp_atk=6e9bc972-b8c4-4318-a604-4551d55bbc10&xptdk=6e9bc972-b8c4-4318-a604-4551d55bbc10",
      linkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bgainer%22"
    },
    {},
    {}
  )}

${validate_component(SectionNine, "SectionNine").$$render(
    $$result,
    {
      subtitle: "Order Now",
      title: productName
    },
    {},
    {}
  )}`;
});
export {
  Index_campaign as default
};
