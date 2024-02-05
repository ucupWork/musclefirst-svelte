import { c as create_ssr_component, e as escape, a as add_attribute, d as each, b as subscribe, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
/* empty css                                                                              */import { k as shopeepromo, n as globalpromo, j as modal } from "../../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
/* empty css                                                                               */import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-ca5808f6.js";
import { C as CrownImage } from "../../../../_app/immutable/chunks/crown-f3b9967b.js";
import { I as Index } from "../../../../_app/immutable/chunks/Index-1d60b221.js";
import { M as Main } from "../../../../_app/immutable/chunks/Main-446527e8.js";
import "../../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const Icon1 = "/_app/immutable/assets/icon-01-cdb05a23.png";
const Icon2 = "/_app/immutable/assets/icon-02-37ef4e89.png";
const Icon3 = "/_app/immutable/assets/icon-03-8c5ab71f.png";
const Rasa1 = "/_app/immutable/assets/rasa-5-7d283a56.png";
const cocokCardList = [
  {
    id: "1",
    title: "Rambut rontok dan mengalami penuaan dini",
    linkImg: Icon1,
    altImg: "Rambut rontok dan mengalami penuaan dini",
    txtDesc: "Rambut rontok dan mengalami penuaan dini"
  },
  {
    id: "2",
    title: "Sering mengalami nyeri sendi",
    linkImg: Icon2,
    altImg: "Sering mengalami nyeri sendi",
    txtDesc: "Sering mengalami nyeri sendi"
  },
  {
    id: "3",
    title: "Selalu merasa lelah dan kurang stamina",
    linkImg: Icon3,
    altImg: "Selalu merasa lelah dan kurang stamina",
    txtDesc: "Selalu merasa lelah dan kurang stamina"
  }
];
const rasaList = [
  {
    id: "1",
    title: "Mix Berry",
    linkImg: Rasa1,
    altImg: "RasaSatu"
  }
];
const manfaatList = [
  {
    id: "1",
    title: "Marine Collagen Tripeptide",
    txtDesc: '<span class="font-bold">Pro Collafit</span> Bentuk kolagen dari hewan laut yang tinggi protein dan mudah diserap oleh tubuh dibandingkan dengan kolagen hewan lainnya.'
  },
  {
    id: "2",
    title: " L-Glutathione Japan",
    txtDesc: "Berkualitas terbaik dengan kemurnian tinggi yang membantu dalam peningkatan sistem kekebalan imun, melindungi sel dari kerusakan akibat radikal bebas, dan memperbaiki kualitas kulit."
  },
  {
    id: "3",
    title: "Pemanis Alami",
    txtDesc: "Menggunakan pemanis alami dari sukrosa atau gula tebu yang memiliki sedikit kalori, sehingga relatif aman untuk penderita diabetes dan kesehatan gigi."
  },
  {
    id: "4",
    title: "Memiliki Banyak Manfaat",
    txtDesc: '<span class="font-bold">Pro Collafit</span> mampu menjaga elastisitas kulit, menyamarkan stretch mark, menyamarkan bekas luka atau jerawat, menjaga penuaan dini, menyehatkan rambut.'
  },
  {
    id: "5",
    title: "Cocok Untuk Semua",
    txtDesc: "Mulai dari athlete, binaraga, olahragawan, emak emak, bapak bapak, pokoknya semua yang ingin mendaptakan kebutuhan kolagen yang cukup."
  },
  {
    id: "6",
    title: "Bebas Lemak",
    txtDesc: 'Buat yang mau diet tapi ingin tetap menjaga kesehatan kulit, <span class="font-bold">Pro Collafit</span> bebas lemak dan rendah kalori.'
  },
  {
    id: "7",
    title: "Harga Terjangkau",
    txtDesc: 'Dengan kualitas yang juara, <span class="font-bold">Pro Collafit</span> ini bisa kalian beli dengan harga yang sangat terjangkau.'
  },
  {
    id: "8",
    title: "HALAL DAN BPOM",
    txtDesc: 'Selain halal MUI dan BPOM, <span class="font-bold">MUSCLE FIRST</span> juga sudah bersertifikat GMP, HAACP, ISO 22000, dan berstandar internasional.'
  }
];
const testimonialCardList = [
  {
    id: "1",
    title: "Testimonial Review 1",
    altImg: "Testimonial 1"
  },
  {
    id: "2",
    title: "Testimonial Review 2",
    altImg: "Testimonial 2"
  },
  {
    id: "3",
    title: "Testimonial Review 3",
    altImg: "Testimonial 3"
  },
  {
    id: "4",
    title: "Testimonial Review 4",
    altImg: "Testimonial 4"
  }
];
const educationCardList = [
  {
    id: "1",
    title: "Education 1",
    txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> terbuat dari bahan utama marine collagen yang berasal dari kan yang pastinya halal, dan berguna untuk merawat kesehatan kulit.'
  },
  {
    id: "2",
    title: "Education 2",
    txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> adalah jenis <span class="text-pink-500 font-italic font-bold">kolagen tripeptide</span>, yang merupakan jenis dengan penyerapan terbaik dibandingkan <span class="text-pink-500 font-italic font-bold">kolagen hydrolized</span> dan <span class="text-pink-500 font-italic font-bold">kolagen peptide</span>.'
  },
  {
    id: "3",
    title: "Education 3",
    txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> mengandung <span class="text-pink-500 font-italic font-bold">L-Glutathione Japan</span> yang diproduksi dari jepang yang memiliki kemurnian dan kualitas tinggi'
  },
  {
    id: "4",
    title: "Education 4",
    txtDesc: '<span class="font-bold text-pink-500">Pro Collafit</span> memiliki vitamin C dan ekstrak buah yang meningkatkan efektivitas peningkatan imun tubuh dan juga kulit.'
  }
];
const SectionOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productName: productName2 } = $$props;
  let { pilihButton: pilihButton2 } = $$props;
  let { banner } = $$props;
  let { txtPenawaran } = $$props;
  let { classTxtPenawaran } = $$props;
  let { classTxtBtnOrder } = $$props;
  let { txtPembelian } = $$props;
  let { classTxtPembelian } = $$props;
  let { hargaAwal } = $$props;
  let { hargaAkhir } = $$props;
  let { persenPotongan } = $$props;
  let { bannerBawah } = $$props;
  let { waLink } = $$props;
  let { shopeeLink } = $$props;
  let { orderBtnText } = $$props;
  let { discountTag: discountTag2 } = $$props;
  let { disablePriceJumbotron: disablePriceJumbotron2 } = $$props;
  let { labelTxtPembelian: labelTxtPembelian2 } = $$props;
  let { hashtagText } = $$props;
  let { crownPin: crownPin2 } = $$props;
  if ($$props.productName === void 0 && $$bindings.productName && productName2 !== void 0)
    $$bindings.productName(productName2);
  if ($$props.pilihButton === void 0 && $$bindings.pilihButton && pilihButton2 !== void 0)
    $$bindings.pilihButton(pilihButton2);
  if ($$props.banner === void 0 && $$bindings.banner && banner !== void 0)
    $$bindings.banner(banner);
  if ($$props.txtPenawaran === void 0 && $$bindings.txtPenawaran && txtPenawaran !== void 0)
    $$bindings.txtPenawaran(txtPenawaran);
  if ($$props.classTxtPenawaran === void 0 && $$bindings.classTxtPenawaran && classTxtPenawaran !== void 0)
    $$bindings.classTxtPenawaran(classTxtPenawaran);
  if ($$props.classTxtBtnOrder === void 0 && $$bindings.classTxtBtnOrder && classTxtBtnOrder !== void 0)
    $$bindings.classTxtBtnOrder(classTxtBtnOrder);
  if ($$props.txtPembelian === void 0 && $$bindings.txtPembelian && txtPembelian !== void 0)
    $$bindings.txtPembelian(txtPembelian);
  if ($$props.classTxtPembelian === void 0 && $$bindings.classTxtPembelian && classTxtPembelian !== void 0)
    $$bindings.classTxtPembelian(classTxtPembelian);
  if ($$props.hargaAwal === void 0 && $$bindings.hargaAwal && hargaAwal !== void 0)
    $$bindings.hargaAwal(hargaAwal);
  if ($$props.hargaAkhir === void 0 && $$bindings.hargaAkhir && hargaAkhir !== void 0)
    $$bindings.hargaAkhir(hargaAkhir);
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
  if ($$props.discountTag === void 0 && $$bindings.discountTag && discountTag2 !== void 0)
    $$bindings.discountTag(discountTag2);
  if ($$props.disablePriceJumbotron === void 0 && $$bindings.disablePriceJumbotron && disablePriceJumbotron2 !== void 0)
    $$bindings.disablePriceJumbotron(disablePriceJumbotron2);
  if ($$props.labelTxtPembelian === void 0 && $$bindings.labelTxtPembelian && labelTxtPembelian2 !== void 0)
    $$bindings.labelTxtPembelian(labelTxtPembelian2);
  if ($$props.hashtagText === void 0 && $$bindings.hashtagText && hashtagText !== void 0)
    $$bindings.hashtagText(hashtagText);
  if ($$props.crownPin === void 0 && $$bindings.crownPin && crownPin2 !== void 0)
    $$bindings.crownPin(crownPin2);
  return `<section class="${"w-full h-auto md:h-screen overflow-hidden relative"}"><div class="${"grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900"}" style="${"background-image: url(" + escape(banner, true) + ");"}"><div class="${"col-span-full w-full h-screen flex justify-center md:justify-start items-center md:items-center bg-transparent"}"><div class="${"flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-24 relative"}"><div class="${"flex flex-col md:flex-row w-full h-auto justify-center items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"flex flex-col space-y-2 w-full h-auto"}"><div class="${"flex flex-col w-full h-auto max-w-xl"}">${crownPin2 ? `<span class="${"font-bold uppercase text-rose-800"}"><img class="${"w-16 h-auto"}"${add_attribute("src", CrownImage, 0)} alt="${"Musclefirst Crown"}"></span>` : ``}

                            ${hashtagText ? `<span class="${"font-bold uppercase text-2xl text-pink-400"}">${escape(hashtagText)}</span>` : ``}
                            <span class="${"uppercase font-extrabold " + escape(classTxtPenawaran, true) + " text-5xl md:text-6xl leading-none tracking-tight"}">${escape(txtPenawaran)}</span>
                            ${labelTxtPembelian2 ? `<h2 class="${escape(classTxtPembelian, true) + " text-xl md:text-2xl leading-none border border-pink-500 p-2"}"><span class="${"block uppercase"}">${escape(txtPembelian)}</span></h2>` : ``}</div>
                        ${disablePriceJumbotron2 ? `<div class="${"flex flex-row w-auto h-auto justify-center items-center space-y-2 md:space-y-0 space-x-2 md:space-x-2"}"><span class="${"leading-none font-black text-xl md:text-4xl text-rose-400 line-through tracking-tighter"}">${escape(hargaAwal)}</span>
                            <span class="${"leading-none font-extrabold text-4xl md:text-6xl text-pink-500 tracking-tighter"}">${escape(hargaAkhir)}</span></div>` : ``}</div>
                    
                    ${discountTag2 ? `<div class="${"flex justify-center items-center space-x-2 w-auto h-auto rounded-xl p-4 bg-gradient-to-r from-rose-200 to-pink-500 shadow-lg shadow-rose-400/50"}"><span class="${"font-black text-6xl md:text-8xl text-white"}">${escape(persenPotongan)}</span>
                        <div class="${"flex flex-col w-auto h-auto"}"><span class="${"font-black text-2xl md:text-4xl text-white"}">%</span>
                            <span class="${"font-black text-2xl md:text-4xl text-white"}">OFF</span></div></div>` : ``}</div>
                <div class="${"hidden md:flex flex-col md:flex-row md:space-x-4 w-full " + escape(pilihButton2 == 1 ? "max-w-xl" : "max-w-2xl", true)}">${pilihButton2 == 1 ? `<button class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"text-xl uppercase font-black text-white"}">${escape(orderBtnText)}</span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"w-auto"}"><div class="${"i-ph:caret-right text-white"}"></div></span></div></button>` : `${pilihButton2 == 2 ? `<a rel="${"noreferrer"}"${add_attribute("href", waLink, 0)} target="${"_blank"}" class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-8 md:w-12 h-8 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"uppercase font-black text-white"}">Order Via <br> Whatsapp</span>
                            <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></a>
                    
                    <a rel="${"noreferrer"}"${add_attribute("href", shopeeLink, 0)} target="${"_blank"}" class="${"cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-8 md:w-12 h-8 md:h-12 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></div>
                        <div class="${"flex flex-row justify-center items-center space-x-4 w-auto h-auto"}"><span class="${"uppercase font-black text-white"}">Order Via <br> Shopee</span>
                            <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></a>` : `<button class="${"cursor-pointer flex justify-center items-center w-auto h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8 rounded-full"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto"}"><span class="${"uppercase font-black " + escape(classTxtBtnOrder, true) + " text-2xl"}">${escape(orderBtnText)}</span>
                            <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${escape(classTxtBtnOrder, true) + " w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></button>`}`}</div></div></div></div>
    <div class="${"absolute inset-x-0 bottom-0 w-full p-2 h-auto md:h-8 bg-pink-500 hidden md:flex justify-start items-center md:px-24 shadow"}"><span class="${"uppercase font-thin text-white text-sm"}"><!-- HTML_TAG_START -->${bannerBawah}<!-- HTML_TAG_END --> 
            ${discountTag2 ? `/ ${escape(productName2)} <span class="${"font-bold text-zinc-800"}">DISCOUNT ${escape(persenPotongan)}%</span> LIMITED TIME.` : ``}</span></div>
    
    <div class="${"absolute inset-x-0 bottom-0 w-full h-auto"}"><div class="${"grid md:hidden grid-cols-2 gap-0 w-full"}"><button class="${"col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8"}"><div class="${"w-full h-auto rounded-full bg-gradient-to-r from-pink-600 to-rose-500"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8"}"><span class="${"uppercase font-black text-white text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></div></button></div></div></section>`;
});
const SectionTwo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subtitle } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { classTxtBtnOrder } = $$props;
  let { orderBtnText } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.classTxtBtnOrder === void 0 && $$bindings.classTxtBtnOrder && classTxtBtnOrder !== void 0)
    $$bindings.classTxtBtnOrder(classTxtBtnOrder);
  if ($$props.orderBtnText === void 0 && $$bindings.orderBtnText && orderBtnText !== void 0)
    $$bindings.orderBtnText(orderBtnText);
  return `<div class="${"w-full h-auto md:h-screen overflow-hidden"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto md:h-screen relative bg-center bg-cover bg-white py-16 md:py-0 md:px-16"}"><div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-start items-center md:px-8"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-zinc-900 font-black text-5xl md:text-6xl"}">${escape(title)}</h2>
                <span class="${"text-rose-500 font-bold text-2xl md:text-4xl"}">${escape(subtitle)}</span>
                <div class="${"flex flex-col w-full h-auto py-4 mt-4 md:mt-8 md:max-w-md"}"><p class="${"leading-relaxed text-base text-gray-700 md:text-lg"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div>
                <button class="${"cursor-pointer hidden md:flex justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-500/50 mt-4 md:mt-8 rounded-full"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto"}"><span class="${"uppercase font-black " + escape(classTxtBtnOrder, true) + " text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${escape(classTxtBtnOrder, true) + " w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></button></div></div>
        <div class="${"col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0"}"><picture><source${add_attribute("srcset", image, 0)} type="${"image/webp"}">
                    <img${add_attribute("src", image, 0)} class="${"w-full md:w-auto h-auto"}" alt="${"AboutImage"}"></picture>
                <button class="${"cursor-pointer flex md:hidden justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-500/50 mt-4 md:mt-8 rounded-full"}"><div class="${"flex flex-row justify-between items-center space-x-4 w-full h-auto"}"><span class="${"uppercase font-black " + escape(classTxtBtnOrder, true) + " text-lg"}">${escape(orderBtnText)}</span>
                        <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${escape(classTxtBtnOrder, true) + " w-4 h-4 bi bi-chevron-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg></span></div></button></div></div></div></div>`;
});
const SectionThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cocokCardList: cocokCardList2 } = $$props;
  let { gridCount } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { subTitlePin: subTitlePin2 } = $$props;
  if ($$props.cocokCardList === void 0 && $$bindings.cocokCardList && cocokCardList2 !== void 0)
    $$bindings.cocokCardList(cocokCardList2);
  if ($$props.gridCount === void 0 && $$bindings.gridCount && gridCount !== void 0)
    $$bindings.gridCount(gridCount);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.subTitlePin === void 0 && $$bindings.subTitlePin && subTitlePin2 !== void 0)
    $$bindings.subTitlePin(subTitlePin2);
  return `<div class="${"flex justify-start items-center w-full h-auto md:h-auto py-16 md:py-16 bg-zinc-300/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24"}">${subTitlePin2 ? `<span class="${"text-pink-600 font-bold text-2xl md:text-3xl"}">${escape(subtitle)}</span>` : ``}
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-900 leading-none max-w-xs"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        <div class="${"grid grid-cols-" + escape(gridCount, true) + " gap-2 w-full h-auto px-8 md:px-24"}">${each(cocokCardList2, (list) => {
    return `<div class="${"col-span-full md:col-span-1 w-full h-full bg-transparent"}"><div class="${"flex flex-col space-y-2 justify-center items-center w-full h-auto"}"><div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex justify-center items-center w-full h-aut md:h-64 border-b bg-gradient-to-b from-pink-300 to-pink-400 p-8 shadow"}"><div class="${"flex flex-col w-full justify-center items-center text-center"}">${list.linkImg ? `<span class="${"w-auto h-auto p-4 rounded-full shadow bg-white mb-4 md:mb-8"}"><img class="${"w-12 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                            </span>` : ``}
                            <h2 class="${"leading-none text-gray-900 text-center text-md font-medium uppercase"}">${escape(list.txtDesc)}</h2>
                        </div></div>
                    ${list.txtSubDesc ? `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"w-full h-auto border-b bg-white p-8 shadow"}"><div class="${"w-full h-full flex justify-center items-center"}"><p class="${"text-sm text-zinc-700 leading-relaxed"}"><!-- HTML_TAG_START -->${list.txtSubDesc}<!-- HTML_TAG_END -->
                                </p></div>
                    </div>` : ``}</div>
            </div>`;
  })}</div></div></div>`;
});
const SectionFour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rasaList: rasaList2 } = $$props;
  let { cocokCardOtherList } = $$props;
  let { productName: productName2 } = $$props;
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
  if ($$props.rasaList === void 0 && $$bindings.rasaList && rasaList2 !== void 0)
    $$bindings.rasaList(rasaList2);
  if ($$props.cocokCardOtherList === void 0 && $$bindings.cocokCardOtherList && cocokCardOtherList !== void 0)
    $$bindings.cocokCardOtherList(cocokCardOtherList);
  if ($$props.productName === void 0 && $$bindings.productName && productName2 !== void 0)
    $$bindings.productName(productName2);
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
  return `<div class="${"w-full h-auto md:h-screen bg-" + escape(bgColor, true) + " relative bg-cover bg-center bg-no-repeat"}" style="${"background-image: url(" + escape(bgImg, true) + ");"}"><div class="${"flex justify-end items-end w-full h-auto relative pb-16 md:pb-0 md:py-0 bg-pink-500 md:bg-transparent"}"><div class="${"absolute inset-x-0 top-0 md:top-4 w-full h-auto justify-center items-center z-10"}"><div class="${"hidden md:flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"w-auto h-auto py-4 md:py-8 max-w-sm text-center"}"><span class="${"block uppercase font-black text-" + escape(txtTitleColor, true) + " text-3xl md:text-6xl mb-1"}">${escape(productName2)}</span>
                    <span class="${"font-bankghotic block uppercase font-bold bg-zinc-50 text-zinc-900 text-xl md:text-2xl"}">Musclefirst</span></div></div></div>

        <div class="${"absolute inset-x-0 -bottom-4 md:-bottom-32 w-full h-auto justify-center items-center z-10"}"><div class="${"flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-8 md:px-16 py-8 md:py-4"}"><div class="${"flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto"}">${sizeTwo ? `<div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-50 to-gray-50 border-rose-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-3xl md:text-5xl text-black mt-2"}">${escape(sizeTwo)}</h2></div>` : ``}
                        ${sizeOne ? `<div class="${"rounded md:rounded-full w-full md:w-32 h-16 md:h-32 bg-gradient-to-r from-zinc-50 to-gray-50 border-rose-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-3xl text-black mt-2"}">${escape(sizeOne)}</h2></div>` : ``}</div></div></div></div>

        <div class="${"w-full h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-end md:items-center md:px-0 z-10 bg-transparent pb-10 md:pb-0 md:py-0"}"><div class="${"flex flex-col justify-center items-center w-full md:w-auto h-auto px-8 md:px-8 py-4 md:py-8 bg-transparent"}"><div class="${"flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4"}"><div class="${"flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-50 to-gray-50 border-rose-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-2xl md:text-4xl text-black mt-0"}">Rasa
                                </h2></div></div></div></div>
                <div class="${"flex flex-col justify-start items-start space-y-4 w-full h-auto bg-transparen rounded-xl px-0 md:px-8 py-4 md:py-8"}">${each(rasaList2, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto"}">${list.linkImg ? `<span class="${"w-auto h-auto rounded-xl md:rounded-full p-0 bg-white border border-pink-500 shadow-xl"}"><img class="${"w-16 md:w-24 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span>` : ``}
                        <div class="${"flex justify-center items-center w-full h-auto px-4 py-4 md:py-2 rounded-xl md:rounded-full bg-white border border-rose-200"}"><h2 class="${"leading-none font-bold text-zinc-900 text-md md:text-md mt-0"}"><!-- HTML_TAG_START -->${list.title}<!-- HTML_TAG_END -->
                            </h2></div>
                    </div>`;
  })}</div></div>
            <div class="${"flex flex-col w-auto h-auto px-8 md:px-8 py-2 md:py-8 bg-transparent"}"><div class="${"flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-2 md:py-8"}"><div class="${"flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4"}"><div class="${"flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-50 to-gray-50 border-rose-200 shadow-lg flex justify-center items-center"}"><h2 class="${"leading-none font-black text-2xl md:text-4xl text-black mt-0"}">Cocok Untuk
                                </h2></div></div></div></div>
                <div class="${"flex flex-col justify-end items-end space-y-4 w-full h-auto bg-transparent rounded-xl px-0 md:px-8 py-8 md:py-8 md:max-w-sm"}">${each(cocokCardOtherList, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"flex flex-row space-x-2 justify-center items-center w-full md:w-auto h-auto"}"><div class="${"flex justify-center items-center w-full md:w-auto h-auto px-8 py-4 rounded-xl md:rounded-full bg-white border border-rose-200"}"><h2 class="${"leading-none font-medium text-zinc-900 text-sm mt-0 uppercase"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                            </h2></div>
                        <span class="${"w-auto h-auto rounded-xl md:rounded-full p-4 bg-white border border-pink-500 shadow-xl"}"><div class="${"i-ph:check-circle text-emerald-500 w-8 h-8"}"></div></span>
                    </div>`;
  })}</div></div></div></div></div>`;
});
const SectionFive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { btnText } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  return `<div class="${"w-full h-auto"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-gradient-to-r from-pink-500 to-rose-300 shadow border-b-4"}"><div class="${"flex w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-left"}"><h2 class="${"text-2xl md:text-3xl font-black text-white leading-none text-left"}"><span class="${"block uppercase text-white"}">${escape(title)}</span></h2></div>
        <div class="${"flex w-full md:w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-center"}"><button type="${"button"}" class="${"flex justify-between items-center leading-none text-center uppercase bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span> 
                <span><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"w-4 h-4 fill-current text-white bi bi-basket-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"}"></path></svg></span></button></div></div></div>`;
});
const SectionSix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { manfaatList: manfaatList2 } = $$props;
  let { subtitle } = $$props;
  let { title } = $$props;
  if ($$props.manfaatList === void 0 && $$bindings.manfaatList && manfaatList2 !== void 0)
    $$bindings.manfaatList(manfaatList2);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"flex justify-center items-center w-full h-auto py-16 md:py-16 bg-white relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-start z-0"}"><div class="${"flex flex-col w-auto h-auto pb-4 md:pb-8 text-start px-8 md:px-24"}"><span class="${"text-pink-600 font-bold text-2xl md:text-3xl"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-gray-900 leading-none text-start max-w-md"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2></div>
        <div class="${"grid grid-cols-4 gap-2 md:gap-4 w-full h-auto px-8 md:px-24"}">${each(manfaatList2, (list) => {
    return `<div class="${"col-span-full md:col-span-1 w-full h-80 bg-white hover:bg-zinc-300/50 border rounded-xl shadow p-6 md:p-8 relative"}"><div class="${"flex flex-col space-y-4 justify-center items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto space-y-4 justify-start items-start"}">${list.linkImg ? `<span class="${"w-auto h-auto p-4 rounded-full bg-white shadow border"}"><img class="${"w-8 h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                        </span>` : ``}
                        <span class="${"font-black text-lg uppercase text-gray-900"}">${escape(list.title)}</span></div>
                    <div class="${"flex flex-row w-full h-auto justify-start items-center space-y-2"}"><div class="${"flex flex-col w-full justify-start items-start space-y-2"}"><p class="${"leading-relaxed text-left text-sm text-gray-700"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END -->
                            </p></div>
                    </div></div>
            </div>`;
  })}</div></div></div>`;
});
const SectionNine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $shopeepromo, $$unsubscribe_shopeepromo;
  let $globalpromo, $$unsubscribe_globalpromo;
  $$unsubscribe_shopeepromo = subscribe(shopeepromo, (value) => $shopeepromo = value);
  $$unsubscribe_globalpromo = subscribe(globalpromo, (value) => $globalpromo = value);
  let { classWa } = $$props;
  let { classShopee } = $$props;
  let { subtitle } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { linkShopee } = $$props;
  let { linkWhatsapp } = $$props;
  let { orderButton: orderButton2 } = $$props;
  let { linkOrderOnline } = $$props;
  if ($$props.classWa === void 0 && $$bindings.classWa && classWa !== void 0)
    $$bindings.classWa(classWa);
  if ($$props.classShopee === void 0 && $$bindings.classShopee && classShopee !== void 0)
    $$bindings.classShopee(classShopee);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.linkShopee === void 0 && $$bindings.linkShopee && linkShopee !== void 0)
    $$bindings.linkShopee(linkShopee);
  if ($$props.linkWhatsapp === void 0 && $$bindings.linkWhatsapp && linkWhatsapp !== void 0)
    $$bindings.linkWhatsapp(linkWhatsapp);
  if ($$props.orderButton === void 0 && $$bindings.orderButton && orderButton2 !== void 0)
    $$bindings.orderButton(orderButton2);
  if ($$props.linkOrderOnline === void 0 && $$bindings.linkOrderOnline && linkOrderOnline !== void 0)
    $$bindings.linkOrderOnline(linkOrderOnline);
  $$unsubscribe_shopeepromo();
  $$unsubscribe_globalpromo();
  return `<div class="${"flex justify-center items-center w-full h-auto md:h-screen py-16 md:py-16 bg-gray-200/50 relative overflow-hidden"}"><div id="${"get-product"}" class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-pink-600 font-bold text-xl uppercase"}">${escape(subtitle)}</span>
            <h2 class="${"text-6xl font-black text-zinc-900 leading-none text-center"}"><span class="${"block uppercase max-w-3xl"}">${escape(title)}</span></h2></div>
        <div class="${"flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-2 md:mt-0"}"><p class="${"text-xl text-gray-600 leading-relaxed max-w-xl"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div>
                
        <div class="${"flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 px-8 md:px-0 py-4 md:py-8 text-center"}">${$shopeepromo ? `<a rel="${"noreferrer"}"${add_attribute("href", linkShopee, 0)} target="${"_blank"}" class="${escape(classShopee, true) + " flex justify-start md:justify-center items-center leading-none text-center bg-pink-500 w-full md:w-auto border shadow-lg shadow-pink-500/50 py-4 px-8 md:px-8 rounded-xl md:rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" class="${"w-8 h-8 fill-current text-white"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 50 50"}" style="${"fill:#undefined;"}"><path d="${"M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"}"></path></svg></span></div>
                <span class="${"block text-lg md:text-xl font-black text-white"}">Order Via Shopee</span></a>` : ``}
            ${$globalpromo ? `<a rel="${"noreferrer"}"${add_attribute("href", linkWhatsapp, 0)} target="${"_blank"}" class="${escape(classWa, true) + " flex justify-start md:justify-center items-center leading-none text-center bg-pink-500 w-full md:w-auto border shadow-lg shadow-pink-500/50 py-4 px-8 md:px-8 rounded-xl md:rounded-full"}"><div class="${"w-auto h-auto mr-4"}"><span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-8 h-8 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg></span></div>
                <span class="${"block text-lg md:text-xl font-black text-white"}">Order Via Whatsapp</span></a>` : ``}</div>
        ${orderButton2 ? `<div class="${"flex justify-center items-center w-full h-auto px-8 md:px-0"}"><a rel="${"noreferrer"}"${add_attribute("href", linkOrderOnline, 0)} target="${"_blank"}" class="${"flex justify-center items-center uppercase leading-none text-center bg-zinc-800 w-full md:w-64 border-2 border-pink-500 shadow-lg shadow-pink-500/50 py-4 px-6"}"><span class="${"block text-xl font-black text-white"}">Beli Sekarang</span></a></div>` : ``}</div></div>`;
});
const SectionTen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-900 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center px-2 md:px-4 z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center"}"><span class="${"text-pink-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl"}">${escape(subtitle)}</span>
                <h2 class="${"text-3xl md:text-4xl font-black text-white leading-none text-center"}"><span class="${"block uppercase max-w-sm"}">${escape(title)}</span></h2></div></div>
        ${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "pink",
      top: true,
      bottom: false,
      id: "list-agent",
      classes: "bg-zinc-900"
    },
    {},
    {}
  )}</div></section>`;
});
const SectionEleven = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonialCardList: testimonialCardList2 } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { type } = $$props;
  if ($$props.testimonialCardList === void 0 && $$bindings.testimonialCardList && testimonialCardList2 !== void 0)
    $$bindings.testimonialCardList(testimonialCardList2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${"flex justify-start items-center w-full h-auto py-12 md:py-16 bg-zinc-300/50 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex flex-col w-full h-auto pb-4 md:pb-8 text-center md:text-left px-8 md:px-24"}"><span class="${"text-pink-600 font-bold text-2xl md:text-3xl uppercase"}">${escape(subtitle)}</span>
            <h2 class="${"text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs"}"><span class="${"block uppercase"}">${escape(title)}</span></h2></div>
        ${type === "testimonial-text" ? `<div class="${"grid grid-cols-3 gap-2 w-full h-auto px-8 md:px-24"}"><div class="${"col-span-full md:col-span-1 w-full h-auto"}"><div class="${"flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative"}"><div class="${"flex flex-col w-full h-auto p-4"}"><p class="${"text-sm text-zinc-900 mb-4"}"><span class="${"font-serif"}">&quot;</span> Saya telah mengonsumsi Pro Collafit ini selama sebulan dan hasilnya sangat menakjubkan. Kulit saya terlihat lebih kenyal dan lembap, dan kerutan di wajah saya mulai berkurang. Saya juga merasakan kuku dan rambut saya lebih kuat dan sehat. Saya sangat merekomendasikan produk Muscle First ini kepada siapa saja yang ingin merawat kecantikan dari dalam tubuh.
                            <span class="${"font-serif"}">&quot;</span></p></div>
                    <div class="${"absolute -right-4 -bottom-4 w-auto h-auto z-10"}"><div class="${"flex w-20 h-20 justify-center items-center mx-auto rounded-full"}"><div aria-hidden="${"true"}" class="${"md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]"}"></div></div></div></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto"}"><div class="${"flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative"}"><div class="${"flex flex-col w-full h-auto p-4"}"><p class="${"text-sm text-zinc-900 mb-4"}"><span class="${"font-serif"}">&quot;</span> Atas rekomendasi teman, saya mencoba Pro Collafit ini dan saya sangat senang dengan hasilnya. Selama beberapa minggu, kulit saya terlihat lebih cerah dan segar, dan saya merasakan sendi saya lebih fleksibel dan tidak kaku seperti sebelumnya. Rasanya juga enak dan mudah dicerna, jadi saya merasa nyaman mengonsumsinya setiap hari.
                            <span class="${"font-serif"}">&quot;</span></p></div>
                    <div class="${"absolute -right-4 -bottom-4 w-auto h-auto z-10"}"><div class="${"flex w-20 h-20 justify-center items-center mx-auto rounded-full"}"><div aria-hidden="${"true"}" class="${"md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]"}"></div></div></div></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto"}"><div class="${"flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative"}"><div class="${"flex flex-col w-full h-auto p-4"}"><p class="${"text-sm text-zinc-900 mb-4"}"><span class="${"font-serif"}">&quot;</span> Saya mencari produk kolagen yang berkualitas dan alami, dan Pro Collafit ini memenuhi semua kriteria saya. Setelah mengonsumsinya selama sebulan, kulit saya terlihat lebih kenyal dan terhidrasi, dan rambut saya lebih berkilau dan tidak mudah rontok. Saya sangat puas dengan hasilnya dan akan terus mengonsumsinya sebagai bagian dari rutinitas kecantikan saya.
                            <span class="${"font-serif"}">&quot;</span></p></div>
                    <div class="${"absolute -right-4 -bottom-4 w-auto h-auto z-10"}"><div class="${"flex w-20 h-20 justify-center items-center mx-auto rounded-full"}"><div aria-hidden="${"true"}" class="${"md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]"}"></div></div></div></div></div></div>` : `<div class="${"grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24"}">${each(testimonialCardList2, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-1 w-full h-auto border-b bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full h-auto"}"${add_attribute("src", list.linkImg, 0)}${add_attribute("alt", list.altImg, 0)}>
                    </span></div>
            </div>`;
  })}</div>`}</div></div>`;
});
const SectionTwelve = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { educationCardList: educationCardList2 } = $$props;
  let { id } = $$props;
  let { pinLogo: pinLogo2 } = $$props;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { titlePart } = $$props;
  let { image } = $$props;
  if ($$props.educationCardList === void 0 && $$bindings.educationCardList && educationCardList2 !== void 0)
    $$bindings.educationCardList(educationCardList2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.pinLogo === void 0 && $$bindings.pinLogo && pinLogo2 !== void 0)
    $$bindings.pinLogo(pinLogo2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.titlePart === void 0 && $$bindings.titlePart && titlePart !== void 0)
    $$bindings.titlePart(titlePart);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div${add_attribute("id", id, 0)} class="${"flex justify-center items-center w-full h-auto md:h-screen overflow-hidden bg-white border-b-4 border-zinc-200"}"><div class="${"grid grid-cols-12 gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-white py-16 md:py-16 md:px-16"}"><div class="${"col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-rose-400 font-black text-2xl md:text-4xl"}">${escape(title)}</h2>
                <span class="${"text-zinc-800 font-black text-4xl md:text-5xl uppercase"}">${escape(subtitle)}</span></div>
            <div class="${"flex flex-col w-auto h-auto px-8 md:px-0 text-left"}"><h2 class="${"text-zinc-500 font-black text-3xl md:text-4xl"}">${escape(titlePart)}</h2></div></div>
        <div class="${"col-span-full md:col-span-4 w-full h-auto flex justify-center md:justify-end items-center mb-8 md:mb-0"}"><div class="${"flex flex-col justify-center items-center w-auto h-auto p-4 md:p-0 rounded bg-gradient-to-t from-pink-600 to-rose-400/50 shadow-xl border-2 border-gray-200"}"><picture><source${add_attribute("srcset", image, 0)} type="${"image/webp"}">
                    <img${add_attribute("src", image, 0)} class="${"w-full md:w-auto h-auto object-contain object-center"}" alt="${"AboutImage"}"></picture></div></div>
        <div class="${"col-span-full md:col-span-8 w-full h-auto flex justify-center md:justify-end items-center"}"><div class="${"grid grid-cols-4 gap-4 md:gap-8 w-auto justify-center items-center md:items-end h-auto px-8 space-y-4 md:px-0"}">${each(educationCardList2, (list) => {
    return `<div id="${escape(list.title, true) + "_" + escape(list.id, true)}" class="${"col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-50 shadow rounded-xl border p-4 md:p-6 relative"}"><div class="${"absolute -top-4 -right-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-gradient-to-r from-pink-400 to-rose-400 shadow border rounded-full w-12 h-12"}">${pinLogo2 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white bi bi-lightbulb-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"}"></path></svg>` : `<span class="${"font-black text-white"}">${escape(list.id)}</span>`}
                        </div></div>

                    <p class="${"leading-relaxed text-base text-gray-800 md:text-lg"}"><!-- HTML_TAG_START -->${list.txtDesc}<!-- HTML_TAG_END --></p>
                </div>`;
  })}</div></div></div></div>`;
});
const SectionThirteen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitleOne } = $$props;
  let { titleOne } = $$props;
  let { subtitleTwo } = $$props;
  let { titleTwo } = $$props;
  let { btnText } = $$props;
  let { descText } = $$props;
  if ($$props.subtitleOne === void 0 && $$bindings.subtitleOne && subtitleOne !== void 0)
    $$bindings.subtitleOne(subtitleOne);
  if ($$props.titleOne === void 0 && $$bindings.titleOne && titleOne !== void 0)
    $$bindings.titleOne(titleOne);
  if ($$props.subtitleTwo === void 0 && $$bindings.subtitleTwo && subtitleTwo !== void 0)
    $$bindings.subtitleTwo(subtitleTwo);
  if ($$props.titleTwo === void 0 && $$bindings.titleTwo && titleTwo !== void 0)
    $$bindings.titleTwo(titleTwo);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.descText === void 0 && $$bindings.descText && descText !== void 0)
    $$bindings.descText(descText);
  return `<div class="${"flex justify-center items-center w-full h-auto md:h-screen bg-white relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0 py-8 md:py-16 px-4 md:px-32"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-start items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left"}"><span class="${"font-black text-2xl md:text-3xl uppercase text-zinc-400"}">${escape(subtitleOne)}</span>
                    <h2 class="${"text-4xl md:text-6xl font-black text-black tracking-none leading-none text-center md:text-left mb-8 md:mb-16"}"><!-- HTML_TAG_START -->${titleOne}<!-- HTML_TAG_END --></h2>
                    <p class="${"leading-none text-2xl text-center md:text-left text-black w-full border shadow-lg py-3 md:py-3 px-6"}"><!-- HTML_TAG_START -->${descText}<!-- HTML_TAG_END --></p></div></div>
            <div class="${"col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-end items-center"}"><div class="${"flex flex-col w-full md:w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left"}"><span class="${"font-black text-2xl md:text-3xl uppercase text-zinc-500"}">${escape(subtitleTwo)}</span>
                    <h2 class="${"text-4xl md:text-6xl font-black text-black tracking-none leading-none text-center md:text-left mb-8 md:mb-16"}"><!-- HTML_TAG_START -->${titleTwo}<!-- HTML_TAG_END --></h2>
                    <button type="${"button"}" class="${"flex justify-center items-center leading-none text-center bg-gradient-to-r from-pink-500 to-rose-400 w-full border shadow-lg py-3 md:py-3 px-6"}"><span class="${"block text-xl font-black text-white"}">${escape(btnText)}</span></button></div></div></div></div></div>`;
});
const SectionCertified = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { certifiedCardList } = $$props;
  if ($$props.certifiedCardList === void 0 && $$bindings.certifiedCardList && certifiedCardList !== void 0)
    $$bindings.certifiedCardList(certifiedCardList);
  return `<div class="${"w-full h-auto bg-zinc-400/50"}"><div class="${"flex justify-start items-center w-full h-auto py-4 md:py-8 bg-transparent relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-start items-center z-0"}"><div class="${"flex justify-center items-center space-x-4 w-full h-auto"}"><div class="${"grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2"}">${each(certifiedCardList, (list) => {
    return `<div class="${"col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0"}"><div class="${"flex flex-col w-full justify-center items-center text-center space-y-4"}"><span class="${"w-full h-auto p-4 rounded-xl shadow bg-white"}"><img class="${"w-full md:w-32 h-auto rounded-xl"}"${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.altImg, 0)}>
                            </span></div>
                    </div>`;
  })}</div></div></div></div></div>`;
});
const SectionDisclaimer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitleOne } = $$props;
  let { titleOne } = $$props;
  let { descTextOne } = $$props;
  let { descTextTwo } = $$props;
  let { descTextThree } = $$props;
  if ($$props.subtitleOne === void 0 && $$bindings.subtitleOne && subtitleOne !== void 0)
    $$bindings.subtitleOne(subtitleOne);
  if ($$props.titleOne === void 0 && $$bindings.titleOne && titleOne !== void 0)
    $$bindings.titleOne(titleOne);
  if ($$props.descTextOne === void 0 && $$bindings.descTextOne && descTextOne !== void 0)
    $$bindings.descTextOne(descTextOne);
  if ($$props.descTextTwo === void 0 && $$bindings.descTextTwo && descTextTwo !== void 0)
    $$bindings.descTextTwo(descTextTwo);
  if ($$props.descTextThree === void 0 && $$bindings.descTextThree && descTextThree !== void 0)
    $$bindings.descTextThree(descTextThree);
  return `<div class="${"flex justify-center items-start w-full h-auto md:h-screen bg-black relative overflow-hidden md:py-16 md:pb-16"}"><div class="${"w-full h-auto flex flex-col justify-center items-start z-0 py-8 md:py-8 px-4 md:px-24"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto"}"><div class="${"col-span-full w-full h-auto flex justify-center md:justify-start items-center"}"><div class="${"flex flex-col w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left"}"><span class="${"font-black text-lg md:text-xl uppercase text-pink-400"}">${escape(subtitleOne)}</span>
                    <h2 class="${"text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16"}"><!-- HTML_TAG_START -->${titleOne}<!-- HTML_TAG_END --></h2>
                    <div class="${"flex flex-col w-full h-auto py-2"}"><p class="${"leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6"}"><!-- HTML_TAG_START -->${descTextOne}<!-- HTML_TAG_END --></p>
                        <p class="${"leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6"}"><!-- HTML_TAG_START -->${descTextTwo}<!-- HTML_TAG_END --></p>
                        <p class="${"leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6"}"><!-- HTML_TAG_START -->${descTextThree}<!-- HTML_TAG_END --></p></div></div></div></div></div></div>`;
});
const OverviewVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const videos = [
    {
      id: 1,
      title: "Kol Video 1",
      code: "DNsu00Jb69A"
    },
    {
      id: 2,
      title: "Kol Video 2",
      code: "Xo-gU3rATuw"
    },
    {
      id: 4,
      title: "Kol Video 4",
      code: "mzZcoOrTd80"
    },
    {
      id: 5,
      title: "Kol Video 5",
      code: "54cvfMx-TNg"
    }
  ];
  return `<div class="${"flex justify-center items-center w-full h-auto bg-zinc-100 border"}"><div class="${"w-full h-auto bg-gray-50 dark:bg-gray-900 py-16"}"><div class="${"container m-auto text-gray-600 dark:text-gray-300 md:px-8"}"><div class="${"flex flex-col justify-start items-start mb-12 space-y-4 px-6 md:px-8"}"><h2 class="${"text-left text-2xl font-black text-gray-800 dark:text-white md:text-4xl"}">Overview Videos
                </h2>
                <p class="${"text-left max-w-xl hidden"}"></p></div>
            
            <div class="${"flex flex-col justify-center items-center w-full h-auto px-4 md:px-0 pt-0 pb-8"}"><div class="${"grid grid-cols-" + escape(videos.length, true) + " gap-2 w-full pb-0"}">${each(videos, (vid) => {
    return `<div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-white rounded-xl shadow"}">${validate_component(Main, "IframeVideo").$$render($$result, { title: vid.title, id: vid.code }, {}, {})}
                    </div>`;
  })}</div></div></div></div></div>`;
});
const BannerJumbotron = "/_app/immutable/assets/banner-jumbotron-f77bce35.webp";
const CollafitOne = "/_app/immutable/assets/produk-01-1-7c93a8f8.webp";
const EducationImg = "/_app/immutable/assets/education-product-img-55367d3f.webp";
const FeatureImage = "/_app/immutable/assets/produk-02-3-d7b1a099.webp";
const load = async ({ url }) => {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname,
    cache: { maxage: 3600, private: false }
  };
};
let pilihButton = 3;
let discountTag = false;
let productName = "Pro Collafit";
let disablePriceJumbotron = false;
let pinLogo = false;
let labelTxtPembelian = false;
let subTitlePin = false;
let crownPin = false;
let hargaActual = "138.000";
let orderButton = false;
const Index_collafit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => value);
  $$unsubscribe_modal();
  return `${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      crownPin,
      hashtagText: "",
      productName,
      pilihButton,
      disablePriceJumbotron,
      banner: BannerJumbotron,
      txtPenawaran: "Tampil Cantik Dengan Cegah Resiko Penuaan Dini",
      classTxtPenawaran: "text-zinc-900",
      classTxtBtnOrder: "text-pink-50",
      txtPembelian: "Pembelian " + productName,
      classTxtPembelian: "text-zinc-900",
      hargaAwal: "RP. 265.000,-",
      hargaAkhir: "RP. 235.000,-",
      persenPotongan: "11",
      discountTag,
      orderBtnText: "Cek Produknya",
      bannerBawah: 'MUSCLE FIRST <span class="font-black">' + productName + "</span> PRODUCT ",
      waLink: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      shopeeLink: "https://shopee.co.id/musclefirstofficialshop",
      labelTxtPembelian
    },
    {},
    {}
  )}
${validate_component(OverviewVideo, "OverviewVideo").$$render($$result, {}, {}, {})}

${validate_component(SectionTwelve, "SectionTwelve").$$render(
    $$result,
    {
      id: "musclefirst-education",
      pinLogo,
      title: "WHITE SERIES",
      subtitle: productName + "?",
      titlePart: "",
      image: EducationImg,
      educationCardList
    },
    {},
    {}
  )}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      title: "Promo Terbaik",
      subtitle: productName + " White Series",
      description: 'Muscle First <span class="font-bold italic">' + productName + "</span> White Series kemasan baru, dapatkan kesempatan terbatas untuk pembelian " + productName,
      image: CollafitOne,
      classTxtBtnOrder: "text-pink-50",
      orderBtnText: "Cek Produknya"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render(
    $$result,
    {
      subTitlePin,
      subtitle: productName,
      title: "COCOK BUAT KAMU YANG",
      cocokCardList,
      gridCount: cocokCardList.length
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      txtTitleColor: "zinc-900",
      bgColor: "transparent",
      productName,
      bgImg: FeatureImage,
      imgLink: "",
      altImg: "FeatureImage",
      subTitle: "Muscle First",
      sizeOne: "",
      sizeTwo: "",
      title: productName,
      btnText: "Beli Sekarang",
      rasaList,
      cocokCardOtherList: cocokCardList
    },
    {},
    {}
  )}

${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      title: "ORDER " + productName + " SEKARANG",
      btnText: "Beli Sekarang"
    },
    {},
    {}
  )}



${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}

${validate_component(SectionSix, "SectionSix").$$render(
    $$result,
    {
      subtitle: "Kenapa Harus",
      title: '<span class="uppercase">' + productName + '</span> <span class="max-w-xl uppercase">WHITE SERIES</span>',
      manfaatList
    },
    {},
    {}
  )}



${``}

${validate_component(SectionThirteen, "SectionThirteen").$$render(
    $$result,
    {
      subtitleOne: "White Series",
      titleOne: productName,
      subtitleTwo: "Buruan",
      titleTwo: '<span class="block uppercase font-black">Tunggu</span> <span class="block uppercase font-black">Apalagi?</span>',
      btnText: "Beli Sekarang!!",
      descText: 'Mengandung <span class="text-pink-500 font-bold">Tripeptide Marine Collagen</span>, <span class="text-pink-500 font-bold">L-Glutathione Japan</span>, <span class="text-pink-500 font-bold">Vitamin C</span> dan Protein yang mampu merawat kulit serta membentuk badan ideal dari dalam.'
    },
    {},
    {}
  )}


${validate_component(SectionEleven, "SectionEleven").$$render(
    $$result,
    {
      subtitle: productName,
      title: "Testimonial",
      type: "testimonial-text",
      testimonialCardList
    },
    {},
    {}
  )}

${validate_component(SectionNine, "SectionNine").$$render(
    $$result,
    {
      orderButton,
      classShopee: "casein-shopee",
      classWa: "casein-wa",
      subtitle: "Order Now",
      title: productName,
      description: "Pesan sekarang dengan voucher diskon di marketplace kesayanganmu atau hubungi kontak di bawah ini",
      linkShopee: "https://shopee.co.id/universal-link/product/8802988/19575249995?deep_and_web=1&utm_campaign=p8802988_ss_id_webs_procolafit&utm_source=website&utm_medium=affiliates&utm_source=an_11373210424&utm_content=procollafit&smtt=9",
      linkWhatsapp: "https://wa.me/628118806632/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+" + productName + "+(" + hargaActual + ")+Musclefirst+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      linkOrderOnline: "https://musclefirst.orderonline.id/muscle-first-pro-casein"
    },
    {},
    {}
  )}

${validate_component(SectionTen, "SectionTen").$$render(
    $$result,
    {
      subtitle: "Temukan Agen Tedekat di Kota mu",
      title: "Muscle First " + productName
    },
    {},
    {}
  )}

${validate_component(SectionDisclaimer, "SectionDisclaimer").$$render(
    $$result,
    {
      subtitleOne: "Disclaimer Product",
      titleOne: productName,
      descTextOne: 'Konten yang terdapat dalam website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> merupakan informasi yang disediakan sebagai layanan umum. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> tidak memberikan jaminan atau garansi terhadap keakuratan, kelengkapan, atau keandalan informasi yang tersedia di website ini. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan atau kepercayaan terhadap informasi yang tersedia di website ini.',
      descTextTwo: 'Informasi yang tersedia di website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> tidak boleh dianggap sebagai saran medis atau rekomendasi untuk mengobati, mendiagnosis, atau menangani masalah kesehatan apapun. Sebaiknya berkonsultasi dengan dokter atau profesional kesehatan lainnya sebelum mengambil tindakan apapun berdasarkan informasi yang tersedia di website <b class="text-pink-500 uppercase text-sm">Musclefirst</b>.',
      descTextThree: 'Kami berhak untuk mengubah atau memperbaharui informasi yang tersedia di website <b class="text-sm uppercase text-pink-500">musclefirst.co.id</b> tanpa pemberitahuan terlebih dahulu. <b class="text-pink-500 uppercase text-sm">Musclefirst</b> juga tidak bertanggung jawab atas keakuratan atau kelengkapan informasi yang tersedia di website lain yang terhubung ke website ini.'
    },
    {},
    {}
  )}`;
});
export {
  Index_collafit as default,
  load
};
