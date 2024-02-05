import { c as create_ssr_component, a as add_attribute, e as escape, d as each, v as validate_component } from "../../../../../_app/immutable/chunks/index-1e319aa9.js";
import { f as funFactAllArticlesQuery } from "../../../../../_app/immutable/chunks/article-queries-62221a2a.js";
import { c as client } from "../../../../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { S as SEO } from "../../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema, e as blogSchema } from "../../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                                        */import { r as readableDate } from "../../../../../_app/immutable/chunks/readable-date-297548ee.js";
import "graphql-request";
import "../../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allArticles = [] } = $$props;
  if ($$props.allArticles === void 0 && $$bindings.allArticles && allArticles !== void 0)
    $$bindings.allArticles(allArticles);
  return `<div class="${"flex justify-center w-full h-auto bg-zinc-100 relative"}"><div class="${"fixed left-4 md:top-32 w-auto h-auto z-20"}"><a${add_attribute("href", `/blog`, 0)} class="${"flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50"}"><span class="${"md:ml-0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-3 h-3 fill-current text-white bi bi-chevron-left"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}"></path></svg></span>
			<span class="${"ml-4 md:ml-4 font-medium text-white text-xs"}">Kembali
			</span></a></div>
	<div class="${"w-auto h-auto bg-zinc-100 relative pt-8 md:pt-8 px-4 md:px-4 max-w-7xl"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 mb-0"}"><div class="${"flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full"}"><div class="${"w-full h-auto relative"}"><input type="${"text"}" class="${"w-full py-3 pr-10 pl-4 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring"}"${add_attribute("placeholder", "Cari Judul Disini", 0)}>
					
					<span class="${"absolute inset-y-0 right-0 flex items-center pr-3"}"><svg class="${"w-5 h-5 text-amber-500 dark:text-white"}" viewBox="${"0 0 24 24"}" fill="${"none"}"><path d="${"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></span></div></div></div>

		<div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 md:pt-8"}"><div class="${"flex flex-col space-y-4 w-auto mb-8 md:mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Blog Funfacts")}</h1>
				<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Seputar informasi terbaru dan tips terbaru untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out")}</p></div></div>
		<div class="${"w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12"}"><div class="${"grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0"}">${each(allArticles.articles, (list) => {
    return `<article${add_attribute("id", list.id, 0)} class="${"col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", list.image[0].url, 0)}${add_attribute("alt", list.imageTitle, 0)} class="${"h-56 w-full object-cover"}">
				
					<div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><time datetime="${"2022-10-10"}" class="${"block text-xs text-gray-500 dark:text-white"}">${escape(list.date ? readableDate(list.date) : "No Date Now")}</time>
				
					<a${add_attribute("href", list.slug ? `/blog/${list.slug}` : `/`, 0)}><h3 class="${"leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white"}">${escape(list.title ? list.title : "No Title")}</h3>
					</a></div>
				</article>`;
  })}</div></div></div></div>`;
});
const load = async ({ url }) => {
  const funFactAllArticles = await client.request(funFactAllArticlesQuery);
  return {
    currentPage: url.pathname,
    props: { funFactAllArticles }
  };
};
const Index_blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { funFactAllArticles } = $$props;
  if ($$props.funFactAllArticles === void 0 && $$bindings.funFactAllArticles && funFactAllArticles !== void 0)
    $$bindings.funFactAllArticles(funFactAllArticles);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Funfact Blog",
      schemas: [websiteSchema, organizationSchema, blogSchema]
    },
    {},
    {}
  )}

<div class="${"w-full h-auto pt-4 md:pt-10"}">${validate_component(Main, "FunfactsMain").$$render($$result, { allArticles: funFactAllArticles }, {}, {})}</div>`;
});
export {
  Index_blog as default,
  load
};
