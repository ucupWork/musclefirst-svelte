import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../_app/immutable/chunks/index-778a8503.js";
import "../../_app/immutable/chunks/common-65c7f3c2.js";
import { B as Breadcrumbs } from "../../_app/immutable/chunks/Breadcrumbs-b286f9d3.js";
import { w as websiteSchema, o as organizationSchema } from "../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../_app/immutable/chunks/stores-290123b5.js";
import "../../_app/immutable/chunks/site-data-ef8bff3e.js";
const comOne = "/_app/immutable/assets/1080-01-ab71d3c9.webp";
const comTwo = "/_app/immutable/assets/1080-02-ffe38c96.webp";
const comThree = "/_app/immutable/assets/1080-03-8c8443f7.webp";
const fbOne = "/_app/immutable/assets/fb-01-bf6d5083.webp";
const fbTwo = "/_app/immutable/assets/fb-02-766908d4.webp";
const fbFour = "/_app/immutable/assets/fb-04-76656d39.webp";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-auto bg-zinc-100 relative py-8 md:py-0"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto px-8 md:px-16 max-w-2xl py-8 md:py-8"}"><h2 class="${"font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl"}">${escape("Dicintai Oleh Komunitas Kami")}</h2>
			<span class="${"text-sm font-normal mt-2 text-zinc-900"}">${escape("Ikuti official @musclefirstofficial untuk dapatkan informasi lainnya dan tag kami")}<br> Tag us @musclefirstofficial and #musclefirst
			</span></div>
		<div class="${"flex justify-end items-end w-full h-auto px-8 md:px-20 max-w-xl py-8 md:py-16"}"><a href="${"https://www.facebook.com/www.musclefirst.co.id"}" target="${"_blank"}" class="${"w-auto h-auto py-4 px-6 bg-black rounded-full"}"><span class="${"text-white font-bold text-xl"}">${escape("Gabung Komunitas")}</span></a></div></div>
	<div class="${"p-8 px-4 md:px-16"}"><div class="${"grid grid-cols-3 gap-0 justify-center w-full"}"><a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", fbOne, 0)}></a>
			<a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", fbTwo, 0)}></a>
			<a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", fbFour, 0)}></a></div>

		<div class="${"grid grid-cols-3 gap-0 justify-center w-full"}"><a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", comOne, 0)}></a>
			<a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", comTwo, 0)}></a>
			<a rel="${"noopener noreferrer"}"${add_attribute("href", "/", 0)} class="${"col-span-full md:col-span-1 w-full bg-transparent shadow p-1 group hover:no-underline focus:no-underline dark:bg-zinc-900"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", comThree, 0)}></a></div></div></div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    cache: { maxage: 31536e3 },
    currentPage: url.pathname
  };
}
const Community_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { currentPage } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Community",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Community",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Community_root as default,
  load
};
