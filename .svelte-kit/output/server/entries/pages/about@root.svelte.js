import { c as create_ssr_component, e as escape, a as add_attribute, d as each, v as validate_component } from "../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../_app/immutable/chunks/index-778a8503.js";
import "../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { c as certifiedList } from "../../_app/immutable/chunks/list-certified-e272f300.js";
import { C as CardCertified } from "../../_app/immutable/chunks/CardCertified-3b8efa0e.js";
import "../../_app/immutable/chunks/stores-75875272.js";
import "../../_app/immutable/chunks/site-data-ef8bff3e.js";
const AboutImage = "/_app/immutable/assets/about-main-b051ab7e.webp";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-auto bg-zinc-100 relative py-8 md:py-16"}"><div class="${"grid grid-cols-2 w-full h-auto justify-center px-8 md:px-0"}"><div class="${"col-span-full md:col-span-1 flex md:justify-start md:text-left mb-8 md:mb-0 text-center"}"><div class="${"w-full flex-grow text-left justify-start flex flex-col space-y-4 md:p-16 p-4"}"><h1 class="${"text-4xl font-black text-black"}">${escape("Tentang Kami")}</h1>
                <div class="${"w-full h-auto flex flex-col"}"><p class="${"text-sm my-2 text-justify text-zinc-900"}">( PT Unggulan Bugar Indonesia ) Muscle First adalah pelopor suplemen fitnes terbaik dari Indonesia dengan banyak varian rasa anti-bosan yang telah bersertifikat <b>Labdoor, GMP, HACCP, ISO, dan Halal BPOM</b>. Muscle First didirikan pada tahun 2017 dan telah mengalami peningkatan sebesar 17.000% sejak diluncurkan dalam 2 tahun, sehingga produk Muscle First memimpin penjualan suplemen terbaik di pasar Indonesia dan telah bekerjasama dengan lebih dari 100+ agen di Indonesia. 
                    </p></div>
                <div class="${"w-full h-auto flex flex-col"}"><p class="${"text-sm my-2 text-justify text-zinc-900"}">${escape("Muscle First membantu pria dan wanita dalam recovery dan memelihara massa otot, membangun tubuh ideal seperti menurunkan atau menambah berat badan, memenuhi nutrisi harian tubuh, meningkatkan stamina, dan meningkatkan fokus. Visi Muscle First adalah Menjadi brand suplemen fitness nomor satu di Indonesia dengan standar kebugaran Internasional.")}</p></div>
                <div class="${"my-4 py-4"}"><a rel="${"noreferrer"}" href="${"/products"}" target="${"_blank"}" class="${"font-bold px-8 py-4 rounded-full outline-none focus:outline-none mb-2 uppercase text-sm shadow hover:shadow-lg bg-black text-white"}" style="${"transition:all .15s ease"}">${escape("Lihat Produk")}</a></div></div></div>
        <div class="${"col-span-full md:col-span-1 overflow-hidden hidden md:flexflex flex-row justify-end items-center"}"><div class="${"w-1/2 flex items-center rounded-xl md:mr-16"}"><a${add_attribute("href", "/", 0)}><picture><source${add_attribute("srcset", AboutImage, 0)} type="${"image/webp"}">
                        <img${add_attribute("src", AboutImage, 0)} class="${"rounded-xl object-cover object-center"}" alt="${"AboutPicture"}"></picture></a></div></div></div></div>`;
});
const Partner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-auto bg-black relative border-b border-zinc-900"}"><div class="${"w-full flex flex-col px-8 md:px-16 py-8 md:py-24"}"><div class="${"grid grid-cols-6 gap-2 mx-auto dark:text-gray-400 w-full justify-center items-center"}">${each(certifiedList, (certified) => {
    return `<div class="${"col-span-2 md:col-span-1 w-full h-auto flex justify-center items-center rounded-md shadow-lg p-2 bg-white border"}">${validate_component(CardCertified, "CardCertified").$$render(
      $$result,
      {
        imgUrl: certified.imgUrl,
        altImg: certified.altImg
      },
      {},
      {}
    )}
            </div>`;
  })}</div></div></div>`;
});
const Reason = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-auto bg-zinc-900 relative"}"><div class="${"w-full h-auto p-6 py-12 mx-auto px-8 md:px-16"}"><div class="${"flex justify-start items-start w-full h-auto"}"><div class="${"w-auto h-auto flex flex-col justify-start items-start"}"><h3 class="${"text-2xl font-bold tracking-tight sm:text-3xl text-white"}">Alasan Muscle First Didirikan</h3>
                <div class="${"grid grid-cols-3 gap-4 mt-12"}"><div class="${"col-span-full md:col-span-1 flex border p-4"}"><div class="${"flex-shrink-0"}"><div class="${"flex items-center justify-center w-12 h-12 rounded-md"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"text-yellow-600 w-7 h-7"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></div></div>
                        <div class="${"ml-4"}"><h4 class="${"text-lg font-medium leading-6 text-white"}">Rasa Bosan</h4>
                            <p class="${"mt-1 text-gray-400"}">Bosan dengan rasa produk suplement yang itu-itu saja</p></div></div>
                    <div class="${"col-span-full md:col-span-1 flex border p-4"}"><div class="${"flex-shrink-0"}"><div class="${"flex items-center justify-center w-12 h-12 rounded-md"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"text-yellow-600 w-7 h-7"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></div></div>
                        <div class="${"ml-4"}"><h4 class="${"text-lg font-medium leading-6 text-white"}">Mindset</h4>
                            <p class="${"mt-1 text-gray-400"}">Ingin mengubah stigma masyrakat tentang olahraga dan konsumsi protein.</p></div></div>
                    <div class="${"col-span-full md:col-span-1 flex border p-4"}"><div class="${"flex-shrink-0"}"><div class="${"flex items-center justify-center w-12 h-12 rounded-md"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"text-yellow-600 w-7 h-7"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 13l4 4L19 7"}"></path></svg></div></div>
                        <div class="${"ml-4"}"><h4 class="${"text-lg font-medium leading-6 text-white"}">Harga Mahal</h4>
                            <p class="${"mt-1 text-gray-400"}">Harga suplemen import yang semakin mahal.</p></div></div></div></div></div></div></div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    cache: { maxage: 31536e3 },
    currentPage: url.pathname
  };
}
const About_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { currentPage } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "About",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "About",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}
${validate_component(Reason, "Reason").$$render($$result, {}, {}, {})}
${validate_component(Partner, "Partner").$$render($$result, {}, {}, {})}`;
});
export {
  About_root as default,
  load
};
