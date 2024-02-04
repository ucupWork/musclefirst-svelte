import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../../_app/immutable/chunks/index-b361c760.js";
import { c as state } from "../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { L as Loading } from "../../../../_app/immutable/chunks/Loading-7434f1ad.js";
import { T as TransitionPage } from "../../../../_app/immutable/chunks/TransitionPage-965da6ab.js";
import { I as IndexScript } from "../../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import { I as Index } from "../../../../_app/immutable/chunks/Index-3bab978c.js";
import { I as IndexScript$1 } from "../../../../_app/immutable/chunks/IndexScript-fa8c5024.js";
/* empty css                                              */import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const _layout_collab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let scriptEl;
  $$unsubscribe_state();
  return `${$$result.head += `<script data-svelte="svelte-mxai55">// Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  <\/script><script${add_attribute("this", scriptEl, 0)} data-svelte="svelte-mxai55"><\/script>`, ""}



${validate_component(IndexScript, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(Index, "HotjarScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "GoogleTMScript").$$render($$result, {}, {}, {})}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
export {
  _layout_collab as default
};