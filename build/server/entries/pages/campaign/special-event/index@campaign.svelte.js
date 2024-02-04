import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, d as each } from "../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import { p as productList } from "../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { P as ProductOne, S as SectionTwo } from "../../../../_app/immutable/chunks/produk-01-1-400aa5ec.js";
import { I as Index } from "../../../../_app/immutable/chunks/Index-e1670c10.js";
import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const css = {
  code: '@font-face{font-family:AcrossTheStreet;font-style:normal;font-weight:800;src:local("AcrossTheStreetRegular"),local("Across-The-Street"),url(/assets/fonts/across-the-street.otf) format("otf")}.header-text.svelte-lx1grp{font-family:AcrossTheStreet}',
  map: null
};
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banner } = $$props;
  let { txtPenawaran } = $$props;
  let { classTxtPenawaran } = $$props;
  let { txtSubPenawaran } = $$props;
  let { classtxtSubPenawaran } = $$props;
  let { orderBtnText } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.txtPenawaran === void 0 && $$bindings.txtPenawaran && txtPenawaran !== void 0)
    $$bindings.txtPenawaran(txtPenawaran);
  if ($$props.classTxtPenawaran === void 0 && $$bindings.classTxtPenawaran && classTxtPenawaran !== void 0)
    $$bindings.classTxtPenawaran(classTxtPenawaran);
  if ($$props.txtSubPenawaran === void 0 && $$bindings.txtSubPenawaran && txtSubPenawaran !== void 0)
    $$bindings.txtSubPenawaran(txtSubPenawaran);
  if ($$props.classtxtSubPenawaran === void 0 && $$bindings.classtxtSubPenawaran && classtxtSubPenawaran !== void 0)
    $$bindings.classtxtSubPenawaran(classtxtSubPenawaran);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  $$result.css.add(css);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900"}" style="${"background-image: url(" + escape(banner, true) + ");"}"><div class="${"col-span-full w-full h-screen flex justify-center items-center bg-transparent"}"><div class="${"flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-0 relative"}"><div class="${"flex flex-col md:flex-row w-full h-auto justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"flex flex-col justify-center items-center space-y-2 w-auto h-auto md:mt-0"}"><div class="${"flex flex-col space-y-4 w-auto h-auto max-w-xl md:max-w-4xl text-center bg-black/50 md:bg-transparent rounded p-8 md:p-0"}"><span class="${"font-black uppercase text-yellow-200 font-bankghotic"}">Musclefirst</span>
                            <h1 id="${"header-text"}" class="${"uppercase font-extrabold font-blackttnorms text-white text-7xl md:text-8xl " + escape(classTxtPenawaran, true) + " leading-none tracking-tight svelte-lx1grp"}">${escape(txtPenawaran)}</h1>

                            <h2 class="${"text-gradient font-display " + escape(classtxtSubPenawaran, true) + " text-white text-2xl md:text-7xl leading-none p-2 svelte-lx1grp"}"><span class="${"block uppercase"}">${escape(txtSubPenawaran)}</span></h2></div></div></div>

                <div class="${"hidden md:flex flex-col md:flex-row justify-center items-center w-full"}"><button class="${"cursor-pointer flex justify-center items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-amber-200 to-yellow-200 shadow-lg shadow-orange-500/50 border-4 border-yellow-900 mt-4 md:mt-8 rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"text-2xl uppercase font-black text-amber-900"}">${escape(orderBtnText)}</span></div></button></div></div></div></div>
    
    <div class="${"absolute inset-x-0 bottom-0 w-full h-auto"}"><div class="${"grid md:hidden grid-cols-2 gap-0 w-full"}"><button class="${"col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8"}"><div class="${"w-full h-auto rounded-full bg-gradient-to-r from-amber-600 to-yellow-500"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8"}"><span class="${"uppercase font-black text-white text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></div></button></div></div>
</section>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-800 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-3xl md:text-4xl font-black text-white leading-none text-center"}"><span class="${"block uppercase max-w-sm"}">${escape(title)}</span></h2></div></div>
        ${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "default",
      top: true,
      bottom: false,
      id: "list-agent",
      classes: "bg-zinc-800"
    },
    {},
    {}
  )}</div></section>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgLinkOne } = $$props;
  let { altImgOne } = $$props;
  let { imgLinkOneTop } = $$props;
  let { altImgOneTop } = $$props;
  let { linkOne } = $$props;
  let { imgLinkTwo } = $$props;
  let { altImgTwo } = $$props;
  let { imgLinkTwoTop } = $$props;
  let { altImgTwoTop } = $$props;
  let { linkTwo } = $$props;
  let { bgColorSection } = $$props;
  if ($$props.imgLinkOne === void 0 && $$bindings.imgLinkOne && imgLinkOne !== void 0)
    $$bindings.imgLinkOne(imgLinkOne);
  if ($$props.altImgOne === void 0 && $$bindings.altImgOne && altImgOne !== void 0)
    $$bindings.altImgOne(altImgOne);
  if ($$props.imgLinkOneTop === void 0 && $$bindings.imgLinkOneTop && imgLinkOneTop !== void 0)
    $$bindings.imgLinkOneTop(imgLinkOneTop);
  if ($$props.altImgOneTop === void 0 && $$bindings.altImgOneTop && altImgOneTop !== void 0)
    $$bindings.altImgOneTop(altImgOneTop);
  if ($$props.linkOne === void 0 && $$bindings.linkOne && linkOne !== void 0)
    $$bindings.linkOne(linkOne);
  if ($$props.imgLinkTwo === void 0 && $$bindings.imgLinkTwo && imgLinkTwo !== void 0)
    $$bindings.imgLinkTwo(imgLinkTwo);
  if ($$props.altImgTwo === void 0 && $$bindings.altImgTwo && altImgTwo !== void 0)
    $$bindings.altImgTwo(altImgTwo);
  if ($$props.imgLinkTwoTop === void 0 && $$bindings.imgLinkTwoTop && imgLinkTwoTop !== void 0)
    $$bindings.imgLinkTwoTop(imgLinkTwoTop);
  if ($$props.altImgTwoTop === void 0 && $$bindings.altImgTwoTop && altImgTwoTop !== void 0)
    $$bindings.altImgTwoTop(altImgTwoTop);
  if ($$props.linkTwo === void 0 && $$bindings.linkTwo && linkTwo !== void 0)
    $$bindings.linkTwo(linkTwo);
  if ($$props.bgColorSection === void 0 && $$bindings.bgColorSection && bgColorSection !== void 0)
    $$bindings.bgColorSection(bgColorSection);
  return `<section id="${"get-product"}" class="${"flex flex-col justify-center items-center w-full h-auto md:h-auto bg-" + escape(bgColorSection, true) + " relative overflow-hidden py-8 md:py-16"}"><div class="${"flex flex-col w-full h-auto px-4 mb-4 md:mb-8"}"><div class="${"flex flex-col justify-center items-center text-center"}"><h1 class="${"font-black font-ttnorms text-2xl md:text-4xl text-white uppercase"}">BodyGoals Planner</h1>
            <h2 class="${"font-black font-blackttnorms text-4xl md:text-6xl text-zinc-50 uppercase"}">Resolusi 2023</h2></div></div>
    <div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative"}"><div class="${"hidden md:block absolute left-0 top-0 w-auto h-auto"}"><img${add_attribute("src", imgLinkOneTop, 0)} class="${"w-64 h-auto"}"${add_attribute("alt", altImgOneTop, 0)}></div>
            <div class="${"flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center bg-zinc-900/50 border border-[#753137]"}"><a target="${"_blank"}" rel="${"noreferrer"}"${add_attribute("href", linkOne, 0)} class="${"flex w-full h-auto justify-center items-center"}"><img${add_attribute("src", imgLinkOne, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImgOne, 0)}></a>
                <a href="${"/"}" class="${"w-64 h-auto px-4 py-2 border border-zinc-900 bg-[#753137]"}"><span class="${"font-bold text-white"}">Ikuti Resolusi Ini</span></a></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative"}"><div class="${"hidden md:block absolute right-0 top-0 w-auto h-auto"}"><img${add_attribute("src", imgLinkTwoTop, 0)} class="${"w-64 h-auto"}"${add_attribute("alt", altImgTwoTop, 0)}></div>
            <div class="${"flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center bg-zinc-900/50 border border-[#753137]"}"><a target="${"_blank"}" rel="${"noreferrer"}"${add_attribute("href", linkTwo, 0)} class="${"flex w-full h-auto justify-center items-center"}"><img${add_attribute("src", imgLinkTwo, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImgTwo, 0)}></a>
                <a href="${"/"}" class="${"w-64 h-auto px-4 py-2 border border-zinc-900 bg-[#753137]"}"><span class="${"font-bold text-white"}">Ikuti Resolusi Ini</span></a></div></div></div></section>`;
});
const SectionAllProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = [] } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${products ? `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-center items-center w-full h-auto py-8 md:py-4 px-8 md:px-24 bg-zinc-300 shadow border-b-4"}">${each(products, (list) => {
    return `<div class="${"flex flex-row w-full md:w-auto h-auto"}"><a${add_attribute("href", `https://musclefirst.co.id/${list.linkHref}`, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-auto border py-2 px-4 md:px-8"}"><span class="${"uppercase block text-sm md:text-sm font-black text-white"}">${escape(list.name)}</span></a>
        </div>`;
  })}</div></section>` : ``}`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<section class="${"flex justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-400/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex justify-center items-center space-x-4 w-full h-auto"}"><div class="${"grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2"}">${each(certifiedCardList, (list) => {
    return `<div class="${"col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span></div>
                </div>`;
  })}</div></div></div></section>`;
});
const ProductTwoOne = "/_app/immutable/assets/produk-02-1-127da8ff.webp";
const ProductTwo = "/_app/immutable/assets/produk-02-2-d61295c9.webp";
const ProductThreeOne = "/_app/immutable/assets/produk-03-1-0bd8b3b9.webp";
const ProductThree = "/_app/immutable/assets/produk-03-2-c8755989.webp";
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-4a4ed9c3.webp";
let titleName = "Spesial Event Natal";
const Index_campaign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: titleName,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      banner: BannerJumbotron,
      txtPenawaran: "Solusi Cerdas",
      txtSubPenawaran: "Raih Badan Ideal",
      classTxtPenawaran: "text-white",
      classtxtSubPenawaran: "text-white",
      orderBtnText: "Cek Produknya Sekarang"
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      imgLinkOne: ProductTwoOne,
      imgLinkTwo: ProductTwo,
      altImgOne: `Gainer`,
      altImgTwo: `Isolate`,
      imgLinkOneTop: ProductThreeOne,
      imgLinkTwoTop: ProductThree,
      altImgOneTop: `Resolusi Body Goals`,
      altImgTwoTop: `Resolusi Body Goals`,
      linkOne: `https://shopee.co.id/Paket-Tambah-BB-Akhir-Tahun-Muscle-First-Pro-Gainer-Pro-Creatine-Pro-Nrgy-Suplemen-Fitness-Bulking-i.8802988.18865807140?sp_atk=f834c7d7-6b11-4274-a4ce-b7ac2cd63bbc`,
      linkTwo: `https://shopee.co.id/Paket-Turun-BB-Akhir-Tahun-Muscle-First-Pro-Isolate-Pro-Bcaa-Pro-Nrgy-Suplemen-Fitness-Cutting-i.8802988.23808282702?sp_atk=2610b933-8270-4585-9648-95f6a04f9d5c`,
      bgColorSection: "zinc-900"
    },
    {},
    {}
  )}

