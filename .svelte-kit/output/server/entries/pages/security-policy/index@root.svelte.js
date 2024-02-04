import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../_app/immutable/chunks/index-b361c760.js";
import { p as page } from "../../../_app/immutable/chunks/stores-290123b5.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-b286f9d3.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col bg-zinc-100 justify-center items-start w-full h-auto p-4 md:p-8"}"><div class="${"grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-zinc-900 md:py-8 relative"}"><div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col py-12 md:py-0 px-4 md:px-0 border-b border-black"}"><div class="${"w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-start justify-center"}"><div class="${"flex flex-col space-y-4 w-full mb-4 px-2 md:px-8"}"><h1 class="${"w-full whitespace-pre-line text-5xl font-black text-left text-white"}">Kebijakan Keamanan
                            </h1>
                            <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-justify text-white text-md tracking-loose md:max-w-4xl"}">Musclefirst berkomitmen untuk melindungi privasi dan informasi pribadi pelanggan kami. Situs web kami menerapkan langkah-langkah keamanan ekstensif untuk memastikan informasi pribadi dan detail kartu kredit Anda tetap aman.
                            </p>
                            <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-justify text-white text-md tracking-loose md:max-w-6xl"}">Saat Anda masuk ke situs atau membuat akun baru, bilah alamat beralih dari &quot;http&quot; (tidak terenkripsi) ke &quot;https&quot; (terenkripsi). Ini menunjukkan bahwa semua informasi yang dikirim dari komputer Anda ke server kami dienkripsi. Alasannya adalah untuk memastikan bahwa halaman web yang tidak menyertakan informasi sensitif dan tidak digunakan untuk mentransfer data pribadi dapat dimuat secepat mungkin.
                            </p>
                            <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-justify text-white text-md tracking-loose md:max-w-6xl"}">Kami menggunakan bentuk enkripsi tertinggi yang tersedia secara komersial (AES-256bit, diverifikasi oleh GeoTrust), yang biasa digunakan oleh lembaga perbankan. Anda dapat yakin bahwa informasi pribadi Anda disimpan dengan aman.
                            </p></div></div></div></div></div>
        
        <div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col py-12 md:py-8 px-4 md:px-16"}"><div class="${"w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-start justify-center"}"><div class="${"flex flex-col space-y-4 w-full"}"><p class="${"w-full leading-relaxed whitespace-pre-line text-left text-white text-md tracking-loose max-w-4xl"}">Jika Anda memiliki pertanyaan atau kekhawatiran lebih lanjut mengenai keamanan situs web kami, silakan hubungi kami di: info@musclefirst.co.id
                            </p></div></div></div></div></div></div></div>`;
});
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { segment } = $$props;
  let { currentPage = $page.url.pathname } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Kebijakan Keamanan",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Kebijakan Keamanan",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Index_root as default
};
