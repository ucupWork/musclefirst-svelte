import { c as create_ssr_component } from "./index-b361c760.js";
const CardNoResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cardType } = $$props;
  if ($$props.cardType === void 0 && $$bindings.cardType && cardType !== void 0)
    $$bindings.cardType(cardType);
  return `${cardType === "product" ? `<div class="${"absolute top-0 w-full max-w-xl h-auto pt-10"}"><div class="${"flex justify-center items-center w-full h-auto py-6 px-4 bg-white"}"><div class="${"w-auto h-auto text-center"}"><p><span class="${"font-black"}">No results.</span> Try again!</p></div></div></div>` : ``}

${cardType === "agent" ? `<div class="${"w-full h-auto pt-0 px-8"}"><div class="${"flex justify-center items-center w-full h-auto py-4 px-4 bg-white mt-2 mb-4"}"><div class="${"w-auto h-auto text-center"}"><p><span class="${"font-black text-black"}">No results</span>, Please contact your admin!</p></div></div></div>` : ``}`;
});
export {
  CardNoResult as C
};
