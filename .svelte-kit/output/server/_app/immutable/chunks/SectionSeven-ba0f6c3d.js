import { c as create_ssr_component, e as escape, a as add_attribute, d as each } from "./index-b361c760.js";
const SectionSeven = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { idealList } = $$props;
  let { videoSection } = $$props;
  let { subtitle } = $$props;
  let { title } = $$props;
  let { descriptionOne } = $$props;
  let { descriptionTwo } = $$props;
  let { linkVideo } = $$props;
  let { classTxtBtnOrder } = $$props;
  let { orderBtnText } = $$props;
  if ($$props.idealList === void 0 && $$bindings.idealList && idealList !== void 0)
    $$bindings.idealList(idealList);
  if ($$props.videoSection === void 0 && $$bindings.videoSection && videoSection !== void 0)
    $$bindings.videoSection(videoSection);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.descriptionOne === void 0 && $$bindings.descriptionOne && descriptionOne !== void 0)
    $$bindings.descriptionOne(descriptionOne);
  if ($$props.descriptionTwo === void 0 && $$bindings.descriptionTwo && descriptionTwo !== void 0)
    $$bindings.descriptionTwo(descriptionTwo);
  if ($$props.linkVideo === void 0 && $$bindings.linkVideo && linkVideo !== void 0)
    $$bindings.linkVideo(linkVideo);
  if ($$props.classTxtBtnOrder === void 0 && $$bindings.classTxtBtnOrder && classTxtBtnOrder !== void 0)
    $$bindings.classTxtBtnOrder(classTxtBtnOrder);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  return `<section class="${"flex justify-center items-center w-full h-auto md:h-screen py-16 md:py-16 bg-zinc-300/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-start z-0"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto pb-4 md:pb-8 px-8 md:px-24"}"><div class="${"flex flex-col w-auto h-auto text-center md:text-start"}"><span class="${"text-amber-600 font-bold text-2xl md:text-3xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-4xl md:text-5xl font-black text-gray-900 leading-none text-center md:text-start max-w-sm md:max-w-md"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div>
            <div class="${"w-full md:w-auto h-auto mt-8 md:mt-0"}"><button class="${"cursor-pointer flex justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-zinc-900 to-gray-900 shadow-lg shadow-zinc-400/50 mt-4 md:mt-8 rounded-full"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto"}"><span class="${"uppercase font-black " + escape(classTxtBtnOrder, true) + " text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${escape(classTxtBtnOrder, true) + " w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></button></div></div>
        ${videoSection ? `<div class="${"grid grid-cols-4 gap-4 w-full h-auto px-8 md:px-24"}"><div class="${"col-span-full md:col-span-2 w-full h-auto rounded-xl border shadow bg-zinc-100 p-8"}"><div class="${"mb-4 md:mb-8 flex w-full h-96 justify-center items-center bg-white rounded-xl shadow-xl p-2"}"><iframe frameborder="${"0"}" allow="${"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" title="${"Buat kamu yang pengen pertahankan bentuk otot, INI SOLUSINYA"}" class="${"w-full h-full"}"${add_attribute("src", linkVideo, 0)}></iframe></div></div>
            <div class="${"col-span-full md:col-span-2 flex flex-col justify-center items-center space-y-4 w-full h-auto rounded-xl border bg-transparent p-8"}"><div class="${"w-full h-auto ml-2 md:ml-4"}"><p class="${"leading-relaxed text-gray-600 text-left text-lg"}"><!-- HTML_TAG_START -->${descriptionOne}<!-- HTML_TAG_END --></p></div>
                <div class="${"w-full h-auto ml-2 md:ml-4"}"><p class="${"leading-relaxed text-gray-600 text-left text-lg"}"><!-- HTML_TAG_START -->${descriptionTwo}<!-- HTML_TAG_END --></p></div></div></div>` : `<div class="${"grid grid-cols-4 gap-4 w-full h-auto px-8 md:px-24"}">${each(idealList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto rounded-xl border shadow " + escape(list.id == 4 ? "bg-zinc-100" : "bg-zinc-300", true) + " p-8"}"><div class="${"mb-4 md:mb-8 flex w-full justify-center items-center bg-white rounded-xl shadow-xl p-4"}"><img class="${"w-24 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}></div>
                <div class="${"w-full h-auto ml-2 md:ml-4"}"><p class="${"leading-relaxed text-gray-600 text-left text-sm"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                    </p></div>
            </div>`;
  })}</div>`}</div></section>`;
});
export {
  SectionSeven as S
};
