import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component } from "../../../_app/immutable/chunks/index-b361c760.js";
import { w as waPopUpButton, c as state } from "../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { T as TopTop } from "../../../_app/immutable/chunks/TopTop-348c5c30.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { L as Loading } from "../../../_app/immutable/chunks/Loading-7434f1ad.js";
import { T as TransitionOther } from "../../../_app/immutable/chunks/TransitionOther-f4ceb0da.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-fa8c5024.js";
import { I as IndexScript$1 } from "../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-3bab978c.js";
/* empty css                                           *//* empty css                                                  */import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
const _layout_affiliate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $waPopUpButton, $$unsubscribe_waPopUpButton;
  let $state, $$unsubscribe_state;
  $$unsubscribe_waPopUpButton = subscribe(waPopUpButton, (value) => $waPopUpButton = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let scriptEl;
  $$unsubscribe_waPopUpButton();
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

${validate_component(TopTop, "TopTop").$$render($$result, { classes: "left-2 bottom-8 md:bottom-8" }, {}, {})}
<div class="${"relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white"}">${validate_component(TransitionOther, "TransitionOther").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
    
    ${!$waPopUpButton ? `<div class="${"fixed bottom-8 right-8 w-full z-20"}"><div class="${"flex justify-end items-start m-auto px-6"}"><a rel="${"noreferrer"}" href="${"https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"}" class="${"hidden space-x-4 md:flex md:items-center shadow-xl rounded-full w-auto md:w-96 border bg-white px-4 p-2"}"><div class="${"flex justify-center items-center w-14 h-14 rounded-full object-cover bg-gradient-to-tr from-green-500 to-emerald-500"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-6 h-6 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></div>
                <div class="${"text-gray-600 dark:text-gray-400"}"><span class="${"text-sm"}">Ada Pertanyaan ?</span>
                    <p class="${"text-xs font-semibold text-gray-700 dark:text-gray-300"}">Hubungi asisten kami, sekarang</p></div></a>
            <button class="${"flex justify-center items-center w-6 h-6 rounded-full object-cover bg-gradient-to-tr from-gray-500 to-zinc-500"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-4 w-4 text-white bi bi-x"}" viewBox="${"0 0 16 16"}"><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"}"></path></svg></button></div></div>` : ``}</div>`;
});
export {
  _layout_affiliate as default,
  load
};
