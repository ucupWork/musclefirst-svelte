import { c as create_ssr_component, a as add_attribute } from "./index-b361c760.js";
const CardCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgUrl } = $$props;
  let { altImg } = $$props;
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  return `<div class="${"flex justify-center items-center w-full h-full rounded-md shadow-lg p-2 bg-white border"}"><span class="${"w-auto h-auto p-2"}"><picture><source${add_attribute("srcset", imgUrl, 0)} type="${"image/webp"}">
            <img${add_attribute("src", imgUrl, 0)} width="${"640"}" height="${"360"}" class="${"w-40 h-auto overflow-hidden rounded-md bg-white transition-shadow duration-300 ease-in-out flex items-center justify-center"}"${add_attribute("alt", altImg, 0)}></picture></span></div>`;
});
export {
  CardCertified as C
};
