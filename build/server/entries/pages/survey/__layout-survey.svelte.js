import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-b361c760.js";
import { c as state } from "../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { T as TopTop } from "../../../_app/immutable/chunks/TopTop-348c5c30.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-7434f1ad.js";
import { T as Transition } from "../../../_app/immutable/chunks/Transition-bd0a2403.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-fa8c5024.js";
import { I as IndexScript$1 } from "../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-3bab978c.js";
/* empty css                                           */import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
const _layout_survey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-[#151515]"}">
    <div class="${"fixed right-4 md:right-12 top-4 md:top-8 z-[100]"}"><a${add_attribute("href", "/", 0)} class="${"flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4 rounded-full bg-zinc-900 shadow shadow-zinc-500/50 border"}"><span class="${"md:mr-0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-3 h-3 bi bi-chevron-left"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}"></path></svg></span></a></div>
    

    ${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      transition: { type: "fade", duration: 250 }
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>`;
});
export {
  _layout_survey as default
};
