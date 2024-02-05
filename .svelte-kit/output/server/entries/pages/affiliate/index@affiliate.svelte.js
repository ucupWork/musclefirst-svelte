import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { A as Affiliate01 } from "../../../_app/immutable/chunks/img-01-d7f5544a.js";
import { A as Affiliate02 } from "../../../_app/immutable/chunks/img-02-6e690aa5.js";
import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return { segment, currentPage: url.pathname };
}
const Index_affiliate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Cara Menjadi Affiliate Tiktok Musclefirst",
      description: "Keuntungan menjadi affiliator MUSCLEFIRST di TikTok , potensi penghasilan tambahan sebanyak 10% dan berkesempatan memenangkan hadiah JUTAAN RUPIAH serta mendapatkan manfaat lainnya dari program afiliasi MUSCLEFIRST",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex justify-center items-center w-full h-screen bg-zinc-900"}"><div class="${"flex flex-col w-full h-auto py-4 md:py-8 px-4 md:px-16"}"><div class="${"flex flex-col w-full md:w-full h-auto"}"><div class="${"flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0"}"><h1 class="${"font-blackttnorms font-black text-4xl md:text-7xl text-white uppercase mb-4 md:mb-0"}">Affiliate
                </h1>
                <span class="${"flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0"}"><h2 class="${"text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1"}">Musclefirst
                    </h2></span></div>
            <div class="${"hidden md:flex w-full md:w-auto h-auto bg-transparent px-2 md:px-2 py-2 mb-4 max-w-md"}"><p class="${"font-ttnorms font-thin text-sm md:text-xl text-center md:text-left text-gray-50 dark:text-gray-300"}">Promosikan brand suplemen <span class="${"font-bold"}">Musclefirst</span> dan raih penghasilan tambahan sebagai afiliasi!
                </p></div></div>
        <div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-full h-auto"}"><a href="${"/affiliate/tiktok"}" class="${"flex flex-row justify-between items-center w-full h-auto p-8 rounded-xl border border-yellow-900"}"><div class="${"flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0"}"><span class="${"flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0"}"><h2 class="${"text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1"}">Musclefirst
                            </h2></span>
                        <h1 class="${"font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0"}">Affiliate
                        </h1>
                        <h1 class="${"font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0"}">Tiktok
                        </h1></div>
                    <img${add_attribute("src", Affiliate01, 0)} class="${"w-96 h-auto mt-0"}" alt="${"Affiliate Tiktok"}"></a></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto"}"><a href="${"/affiliate/shopee"}" class="${"flex flex-row justify-between items-center w-full h-auto p-8 rounded-xl border border-yellow-900"}"><div class="${"flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0"}"><span class="${"flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0"}"><h2 class="${"text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1"}">Musclefirst
                            </h2></span>
                        <h1 class="${"font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0"}">Affiliate
                        </h1>
                        <h1 class="${"font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0"}">Shopee
                        </h1></div>
                    <img${add_attribute("src", Affiliate02, 0)} class="${"w-96 h-auto mt-0"}" alt="${"Affiliate Shopee"}"></a></div></div></div></div>`;
});
export {
  Index_affiliate as default,
  load
};
