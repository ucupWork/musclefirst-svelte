import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, d as each, e as escape, m as missing_component } from "../../_app/immutable/chunks/index-1e319aa9.js";
import { D as Disclosure, w as writable, a as Dialog, d as derived } from "../../_app/immutable/chunks/common-3de0477a.js";
import { p as page, n as navigating } from "../../_app/immutable/chunks/stores-75875272.js";
import { I as IndexScript } from "../../_app/immutable/chunks/IndexScript-9956b2ac.js";
import { I as IndexScript$1 } from "../../_app/immutable/chunks/IndexScript-80586391.js";
import { I as Index } from "../../_app/immutable/chunks/Index-6d2e1a19.js";
import { s as searchTerm, o as openmenuproduct, a as openmobile, d as disabledScroll, b as openModalCS, c as state } from "../../_app/immutable/chunks/index-fe7c0294.js";
import { I as ImageResponsive } from "../../_app/immutable/chunks/ImageResponsive-f45806c8.js";
import { D as DisclosureButton, a as DisclosurePanel } from "../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import { L as LogoBlack } from "../../_app/immutable/chunks/logo-black-7f994433.js";
/* empty css                                                                         */import { L as LogoWhite } from "../../_app/immutable/chunks/logo-white-bbda6e5d.js";
import { D as DialogOverlay, a as DialogTitle, b as Description } from "../../_app/immutable/chunks/Description-9da074e2.js";
import { c as commonjsGlobal } from "../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { c as commonjsRequire } from "../../_app/immutable/chunks/_commonjs-dynamic-modules-bf2a53fc.js";
import "../../_app/immutable/chunks/index-e87efd75.js";
/* empty css                                        */import { T as TopTop } from "../../_app/immutable/chunks/TopTop-f5e9c00b.js";
import "../../_app/immutable/chunks/index-778a8503.js";
import { p as productList } from "../../_app/immutable/chunks/list-products-4425d867.js";
import { C as CardNoResult } from "../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import { F as Footer } from "../../_app/immutable/chunks/Footer-6c9f3d42.js";
import { L as Loading } from "../../_app/immutable/chunks/Loading-5c31a686.js";
import EmblaCarousel from "embla-carousel";
import { T as TransitionPage } from "../../_app/immutable/chunks/TransitionPage-ed9081c6.js";
import "../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
import "../../_app/immutable/chunks/site-data-ef8bff3e.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `

${``}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val = "" } = $$props;
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  {
    searchTerm.set(val);
  }
  return `<div class="${"flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full"}"><div class="${"w-full h-auto relative"}"><input type="${"text"}" class="${"w-full py-3 pr-10 pl-4 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring"}"${add_attribute("placeholder", "Ketik Produk Disini", 0)}${add_attribute("value", val, 0)}>
        
        <span class="${"absolute inset-y-0 right-0 flex items-center pr-3"}"><svg class="${"w-5 h-5 text-amber-500 dark:text-white"}" viewBox="${"0 0 24 24"}" fill="${"none"}"><path d="${"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></span></div></div>`;
});
const ListProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchTerm, $$unsubscribe_searchTerm;
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  let { filteredProducts = [] } = $$props;
  if ($$props.filteredProducts === void 0 && $$bindings.filteredProducts && filteredProducts !== void 0)
    $$bindings.filteredProducts(filteredProducts);
  $$unsubscribe_searchTerm();
  return `${$searchTerm && filteredProducts.length === 0 ? `${validate_component(CardNoResult, "CardNoResult").$$render($$result, { cardType: "product" }, {}, {})}` : `${$searchTerm && filteredProducts.length > 0 ? `<div class="${"absolute top-0 w-full max-w-xl h-auto pt-10 z-20"}">${each(filteredProducts, ({ name, linkHref, imgUrl, imgAlt }) => {
    return `<a class="${"w-full h-auto"}"${add_attribute("href", `/${linkHref}`, 0)}><div class="${"flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow"}"><div class="${"flex flex-row items-center w-auto h-auto"}"><img class="${"w-16 h-16"}"${add_attribute("src", imgUrl, 0)}${add_attribute("alt", imgAlt, 0)}>
                <div class="${"flex flex-col ml-8"}"><span class="${"text-xs uppercase font-bold"}"><small class="${"text-zinc-900"}">Musclefirst</small></span>
                    <span class="${"text-black uppercase text-sm font-bold"}">${escape(name)}</span>
                </div></div>

            <div class="${"w-auto h-auto"}"><div class="${"i-ph:caret-right h-4 w-4 text-zinc-900"}"></div>
            </div></div>
    </a>`;
  })}</div>` : `${$searchTerm ? `<div class="${"absolute top-0 w-full max-w-xl h-auto pt-10 z-20"}">${each(productList, ({ name, linkHref, imgUrl, imgAlt }) => {
    return `<a class="${"w-full h-auto"}"${add_attribute("href", `/${linkHref}`, 0)}><div class="${"flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow"}"><div class="${"flex flex-row items-center w-auto h-auto"}"><img class="${"w-16 h-16"}"${add_attribute("src", imgUrl, 0)}${add_attribute("alt", imgAlt, 0)}>
                    <div class="${"flex flex-col ml-8"}"><span class="${"text-xs uppercase font-bold"}"><small class="${"text-zinc-900"}">Musclefirst</small></span>
                        <span class="${"text-black uppercase text-sm font-bold"}">${escape(name)}</span>
                    </div></div>

                <div class="${"w-auto h-auto"}"><div class="${"i-ph:caret-right h-4 w-4 text-zinc-900"}"></div>
                </div></div>
        </a>`;
  })}</div>` : ``}`}`}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchTerm, $$unsubscribe_searchTerm;
  let $page, $$unsubscribe_page;
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let filteredProducts = [];
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$unsubscribe_searchTerm();
  $$unsubscribe_page();
  return `${$$result.head += `<script data-svelte="svelte-6j7ypr">let themeColor = '#fffff'
		const theme = localStorage.theme
		const isColorSchemeDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		if (theme === 'dark' || (!theme && isColorSchemeDark)) {
			document.documentElement.classList.add('dark')
			themeColor = '#151515'
		}
		document.head.insertAdjacentHTML(
			'beforeend',
			\`<meta name="theme-color" content="\${themeColor}">\`
		)
	<\/script>`, ""}

${validate_component(Menu, "TopMenu").$$render($$result, { classes: "left-5 top-4 md:hidden" }, {}, {})}
${validate_component(TopTop, "TopTop").$$render($$result, { classes: "right-2 top-5 md:top-4" }, {}, {})}

