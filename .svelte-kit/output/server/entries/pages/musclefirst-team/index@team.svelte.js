import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, e as escape } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { h as openModalPanduan } from "../../../_app/immutable/chunks/index-29c1f748.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                                                            */import { M as ModalPanduan } from "../../../_app/immutable/chunks/ModalPanduan-dda8842d.js";
import { M as MusclefirstTeam } from "../../../_app/immutable/chunks/musclefirst-team-d080d861.js";
import "../../../_app/immutable/chunks/index-e87efd75.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/QrCode-aa55fa70.js";
import "../../../_app/immutable/chunks/Description-95a56521.js";
const FormTeam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefilledLink;
  let name = "";
  let email = "";
  let jenkel;
  let umur = "";
  let telephone = "";
  let konsumsi;
  let alasan = "";
  let instagram = "";
  let tiktok = "";
  prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScWpHcJ1Fpy05AvoezwY53Vm9fdrguGRgt8G5TOeVxM5OrO6g/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.690870189=${jenkel}&entry.1166974658=28&entry.136618820=${telephone}&entry.99092176=${konsumsi}&entry.1735776044=${alasan}&entry.482769991=${instagram}&entry.1726931507=${tiktok}`;
  return `<div class="${"w-full md:w-full px-4 md:px-8 py-8 lg:max-w-2xl overflow-hidden bg-zinc-50 rounded-lg shadow-2xl dark:bg-gray-900 shadow-zinc-900/50 dark:shadow-black/50"}"><h1 class="${"text-xs uppercase font-bold text-gray-700"}">Lengkapi Data Dibawah Ini</h1>

    <div class="${"md:mt-4"}"><div class="${"grid grid-cols-2 gap-2 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"nama-lengkap"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Nama Lengkap</label>
                <input type="${"text"}" name="${"name"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", name, 0)}></div>

            <div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"email"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Email</label>
                <input type="${"text"}" name="${"email"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", email, 0)}></div></div>

        <div class="${"grid grid-cols-2 gap-2 w-full h-auto mt-3"}"><div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"jenis-kelamin"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Jenis Kelamin</label>
                <div class="${"flex flex-col w-auto h-auto"}"><div class="${"flex items-center"}"><input${add_attribute("value", "Laki - Laki", 0)} id="${"laki-laki"}" name="${"jenkel"}" type="${"radio"}" class="${"h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"}"${""}>
                        <label for="${"laki-laki"}" class="${"ml-3 block text-sm font-medium text-gray-700"}">Laki-Laki</label></div>
                    
                    <div class="${"flex items-center"}"><input${add_attribute("value", "Perempuan", 0)} id="${"perempuan"}" name="${"jenkel"}" type="${"radio"}" class="${"h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"}"${""}>
                        <label for="${"perempuan"}" class="${"ml-3 block text-sm font-medium text-gray-700"}">Perempuan</label></div></div></div>

            <div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"umur"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Umur</label>
                <input type="${"number"}" name="${"umur"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", umur, 0)}></div></div>

        <div class="${"flex-1 mt-3"}"><label for="${"telephone"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Nomor Handphone</label>
            <input type="${"text"}" name="${"telephone"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", telephone, 0)}></div>

        

        <div class="${"grid grid-cols-2 gap-2 w-full h-auto mt-3"}"><div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"instagram"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Instagram Link</label>
                <input type="${"text"}" name="${"instagram"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", instagram, 0)}></div>

            <div class="${"col-span-full md:col-span-1 flex-1"}"><label for="${"tiktok"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Tiktok Link</label>
                <input type="${"text"}" name="${"tiktok"}" class="${"block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40"}"${add_attribute("value", tiktok, 0)}></div></div>
        
        <div class="${"flex-1 mt-3"}"><label for="${"jenis-kelamin"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Sudah Pernah Konsumsi Musclefirst</label>
            <div class="${"flex flex-row justify-between w-full h-auto"}"><div class="${"flex items-center bg-white shadow rounded p-2 w-full"}"><input${add_attribute("value", "Sudah", 0)} id="${"sudah"}" name="${"konsumsi"}" type="${"radio"}" class="${"h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"}"${""}>
                    <label for="${"sudah"}" class="${"ml-3 block text-sm font-medium text-gray-700"}">Sudah</label></div>
                
                <div class="${"flex items-center bg-white shadow rounded p-2 w-full"}"><input${add_attribute("value", "Belum", 0)} id="${"belum"}" name="${"konsumsi"}" type="${"radio"}" class="${"h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500"}"${""}>
                    <label for="${"belum"}" class="${"ml-3 block text-sm font-medium text-gray-700"}">Belum</label></div></div></div>

        <div class="${"flex-1 mt-3"}"><label for="${"alasan"}" class="${"block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"}">Alasan Ingin Menjadi Musclefirst Team</label>
            <textarea id="${"alasan"}" name="${"alasan"}" rows="${"3"}" class="${"mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"}">${""}</textarea></div>

        <div class="${"flex justify-center items-center w-full h-auto px-6 py-3 mt-3"}"><a${add_attribute("href", prefilledLink, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50"}"><span class="${"font-bold text-white"}">Kirim</span>
                <div class="${"i-bi:send-fill h-4 w-4 text-white"}"></div></a></div></div></div>`;
});
const Index_team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
            <div class="${"w-full h-auto flex justify-center items-center py-8 md:py-0 px-4 md:px-4"}">${validate_component(FormTeam, "FormTeam").$$render($$result, {}, {}, {})}</div>

            <div class="${"flex justify-center items-center w-full h-auto max-w-2xl px-4 md:px-16 py-3 mt-3"}"><a${add_attribute("href", "/", 0)} rel="${"noreferrer"}" class="${"flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-z-500 rounded-md bg-red-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50"}"><span class="${"font-bold text-white"}">Batal</span>
                    <div class="${"i-bi:x h-4 w-4 text-white"}"></div></a></div></div></div></div>

${validate_component(ModalPanduan, "ModalPanduan").$$render($$result, { title: "Panduan" }, {}, {})}`;
});
export {
  Index_team as default
};
