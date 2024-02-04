import { c as create_ssr_component, e as escape, a as add_attribute } from "./index-b361c760.js";
import "./BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<footer class="${"w-full h-auto p-4 bg-[#0a0908] shadow sm:px-4 md:px-16 sm:py-8 md:py-8 " + escape(classes, true)}"><div class="${"w-full h-auto sm:flex md:hidden justify-start items-start py-8 px-6"}"><a${add_attribute("href", "/", 0)} class="${"flex items-center sm:mb-2 md:mb-0"}"><img width="${"647px"}" height="${"504px"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} class="${"mr-3 w-12 md:w-8 h-auto"}" alt="${"Muscle First Logo"}"></a></div>
    <div class="${"grid sm:grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto justify-center items-start px-5 py-6 sm:mb-8 md:mb-16"}"><div><h2 class="${"font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase"}">${escape("Perusahaan")}</h2>
            <ul class="${"text-gray-300"}"><li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/careers", 0)} class="${"text-sm hover:underline"}">${escape("Karir")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/survey", 0)} target="${"_blank"}" class="${"text-amber-500 text-sm hover:underline"}">${escape("Survey")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/blog", 0)} class="${"text-sm hover:underline"}">${escape("Blog")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/about", 0)} class="${"text-sm hover:underline"}">${escape("Tentang Kami")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/brand-center", 0)} class="${"text-sm hover:underline"}">${escape("Pusat Brand")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/agent", 0)} class="${"text-sm hover:underline"}"><span class="${"text-amber-500"}">${escape("Partnership")}</span></a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/faqs", 0)} class="${"text-sm hover:underline"}">${escape("FAQs")}</a></li></ul></div>
        <div><h2 class="${"font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase"}">${escape("Pusat Sosial")}</h2>
            <ul class="${"text-gray-300"}"><li class="${"mb-0"}"><a rel="${"noreferrer nofollow external noopener"}" href="${"https://shopee.co.id/musclefirstofficialshop"}" target="${"_blank"}" class="${"text-sm hover:underline"}">${escape("Shopee")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer nofollow external noopener"}" href="${"https://vt.tiktok.com/ZSd3dbvBJ/"}" target="${"_blank"}" class="${"text-sm hover:underline"}">${escape("Tiktok")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer nofollow external noopener"}" href="${"https://www.facebook.com/www.musclefirst.co.id"}" target="${"_blank"}" class="${"text-sm hover:underline"}">${escape("Facebook")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer nofollow external noopener"}" href="${"https://www.instagram.com/musclefirstofficial"}" target="${"_blank"}" class="${"text-sm hover:underline"}">${escape("Instagram")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/contact", 0)} class="${"text-sm hover:underline"}">${escape("Kontak Kami")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer nofollow external noopener"}" href="${"/affiliate"}" class="${"text-sm hover:underline"}">${escape("Affiliate Tiktok")}</a></li></ul></div>
        <div><h2 class="${"font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase"}">${escape("Hukum")}</h2>
            <ul class="${"text-gray-300"}"><li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/", 0)} class="${"text-sm hover:underline"}">${escape("Lisensi")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/disclaimer", 0)} class="${"text-sm hover:underline"}">${escape("Disclaimer Kesehatan")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/privacy-policy", 0)} class="${"text-sm hover:underline"}">${escape("Privasi & Kebijakan")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/security-policy", 0)} class="${"text-sm hover:underline"}">${escape("Kebijakan Keamanan")}</a></li>
                <li class="${"mb-0"}"><a rel="${"noreferrer"}"${add_attribute("href", "/terms-condition", 0)} class="${"text-sm hover:underline"}">${escape("Ketentuan & Kondisi")}</a></li></ul></div>
        
        <div class="${"sm:hidden md:block"}"><h2 class="${"font-ttnorms mb-4 tracking-widest text-sm font-semibold text-gray-100 uppercase"}">${escape("Berlangganan")}</h2>

            <div class="${"flex flex-col w-full h-auto max-w-xs"}"><span class="${"text-xs font-normal text-gray-100 mb-4"}">${escape("Daftarkan segera, untuk penawaran dan diskon eksklusif, klik link dibawah!")}</span>

                <a rel="${"noreferrer"}" href="${"http://eepurl.com/h8E589"}" target="${"_blank"}" class="${"flex justify-between items-center self-center w-full px-4 md:px-8 py-3 text-sm md:text-md bg-gradient-to-r from-amber-400 to-yellow-700 shadow shadow-yellow-200 font-black text-center text-black"}"><span class="${"uppercase text-yellow-900"}">${escape("Belanja Sekarang")}</span>
                    <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-4 w-4 text-black bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></a></div></div></div>
    <div class="${"sm:flex sm:flex-col md:flex-row sm:items-center sm:justify-between px-5"}"><a rel="${"noreferrer"}"${add_attribute("href", "/", 0)} class="${"hidden md:flex items-center sm:mb-2 md:mb-0"}"><img width="${"647px"}" height="${"504px"}" src="${"/assets/site/logo-white.png"}" class="${"mr-3 w-16 h-auto"}" alt="${"Muscle First Logo"}"></a>
        <ul class="${"flex flex-wrap items-center sm:mb-6 md:mb-0 text-sm text-gray-500 dark:text-gray-400"}"><li><a rel="${"noreferrer"}"${add_attribute("href", "/about", 0)} class="${"text-xs uppercase mr-4 hover:underline md:mr-6 "}"><small>${escape("Tentang Kami")}</small></a></li>
            <li><a rel="${"noreferrer"}"${add_attribute("href", "/privacy-policy", 0)} class="${"text-xs uppercase mr-4 hover:underline md:mr-6"}"><small>${escape("Privasi & Kebijakan")}</small></a></li>
            <li><a rel="${"noreferrer"}"${add_attribute("href", "/", 0)} class="${"text-xs uppercase mr-4 hover:underline md:mr-6 "}"><small>${escape("Lisensi")}</small></a></li>
            <li><a rel="${"noreferrer"}"${add_attribute("href", "/contact", 0)} class="${"text-xs uppercase hover:underline"}"><small>${escape("Kontak Kami")}</small></a></li></ul></div>
    <hr class="${"my-3 border-black md:my-4"}">
    <div class="${"flex flex-col md:flex-row justify-between items-center px-8 md:px-4"}"><div class="${"mb-6 md:mb-0 mt-4 space-x-6 sm:justify-center sm:mt-0 text-white text-sm"}"><small>\xA9 2024
                <a rel="${"noreferrer"}" href="${"."}" class="${"text-sm hover:underline text-yellow-600 font-bold"}"><small class="${"uppercase"}">Musclefirst\u2122</small></a>
                . All Rights Reserved.
            </small></div>
        <span class="${"block text-sm uppercase text-gray-500 max-w-xs md:max-w-2xl sm:text-center dark:text-gray-400 px-16 md:px-0"}"><small>PT Unggulan Bugar Indonesia</small></span></div></footer>`;
});
export {
  Footer as F
};