<nav${add_attribute("id", segment, 0)} class="${"bg-[#0a0908] sm:px-4 md:px-8 sm:py-6 md:py-2 shadow-xl border-b border-black z-20 relative"}"><div class="${"w-full flex flex-wrap p-2 justify-between items-center md:items-center"}"><div class="${"w-auto md:w-6/12 flex justify-start items-center"}"><a href="${"/"}" class="${"flex title-font font-medium items-center px-2 text-zinc-900 mb-4 md:mb-0 md:mr-16"}"><div class="${"m-2 w-16 h-auto rounded-md shadow-lg bg-transparent flex justify-start items-center overflow-hidden"}"><img width="${"647px"}" height="${"504px"}" class="${"object-fill h-full w-full"}" alt="${"logo"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )}></div></a>
            
            <div class="${"hidden md:flex flex-col justify-start items-center space-y-2 w-full relative"}">${validate_component(Search, "Search").$$render($$result, { val: $searchTerm }, {}, {})}
                ${validate_component(ListProducts, "ListProducts").$$render($$result, { filteredProducts }, {}, {})}</div></div>
        <div class="${"w-auto md:w-auto flex justify-end items-center md:order-2"}"><div class="${"hidden md:flex flex-row space-x-2 justify-center items-center pb-2 md:pb-0 px-4"}"><a${add_attribute("href", "/list-agent", 0)} class="${"rounded font-ttnorms nav-link bg-black hover:shadow-md ml-5 py-2 px-8 text-[#f5b82b] border border-[#f5b82b] font-bold text-xs uppercase"}">${escape("List Agen")}</a>
                <a${add_attribute("href", `/links`, 0)} class="${"flex items-center bg-amber-500 border border-amber-500 shadow py-1.5 px-4 font-ttnorms nav-link mr-0 text-sm font-semibold cursor-pointer whitespace-pre-line text-black rounded " + escape(
    $page.url.pathname.includes("/links") ? "font-medium text-[#FEB300]" : "",
    true
  )}">${escape("Marketplace")}
                    <span class="${"flex justify-center items-center ml-4 w-5 h-5 bg-transparent"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-4 w-4 text-black bi bi-shop"}" viewBox="${"0 0 16 16"}"><path d="${"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"}"></path></svg></span></a></div>
            <button data-collapse-toggle="${"mobile-menu-4"}" type="${"button"}" class="${"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}" aria-controls="${"mobile-menu-4"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open Main Menu</span>
                <svg class="${"w-8 h-8"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg>
                <svg class="${"hidden w-8 h-8"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></div></div>

</nav>`;
});
const css$5 = {
  code: ".progress-container.svelte-vukvk3{height:3px;width:100%;z-index:999}.progress.svelte-vukvk3,.progress-container.svelte-vukvk3{left:0;position:absolute;top:0}.progress.svelte-vukvk3{background-color:#feb300;height:100%;transition:width .4s}.fade.svelte-vukvk3{-webkit-animation:svelte-vukvk3-fade .4s;animation:svelte-vukvk3-fade .4s;background-color:hsla(0,0%,100%,.3);height:100%;pointer-events:none;position:fixed;width:100%;z-index:998}@-webkit-keyframes svelte-vukvk3-fade{0%{opacity:0}to{opacity:1}}@keyframes svelte-vukvk3-fade{0%{opacity:0}to{opacity:1}}",
  map: null
};
const Preloading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `${``}

${``}`;
});
const ButtonThemes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"rounded mx-auto flex h-auto flex-none items-center gap-2 bg-transparent sm:m-0"}" aria-label="${"Activate " + escape("dark", true) + " mode"}" title="${"Activate " + escape("dark", true) + " mode"}"><div class="${"flex w-10 justify-center"}"><div class="${"i-ph:moon-fill hidden border text-white border-zinc-100 dark:block dark:text-white"}"></div>
		<div class="${"i-ph:sun-fill dark:hidden text-white"}"></div></div>
	<span class="${"pr-4 sm:hidden"}">${escape("Light Mode")}</span></button>`;
});
var defaultOptions = {
  active: true,
  breakpoints: {},
  delay: 4e3,
  playOnInit: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
  rootNode: null
};
function Autoplay(userOptions) {
  var optionsHandler = EmblaCarousel.optionsHandler();
  var optionsBase = optionsHandler.merge(defaultOptions, Autoplay.globalOptions);
  var options;
  var carousel;
  var interaction;
  var timer = 0;
  function init(embla) {
    carousel = embla;
    options = optionsHandler.atMedia(self2.options);
    interaction = options.stopOnInteraction ? destroy : stop;
    var eventStore = carousel.internalEngine().eventStore;
    var emblaRoot = carousel.rootNode();
    var root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;
    carousel.on("pointerDown", interaction);
    if (!options.stopOnInteraction)
      carousel.on("pointerUp", reset);
    if (options.stopOnMouseEnter) {
      eventStore.add(root, "mouseenter", interaction);
      if (!options.stopOnInteraction)
        eventStore.add(root, "mouseleave", reset);
    }
    eventStore.add(document, "visibilitychange", function() {
      if (document.visibilityState === "hidden")
        return stop();
      reset();
    });
    eventStore.add(window, "pagehide", function(event) {
      if (event.persisted)
        stop();
    });
    if (options.playOnInit)
      play();
  }
  function destroy() {
    carousel.off("pointerDown", interaction);
    if (!options.stopOnInteraction)
      carousel.off("pointerUp", reset);
    stop();
    timer = 0;
  }
  function play() {
    stop();
    timer = window.setTimeout(next, options.delay);
  }
  function stop() {
    if (!timer)
      return;
    window.clearTimeout(timer);
  }
  function reset() {
    if (!timer)
      return;
    stop();
    play();
  }
  function next() {
    var index = carousel.internalEngine().index;
    var kill = options.stopOnLastSnap && index.get() === index.max;
    if (kill)
      return destroy();
    if (carousel.canScrollNext()) {
      carousel.scrollNext();
    } else {
      carousel.scrollTo(0);
    }
    play();
  }
  var self2 = {
    name: "autoplay",
    options: optionsHandler.merge(optionsBase, userOptions),
    init,
    destroy,
    play,
    stop,
    reset
  };
  return self2;
}
Autoplay.globalOptions = void 0;
const css$4 = {
  code: ".embla.svelte-1s3qugw{overflow:hidden}.embla__container.svelte-1s3qugw{display:flex}.embla__slide.svelte-1s3qugw{flex:0 0 100%}",
  map: null
};
const MiniBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  ({
    options: { loop: false },
    plugins: [Autoplay()]
  });
  $$result.css.add(css$4);
  return `<div class="${"hidden md:flex flex-col md:flex-row justify-between items-center bg-[#0a0908] border-b border-zinc-900 w-full h-auto px-4 md:px-14 py-2"}"><div class="${"flex justify-start items-start"}"><div class="${"embla svelte-1s3qugw"}"><div class="${"embla__container svelte-1s3qugw"}"><div class="${"embla__slide svelte-1s3qugw"}"><span class="${"font-normal text-xs md:text-sm uppercase"}"><small class="${"text-amber-500 font-bold"}">Paket Bundling Shopee</small>
                        <small class="${"text-white"}">Tersedia Paket Bulking, Cutting, atau Glowing</small></span></div>
                <div class="${"embla__slide svelte-1s3qugw"}"><span class="${"font-normal text-xs md:text-sm uppercase"}"><small class="${"text-amber-500 font-bold"}">Musclefirst kalkulator</small>
                        <small class="${"text-white"}">, membantu kesehatan anda secara online</small></span></div></div></div></div>
    
    <div class="${"flex justify-end items-end"}">${validate_component(ButtonThemes, "ButtonThemes").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const BcaaProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png",
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-bcaa/pronew-05_pcwx1q.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro BCAA",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const CaseinProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png`,
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Casein",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const CreatineProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png`,
    0
  )} type="${"image/webp"}">
            
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Creatine",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const GainerProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png`,
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Gainer",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const IsolateProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png`,
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Isolate",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const NrgyProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png`,
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Nrgy",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const WheyProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png`,
    0
  )} type="${"image/webp"}">
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png`,
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Whey",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const CollafitProperty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-auto h-auto bg-transparent relative"}"><div class="${"relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png", 0)} type="${"image/webp"}">
            
            ${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png",
      width: 320,
      height: 320,
      breakpoints: [320],
      srcsetActive: false,
      classes: "shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: "Muscle First Pro Collafit",
      style: "margin: 0px"
    },
    {},
    {}
  )}</picture>
            </div></div>`;
});
const ProductMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openmenuproduct, $$unsubscribe_openmenuproduct;
  $$unsubscribe_openmenuproduct = subscribe(openmenuproduct, (value) => $openmenuproduct = value);
  let currentComponent = IsolateProperty;
  $$unsubscribe_openmenuproduct();
  return `${$openmenuproduct ? `<div class="${"absolute left-0 top-48 pt-6 w-full h-auto z-40 hidden md:block shadow-xl"}"><div class="${"flex flex-col w-full h-auto p-4 rounded-b bg-zinc-300 z-10"}"><div class="${"grid grid-cols-12 gap-4 w-full h-full border-t border-zinc-600"}"><div class="${"col-span-full md:col-span-8 flex flex-col space-y-4 justify-start items-start py-6 md:py-12"}"><div class="${"flex justify-between items-center w-full h-auto p-0 px-12"}"><h2 class="${"font-blackttnorms font-black text-xl text-black py-2 uppercase"}"><span class="${"text-amber-600"}">Choose</span> Your Goals
                    </h2></div>
                <div class="${"w-full h-auto p-0 px-12"}"><div class="${"grid grid-cols-4 gap-4 w-full h-auto"}"><div class="${"col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t border-zinc-900"}"><span class="${"font-blackttnorms uppercase text-sm text-zinc-900 py-2"}">${escape("Bentuk Masa Otot")}</span>
                            <ul><li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == GainerProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-gainer", 0)}>Pro Gainer</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == IsolateProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-isolate", 0)}>Pro Isolate</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == CreatineProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-creatine", 0)}>Pro Creatine</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == CaseinProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-casein", 0)}>Pro Casein</a></button></li></ul></div>
                        <div class="${"col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t border-zinc-900"}"><span class="${"font-blackttnorms uppercase text-sm text-zinc-900 py-2"}">${escape("Turunkan Berat Badan")}</span>
                            <ul><li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == WheyProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-whey", 0)}>Pro Whey</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == IsolateProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-isolate", 0)}>Pro Isolate</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == BcaaProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-bcaa", 0)}>Pro BCAA</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == CaseinProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-casein", 0)}>Pro Casein</a></button></li></ul></div>
                        <div class="${"col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t border-zinc-900"}"><span class="${"font-blackttnorms uppercase text-sm text-zinc-900 py-2"}">${escape("Tingkatkan Stamina")}</span>
                            <ul><li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == CreatineProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-creatine", 0)}>Pro Creatine</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == NrgyProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-nrgy", 0)}>Pro Nrgy</a></button></li>
                                <li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == IsolateProperty ? "font-bold text-amber-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-isolate", 0)}>Pro Isolate</a></button></li></ul></div>
                        <div class="${"col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t border-zinc-900"}"><span class="${"font-blackttnorms uppercase text-sm text-zinc-900 py-2"}">${escape("Shape & Glow")}</span>
                            <ul><li class="${"text-black"}"><button${add_attribute(
    "class",
    currentComponent == CollafitProperty ? "font-bold text-pink-600" : "font-normal",
    0
  )}><a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "/products/pro-collafit", 0)}>Pro Collafit</a></button></li></ul></div></div></div>
                <div class="${"w-full h-auto p-0 px-12"}"><div class="${"grid grid-cols-4 gap-4 w-full h-auto mt-4"}"><div class="${"col-span-full justify-center items-center w-full h-auto"}"><div class="${"grid grid-cols-3 gap-4 w-full h-auto mt-4"}"><a${add_attribute("href", "/catalog-product", 0)} class="${"w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5"}"><span class="${"font-ttnorms font-bold text-white text-xs uppercase tracking-widest"}">${escape("E-Katalog")}</span>
                                    <div class="${"i-ph:caret-right text-white"}"></div></a>
                                <a${add_attribute("href", "/discount", 0)} class="${"w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5"}"><span class="${"font-ttnorms font-bold text-white text-xs uppercase tracking-widest"}">${escape("Diskon")}</span>
                                    <div class="${"i-ph:caret-right text-white"}"></div></a>
                                <a${add_attribute("href", "/products", 0)} class="${"w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5"}"><span class="${"font-ttnorms font-bold text-white text-xs uppercase tracking-widest"}">${escape("Semua Produk")}</span>
                                    <div class="${"i-ph:caret-right text-white"}"></div></a></div></div></div></div></div>
            <div class="${"col-span-full md:col-span-4 flex justify-center items-center bg-zinc-300"}"><div class="${"flex justify-center items-center w-full h-full bg-zinc-300"}">${currentComponent ? `${validate_component(currentComponent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``}</div></div></div></div></div>` : ``}`;
});
const ProductMenuMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `${isOpen ? `<div class="${"flex flex-row justify-between items-center w-full h-auto px-0 overflow-y-auto"}">
    <div class="${"col-span-1 flex flex-col w-full h-auto py-4"}">${validate_component(Disclosure, "Disclosure").$$render($$result, { class: "w-full h-auto" }, {}, {
    default: ({ open }) => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render($$result, { class: "w-full h-auto" }, {}, {
        default: () => {
          return `<div class="${"flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1"}"><h2 class="${"text-zinc-900 font-bold text-sm"}">${escape("Bentuk Masa Otot")}</h2>
                    
                    <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div></div>`;
        }
      })}
            ${open ? `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { static: true }, {}, {
        default: () => {
          return `<ul class="${"w-full h-auto py-2"}"><li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-gainer", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Gainer",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Gainer</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-isolate", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Isolate",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Isolate</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-creatine", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Creatine",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Creatine</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-casein", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Casein",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Casein</h2></button></div></a></li></ul>`;
        }
      })}` : ``}`;
    }
  })}
        
        ${validate_component(Disclosure, "Disclosure").$$render($$result, { class: "w-full h-auto" }, {}, {
    default: ({ open }) => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render($$result, { class: "w-full h-auto" }, {}, {
        default: () => {
          return `<div class="${"flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1"}"><h2 class="${"text-zinc-900 font-bold text-sm"}">${escape("Turunkan Berat Badan")}</h2>
                    
                    <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div></div>`;
        }
      })}
            ${open ? `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { static: true }, {}, {
        default: () => {
          return `<ul class="${"w-full h-auto py-2"}"><li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-whey", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Whey",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Whey</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-isolate", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Isolate",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Isolate</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-casein", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Casein",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Casein</h2></button></div></a></li></ul>`;
        }
      })}` : ``}`;
    }
  })}
        
        
        
        ${validate_component(Disclosure, "Disclosure").$$render($$result, { class: "w-full h-auto" }, {}, {
    default: ({ open }) => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render($$result, { class: "w-full h-auto" }, {}, {
        default: () => {
          return `<div class="${"flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1"}"><h2 class="${"text-zinc-900 font-bold text-sm"}">${escape("Tingkatkan Stamina")}</h2>
                    
                    <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div></div>`;
        }
      })}
            ${open ? `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { static: true }, {}, {
        default: () => {
          return `<ul class="${"w-full h-auto py-2"}"><li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-creatine", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Creatine",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Creatine</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-nrgy", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Nrgy",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Nrgy</h2></button></div></a></li>
                    <li class="${"w-full h-auto"}"><a${add_attribute("href", "/products/pro-isolate", 0)} class="${"w-full h-auto"}"><div class="${"bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2"}"><picture><source${add_attribute("srcset", "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png", 0)} type="${"image/webp"}">
                                ${validate_component(ImageResponsive, "ImageResponsive").$$render(
            $$result,
            {
              src: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png",
              width: 250,
              height: 250,
              breakpoints: [250],
              srcsetActive: false,
              classes: "shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
              alt: "Muscle First Pro Isolate",
              style: "margin: 0px"
            },
            {},
            {}
          )}</picture>
                            <button class="${"flex flex-col justify-start items-start text-xs px-4"}"><h2 class="${"text-sm text-zinc-900 font-black"}">Pro Isolate</h2></button></div></a></li></ul>`;
        }
      })}` : ``}`;
    }
  })}</div></div>` : ``}`;
});
const css$3 = {
  code: ".active.svelte-185syte{--tw-text-opacity:1;color:rgb(245 158 11/var(--tw-text-opacity));font-weight:700}",
  map: null
};
const SubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $openmenuproduct, $$unsubscribe_openmenuproduct;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_openmenuproduct = subscribe(openmenuproduct, (value) => $openmenuproduct = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  $$unsubscribe_openmenuproduct();
  return `${validate_component(ProductMenu, "ProductMenu").$$render($$result, {}, {}, {})}

<div class="${"w-full hidden md:flex flex-col md:flex-row justify-between items-center space-y-2 bg-[#0a0908] border-b border-black px-4 md:px-16 py-4"}"><nav class="${"flex flex-row justify-center items-center text-center pb-2 md:pb-0"}"><a rel="${"noreferrer"}" href="${"/"}" class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}">${escape("Beranda")}</a>
        <button class="${[
    "font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/products" || $page.url.pathname === "/discount" || $page.url.pathname === "/catalog-product" ? "active" : ""
  ].join(" ").trim()}">${escape("Produk")}
            <span class="${"flex justify-center items-center ml-4 w-5 h-5 bg-transparent border border-black"}">${$openmenuproduct ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-zinc-100 bi bi-caret-up-fill"}" viewBox="${"0 0 16 16"}"><path d="${"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-zinc-100 bi bi-caret-down-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}"></path></svg>`}</span></button>
        <a rel="${"noreferrer"}"${add_attribute("href", `/calculator`, 0)} class="${[
    "font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/calculator" ? "active" : ""
  ].join(" ").trim()}">${escape("Kalkulator")}
            <span class="${"flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-amber-500 bi bi-activity"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"}"></path></svg></span></a>
        <a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", `/`, 0)} class="${[
    "relative font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/musclefirst-durex" ? "active" : ""
  ].join(" ").trim()}"><div class="${"z-10 absolute -top-0 -right-3 w-auto h-auto"}"><span class="${"flex h-2 w-2"}"><span class="${"animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"}"></span>
                    <span class="${"relative inline-flex rounded-full h-2 w-2 bg-amber-500"}"></span></span></div>
            <span class="${"z-0 w-auto h-auto"}">${escape("Promosi")}</span></a>
        <a rel="${"noreferrer"}"${add_attribute("href", `/blog`, 0)} class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/article" ? "active" : ""
  ].join(" ").trim()}">${escape("Blog")}</a>
        <a rel="${"noreferrer"}"${add_attribute("href", `/recipes`, 0)} class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/recipes" ? "active" : ""
  ].join(" ").trim()}">${escape("Resep")}</a></nav>
    <nav class="${"flex flex-wrap items-end text-end justify-end pb-2 md:pb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", `/agent`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/agent" ? "active" : ""
  ].join(" ").trim()}">${escape("Daftar Agen")}</a>
        <a rel="${"noreferrer"}"${add_attribute("href", `/challenge`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/challenge" ? "active" : ""
  ].join(" ").trim()}">${escape("Tantangan")}</a>
        <a rel="${"noreferrer"}"${add_attribute("href", `/testimonials`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/testimonials" ? "active" : ""
  ].join(" ").trim()}">${escape("Testimonial")}</a>
        <a rel="${"noreferrer"}"${add_attribute("href", `/community`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100 svelte-185syte",
    $page.url.pathname === "/community" ? "active" : ""
  ].join(" ").trim()}">${escape("Komunitas")}</a></nav>
