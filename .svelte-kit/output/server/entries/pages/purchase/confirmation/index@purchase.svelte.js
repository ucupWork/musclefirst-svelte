import { c as create_ssr_component, a as add_attribute } from "../../../../_app/immutable/chunks/index-b361c760.js";
/* empty css                                                             */const Index_purchase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"flex justify-center items-center w-full h-screen bg-zinc-900 relative"}"><section class="${"w-auto h-auto"}"><div class="${"px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24"}"><div class="${"flex flex-col w-full justify-center items-center md:mb-4 text-center"}"><div class="${"inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-8 text-blue-600 rounded-full bg-zinc-900 border"}"><img src="${"https://store.musclefirst.co.id/wp-content/uploads/2021/07/logo-white-m1.png"}" class="${"h-8"}" alt="${"Muscle First Logo"}"></div>
            <h1 class="${"flex font-bold leading-none tracking-tighter text-green-600 text-5xl md:text-6xl items-center"}">Confirmation Complete 
            </h1>
      
            <p class="${"max-w-md mx-auto mt-8 text-base leading-relaxed text-center text-gray-200"}">Pemesanan anda sedang kami proses, silakan tunggu konfirmasi dari kami, Terimakasih.</p>
      
            <a href="${"/"}" class="${"mt-16 mx-1 text-zinc-100 font-bold px-6 py-2 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-zinc-900"}">Home
            </a></div></div></section></div>`;
});
export {
  Index_purchase as default
};
