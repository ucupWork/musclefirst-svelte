import { c as create_ssr_component } from "./index-b361c760.js";
/* empty css                                               */const css = {
  code: "#qrcode.svelte-1xet4hy{margin-top:2px}",
  map: null
};
const QrCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { codeValue } = $$props;
  let { squareSize } = $$props;
  if ($$props.codeValue === void 0 && $$bindings.codeValue && codeValue !== void 0)
    $$bindings.codeValue(codeValue);
  if ($$props.squareSize === void 0 && $$bindings.squareSize && squareSize !== void 0)
    $$bindings.squareSize(squareSize);
  $$result.css.add(css);
  return `<div id="${"qrcode"}" class="${"w-auto h-auto svelte-1xet4hy"}"></div>`;
});
export {
  QrCode as Q
};
