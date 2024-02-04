import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, a as add_attribute } from "../../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import { h as openModalPanduan } from "../../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                                                               */import { M as ModalPanduan } from "../../../../_app/immutable/chunks/ModalPanduan-dda8842d.js";
import { M as MusclefirstTeam } from "../../../../_app/immutable/chunks/musclefirst-team-d080d861.js";
import "../../../../_app/immutable/chunks/index-e87efd75.js";
import "../../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/QrCode-aa55fa70.js";
import "../../../../_app/immutable/chunks/Description-95a56521.js";
const Index_claims = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_openModalPanduan;
  $$unsubscribe_openModalPanduan = subscribe(openModalPanduan, (value) => value);
  $$unsubscribe_openModalPanduan();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Musclefirst Team",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex justify-center items-center w-full h-screen overflow-y-auto md:h-auto py-32 md:py-0 bg-[#151515] relative"}"><div class="${"hidden md:flex w-full h-auto z-0 overflow-hidden"}"><css-doodle click-to-update>${escape(`
                :doodle {
                    @grid: 18 / 100vmax;
                    background: #00000;
                }
                @size: 1px calc(141.4% + 1px);
                transform: rotate(@p(\xB145deg));
                background: #AEACFB;
                margin: auto;
            `)}</css-doodle></div>
    <div class="${"absolute inset-0 w-full h-auto md:h-full z-10"}"><div class="${"flex flex-col w-full h-auto md:h-full justify-center items-center"}"><div class="${"w-full h-auto flex justify-center items-center text-center md:text-left"}"><div class="${"flex flex-col w-auto h-auto relative mt-12 md:mt-64 mb-4 md:mb-8"}"><div class="${"absolute inset-x-0 md:bottom-10 hidden md:flex w-auto h-auto z-0"}"><img class="${"w-full h-auto"}"${add_attribute("src", MusclefirstTeam, 0)} alt="${"Musclefirst Team"}"></div>
                    <div class="${"flex flex-col w-auto h-auto bg-black p-4 z-10"}"><h1 class="${"text-3xl md:text-4xl font-semibold text-white capitalize"}">Gabung Bersama
                        </h1>
                        <h1 class="${"text-3xl md:text-6xl font-semibold text-white capitalize"}"><span class="${"uppercase font-black"}">Musclefirst Team</span></h1></div>
                    <div class="${"flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto md:space-x-4 mt-4 md:mt-6"}"><button class="${"flex justify-between items-center bg-white shadow rounded p-2 w-full"}"><span class="${"text-xs uppercase font-bold"}">Panduan Bulking</span>
                            <div class="${"i-bi:download h-3 w-3 text-zinc-900"}"></div></button>
                        <button class="${"flex justify-between items-center bg-white shadow rounded p-2 w-full mt-2 md:mt-0"}"><span class="${"text-xs uppercase font-bold"}">Panduan Cutting</span>
                            <div class="${"i-bi:download h-3 w-3 text-zinc-900"}"></div></button></div></div></div>
            <div class="${"w-full h-auto flex justify-center items-center py-8 md:py-0 px-4 md:px-4"}"></div>

            <div class="${"flex justify-center items-center w-full h-auto max-w-2xl px-4 md:px-16 py-3 mt-3"}"><a${add_attribute("href", "/", 0)} rel="${"noreferrer"}" class="${"flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-z-500 rounded-md bg-red-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50"}"><span class="${"font-bold text-white"}">Batal</span>
                    <div class="${"i-bi:x h-4 w-4 text-white"}"></div></a></div></div></div></div>

${validate_component(ModalPanduan, "ModalPanduan").$$render($$result, { title: "Panduan" }, {}, {})}`;
});
export {
  Index_claims as default
};
