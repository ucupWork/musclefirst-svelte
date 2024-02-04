import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, d as each } from "../../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import { p as productList } from "../../../../../_app/immutable/chunks/list-products-4425d867.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionCertified, a as SectionAllProducts } from "../../../../../_app/immutable/chunks/SectionCertified-5921265a.js";
import { I as Index } from "../../../../../_app/immutable/chunks/Index-d5c83651.js";
import { c as certifiedList } from "../../../../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../../_app/immutable/chunks/index-29c1f748.js";
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
const TextCompFeb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textPromo } = $$props;
  if ($$props.textPromo === void 0 && $$bindings.textPromo && textPromo !== void 0)
    $$bindings.textPromo(textPromo);
  return `<div class="${"bg-black"}"><h6 class="${"text-white font-semibold p-10 md:px-20 sm:px-11 xs:px-5 md:text-2xl sm:text-sm xs:text-xs text-justify"}">${escape(textPromo)}</h6>
    <div class="${"mx-5 my-3 text-center"}"><img${add_attribute("src", textBorder, 0)} alt="${"border text"}" class="${"mx-auto w-56 sm:w-44 xs:w-20"}"></div></div>`;
});
const BulkingImg = "/_app/immutable/assets/pro-gainer-06369cdf.webp";
const CuttingImg = "/_app/immutable/assets/pro-isolate-fb117016.webp";
const GlowingImg = "/_app/immutable/assets/pro-whey-collafit-859ecf27.webp";
const PaketCompFeb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paketResolusi = [
    {
      image: BulkingImg,
      packageName: "Paket Bulking",
      linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=246254074#product_list"
    },
    {
      image: CuttingImg,
      packageName: "Paket Cutting",
      linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=246253966#product_list"
    },
    {
      image: GlowingImg,
      packageName: "Paket Glowing",
      linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=248465402#product_list"
    }
  ];
  return `<div>${each(paketResolusi, ({ image, packageName, linkShopee }) => {
    return `<section class="${"bg-black"}"><a${add_attribute("href", linkShopee, 0)}><div class="${"container mx-auto py-10 px-4 sm:px-0 lg:px-8"}"><div class="${"grid grid-cols-1 md:grid-cols-3 items-baseline gap-8"}"><div class="${"mt-5 md:mt-0"}"><h1 class="${"text-white uppercase text-center font-bold text-3xl lg:text-5xl"}">${escape(packageName)}</h1>
                    <img${add_attribute("src", image, 0)}${add_attribute("alt", packageName, 0)} class="${"object-cover mt-4 rounded-lg bg-warmGray-600 shadow-md p-2 lg:p-5"}"></div>
                <div class="${"col-span-2"}"><h1 class="${"text-white text-2xl mb-6 font-semibold text-justify"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</h1>
                        <div class="${"flex flex-row my-3 gap-4"}"><button class="${"p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300"}">pro sesuatu</button>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div></div>
                        <div class="${"flex flex-row my-3 gap-4"}"><button class="${"p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300"}">pro sesuatu</button>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div>
                            <div class="${"p-2 text-center border border-white font-bold text-white"}">55 G <br> Protein</div>
                        </div></div>
            </div></div>
    </a></section>`;
  })}</div>`;
});
const productCampaign = "/_app/immutable/assets/product-combination-d5053bf2.webp";
const BannerBottomFeb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textPromo } = $$props;
  let { textPromoBig } = $$props;
  if ($$props.textPromo === void 0 && $$bindings.textPromo && textPromo !== void 0)
    $$bindings.textPromo(textPromo);
  if ($$props.textPromoBig === void 0 && $$bindings.textPromoBig && textPromoBig !== void 0)
    $$bindings.textPromoBig(textPromoBig);
  return `<div class="${"p-4 bg-warmGray-600 text-center"}"><h3 class="${"text-white font-semibold mt-3 text-3xl lg:text-5xl "}">${escape(textPromo)}</h3>
    <h1 class="${"text-yellow-400 font-bold text-5xl lg:text-8xl"}">${escape(textPromoBig)}</h1>
    <div class="${"py-4 px-20 lg:px-56"}"><img${add_attribute("src", productCampaign, 0)}${add_attribute("alt", textPromo, 0)} class="${""}"></div></div>`;
});
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


${validate_component(TextCompFeb, "TextCompFeb").$$render(
    $$result,
    {
      textPromo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste blanditiis repudiandae earum. Explicabo dolor repellat ipsa minima autem nesciunt neque ab, sed mollitia eaque similique? Rem mollitia vel alias ea excepturi tempora, incidunt eaque culpa numquam recusandae doloribus esse fugit voluptatibus, aliquid repellendus? Laudantium ipsa reprehenderit eius dolor nam consequatur molestiae molestias repellendus, aliquam fugit nesciunt, numquam deleniti nemo cupiditate, aspernatur voluptatum magnam inventore ipsam! Corporis quod consequuntur porro maxime vel laudantium nobis, saepe itaque veniam repellendus, possimus aliquid voluptatibus laboriosam quia eveniet deserunt error unde. Est reiciendis natus dicta labore voluptatem enim adipisci distinctio magni tempora beatae ullam, eveniet eaque nemo? Itaque placeat vitae, maxime commodi quaerat natus nisi beatae accusantium esse iusto corporis dolore aperiam voluptas. Doloremque."
    },
    {},
    {}
  )}


${validate_component(PaketCompFeb, "PaketCompFeb").$$render($$result, {}, {}, {})}

${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}
${validate_component(SectionAllProducts, "SectionAllProducts").$$render($$result, { products: productList }, {}, {})}


${validate_component(BannerBottomFeb, "BannerBottomFeb").$$render(
    $$result,
    {
      textPromo: "Beli Paket Bundling manapun diatas",
      textPromoBig: "Bisa Dapat Angpao"
    },
    {},
    {}
  )}

${validate_component(ComponentListAgen, "ComponentListAgen").$$render(
    $$result,
    {
      subtitle: "Pesan di Agen Terdekat",
      title: titleName
    },
    {},
    {}
  )}`;
});
export {
  Index_campaign as default
};
