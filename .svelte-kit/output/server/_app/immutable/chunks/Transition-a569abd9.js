import { c as create_ssr_component, b as subscribe, z as add_styles } from "./index-1e319aa9.js";
import { p as page } from "./stores-75875272.js";
import "./BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
const css = {
  code: "div.svelte-1gaidu8{height:100%}.fade.svelte-1gaidu8{-webkit-animation-name:svelte-1gaidu8-fadeIn;animation-name:svelte-1gaidu8-fadeIn}.stagger.svelte-1gaidu8{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:svelte-1gaidu8-stagger;animation-name:svelte-1gaidu8-stagger;opacity:0}@-webkit-keyframes svelte-1gaidu8-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes svelte-1gaidu8-fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes svelte-1gaidu8-stagger{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes svelte-1gaidu8-stagger{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { transition } = $$props;
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${transition.type === "page" ? `<div class="${"svelte-1gaidu8"}">${slots.default ? slots.default({}) : ``}</div>` : ``}

${transition.type === "fade" ? `<div class="${"fade w-full h-auto svelte-1gaidu8"}"${add_styles({
    "animation-duration": `${transition.duration}ms`,
    "animation-delay": `${transition.delay}ms`
  })}>${slots.default ? slots.default({}) : ``}</div>` : ``}

${transition.type === "stagger" ? `<div class="${"stagger svelte-1gaidu8"}"${add_styles({
    "animation-duration": `${transition.duration * 300}ms`,
    "animation-delay": `${transition.delay}ms`
  })}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export {
  Transition as T
};
