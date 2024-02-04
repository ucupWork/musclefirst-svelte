import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                                                               */import { M as ModalPanduan } from "../../../../_app/immutable/chunks/ModalPanduan-dda8842d.js";
import "../../../../_app/immutable/chunks/index-e87efd75.js";
import "../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../../_app/immutable/chunks/QrCode-aa55fa70.js";
import "../../../../_app/immutable/chunks/Description-95a56521.js";
let name = "";
let email = "";
const FormVoucher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilledLink;
  let telephone = "";
  prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfsjM_JcwJiNnQuHt4y7lGvsHIYFzEs7KnsVR21xhcH3Y0-PA/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.1166974658=${telephone}`;
  return `<div class="${"w-full md:w-full px-4 md:px-8 py-8 lg:max-w-2xl overflow-hidden bg-zinc-50 rounded-lg shadow-2xl dark:bg-gray-900 shadow-zinc-900/50 dark:shadow-black/50"}"><h1 class="${"text-xs uppercase font-bold text-gray-700"}">Lengkapi Data Dibawah Ini</h1>

    <form method="${"POST"}" action="${"?/create"}" class="${"md:mt-4"}"><div class="${"grid grid-cols-2 gap-2 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"nama-lengkap"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Nama Lengkap</label>
                <input type="${"text"}" name="${"name"}"${add_attribute("value", name, 0)} class="${escape("input-bordered", true) + " block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}">
                ${``}</div>

            <div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"email"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Email</label>
                <input type="${"text"}" name="${"email"}"${add_attribute("value", email, 0)} class="${escape("input-bordered", true) + " block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"></div></div>

        <div class="${"flex-1 mt-3"}"><label for="${"telephone"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Telephone</label>
            <input type="${"text"}" name="${"telephone"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", telephone, 0)}></div>

        <div class="${"flex justify-center items-center w-full h-auto px-6 py-3 mt-3"}"><a${add_attribute("href", prefilledLink, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50"}"><span class="${"font-bold text-white"}">Kirim</span>
                <div class="${"i-bi:send-fill h-4 w-4 text-white"}"></div></a></div></form></div>`;
});
const Index_claims = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Claim Voucher",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex justify-center items-center w-full h-screen overflow-hidden md:h-auto py-32 md:py-0 bg-[#151515] relative"}"><div class="${"hidden w-full h-auto z-0 overflow-hidden"}"><css-doodle click-to-update>${escape(`
                :doodle {
                    @grid: 18 / 100vmax;
                    background: #00000;
                }
                @size: 1px calc(141.4% + 1px);
                transform: rotate(@p(\xB145deg));
                background: #AEACFB;
                margin: auto;
            `)}</css-doodle></div>
    <div class="${"w-full h-screen z-0"}"><div class="${"flex flex-col w-full h-screen justify-center items-center"}"><div class="${"w-full h-auto flex justify-center items-center text-center md:text-left"}"><div class="${"flex flex-col w-auto h-auto relative mt-4 md:mt-8 mb-4 md:mb-8"}"><div class="${"flex flex-col w-auto h-auto bg-black p-4 z-10"}"><h1 class="${"text-3xl md:text-4xl font-semibold text-white capitalize"}">Claim Voucher
                        </h1>
                        <h1 class="${"text-3xl md:text-6xl font-semibold text-white capitalize"}"><span class="${"uppercase font-black font-bankghotic"}">Musclefirst</span></h1></div></div></div>
            <div class="${"w-full h-auto flex justify-center items-center py-8 md:py-0 px-4 md:px-4"}">${validate_component(FormVoucher, "FormVoucher").$$render($$result, {}, {}, {})}</div>

            <div class="${"flex justify-center items-center w-full h-auto max-w-2xl px-4 md:px-16 py-3 mt-3"}"><a${add_attribute("href", "/", 0)} rel="${"noreferrer"}" class="${"flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-z-500 rounded-md bg-red-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50"}"><span class="${"font-bold text-white"}">Batal</span>
                    <div class="${"i-bi:x h-4 w-4 text-white"}"></div></a></div></div></div></div>

${validate_component(ModalPanduan, "ModalPanduan").$$render($$result, { title: "Panduan" }, {}, {})}`;
});
export {
  Index_claims as default
};
