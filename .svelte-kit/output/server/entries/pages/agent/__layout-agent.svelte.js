import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
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
    cache: { maxage: 31536e3 },
    currentPage: url.pathname
  };
}
const _layout_agent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_state();
  return `${$$result.head += `<script data-svelte="svelte-19rweyk">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TH3CF5T');<\/script>`, ""}

${validate_component(IndexScript, "GoogleTMScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(Index, "HotjarScript").$$render($$result, {}, {}, {})}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-black"}">${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
    
    </div>`;
});
export {
  _layout_agent as default,
  load
};
