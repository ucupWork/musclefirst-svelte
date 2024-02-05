import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { p as page } from "../../../_app/immutable/chunks/stores-75875272.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-zinc-50 md:py-8 relative"}"><div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col py-12 md:py-0 px-4 md:px-0 border-b border-black"}"><div class="${"w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-start justify-center"}"><div class="${"flex flex-col space-y-4 w-full mb-4 px-2 md:px-8"}"><h1 class="${"w-full whitespace-pre-line text-5xl font-black text-left text-zinc-900"}">${escape("Disclaimer Kesehatan")}</h1>
                        <div class="${"flex flex-col justify-start items-start w-full h-auto"}"><p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-2xl"}"><!-- HTML_TAG_START -->${`Semua materi dan konten yang disediakan di situs web <span class="font-bold uppercase">Musclefirst</span> hanya bersifat umum dan disertakan hanya untuk tujuan memberikan informasi umum.`}<!-- HTML_TAG_END --></p>
                            <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-4xl"}">${escape("Materi dan konten situs web tidak dimaksudkan untuk menjadi pengganti nasihat, diagnosis, atau perawatan medis profesional individual dan tidak boleh mengandalkannya. Untuk saran medis atau nutrisi yang dipersonalisasi, pengguna harus membuat janji dengan dokter, ahli diet, atau profesional perawatan kesehatan yang berkualifikasi.")}</p></div></div></div></div></div></div></div>`;
});
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { segment } = $$props;
  let { currentPage = $page.url.pathname } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Disclaimer Kesehatan",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Disclaimer Kesehatan",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Index_root as default
};
