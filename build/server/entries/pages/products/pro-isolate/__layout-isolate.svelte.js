import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import { T as TopTop } from "../../../../_app/immutable/chunks/TopTop-348c5c30.js";
import { S as Share, B as ButtonBack, a as ButtonOrder } from "../../../../_app/immutable/chunks/ButtonOrder-872e8dbd.js";
import { c as state, l as lpCountdown } from "../../../../_app/immutable/chunks/index-bd400a30.js";
import "../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { L as Loading } from "../../../../_app/immutable/chunks/Loading-7434f1ad.js";
import { T as TransitionPage } from "../../../../_app/immutable/chunks/TransitionPage-965da6ab.js";
import { I as Index } from "../../../../_app/immutable/chunks/IndexCount-3e5ef3dc.js";
import { I as IndexScript } from "../../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import { I as IndexScript$1 } from "../../../../_app/immutable/chunks/IndexScript-fa8c5024.js";
/* empty css                                              */import "../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
let productName = "Pro Isolate";
const _layout_isolate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      ogImage: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png",
      title: `Susu Whey Protein Isolate - ${productName}`,
      description: `${productName} merupakan whey protein murni dengan daya serap cepat. Cocok bagi anda yang ingin bentuk badan ideal. Pro Isolate juga sudah bersertifikat halal dan BPOM.`,
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
      buttonType: "black",
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
    
    <div class="${"fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 z-[90] px-12 md:px-24"}">
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
      classes: "bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg border shadow-amber-500/50",
      linkHref: "/products/pro-isolate"
    },
    {},
    {}
  )}</div>
    </div>`;
});
export {
  _layout_isolate as default,
  load
};
