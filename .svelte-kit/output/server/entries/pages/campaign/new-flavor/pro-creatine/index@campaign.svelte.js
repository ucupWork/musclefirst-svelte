import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionSix, b as SectionTwo, c as SectionThree, d as SectionCertified, e as SectionAllProducts, f as SectionFour } from "../../../../../_app/immutable/chunks/SectionCertified-6ade95e6.js";
import { c as cocokCardList } from "../../../../../_app/immutable/chunks/index-9e56f2b5.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/Index-d5c83651.js";
import "../../../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-42e8fea8.webp";
const ProductOne = "/_app/immutable/assets/produk-01-1-a0aaa494.webp";
const ProductTwoOne = "/_app/immutable/assets/produk-02-1-0ed3837a.webp";
const ProductTwo = "/_app/immutable/assets/produk-02-2-60b700b1.webp";
const HargaUnflav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
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
                <div class="${"flex flex-col space-y-4 w-full md:w-96 h-auto px-4 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-0"}"><div class="${"flex justify-center md:justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-3 px-4 md:px-8 rounded-full"}"><div class="${"w-auto h-auto md:mr-4"}"><span class="${"hidden md:block w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"3"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"}"></path></svg></span></div>
                        <span class="${"block text-md md:text-md font-black text-amber-900 uppercase"}">Cek Agent Terdekat dikotamu</span></div></div></div></div></div></section>`;
});
let productName = "Pro Creatine Unflavored";
let subTitlePin = false;
let pinLogo = false;
let beforePriceLabel = true;
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: `Rasa Terbaru - ${productName}`,
      description: `Creatine terbaik untuk menambah massa otot yang mempunyai 6 varian rasa yang enak-enak. ${productName} aman dikonsumsi karna sudah bersertifikat halal dan BPOM.`,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      banner: BannerJumbotron,
      txtPenawaran: "",
      txtSubPenawaran: "",
      classTxtPenawaran: "text-white",
      classtxtSubPenawaran: "text-white",
      orderBtnText: ""
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

${validate_component(HargaUnflav, "HargaUnflav").$$render(
    $$result,
    {
      bgColorSection: "zinc-900",
      beforePriceLabel,
      subtitle: "Promo Khusus Pemesanan Pre Order",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      imgLink: ProductTwoOne,
      altImg: "HargaImage",
      titlePrice: '<span class="block text-white">Muscle First Pro Creatine</span>',
      descriptionPrice: '\r\n    <span class="uppercase font-bold text-white">beli di agen terdekat di kotamu</span>\r\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl uppercase font-bold">Dengan harga</h3>',
      bonusText: "<b>Gratis Shaker</b> + <b>Gratis Scoop</b>",
      beforePrice: "150.000",
      afterPrice: "99.000"
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
  )}`;
});
export {
  Index_campaign as default
};
