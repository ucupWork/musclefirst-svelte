import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { r as recipeArticleQuery } from "../../../../_app/immutable/chunks/recipe-article-queries-41c36858.js";
import { c as client } from "../../../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { r as readableDate } from "../../../../_app/immutable/chunks/readable-date-297548ee.js";
import "graphql-request";
import "../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const load = async ({ url, session, params }) => {
  const slug = params.slug;
  const variables = { slug };
  const { recipeArticle } = await client.request(recipeArticleQuery, variables);
  return {
    currentPage: url.pathname,
    props: { recipeArticle },
    cache: { maxage: 3600, private: false }
  };
};
const U5Bslugu5D_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipeArticle } = $$props;
  let { segment } = $$props;
  if ($$props.recipeArticle === void 0 && $$bindings.recipeArticle && recipeArticle !== void 0)
    $$bindings.recipeArticle(recipeArticle);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Recipe | " + recipeArticle.title,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Recipes Article",
      linkUrl: "/recipes/article",
      slug: recipeArticle.title
    },
    {},
    {}
  )}

<div class="${"flex flex-col w-full h-auto bg-black px-8 md:px-16 py-8"}"><div class="${"flex flex-col w-full h-auto mb-5"}"><h1 class="${"text-4xl md:text-5xl text-white dark:text-zinc-900 font-black"}">${escape(recipeArticle.title)}</h1>
        <small class="${"uppercase font-medium text-amber-500"}">${escape(recipeArticle.createdAt ? readableDate(recipeArticle.createdAt) : "No Date Now")}</small></div>

    <div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 flex flex-col w-full h-auto"}"><img class="${"object-cover rounded-t-xl w-full h-full"}"${add_attribute("src", recipeArticle.image[0].url, 0)}${add_attribute("alt", recipeArticle.title, 0)}></div>
        
        <div class="${"col-span-full md:col-span-1 flex flex-col w-full h-auto bg-transparent dark:bg-zinc-900 relative"}"><div class="${"flex flex-col w-full h-full bg-zinc-100"}"><div class="${"flex flex-col w-full h-auto bg-zinc-200"}"><div class="${"w-auto h-auto px-4 py-4"}"><article class="${"prose prose-sm text-sm font-medium p-2"}"><!-- HTML_TAG_START -->${recipeArticle.ingredients.html}<!-- HTML_TAG_END --></article></div></div>
                <div class="${"flex flex-col w-full h-auto bg-zinc-100"}"><div class="${"w-auto h-auto px-4 py-4"}"><article class="${"prose prose-xl text-sm font-medium p-2"}"><!-- HTML_TAG_START -->${recipeArticle.description.html}<!-- HTML_TAG_END --></article></div></div></div>
            <div class="${"flex justify-center items-center w-full h-auto"}"><a rel="${"noreferrer"}"${add_attribute("href", recipeArticle.videoLink, 0)} target="${"_blank"}" class="${"flex justify-center items-center w-full h-auto text-center py-2 px-4 bg-[#fe2c55]"}"><span class="${"text-sm uppercase font-bold text-white"}">Lihat Video Disini</span></a></div></div></div></div>`;
});
export {
  U5Bslugu5D_root as default,
  load
};
