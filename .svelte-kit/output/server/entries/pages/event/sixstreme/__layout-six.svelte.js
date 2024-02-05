import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { c as state } from "../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { L as Loading } from "../../../../_app/immutable/chunks/Loading-5c31a686.js";
import { T as TransitionPage } from "../../../../_app/immutable/chunks/TransitionPage-ed9081c6.js";
import { I as IndexScript } from "../../../../_app/immutable/chunks/IndexScript-9956b2ac.js";
import { I as IndexScript$1 } from "../../../../_app/immutable/chunks/IndexScript-80586391.js";
import { I as Index } from "../../../../_app/immutable/chunks/Index-6d2e1a19.js";
/* empty css                                              */import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    cache: { maxage: 31536e3 },
    currentPage: url.pathname
  };
}
const _layout_six = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    
    <div class="${"fixed inset-x-0 bottom-0 flex md:hidden w-full h-auto z-50"}"><div class="${"w-full h-auto p-4"}"><button class="${"flex justify-between items-center w-full h-auto bg-gradient-to-r from-orange-700 to-yelow-500 rounded-full border border-black py-4 md:py-8 px-4"}"><span class="${"font-blackttnorms font-black text-md text-white"}">Gabung Sekarang</span>
                <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white w-4 h-4 icon icon-tabler icon-tabler-chevron-right"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M9 6l6 6l-6 6"}"></path></svg></button></div></div>
    </div>`;
});
export {
  _layout_six as default,
  load
};