</div>`;
});
const ecommerceMode = writable(true);
const css$2 = {
  code: ".embla.svelte-1s3qugw{overflow:hidden}.embla__container.svelte-1s3qugw{display:flex}.embla__slide.svelte-1s3qugw{flex:0 0 100%}",
  map: null
};
const BannerPromo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ecommerceMode, $$unsubscribe_ecommerceMode;
  $$unsubscribe_ecommerceMode = subscribe(ecommerceMode, (value) => $ecommerceMode = value);
  ({
    options: { loop: true },
    axis: "y",
    plugins: [Autoplay()]
  });
  $$result.css.add(css$2);
  $$unsubscribe_ecommerceMode();
  return `<div class="${"embla svelte-1s3qugw"}"><div class="${"embla__container svelte-1s3qugw"}"><div class="${"embla__slide svelte-1s3qugw"}">${$ecommerceMode ? `<div class="${"hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 border-b border-zinc-900 w-full h-auto px-4 md:px-16 py-6"}"><div class="${"flex flex-col justify-start items-start text-left -space-y-2"}"><div class="${"w-auto h-auto"}"><span class="${"font-normal text-xs md:text-sm uppercase"}"><small class="${"text-xl text-amber-500 font-blackttnorms font-bold"}">BELI LEBIH BANYAK,</small>
                            <small class="${"text-xl text-zinc-900 dark:text-zinc-100 font-blackttnorms"}">LEBIH HEMAT</small></span></div>
                    <div class="${"w-auto h-auto"}"><span class="${"font-normal text-xs md:text-sm uppercase"}"><small class="${"text-lg text-zinc-900 dark:text-zinc-100 font-ttnorms font-bold"}">DISKON 5% TANPA MINIMAL PEMBELIAN</small></span></div></div>
                
                <div class="${"flex flex-row items-center space-x-2 justify-end"}"><button type="${"button"}" class="${"py-1 px-8 bg-gradient-to-r from-amber-500 to-amber-900 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 focus:ring-zinc-900 focus:ring-offset-zinc-2 w-full transition ease-in duration-200 text-center text-sm font-blackttnorms font-normal uppercase shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"}">Daftar Disini
                    </button></div></div>` : ``}</div></div>
