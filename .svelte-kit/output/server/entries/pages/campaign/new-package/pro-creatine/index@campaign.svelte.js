import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-e606abe2.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionSix, b as SectionTwo, c as SectionThree, d as SectionCertified, e as SectionAllProducts, f as SectionFour } from "../../../../../_app/immutable/chunks/SectionCertified-74c660db.js";
import { c as cocokCardList } from "../../../../../_app/immutable/chunks/index-9e56f2b5.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-e272f300.js";
import "../../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/Index-1d60b221.js";
import "../../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const SectionFive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { linkShopee } = $$props;
  let { linkWhatsapp } = $$props;
  let { titlePrice } = $$props;
  let { descriptionPrice } = $$props;
  let { bonusText } = $$props;
  let { beforePriceLabel: beforePriceLabel2 } = $$props;
  let { beforePrice } = $$props;
  let { afterPrice } = $$props;
  let { bgColorSection } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.linkShopee === void 0 && $$bindings.linkShopee && linkShopee !== void 0)
    $$bindings.linkShopee(linkShopee);
  if ($$props.linkWhatsapp === void 0 && $$bindings.linkWhatsapp && linkWhatsapp !== void 0)
    $$bindings.linkWhatsapp(linkWhatsapp);
  if ($$props.titlePrice === void 0 && $$bindings.titlePrice && titlePrice !== void 0)
    $$bindings.titlePrice(titlePrice);
  if ($$props.descriptionPrice === void 0 && $$bindings.descriptionPrice && descriptionPrice !== void 0)
    $$bindings.descriptionPrice(descriptionPrice);
  if ($$props.bonusText === void 0 && $$bindings.bonusText && bonusText !== void 0)
    $$bindings.bonusText(bonusText);
  if ($$props.beforePriceLabel === void 0 && $$bindings.beforePriceLabel && beforePriceLabel2 !== void 0)
    $$bindings.beforePriceLabel(beforePriceLabel2);
  if ($$props.beforePrice === void 0 && $$bindings.beforePrice && beforePrice !== void 0)
    $$bindings.beforePrice(beforePrice);
  if ($$props.afterPrice === void 0 && $$bindings.afterPrice && afterPrice !== void 0)
    $$bindings.afterPrice(afterPrice);
  if ($$props.bgColorSection === void 0 && $$bindings.bgColorSection && bgColorSection !== void 0)
    $$bindings.bgColorSection(bgColorSection);
  return `<section id="${"get-product"}" class="${"flex justify-center items-center w-full h-auto md:h-screen bg-" + escape(bgColorSection, true) + " relative overflow-hidden py-8 md:py-0"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center"}"><div class="${"hidden w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8"}"><div class="${"flex flex-col text-center md:text-left w-auto h-auto"}"><span class="${"text-amber-500 font-bold text-xl md:text-2xl"}">${escape(subtitle)}</span>
                    <h2 class="${"text-2xl md:text-4xl font-black text-black leading-none text-left"}"><span class="${"block"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></span></h2></div></div>
            <div class="${"flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><div class="${"flex w-full h-auto justify-center items-center"}"><img${add_attribute("src", imgLink, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 md:pl-24 py-4 md:py-8 text-center md:text-left"}"><h2 class="${"text-2xl md:text-2xl font-black uppercase text-gray-800 tracking-tight text-center md:text-left md:max-w-md mb-4"}"><!-- HTML_TAG_START -->${titlePrice}<!-- HTML_TAG_END --></h2>
                <!-- HTML_TAG_START -->${descriptionPrice}<!-- HTML_TAG_END -->

                ${beforePriceLabel2 ? `<h2 class="${"text-amber-700 font-bold text-2xl md:text-4xl line-through"}">RP. ${escape(beforePrice)},-</h2>` : ``}
                <h1 class="${"text-amber-500 font-black text-3xl md:text-6xl"}">RP. ${escape(afterPrice)},</h1>
                <h3 class="${"text-gray-100 font-base text-xl md:text-2xl"}"><!-- HTML_TAG_START -->${bonusText}<!-- HTML_TAG_END --></h3>
                <div class="${"flex flex-col space-y-4 w-full md:w-96 h-auto px-4 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-0"}"><a rel="${"noreferrer"}"${add_attribute("href", linkShopee, 0)} target="${"_blank"}" class="${"flex justify-center md:justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-3 px-4 md:px-8 rounded-full"}"><div class="${"w-auto h-auto md:mr-4"}"><span class="${"hidden md:block w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-6 h-6 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></div>
                        <span class="${"block text-md md:text-md font-black text-amber-900 uppercase"}">Order Via Shopee</span></a>
                    <a rel="${"noreferrer"}"${add_attribute("href", linkWhatsapp, 0)} target="${"_blank"}" class="${"flex justify-center md:justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-3 px-4 md:px-8 rounded-full"}"><div class="${"hidden md:block w-auto h-auto md:mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-6 h-6 text-whitebi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></div>
                        <span class="${"block text-md md:text-md font-black text-amber-900 uppercase"}">Order Via Whatsapp</span></a></div></div></div></div></section>`;
});
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-ec597bef.webp";
const ProductOne = "/_app/immutable/assets/produk-01-1-566c6d36.webp";
const ProductTwoOne = "/_app/immutable/assets/produk-02-1-e644d4a4.webp";
const ProductTwo = "/_app/immutable/assets/produk-02-2-9cbfaceb.webp";
let productName = "Pro Creatine Pouch";
let subTitlePin = false;
let pinLogo = false;
let beforePriceLabel = true;
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: `Kemasan Terbaru - ${productName}`,
      description: `Creatine terbaik untuk menambah massa otot yang mempunyai 6 varian rasa yang enak-enak. ${productName} aman dikonsumsi karna sudah bersertifikat halal dan BPOM.`,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}
