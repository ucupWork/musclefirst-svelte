import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, d as each } from "../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../_app/immutable/chunks/index-778a8503.js";
import "../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { L as LogoWhite } from "../../_app/immutable/chunks/logo-white-bbda6e5d.js";
/* empty css                                                                         *//* empty css                                                       */import { p as productList } from "../../_app/immutable/chunks/list-products-4425d867.js";
import { I as ImageResponsive } from "../../_app/immutable/chunks/ImageResponsive-f60ed2d2.js";
import { C as CertifiedLabel } from "../../_app/immutable/chunks/CertifiedLabel-d364c987.js";
import "../../_app/immutable/chunks/stores-290123b5.js";
import "../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../_app/immutable/chunks/list-certified-ca6195bc.js";
import "../../_app/immutable/chunks/CardCertified-6d76c674.js";
const CardService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { colorTypeOuter } = $$props;
  let { colorTypeInner } = $$props;
  let { bgUrl } = $$props;
  let { cardText } = $$props;
  let { initService } = $$props;
  if ($$props.colorTypeOuter === void 0 && $$bindings.colorTypeOuter && colorTypeOuter !== void 0)
    $$bindings.colorTypeOuter(colorTypeOuter);
  if ($$props.colorTypeInner === void 0 && $$bindings.colorTypeInner && colorTypeInner !== void 0)
    $$bindings.colorTypeInner(colorTypeInner);
  if ($$props.bgUrl === void 0 && $$bindings.bgUrl && bgUrl !== void 0)
    $$bindings.bgUrl(bgUrl);
  if ($$props.cardText === void 0 && $$bindings.cardText && cardText !== void 0)
    $$bindings.cardText(cardText);
  if ($$props.initService === void 0 && $$bindings.initService && initService !== void 0)
    $$bindings.initService(initService);
  return `<button class="${"col-span-full md:col-span-1 cursor-pointer w-full h-40 md:h-80 text-left overflow-hidden my-4 py-0 text-gray-700 bg-cover md:bg-cover bg-no-repeat bg-right md:bg-top " + escape(colorTypeOuter, true)}" style="${"background-image: url(" + escape(bgUrl, true) + ");"}"><button type="${"button"}" class="${"w-full h-full space-y-4 flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center px-6 pb-4 relative " + escape(colorTypeInner, true)}"><div class="${"absolute inset-x-0 bottom-0 max-w-xs md:max-w-2xl w-auto h-auto px-4 md:px-8 pr-20 md:pr-0 py-8 md:py-16"}"><h1 class="${"font-black text-3xl md:text-5xl my-0 whitespace-pre-line text-white text-left leading-none"}"><!-- HTML_TAG_START -->${cardText}<!-- HTML_TAG_END --></h1></div></button></button>`;
});
const CardProductHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { imgUrl } = $$props;
  let { imgAlt } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { linkHref } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.imgAlt === void 0 && $$bindings.imgAlt && imgAlt !== void 0)
    $$bindings.imgAlt(imgAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.linkHref === void 0 && $$bindings.linkHref && linkHref !== void 0)
    $$bindings.linkHref(linkHref);
  return `<a${add_attribute("id", id, 0)}${add_attribute("href", `/${linkHref}`, 0)} class="${"snap-center"}"><picture><source${add_attribute("srcset", imgUrl, 0)} type="${"image/webp"}">
        ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      srcsetActive: false,
      width,
      height,
      breakpoints: [820, 414, 375],
      src: imgUrl,
      classes: "shadow-lg shadow-yellow-500/50 mx-3 w-48 md:w-64 h-48 md:h-64 max-w-xs overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: imgAlt,
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture></a>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"w-full h-auto bg-[#0a0908] relative py-8 md:py-16 px-4 md:px-16 shadow-lg"}"><div class="${"grid w-full grid-cols-1 border border-zinc-900 px-4 md:px-8 mx-auto lg:px-8 lg:py-16 md:grid-cols-2"}"><div class="${"flex flex-col justify-center md:justify-start items-center md:items-start w-full h-96 py-8 md:py-8 px-4 md:px-8"}"><h1 class="${"font-blackttnorms tracking-tighter text-4xl md:text-5xl font-bold text-white"}">${escape("Hubungi Kami")}</h1>
			<p class="${"pt-2 pb-4 text-white text-center md:text-left max-w-md md:max-w-xs"}">${escape("Jadilah yang pertama mendapatkan update tentang promo kami. Isi formulir ini sekarang!")}</p>
			<div class="${"flex flex-col justify-start items-center md:items-start space-y-4"}"><div class="${"flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"hidden md:block fill-current text-white w-8 md:w-5 h-8 md:h-5 mr-2 sm:mr-6"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>
					<div class="${"flex flex-col items-center md:items-start"}"><span class="${"block text-white"}">Ruko Mutiara Taman Palem</span>
						<span class="${"block text-white"}">Cengkareng, Jakarta Barat 11730</span></div></div>
				<p class="${"flex justify-center items-center md:items-start"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"hidden md:block fill-current text-white w-8 md:w-5 h-8 md:h-5 mr-2 sm:mr-6"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg>
					<span class="${"text-white"}">info@musclefirst.co.id</span></p></div></div>
		<div class="${"flex flex-col justify-center items-center w-full h-96 shadow shadow-yellow-200 py-8 md:py-4 px-2 md:px-2 relative"}"><div class="${"flex flex-col justify-center items-center space-y-2 md:space-y-4 w-full h-auto p-0 mb-8 md:mb-16 px-4 md:px-16"}"><div class="${"flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-full h-auto px-4 mb-2"}"><img width="${"647px"}" height="${"504px"}"${add_attribute("src", LogoWhite, 0)} class="${"w-16 md:w-20 h-auto"}" alt="${"Muscle First Logo"}">
					<div class="${"flex flex-col justify-center items-center md:items-end leading-none"}"><h1 class="${"font-black uppercase mt-0 font-bankghotic text-white"}">Musclefirst</h1>
						<h1 class="${"font-black uppercase mt-0 font-bankghotic text-white"}">Member</h1></div></div>
				<div class="${"w-auto h-auto px-2 md:px-4"}"><div class="${"flex flex-col w-full h-auto md:-space-y-1 p-0 text-center"}"><h1 class="${"text-xl md:text-4xl font-black uppercase text-white"}">Dapatkan <b class="${"text-amber-500"}">5%</b> Discount</h1>
						<span class="${"text-xs md:text-xl font-normal uppercase text-white"}">Untuk Semua Produk <b>Musclefirst</b></span>
						<span class="${"text-xs md:text-xl font-normal uppercase text-white"}">Di <b>Marketplace</b> Kesayanganmu</span></div></div></div>
			<div class="${"flex justify-start w-full h-auto px-8 md:px-16"}"><a rel="${"noreferrer"}" href="${"https://us17.list-manage.com/contact-form?u=11903fbf931b8f42bb65b0613&form_id=7e2a0942b6bcb9da42e75ef57bcbe63e"}" target="${"_blank"}" class="${"flex justify-between items-center self-center w-full px-4 md:px-8 py-3 text-sm md:text-md bg-gradient-to-r from-amber-500 to-yellow-900 shadow shadow-yellow-200 font-black text-center text-black"}"><span class="${"uppercase text-yellow-900"}">${escape("Gabung Sekarang")}</span>
                    <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-6 w-6 text-black bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></a></div></div></div></div>`;
});
const Consultation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"w-full flex flex-col md:flex-row justify-between items-center space-y-2 bg-white dark:bg-zinc-900 py-12 md:py-16 px-4 md:px-16"}"><div class="${"w-full mb-4 py-2 px-0 md:px-0 md:justify-start"}"><h1 class="${"font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white leading-none"}"><span class="${"text-amber-500 font-black"}">${escape("Cintai kesehatanmu")}</span> 
    ${escape("di masa depan melalui konsultasi bersama kami.")}</h1></div>