</div>`;
});
const MobileMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".burger.svelte-wswztk.svelte-wswztk{height:auto;transition:opacity .3s ease;width:auto}.burger.svelte-wswztk svg.svelte-wswztk{left:50%;opacity:1;top:50%;transform:translate(-50%,-50%) scale(1)}.burger.svelte-wswztk svg.svelte-wswztk,.menu.svelte-wswztk.svelte-wswztk{transition:opacity .3s ease,transform .3s ease}.menu.svelte-wswztk.svelte-wswztk{height:100%;opacity:0;width:100%;z-index:1000}.menu.svelte-wswztk a.svelte-wswztk{opacity:0;transform:translateX(-16px);transition:opacity .3s ease,transform .3s ease,width .3s ease,border-color .3s ease;width:0}.menuRendered.svelte-wswztk.svelte-wswztk,.menuRendered.svelte-wswztk a.svelte-wswztk{opacity:1}.menuRendered.svelte-wswztk a.svelte-wswztk{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity));transform:translateX(0);width:100%}@-webkit-keyframes svelte-wswztk-grow{0%{height:0}to{height:24px}}@keyframes svelte-wswztk-grow{0%{height:0}to{height:24px}}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $openmobile, $$unsubscribe_openmobile;
  let $page, $$unsubscribe_page;
  let $disabledScroll, $$unsubscribe_disabledScroll;
  $$unsubscribe_openmobile = subscribe(openmobile, (value) => $openmobile = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_disabledScroll = subscribe(disabledScroll, (value) => $disabledScroll = value);
  let openMenu = false;
  let isMenuRendered;
  $$result.css.add(css$1);
  isActive = $page.url.pathname === $$props.href;
  {
    {
      if ($openmobile) {
        setTimeout(
          () => {
            isMenuRendered = true;
          },
          20
        );
      } else {
        setTimeout(
          () => {
            isMenuRendered = false;
          },
          300
        );
      }
    }
  }
  $$unsubscribe_openmobile();
  $$unsubscribe_page();
  $$unsubscribe_disabledScroll();
  return `

