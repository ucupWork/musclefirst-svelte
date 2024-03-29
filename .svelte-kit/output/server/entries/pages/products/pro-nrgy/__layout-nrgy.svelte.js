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
  return { segment, currentPage: url.pathname };
}
let productName = "Pro Nrgy";
const _layout_nrgy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      ogImage: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png",
      title: `Pre Workout - Energy Drinks - Meningkatkan Stamina - ${productName}`,
      description: `${productName} merupakan minuman energy sebagai pre workout agar menambah fokus dan power tanpa efek samping. Pro NRGY sudah bersertifikat halal dan BPOM.`,
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
${validate_component(Share, "Share").$$render(
    $$result,
    {
      productName,
      classes: "right-2 bottom-40 md:bottom-40"
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
      return `1B3mY3Fi8W
        ${slots.default ? slots.default({}) : ``}`;
    }
  })}

    
    <div class="${"fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 z-[100] px-12 md:px-24"}">
        ${$lpCountdown ? `${validate_component(Index, "CountTime").$$render(
    $$result,
    {
      bgColor: "zinc-900",
      flexType: "flex-row",
      textColor: "white",
      width: "16",
      height: "12",
      textSize: "xl",
      borderColor: "rose",
      dateFormatText: "2022-11-09 09:30:00",
      endTimeText: "The time has come!"
    },
    {},
    {}
  )}` : ``}      
        ${validate_component(ButtonOrder, "ButtonOrder").$$render(
    $$result,
    {
      classes: "rounded-full text-center bg-rose-800 w-64 border border-gray-900",
      linkHref: "/products/pro-nrgy"
    },
    {},
    {}
  )}</div>
    </div>`;
});
export {
  _layout_nrgy as default,
  load
};
