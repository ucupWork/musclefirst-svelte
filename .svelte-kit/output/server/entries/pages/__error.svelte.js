import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../_app/immutable/chunks/index-778a8503.js";
import "../../_app/immutable/chunks/common-65c7f3c2.js";
import { w as websiteSchema } from "../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
/* empty css                                        */import "../../_app/immutable/chunks/stores-290123b5.js";
import "../../_app/immutable/chunks/site-data-ef8bff3e.js";
function load({ error, status }) {
  return { props: { status, error: error.message } };
}
const prerender = false;
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: `${status}`,
      noindex: true,
      description: `Error: ${status}`,
      schemas: [websiteSchema],
      canonical: "/"
    },
    {},
    {}
  )}

${$$result.head += ``, ""}

<main class="${"flex justify-center items-center error-page w-full h-screen md:h-screen bg-[#151515]"}" id="${"error-page"}"><div class="${"flex w-full h-auto justify-center items-center"}"><div class="${"flex flex-col wrapper-choose w-auto h-auto"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} type="${"image/webp"}">
        <img width="${"647px"}" height="${"504px"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} class="${"w-12 h-auto"}" alt="${"AboutImage"}"></picture>
    <h1 class="${"title text-white text-6xl md:text-8xl font-black"}">${status === 404 ? `<span>Error: ${escape(status)}</span>` : `<span class="${"uppercase"}">Page not found</span>`}</h1>
      <p class="${"text-thin art text-rose-600 text-md font-medium"}">${error ? `Error Message` : `Requested page wasn&#39;t found`}</p>
      <p class="${"text-thin art text-white text-xs font-light"}">You will be redirected to main site in 10 seconds</p>
      <a href="${"/"}" class="${"w-auto h-auto py-2 px-4 border hover:bg-zinc-900 flex justify-between items-center mt-4"}"><span class="${"font-bold text-white"}">Back to Home</span>
        <div class="${"i-ph:caret-right text-white"}"></div></a></div></div></main>
  
  `;
});
export {
  _error as default,
  load,
  prerender
};