${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}
${validate_component(SectionAllProducts, "SectionAllProducts").$$render($$result, { products: productList }, {}, {})}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      bgColorSection: "zinc-900",
      title: '<span class="block">BERAPA HARGANYA?</span>',
      subtitle: "Promo Harga Khusus",
      imgLink: ProductOne,
      altImg: "HargaImage",
      oneBeforePriceLabel: true,
      oneTitlePrice: '<span class="block text-white">Paket Resolusi - Turun BB</span>',
      oneDescriptionPrice: '\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>' + titleName + '</b> <br> Bisa didapatkan</h3>\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>',
      oneBeforePrice: "852.992",
      oneAfterPrice: "743.000",
      oneLinkShopee: "https://shopee.co.id/Paket-Turun-BB-Akhir-Tahun-Muscle-First-Pro-Isolate-Pro-Bcaa-Pro-Nrgy-Suplemen-Fitness-Cutting-i.8802988.23808282702?sp_atk=2610b933-8270-4585-9648-95f6a04f9d5c",
      oneLinkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20paket%20resolusi%20turun%20BB%20Muscle%20First.",
      twoBeforePriceLabel: true,
      twoTitlePrice: '<span class="block text-white">Paket Resolusi - Naik BB</span>',
      twoDescriptionPrice: '\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl"><b>' + titleName + '</b> <br> Bisa didapatkan</h3>\n    <h3 class="text-gray-100 font-base text-xl md:text-2xl">Cuma dengan harga</h3>',
      twoBeforePrice: "542.592",
      twoAfterPrice: "448.000",
      twoLinkShopee: "https://shopee.co.id/Paket-Tambah-BB-Akhir-Tahun-Muscle-First-Pro-Gainer-Pro-Creatine-Pro-Nrgy-Suplemen-Fitness-Bulking-i.8802988.18865807140?sp_atk=f834c7d7-6b11-4274-a4ce-b7ac2cd63bbc",
      twoLinkWhatsapp: "https://wa.me/6285174226889/?text=Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20paket%20resolusi%20tambah%20BB%20Muscle%20First."
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render($$result, { subtitle: "Order Now", title: titleName }, {}, {})}`;
});
export {
  Index_campaign as default
};
