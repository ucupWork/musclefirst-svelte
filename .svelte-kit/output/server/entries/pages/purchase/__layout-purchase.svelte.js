import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import { T as TopTop } from "../../../_app/immutable/chunks/TopTop-f5e9c00b.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { c as state } from "../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-5c31a686.js";
import { T as TransitionPage } from "../../../_app/immutable/chunks/TransitionPage-ed9081c6.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-9956b2ac.js";
import { I as IndexScript$1 } from "../../../_app/immutable/chunks/IndexScript-80586391.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-6d2e1a19.js";
/* empty css                                           */import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const _layout_purchase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let scriptEl;
  $$unsubscribe_state();
  return `${$$result.head += `<script data-svelte="svelte-mxai55">// Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  <\/script><script${add_attribute("this", scriptEl, 0)} data-svelte="svelte-mxai55"><\/script>`, ""}

${validate_component(IndexScript, "GoogleTMScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(Index, "HotjarScript").$$render($$result, {}, {}, {})}

${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Purchase Complete",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${validate_component(TopTop, "TopTop").$$render(
    $$result,
    {
      classes: "right-2 bottom-24 md:bottom-24"
    },
    {},
    {}
  )}
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>`;
});
export {
  _layout_purchase as default
};
