import { c as create_ssr_component, d as each, a as add_attribute, e as escape } from "./index-b361c760.js";
const SectionOne_svelte_svelte_type_style_lang = "";
const SectionAllProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = [] } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${products ? `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-center items-center w-full h-auto py-8 md:py-4 px-8 md:px-24 bg-zinc-300 shadow border-b-4"}">${each(products, (list) => {
    return `<div class="${"flex flex-row w-full md:w-auto h-auto"}"><a${add_attribute("href", `https://musclefirst.co.id/${list.linkHref}`, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-auto border py-2 px-4 md:px-8"}"><span class="${"uppercase block text-sm md:text-sm font-black text-white"}">${escape(list.name)}</span></a>
        </div>`;
  })}</div></section>` : ``}`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<section class="${"flex justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-400/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex justify-center items-center space-x-4 w-full h-auto"}"><div class="${"grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2"}">${each(certifiedCardList, (list) => {
    return `<div class="${"col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span></div>
                </div>`;
  })}</div></div></div></section>`;
});
export {
  SectionCertified as S,
  SectionAllProducts as a
};
