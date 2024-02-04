import { c as create_ssr_component, e as escape, v as validate_component } from "./index-b361c760.js";
import { I as Index } from "./IndexCount-3e5ef3dc.js";
import "./BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
const SectionCountdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { dateText } = $$props;
  let { textColor } = $$props;
  let { bgColor } = $$props;
  let { bgColorSection } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.dateText === void 0 && $$bindings.dateText && dateText !== void 0)
    $$bindings.dateText(dateText);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgColorSection === void 0 && $$bindings.bgColorSection && bgColorSection !== void 0)
    $$bindings.bgColorSection(bgColorSection);
  return `<section class="${"flex justify-center items-center w-full h-auto bg-" + escape(bgColorSection, true) + " relative py-8 md:py-20"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0 px-8 md:px-16"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center"}"><div class="${"w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-0"}"><div class="${"flex flex-col text-center md:text-left w-auto h-auto"}"><span class="${"text-black font-medium text-xl md:text-2xl"}">${escape(subtitle)}</span>
                    <h2 class="${"text-2xl md:text-4xl font-black text-zinc-800 leading-none text-center md:text-left uppercase"}"><span class="${"block"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></span></h2>
                    <span class="${"text-amber-500 font-black text-2xl uppercase"}">${escape(dateText)}</span></div></div></div>
        
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-end items-center md:pr-16"}">${validate_component(Index, "CountTime").$$render(
    $$result,
    {
      flexType: "flex-col md:flex-row",
      bgColor,
      textColor,
      width: "16",
      height: "16",
      textSize: "2xl",
      borderColor: "yellow",
      dateFormatText: "2022-12-05 00:00:00",
      endTimeText: "The time has come!"
    },
    {},
    {}
  )}</div></div></section>`;
});
export {
  SectionCountdown as S
};
