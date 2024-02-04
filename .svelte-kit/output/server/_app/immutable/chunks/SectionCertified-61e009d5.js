import { c as create_ssr_component, e as escape, a as add_attribute, d as each } from "./index-b361c760.js";
import { C as CrownImage } from "./crown-f3b9967b.js";
import { L as LogoWhite } from "./logo-white-bbda6e5d.js";
import { p as productList } from "./list-products-fcdc0a2c.js";
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { agentDomisili } = $$props;
  let { pilihButton } = $$props;
  let { banner } = $$props;
  let { txtMainText } = $$props;
  let { classTxtMainText } = $$props;
  let { classTxtBtnOrder } = $$props;
  let { txtPembelian } = $$props;
  let { classTxtPembelian } = $$props;
  let { persenPotongan } = $$props;
  let { bannerBawah } = $$props;
  let { waLink } = $$props;
  let { orderBtnText } = $$props;
  let { discountTag } = $$props;
  let { labelTxtPembelian } = $$props;
  let { hashtagText } = $$props;
  let { crownPin } = $$props;
  if ($$props.agentDomisili === void 0 && $$bindings.agentDomisili && agentDomisili !== void 0)
    $$bindings.agentDomisili(agentDomisili);
  if ($$props.pilihButton === void 0 && $$bindings.pilihButton && pilihButton !== void 0)
    $$bindings.pilihButton(pilihButton);
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.txtMainText === void 0 && $$bindings.txtMainText && txtMainText !== void 0)
    $$bindings.txtMainText(txtMainText);
  if ($$props.classTxtMainText === void 0 && $$bindings.classTxtMainText && classTxtMainText !== void 0)
    $$bindings.classTxtMainText(classTxtMainText);
  if ($$props.classTxtBtnOrder === void 0 && $$bindings.classTxtBtnOrder && classTxtBtnOrder !== void 0)
    $$bindings.classTxtBtnOrder(classTxtBtnOrder);
  if ($$props.txtPembelian === void 0 && $$bindings.txtPembelian && txtPembelian !== void 0)
    $$bindings.txtPembelian(txtPembelian);
  if ($$props.classTxtPembelian === void 0 && $$bindings.classTxtPembelian && classTxtPembelian !== void 0)
    $$bindings.classTxtPembelian(classTxtPembelian);
  if ($$props.persenPotongan === void 0 && $$bindings.persenPotongan && persenPotongan !== void 0)
    $$bindings.persenPotongan(persenPotongan);
  if ($$props.bannerBawah === void 0 && $$bindings.bannerBawah && bannerBawah !== void 0)
    $$bindings.bannerBawah(bannerBawah);
  if ($$props.waLink === void 0 && $$bindings.waLink && waLink !== void 0)
    $$bindings.waLink(waLink);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  if ($$props.discountTag === void 0 && $$bindings.discountTag && discountTag !== void 0)
    $$bindings.discountTag(discountTag);
  if ($$props.labelTxtPembelian === void 0 && $$bindings.labelTxtPembelian && labelTxtPembelian !== void 0)
    $$bindings.labelTxtPembelian(labelTxtPembelian);
  if ($$props.hashtagText === void 0 && $$bindings.hashtagText && hashtagText !== void 0)
    $$bindings.hashtagText(hashtagText);
  if ($$props.crownPin === void 0 && $$bindings.crownPin && crownPin !== void 0)
    $$bindings.crownPin(crownPin);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900 relative"}" style="${"background-image: url(" + escape(banner, true) + ");"}">
        <div class="${"col-span-full w-full h-screen flex justify-center md:justify-start items-center md:items-center bg-transparent"}"><div class="${"flex flex-col justify-center items-center w-auto h-auto py-12 md:py-0 px-4 md:px-24 ml-0 md:ml-0 relative"}"><div class="${"flex flex-col md:flex-row w-full h-auto justify-center items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"flex flex-col space-y-2 w-full h-auto"}"><div class="${"flex flex-col w-full h-auto max-w-xl"}">${crownPin ? `<span class="${"font-bold uppercase text-yellow-800"}"><img class="${"w-16 h-auto"}"${add_attribute("src", CrownImage, 0)} alt="${"Musclefirst Crown"}"></span>` : ``}

                            ${hashtagText ? `<span class="${"font-bold uppercase text-2xl text-[#f9bc00]"}">${escape(hashtagText)}</span>` : ``}
                            <div class="${"flex flex-col-reverse md:flex-col w-auto h-auto"}"><div class="${"flex justify-between md:justify-start bg-transparent items-center p-0 md:p-4 w-full md:w-auto md:rounded-full h-auto py-1 md:py-4 px-2 md:px-4"}"><div class="${"flex w-12 h-12 bg-transparent rounded-full shadow-xl"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"m-auto text-blue-500 w-8 h-8 icon icon-tabler icon-tabler-discount-check-filled"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"}" stroke-width="${"0"}" fill="${"currentColor"}"></path></svg></div>
                                    <span class="${"font-bold text-white text-md"}">Verified</span></div>
                                <div class="${"flex flex-col md:flex-row items-center w-auto h-auto border-b border-white"}"><picture><source${add_attribute("srcset", LogoWhite, 0)} type="${"image/webp"}">
                                        <img width="${"647px"}" height="${"504px"}"${add_attribute("src", LogoWhite, 0)} class="${"w-40 md:w-40 h-auto"}" alt="${"AboutImage"}"></picture>
                                    <div class="${"flex flex-col items-center w-auto h-auto ml-4 py-4 border-white"}"><span class="${"font-bankghotic font-bold text-4xl md:text-5xl uppercase text-zinc-100"}">Musclefirst
                                        </span>
                                        <div class="${"flex flex-col md:flex-row md:space-x-4 text-center md:text-left w-auto h-auto"}"><span class="${"text-white uppercase text-2xl font-black"}">Distributor</span>
                                            <span class="${"text-white uppercase text-2xl font-normal"}">${escape(agentDomisili)}</span></div></div></div></div>
                            ${labelTxtPembelian ? `<h2 class="${escape(classTxtPembelian, true) + " text-xl md:text-2xl leading-none border border-amber-500 p-2"}"><span class="${"block uppercase"}">${escape(txtPembelian)}</span></h2>` : ``}</div></div>
                    
                    ${discountTag ? `<div class="${"flex justify-center items-center space-x-2 w-auto h-auto rounded-xl p-4 bg-gradient-to-r from-yellow-200 to-amber-500 shadow-lg shadow-orange-500/50"}"><span class="${"font-black text-6xl md:text-8xl text-white"}">${escape(persenPotongan)}</span>
                        <div class="${"flex flex-col w-auto h-auto"}"><span class="${"font-black text-2xl md:text-4xl text-white"}">%</span>
                            <span class="${"font-black text-2xl md:text-4xl text-white"}">OFF</span></div></div>` : ``}</div>
                <div class="${"hidden md:flex flex-col md:space-y-4 w-full " + escape(pilihButton == 1 ? "max-w-xl" : "max-w-2xl", true) + " pt-8 md:pt-16"}"><a rel="${"noreferrer"}"${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"cursor-pointer flex justify-center items-center w-auto h-auto py-4 px-8 bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl mt-4 md:mt-8"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto"}"><span class="${"uppercase font-black " + escape(classTxtBtnOrder, true) + " text-2xl"}">${escape(orderBtnText)}</span>
                            <span class="${"w-auto h-auto"}"><span><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}"></path><path d="${"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"}"></path></svg></span></span></div></a></div></div></div></div>
    <div class="${"absolute inset-x-0 bottom-0 w-full p-2 h-auto md:h-8 bg-black hidden md:flex justify-start items-center md:px-24 shadow"}"><span class="${"uppercase font-thin text-white text-sm"}"><!-- HTML_TAG_START -->${bannerBawah}<!-- HTML_TAG_END --> 
            ${discountTag ? `/ ${escape(agentDomisili)} <span class="${"font-bold text-zinc-800"}">DISCOUNT ${escape(persenPotongan)}%</span> LIMITED TIME.` : ``}</span></div>
    
    <div class="${"absolute inset-x-0 bottom-0 w-full h-auto"}"><div class="${"grid md:hidden grid-cols-2 gap-0 w-full"}"><a rel="${"noreferrer"}"${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-zinc-900 shadow-lg shadow-zinc-500/50 mt-4 md:mt-8"}"><div class="${"w-full h-auto rounded-full bg-gradient-to-r from-emerald-600 to-green-500"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8"}"><span class="${"uppercase font-black text-white text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}"></path><path d="${"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"}"></path></svg></span></div></div></a></div></div></section>`;
});
const SectionTwo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { titlePart } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.titlePart === void 0 && $$bindings.titlePart && titlePart !== void 0)
    $$bindings.titlePart(titlePart);
  return `<section${add_attribute("id", id, 0)} class="${"flex justify-center items-center w-full h-auto md:h-auto overflow-hidden bg-zinc-800 border-b border-zinc-900 relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-black py-12 md:py-16 md:px-16"}"><div class="${"col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4 md:mb-8"}"><div class="${"flex flex-col -space-y-1 w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-amber-600 font-black font-blackttnorms text-4xl md:text-5xl uppercase"}">${escape(title)}</h2>
                <span class="${"text-zinc-50 font-black font-blackttnorms text-4xl md:text-5xl uppercase"}">${escape(subtitle)}</span></div>
            <div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-zinc-500 font-black text-3xl md:text-4xl"}">${escape(titlePart)}</h2></div></div>
        <div class="${"col-span-full w-full h-auto flex justify-center md:justify-end items-center pb-16 md:pb-16"}"><div class="${"grid grid-cols-4 gap-0 md:gap-8 w-auto justify-center items-center md:items-end h-auto px-8 space-y-4 md:px-8"}"><div class="${"col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative"}"><div class="${"absolute -top-4 -right-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12"}"><span class="${"font-black text-white"}">1</span></div></div>
                    <p class="${"leading-relaxed text-base text-gray-100 md:text-lg"}">Protein itu seperti makanan untuk otot, dengan protein maka otot akan lebih mudah terbentuk. Normalnya kebutuhan protein orang yang sedang gym adalah dua kali berat badan
                    </p></div>
                <div class="${"col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative"}"><div class="${"absolute -top-4 -right-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12"}"><span class="${"font-black text-white"}">2</span></div></div>
                    <p class="${"leading-relaxed text-base text-gray-100 md:text-lg"}">Jika Anda punya berat 50kg, maka kebutuhan protein harian Anda adalah 100gr protein.
                    </p></div>
                <div class="${"col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative"}"><div class="${"absolute -top-4 -right-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12"}"><span class="${"font-black text-white"}">3</span></div></div>
                    <p class="${"leading-relaxed text-base text-gray-100 md:text-lg"}">Jika kebutuhan protein harian tidak terpenuhi, maka akan menyebabkan otot bisa terkikis sehingga latihan bertahun-tahunmu tidak menunjukkan hasil yang signifikan
                    </p></div>
                <div class="${"col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-gradient-to-r from-amber-500 to-yellow-600 shadow rounded-xl border p-4 md:p-6 relative"}"><div class="${"absolute -top-4 -right-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12"}"><span class="${"font-black text-white"}">4</span></div></div>
                    <p class="${"leading-relaxed text-base text-gray-100 md:text-lg"}"><span class="${"font-black uppercase text-yellow-900 tracking-widest"}">Musclefirst</span> bisa menjadi solusi mudah dalam mencukupi kebutuhan protein
                    </p></div></div></div></div></section>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"flex justify-center items-center w-full h-auto py-16 md:py-16 bg-black relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-start z-0"}"><div class="${"flex flex-col justify-center items-center w-auto h-auto py-2 md:py-4 px-8 md:px-24"}"><h1 class="${"items-center text-3xl md:text-4xl font-black font-blackttnorms text-white leading-none uppercase"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h1></div>
        <div class="${"grid grid-cols-3 gap-2 md:gap-4 w-full h-auto px-8 md:px-24 pt-16"}"><div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative"}"><div class="${"flex flex-col space-y-4 justify-center items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto space-y-4 justify-start items-start"}"><span class="${"font-black text-lg uppercase text-white"}">Protein Mudah Diserap Tubuh</span></div>
                    <div class="${"flex flex-row w-full h-auto justify-start items-center space-y-2"}"><div class="${"flex flex-col w-full justify-start items-start space-y-2"}"><p class="${"leading-relaxed text-left text-md text-gray-100"}">Suplemen Muscle First telah melalui filtrasi sehingga menghasilkan kandungan yang berkualitas tinggi dan cepat diserap oleh tubuh.
                            </p></div></div></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative"}"><div class="${"flex flex-col space-y-4 justify-center items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto space-y-4 justify-start items-start"}"><span class="${"font-black text-lg uppercase text-white"}">Komposisi Terbaik</span></div>
                    <div class="${"flex flex-row w-full h-auto justify-start items-center space-y-2"}"><div class="${"flex flex-col w-full justify-start items-start space-y-2"}"><p class="${"leading-relaxed text-left text-md text-gray-100"}">Susu protein <span class="${"font-bold"}">MUSCLEFIRST</span> memiliki protein yang tinggi dan rendah lemak, sehingga bisa memenuhi kebutuhan protein harianmu.
                            </p></div></div></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative"}"><div class="${"flex flex-col space-y-4 justify-center items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto space-y-4 justify-start items-start"}"><span class="${"font-black text-lg uppercase text-white"}">Hemat Uang &amp; Waktu</span></div>
                    <div class="${"flex flex-row w-full h-auto justify-start items-center space-y-2"}"><div class="${"flex flex-col w-full justify-start items-start space-y-2"}"><p class="${"leading-relaxed text-left text-md text-gray-100"}">Susu whey <span class="${"font-bold"}">MUSCLEFIRST</span> mengandung 27 gram protein per serving hampir setara dengan 300 gram daging sapi tanpa lemak atau 135 gram ikan salmon mentah. MUSCLEFIRST menyajikan protein dalam bentuk bubuk sehingga mudah diolah tubuh.
                            </p></div></div></div></div></div></div></section>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { typeAgent } = $$props;
  let { urlAgentMainLogo } = $$props;
  let { title } = $$props;
  let { namaAgen } = $$props;
  let { agentName } = $$props;
  let { kontakAgen } = $$props;
  let { kontakAgenName } = $$props;
  let { descriptionAgen } = $$props;
  let { btnText } = $$props;
  let { tokopediaLink } = $$props;
  let { shopeeLink } = $$props;
  let { waLink } = $$props;
  let { listPickAgen } = $$props;
  if ($$props.typeAgent === void 0 && $$bindings.typeAgent && typeAgent !== void 0)
    $$bindings.typeAgent(typeAgent);
  if ($$props.urlAgentMainLogo === void 0 && $$bindings.urlAgentMainLogo && urlAgentMainLogo !== void 0)
    $$bindings.urlAgentMainLogo(urlAgentMainLogo);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.namaAgen === void 0 && $$bindings.namaAgen && namaAgen !== void 0)
    $$bindings.namaAgen(namaAgen);
  if ($$props.agentName === void 0 && $$bindings.agentName && agentName !== void 0)
    $$bindings.agentName(agentName);
  if ($$props.kontakAgen === void 0 && $$bindings.kontakAgen && kontakAgen !== void 0)
    $$bindings.kontakAgen(kontakAgen);
  if ($$props.kontakAgenName === void 0 && $$bindings.kontakAgenName && kontakAgenName !== void 0)
    $$bindings.kontakAgenName(kontakAgenName);
  if ($$props.descriptionAgen === void 0 && $$bindings.descriptionAgen && descriptionAgen !== void 0)
    $$bindings.descriptionAgen(descriptionAgen);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.tokopediaLink === void 0 && $$bindings.tokopediaLink && tokopediaLink !== void 0)
    $$bindings.tokopediaLink(tokopediaLink);
  if ($$props.shopeeLink === void 0 && $$bindings.shopeeLink && shopeeLink !== void 0)
    $$bindings.shopeeLink(shopeeLink);
  if ($$props.waLink === void 0 && $$bindings.waLink && waLink !== void 0)
    $$bindings.waLink(waLink);
  if ($$props.listPickAgen === void 0 && $$bindings.listPickAgen && listPickAgen !== void 0)
    $$bindings.listPickAgen(listPickAgen);
  return `<section class="${"flex flex-col w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-zinc-900 shadow border-b-4 border-zinc-800"}"><div class="${"flex w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-left"}"><h2 class="${"text-2xl md:text-3xl font-black font-blackttnorms text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(title)}</span></h2></div></div>
    <div class="${"grid grid-cols-12 gap-4 items-center w-full h-auto py-8 md:py-6 px-8 md:px-24 bg-black shadow border-b-4 border-yellow-200"}"><div class="${"col-span-full md:col-span-8 w-full h-auto px-0 md:px-0 py-4 md:py-8"}"><div class="${"order-last mb-6 space-y-6 md:mb-0 w-auto h-auto"}">${typeAgent ? `<div class="${"py-4 px-4 md:px-6 w-auto h-auto bg-transparent"}"><span class="${"font-black text-xl text-amber-200"}">Exclusive</span></div>` : `<div class="${"py-4 px-4 md:px-6 w-auto h-auto bg-transparent"}"><span class="${"font-black text-xl text-amber-200"}">Basic</span></div>`}
                <div class="${"flex flex-col md:flex-row items-center w-full h-auto"}"><div class="${"flex justify-center items-center w-full md:w-auto h-full bg-zinc-900 rounded-xl border border-yellow-200 mb-4 md:mb-0 p-4"}"><img class="${"w-40 h-auto"}"${add_attribute("src", LogoWhite, 0)} alt="${"Agent Logo"}"></div>
                    <div class="${"flex flex-col w-auto h-auto ml-4 md:ml-8"}"><h1 class="${"font-black text-white text-4xl md:text-5xl uppercase"}"><!-- HTML_TAG_START -->${namaAgen}<!-- HTML_TAG_END --></h1>
                        <address class="${"text-sm md:text-lg text-zinc-100"}">${escape(descriptionAgen)}</address>
                        
                        <div class="${"flex flex-col md:flex-row mt-4 md:mt-8"}"><div class="${"relative flex h-12 w-full items-center justify-center px-8 border"}"><span class="${"relative text-base font-semibold text-white dark:text-dark"}">${escape(kontakAgenName)}</span></div>
                            <a rel="${"noreferrer"}"${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"relative flex h-12 w-full items-center justify-center px-8 border"}"><span class="${"relative text-base font-semibold text-yellow-200"}">${escape(kontakAgen)}</span></a></div></div></div></div></div>
        <div class="${"col-span-full md:col-span-4 flex justify-end items-end w-full h-full px-0 md:px-0 py-4 md:py-8"}"><a rel="${"noreferrer"}"${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"flex justify-between items-center leading-none text-center uppercase bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl w-full md:w-64 py-4 px-6 md:mb-4"}"><span class="${"block text-xl font-black text-emerald-900"}">${escape(btnText)}</span> 
                <span><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}"></path><path d="${"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"}"></path></svg></span></a></div></div>
    <div class="${"flex flex-col w-full h-auto py-8 md:py-4 px-2 md:px-2"}">${listPickAgen ? `${each(listPickAgen, (pick) => {
    return `<div class="${"grid grid-cols-12 gap-4 items-center w-full h-auto py-8 md:py-6 px-8 md:px-24 bg-black shadow border-b-4 border-zinc-800"}"><div class="${"col-span-full md:col-span-8 w-full h-auto px-0 md:px-0 py-4 md:py-8"}"><div class="${"order-last mb-6 space-y-6 md:mb-0 w-auto h-auto"}"><div class="${"flex flex-col md:flex-row items-center w-full h-auto"}"><div class="${"flex justify-center items-center w-full md:w-auto h-full bg-zinc-900 rounded-xl border mb-4 md:mb-0 p-4"}"><img class="${"w-24 h-auto"}"${add_attribute("src", LogoWhite, 0)} alt="${"Musclefirst Logo"}"></div>
                        <div class="${"flex flex-col w-auto h-auto ml-4 md:ml-8"}"><h1 class="${"font-black text-white text-4xl md:text-4xl uppercase"}">${escape(pick.personName)}</h1>
                            <address class="${"text-sm md:text-lg text-zinc-100"}">${escape(pick.address ? pick.address : "")}</address>
                            
                            <div class="${"flex flex-col md:flex-row mt-4 md:mt-8"}"><div class="${"relative flex h-12 w-full items-center justify-center px-8 border"}"><span class="${"relative text-base font-semibold text-white dark:text-dark"}">${escape(pick.personName)}</span></div>
                                <a rel="${"noreferrer"}"${add_attribute("href", `https://wa.me/${pick.waNumber}/?text=${pick.waChatText}`, 0)} target="${"_blank"}" class="${"relative flex h-12 w-full items-center justify-center px-8 border"}"><span class="${"relative text-base font-semibold text-yellow-500"}">${escape(pick.waNumber)}</span>
                                </a></div>
                        </div></div>
                </div></div>
            <div class="${"col-span-full md:col-span-4 flex justify-end items-end w-full h-full px-0 md:px-0 py-4 md:py-8"}"><a rel="${"noreferrer"}"${add_attribute("href", `https://wa.me/${pick.waNumber}/?text=${pick.waChatText}`, 0)} target="${"_blank"}" class="${"flex justify-between items-center leading-none text-center uppercase bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl w-full md:w-64 py-4 px-6 md:mb-4"}"><span class="${"block text-xl font-black text-emerald-900"}">${escape(btnText)}</span> 
                    <span><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}"></path><path d="${"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"}"></path></svg></span>
                </a></div>
        </div>`;
  })}` : ``}</div>
    <div class="${"flex flex-col w-full h-auto py-8 md:py-4 px-8 md:px-24"}"><div class="${"grid grid-cols-4 gap-4 w-full h-full pb-0 px-0 md:px-0"}">${each(productList, (val) => {
    return `<div class="${"col-span-2 md:col-span-1 flex flex-col snap-center w-full h-full rounded-xl shadow-xl"}"><div class="${"relative w-full h-full"}"><a${add_attribute("id", val.id, 0)}${add_attribute("href", `/${val.linkHref}`, 0)}><img loading="${"lazy"}"${add_attribute("src", val.imgUrl, 0)}${add_attribute("width", 450, 0)}${add_attribute("height", 450, 0)}${add_attribute("alt", val.imgAlt, 0)} style="${"margin: 0px"}" class="${"shadow-lg rounded-t-xl " + escape(
      val.productVarian === "white" ? "shadow-white" : "shadow-black",
      true
    ) + " mx-auto w-full h-full overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"}"></a></div>
                <div class="${"flex flex-col w-full h-auto p-0 border " + escape(
      val.productVarian === "white" ? "border-zinc-50" : "border-zinc-900",
      true
    ) + " rounded-b-xl"}"><a${add_attribute("id", val.id, 0)}${add_attribute("href", `/${val.linkHref}`, 0)} class="${"flex justify-between items-center w-full h-auto py-4 px-4 " + escape(
      val.productVarian === "white" ? "bg-white shadow-white border-zinc-50" : "bg-black shadow-black border-zinc-900",
      true
    )}"><span class="${"text-xs uppercase font-black font-blackttnorms " + escape(
      val.productVarian === "white" ? "text-black" : "text-white",
      true
    )}">${escape(val.name)}</span>
                    </a></div>
            </div>`;
  })}</div></div></section>`;
});
const BAReviewOne = "/_app/immutable/assets/ba-rvg-1-a3409220.webp";
const BAReviewTwo = "/_app/immutable/assets/ba-rvg-2-bc50fe04.webp";
const BAReviewThree = "/_app/immutable/assets/ba-rvg-3-9931c15c.webp";
const BAReviewSeven = "/_app/immutable/assets/ba-rvg-7-6fa7f41e.webp";
const SectionFive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<section class="${"flex flex-col justify-start items-center w-full h-auto py-12 md:py-16 bg-black relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-center md:text-left px-8 md:px-24"}"><span class="${"font-bankghotic text-amber-600 font-bold text-2xl md:text-3xl uppercase"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-100 leading-none max-w-xs"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        <div class="${"grid grid-cols-2 gap-4 md:gap-8 w-full h-auto px-8 md:px-24"}"><div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent p-0"}"><div class="${"w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto"}"><div class="${"grid md:grid-cols-5"}"><img${add_attribute("src", BAReviewOne, 0)} class="${"md:col-span-2 h-full w-full rounded-2xl object-cover"}" alt="${"KOL"}" width="${"640"}" height="${"422"}" loading="${"lazy"}">
                        <div class="${"md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100"}"><p class="${"text-sm"}"><span class="${"font-serif"}">&quot;</span> 
                                    Sejak menemukan suplemen musclefirst ini ke dalam rutinitas pasca-latihan, aku melihat peningkatan yang signifikan dalam pemulihan dan pertumbuhan otot. Tidak hanya itu rasanya enak. akhirnya aku bisa mengatakan bahwa suplemen protein dari musclefirst sempurna!
                                <span class="${"font-serif"}">&quot;</span></p></div></div></div></div>
            
            <div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent p-0"}"><div class="${"w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto"}"><div class="${"grid md:grid-cols-5"}"><img${add_attribute("src", BAReviewTwo, 0)} class="${"md:col-span-2 h-full w-full rounded-2xl object-cover"}" alt="${"KOL"}" width="${"640"}" height="${"422"}" loading="${"lazy"}">
                        <div class="${"md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100"}"><p class="${"text-sm"}"><span class="${"font-serif"}">&quot;</span> 
                                Sebagai seseorang dengan jadwal kerja yang padat, saya sering kesulitan menemukan waktu untuk menyiapkan makanan seimbang. Suplemen protein ini telah menjadi terobosan bagi saya.
                            <span class="${"font-serif"}">&quot;</span></p></div></div></div></div>
            
            <div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent p-0"}"><div class="${"w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto"}"><div class="${"grid md:grid-cols-5"}"><img${add_attribute("src", BAReviewThree, 0)} class="${"md:col-span-2 h-full w-full rounded-2xl object-cover"}" alt="${"KOL"}" width="${"640"}" height="${"422"}" loading="${"lazy"}">
                        <div class="${"md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100"}"><p class="${"text-sm"}"><span class="${"font-serif"}">&quot;</span> 
                                Menemukan suplemen protein berkualitas telah menjadi tantangan bagi saya. Produk ini telah melampaui ekspektasi saya. Sumber protein lengkap yang mendukung pemulihan otot.
                            <span class="${"font-serif"}">&quot;</span></p></div></div></div></div>
            
            <div class="${"col-span-full md:col-span-1 w-full h-auto bg-transparent p-0"}"><div class="${"w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto"}"><div class="${"grid md:grid-cols-5"}"><img${add_attribute("src", BAReviewSeven, 0)} class="${"md:col-span-2 h-full w-full rounded-2xl object-cover"}" alt="${"KOL"}" width="${"640"}" height="${"422"}" loading="${"lazy"}">
                        <div class="${"md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100"}"><p class="${"text-sm"}"><span class="${"font-serif"}">&quot;</span> 
                                Saya telah menjalani perjalanan penurunan berat badan selama setahun terakhir, dan suplemen protein ini telah menjadi bagian penting dari kesuksesan saya.
                            <span class="${"font-serif"}">&quot;</span></p></div></div></div></div></div></div>
        
    </section>`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<section class="${"flex flex-col justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-900 relative overflow-hidden"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto z-0 px-4 md:px-24"}"><span class="${"font-black text-sm text-white"}">Certified Label</span>
        <div class="${"flex justify-center items-center space-x-4 w-auto h-auto"}"><div class="${"grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2"}">${each(certifiedCardList, (list) => {
    return `<div class="${"col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span></div>
                </div>`;
  })}</div></div></div></section>`;
});
export {
  SectionOne as S,
  SectionFour as a,
  SectionThree as b,
  SectionCertified as c,
  SectionTwo as d,
  SectionFive as e
};
