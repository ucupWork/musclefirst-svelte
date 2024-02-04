import { c as create_ssr_component, e as escape, d as each, a as add_attribute, v as validate_component } from "./index-b361c760.js";
import { I as Index } from "./Index-e1670c10.js";
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banner } = $$props;
  let { txtPenawaran } = $$props;
  let { classTxtPenawaran } = $$props;
  let { txtSubPenawaran } = $$props;
  let { classtxtSubPenawaran } = $$props;
  let { orderBtnText } = $$props;
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.txtPenawaran === void 0 && $$bindings.txtPenawaran && txtPenawaran !== void 0)
    $$bindings.txtPenawaran(txtPenawaran);
  if ($$props.classTxtPenawaran === void 0 && $$bindings.classTxtPenawaran && classTxtPenawaran !== void 0)
    $$bindings.classTxtPenawaran(classTxtPenawaran);
  if ($$props.txtSubPenawaran === void 0 && $$bindings.txtSubPenawaran && txtSubPenawaran !== void 0)
    $$bindings.txtSubPenawaran(txtSubPenawaran);
  if ($$props.classtxtSubPenawaran === void 0 && $$bindings.classtxtSubPenawaran && classtxtSubPenawaran !== void 0)
    $$bindings.classtxtSubPenawaran(classtxtSubPenawaran);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900"}" style="${"background-image: url(" + escape(banner, true) + ");"}"><div class="${"col-span-full w-full h-screen flex justify-start items-center bg-transparent"}"><div class="${"flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-24 relative"}"><div class="${"flex flex-col md:flex-row w-full h-auto justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"flex flex-col justify-start items-start space-y-2 w-full h-auto md:mt-0"}"><div class="${"flex flex-col space-y-4 w-full h-auto max-w-xl md:max-w-xl text-start bg-black/50 md:bg-transparent rounded p-8 md:p-0"}">
                            <h1 id="${"header-text"}" class="${"uppercase font-extrabold font-benmojinhei text-transparent bg-clip-text bg-gradient-to-br from-[#c18f48] to-[#e7c17a] text-2xl md:text-4xl " + escape(classTxtPenawaran, true) + " leading-none tracking-tight"}">${escape(txtPenawaran)}</h1>

                            <h2 class="${"text-gradient font-display font-benmojinhei " + escape(classtxtSubPenawaran, true) + " text-white text-2xl md:text-4xl leading-none p-2"}"><span class="${"block uppercase"}">${escape(txtSubPenawaran)}</span></h2></div></div></div>

                ${orderBtnText ? `<div class="${"hidden md:flex flex-col md:flex-row justify-center items-center w-full"}"><button class="${"cursor-pointer flex justify-center items-center w-full max-w-xs md:max-w-2xl h-auto py-2 px-8 bg-gradient-to-r from-[#c18f48] to-[#e7c17a] shadow-lg shadow-orange-500/50 border-4 border-yellow-900 mt-4 md:mt-8 rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"text-2xl uppercase font-black text-zinc-900"}">${escape(orderBtnText)}</span></div></button></div>` : ``}</div></div></div>
    
    <div class="${"absolute inset-x-0 bottom-0 w-full h-auto"}"><div class="${"grid md:hidden grid-cols-2 gap-0 w-full"}"><button class="${"col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8"}"><div class="${"w-full h-auto rounded-full bg-gradient-to-r from-amber-600 to-yellow-500"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8"}"><span class="${"uppercase font-black text-white text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto"}"></span></div></div></button></div></div>
