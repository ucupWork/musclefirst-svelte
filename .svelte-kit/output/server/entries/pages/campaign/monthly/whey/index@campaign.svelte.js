import { c as create_ssr_component, v as validate_component } from "../../../../../_app/immutable/chunks/index-1e319aa9.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/common-3de0477a.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionTwo, b as SectionThree, c as SectionFour, d as SectionSize, e as SectionCertified, f as SectionFive, g as SectionSeven, h as SectionEight, i as SectionNine } from "../../../../../_app/immutable/chunks/SectionCertified-7684e47b.js";
import { c as cocokCardList, r as rasaList, m as manfaatList, t as testimonialCardList } from "../../../../../_app/immutable/chunks/index-8626de92.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-e272f300.js";
import "../../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/Index-1d60b221.js";
import "../../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
import "../../../../../_app/immutable/chunks/rasa-3-529bc4cb.js";
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-e0111f61.webp";
const WheyOne = "/_app/immutable/assets/produk-01-1-15a802b3.webp";
const WheyTwo = "/_app/immutable/assets/produk-02-3-dece3a06.webp";
const WheyThree = "/_app/immutable/assets/produk-03-0ec4b407.webp";
let pilihButton = 1;
let discountTag = false;
let productName = "Pro Whey";
let disableBottomBanner = false;
let disablePriceJumbotron = false;
let labelTxtPembelian = false;
let beforePriceLabel = true;
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Campaign Pro Whey",
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
      txtPenawaran: "Bentuk Body goals impianmu, sekarang!",
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
      onBgColor: false,
      subtitle: "",
      title: "Apakah kamu pernah mengalami?",
      cocokCardList,
      gridCount: cocokCardList.length,
      bgColor: "zinc-300/50",
      textHead: "zinc-100",
      textSubHead: "amber-500",
      cardColor: "zinc-100",
      borderColor: "zinz-50",
      bgImgColor: "white",
      txtDescColor: "gray-600"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      subtitle: productName + " 100?",
      title: '<span class="block uppercase">Bentuk badan ideal mu</span> \n<span class="block uppercase">tetap efektif dan berkualitas</span> ',
      descriptionOne: 'WHEY adalah ekstrak protein yang didapat dari proses pembuatan susu menjadi keju. <span class="font-bold italic">' + productName + ' 100</span> menjadi pilihan bagus buat kamu yang baru mau mencoba minuman berprotein dengan <span class="font-bold uppercase">protein yang tinggi serta rendah lemak.</span>',
      descriptionTwo: 'Inovasi baru dari <span class="font-bold italic uppercase">Muscle First</span> untuk mencukupi kebutuhan protein harian dengan harga ekonomis dan kualitas terbaik! Mengandung <span class="font-bold uppercase">24g protein</span> dan <span class="font-bold uppercase">hanya 140 KALORI!</span>',
      imgLink: WheyOne,
      altImg: "AboutImage",
      bgColor: "zinc-100",
      textHead: "zinc-900",
      textSubHead: "amber-500",
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
      bgImg: WheyTwo,
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

${validate_component(SectionEight, "SectionEight").$$render(
    $$result,
    {
      bgColorSection: "zinc-900",
      beforePriceLabel,
      subtitle: "Promo Harga Khusus",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      imgLink: WheyThree,
      altImg: "HargaImage",
      titlePrice: '<span class="block text-white">Dapatkan Harga Khusus Pro Whey 100 Whey Protein</span>',
      descriptionPrice: '\n<h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>' + productName + ' 100</b> bisa didapatkan</h3>\n<h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>',
      beforePrice: "200.000",
      afterPrice: "160.000",
      linkShopee: "https://shopee.co.id/Muscle-First-Pro-Whey-100-Box-isi-10-Sachet-(40g)-Suplemen-Fitness-i.8802988.18772292975?sp_atk=c07fd468-88bf-4222-b64f-49ac84c4171a&xptdk=c07fd468-88bf-4222-b64f-49ac84c4171a&utm_source=shopee&utm_medium=cpc&utm_campaign=whey_shopee&utm_id=M1PSPW01&utm_term=whey",
      linkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bwhey%22"
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
