import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, d as each, e as escape } from "../../../_app/immutable/chunks/index-b361c760.js";
import { d as articlesQuery, e as infoArticlesQuery, g as funFactArticlesQuery, r as recentArticlesQuery, c as categoriesQuery } from "../../../_app/immutable/chunks/article-queries-62221a2a.js";
import { c as client } from "../../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-b286f9d3.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { g as searchBlog } from "../../../_app/immutable/chunks/index-29c1f748.js";
import { C as CardNoResult } from "../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import { r as readableDate } from "../../../_app/immutable/chunks/readable-date-297548ee.js";
/* empty css                                                  */import "graphql-request";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const SearchBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val = "" } = $$props;
  const clearText = () => {
    searchBlog.set("");
    val = "";
  };
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.clearText === void 0 && $$bindings.clearText && clearText !== void 0)
    $$bindings.clearText(clearText);
  {
    searchBlog.set(val);
  }
  return `<div class="${"w-full h-auto relative"}"><input type="${"text"}" class="${"w-full py-3 pr-10 pl-6 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring"}"${add_attribute("placeholder", "Cari Judul Disini", 0)}${add_attribute("value", val, 0)}>
    
    ${val ? `<button type="${"button"}" class="${"absolute inset-y-0 right-2 flex items-center pr-3"}"><div class="${"i-ph:x text-red-500 w-5 h-5 mr-0"}"></div></button>` : `<button type="${"button"}" class="${"absolute inset-y-0 right-2 flex items-center pr-3"}"><div class="${"i-ph:magnifying-glass text-amber-500 w-5 h-5 mr-0"}"></div></button>`}</div>`;
});
const ListBlogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchBlog, $$unsubscribe_searchBlog;
  $$unsubscribe_searchBlog = subscribe(searchBlog, (value) => $searchBlog = value);
  let { filteredBlogs = [] } = $$props;
  let { allArticles = [] } = $$props;
  if ($$props.filteredBlogs === void 0 && $$bindings.filteredBlogs && filteredBlogs !== void 0)
    $$bindings.filteredBlogs(filteredBlogs);
  if ($$props.allArticles === void 0 && $$bindings.allArticles && allArticles !== void 0)
    $$bindings.allArticles(allArticles);
  $$unsubscribe_searchBlog();
  return `${$searchBlog && (filteredBlogs || []).length === 0 ? `${validate_component(CardNoResult, "CardNoResult").$$render($$result, { cardType: "blog" }, {}, {})}` : `${$searchBlog && (filteredBlogs || []).length > 0 ? `<div class="${"absolute top-0 w-full h-auto pt-10 z-20"}">${each(filteredBlogs, ({ title, slug }) => {
    return `<button class="${"w-full h-auto"}"><div class="${"flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow"}"><div class="${"flex flex-row items-center w-auto h-auto"}"><div class="${"flex flex-col ml-2"}"><span class="${"text-black hover:text-amber-500 text-sm font-normal"}">${escape(title)}</span>
                </div></div>

            <div class="${"w-auto h-auto"}"><div class="${"i-ph:caret-right h-4 w-4 text-zinc-900"}"></div>
            </div></div>
    </button>`;
  })}</div>` : `${$searchBlog ? `<div class="${"absolute top-0 w-full h-auto pt-10 z-20"}">${each(allArticles, ({ title, slug }) => {
    return `<button class="${"w-full h-auto"}"><div class="${"flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow"}"><div class="${"flex flex-row items-center w-auto h-auto"}"><div class="${"flex flex-col ml-2"}"><span class="${"text-black hover:text-amber-500 text-sm font-normal"}">${escape(title)}</span>
                    </div></div>

                <div class="${"w-auto h-auto"}"><div class="${"i-ph:caret-right h-4 w-4 text-zinc-900"}"></div>
                </div></div>
        </button>`;
  })}</div>` : ``}`}`}`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchBlog, $$unsubscribe_searchBlog;
  $$unsubscribe_searchBlog = subscribe(searchBlog, (value) => $searchBlog = value);
  let { allArticles = [] } = $$props;
  let { categories = [] } = $$props;
  let { infoArticles = [] } = $$props;
  let { funFactArticles = [] } = $$props;
  let { recentArticles = [] } = $$props;
  let filteredBlogs = [];
  if ($$props.allArticles === void 0 && $$bindings.allArticles && allArticles !== void 0)
    $$bindings.allArticles(allArticles);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.infoArticles === void 0 && $$bindings.infoArticles && infoArticles !== void 0)
    $$bindings.infoArticles(infoArticles);
  if ($$props.funFactArticles === void 0 && $$bindings.funFactArticles && funFactArticles !== void 0)
    $$bindings.funFactArticles(funFactArticles);
  if ($$props.recentArticles === void 0 && $$bindings.recentArticles && recentArticles !== void 0)
    $$bindings.recentArticles(recentArticles);
  $$unsubscribe_searchBlog();
  return `<div class="${"flex justify-center w-full h-auto bg-zinc-100 relative"}"><div class="${"w-auto h-auto bg-zinc-100 relative pt-8 md:pt-8 px-4 md:px-4 max-w-7xl"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 mb-0"}"><div class="${"flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full"}"><div class="${"flex flex-col justify-start items-center space-y-2 w-full relative"}">${validate_component(SearchBlog, "SearchBlog").$$render($$result, { val: $searchBlog }, {}, {})}
					${validate_component(ListBlogs, "ListBlogs").$$render($$result, { filteredBlogs, allArticles }, {}, {})}</div></div></div>
		
		<div${add_attribute("id", `kategori-pilihan`, 0)} class="${"w-full sm:h-auto md:h-auto mt-4"}"><div class="${"flex flex-col w-full h-auto px-4 md:px-12"}"><div class="${"flex flex-col w-full h-auto text-xs px-4 py-1 mb-4"}"><small class="${"font-bold uppercase text-black"}">Kategori Pilihan</small></div>
				<div class="${"grid grid-cols-6 gap-2 w-full h-auto"}">${each(categories.categories, (list) => {
    return `<div class="${"col-span-2 md:col-span-1 w-full h-auto"}"><a${add_attribute("href", `/blog/category/${list.slug}`, 0)} rel="${"norefferer"}" class="${"flex text-black justify-center bg-transparent hover:bg-black hover:text-white items-center px-4 py-2 border border-zinc-300 rounded-full"}"><span class="${"font-bold"}">${escape(list.name)}</span></a>
					</div>`;
  })}</div></div></div>

		<div${add_attribute("id", `blog-informasi`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8"}"><div class="${"flex flex-col space-y-4 w-auto mb-8 md:mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Blog Informasi")}</h1>
					<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out")}</p></div>
				<div><a rel="${"canonical alternate noreferrer"}"${add_attribute("href", `/blog/category/informasi`, 0)} class="${"bg-black rounded-full px-8 py-2"}"><span class="${"font-bold text-white"}">Lihat Semua</span></a></div></div></div>

		<div${add_attribute("id", `list-blog-informasi`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12"}"><div class="${"grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0"}">${each(infoArticles.articles, (list) => {
    return `<article class="${"col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", list.image[0].url, 0)}${add_attribute("alt", list.imageTitle, 0)} class="${"h-56 w-full object-cover"}">
					
						<div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><time datetime="${"2022-10-10"}" class="${"block text-xs text-gray-500 dark:text-white"}">${escape(list.date ? readableDate(list.date) : "No Date Now")}</time>
					
						<a${add_attribute("href", list.slug ? `/blog/${list.slug}` : `/`, 0)}><h3 class="${"leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white"}">${escape(list.title ? list.title : "No Title")}</h3>
						</a></div>
					</article>`;
  })}</div></div></div>

		<div${add_attribute("id", `blog-funfact`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8 md:pt-2"}"><div class="${"flex flex-col space-y-4 w-auto mb-8 md:mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Blog Funfact")}</h1>
					<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Seputar informasi terbaru dan tips terbaru untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out")}</p></div>
				<div><a rel="${"canonical alternate noreferrer"}"${add_attribute("href", `/blog/category/funfact`, 0)} class="${"bg-black rounded-full px-8 py-2"}"><span class="${"font-bold text-white"}">Lihat Semua</span></a></div></div></div>

		<div${add_attribute("id", `list-blog-funfact`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12"}"><div class="${"grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0"}">${each(funFactArticles.articles, (list) => {
    return `<article class="${"col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", list.image[0].url, 0)}${add_attribute("alt", list.imageTitle, 0)} class="${"h-56 w-full object-cover"}">
					
						<div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><time datetime="${"2022-10-10"}" class="${"block text-xs text-gray-500 dark:text-white"}">${escape(list.date ? readableDate(list.date) : "No Date Now")}</time>
					
						<a${add_attribute("href", list.slug ? `/blog/${list.slug}` : `/`, 0)}><h3 class="${"leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white"}">${escape(list.title ? list.title : "No Title")}</h3>
						</a></div>
					</article>`;
  })}</div></div></div>

		<div${add_attribute("id", `blog-terbaru`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-4 md:px-12 pt-8"}"><div class="${"flex flex-col space-y-4 w-auto mb-8 md:mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Blog Terbaru")}</h1>
					<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out")}</p></div>
				<div><a rel="${"canonical alternate noreferrer"}" href="${"/blog/semua"}" class="${"bg-black rounded-full px-8 py-2"}"><span class="${"font-bold text-white"}">Lihat Semua</span></a></div></div></div>

		<div${add_attribute("id", `list-blog-terbaru`, 0)} class="${"w-full sm:h-auto md:h-auto"}"><div class="${"w-full h-auto p-0 md:p-8 space-y-6 sm:space-y-12"}"><div class="${"grid grid-cols-3 gap-6 justify-center w-full py-8 md:py-0"}">${each(recentArticles.articles, (list) => {
    return `<article class="${"col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", list.image[0].url, 0)}${add_attribute("alt", list.imageTitle, 0)} class="${"h-56 w-full object-cover"}">
					
						<div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><time datetime="${"2022-10-10"}" class="${"block text-xs text-gray-500 dark:text-white"}">${escape(list.date ? readableDate(list.date) : "No Date Now")}</time>
					
						<a${add_attribute("href", list.slug ? `/blog/${list.slug}` : `/`, 0)}><h3 class="${"leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white"}">${escape(list.title ? list.title : "No Title")}</h3>
						</a></div>
					</article>`;
  })}</div></div></div></div></div>`;
});
async function load({ url }) {
  const articles = await client.request(articlesQuery);
  const infoArticles = await client.request(infoArticlesQuery);
  const funFactArticles = await client.request(funFactArticlesQuery);
  const recentArticles = await client.request(recentArticlesQuery);
  const listCategories = await client.request(categoriesQuery);
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    props: {
      allArticles: articles,
      infoArticles,
      funFactArticles,
      recentArticles,
      categories: listCategories
    },
    cache: { maxage: 3600, private: false }
  };
}
const Index_blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allArticles } = $$props;
  let { recentArticles } = $$props;
  let { infoArticles } = $$props;
  let { funFactArticles } = $$props;
  let { categories } = $$props;
  let { segment } = $$props;
  let { currentPage } = $$props;
  if ($$props.allArticles === void 0 && $$bindings.allArticles && allArticles !== void 0)
    $$bindings.allArticles(allArticles);
  if ($$props.recentArticles === void 0 && $$bindings.recentArticles && recentArticles !== void 0)
    $$bindings.recentArticles(recentArticles);
  if ($$props.infoArticles === void 0 && $$bindings.infoArticles && infoArticles !== void 0)
    $$bindings.infoArticles(infoArticles);
  if ($$props.funFactArticles === void 0 && $$bindings.funFactArticles && funFactArticles !== void 0)
    $$bindings.funFactArticles(funFactArticles);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Blog",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Blog",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render(
    $$result,
    {
      allArticles,
      recentArticles,
      infoArticles,
      funFactArticles,
      categories
    },
    {},
    {}
  )}`;
});
export {
  Index_blog as default,
  load
};