</section>`;
});
const SectionTwo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cocokCardList } = $$props;
  let { gridCount } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { subTitlePin } = $$props;
  if ($$props.cocokCardList === void 0 && $$bindings.cocokCardList && cocokCardList !== void 0)
    $$bindings.cocokCardList(cocokCardList);
  if ($$props.gridCount === void 0 && $$bindings.gridCount && gridCount !== void 0)
    $$bindings.gridCount(gridCount);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.subTitlePin === void 0 && $$bindings.subTitlePin && subTitlePin !== void 0)
    $$bindings.subTitlePin(subTitlePin);
  return `<div class="${"flex justify-start items-center w-full h-auto md:h-auto py-16 md:py-16 bg-zinc-400/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24"}">${subTitlePin ? `<span class="${"text-amber-600 font-bold text-2xl md:text-3xl"}">${escape(subtitle)}</span>` : ``}
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-900 leading-none max-w-xs"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        <div class="${"grid grid-cols-" + escape(gridCount, true) + " gap-2 w-full h-auto px-8 md:px-24"}">${each(cocokCardList, (list) => {
    return `<div class="${"col-span-full md:col-span-1 w-full h-full bg-transparent"}"><div class="${"flex flex-col space-y-2 justify-center items-center w-full h-auto"}"><div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex justify-center items-center w-full h-aut md:h-64 border-b bg-gradient-to-b from-[#c18f48] to-[#e7c17a] p-8 shadow"}"><div class="${"flex flex-col w-full justify-center items-center text-center"}">${list.linkImg ? `<span class="${"w-auto h-auto p-4 rounded-full shadow bg-white mb-4 md:mb-8"}"><img class="${"w-12 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                            </span>` : ``}
                            <h2 class="${"leading-none text-gray-900 text-center text-md font-medium uppercase"}">${escape(list.txtDesc)}</h2>
                        </div></div>
                    ${list.txtSubDesc ? `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"w-full h-auto border-b bg-white p-8 shadow"}"><div class="${"w-full h-full flex justify-center items-center"}"><p class="${"text-sm text-zinc-700 leading-relaxed"}"><!-- HTML_TAG_START -->${list.txtSubDesc}<!-- HTML_TAG_END -->
                                </p></div>
                    </div>` : ``}</div>
            </div>`;
  })}</div></div></div>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cocokCardOtherList } = $$props;
  let { id } = $$props;
  let { pinLogo } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { titlePart } = $$props;
  let { image } = $$props;
  if ($$props.cocokCardOtherList === void 0 && $$bindings.cocokCardOtherList && cocokCardOtherList !== void 0)
    $$bindings.cocokCardOtherList(cocokCardOtherList);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.pinLogo === void 0 && $$bindings.pinLogo && pinLogo !== void 0)
    $$bindings.pinLogo(pinLogo);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.titlePart === void 0 && $$bindings.titlePart && titlePart !== void 0)
    $$bindings.titlePart(titlePart);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div${add_attribute("id", id, 0)} class="${"flex justify-center items-center w-full h-auto md:h-screen overflow-hidden bg-white border-b-4 border-zinc-200"}"><div class="${"grid grid-cols-12 gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-white py-16 md:py-16 md:px-24"}"><div class="${"col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-yellow-400 font-black text-2xl md:text-4xl"}">${escape(title)}</h2>
                <span class="${"text-zinc-800 font-black text-4xl md:text-5xl uppercase"}">${escape(subtitle)}</span></div>
            <div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-zinc-500 font-black text-3xl md:text-4xl"}">${escape(titlePart)}</h2></div></div>
        <div class="${"col-span-full md:col-span-4 w-full h-auto flex justify-center md:justify-end items-center mb-8 md:mb-0"}"><div class="${"flex flex-col justify-center items-center w-auto h-auto px-8 p-4 md:p-0 rounded bg-gradient-to-t from-[#c18f48] to-[#e7c17a] shadow-xl border-2 border-gray-200"}"><picture><source${add_attribute("srcset", image, 0)} type="${"image/webp"}">
                    <img${add_attribute("src", image, 0)} class="${"w-full md:w-auto h-auto object-contain object-center"}" alt="${"AboutImage"}"></picture></div></div>
        <div class="${"col-span-full md:col-span-8 w-full h-auto flex justify-center md:justify-end items-center"}"><div class="${"grid grid-cols-4 gap-4 w-auto justify-center items-center md:items-end h-auto px-8 md:px-0"}">${each(cocokCardOtherList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 justify-center items-center w-full md:w-full h-auto md:h-96 shadow relative"}"><div class="${"flex justify-center items-center text-center w-full md:w-full h-auto md:h-96 px-8 py-4 rounded bg-white border border-yellow-200"}"><h2 class="${"leading-none font-medium text-zinc-900 text-sm mt-0 uppercase"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                            </h2></div>
                    </div>`;
  })}</div></div></div></div>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-800 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center px-2 md:px-8 z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-3xl md:text-4xl font-black text-white leading-none text-center"}"><span class="${"block uppercase max-w-sm"}">${escape(title)}</span></h2></div></div>
        ${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "default",
      top: true,
      bottom: false,
      id: "list-agent",
      classes: "bg-zinc-800"
    },
    {},
    {}
  )}</div></section>`;
});
const SectionSix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { descriptionOne } = $$props;
  let { descriptionTwo } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { bgColor } = $$props;
  let { textHead } = $$props;
  let { textSubHead } = $$props;
  let { txtDescColor } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.descriptionOne === void 0 && $$bindings.descriptionOne && descriptionOne !== void 0)
    $$bindings.descriptionOne(descriptionOne);
  if ($$props.descriptionTwo === void 0 && $$bindings.descriptionTwo && descriptionTwo !== void 0)
    $$bindings.descriptionTwo(descriptionTwo);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textHead === void 0 && $$bindings.textHead && textHead !== void 0)
    $$bindings.textHead(textHead);
  if ($$props.textSubHead === void 0 && $$bindings.textSubHead && textSubHead !== void 0)
    $$bindings.textSubHead(textSubHead);
  if ($$props.txtDescColor === void 0 && $$bindings.txtDescColor && txtDescColor !== void 0)
    $$bindings.txtDescColor(txtDescColor);
  return `<section class="${"w-full h-auto md:h-auto overflow-hidden border-y-8 border-[#c18f48]"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center relative bg-center bg-cover bg-" + escape(bgColor, true) + " px-4 md:px-16 py-8 md:py-0"}"><div class="${"col-span-full md:col-span-1 w-full h-auto md:h-auto flex justify-center items-center md:px-8"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><span class="${"text-" + escape(textSubHead, true) + " font-black text-3xl tracking-tighter uppercase"}">${escape(subtitle)}</span>
                <h2 class="${"text-2xl md:text-5xl font-black text-" + escape(textHead, true) + " leading-none"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <div class="${"flex flex-col w-full h-auto py-4 mt-4 md:mt-8"}"><p class="${"prose-lg leading-relaxed text-md text-" + escape(txtDescColor, true)}"><!-- HTML_TAG_START -->${descriptionOne}<!-- HTML_TAG_END --></p></div>
                <div class="${"flex flex-col w-full h-auto py-4 mt-2 md:mt-0"}"><p class="${"prose-lg leading-relaxed text-md text-" + escape(txtDescColor, true)}"><!-- HTML_TAG_START -->${descriptionTwo}<!-- HTML_TAG_END --></p></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto p-2 rounded-full border-4 border-[#c18f48]"}"><img${add_attribute("src", imgLink, 0)} class="${"w-auto h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div></section>`;
});
const SectionAllProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { products = [] } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${products ? `<section class="${"flex justify-center items-center w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-center items-center w-full h-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 overflow-x-auto py-8 md:py-4 px-4 md:px-0 bg-zinc-300 shadow border-b-4"}">${each(products, (list) => {
    return `<div class="${"flex flex-row w-full md:w-auto h-auto"}"><a${add_attribute("href", `https://musclefirst.co.id/${list.linkHref}`, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-auto border py-2 px-4 md:px-8"}"><span class="${"uppercase block text-sm md:text-sm font-black text-white"}">${escape(list.name)}</span></a>
        </div>`;
  })}</div></section>` : ``}`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<section class="${"flex justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-400/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex justify-center items-center space-x-4 w-full h-auto"}"><div class="${"grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2"}">${each(certifiedCardList, (list) => {
    return `<div class="${"col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span></div>
                </div>`;
  })}</div></div></div></section>`;
});
export {
  SectionOne as S,
  SectionSix as a,
  SectionTwo as b,
  SectionThree as c,
  SectionCertified as d,
  SectionAllProducts as e,
  SectionFour as f
};
