import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-e606abe2.js";
import { T as TopTop } from "../../../../_app/immutable/chunks/TopTop-f5e9c00b.js";
import { S as Share, B as ButtonBack, a as ButtonOrder } from "../../../../_app/immutable/chunks/ButtonOrder-85b3e66f.js";
import { c as state, l as lpCountdown } from "../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { L as Loading } from "../../../../_app/immutable/chunks/Loading-5c31a686.js";
import { T as TransitionPage } from "../../../../_app/immutable/chunks/TransitionPage-ed9081c6.js";
import { I as Index } from "../../../../_app/immutable/chunks/IndexCount-717cdf24.js";
import { I as IndexScript } from "../../../../_app/immutable/chunks/IndexScript-80586391.js";
import { I as IndexScript$1 } from "../../../../_app/immutable/chunks/IndexScript-9956b2ac.js";
/* empty css                                              */import "../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
let productName = "Pro Collafit";
const _layout_collafit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let $lpCountdown, $$unsubscribe_lpCountdown;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_lpCountdown = subscribe(lpCountdown, (value) => $lpCountdown = value);
  $$unsubscribe_state();
  $$unsubscribe_lpCountdown();
  return `${validate_component(IndexScript, "FbPixelScript").$$render($$result, {}, {}, {})}
${validate_component(IndexScript$1, "GoogleTMScript").$$render($$result, {}, {}, {})}

${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      ogImage: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png",
      title: `Shape & Glow - ${productName}`,
      description: `${productName} menjaga kesehatan dan kecantikan dari luar maupun dalam tubuh.`,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${$state.loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}

${validate_component(TopTop, "TopTop").$$render($$result, { classes: "left-2 bottom-6 md:bottom-24" }, {}, {})}
${validate_component(Share, "Share").$$render(
    $$result,
    {
      productName,
      classes: "left-2 bottom-20 md:bottom-40"
    },
    {},
    {}
  )}
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">
    ${validate_component(ButtonBack, "ButtonBack").$$render(
    $$result,
    {
      buttonType: "pink",
      linkHref: "/products"
    },
    {},
    {}
  )}
    

    ${validate_component(TransitionPage, "TransitionPage").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}

    ${``}
    
    <div class="${"fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 border-t border-pink-300 shadow-xl z-[90] px-12 md:px-24"}">
        ${$lpCountdown ? `${validate_component(Index, "CountTime").$$render(
    $$result,
    {
      bgColor: "zinc-900",
      flexType: "flex-row",
      textColor: "white",
      width: "16",
      height: "12",
      textSize: "xl",
      borderColor: "yellow",
      dateFormatText: "2022-11-09 09:30:00",
      endTimeText: "The time has come!"
    },
    {},
    {}
  )}` : ``}       
        ${validate_component(ButtonOrder, "ButtonOrder").$$render(
    $$result,
    {
      classes: "bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg border shadow-rose-500/50",
      linkHref: "/products/pro-collafit"
    },
    {},
    {}
  )}</div>
    </div>`;
});
export {
  _layout_collafit as default,
  load
};
