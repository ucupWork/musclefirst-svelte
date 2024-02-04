import { c as create_ssr_component, e as escape, d as each } from "./index-b361c760.js";
const SectionThirteen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitleOne } = $$props;
  let { titleOne } = $$props;
  let { subtitleTwo } = $$props;
  let { titleTwo } = $$props;
  let { btnText } = $$props;
  let { descText } = $$props;
  if ($$props.subtitleOne === void 0 && $$bindings.subtitleOne && subtitleOne !== void 0)
    $$bindings.subtitleOne(subtitleOne);
  if ($$props.titleOne === void 0 && $$bindings.titleOne && titleOne !== void 0)
    $$bindings.titleOne(titleOne);
  if ($$props.subtitleTwo === void 0 && $$bindings.subtitleTwo && subtitleTwo !== void 0)
    $$bindings.subtitleTwo(subtitleTwo);
  if ($$props.titleTwo === void 0 && $$bindings.titleTwo && titleTwo !== void 0)
    $$bindings.titleTwo(titleTwo);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.descText === void 0 && $$bindings.descText && descText !== void 0)
    $$bindings.descText(descText);
  return `<section class="${"flex justify-center items-center w-full h-auto md:h-screen bg-zinc-700 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0 py-8 md:py-16 px-4 md:px-32"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-start items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left"}"><span class="${"font-black text-2xl md:text-3xl uppercase text-zinc-400"}">${escape(subtitleOne)}</span>
                    <h2 class="${"text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16"}"><!-- HTML_TAG_START -->${titleOne}<!-- HTML_TAG_END --></h2>
                    <p class="${"leading-none text-2xl text-center md:text-left text-white w-full border shadow-lg py-3 md:py-3 px-6"}"><!-- HTML_TAG_START -->${descText}<!-- HTML_TAG_END --></p></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-full md:w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left"}"><span class="${"font-black text-2xl md:text-3xl uppercase text-zinc-500"}">${escape(subtitleTwo)}</span>
                    <h2 class="${"text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16"}"><!-- HTML_TAG_START -->${titleTwo}<!-- HTML_TAG_END --></h2>
                    <button type="${"button"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 w-full border shadow-lg py-3 md:py-3 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span></button></div></div></div></div></section>`;
});
const SectionSize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productName } = $$props;
  let { title } = $$props;
  let { products = [] } = $$props;
  let filteredProduct = products.filter((product) => product.name === productName);
  if ($$props.productName === void 0 && $$bindings.productName && productName !== void 0)
    $$bindings.productName(productName);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${filteredProduct ? `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-gradient-to-r from-amber-500 to-orange-500 shadow border-b-4"}"><div class="${"flex w-full md:w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-center"}"><button type="${"button"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6"}"><span class="${"uppercase block text-xl font-black text-white"}">${escape(filteredProduct[0].name)}</span></button></div>
        <div class="${"flex flex-col w-auto h-auto"}">${each(filteredProduct, (list) => {
    return `<div class="${"grid grid-cols-" + escape(list.size.length, true) + " gap-1 w-auto h-auto"}">${each(list.size, (val) => {
      return `<div class="${"col-span-1 flex flex-row justify-center items-center w-24 h-24 bg-black border"}"><h2 class="${"text-2xl md:text-3xl font-black text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(val.sizeName)}</span></h2>
                        <h2 class="${"text-2xl md:text-3xl font-black text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(val.sizeType)}</span></h2>
                    </div>`;
    })}
            </div>`;
  })}</div></div></section>` : ``}`;
});
export {
  SectionSize as S,
  SectionThirteen as a
};
