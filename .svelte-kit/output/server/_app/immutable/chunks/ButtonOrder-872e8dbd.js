import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-b361c760.js";
import "./index-778a8503.js";
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productName } = $$props;
  let { classes = "" } = $$props;
  if ($$props.productName === void 0 && $$bindings.productName && productName !== void 0)
    $$bindings.productName(productName);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `

${``}`;
});
const ButtonBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonType } = $$props;
  let { linkHref } = $$props;
  if ($$props.buttonType === void 0 && $$bindings.buttonType && buttonType !== void 0)
    $$bindings.buttonType(buttonType);
  if ($$props.linkHref === void 0 && $$bindings.linkHref && linkHref !== void 0)
    $$bindings.linkHref(linkHref);
  return `${buttonType === "black" ? `<div class="${"fixed left-1 md:left-4 top-3 md:top-8 z-[100]"}"><a${add_attribute("href", linkHref, 0)} class="${"flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50"}"><span class="${"md:ml-0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-3 h-3 fill-current text-white bi bi-chevron-left"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}"></path></svg></span>
        <span class="${"ml-4 md:ml-4 font-medium text-white text-xs"}">Back to Home
        </span></a></div>` : `${buttonType === "pink" ? `<div class="${"fixed left-1 md:left-4 top-3 md:top-8 z-[100]"}"><a${add_attribute("href", linkHref, 0)} class="${"flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-pink-500 to-rose-400 shadow shadow-pink-500/50"}"><span class="${"md:ml-0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-3 h-3 fill-current text-white bi bi-chevron-left"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}"></path></svg></span>
        <span class="${"ml-4 md:ml-4 font-medium text-white text-xs"}">Back to Home
        </span></a></div>` : ``}`}`;
});
const ButtonOrder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes } = $$props;
  let { linkHref } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.linkHref === void 0 && $$bindings.linkHref && linkHref !== void 0)
    $$bindings.linkHref(linkHref);
  return `<div class="${"hidden md:flex justify-end items-end w-auto h-auto px-0 py-2 text-center"}"><a${add_attribute("href", linkHref, 0)} class="${"cursor-pointer flex justify-center items-center leading-none text-center " + escape(classes, true) + " w-64 py-2 px-6"}"><span class="${"block text-xl uppercase font-black text-white"}">Beli Sekarang</span></a></div>`;
});
export {
  ButtonBack as B,
  Share as S,
  ButtonOrder as a
};
