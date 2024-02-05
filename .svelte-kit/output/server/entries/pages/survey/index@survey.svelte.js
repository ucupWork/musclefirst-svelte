import { c as create_ssr_component, a as add_attribute } from "../../../_app/immutable/chunks/index-1e319aa9.js";
/* empty css                                                          */const Index_survey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"flex flex-col justify-center items-center w-full h-screen bg-[#151515] relative"}"><div class="${"flex w-auto h-auto mb-4 md:mb-16"}"><span class="${"loading flex justify-center items-center"}"><picture><source${add_attribute(
    "srcset",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} type="${"image/webp"}">
                <img width="${"647px"}" height="${"504px"}"${add_attribute(
    "src",
    `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp`,
    0
  )} class="${"w-20 h-auto"}" alt="${"Musclefirst Logo"}"></picture></span></div>
    <div class="${"flex flex-row space-x-4 w-auto h-auto"}"><a target="${"_blank"}" href="${"https://us17.list-manage.com/survey?u=11903fbf931b8f42bb65b0613&id=289d4d1180&e=*|UNIQID|*"}" class="${"flex flex-row w-auto h-auto bg-black border border-yellow-200 shadow-md shadow-zinc-900 px-8 py-4"}"><span class="${"font-bold text-white"}">Website Survey</span></a>
        <a target="${"_blank"}" href="${"https://us17.list-manage.com/survey?u=11903fbf931b8f42bb65b0613&id=255b9501cf&e=*|UNIQID|*"}" class="${"flex flex-row w-auto h-auto bg-black border border-yellow-200 shadow-md shadow-zinc-900 px-8 py-4"}"><span class="${"font-bold text-white"}">Product Survey</span></a></div></div>`;
});
export {
  Index_survey as default
};
