import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                                                            *//* empty css                                                          */import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const css = {
  code: ".review-card.svelte-ho8uix{box-shadow:0 8px 10px #3f3a21;transition:all .2s ease-in-out}.review-card.svelte-ho8uix:hover{box-shadow:0 16px 16px #534b1b;transform:translateY(-10px)}",
  map: null
};
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { headerSection } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.headerSection === void 0 && $$bindings.headerSection && headerSection !== void 0)
    $$bindings.headerSection(headerSection);
  $$result.css.add(css);
  return `<div${add_attribute("id", id, 0)} class="${"flex flex-col justify-center items-center w-full h-auto bg-transparent border border-zinc-300 dark:bg-zinc-900 relative m:px-4 md:px-8 py-12 md:py-16"}">${headerSection ? `<div class="${"w-full flex flex-col pt-8 md:pt-0"}"><div class="${"w-full mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-center justify-center md:justify-between"}"><div class="${"flex flex-col space-y-4 w-full mb-4"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-black dark:text-white"}">${escape("Testimoni")}</h1>
                    <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-800 dark:text-zinc-100 text-md tracking-loose max-w-md"}">${escape("Mereka yang telah menjaga kesehatan bersama Musclefirst, siapa berikutnya?")}</p></div>
                <div class="${"w-full flex justify-center md:justify-end items-center pb-6"}"><div class="${"w-auto flex flex-col md:flex-row"}"><a${add_attribute("href", "/testimonials", 0)} class="${"mx-1 text-green-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-zinc-900"}">${escape("Lihat Semua")}</a></div></div></div></div></div>` : ``}
    <div class="${"grid grid-cols-4 gap-2 justify-center items-center w-full px-4 md:px-8 pb-0 md:pb-8"}"><div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-1.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-1.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 1"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-2.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-2.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 2"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-3.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-3.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 3"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-4.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-4.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 4"}"></picture></div></div>
        
        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-5.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-5.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 5"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-6.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-6.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 6"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-7.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-7.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 7"}"></picture></div></div>

        <div class="${"col-span-2 md:col-span-1 review-card w-full flex flex-col items-center p-2 overflow-hidden bg-[#151515] shadow-lg svelte-ho8uix"}"><div class="${"bg-transparent flex justify-center items-center dark:highlight-white/5"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-8.webp`,
    0
  )} type="${"image/webp"}">
                        <img width="${"500"}" height="${"500"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/review-grid/optimize/ba-rvg-8.webp`,
    0
  )} class="${"w-48 md:w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"}" alt="${"Review BA 8"}"></picture></div></div></div>
</div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 3600, private: false }
  };
}
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { segment } = $$props;
  let { currentPage } = $$props;
  let { headerSection = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.headerSection === void 0 && $$bindings.headerSection && headerSection !== void 0)
    $$bindings.headerSection(headerSection);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Kumpulan Testimoni dari Muscle First",
      description: "Testimoni pelanggan muscle first sebagai brand suplement fitnes lokal terbaik di Indonesia.",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Testimonial",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

<div${add_attribute("id", id, 0)} class="${"grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-zinc-100 relative"}"><div class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col px-4 md:px-8 pt-8 md:pt-4"}"><div class="${"w-full container mx-auto md:text-left text-center px-4 md:px-8 py-4 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-start justify-center"}"><div class="${"flex flex-col space-y-4 w-full mb-4"}"><h1 class="${"w-full whitespace-pre-line text-5xl font-black text-left text-black"}">${escape("Semua Testimonial")}</h1>
                    <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-left text-zinc-900 text-md tracking-loose md:max-w-md"}">${escape("Mereka yang telah menjaga kesehatan bersama Musclefirst, siapa berikutnya?")}</p></div></div></div></div></div>
<div class="${"col-span-full flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 pt-0 pb-4"}">${validate_component(Review, "Review").$$render($$result, { headerSection, id: "review" }, {}, {})}

    <div class="${"flex justify-between items-center w-full h-auto py-8 px-8"}"><h2 class="${"font-bold text-4xl text-white"}"><span class="${"block text-orange-500"}">Shopee</span> 
            <span class="${"block font-thin text-black"}">Marketplace</span></h2>
        <a href="${"https://bit.ly/3ykdY5Q"}" target="${"_blank"}" class="${"cursor-pointer w-16 md:w-16 h-16 md:h-16 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg border shadow-orange-500/50 flex justify-center items-center"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-6 md:w-6 h-6 md:h-6 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></a></div></div>
<div class="${"col-span-full w-full h-auto"}"><div class="${"grid grid-cols-4 gap-4 scrollbar-track-bg-transparent px-8 lg:px-8 pt-0 pb-16"}"><div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-1.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-1.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-2.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-2.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-3.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-3.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-4.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-4.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-5.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-5.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-6.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-6.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-7.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-7.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-8.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-8.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-9.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-9.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-10.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-10.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div>
        <div class="${"col-span-2 md:col-span-1 px-8"}"><div class="${"snap-center border rounded-lg p-2"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-11.png`,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/testimonial/shopee/shopee-testi-11.png`,
    0
  )} class="${"shadow-lg mx-3 w-auto h-auto max-w-xs overflow-hidden rounded-lg bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"}" alt="${"Muscle First Testimonial"}"></picture></div></div></div></div></div>`;
});
export {
  Index_root as default,
  load
};