<div class="${"w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0"}"><a href="${"https://bit.ly/3zs6PCv"}" target="${"_blank"}" class="${"mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-pink-400 bg-black border border-black whitespace-pre-line"}" style="${"transition:all .15s ease"}">${escape("Konsultasi")}</a>
  </div></div>`;
});
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12"}"><div class="${"grid grid-cols-3 md:gap-4 justify-center py-0 md:py-4 w-full"}">${validate_component(CardService, "CardService").$$render(
    $$result,
    {
      initService: "all",
      colorTypeOuter: "bg-transparent md:bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/50",
      colorTypeInner: "bg-cyan-600/50 hover:bg-cyan-800/75",
      bgUrl: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-1.webp`,
      cardText: "Bentuk Masa Otot"
    },
    {},
    {}
  )}

        ${validate_component(CardService, "CardService").$$render(
    $$result,
    {
      initService: "all",
      colorTypeOuter: "bg-transparent md:bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-700/50",
      colorTypeInner: "bg-purple-600/50 hover:bg-purple-800/75",
      bgUrl: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-2.webp`,
      cardText: "Turunkan Berat Badan"
    },
    {},
    {}
  )}

        ${validate_component(CardService, "CardService").$$render(
    $$result,
    {
      initService: "all",
      colorTypeOuter: "bg-transparent md:bg-amber-500 shadow-lg shadow-amber-500/50 hover:shadow-amber-700/50",
      colorTypeInner: "bg-amber-600/50 hover:bg-amber-800/75",
      bgUrl: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-3.webp`,
      cardText: "Tingkatkan Stamina"
    },
    {},
    {}
  )}</div></div>

