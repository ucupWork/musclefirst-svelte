import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { c as state } from "../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { T as TopTop } from "../../../_app/immutable/chunks/TopTop-f5e9c00b.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-5c31a686.js";
import { T as TransitionOther } from "../../../_app/immutable/chunks/TransitionOther-9729340e.js";
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
const _layout_challenge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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

${validate_component(TopTop, "TopTop").$$render(
    $$result,
    {
      classes: "right-2 bottom-24 md:bottom-24"
    },
    {},
    {}
  )}
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">
    <div class="${"flex flex-row justify-between items-center w-full h-auto fixed py-4 px-4 md:px-8 insex-x-0 top-0 z-[100]"}"><div class="${"w-auto h-auto z-[100]"}"><a${add_attribute("href", "/", 0)} class="${"flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4"}"><span class="${"md:mr-0"}"><img width="${"647px"}" height="${"504px"}" class="${"w-8 md:w-16 h-auto"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} alt="${"Musclefirst Logo"}"></span></a></div>
        
        <div class="${"w-auto h-auto z-[100]"}"><a${add_attribute("href", "/", 0)} class="${"flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4 rounded-full bg-zinc-900 shadow shadow-zinc-900/50 border border-black"}"><span class="${"md:mr-0"}"><div class="${"i-bi:x-lg text-white w-3 h-3"}"></div></span></a></div></div>
    

    ${validate_component(TransitionOther, "TransitionOther").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
    
    <div class="${"flex flex-row justify-between items-center w-full h-auto fixed py-4 px-4 md:px-12 insex-x-0 bottom-0 z-[100]"}"><div class="${"flex flex-row w-auto h-auto z-[100]"}"><a target="${"_blank"}" href="${"https://www.facebook.com/sharer/sharer.php?u=https://musclefirst.co.id"}" class="${"md:mr-3 p-2 rounded"}"><div class="${"i-bi:facebook text-white w-6 h-6"}"></div></a>
            <a target="${"_blank"}" href="${"https://twitter.com/intent/tweet?text=Join+me+at+Musclefirst+Challenge+2022%21+Find+out+more+at+https%3A%2F%musclefirst.com+%MusclefirstChallenge"}" class="${"md:mr-3 p-2 rounded"}"><div class="${"i-bi:twitter text-white w-6 h-6"}"></div></a>
            <a target="${"_blank"}" href="${"https://www.linkedin.com/shareArticle?mini=true&url=https://musclefirst.com&title=Musclefirst+Challange+2022&summary=I%27m+attending+Musclefirst+Challenge+2022.+If+you%27re+interested%2C+why+not+check+it+out+here%3A+https%3A%2F%2Fmusclefirst.co.id%2Fchallenge"}" class="${"md:mr-3 p-2 rounded"}"><div class="${"i-bi:linkedin text-white w-6 h-6"}"></div></a></div>
        
        <div class="${"flex flex-col items-start space-x-1 w-auto h-auto z-[100]"}"><span class="${"text-sm text-white"}"><a href="${"."}" class="${"text-sm hover:underline text-yellow-600 font-bold"}"><small class="${"uppercase"}">Musclefirst\u2122</small></a>
                <small>\xA9 2021</small></span>
            <span class="${"text-xs text-white uppercase"}"><small>PT Unggulan Bugar Indonesia</small> 
                <small>All Rights Reserved.</small></span></div></div></div>`;
});
export {
  _layout_challenge as default,
  load
};
