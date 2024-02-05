import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-1e319aa9.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { id = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<iframe width="${"356"}" height="${"633"}"${add_attribute("title", title, 0)} src="${"https://www.youtube.com/embed/" + escape(id, true)}" frameborder="${"0"}" class="${"rounded-xl shadow"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen></iframe>`;
});
export {
  Main as M
};
