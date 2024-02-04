import { c as create_ssr_component, e as escape, d as each, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-b361c760.js";
import { a as recipeArticlesQuery } from "../../../_app/immutable/chunks/recipe-article-queries-41c36858.js";
import { a as recipesQuery } from "../../../_app/immutable/chunks/recipe-queries-502ccb7d.js";
import { c as client } from "../../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-b286f9d3.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { r as readableDate } from "../../../_app/immutable/chunks/readable-date-297548ee.js";
import "graphql-request";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const ImgNotfound = "/_app/immutable/assets/img-notfound-be16995f.webp";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipes = [] } = $$props;
  let { recipeArticles = [] } = $$props;
  if ($$props.recipes === void 0 && $$bindings.recipes && recipes !== void 0)
    $$bindings.recipes(recipes);
  if ($$props.recipeArticles === void 0 && $$bindings.recipeArticles && recipeArticles !== void 0)
    $$bindings.recipeArticles(recipeArticles);
  return `<div class="${"w-full h-auto bg-zinc-100 relative py-8 md:py-0 px-4 md:px-4"}"><div class="${"px-4 md:px-12 space-y-6 sm:space-y-12"}"><div class="${"flex justify-between items-center w-full h-auto pt-8"}"><div class="${"flex flex-col space-y-4 w-full mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Resep Artikel")}</h1>
				<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Kumpulan bentuk artikel dari video yang sudah ada dan di mix dengan produk musclefirst, temukan disini")}</p></div></div>
		<div class="${"grid grid-cols-4 gap-4 justify-center w-full pb-16"}">${each(recipeArticles, (list) => {
    return `<a rel="${"noopener noreferrer"}"${add_attribute("href", list.slug ? `/recipes/article/${list.slug}` : `/`, 0)} class="${"relative col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline w-full h-full shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900"}"><img role="${"presentation"}" class="${"object-cover w-full h-auto dark:bg-gray-500"}"${add_attribute("src", list.image[0].url ? list.image[0].url : ImgNotfound, 0)}${add_attribute("alt", list.title ? list.title : "No Image Found", 0)}>
				<div class="${"absolute inset-x-0 bottom-0 w-full h-auto md:h-56 bg-white dark:bg-zinc-900 shadow"}"><div class="${"flex flex-col justify-start items-center w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900"}"><div class="${"flex flex-col w-auto h-auto tracking-tighter leading-none text-left mb-4"}"><span class="${"text-xs text-amber-500 font-medium"}">${escape(list.createdAt ? readableDate(list.createdAt) : "No Date Now")}</span>
							<h2 class="${"block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight leading-none"}">${escape(list.title ? list.title : "No Title")}
							</h2></div>
					</div></div>
			</a>`;
  })}</div>
		<div class="${"flex justify-between items-center w-full h-auto pt-8"}"><div class="${"flex flex-col space-y-4 w-full mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black"}">${escape("Resep Kami")}</h1>
				<p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose max-w-md"}">${escape("Kami daftar dari beberapa resep unggulan yang ada, nikmati rasa yang berbeda")}</p></div></div>
		<div class="${"grid grid-cols-4 gap-4 justify-center w-full pb-4"}"><div class="${"col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"}"><blockquote class="${"tiktok-embed"}" cite="${"https://www.tiktok.com/@bizzlexo/video/7087882458171051290"}" data-video-id="${"7087882458171051290"}" style="${"max-width: 605px;min-width: 325px;"}"><section><a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"@bizzlexo"}" href="${"https://www.tiktok.com/@bizzlexo?refer=embed"}">@bizzlexo</a> cemilan buat kalian yang lagi diet, cuma 3 bahan aja loh, protein powder <a title="${"musclefirst"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/musclefirst?refer=embed"}">#musclefirst</a> @musclefirstofficial <a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"\u266C Woman - Doja Cat"}" href="${"https://www.tiktok.com/music/Woman-6976278887063898114?refer=embed"}">\u266C Woman - Doja Cat</a></section></blockquote> <script async src="${"https://www.tiktok.com/embed.js"}"><\/script></div>
			<div class="${"col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"}"><blockquote class="${"tiktok-embed"}" cite="${"https://www.tiktok.com/@yessbaby98/video/7082732739329330458"}" data-video-id="${"7082732739329330458"}" style="${"max-width: 605px;min-width: 325px;"}"><section><a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"@yessbaby98"}" href="${"https://www.tiktok.com/@yessbaby98?refer=embed"}">@yessbaby98</a> Tanpa tepung terigu! Empukk dan wangiii\u{1F44D}@musclefirstofficial <a title="${"browniescoklat"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/browniescoklat?refer=embed"}">#browniescoklat</a> <a title="${"browniesdiet"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/browniesdiet?refer=embed"}">#browniesdiet</a> <a title="${"musclefirst"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/musclefirst?refer=embed"}">#musclefirst</a> <a title="${"wheyprotein"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/wheyprotein?refer=embed"}">#wheyprotein</a> <a title="${"bodyideal"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/bodyideal?refer=embed"}">#bodyideal</a> <a title="${"olahraga"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/olahraga?refer=embed"}">#olahraga</a> <a title="${"healthysnacks"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/healthysnacks?refer=embed"}">#healthysnacks</a>  <a title="${"ramadankembalikuat"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/ramadankembalikuat?refer=embed"}">#RamadanKembaliKuat</a> <a title="${"fyp"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/fyp?refer=embed"}">#fyp</a> <a title="${"fyp\u30C4"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/fyp%E3%83%84?refer=embed"}">#fyp\u30C4</a> <a title="${"masukberandafyp"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/masukberandafyp?refer=embed"}">#masukberandafyp</a> <a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"\u266C Love, Maybe - SECRET NUMBER"}" href="${"https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed"}">\u266C Love, Maybe - SECRET NUMBER</a></section></blockquote> <script async src="${"https://www.tiktok.com/embed.js"}"><\/script></div>
			<div class="${"col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"}"><blockquote class="${"tiktok-embed"}" cite="${"https://www.tiktok.com/@virgierolettaa/video/7080496131666398491"}" data-video-id="${"7080496131666398491"}" style="${"max-width: 605px;min-width: 325px;"}"><section><a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"@virgierolettaa"}" href="${"https://www.tiktok.com/@virgierolettaa?refer=embed"}">@virgierolettaa</a> cocok buat buka puasa nihh! enak, bikinnya gampang, ga ribet &amp; yg terpenting cocok buat yg lagi diet \u{1F97A}\u{1F496} @musclefirstofficial <a title="${"musclefirst"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/musclefirst?refer=embed"}">#Musclefirst</a> <a title="${"kulinerseruramadan"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/kulinerseruramadan?refer=embed"}">#KulinerSeruRamadan</a> <a title="${"serunyaramadan"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/serunyaramadan?refer=embed"}">#SerunyaRamadan</a> <a title="${"mochi"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/mochi?refer=embed"}">#mochi</a> <a title="${"takjil"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/takjil?refer=embed"}">#takjil</a> <a title="${"menuviral"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/menuviral?refer=embed"}">#menuviral</a><a title="${"sponsored"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/sponsored?refer=embed"}"></a> <a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"\u266C Love, Maybe - SECRET NUMBER"}" href="${"https://www.tiktok.com/music/Love-Maybe-7072719791144617986?refer=embed"}">\u266C Love, Maybe - SECRET NUMBER</a></section></blockquote> <script async src="${"https://www.tiktok.com/embed.js"}"><\/script></div>
			<div class="${"col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"}"><blockquote class="${"tiktok-embed"}" cite="${"https://www.tiktok.com/@vishelajovita/video/7076790519023602971"}" data-video-id="${"7076790519023602971"}" style="${"max-width: 605px;min-width: 325px;"}"><section><a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"@vishelajovita"}" href="${"https://www.tiktok.com/@vishelajovita?refer=embed"}">@vishelajovita</a> my favorite flavor of whey is honey banana, high in ptotein and diet friendly\u{1F61A} <a title="${"musclefirst"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/musclefirst?refer=embed"}">#musclefirst</a> <a title="${"lavatoast"}" target="${"_blank"}" href="${"https://www.tiktok.com/tag/lavatoast?refer=embed"}">#lavatoast</a> <a target="${"_blank"}" rel="${"noreferrer nofollow"}" title="${"\u266C The Show - Lenka"}" href="${"https://www.tiktok.com/music/The-Show-6782318616630003714?refer=embed"}">\u266C The Show - Lenka</a></section></blockquote> <script async src="${"https://www.tiktok.com/embed.js"}"><\/script></div>
			<div class="${"col-span-full md:col-span-1 w-full h-auto bg-white rounded-xl shadow"}"></div></div>
		<div class="${"grid grid-cols-3 gap-4 justify-center w-full pb-16"}">${each(recipes, (list) => {
    return `<a rel="${"noopener noreferrer"}"${add_attribute("href", `/recipes/${list.slug}`, 0)} class="${"col-span-full md:col-span-1 bg-transparent group hover:no-underline focus:no-underline shadow-xl p-0 bg-zinc-50 dark:bg-zinc-900"}"><div class="${"p-4 space-y-2 bg-white dark:bg-zinc-900 shadow"}"><div class="${"grid grid-cols-2 gap-2 w-full h-auto"}"><div class="${"col-span-1 md:col-span-1 w-full h-auto flex justify-start items-center"}"><div class="${"bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center"}"><div class="${"i-ph:timer text-zinc-900 dark:text-white"}"></div>
								<span class="${"text-sm font-medium text-zinc-900 dark:text-white"}">${escape(list.totalTime)} Min</span>
							</div></div>
						<div class="${"col-span-1 md:col-span-1 w-full h-auto flex justify-end items-center"}"><div class="${"bg-transparent rounded w-auto h-auto flex space-x-2 justify-center items-center"}"><div class="${"i-ph:fork-knife text-zinc-900 dark:text-white"}"></div>
								<span class="${"text-sm font-medium text-zinc-900 dark:text-white"}">${escape(list.calories)} Kcal</span>
							</div></div>
					</div></div>
				<img role="${"presentation"}" class="${"object-cover w-full h-44 dark:bg-gray-500"}"${add_attribute("src", list.image[0].url, 0)}${add_attribute("alt", list.name, 0)}>
				<div class="${"w-full h-auto p-6 space-y-0 bg-white dark:bg-zinc-900 shadow"}"><span class="${"text-xs text-amber-500 font-medium"}">${escape(readableDate(list.date))}</span>
					<h2 class="${"block text-xl md:text-2xl font-black group-hover:underline group-focus:underline text-zinc-900 dark:text-white tracking-tight"}">${escape(list.name)}</h2>
					<div class="${"block w-auto h-auto"}"><div class="${"flex flex-row space-x-0"}">${list.tags ? `${each(list.tags, (tag) => {
      return `<small class="${"text-zinc-900 dark:text-white cursor-pointer"}">${escape(tag)}</small>`;
    })}` : ``}</div>
					</div></div>
			</a>`;
  })}</div></div></div>`;
});
async function load({ url }) {
  const { recipes } = await client.request(recipesQuery);
  const { recipeArticles } = await client.request(recipeArticlesQuery);
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    props: { recipes, recipeArticles },
    cache: { maxage: 3600, private: false }
  };
}
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipes } = $$props;
  let { recipeArticles } = $$props;
  let { segment } = $$props;
  let { currentPage } = $$props;
  if ($$props.recipes === void 0 && $$bindings.recipes && recipes !== void 0)
    $$bindings.recipes(recipes);
  if ($$props.recipeArticles === void 0 && $$bindings.recipeArticles && recipeArticles !== void 0)
    $$bindings.recipeArticles(recipeArticles);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Recipes",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Recipes",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, { recipes, recipeArticles }, {}, {})}`;
});
export {
  Index_root as default,
  load
};