<div>${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      banner: BannerJumbotron,
      txtPenawaran: "Praktis Ekonomis Tingkatkan Massa Otot",
      txtSubPenawaran: "Pro Creatine Pouch",
      classTxtPenawaran: "text-white",
      classtxtSubPenawaran: "text-white",
      orderBtnText: "Cek Produknya Sekarang"
    },
    {},
    {}
  )}
  
  ${validate_component(SectionSix, "SectionSix").$$render(
    $$result,
    {
      subtitle: productName + " ",
      title: '<span class="block uppercase">Tebalkan</span> \r\n    <span class="block uppercase">Massa Otot?</span> ',
      descriptionOne: productName + " merupakan suplemen yang diformulasikan khusus untuk menambah dan menebalkan massa otot dalam tubuh, produk ini tidak menimbulkan efek samping berbahaya dan telah lulus uji Badan Pengawas Obat dan Makanan.",
      descriptionTwo: 'Selain diolah secara halal, produk ini juga mendapat sertifikasi <span class="font-bold uppercase"> GMP (Good Manufacturing product), Halal, BPOM, HACCP,  ISO 22000, & LABDOOR </span>',
      imgLink: ProductOne,
      altImg: "AboutImage",
      bgColor: "zinc-800",
      textHead: "white",
      textSubHead: "amber-500",
      txtDescColor: "zinc-100"
    },
    {},
    {}
  )}
  
  ${validate_component(SectionTwo, "SectionTwo").$$render(
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
  
  ${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      id: "musclefirst-education",
      pinLogo,
      title: "GOLD SERIES",
      subtitle: productName,
      titlePart: "",
      image: ProductTwo,
      cocokCardOtherList: cocokCardList
    },
    {},
    {}
  )}
  
  ${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}
  ${validate_component(SectionAllProducts, "SectionAllProducts").$$render($$result, { products: productList }, {}, {})}
  
  ${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      bgColorSection: "zinc-900",
      beforePriceLabel,
      subtitle: "Promo Khusus Pemesanan Pre Order",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      imgLink: ProductTwoOne,
      altImg: "HargaImage",
      titlePrice: '<span class="block text-white">Muscle First Pro Creatine Pouch 350g</span>',
      descriptionPrice: '\r\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>Gratis Shaker</b> + <b>Gratis Scoop</b></h3>\r\n    <span class="uppercase font-bold text-white">bisa didapatkan</span>\r\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl uppercase font-bold">Dengan harga</h3>',
      beforePrice: "250.000",
      afterPrice: "195.000",
      linkShopee: "https://shopee.co.id/Muscle-First-Pro-Creatine-350g-Pouch-70-servings-Suplemen-Fitness-i.8802988.18570466009?sp_atk=9e836e8b-7078-4135-85f1-a605e177734b&xptdk=9e836e8b-7078-4135-85f1-a605e177734b",
      linkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%promo%20khusus%20Muscle%20First%20pro%2Bcreatine%20pouch%22"
    },
    {},
    {}
  )}
  
  ${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      subtitle: "Order Now",
      title: productName
    },
    {},
    {}
  )}</div>`;
});
export {
  Index_campaign as default
};
