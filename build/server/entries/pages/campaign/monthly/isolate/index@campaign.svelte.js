import { c as create_ssr_component, v as validate_component } from "../../../../../_app/immutable/chunks/index-b361c760.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionTwo, b as SectionThree, c as SectionFour, d as SectionSize, e as SectionCertified, f as SectionFive, g as SectionSeven, h as SectionEight, i as SectionNine } from "../../../../../_app/immutable/chunks/SectionCertified-6d8bacc4.js";
import { S as SectionCountdown } from "../../../../../_app/immutable/chunks/SectionCountdown-467d4a3b.js";
import { c as cocokCardList, r as rasaList, m as manfaatList, t as testimonialCardList } from "../../../../../_app/immutable/chunks/index-8626de92.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/Index-e1670c10.js";
import "../../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
import "../../../../../_app/immutable/chunks/IndexCount-3e5ef3dc.js";
import "../../../../../_app/immutable/chunks/rasa-3-529bc4cb.js";
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-d87de5dc.webp";
const IsolateOne = "/_app/immutable/assets/produk-01-1-4eeae36c.webp";
const IsolateTwo = "/_app/immutable/assets/produk-02-3-1a0e5daf.webp";
const IsolateThree = "/_app/immutable/assets/produk-03-6983b6bb.webp";
let pilihButton = 1;
let discountTag = false;
let productName = "Pro Isolate";
let disableBottomBanner = false;
let disablePriceJumbotron = false;
let labelTxtPembelian = false;
let beforePriceLabel = true;
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Campaign Pro Isolate",
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
      txtPenawaran: "Whey Terbaik Bebas Lemak!",
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
      bgColor: "white",
      textHead: "rose-600",
      textSubHead: "zinc-100",
      cardColor: "zinc-100",
      borderColor: "purple-300",
      bgImgColor: "white",
      txtDescColor: "gray-900"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      subtitle: productName + " ",
      title: '<span class="block uppercase">Bebas </span> \n<span class="block uppercase">Lemak?</span> ',
      descriptionOne: productName + ' adalah susu suplemen yang mengandung komposisi yang lengkap, seperti protein, karboidrat, dna juga kalori yang cukup tinggi. maka dari itu <span class="font-bold italic">' + productName + "</span> adalah pilihan yang tepat untuk kamu yang ingin menambah berat badan, membentuk otot tubuh, menambah massa otot, dan memproduksi sumber energi saat beraktivitas.",
      descriptionTwo: ' <span class="font-bold uppercase">Pro Isolate</span> merupakan bubuk portein berkalori tinggi, dengan rata-rata mengandung 160 gram karbohidrat, 55 gram protein dan 1030 kalori Isolate per serving-nya.',
      imgLink: IsolateOne,
      altImg: "AboutImage",
      bgColor: "zinc-100",
      textHead: "black",
      textSubHead: "cyan-500",
      txtDescColor: "zinc-900"
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
      bgImg: IsolateTwo,
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
      bgColorSection: "zinc-300",
      bgColor: "yellow-600",
      title: "Periode Akhir Bulan",
      subtitle: "Promo Terbatas",
      dateText: "1 - 30 Oktober 2022",
      textColor: "zinc-900"
    },
    {},
    {}
  )}

${validate_component(SectionEight, "SectionEight").$$render(
    $$result,
    {
      bgColorSection: "zinc-100",
      beforePriceLabel,
      subtitle: "Promo Khusus Pemesanan Pre Order",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      imgLink: IsolateThree,
      altImg: "HargaImage",
      titlePrice: '<span class="block text-black">Pake Hemat Terbatas, Bebas Lemak</span>',
      descriptionPrice: '<h3 class="text-gray-800 font-base text-xl md:text-2xl">Dengan berbagai manfaat diatas</h3>\n<h3 class="text-gray-900 font-base text-xl md:text-2xl"><b>' + productName + '</b> + <b>Jersey</b> bisa didapatkan</h3>\n<h3 class="text-gray-900 font-base text-xl md:text-2xl uppercase font-bold">Cuma dengan harga</h3>',
      beforePrice: "486.600",
      afterPrice: "416.600",
      linkShopee: "https://shopee.co.id/Muscle-First-Paket-Bulking-Pembesar-Badan-Pro-Gold-Isolate-2lbs-Creatine-300gr-i.8802988.294373573?sp_atk=6e9bc972-b8c4-4318-a604-4551d55bbc10&xptdk=6e9bc972-b8c4-4318-a604-4551d55bbc10",
      linkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bisolate%22"
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
