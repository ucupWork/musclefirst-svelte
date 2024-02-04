import { c as create_ssr_component, b as subscribe, e as escape, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import { T as TopTop } from "../../../_app/immutable/chunks/TopTop-348c5c30.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { c as state } from "../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { L as LogoWhite } from "../../../_app/immutable/chunks/logo-white-bbda6e5d.js";
import { p as page } from "../../../_app/immutable/chunks/stores-290123b5.js";
import { F as Footer } from "../../../_app/immutable/chunks/Footer-6c2e0600.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-7434f1ad.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { T as TransitionOther } from "../../../_app/immutable/chunks/TransitionOther-f4ceb0da.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-fa8c5024.js";
import { I as IndexScript$1 } from "../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-3bab978c.js";
/* empty css                                           */import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const HeaderBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { classes } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$unsubscribe_page();
  return `<div class="${"flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-16 py-4 bg-[#0a0908] border-b border-amber-500 fixed top-0 z-50"}"><div class="${"hidden md:flex flex-col md:flex-row justify-between items-center space-y-2 bg-[#0a0908] w-full h-auto " + escape(classes, true)}"><nav class="${"flex flex-row justify-center items-center text-center pb-2 md:pb-0"}"><a rel="${"noreferrer"}" href="${"/"}" class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/" ? "active" : ""
  ].join(" ").trim()}"><div class="${"w-12 h-auto rounded-md shadow-lg bg-transparent flex justify-start items-center overflow-hidden"}"><img class="${"object-fill h-auto w-12"}" alt="${"Musclefirst Logo"}"${add_attribute("src", LogoWhite, 0)}></div></a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/products`, 0)} class="${[
    "font-ttnorms flex items-center nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/products" ? "active" : ""
  ].join(" ").trim()}">${escape("Products")}</a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/calculator`, 0)} class="${[
    "font-ttnorms flex items-center nav-link mr-4 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/calculator" ? "active" : ""
  ].join(" ").trim()}">${escape("Kalkulator")}
                <span class="${"flex justify-center items-center ml-0.5 w-5 h-5 bg-transparent border border-black"}"><div class="${"i-ph:activity h-3 w-3 text-amber-500"}"></div></span></a>
            <a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", `/campaign/special-event`, 0)} class="${[
    "relative font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/campaign/monthly/whey" ? "active" : ""
  ].join(" ").trim()}"><div class="${"z-10 absolute -top-0 -right-3 w-auto h-auto"}"><span class="${"flex h-2 w-2"}"><span class="${"animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"}"></span>
                        <span class="${"relative inline-flex rounded-full h-2 w-2 bg-amber-500"}"></span></span></div>
                <span class="${"z-0 w-auto h-auto"}">${escape("Promosi")}</span></a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/blog`, 0)} class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/blog" ? "active" : ""
  ].join(" ").trim()}">${escape("Blog")}</a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/recipes`, 0)} class="${[
    "font-ttnorms nav-link mr-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/recipes" ? "active" : ""
  ].join(" ").trim()}">${escape("Resep")}</a></nav>
        <nav class="${"flex flex-wrap items-end text-end justify-end pb-2 md:pb-0"}"><a data-sveltekit-noscroll${add_attribute("href", `/agent`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/agent" ? "active" : ""
  ].join(" ").trim()}">${escape("Partnership")}</a>
            <a data-sveltekit-noscroll${add_attribute("href", `/challenge`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/challenge" ? "active" : ""
  ].join(" ").trim()}">${escape("Tantangan")}</a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/testimonials`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/testimonials" ? "active" : ""
  ].join(" ").trim()}">${escape("Testimonial")}</a>
            <a rel="${"noreferrer"}"${add_attribute("href", `/community`, 0)} class="${[
    "font-ttnorms nav-link ml-8 text-sm font-semibold cursor-pointer whitespace-pre-line text-zinc-100",
    $page.url.pathname === "/community" ? "active" : ""
  ].join(" ").trim()}">${escape("Komunitas")}</a></nav></div></div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
const _layout_blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let scriptEl;
  $$unsubscribe_state();
  return `${$$result.head += `<script data-svelte="svelte-mxai55">// Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  <\/script><script${add_attribute("this", scriptEl, 0)} data-svelte="svelte-mxai55"><\/script>`, ""}

${validate_component(IndexScript, "GoogleTMScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(Index, "HotjarScript").$$render($$result, {}, {}, {})}

${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Blog",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${validate_component(TopTop, "TopTop").$$render($$result, { classes: "left-4 bottom-6 md:bottom-8" }, {}, {})}
${validate_component(HeaderBlog, "HeaderBlog").$$render($$result, { classes: "max-w-7xl md:px-16 m-0" }, {}, {})}
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">${validate_component(TransitionOther, "TransitionOther").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>
<div class="${"flex justify-center w-full h-auto bg-[#0a0908] relative"}">${validate_component(Footer, "Footer").$$render($$result, { classes: "max-w-7xl m-0" }, {}, {})}</div>`;
});
export {
  _layout_blog as default,
  load
};
