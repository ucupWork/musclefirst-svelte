import { c as create_ssr_component, b as subscribe, e as escape, a as add_attribute, d as each } from "./index-1e319aa9.js";
import { p as page } from "./stores-75875272.js";
import { d as data } from "./site-data-ef8bff3e.js";
import { s as serializeSchema } from "./BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { schemas } = $$props;
  let { canonical = "" } = $$props;
  let { title } = $$props;
  let { thumbnail = "" } = $$props;
  let { description = "" } = $$props;
  let { ogImage = "" } = $$props;
  let { noindex = false } = $$props;
  const { siteName, siteUrl, fbAppId, keywords, norobots, type, image, imageTwitter } = data;
  const defaultDesc = data.description;
  const url = $page.url.toString();
  if ($$props.schemas === void 0 && $$bindings.schemas && schemas !== void 0)
    $$bindings.schemas(schemas);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0)
    $$bindings.ogImage(ogImage);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(title)} | ${escape(siteName)}</title>`, ""}<link rel="${"canonical"}"${add_attribute(
    "href",
    canonical ? siteUrl + canonical : siteUrl + ($page.url.pathname ?? ""),
    0
  )} data-svelte="svelte-14zqr92"><meta name="${"description"}"${add_attribute("content", description ? description : defaultDesc, 0)} data-svelte="svelte-14zqr92"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-14zqr92">${norobots ? `<meta name="${"robots"}"${add_attribute("content", noindex ? "noindex" : "all", 0)} data-svelte="svelte-14zqr92">
    <meta name="${"googlebot"}" content="${"index,follow"}" data-svelte="svelte-14zqr92">` : ``}<meta property="${"fb:app_id"}"${add_attribute("content", fbAppId, 0)} data-svelte="svelte-14zqr92"><meta property="${"og:type"}"${add_attribute("content", type, 0)} data-svelte="svelte-14zqr92"><meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-14zqr92"><meta property="${"og:title"}"${add_attribute("content", title || siteName, 0)} data-svelte="svelte-14zqr92"><meta property="${"og:description"}"${add_attribute("content", description ? description : defaultDesc, 0)} data-svelte="svelte-14zqr92"><meta property="${"og:image"}"${add_attribute("content", ogImage ? ogImage : siteUrl + image, 0)} data-svelte="svelte-14zqr92"><meta property="${"twitter:card"}" content="${"summary"}" data-svelte="svelte-14zqr92"><meta property="${"twitter:url"}" content="${escape(siteUrl, true) + escape($page.url.pathname ?? "", true)}" data-svelte="svelte-14zqr92"><meta property="${"twitter:title"}"${add_attribute("content", title || siteName, 0)} data-svelte="svelte-14zqr92"><meta property="${"twitter:description"}"${add_attribute("content", description ? description : defaultDesc, 0)} data-svelte="svelte-14zqr92"><meta property="${"twitter:image"}"${add_attribute("content", ogImage ? ogImage : siteUrl + imageTwitter, 0)} data-svelte="svelte-14zqr92"><meta itemprop="${"name"}"${add_attribute("content", title || siteName, 0)} data-svelte="svelte-14zqr92"><meta itemprop="${"description"}"${add_attribute("content", description ? description : defaultDesc, 0)} data-svelte="svelte-14zqr92"><meta itemprop="${"image"}"${add_attribute("content", thumbnail || siteUrl + "/favicon.png", 0)} data-svelte="svelte-14zqr92"><meta name="${"author"}" content="${"Ikziriv"}" data-svelte="svelte-14zqr92"><meta name="${"msapplication-TileImage"}" content="${"/assets/site/logo-270x270.png"}" data-svelte="svelte-14zqr92">${thumbnail !== "" ? `<meta property="${"twitter:image"}"${add_attribute("content", thumbnail, 0)} data-svelte="svelte-14zqr92">` : ``}${`
    ${each(schemas, (schema) => {
    return `<!-- HTML_TAG_START -->${serializeSchema(schema)}<!-- HTML_TAG_END -->`;
  })}`}`, ""}`;
});
export {
  SEO as S
};
