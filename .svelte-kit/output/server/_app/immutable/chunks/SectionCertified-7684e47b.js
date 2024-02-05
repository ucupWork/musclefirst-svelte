import { c as create_ssr_component, e as escape, a as add_attribute, d as each, v as validate_component } from "./index-1e319aa9.js";
import { I as Index } from "./Index-1d60b221.js";
const SectionOne_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:AcrossTheStreet;font-style:normal;font-weight:800;src:local("AcrossTheStreetRegular"),local("Across-The-Street"),url(/assets/fonts/across-the-street.otf) format("otf")}.header-text.svelte-lx1grp{font-family:AcrossTheStreet}',
  map: null
};
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pilihButton } = $$props;
  let { banner } = $$props;
  let { txtPenawaran } = $$props;
  let { classTxtPenawaran } = $$props;
  let { txtPembelian } = $$props;
  let { classTxtPembelian } = $$props;
  let { beforePrice } = $$props;
  let { afterPrice } = $$props;
  let { persenPotongan } = $$props;
  let { bannerBawah } = $$props;
  let { waLink } = $$props;
  let { shopeeLink } = $$props;
  let { orderBtnText } = $$props;
  let { discountTag } = $$props;
  let { disableBottomBanner } = $$props;
  let { disablePriceJumbotron } = $$props;
  let { labelTxtPembelian } = $$props;
  if ($$props.pilihButton === void 0 && $$bindings.pilihButton && pilihButton !== void 0)
    $$bindings.pilihButton(pilihButton);
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.txtPenawaran === void 0 && $$bindings.txtPenawaran && txtPenawaran !== void 0)
    $$bindings.txtPenawaran(txtPenawaran);
  if ($$props.classTxtPenawaran === void 0 && $$bindings.classTxtPenawaran && classTxtPenawaran !== void 0)
    $$bindings.classTxtPenawaran(classTxtPenawaran);
  if ($$props.txtPembelian === void 0 && $$bindings.txtPembelian && txtPembelian !== void 0)
    $$bindings.txtPembelian(txtPembelian);
  if ($$props.classTxtPembelian === void 0 && $$bindings.classTxtPembelian && classTxtPembelian !== void 0)
    $$bindings.classTxtPembelian(classTxtPembelian);
  if ($$props.beforePrice === void 0 && $$bindings.beforePrice && beforePrice !== void 0)
    $$bindings.beforePrice(beforePrice);
  if ($$props.afterPrice === void 0 && $$bindings.afterPrice && afterPrice !== void 0)
    $$bindings.afterPrice(afterPrice);
  if ($$props.persenPotongan === void 0 && $$bindings.persenPotongan && persenPotongan !== void 0)
    $$bindings.persenPotongan(persenPotongan);
  if ($$props.bannerBawah === void 0 && $$bindings.bannerBawah && bannerBawah !== void 0)
    $$bindings.bannerBawah(bannerBawah);
  if ($$props.waLink === void 0 && $$bindings.waLink && waLink !== void 0)
    $$bindings.waLink(waLink);
  if ($$props.shopeeLink === void 0 && $$bindings.shopeeLink && shopeeLink !== void 0)
    $$bindings.shopeeLink(shopeeLink);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  if ($$props.discountTag === void 0 && $$bindings.discountTag && discountTag !== void 0)
    $$bindings.discountTag(discountTag);
  if ($$props.disableBottomBanner === void 0 && $$bindings.disableBottomBanner && disableBottomBanner !== void 0)
    $$bindings.disableBottomBanner(disableBottomBanner);
  if ($$props.disablePriceJumbotron === void 0 && $$bindings.disablePriceJumbotron && disablePriceJumbotron !== void 0)
    $$bindings.disablePriceJumbotron(disablePriceJumbotron);
  if ($$props.labelTxtPembelian === void 0 && $$bindings.labelTxtPembelian && labelTxtPembelian !== void 0)
    $$bindings.labelTxtPembelian(labelTxtPembelian);
  $$result.css.add(css);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900"}" style="${"background-image: url(" + escape(banner, true) + ");"}"><div class="${"col-span-full w-full h-screen flex justify-center md:justify-start items-center md:items-center bg-transparent"}"><div class="${"flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-24 relative"}"><div class="${"flex flex-col md:flex-row w-full h-auto justify-center items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"flex flex-col justify-start items-start space-y-2 w-auto h-auto md:mt-32"}"><div class="${"flex flex-col space-y-4 w-auto h-auto max-w-xl md:max-w-2xl"}"><span class="${"font-black uppercase text-yellow-200"}">Musclefirst</span>
                            <h1 id="${"header-text"}" class="${"uppercase font-extrabold text-4xl md:text-7xl " + escape(classTxtPenawaran, true) + " leading-none tracking-tight svelte-lx1grp"}">${escape(txtPenawaran)}</h1>
                            ${labelTxtPembelian ? `<h2 class="${"text-gradient font-display " + escape(classTxtPembelian, true) + " text-xl md:text-2xl leading-none border-b border-amber-500 p-2 svelte-lx1grp"}"><span class="${"block uppercase"}">${escape(txtPembelian)}</span></h2>` : ``}</div>
                        ${disablePriceJumbotron ? `<div class="${"flex flex-row w-auto h-auto justify-center items-center space-y-2 md:space-y-0 space-x-2 md:space-x-2"}"><span class="${"leading-none font-black text-xl md:text-4xl text-orange-500 line-through tracking-tighter"}">RP. ${escape(beforePrice)},-</span>
                            <span class="${"leading-none font-extrabold text-4xl md:text-6xl text-amber-500 tracking-tighter"}">RP. ${escape(afterPrice)},-</span></div>` : ``}</div>
                    
                    ${discountTag ? `<div class="${"flex justify-start items-center space-x-2 w-auto h-auto rounded-xl p-4 bg-gradient-to-r from-yellow-200 to-amber-500 shadow-lg shadow-orange-500/50"}"><span class="${"font-black text-6xl md:text-8xl text-white"}">${escape(persenPotongan)}</span>
                        <div class="${"flex flex-col w-auto h-auto"}"><span class="${"font-black text-2xl md:text-4xl text-white"}">%</span>
                            <span class="${"font-black text-2xl md:text-4xl text-white"}">OFF</span></div></div>` : ``}</div>
                <div class="${"hidden md:flex flex-col md:flex-row md:space-x-4 w-full " + escape(pilihButton == 1 ? "max-w-xl" : "max-w-2xl", true)}">${pilihButton == 1 ? `<button class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8 rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"text-2xl uppercase font-black text-amber-900"}">${escape(orderBtnText)}</span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"w-auto"}"><div class="${"i-ph:caret-right text-amber-900"}"></div></span></div></button>` : `<a${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-8 md:w-12 h-8 md:h-12 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"uppercase font-black text-white"}">Order Via <br> Whatsapp</span>
                            <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white fill-current bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></a>
                    
                    <a${add_attribute("href", shopeeLink, 0)} target="${"_blank"}" class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-8 md:w-12 h-8 md:h-12 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"uppercase font-black text-white"}">Order Via <br> Shopee</span>
                            <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white fill-current bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></a>`}</div></div></div></div>
    ${disableBottomBanner ? `<div class="${"absolute inset-x-0 bottom-0 w-full p-2 h-auto md:h-8 bg-amber-500 hidden md:flex justify-start items-center md:px-16 shadow"}"><span class="${"uppercase font-thin text-white text-sm"}"><!-- HTML_TAG_START -->${bannerBawah}<!-- HTML_TAG_END --> 
            ${discountTag ? `/ PRO WHEY <span class="${"font-bold text-zinc-800"}">DISCOUNT ${escape(persenPotongan)}%</span> LIMITED TIME.` : ``}</span></div>` : ``}
    
    <div class="${"absolute inset-x-0 bottom-0 w-full h-auto"}"><div class="${"grid md:hidden grid-cols-2 gap-0 w-full"}"><button class="${"col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8"}"><div class="${"w-full h-auto rounded-full bg-gradient-to-r from-amber-600 to-yellow-500"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8"}"><span class="${"uppercase font-black text-white text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></div></button>
            </div></div>
</section>`;
});
const SectionTwo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cocokCardList } = $$props;
  let { gridCount } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { bgColor } = $$props;
  let { textHead } = $$props;
  let { textSubHead } = $$props;
  let { cardColor } = $$props;
  let { borderColor } = $$props;
  let { bgImgColor } = $$props;
  let { txtDescColor } = $$props;
  let { onBgColor } = $$props;
  if ($$props.cocokCardList === void 0 && $$bindings.cocokCardList && cocokCardList !== void 0)
    $$bindings.cocokCardList(cocokCardList);
  if ($$props.gridCount === void 0 && $$bindings.gridCount && gridCount !== void 0)
    $$bindings.gridCount(gridCount);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textHead === void 0 && $$bindings.textHead && textHead !== void 0)
    $$bindings.textHead(textHead);
  if ($$props.textSubHead === void 0 && $$bindings.textSubHead && textSubHead !== void 0)
    $$bindings.textSubHead(textSubHead);
  if ($$props.cardColor === void 0 && $$bindings.cardColor && cardColor !== void 0)
    $$bindings.cardColor(cardColor);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.bgImgColor === void 0 && $$bindings.bgImgColor && bgImgColor !== void 0)
    $$bindings.bgImgColor(bgImgColor);
  if ($$props.txtDescColor === void 0 && $$bindings.txtDescColor && txtDescColor !== void 0)
    $$bindings.txtDescColor(txtDescColor);
  if ($$props.onBgColor === void 0 && $$bindings.onBgColor && onBgColor !== void 0)
    $$bindings.onBgColor(onBgColor);
  return `<section class="${"flex justify-start items-center w-full h-auto py-8 md:py-24 " + escape(onBgColor ? "bg-{bgColor}" : "bg-[#2b2b2b]", true) + " relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24"}"><span class="${"text-" + escape(textSubHead, true) + " font-bold text-2xl md:text-3xl"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-" + escape(textHead, true) + " leading-none max-w-xl"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        <div class="${"grid grid-cols-" + escape(gridCount, true) + " gap-2 w-full h-auto px-8 md:px-24"}">${each(cocokCardList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto border-b bg-" + escape(cardColor, true) + " border border-" + escape(borderColor, true) + " p-8 shadow"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-auto h-auto p-4 rounded-full shadow bg-" + escape(bgImgColor, true)}"><img class="${"w-12 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}></span>
                    <p class="${"leading-none text-" + escape(txtDescColor, true) + " text-center text-md font-medium uppercase"}">${escape(list.txtDesc)}
                    </p></div>
            </div>`;
  })}</div></div></section>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<section class="${"w-full h-auto md:h-auto overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center relative bg-center bg-cover bg-" + escape(bgColor, true) + " px-4 md:px-16 py-8 md:py-0 border-b border-amber-500"}"><div class="${"col-span-full md:col-span-1 w-full h-auto md:h-auto flex justify-center items-center md:px-8"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><span class="${"text-" + escape(textSubHead, true) + " font-black text-3xl tracking-tighter uppercase"}">${escape(subtitle)}</span>
                <h2 class="${"text-2xl md:text-5xl font-black text-" + escape(textHead, true) + " leading-none"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
                <div class="${"flex flex-col w-full h-auto py-4 mt-4 md:mt-8"}"><p class="${"prose-lg leading-relaxed text-md text-" + escape(txtDescColor, true)}"><!-- HTML_TAG_START -->${descriptionOne}<!-- HTML_TAG_END --></p></div>
                <div class="${"flex flex-col w-full h-auto py-4 mt-2 md:mt-0"}"><p class="${"prose-lg leading-relaxed text-md text-" + escape(txtDescColor, true)}"><!-- HTML_TAG_START -->${descriptionTwo}<!-- HTML_TAG_END --></p></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0"}"><img${add_attribute("src", imgLink, 0)} class="${"w-auto h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div></section>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rasaList } = $$props;
  let { cocokCardOtherList } = $$props;
  let { productName } = $$props;
  let { sizeOne } = $$props;
  let { sizeTwo } = $$props;
  let { bgImg } = $$props;
  let { bgColor } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { subTitle } = $$props;
  let { title } = $$props;
  let { btnText } = $$props;
  let { txtTitleColor } = $$props;
  if ($$props.rasaList === void 0 && $$bindings.rasaList && rasaList !== void 0)
    $$bindings.rasaList(rasaList);
  if ($$props.cocokCardOtherList === void 0 && $$bindings.cocokCardOtherList && cocokCardOtherList !== void 0)
    $$bindings.cocokCardOtherList(cocokCardOtherList);
  if ($$props.productName === void 0 && $$bindings.productName && productName !== void 0)
    $$bindings.productName(productName);
  if ($$props.sizeOne === void 0 && $$bindings.sizeOne && sizeOne !== void 0)
    $$bindings.sizeOne(sizeOne);
  if ($$props.sizeTwo === void 0 && $$bindings.sizeTwo && sizeTwo !== void 0)
    $$bindings.sizeTwo(sizeTwo);
  if ($$props.bgImg === void 0 && $$bindings.bgImg && bgImg !== void 0)
    $$bindings.bgImg(bgImg);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.txtTitleColor === void 0 && $$bindings.txtTitleColor && txtTitleColor !== void 0)
    $$bindings.txtTitleColor(txtTitleColor);
  return `<div class="${"w-full h-auto md:h-screen bg-" + escape(bgColor, true) + " relative bg-cover bg-center bg-no-repeat"}" style="${"background-image: url(" + escape(bgImg, true) + ");"}"><div class="${"flex justify-end items-end w-full h-auto relative pb-16 md:pb-0 md:py-0 bg-amber-500 md:bg-transparent"}"><div class="${"absolute inset-x-0 top-0 md:top-4 w-full h-auto justify-center items-center z-10"}"><div class="${"hidden md:flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"w-auto h-auto py-4 md:py-8 max-w-sm text-center"}"><span class="${"block uppercase font-black text-" + escape(txtTitleColor, true) + " text-3xl md:text-6xl mb-1"}">${escape(productName)}</span>
                    <span class="${"font-bankghotic block uppercase font-bold bg-zinc-900 text-zinc-100 text-xl md:text-2xl"}">Musclefirst</span></div></div></div>

        <div class="${"absolute inset-x-0 -bottom-4 md:-bottom-32 w-full h-auto justify-center items-center z-10"}"><div class="${"flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-8 md:px-16 py-8 md:py-4"}"><div class="${"flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto"}">${sizeTwo ? `<div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-3xl md:text-5xl text-white mt-2"}">${escape(sizeTwo)}</h2></div>` : ``}
                        ${sizeOne ? `<div class="${"rounded md:rounded-full w-full md:w-32 h-16 md:h-32 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-3xl text-white mt-2"}">${escape(sizeOne)}</h2></div>` : ``}</div></div></div></div>

        <div class="${"w-full h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-end md:items-center md:px-0 z-10 bg-transparent pb-10 md:pb-0 md:py-0"}"><div class="${"flex flex-col justify-center items-center w-full md:w-auto h-auto px-8 md:px-8 py-4 md:py-8 bg-transparent"}"><div class="${"flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4"}"><div class="${"flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-2xl md:text-4xl text-white mt-0"}">Rasa
                                </h2></div></div></div></div>
                <div class="${"flex flex-col justify-start items-start space-y-4 w-full h-auto bg-transparen rounded-xl px-0 md:px-8 py-4 md:py-8"}">${each(rasaList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto"}">${list.linkImg ? `<span class="${"w-auto h-auto rounded-xl md:rounded-full p-0 bg-white border border-amber-500 shadow-xl"}"><img class="${"w-16 md:w-24 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span>` : ``}
                        <div class="${"flex justify-center items-center w-full h-auto px-4 py-4 md:py-2 rounded-xl md:rounded-full bg-white border border-yellow-200"}"><h2 class="${"leading-none font-bold text-zinc-900 text-md md:text-md mt-0"}"><!-- HTML_TAG_START -->${list.title}<!-- HTML_TAG_END -->
                            </h2></div>
                    </div>`;
  })}</div></div>
            <div class="${"flex flex-col w-auto h-auto px-8 md:px-8 py-2 md:py-8 bg-transparent"}"><div class="${"flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-2 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4"}"><div class="${"flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-2xl md:text-4xl text-white mt-0"}">Cocok Untuk
                                </h2></div></div></div></div>
                <div class="${"flex flex-col justify-end items-end space-y-4 w-full h-auto bg-transparent rounded-xl px-0 md:px-8 py-8 md:py-8 md:max-w-sm"}">${each(cocokCardOtherList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex flex-row space-x-2 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"flex justify-center items-center w-full md:w-auto h-auto px-8 py-4 rounded-xl md:rounded-full bg-white border border-yellow-200"}"><h2 class="${"leading-none font-medium text-zinc-900 text-sm mt-0 uppercase"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                            </h2></div>
                        <span class="${"w-auto h-auto rounded-xl md:rounded-full p-4 bg-white border border-amber-500 shadow-xl"}"><div class="${"i-ph:check-circle text-emerald-500 w-8 h-8"}"></div></span>
                    </div>`;
  })}</div></div></div></div></div>`;
});
const SectionFive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { manfaatList } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.manfaatList === void 0 && $$bindings.manfaatList && manfaatList !== void 0)
    $$bindings.manfaatList(manfaatList);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex justify-center items-center w-full h-auto md:h-auto py-8 md:py-16 bg-white relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24"}"><span class="${"text-amber-600 font-bold uppercase text-2xl md:text-3xl"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-4xl"}"><span class="${"block uppercase"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></span></h2></div>
        <div class="${"grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24"}">${each(manfaatList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto border-b bg-zinc-100 p-8 shadow"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-2"}"><span class="${"w-auto h-auto p-4 rounded-full shadow bg-white"}"><img class="${"w-12 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}></span>
                    <h2 class="${"font-bold uppercase text-md text-zinc-900 leading-none tracking-normal"}">${escape(list.title)}</h2>
                    <p class="${"leading-relaxed text-gray-600 text-center text-sm font-normal"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                    </p></div>
            </div>`;
  })}</div></div></section>`;
});
const SectionSeven = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonialCardList } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.testimonialCardList === void 0 && $$bindings.testimonialCardList && testimonialCardList !== void 0)
    $$bindings.testimonialCardList(testimonialCardList);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex justify-start items-center w-full h-auto py-12 md:py-16 bg-zinc-300/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24"}"><span class="${"text-amber-600 font-bold text-2xl md:text-3xl uppercase"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        <div class="${"grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24"}">${each(testimonialCardList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto border-b bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                    </span></div>
            </div>`;
  })}</div></div></section>`;
});
const SectionEight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { imgLink } = $$props;
  let { altImg } = $$props;
  let { linkShopee } = $$props;
  let { linkWhatsapp } = $$props;
  let { titlePrice } = $$props;
  let { descriptionPrice } = $$props;
  let { beforePriceLabel } = $$props;
  let { beforePrice } = $$props;
  let { afterPrice } = $$props;
  let { bgColorSection } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.imgLink === void 0 && $$bindings.imgLink && imgLink !== void 0)
    $$bindings.imgLink(imgLink);
  if ($$props.altImg === void 0 && $$bindings.altImg && altImg !== void 0)
    $$bindings.altImg(altImg);
  if ($$props.linkShopee === void 0 && $$bindings.linkShopee && linkShopee !== void 0)
    $$bindings.linkShopee(linkShopee);
  if ($$props.linkWhatsapp === void 0 && $$bindings.linkWhatsapp && linkWhatsapp !== void 0)
    $$bindings.linkWhatsapp(linkWhatsapp);
  if ($$props.titlePrice === void 0 && $$bindings.titlePrice && titlePrice !== void 0)
    $$bindings.titlePrice(titlePrice);
  if ($$props.descriptionPrice === void 0 && $$bindings.descriptionPrice && descriptionPrice !== void 0)
    $$bindings.descriptionPrice(descriptionPrice);
  if ($$props.beforePriceLabel === void 0 && $$bindings.beforePriceLabel && beforePriceLabel !== void 0)
    $$bindings.beforePriceLabel(beforePriceLabel);
  if ($$props.beforePrice === void 0 && $$bindings.beforePrice && beforePrice !== void 0)
    $$bindings.beforePrice(beforePrice);
  if ($$props.afterPrice === void 0 && $$bindings.afterPrice && afterPrice !== void 0)
    $$bindings.afterPrice(afterPrice);
  if ($$props.bgColorSection === void 0 && $$bindings.bgColorSection && bgColorSection !== void 0)
    $$bindings.bgColorSection(bgColorSection);
  return `<section id="${"get-product"}" class="${"flex justify-center items-center w-full h-auto md:h-screen bg-" + escape(bgColorSection, true) + " relative overflow-hidden py-8 md:py-0"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center"}"><div class="${"hidden w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8"}"><div class="${"flex flex-col text-center md:text-left w-auto h-auto"}"><span class="${"text-amber-500 font-bold text-xl md:text-2xl"}">${escape(subtitle)}</span>
                    <h2 class="${"text-2xl md:text-4xl font-black text-black leading-none text-left"}"><span class="${"block"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></span></h2></div></div>
            <div class="${"flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center"}"><div class="${"flex w-full h-auto justify-center items-center"}"><img${add_attribute("src", imgLink, 0)} class="${"w-10/12 h-auto"}"${add_attribute("alt", altImg, 0)}></div></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-16 py-4 md:py-8 text-center md:text-left"}"><h2 class="${"text-2xl md:text-4xl font-black uppercase text-gray-800 tracking-tight text-center md:text-left md:max-w-md mb-4"}"><!-- HTML_TAG_START -->${titlePrice}<!-- HTML_TAG_END --></h2>
                <!-- HTML_TAG_START -->${descriptionPrice}<!-- HTML_TAG_END -->

                <h1 class="${"text-amber-500 font-black text-3xl md:text-6xl"}">RP. ${escape(afterPrice)},</h1>
                ${beforePriceLabel ? `<h2 class="${"text-amber-700 font-bold text-2xl md:text-4xl line-through"}">RP. ${escape(beforePrice)},-</h2>` : ``}
                
                <div class="${"flex flex-col space-y-4 w-full md:w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-0"}"><a rel="${"noreferrer"}"${add_attribute("href", linkShopee, 0)} target="${"_blank"}" class="${"flex justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-4 px-8 md:px-8 rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-8 h-8 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></div>
                        <span class="${"block text-xl font-black text-amber-900 uppercase"}">Order Via Shopee</span></a>
                    <a rel="${"noreferrer"}"${add_attribute("href", linkWhatsapp, 0)} target="${"_blank"}" class="${"flex justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-4 px-8 md:px-8 rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-8 h-8 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></div>
                        <span class="${"block text-xl font-black text-amber-900 uppercase"}">Order Via Whatsapp</span></a></div></div></div></div></section>`;
});
const SectionNine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-800 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl"}">${escape(subtitle)}</span>
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
const SectionSize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productName } = $$props;
  let { title } = $$props;
  let { products = [] } = $$props;
  let filteredProduct = products.filter((product) => product.name === productName);
  if ($$props.productName === void 0 && $$bindings.productName && productName !== void 0)
    $$bindings.productName(productName);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  return `${filteredProduct ? `<section class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-zinc-300 shadow border-b-4"}"><div class="${"flex w-full md:w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-center"}"><button type="${"button"}" class="${"flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6"}"><span class="${"uppercase block text-xl font-black text-white"}">${escape(filteredProduct[0].name)}</span></button></div>
        <div class="${"flex flex-col w-auto h-auto"}">${each(filteredProduct, (list) => {
    return `<div class="${"grid grid-cols-" + escape(list.size.length, true) + " gap-1 w-full md:w-auto h-auto"}">${each(list.size, (val) => {
      return `<div class="${"col-span-1 flex flex-row justify-center items-center w-20 md:w-24 h-16 md:h-24 bg-black border"}"><h2 class="${"text-xl md:text-3xl font-black text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(val.sizeName)}</span></h2>
                        <h2 class="${"text-xl md:text-3xl font-black text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(val.sizeType)}</span></h2>
                    </div>`;
    })}
            </div>`;
  })}</div></div></section>` : ``}`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<section class="${"flex justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-400/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-row justify-center items-center space-x-4 w-full h-auto"}">${each(certifiedCardList, (list) => {
    return `<div class="${"flex justify-center items-center w-auto h-auto border-b bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                    </span></div>
            </div>`;
  })}</div></div></section>`;
});
export {
  SectionOne as S,
  SectionTwo as a,
  SectionThree as b,
  SectionFour as c,
  SectionSize as d,
  SectionCertified as e,
  SectionFive as f,
  SectionSeven as g,
  SectionEight as h,
  SectionNine as i
};
