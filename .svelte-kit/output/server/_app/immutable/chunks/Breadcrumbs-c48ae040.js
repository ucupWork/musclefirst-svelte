import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-1e319aa9.js";
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { title } = $$props;
  let { linkUrl } = $$props;
  let { slug } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.linkUrl === void 0 && $$bindings.linkUrl && linkUrl !== void 0)
    $$bindings.linkUrl(linkUrl);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  return `<div class="${"bg-zinc-50 dark:bg-zinc-900 flex items-center py-2 overflow-y-auto whitespace-nowrap px-12 md:px-16 border-b"}"><a${add_attribute("aria-label", segment, 0)} href="${"/"}" class="${"flex items-center space-x-2 text-gray-600 dark:text-gray-200"}"><div class="${"i-ph:house text-black dark:text-white mr-4"}"></div>
        <span class="${"text-sm font-medium text-black dark:text-white"}">Beranda</span></a>

    <span class="${"mx-5 text-zinc-400"}">/
    </span>

    <a href="${"/"}" class="${"hover:underline"}"><span class="${"text-sm font-medium text-black dark:text-white"}">${escape(title)}</span></a>
    
    ${slug ? `<span class="${"mx-5 text-zinc-400"}">/
    </span>

    <span class="${"hover:underline"}"><span class="${"text-sm font-medium capitalize text-amber-500"}">${escape(slug)}</span></span>` : ``}</div>`;
});
export {
  Breadcrumbs as B
};