${$openmobile ? `<div class="${"fixed bg-zinc-100 w-full md:hidden h-full overflow-y-auto z-10 " + escape($disabledScroll ? "scroll-lock" : "", true)}"><div class="${"flex justify-between items-center w-full h-auto py-4 mt-4 px-6 relative bg-transparent"}"><div class="${"flex flex-row justify-center items-center"}"><a${add_attribute("href", "/", 0)}${add_attribute("hreflang", "/", 0)} class="${[
    "flex title-font font-medium items-center px-2 text-zinc-900 mb-4 md:mb-0",
    isActive ? "font-black" : ""
  ].join(" ").trim()}"><div class="${"p-2 w-16 h-auto rounded shadow bg-transparent flex justify-center items-center overflow-hidden"}"><img width="${"647px"}" height="${"504px"}" class="${"object-fill h-full w-full"}" alt="${"logo"}"${add_attribute("src", LogoBlack, 0)}></div></a></div>
        <div class="${"flex flex-row justify-center items-center"}"><button class="${"flex justify-center burger visible items-center px-1.5 svelte-wswztk"}" aria-label="${"Toggle menu"}" type="${"button"}"><svg class="${"h-5 w-5 text-zinc-900 mt-3 svelte-wswztk"}" viewBox="${"0 0 24 24"}" width="${"24"}" height="${"24"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" fill="${"none"}" shape-rendering="${"geometricPrecision"}" data-hide="${"true"}"><path d="${"M18 6L6 18"}"></path><path d="${"M6 6l12 12"}"></path></svg>
                &gt;
            </button></div></div>
    <div class="${[
    "menu absolute flex flex-col w-full h-auto py-0 pb-0 px-8 bg-zinc-100 svelte-wswztk",
    isMenuRendered ? "menuRendered" : ""
  ].join(" ").trim()}"><div class="${"grid grid-cols-4 gap-2 w-full h-auto py-0"}"><div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 150ms;"}" href="${"."}" class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Beranda")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 150ms;"}" href="${"/musclefirst-durex"}" class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Promo")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><button class="${"w-full h-auto"}" style="${"transition-delay: 250ms;"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Produk")}</span>
                        ${`<div class="${"i-ph:caret-right text-zinc-900"}"></div>`}</div></button>
                ${validate_component(ProductMenuMobile, "ProductMenuMobile").$$render($$result, { isOpen: openMenu }, {}, {})}</div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 250ms;"}"${add_attribute("href", "/recipes", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Resep")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 350ms;"}"${add_attribute("href", "/", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Testimonial")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900 hidden md:block"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 400ms;"}"${add_attribute("href", "/challenge", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Tantangan")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900 hidden md:block"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 450ms;"}"${add_attribute("href", "/blog", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Artikel")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 250ms;"}"${add_attribute("href", "/community", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-white border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-zinc-900 font-bold"}">${escape("Komunitas")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 500ms;"}"${add_attribute("href", "/calculator", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 border-amber-500 shadow-md shadow-orange-500/50 flex justify-between items-center text-center"}"><span class="${"text-sm text-black font-bold"}">${escape("Kalkulator")}</span>
                        <span class="${"flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black"}"><div class="${"i-ph:activity h-3 w-3 text-amber-500"}"></div></span></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 500ms;"}"${add_attribute("href", "/links", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 bg-white border-amber-500 shadow-md shadow-orange-500/50 flex justify-between items-center text-center"}"><span class="${"text-xs text-amber-900 font-bold uppercase"}">${escape("Marketplace")}</span>
                        <div class="${"i-ph:caret-right text-amber-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 500ms;"}"${add_attribute("href", "/list-agent", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 shadow-md shadow-orange-500/50 flex justify-between items-center text-center"}"><span class="${"text-xs text-zinc-900 font-bold uppercase"}">${escape("Daftar Agen")}</span>
                        <div class="${"i-ph:caret-right text-zinc-900"}"></div></div></a></div>
            <div class="${"col-span-full w-full h-auto"}"><a style="${"transition-delay: 500ms;"}"${add_attribute("href", "/agent", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 bg-gradient-to-r from-amber-500 to-yellow-900 shadow-md shadow-orange-500/50 flex justify-between items-center text-center"}"><span class="${"text-xs text-zinc-900 font-bold uppercase"}">${escape("Gabung Agen")}</span>
                        <div class="${"i-ph:plus-circle text-zinc-900"}"></div></div></a></div>
            
            <div class="${"col-span-full w-full h-auto mt-1"}"><div class="${"flex flex-row space-x-4 w-auto h-auto"}"><a rel="${"noreferrer"}" style="${"transition-delay: 400ms;"}" href="${"https://bit.ly/3nB1aDx"}" target="${"_blank"}" class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-2 bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/50 justify-center items-center text-center"}"><span class="${"text-xs text-white font-bold uppercase"}">Whatsapp</span></div></a>
                    
                    
                    <a rel="${"noreferrer"}" style="${"transition-delay: 400ms;"}" href="${"https://bit.ly/3ykdY5Q"}" target="${"_blank"}" class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/50 justify-center items-center text-center"}"><span class="${"text-xs text-white font-bold uppercase"}">Shopee</span></div></a></div></div>
            <div class="${"col-span-full w-full h-auto mt-1"}"><a style="${"transition-delay: 500ms;"}"${add_attribute("href", "/contact", 0)} class="${"svelte-wswztk"}"><div class="${"w-full px-4 py-4 shadow bg-zinc-600 border-b flex justify-between items-center text-center"}"><span class="${"text-sm text-white font-bold"}">${escape("Contact")}</span>
                        <div class="${"i-ph:caret-right text-white"}"></div></div></a></div></div>

        <div class="${"flex justify-center items-center w-full h-auto py-4 mt-4 px-0 relative bg-zinc-200 border"}"><div class="${"flex flex-col justify-center items-center"}"><div class="${"mb-0 md:mb-0 mt-0 space-x-6 sm:justify-center sm:mt-0 text-zinc-900 text-sm"}"><small>\xA9 2021 
                        <a rel="${"noreferrer"}" href="${"."}" class="${"text-sm hover:underline text-yellow-600 font-bold svelte-wswztk"}"><small class="${"uppercase"}">Musclefirst\u2122</small></a></small></div>
                <span class="${"block font-bold text-xs uppercase text-zinc-800 sm:text-center dark:text-gray-400 px-16 md:px-0"}"><small>PT Unggulan Bugar Indonesia</small></span></div></div></div></div>` : ``}`;
});
const ModalContactCustomer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openModalCS, $$unsubscribe_openModalCS;
  $$unsubscribe_openModalCS = subscribe(openModalCS, (value) => $openModalCS = value);
  let { title } = $$props;
  let { modalType } = $$props;
  const closeModal = () => {
    openModalCS.set("");
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.modalType === void 0 && $$bindings.modalType && modalType !== void 0)
    $$bindings.modalType(modalType);
  if ($$props.closeModal === void 0 && $$bindings.closeModal && closeModal !== void 0)
    $$bindings.closeModal(closeModal);
  $$unsubscribe_openModalCS();
  return `${$openModalCS ? `${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      open: $openModalCS === $openModalCS,
      as: "div",
      class: "fixed inset-0 z-10 overflow-y-auto"
    },
    {},
    {
      default: () => {
        return `<div class="${"flex justify-center items-center w-full h-full min-h-screen p-4"}">${validate_component(DialogOverlay, "DialogOverlay").$$render(
          $$result,
          {
            class: "fixed inset-0 bg-black opacity-30"
          },
          {},
          {}
        )}
        <span class="${"inline-block h-screen align-middle"}" aria-hidden="${"true"}"></span>
        <div class="${"inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"}"><div class="${"absolute -right-2 -top-2 w-auto h-auto"}"><button class="${"p-2 w-12 h-12 flex justify-center items-center bg-zinc-900 rounded-2xl"}"><div class="${"i-ph:x h-4 w-4 text-amber-500"}"></div></button></div>

            <div class="${"flex flex-col w-full h-auto space-y-2 p-0 mb-4 rounded-xl"}"><div${add_attribute("id", modalType, 0)} class="${"flex flex-col w-full h-auto"}">${validate_component(DialogTitle, "DialogTitle").$$render(
          $$result,
          {
            as: "div",
            class: "flex justify-between items-center w-full h-auto"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex justify-start items-start w-full h-auto"}"><span class="${"text-left text-sm uppercase font-medium leading-6 text-black dark:text-white"}">${escape(title)}</span></div>`;
            }
          }
        )}</div>
                <div class="${"w-full h-auto py-2 bg-transparent"}">${validate_component(Description, "DialogDescription").$$render(
          $$result,
          {
            class: "flex justify-center items-center w-full h-auto"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-col justify-center items-center w-full h-64 bg-zinc-900 shadow-xl border rounded-xl"}"><div class="${"flex flex-row justify-center items-center w-full h-auto space-x-2 px-0 mb-8 md:mb-12"}"><a target="${"_blank"}" rel="${"noreferrer nofollow"}"${add_attribute("href", "https://api.whatsapp.com/send/?phone=6282261111868&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0", 0)} class="${"w-auto h-auto p-4 bg-zinc-300 text-amber-900 hover:text-amber-500"}"><div class="${"i-ph:phone h-8 w-8 fill-current"}"></div></a>
                                <div class="${"flex flex-col w-full h-auto px-8"}"><span class="${"text-amber-600 uppercase font-bold text-xs"}">Telephone</span>
                                    <h1 class="${"font-scpbold text-white text-2xl md:text-2xl tracking-widest leading-relaxed"}">+6282261111868</h1></div></div>

                            <div class="${"flex flex-row justify-between items-center w-full h-auto px-8"}"><div class="${"flex flex-col w-auto h-auto pl-0"}"><span class="${"text-white uppercase font-bold text-xs"}">Email</span>
                                    <small class="${"text-white uppercase font-normal text-xs"}">info@musclefirst.co.id</small></div>
                                <img width="${"647px"}" height="${"504px"}"${add_attribute("src", LogoWhite, 0)} class="${"w-12 md:w-16 h-auto"}" alt="${"Muscle First Logo"}"></div></div>`;
            }
          }
        )}</div></div>
            <div class="${"absolute inset-x-0 bottom-0 w-full h-2 bg-amber-900"}"></div></div></div>`;
      }
    }
  )}` : ``}`;
});
var localforage = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(module, exports) {
  (function(f) {
    {
      module.exports = f();
    }
  })(function() {
    return function e(t, n, r) {
      function s(o2, u) {
        if (!n[o2]) {
          if (!t[o2]) {
            var a = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u && a)
              return a(o2, true);
            if (i)
              return i(o2, true);
            var f = new Error("Cannot find module '" + o2 + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o2] = { exports: {} };
          t[o2][0].call(l.exports, function(e2) {
            var n2 = t[o2][1][e2];
            return s(n2 ? n2 : e2);
          }, l, l.exports, e, t, n, r);
        }
        return n[o2].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    }({ 1: [function(_dereq_, module2, exports2) {
      (function(global) {
        var Mutation = global.MutationObserver || global.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global.document.createTextNode("");
            observer.observe(element, {
              characterData: true
            });
            scheduleDrain = function() {
              element.data = called = ++called % 2;
            };
          } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
            var channel = new global.MessageChannel();
            channel.port1.onmessage = nextTick;
            scheduleDrain = function() {
              channel.port2.postMessage(0);
            };
          } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
            scheduleDrain = function() {
              var scriptEl = global.document.createElement("script");
              scriptEl.onreadystatechange = function() {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };
              global.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = [];
        function nextTick() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;
          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;
            while (++i < len) {
              oldQueue[i]();
            }
            len = queue.length;
          }
          draining = false;
        }
        module2.exports = immediate;
        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 2: [function(_dereq_, module2, exports2) {
      var immediate = _dereq_(1);
      function INTERNAL() {
      }
      var handlers = {};
      var REJECTED = ["REJECTED"];
      var FULFILLED = ["FULFILLED"];
      var PENDING = ["PENDING"];
      module2.exports = Promise2;
      function Promise2(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function");
        }
        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;
        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(INTERNAL);
        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;
        if (typeof onFulfilled === "function") {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if (typeof onRejected === "function") {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      QueueItem.prototype.callFulfilled = function(value) {
        handlers.resolve(this.promise, value);
      };
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap(this.promise, this.onFulfilled, value);
      };
      QueueItem.prototype.callRejected = function(value) {
        handlers.reject(this.promise, value);
      };
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap(this.promise, this.onRejected, value);
      };
      function unwrap(promise, func, value) {
        immediate(function() {
          var returnValue;
          try {
            returnValue = func(value);
          } catch (e) {
            return handlers.reject(promise, e);
          }
          if (returnValue === promise) {
            handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }
      handlers.resolve = function(self2, value) {
        var result = tryCatch(getThen, value);
        if (result.status === "error") {
          return handlers.reject(self2, result.value);
        }
        var thenable = result.value;
        if (thenable) {
          safelyResolveThenable(self2, thenable);
        } else {
          self2.state = FULFILLED;
          self2.outcome = value;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callFulfilled(value);
          }
        }
        return self2;
      };
      handlers.reject = function(self2, error) {
        self2.state = REJECTED;
        self2.outcome = error;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callRejected(error);
        }
        return self2;
      };
      function getThen(obj) {
        var then = obj && obj.then;
        if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }
      function safelyResolveThenable(self2, thenable) {
        var called = false;
        function onError(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.reject(self2, value);
        }
        function onSuccess(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.resolve(self2, value);
        }
        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }
        var result = tryCatch(tryToUnwrap);
        if (result.status === "error") {
          onError(result.value);
        }
      }
      function tryCatch(func, value) {
        var out = {};
        try {
          out.value = func(value);
          out.status = "success";
        } catch (e) {
          out.status = "error";
          out.value = e;
        }
        return out;
      }
      Promise2.resolve = resolve;
      function resolve(value) {
        if (value instanceof this) {
          return value;
        }
        return handlers.resolve(new this(INTERNAL), value);
      }
      Promise2.reject = reject;
      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }
      Promise2.all = all;
      function all(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          allResolver(iterable[i], i);
        }
        return promise;
        function allResolver(value, i2) {
          self2.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
          function resolveFromAll(outValue) {
            values[i2] = outValue;
            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }
      Promise2.race = race;
      function race(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          resolver(iterable[i]);
        }
        return promise;
        function resolver(value) {
          self2.resolve(value).then(function(response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, { "1": 1 }], 3: [function(_dereq_, module2, exports2) {
      (function(global) {
        if (typeof global.Promise !== "function") {
          global.Promise = _dereq_(2);
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "2": 2 }], 4: [function(_dereq_, module2, exports2) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function getIDB() {
        try {
          if (typeof indexedDB !== "undefined") {
            return indexedDB;
          }
          if (typeof webkitIndexedDB !== "undefined") {
            return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== "undefined") {
            return mozIndexedDB;
          }
          if (typeof OIndexedDB !== "undefined") {
            return OIndexedDB;
          }
          if (typeof msIndexedDB !== "undefined") {
            return msIndexedDB;
          }
        } catch (e) {
          return;
        }
      }
      var idb = getIDB();
      function isIndexedDBValid() {
        try {
          if (!idb || !idb.open) {
            return false;
          }
          var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
        } catch (e) {
          return false;
        }
      }
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      if (typeof Promise === "undefined") {
        _dereq_(3);
      }
      var Promise$1 = Promise;
      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === "function") {
          promise.then(callback);
        }
        if (typeof errorCallback === "function") {
          promise["catch"](errorCallback);
        }
      }
      function normalizeKey(key2) {
        if (typeof key2 !== "string") {
          console.warn(key2 + " used as a key, but it is not a string.");
          key2 = String(key2);
        }
        return key2;
      }
      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
          return arguments[arguments.length - 1];
        }
      }
      var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString;
      var READ_ONLY = "readonly";
      var READ_WRITE = "readwrite";
      function _binStringToArrayBuffer(bin) {
        var length2 = bin.length;
        var buf = new ArrayBuffer(length2);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length2; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function _checkBlobSupportWithoutCaching(idb2) {
        return new Promise$1(function(resolve) {
          var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob([""]);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
          txn.onabort = function(e) {
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
          };
          txn.oncomplete = function() {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function() {
          return false;
        });
      }
      function _checkBlobSupport(idb2) {
        if (typeof supportsBlobs === "boolean") {
          return Promise$1.resolve(supportsBlobs);
        }
        return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function(resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        }
      }
      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }
      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (e.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === "ConstraintError") {
                  console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }
          openreq.onerror = function(e) {
            e.preventDefault();
            reject(openreq.error);
          };
          openreq.onsuccess = function() {
            var db = openreq.result;
            db.onversionchange = function(e) {
              e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
          };
        });
      }
      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }
      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }
      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }
        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;
        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
          }
          dbInfo.version = dbInfo.db.version;
        }
        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }
          return true;
        }
        return false;
      }
      function _encodeBlob(blob) {
        return new Promise$1(function(resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e) {
            var base64 = btoa(e.target.result || "");
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }
      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
        return createBlob([arrayBuff], { type: encodedBlob.type });
      }
      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      }
      function _fullyReady(callback) {
        var self2 = this;
        var promise = self2._initReady().then(function() {
          var dbContext = dbContexts[self2._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        executeTwoCallbacks(promise, callback, callback);
        return promise;
      }
      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);
        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;
        for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];
          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
          }
        }
        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          for (var i2 = 0; i2 < forages.length; i2++) {
            forages[i2]._dbInfo.db = db;
          }
        })["catch"](function(err) {
          _rejectReadiness(dbInfo, err);
          throw err;
        });
      }
      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === void 0) {
          retries = 1;
        }
        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
            return Promise$1.resolve().then(function() {
              if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                }
                return _getUpgradedConnection(dbInfo);
              }
            }).then(function() {
              return _tryReconnect(dbInfo).then(function() {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }
          callback(err);
        }
      }
      function createDbContext() {
        return {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
      }
      function _initStorage(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        var dbContext = dbContexts[dbInfo.name];
        if (!dbContext) {
          dbContext = createDbContext();
          dbContexts[dbInfo.name] = dbContext;
        }
        dbContext.forages.push(self2);
        if (!self2._initReady) {
          self2._initReady = self2.ready;
          self2.ready = _fullyReady;
        }
        var initPromises = [];
        function ignoreErrors() {
          return Promise$1.resolve();
        }
        for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];
          if (forage !== self2) {
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        }
        var forages = dbContext.forages.slice(0);
        return Promise$1.all(initPromises).then(function() {
          dbInfo.db = dbContext.db;
          return _getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self2._dbInfo = dbInfo;
          for (var k = 0; k < forages.length; k++) {
            var forage2 = forages[k];
            if (forage2 !== self2) {
              forage2._dbInfo.db = dbInfo.db;
              forage2._dbInfo.version = dbInfo.version;
            }
          }
        });
      }
      function getItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.get(key2);
                req.onsuccess = function() {
                  var value = req.result;
                  if (value === void 0) {
                    value = null;
                  }
                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }
                  resolve(value);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.openCursor();
                var iterationNumber = 1;
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);
                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          var dbInfo;
          self2.ready().then(function() {
            dbInfo = self2._dbInfo;
            if (toString.call(value) === "[object Blob]") {
              return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                if (blobSupport) {
                  return value;
                }
                return _encodeBlob(value);
              });
            }
            return value;
          }).then(function(value2) {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                if (value2 === null) {
                  value2 = void 0;
                }
                var req = store.put(value2, key2);
                transaction.oncomplete = function() {
                  if (value2 === void 0) {
                    value2 = null;
                  }
                  resolve(value2);
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store["delete"](key2);
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onerror = function() {
                  reject(req.error);
                };
                transaction.onabort = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.clear();
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.count();
                req.onsuccess = function() {
                  resolve(req.result);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          if (n < 0) {
            resolve(null);
            return;
          }
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var advanced = false;
                var req = store.openKeyCursor();
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  if (n === 0) {
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      advanced = true;
                      cursor.advance(n);
                    } else {
                      resolve(cursor.key);
                    }
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.openKeyCursor();
                var keys2 = [];
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(keys2);
                    return;
                  }
                  keys2.push(cursor.key);
                  cursor["continue"]();
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
            }
            return db;
          });
          if (!options.storeName) {
            promise = dbPromise.then(function(db) {
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
              }
              var dropDBPromise = new Promise$1(function(resolve, reject) {
                var req = idb.deleteDatabase(options.name);
                req.onerror = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  reject(req.error);
                };
                req.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  resolve(db2);
                };
              });
              return dropDBPromise.then(function(db2) {
                dbContext.db = db2;
                for (var i2 = 0; i2 < forages.length; i2++) {
                  var _forage = forages[i2];
                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function(db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }
              var newVersion = db.version + 1;
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }
              var dropObjectPromise = new Promise$1(function(resolve, reject) {
                var req = idb.open(options.name, newVersion);
                req.onerror = function(err) {
                  var db2 = req.result;
                  db2.close();
                  reject(err);
                };
                req.onupgradeneeded = function() {
                  var db2 = req.result;
                  db2.deleteObjectStore(options.storeName);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  db2.close();
                  resolve(db2);
                };
              });
              return dropObjectPromise.then(function(db2) {
                dbContext.db = db2;
                for (var j = 0; j < forages.length; j++) {
                  var _forage2 = forages[j];
                  _forage2._dbInfo.db = db2;
                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          }
        }
        executeCallback(promise, callback);
        return promise;
      }
      var asyncStorage = {
        _driver: "asyncStorage",
        _initStorage,
        _support: isIndexedDBValid(),
        iterate,
        getItem,
        setItem,
        removeItem,
        clear,
        length,
        key,
        keys,
        dropInstance
      };
      function isWebSQLValid() {
        return typeof openDatabase === "function";
      }
      var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var BLOB_TYPE_PREFIX = "~~local_forage_type~";
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = "__lfsc__:";
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      var TYPE_ARRAYBUFFER = "arbf";
      var TYPE_BLOB = "blob";
      var TYPE_INT8ARRAY = "si08";
      var TYPE_UINT8ARRAY = "ui08";
      var TYPE_UINT8CLAMPEDARRAY = "uic8";
      var TYPE_INT16ARRAY = "si16";
      var TYPE_INT32ARRAY = "si32";
      var TYPE_UINT16ARRAY = "ur16";
      var TYPE_UINT32ARRAY = "ui32";
      var TYPE_FLOAT32ARRAY = "fl32";
      var TYPE_FLOAT64ARRAY = "fl64";
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;
      function stringToBuffer(serializedString) {
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i;
        var p = 0;
        var encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === "=") {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === "=") {
            bufferLength--;
          }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }
      function bufferToString(buffer) {
        var bytes = new Uint8Array(buffer);
        var base64String = "";
        var i;
        for (i = 0; i < bytes.length; i += 3) {
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + "=";
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + "==";
        }
        return base64String;
      }
      function serialize(value, callback) {
        var valueType = "";
        if (value) {
          valueType = toString$1.call(value);
        }
        if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
          var buffer;
          var marker = SERIALIZED_MARKER;
          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;
            if (valueType === "[object Int8Array]") {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === "[object Uint8Array]") {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === "[object Uint8ClampedArray]") {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === "[object Int16Array]") {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === "[object Uint16Array]") {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === "[object Int32Array]") {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === "[object Uint32Array]") {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === "[object Float32Array]") {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === "[object Float64Array]") {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error("Failed to get type for BinaryArray"));
            }
          }
          callback(marker + bufferToString(buffer));
        } else if (valueType === "[object Blob]") {
          var fileReader = new FileReader();
          fileReader.onload = function() {
            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };
          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e);
          }
        }
      }
      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error("Unkown type: " + type);
        }
      }
      var localforageSerializer = {
        serialize,
        deserialize,
        stringToBuffer,
        bufferToString
      };
      function createDbTable(t, dbInfo, callback, errorCallback) {
        t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
      }
      function _initStorage$1(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
          }
        }
        var dbInfoPromise = new Promise$1(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
            return reject(e);
          }
          dbInfo.db.transaction(function(t) {
            createDbTable(t, dbInfo, function() {
              self2._dbInfo = dbInfo;
              resolve();
            }, function(t2, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }
      function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
        t.executeSql(sqlStatement, args, callback, function(t2, error) {
          if (error.code === error.SYNTAX_ERR) {
            t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
              if (!results.rows.length) {
                createDbTable(t3, dbInfo, function() {
                  t3.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t3, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t2, error);
          }
        }, errorCallback);
      }
      function getItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$1(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                var rows = results.rows;
                var length2 = rows.length;
                for (var i = 0; i < length2; i++) {
                  var item = rows.item(i);
                  var result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function _setItem(key2, value, callback, retriesLeft) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                    resolve(originalValue);
                  }, function(t2, error2) {
                    reject(error2);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                      return;
                    }
                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$1(key2, value, callback) {
        return _setItem.apply(this, [key2, value, callback, 1]);
      }
      function removeItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$1(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                var keys2 = [];
                for (var i = 0; i < results.rows.length; i++) {
                  keys2.push(results.rows.item(i).key);
                }
                resolve(keys2);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getAllStoreNames(db) {
        return new Promise$1(function(resolve, reject) {
          db.transaction(function(t) {
            t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
              var storeNames = [];
              for (var i = 0; i < results.rows.length; i++) {
                storeNames.push(results.rows.item(i).name);
              }
              resolve({
                db,
                storeNames
              });
            }, function(t2, error) {
              reject(error);
            });
          }, function(sqlError) {
            reject(sqlError);
          });
        });
      }
      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            var db;
            if (options.name === currentConfig.name) {
              db = self2._dbInfo.db;
            } else {
              db = openDatabase(options.name, "", "", 0);
            }
            if (!options.storeName) {
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db,
                storeNames: [options.storeName]
              });
            }
          }).then(function(operationInfo) {
            return new Promise$1(function(resolve, reject) {
              operationInfo.db.transaction(function(t) {
                function dropTable(storeName) {
                  return new Promise$1(function(resolve2, reject2) {
                    t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                      resolve2();
                    }, function(t2, error) {
                      reject2(error);
                    });
                  });
                }
                var operations = [];
                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                  operations.push(dropTable(operationInfo.storeNames[i]));
                }
                Promise$1.all(operations).then(function() {
                  resolve();
                })["catch"](function(e) {
                  reject(e);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var webSQLStorage = {
        _driver: "webSQLStorage",
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };
      function isLocalStorageValid() {
        try {
          return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (e) {
          return false;
        }
      }
      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + "/";
        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + "/";
        }
        return keyPrefix;
      }
      function checkIfLocalStorageThrows() {
        var localStorageTestKey = "_localforage_support_test";
        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e) {
          return true;
        }
      }
      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      }
      function _initStorage$2(options) {
        var self2 = this;
        var dbInfo = {};
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }
        self2._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      }
      function clear$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var keyPrefix = self2._dbInfo.keyPrefix;
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key2);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key2);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$2(iterator, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length2 = localStorage.length;
          var iterationNumber = 1;
          for (var i = 0; i < length2; i++) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) !== 0) {
              continue;
            }
            var value = localStorage.getItem(key2);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }
            value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$2(n, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result;
          try {
            result = localStorage.key(n);
          } catch (error) {
            result = null;
          }
          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var length2 = localStorage.length;
          var keys2 = [];
          for (var i = 0; i < length2; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }
          return keys2;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$2(callback) {
        var self2 = this;
        var promise = self2.keys().then(function(keys2) {
          return keys2.length;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key2);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$2(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          if (value === void 0) {
            value = null;
          }
          var originalValue = value;
          return new Promise$1(function(resolve, reject) {
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                  resolve(originalValue);
                } catch (e) {
                  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    reject(e);
                  }
                  reject(e);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            if (!options.storeName) {
              resolve(options.name + "/");
            } else {
              resolve(_getKeyPrefix(options, self2._defaultConfig));
            }
          }).then(function(keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var localStorageWrapper = {
        _driver: "localStorageWrapper",
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };
      var sameValue = function sameValue2(x, y) {
        return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
      };
      var includes = function includes2(array, searchElement) {
        var len = array.length;
        var i = 0;
        while (i < len) {
          if (sameValue(array[i], searchElement)) {
            return true;
          }
          i++;
        }
        return false;
      };
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ["dropInstance"];
      var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: "",
        driver: DefaultDriverOrder.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function() {
          var _args = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }
      function extend() {
        for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      var LocalForage = function() {
        function LocalForage2(options) {
          _classCallCheck(this, LocalForage2);
          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;
              if (!DefinedDrivers[driverName]) {
                this.defineDriver(driver);
              }
            }
          }
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function() {
          });
        }
        LocalForage2.prototype.config = function config(options) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
            if (this._ready) {
              return new Error("Can't call config() after localforage has been used.");
            }
            for (var i in options) {
              if (i === "storeName") {
                options[i] = options[i].replace(/\W/g, "_");
              }
              if (i === "version" && typeof options[i] !== "number") {
                return new Error("Database version must be a number.");
              }
              this._config[i] = options[i];
            }
            if ("driver" in options && options.driver) {
              return this.setDriver(this._config.driver);
            }
            return true;
          } else if (typeof options === "string") {
            return this._config[options];
          } else {
            return this._config;
          }
        };
        LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function(resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }
              var driverMethods = LibraryMethods.concat("_initStorage");
              for (var i = 0, len = driverMethods.length; i < len; i++) {
                var driverMethodName = driverMethods[i];
                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                  reject(complianceError);
                  return;
                }
              }
              var configureMissingMethods = function configureMissingMethods2() {
                var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                  return function() {
                    var error = new Error("Method " + methodName + " is not implemented by the current driver");
                    var promise2 = Promise$1.reject(error);
                    executeCallback(promise2, arguments[arguments.length - 1]);
                    return promise2;
                  };
                };
                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];
                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };
              configureMissingMethods();
              var setDriverSupport = function setDriverSupport2(support) {
                if (DefinedDrivers[driverName]) {
                  console.info("Redefining LocalForage driver: " + driverName);
                }
                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support;
                resolve();
              };
              if ("_support" in driverObject) {
                if (driverObject._support && typeof driverObject._support === "function") {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e) {
              reject(e);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };
        LocalForage2.prototype.driver = function driver() {
          return this._driver || null;
        };
        LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };
        LocalForage2.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };
        LocalForage2.prototype.ready = function ready(callback) {
          var self2 = this;
          var promise = self2._driverSet.then(function() {
            if (self2._ready === null) {
              self2._ready = self2._initDriver();
            }
            return self2._ready;
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };
        LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self2 = this;
          if (!isArray(drivers)) {
            drivers = [drivers];
          }
          var supportedDrivers = this._getSupportedDrivers(drivers);
          function setDriverToConfig() {
            self2._config.driver = self2.driver();
          }
          function extendSelfWithDriver(driver) {
            self2._extend(driver);
            setDriverToConfig();
            self2._ready = self2._initStorage(self2._config);
            return self2._ready;
          }
          function initDriver(supportedDrivers2) {
            return function() {
              var currentDriverIndex = 0;
              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers2.length) {
                  var driverName = supportedDrivers2[currentDriverIndex];
                  currentDriverIndex++;
                  self2._dbInfo = null;
                  self2._ready = null;
                  return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              }
              return driverPromiseLoop();
            };
          }
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function() {
            var driverName = supportedDrivers[0];
            self2._dbInfo = null;
            self2._ready = null;
            return self2.getDriver(driverName).then(function(driver) {
              self2._driver = driver._driver;
              setDriverToConfig();
              self2._wrapLibraryMethodsWithReady();
              self2._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function() {
            setDriverToConfig();
            var error = new Error("No available storage method found.");
            self2._driverSet = Promise$1.reject(error);
            return self2._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };
        LocalForage2.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };
        LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };
        LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        };
        LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        };
        LocalForage2.prototype.createInstance = function createInstance(options) {
          return new LocalForage2(options);
        };
        return LocalForage2;
      }();
      var localforage_js = new LocalForage();
      module2.exports = localforage_js;
    }, { "3": 3 }] }, {}, [4])(4);
  });
})(localforage);
const __layoutRoot_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tippy-box[data-theme=a-link]{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity));border-radius:.5rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(255 255 255/var(--tw-text-opacity));display:inline-block;font-size:.875rem;font-weight:500;line-height:1.25rem;padding:.25rem .625rem}",
  map: null
};
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 31536e3, private: false }
  };
}
const _layout_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let $navigating, $$unsubscribe_navigating;
  let $openmobile, $$unsubscribe_openmobile;
  let $disabledScroll, $$unsubscribe_disabledScroll;
  let $openModalCS, $$unsubscribe_openModalCS;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_openmobile = subscribe(openmobile, (value) => $openmobile = value);
  $$unsubscribe_disabledScroll = subscribe(disabledScroll, (value) => $disabledScroll = value);
  $$unsubscribe_openModalCS = subscribe(openModalCS, (value) => $openModalCS = value);
  let { segment } = $$props;
  let { currentPage } = $$props;
  let scriptEl;
  derived(navigating, (_, set) => {
    set(true);
    setTimeout(() => set(true), 250);
  });
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  $$unsubscribe_state();
  $$unsubscribe_navigating();
  $$unsubscribe_openmobile();
  $$unsubscribe_disabledScroll();
  $$unsubscribe_openModalCS();
  return `${$$result.head += `<script data-svelte="svelte-mxai55">// Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  <\/script><script${add_attribute("this", scriptEl, 0)} data-svelte="svelte-mxai55"><\/script>`, ""}

