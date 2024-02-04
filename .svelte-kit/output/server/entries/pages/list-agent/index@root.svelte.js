import { c as create_ssr_component, v as validate_component, e as escape } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-d5c83651.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../_app/immutable/chunks/CardNoResult-a13636d9.js";
import "../../../_app/immutable/chunks/DisclosureButton-e519f4d4.js";
import "../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const ogImageAgent = "/_app/immutable/assets/og-img-agent-6005c61c.webp";
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Beli Muscle First Terdekat di Kota Kalian",
      description: "Ongkir lebih murah dengan membeli di agen Muscle First terdekat di kota kalian.",
      ogImage: ogImageAgent,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex flex-col bg-zinc-100 justify-center items-start w-full h-auto py-4 md:py-8 px-2 md:px-8"}"><div class="${"grid grid-cols-12 md:gap-4 justify-center items-center w-full h-auto bg-transparent md:py-8 relative"}"><div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col py-12 md:py-0 px-0 md:px-8"}"><div class="${"w-full container mx-auto md:text-left text-center px-4 md:px-8 py-8 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-center md:items-start justify-center"}"><div class="${"flex flex-col space-x-0 w-full mb-4"}"><h1 class="${"w-full whitespace-pre-line text-4xl md:text-5xl font-black text-center md:text-left text-zinc-900"}">${escape("Dapatkan")} <span class="${"uppercase text-amber-500"}">${escape("Musclefirst")}</span> ${escape("Produk")}</h1>
                            <span class="${"text-xl md:text-5xl w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md tracking-loose"}">${escape("Langsung di kota terdekat anda.")}</span>
                            <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 text-md md:text-lg tracking-loose px-16 md:px-0 "}">${escape("Biaya Murah, Gratis Ongkir, Bisa ketemu agen di kota terdekat.")} <span class="${"font-bold"}">( COD )</span>.
                            </p>
                            <div class="${"px-0 md:px-4"}"><ol class="${"md:list-decimal text-zinc-900"}"><li class="${"text-md"}"><span class="${"text-zinc-900"}">${escape("Pilih bagian kota anda di bawah ini.")}</span></li>
                                    <li class="${"text-md"}"><span class="${"text-zinc-900"}">${escape("Temukan Agen dengan alamat terdekat.")}</span></li>
                                    <li class="${"text-md"}"><span class="${"text-zinc-900"}">${escape("Klik BELI SEKARANG")}</span></li></ol></div></div></div></div></div></div>
        <div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col justify-center items-center px-4 lg:px-8"}">${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "default",
      top: false,
      bottom: true,
      id: "list-agent",
      classes: "bg-transparent"
    },
    {},
    {}
  )}</div></div></div></div>`;
});
export {
  Index_root as default
};
