import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { c as state } from "../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-5c31a686.js";
import { T as TransitionPage } from "../../../_app/immutable/chunks/TransitionPage-ed9081c6.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-9956b2ac.js";
import { I as IndexScript$1 } from "../../../_app/immutable/chunks/IndexScript-80586391.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-6d2e1a19.js";
/* empty css                                           */import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
const _layout_team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-black"}">${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
    <div class="${"hidden md:grid grid-cols-3 gap-4 md:gap-2 w-full h-auto px-8 md:px-16 py-2 bg-black"}"><div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black"}"><div class="${"flex flex-row justify-center md:justify-start items-center md:space-x-4 w-full h-auto text-center"}"><div class="${"hidden md:block i-bi:instagram h-4 w-4 text-zinc-100"}"></div>
                <span class="${"text-sm font-bold text-white uppercase"}">Instagram | @musclefirst</span></div></div>
        <div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black"}"><div class="${"flex flex-row justify-center items-center md:space-x-4 w-full h-auto text-center"}"><div class="${"hidden md:block i-bi:facebook h-4 w-4 text-zinc-100"}"></div>
                <span class="${"text-sm font-bold text-white uppercase"}">Facebook Page | Musclefirst</span></div></div>
        <div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black"}"><div class="${"flex flex-row justify-center md:justify-end items-center md:space-x-4 w-full h-auto text-center"}"><div class="${"hidden md:block i-bi:facebook h-4 w-4 text-zinc-100"}"></div>
                <span class="${"text-sm font-bold text-white uppercase"}">Facebook Group | Komunitas Musclefirst</span></div></div></div></div>`;
});
export {
  _layout_team as default,
  load
};
