import { c as create_ssr_component } from "./index-b361c760.js";
const TransitionOther = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="${"relative w-full h-full m-0 flex flex-col"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  TransitionOther as T
};
