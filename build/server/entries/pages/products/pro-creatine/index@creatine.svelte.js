import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
/* empty css                                                                              */import { j as modal } from "../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
/* empty css                                                                               */import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-ca5808f6.js";
import { S as SectionOne, a as SectionTwelve, b as SectionTwo, c as SectionThree, d as SectionFour, e as SectionFive, f as SectionCertified, g as SectionSix, h as SectionEleven, i as SectionNine, j as SectionTen, k as SectionDisclaimer } from "../../../../_app/immutable/chunks/SectionDisclaimer-3b641f53.js";
import { e as educationCardList, c as cocokCardList, r as rasaList, m as manfaatList, t as testimonialCardList } from "../../../../_app/immutable/chunks/index-9e56f2b5.js";
import "../../../../_app/immutable/chunks/crown-f3b9967b.js";
import "../../../../_app/immutable/chunks/Index-1d60b221.js";
import "../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const SectionFifteen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  let { brandTitle } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.brandTitle === void 0 && $$bindings.brandTitle && brandTitle !== void 0)
    $$bindings.brandTitle(brandTitle);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-8 bg-zinc-900 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-start z-0"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-8 md:px-24"}"><div class="${"flex flex-col md:flex-row space-x-2 w-auto h-auto text-center md:text-start"}"><h2 class="${"uppercase text-2xl md:text-3xl font-normal text-white leading-none text-center md:text-start"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <span class="${"uppercase text-yellow-200 font-black text-2xl md:text-3xl"}">${escape(subtitle)}</span>
                <span class="${"uppercase text-amber-500 font-black text-2xl md:text-3xl"}">${escape(brandTitle)}</span></div>

            <div class="${"hidden md:flex flex-row space-x-2 w-auto h-auto mt-4"}"><div class="${"w-8 h-8 bg-gray-200"}"></div>
                <div class="${"w-8 h-8 bg-gray-100"}"></div>
                <div class="${"w-8 h-8 bg-white"}"></div></div></div></div></section>`;
});
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-edab9cb8.webp";
const CreatineOne = "/_app/immutable/assets/produk-01-1-1d9e3546.webp";
const EducationImg = "/_app/immutable/assets/education-product-img-e4851a52.webp";
const FeatureImage = "/_app/immutable/assets/produk-02-3-bc109f8f.webp";
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
let productName = "Pro Creatine";
let disablePriceJumbotron = false;
let pinLogo = false;
let labelTxtPembelian = false;
let subTitlePin = false;
let crownPin = true;
let hargaActual = "Rp239.000";
let orderButton = false;
const Index_creatine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  $$unsubscribe_modal();
  return `${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      crownPin,
      hashtagText: "#CreatineTerbaik",
      productName,
      pilihButton,
      disablePriceJumbotron,
      banner: BannerJumbotron,
      txtPenawaran: "tingkatkan massa otot dan energimu",
      classTxtPenawaran: "text-white",
      classTxtBtnOrder: "text-amber-900",
      txtPembelian: "Pembelian " + productName,
      classTxtPembelian: "text-white",
      hargaAwal: "RP. 265.000,-",
      hargaAkhir: "RP. 235.000,-",
      persenPotongan: "11",
      discountTag,
      orderBtnText: "Cek Produknya Sekarang",
      bannerBawah: 'MUSCLE FIRST <span class="font-black">' + productName + "</span> PRODUCT ",
      waLink: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      shopeeLink: "https://shopee.co.id/musclefirstofficialshop",
      labelTxtPembelian
    },
    {},
    {}
  )}
${validate_component(SectionFifteen, "SectionFifteen").$$render(
    $$result,
    {
      title: "Kelengkapan rasa",
      subtitle: "Creatine, hanya di",
      brandTitle: "Musclefirst"
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
      image: CreatineOne,
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
      classShopee: "creatine-shopee",
      classWa: "creatine-wa",
      subtitle: "Order Now",
      title: productName,
      description: "Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini",
      linkShopee: "https://shopee.co.id/universal-link/product/8802988/289998377?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_lp-creatine_bp&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=lp-creatine",
      linkWhatsapp: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+" + productName + "+(" + hargaActual + ")+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      linkOrderOnline: "https://musclefirst.orderonline.id/muscle-first-pro-creatine"
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
  Index_creatine as default,
  load
};
