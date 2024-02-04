import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { P as ProductOne, S as SectionTwo } from "../../../../../_app/immutable/chunks/produk-01-1-400aa5ec.js";
import { I as Index } from "../../../../../_app/immutable/chunks/Index-e1670c10.js";
import "../../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const ComponentListAgen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
let buttonTitle = "Langsung Cek Promonya!";
const TopBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Banner: Banner2 } = $$props;
  let { Bannerlg: Bannerlg2 } = $$props;
  let { titleName: titleName2 } = $$props;
  if ($$props.Banner === void 0 && $$bindings.Banner && Banner2 !== void 0)
    $$bindings.Banner(Banner2);
  if ($$props.Bannerlg === void 0 && $$bindings.Bannerlg && Bannerlg2 !== void 0)
    $$bindings.Bannerlg(Bannerlg2);
  if ($$props.titleName === void 0 && $$bindings.titleName && titleName2 !== void 0)
    $$bindings.titleName(titleName2);
  return `<div class="${"relative"}"><div class="${"hidden xl:block lg:block md:block"}"><div class="${"text-center relative"}"><img${add_attribute("src", Bannerlg2, 0)}${add_attribute("alt", titleName2, 0)} class="${"w-full"}">
            
            <button class="${"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-xl italic p-2 px-16 text-white rounded-full border border-yellow-400"}">${escape(buttonTitle)}</button></div></div>
    <div class="${"hidden xs:block sm:block md:hidden w-full"}"><div class="${"text-center"}"><img${add_attribute("src", Banner2, 0)}${add_attribute("alt", titleName2, 0)} class="${"w-full"}">
            <div class="${"bg-black py-4"}"><button class="${"bg-transparent xs:text-sm sm:text-base mb-4 italic p-1 px-16 text-white rounded-full border border-yellow-400"}">${escape(buttonTitle)}</button></div></div></div></div>`;
});
const Banner = "/_app/immutable/assets/banner-square-1852a64d.jpg";
const Bannerlg = "/_app/immutable/assets/banner-width-adedfc27.webp";
const textBorder = "/_app/immutable/assets/slash-kuning-0865e166.png";
let titleName = "Bentuk Tubuhmu Suarakan Kesehatanmu";
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

${validate_component(TopBanner, "TopBanner").$$render($$result, { Banner, Bannerlg, titleName }, {}, {})}

<div class="${"bg-black"}"><h6 class="${"text-white font-semibold p-10 md:px-20 sm:px-11 xs:px-5 md:text-2xl sm:text-sm xs:text-xs text-justify"}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio molestiae consequuntur deleniti soluta, error, esse sit facilis facere eos temporibus repellendus veritatis velit autem architecto maiores officia magni nobis possimus pariatur reprehenderit perferendis. In ad consectetur praesentium saepe vel voluptatem unde nisi! Sapiente laudantium minima sunt? Aliquid, in vero? Dolores dolorem eos commodi suscipit sed, quidem perspiciatis modi esse amet necessitatibus eligendi odio nisi a autem. Quidem qui consequatur labore dolor iure, dignissimos autem voluptatem explicabo nulla accusamus dolorem modi! Voluptatem rerum quidem vel aspernatur quibusdam, quisquam necessitatibus laborum, autem non recusandae eligendi! Unde velit quisquam accusantium, fuga alias optio doloribus corporis rerum magnam reprehenderit tempora cupiditate ipsum distinctio excepturi eum eius dolorem itaque, natus necessitatibus. Aliquam pariatur voluptatibus fugit.
    </h6>
<div class="${"mx-5 my-3 text-center"}"><img${add_attribute("src", textBorder, 0)} alt="${"border text"}" class="${"mx-auto w-56 sm:w-44 xs:w-20"}"></div></div>



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

${validate_component(ComponentListAgen, "ComponentListAgen").$$render($$result, { subtitle: "Order Now", title: titleName }, {}, {})}`;
});
export {
  Index_campaign as default
};