<div id="${"service-all"}" class="${"w-full h-auto"}">${``}

    ${``}

    ${``}</div>`;
});
const css = {
  code: "@-webkit-keyframes svelte-2dhhpy-scroll{0%{transform:translateX(0)}to{transform:translateX(-1750px)}}@keyframes svelte-2dhhpy-scroll{0%{transform:translateX(0)}to{transform:translateX(-1750px)}}",
  map: null
};
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<div${add_attribute("id", id, 0)} class="${"w-full sm:h-auto md:h-auto bg-[#0a0908] relative sm:px-4 md:px-8 sm:py-0 md:py-12 border-t border-zinc-900"}"><div class="${"w-full flex flex-col pt-8 md:pt-0"}"><div class="${"w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-2"}"><div class="${"flex flex-col space-y-4 w-full mb-4"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-white"}">${escape("Produk Kami")}</h1>
                    <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-white text-md tracking-loose max-w-md"}">${escape("Kami memilih dari beberapa produk unggulan yang ada, nikmati rasa yang berbeda dengan begitu banyak manfaat")}</p></div>
                <div class="${"w-full flex justify-center md:justify-end items-end pb-6"}"><div class="${"w-auto flex flex-col md:flex-row"}"><a${add_attribute("href", "/products", 0)} class="${"mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black"}">${escape("Lihat Semua")}</a></div></div></div></div></div>
    <div class="${"relative flex overflow-x-scroll snap-proximity snap-x scroll-smooth snap-center snap-normal scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-zinc-300 px-2 lg:px-8 pt-4 pb-0"}"><div class="${"flex flex-nowrap ml-0 md:ml-0 snap-x w-full h-auto pb-8"}">${each(productList, (val) => {
    return `${validate_component(CardProductHome, "CardProductHome").$$render(
      $$result,
      {
        width: `256`,
        height: `256`,
        id: val.id,
        imgUrl: val.imgUrl,
        imgAlt: val.imgAlt,
        linkHref: val.linkHref
      },
      {},
      {}
    )}`;
  })}</div></div>
</div>`;
});
const TokopediaPromoSept01 = "/_app/immutable/assets/tokped-sept-01-4196e5b3.webp";
const TokopediaPromoSept02 = "/_app/immutable/assets/tokped-sept-02-53e0addc.webp";
const TokopediaPromoWib01 = "/_app/immutable/assets/tokped-wib-01-e4382342.webp";
const TokopediaPromoFeb0223 = "/_app/immutable/assets/tokped-feb-02-23-4e4713a1.jpg";
const Promo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cdnActive } = $$props;
  let { promoType } = $$props;
  let { promoActive } = $$props;
  let { id } = $$props;
  if ($$props.cdnActive === void 0 && $$bindings.cdnActive && cdnActive !== void 0)
    $$bindings.cdnActive(cdnActive);
  if ($$props.promoType === void 0 && $$bindings.promoType && promoType !== void 0)
    $$bindings.promoType(promoType);
  if ($$props.promoActive === void 0 && $$bindings.promoActive && promoActive !== void 0)
    $$bindings.promoActive(promoActive);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${promoActive ? `${promoType === "satu" ? `<div${add_attribute("id", id, 0)} class="${"w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12"}"><div class="${"w-auto h-auto relative shadow-xl"}"><a class="${"w-full h-full relative"}" href="${"https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822"}" target="${"_blank"}"><picture class="${"z-0"}"><source${add_attribute("srcset", TokopediaPromoFeb0223, 0)} type="${"image/webp"}">
                    <img${add_attribute("width", `724`, 0)}${add_attribute("height", `380`, 0)}${add_attribute("src", TokopediaPromoFeb0223, 0)} class="${"rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"}" alt="${"Tokopedia Promo"}"></picture></a></div></div>` : `${promoType === "minimal" ? `<div${add_attribute("id", id, 0)} class="${"w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12"}"><div class="${"w-auto h-auto relative shadow-xl"}"><a rel="${"noreferrer"}" class="${"w-full h-full relative"}" href="${"https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822"}" target="${"_blank"}"><picture class="${"z-0"}"><source${add_attribute("srcset", TokopediaPromoWib01, 0)} type="${"image/webp"}">
                    <img${add_attribute("width", `1200`, 0)}${add_attribute("height", `150`, 0)}${add_attribute("src", TokopediaPromoWib01, 0)} class="${"rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"}" alt="${"Tokopedia Promo WIB"}"></picture></a></div></div>` : `<div class="${"grid grid-cols-2 gap-4 w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pt-8 md:pt-0 pb-8 md:pb-12"}"><div class="${"col-span-full md:col-span-1 w-full sm:h-auto md:h-auto bg-[#0a0908] relative"}"><div class="${"w-auto h-auto relative shadow-xl"}"><a class="${"w-full h-full relative"}" href="${"https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822"}" target="${"_blank"}"><picture class="${"z-0"}"><source${add_attribute(
    "srcset",
    cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-01.webp` : TokopediaPromoSept01,
    0
  )} type="${"image/webp"}">
                        <img${add_attribute("width", `724`, 0)}${add_attribute("height", `380`, 0)}${add_attribute(
    "src",
    cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-01.webp` : TokopediaPromoSept01,
    0
  )} class="${"rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"}" alt="${"Tokopedia Promo"}"></picture></a></div></div>
        <div class="${"col-span-full md:col-span-1 w-full sm:h-auto md:h-auto bg-[#0a0908] relative"}"><div class="${"w-auto h-auto relative shadow-xl"}"><a class="${"w-full h-full relative"}" href="${"https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822"}" target="${"_blank"}"><picture class="${"z-0"}"><source${add_attribute(
    "srcset",
    cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-02.webp` : TokopediaPromoSept02,
    0
  )} type="${"image/webp"}">
                        <img${add_attribute("width", `724`, 0)}${add_attribute("height", `380`, 0)}${add_attribute(
    "src",
    cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-02.webp` : TokopediaPromoSept02,
    0
  )} class="${"rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"}" alt="${"Tokopedia Promo"}"></picture></a></div></div></div>`}`}` : ``}`;
});
const CtaAgent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"w-full flex flex-col md:flex-row justify-between items-center space-y-2 bg-white dark:bg-zinc-900 py-16 px-4 md:px-8"}"><div class="${"w-full mb-4 py-2 px-0 md:px-8 justify-center md:justify-start items-center md:items-start text-center md:text-left"}"><h1 class="${"font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white"}">${escape("Ingin memiliki penghasilan tambahan setiap bulan")}</h1>
<span class="${"text-sm uppercase text-amber-500 font-black"}">${escape("Agen Musclefirst")}</span></div>
<div class="${"w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0 pr-0 md:pr-8"}"><a${add_attribute("href", "/agent", 0)} target="${"_blank"}" class="${"mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-emerald-400 bg-black border border-black whitespace-pre-line"}" style="${"transition:all .15s ease"}">${escape("Gabung Sekarang")}</a>
</div></div>`;
});
const BannerOne = "/_app/immutable/assets/banner-healthy-01-1c14183d.webp";
const Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"relative w-full flex flex-col md:flex-row justify-center bg-cover bg-center bg-no-repeat items-center space-y-2 bg-zinc-200 py-10 md:py-12 px-4 md:px-16"}" style="${"background-image: url(" + escape(BannerOne, true) + ");"}"><div class="${"flex flex-col justify-center items-center"}"><div class="${"w-full mb-4 py-2 px-0 md:px-1 md:justify-start"}"><h1 class="${"font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white leading-none"}"><div class="${"flex items-start flex-row w-full h-auto"}"><h2 class="${"font-blackttnorms tracking-tighter font-black text-zinc-900 text-5xl md:text-6xl"}">${escape("Musclefirst")}</h2>
            <h2 class="${"font-blackttnorms tracking-tighter font-black text-amber-500 text-xl"}">${escape("Kalkulator")}</h2></div></h1>
      <p class="${"flex text-sm font-thin text-zinc-700 px-1 w-full max-w-sm leading-none mt-1"}"><span class="${"flex flex-row text-zinc-700 mr-4 md:mr-8 font-black"}">${escape("Musclefirst")}
              ${escape("Kalkulator")}</span>
          <span class="${"font-medium"}">${escape("Kalkulator kesehatan online untuk mengukur asupan nutrisi yang dibutuhkan tubuh secara akurat.")}</span></p></div>
    
    <div class="${"w-auto md:w-full flex md:hidden flex-row md:justify-end space-y-0 pb-0 md:pb-0"}"><a${add_attribute("href", `/calculator`, 0)} class="${"mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-zinc-900 bg-transparent border border-amber-500 whitespace-pre-line"}" style="${"transition:all .15s ease"}">${escape("Selengkapnya")}</a>
      </div></div>

  <div class="${"absolute inset-y-0 right-16 hidden md:flex items-center w-auto h-full"}"><div class="${"w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0"}"><a${add_attribute("href", `/calculator`, 0)} class="${"mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-zinc-900 bg-transparent border border-amber-500 whitespace-pre-line"}" style="${"transition:all .15s ease"}">${escape("Selengkapnya")}</a>
      </div></div></div>`;
});
const ogImageSite = "/_app/immutable/assets/og-img-site-af2f5431.webp";
const BannerHome = "/_app/immutable/assets/februari-2024-81386833.webp";
const BannerHome_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"px-4 my-5 md:px-16"}"><a href="${"/campaign/special-event/februari"}"><img${add_attribute("src", BannerHome, 0)} alt="${"Banner Muscle First"}"></a></div>`;
});
const load = async ({ url }) => {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 31536e3, private: false }
  };
};
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { promoActive = false } = $$props;
  let { cdnActive = true } = $$props;
  let { promoType = "satu" } = $$props;
  if ($$props.promoActive === void 0 && $$bindings.promoActive && promoActive !== void 0)
    $$bindings.promoActive(promoActive);
  if ($$props.cdnActive === void 0 && $$bindings.cdnActive && cdnActive !== void 0)
    $$bindings.cdnActive(cdnActive);
  if ($$props.promoType === void 0 && $$bindings.promoType && promoType !== void 0)
    $$bindings.promoType(promoType);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Susu Protein & Suplement Fitness",
      ogImage: ogImageSite,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}


${validate_component(BannerHome_1, "BannerHome").$$render($$result, {}, {}, {})}

${validate_component(Service, "Service").$$render($$result, { id: "service" }, {}, {})}
${validate_component(Promo, "Promo").$$render(
    $$result,
    {
      promoActive,
      cdnActive,
      promoType,
      id: "promo"
    },
    {},
    {}
  )}
${validate_component(Consultation, "Consultation").$$render($$result, { id: "consultation" }, {}, {})}
${validate_component(Calculator, "Calculator").$$render($$result, { id: "calculator-musclefirst" }, {}, {})}
${validate_component(Product, "Product").$$render($$result, { id: "product" }, {}, {})}
${validate_component(CtaAgent, "CtaAgent").$$render($$result, { id: "cta-agent" }, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, { id: "contact" }, {}, {})}
${validate_component(CertifiedLabel, "CertifiedLabel").$$render($$result, { id: "certified" }, {}, {})}`;
});
export {
  Index_root as default,
  load
};
