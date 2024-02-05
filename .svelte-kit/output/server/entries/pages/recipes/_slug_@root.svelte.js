import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { r as recipeQuery } from "../../../_app/immutable/chunks/recipe-queries-502ccb7d.js";
import { c as client } from "../../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "graphql-request";
import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const load = async ({ url, session, params }) => {
  const slug = params.slug;
  const variables = { slug };
  const { recipe } = await client.request(recipeQuery, variables);
  return {
    currentPage: url.pathname,
    props: { recipe },
    cache: { maxage: 3600, private: false }
  };
};
const U5Bslugu5D_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  let { segment } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Recipe | " + recipe.name,
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
      linkUrl: "/recipes",
      slug: recipe.name
    },
    {},
    {}
  )}

<div class="${"flex flex-col w-full h-auto bg-black px-8 md:px-16 py-8"}"><div class="${"mb-5 flex justify-between"}"><div>${recipe.tags ? `${each(recipe.tags, (tag) => {
    return `<span class="${"badge text-zinc-100 cursor-pointer"}">${escape(tag)}</span>`;
  })}` : ``}</div></div>

<div class="${"flex flex-col w-full h-auto mb-5"}"><h1 class="${"text-4xl md:text-5xl text-white dark:text-zinc-900 font-black"}">${escape(recipe.name)}</h1>
    <small class="${"uppercase font-medium text-amber-500"}">${escape(recipe.date)}</small></div>

<div class="${"flex flex-col w-auto h-auto mb-5"}"><img class="${"object-cover rounded-t-xl w-full h-64 md:h-80"}"${add_attribute("src", recipe.image[0].url, 0)}${add_attribute("alt", recipe.name, 0)}>
    <div class="${"grid grid-cols-4 md:gap-0 w-full h-auto bg-white dark:bg-zinc-900 py-0 md:py-0"}"><div class="${"border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4"}"><span class="${"font-black text-2xl text-zinc-900 dark:text-white"}">Protein</span>
                <div class="${"flex items-end space-x-2"}"><span class="${"text-2xl font-bold text-zinc-900 dark:text-white"}">${escape(recipe.protein)}</span>
                    <span class="${"text-md font-medium text-zinc-900 dark:text-white"}">g</span></div></div></div>
        <div class="${"border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4"}"><span class="${"font-black text-2xl text-zinc-900 dark:text-white"}">Crabs</span>
                <div class="${"flex items-end space-x-2"}"><span class="${"text-2xl font-bold text-zinc-900 dark:text-white"}">${escape(recipe.carbs)}</span>
                    <span class="${"text-md font-medium text-zinc-900 dark:text-white"}">g</span></div></div></div>
        <div class="${"border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4"}"><span class="${"font-black text-2xl text-zinc-900 dark:text-white"}">Calories</span>
                <div class="${"flex items-end space-x-2"}"><span class="${"text-2xl font-bold text-zinc-900 dark:text-white"}">${escape(recipe.calories)}</span></div></div></div>
        <div class="${"border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4"}"><span class="${"font-black text-2xl text-zinc-900 dark:text-white"}">Fat</span>
                <div class="${"flex items-end space-x-2"}"><span class="${"text-2xl font-bold text-zinc-900 dark:text-white"}">${escape(recipe.fat)}</span>
                    <span class="${"text-md font-medium text-zinc-900 dark:text-white"}">g</span></div></div></div></div></div>

<div class="${"flex w-full h-auto bg-white dark:bg-zinc-900 relative"}"><div class="${"grid grid-cols-12 gap-0 w-full h-auto"}"><div class="${"col-span-full md:col-span-4 flex justify-center items-start w-full h-auto bg-zinc-200"}"><div class="${"w-auto h-auto px-4 py-8"}"><article class="${"prose prose-xl text-sm font-medium"}"><!-- HTML_TAG_START -->${recipe.ingredients.html}<!-- HTML_TAG_END --></article></div></div>
        <div class="${"col-span-full md:col-span-8 flex justify-center items-start w-full h-auto bg-zinc-100"}"><div class="${"w-auto h-auto px-4 py-8"}"><article class="${"prose prose-xl text-sm font-medium"}"><!-- HTML_TAG_START -->${recipe.description.html}<!-- HTML_TAG_END --></article></div></div>
        
        <div class="${"col-span-full w-full h-auto py-0 border-t"}"><div class="${"grid grid-cols-3 md:gap-0 w-full h-auto"}"><div class="${"border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center"}"><div class="${"flex flex-row items-center space-x-2"}"><div class="${"i-ph:fork-knife h-5 w-5"}"></div>
                            <span class="${"font-black text-xl uppercase text-zinc-900 dark:text-white"}">Servings</span></div>
                        <div class="${"flex items-center space-x-2"}"><span class="${"font-medium text-xl text-zinc-900 dark:text-white"}">${escape(recipe.servings)}</span></div></div></div>
                <div class="${"border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center"}"><div class="${"flex flex-row items-center space-x-2"}"><div class="${"i-ph:clock h-5 w-5"}"></div>
                            <span class="${"font-black text-xl uppercase text-zinc-900 dark:text-white"}">Active Time</span></div>
                        <div class="${"flex items-center space-x-2"}"><span class="${"font-medium text-xl text-zinc-900 dark:text-white"}">${escape(recipe.activeTime)}</span></div></div></div>
                <div class="${"border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto"}"><div class="${"flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center"}"><div class="${"flex flex-row items-center space-x-2"}"><div class="${"i-ph:clock-afternoon h-5 w-5"}"></div>
                            <span class="${"font-black text-xl uppercase text-zinc-900 dark:text-white"}">Total Time</span></div>
                        <div class="${"flex items-center space-x-2"}"><span class="${"font-medium text-xl text-zinc-900 dark:text-white"}">${escape(recipe.totalTime)}</span></div></div></div></div></div></div></div></div>`;
});
export {
  U5Bslugu5D_root as default,
  load
};