${validate_component(IndexScript, "GoogleTMScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(Index, "HotjarScript").$$render($$result, {}, {}, {})}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${$navigating ? `${validate_component(Preloading, "Preloading").$$render($$result, {}, {}, {})}` : ``}

${$openmobile ? `${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}` : ``}

<div class="${"w-full h-auto relative z-0 " + escape($disabledScroll ? "scroll-lock" : "", true)}">${validate_component(MiniBanner, "MiniBanner").$$render($$result, {}, {}, {})}
    ${validate_component(Header, "Header").$$render($$result, { segment }, {}, {})}
    ${validate_component(SubHeader, "SubHeader").$$render($$result, {}, {}, {})}
    ${validate_component(BannerPromo, "BannerPromo").$$render($$result, {}, {}, {})}
        <main class="${"w-full h-auto overflow-auto relative " + escape($disabledScroll ? "scroll-lock" : "", true)}">${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>
    ${validate_component(Footer, "Footer").$$render($$result, { classes: "m-0" }, {}, {})}

    <div class="${"fixed bottom-2 left-1 h-auto bg-transparent w-auto z-[100] px-4 py-4"}"><div class="${"flex flex-col space-y-2 justify-center items-center"}"><a rel="${"noreferrer"}" href="${"https://api.whatsapp.com/send/?phone=628118806632&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0"}" target="${"_blank"}" class="${"cursor-pointer w-14 md:w-16 h-14 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg border shadow-green-500/50 flex justify-center items-center"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-6 h-6 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></a>
            <a href="${"https://shopee.co.id/universal-link/musclefirstofficialshop?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_home_bp&utm_source=website&utm_medium=seller&utm_content=homeweb&smtt=9"}" target="${"_blank"}" class="${"cursor-pointer w-14 md:w-16 h-14 md:h-16 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg border shadow-orange-500/50 flex justify-center items-center"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-6 md:w-6 h-6 md:h-6 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></a></div></div></div>

${$openModalCS ? `${validate_component(ModalContactCustomer, "ModalContactCustomer").$$render(
    $$result,
    {
      title: "Customer Support",
      modalType: `Global`
    },
    {},
    {}
  )}` : ``}`;
});
export {
  _layout_root as default,
  load
};
