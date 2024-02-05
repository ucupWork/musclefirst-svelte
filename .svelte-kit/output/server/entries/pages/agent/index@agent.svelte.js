import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, d as each } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { I as Index } from "../../../_app/immutable/chunks/Index-1d60b221.js";
/* empty css                                                                            *//* empty css                                                          */import { I as ImageResponsive } from "../../../_app/immutable/chunks/ImageResponsive-f45806c8.js";
import { p as productList } from "../../../_app/immutable/chunks/list-products-4425d867.js";
import { C as CertifiedLabel } from "../../../_app/immutable/chunks/CertifiedLabel-04d17f02.js";
import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/index-fe7c0294.js";
import "../../../_app/immutable/chunks/CardNoResult-60b04b1f.js";
import "../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import "../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
import "../../../_app/immutable/chunks/list-certified-ca5808f6.js";
import "../../../_app/immutable/chunks/CardCertified-3b8efa0e.js";
const CardProductAgent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { nameProduct } = $$props;
  let { cocok } = $$props;
  let { imgUrl } = $$props;
  let { imgAlt } = $$props;
  let { linkHref } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.nameProduct === void 0 && $$bindings.nameProduct && nameProduct !== void 0)
    $$bindings.nameProduct(nameProduct);
  if ($$props.cocok === void 0 && $$bindings.cocok && cocok !== void 0)
    $$bindings.cocok(cocok);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.imgAlt === void 0 && $$bindings.imgAlt && imgAlt !== void 0)
    $$bindings.imgAlt(imgAlt);
  if ($$props.linkHref === void 0 && $$bindings.linkHref && linkHref !== void 0)
    $$bindings.linkHref(linkHref);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<a${add_attribute("id", id, 0)} target="${"_blank"}"${add_attribute("href", `/${linkHref}`, 0)} class="${"w-full h-auto flex flex-col md:flex-row justify-between items-center"}"><div class="${"flex justify-center items-center"}">${validate_component(ImageResponsive, "ImageResponsive").$$render(
    $$result,
    {
      srcsetActive: false,
      width,
      height,
      breakpoints: [820, 414, 375],
      src: imgUrl,
      classes: "shadow-lg border border-yellow-200 w-96 md:w-40 h-auto overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center",
      alt: imgAlt,
      style: "margin: 0px"
    },
    {},
    {}
  )}</div>
    <div class="${"flex flex-col md:flex-row justify-between items-center py-4 md:py-6 px-4 md:px-8 w-auto md:w-full h-auto md:h-auto bg-zinc-900 border-b border-yellow-200"}"><div class="${"flex flex-col w-auto h-auto text-center md:text-left"}"><h2 class="${"text-white font-black uppercase text-2xl"}">${escape(nameProduct)}</h2>
            <span class="${"text-zinc-100 font-normal text-sm"}">${escape(cocok)}</span></div>
        <span class="${"w-auto h-auto hidden md:block"}"><div class="${"i-ph:caret-right h-3 w-3 text-yellow-200"}"></div></span></div></a>`;
});
const Agent01 = "/_app/immutable/assets/agent-01-38ab34e1.webp";
const Agent02 = "/_app/immutable/assets/agent-02-7df38ffa.webp";
const Agent03 = "/_app/immutable/assets/agent-03-d285ff82.webp";
const topImage = "/_app/immutable/assets/1024-24e8752d.png";
const MediaArtikelOne = "/_app/immutable/assets/blog-1-media-artikel-e5f0e888.webp";
const MediaArtikelTwo = "/_app/immutable/assets/blog-2-media-artikel-b2f097a1.webp";
const MediaArtikelThree = "/_app/immutable/assets/blog-4-media-artikel-97c2c9fe.webp";
const MediaArtikelFour = "/_app/immutable/assets/cnn-jumbotron-b2bd1ebb.webp";
const MediaArtikelFive = "/_app/immutable/assets/blog-5-media-artikel-b2349815.webp";
const blogList = [
  {
    id: "1",
    title: "Creatine Terbaik Buatan Indonesia untuk Badan Ideal Go Internasional",
    summary: "Badan ideal adalah kebanggaan dan impian yang ingin dimiliki setiap orang, sehingga tak heran hampir semua orang melakukan berbagai cara agar memiliki badan ideal, termasuk dengan cara instan seperti sedot lemak, operasi plastik, meminum pil obat yang tidak jelas asal usulnya hingga steroid untuk memiliki badan yang diidamkan.",
    imgUrl: MediaArtikelFour,
    imgAlt: "Media Artikel Muscle First - CNN Indonesia",
    urlLink: "https://www.cnnindonesia.com/nasional/20220804142003-293-830293/creatine-terbaik-buatan-indonesia-untuk-badan-ideal-go-internasional",
    date: "16 FEB 2021",
    type: "web",
    vendor: "cnnindonesia.com",
    status: true
  },
  {
    id: "2",
    title: "Data Penjualan Creatine, Muscle First Lagi-Lagi Jadi Juara!",
    summary: "Tubuh yang sehat, bugar, dan ideal tentu jadi idaman banyak orang. Namun, hal-hal tersebut tidak bisa dicapai hanya dengan mengandalkan diet dan konsumsi makanan bergizi saja. Yup, selain menjaga pola makan dan memenuhi gizi dalam tubuh lewat konsumsi yang sehat, melatih badan dan otot juga harus dilakukan jika ingin memiliki tubuh yang sehat dan bugar. Salah satu aktivitas fisik yang ramai dilakukan adalah fitness.",
    imgUrl: MediaArtikelFive,
    imgAlt: "Media Artikel Muscle First - Compas.co.id Indonesia",
    urlLink: "https://compas.co.id/article/data-penjualan-creatine-muscle-first/",
    date: "23 AGU 2022",
    type: "web",
    vendor: "compas.co.id",
    status: true
  },
  {
    id: "3",
    title: "Muscle First Luncurkan Produk Terbaru, Suplemen Kaya Protein Penunjang Kegiatan Fitnes",
    summary: "Kekurangan protein juga dapat berakibat fatal hingga merusak jaringan otot. Nah, untuk menunjang kebutuhan protein, brand Muscle First baru saja meluncurkan produk barunya bernama M1 PRO WHEY 100",
    imgUrl: MediaArtikelOne,
    imgAlt: "Media Artikel Muscle First - Wartakota live",
    urlLink: "https://wartakota.tribunnews.com/2021/02/16/muscle-first-luncurkan-produk-terbaru-suplemen-kaya-protein-penunjang-kegiatan-fitnes",
    date: "16 FEB 2021",
    type: "web",
    vendor: "wartakotalive.com",
    status: false
  },
  {
    id: "4",
    title: "Pendiri Muscle First: Program Diet Gak Harus Menyiksa Diri",
    summary: "Program diet gak harus menyiksa diri, dan bisa dimulai dengan menjaga pola makan. Jika sudah terbiasa bisa diimbangi dengan olahraga minimum tiga kali seminggu, sebagai bagian dari penerapan pola hidup sehat, pungkasnya.",
    imgUrl: MediaArtikelTwo,
    imgAlt: "Media Artikel Muscle First - Wartakota live",
    urlLink: "https://www.beritasatu.com/archive/834727/pendiri-muscle-first-program-diet-gak-harus-menyiksa-diri",
    date: "30 SEP 2021",
    type: "web",
    vendor: "beritasatu.com",
    status: true
  },
  {
    id: "5",
    title: "Segini Kebutuhan Protein yang Dibutuhkan untuk Membentuk Otot",
    summary: "Protein adalah nutrisi penting untuk pembentukan otot, Makronutrien sangat penting untuk perbaikan jaringan otot dan penuh dengan asam amino, bahan pembentuk otot dan kekuatan.",
    imgUrl: MediaArtikelThree,
    imgAlt: "Media Artikel Muscle First - Wartakota live",
    urlLink: "https://lifestyle.bisnis.com/read/20210122/220/1346473/segini-kebutuhan-protein-yang-dibutuhkan-untuk-membentuk-otot",
    date: "22 JAN 2021",
    type: "web",
    vendor: "lifestyle.bisnis.com",
    status: false
  }
];
const MediaArtikelSix = "/_app/immutable/assets/blog-6-media-artikel-a22c6cc8.webp";
const MediaArtikelSeven = "/_app/immutable/assets/blog-7-media-artikel-6be80e8c.webp";
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { styleBlog } = $$props;
  let { HeaderCondition } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.styleBlog === void 0 && $$bindings.styleBlog && styleBlog !== void 0)
    $$bindings.styleBlog(styleBlog);
  if ($$props.HeaderCondition === void 0 && $$bindings.HeaderCondition && HeaderCondition !== void 0)
    $$bindings.HeaderCondition(HeaderCondition);
  return `<div${add_attribute("id", id, 0)} class="${"w-full sm:h-auto md:h-auto bg-transparent dark:bg-zinc-900 relative md:px-0 sm:py-0 md:py-12"}">${HeaderCondition ? `<div class="${"w-full flex flex-col pt-8 md:pt-0"}"><div class="${"w-full container mx-auto md:text-left text-center px-0 md:px-8 py-4 flex flex-col justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-center md:items-start justify-center"}"><div class="${"flex flex-col space-y-4 w-full mb-4"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-zinc-900 dark:text-white"}">${escape("Artikel di Media")}</h1>
                    <p class="${"w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 dark:text-white text-md tracking-loose max-w-md"}">${escape("Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out")}</p></div>
                <div class="${"w-full flex justify-center md:justify-end items-end pb-6"}"><div class="${"w-auto flex flex-col md:flex-row"}"><a href="${"/"}" class="${"mx-1 text-orange-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black"}">${escape("Lihat Semua")}</a></div></div></div></div></div>` : ``}

    <div class="${"flex flex-col w-full h-auto justify-center items-center px-0 lg:px-8 pt-4 pb-12"}"><div class="${"grid grid-cols-4 gap-2 md:gap-4 w-full h-auto mb-4 md:mb-8"}"><div class="${escape(
    styleBlog === "style-one" ? "col-span-full md:col-span-2" : "col-span-full",
    true
  ) + " w-full h-auto"}"><article class="${"overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", MediaArtikelSix, 0)}${add_attribute("alt", `Media Artikel Muscle First - VOI Indonesia`, 0)} class="${"h-56 w-full object-cover"}">
                
                    <div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><div class="${"w-full md:w-auto h-auto"}"><span class="${"block text-xs"}"><small class="${"font-bold block text-gray-900 uppercase"}">VOI Indonesia</small></span>
                            <a rel="${"noreferrer nofollow external"}" target="${"_blank"}" href="${"https://voi.id/berita/220636/susu-protein-lokal-ini-ternyata-sudah-labdoor-a"}" class="${"uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"}">Susu Protein Lokal ini Ternyata Sudah Labdoor A+
                            </a>
                            <p class="${"mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"}">Labdoor terus meng-update produk yang ada pada website setiap bulannya. Labdoor memilih produk yang akan diuji berdasarkan riset pasar suplemen populer ditambah pasaran langsung dari konsumen. Pada bulan Oktober, Labdoor mempublikasikan hasil pengujian pada susu protein lokal Indonesia merek Muscle First. Hasil yang telah keluar pun mendekati sempurna dengan score kualitas 99 atau setara dengan A+.
                            </p></div></div></article></div>
            
            <div class="${escape(
    styleBlog === "style-one" ? "col-span-full md:col-span-2" : "col-span-full",
    true
  ) + " w-full h-auto"}"><article class="${"overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", MediaArtikelSeven, 0)}${add_attribute("alt", `Media Artikel Muscle First - Health Detik`, 0)} class="${"h-56 w-full object-cover"}">
                
                    <div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><div class="${"w-full md:w-auto h-auto"}"><span class="${"block text-xs"}"><small class="${"font-bold block text-gray-900 uppercase"}">Health Detik</small></span>
                            <a rel="${"noreferrer nofollow external"}" target="${"_blank"}" href="${"https://health.detik.com/berita-detikhealth/d-6348510/susu-protein-muscle-first-sudah-halal-lolos-bpom-dan-uji-labdoor"}" class="${"uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"}">Susu Protein Muscle First: Sudah Halal, Lolos BPOM dan Uji Labdoor
                            </a>
                            <p class="${"mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"}">Kebiasaan masyarakat Indonesia yang mulai memperhatikan kesehatan tubuh selama pandemi ini secara tidak sengaja membuat mereka ingin berolahraga untuk menjaga kesehatan sekaligus membentuk tubuh ideal. 
                                Hadirnya brand suplemen fitnes Muscle First menjadi solusi menyenangkan untuk hidup sehat dan dapat dikonsumsi oleh penderita diabetes, sehingga menjadi brand 
                            </p></div></div></article></div></div>

        <div class="${"grid grid-cols-3 gap-2 md:gap-4 w-full h-auto mb-4 md:mb-8"}">${each(blogList, (list) => {
    return `${list.status == true ? `<div class="${"col-span-full md:col-span-1 w-full h-auto"}"><article class="${"overflow-hidden rounded-lg shadow transition hover:shadow-lg"}"><img${add_attribute("src", list.imgUrl, 0)}${add_attribute("alt", list.imgAlt, 0)} class="${"h-56 w-full object-cover"}">
                    
                        <div class="${"w-full h-full bg-white dark:bg-black p-4 sm:p-6"}"><div class="${"w-full md:w-auto h-auto"}"><span class="${"block text-xs"}"><small class="${"font-bold block text-gray-900 uppercase"}">${escape(list.vendor)}</small></span>
                                <a rel="${"noreferrer nofollow external"}" target="${"_blank"}"${add_attribute("href", list.urlLink, 0)} class="${"uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"}">${escape(list.title)}</a>
                                <p class="${"hidden mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"}">${escape(list.summary)}
                                </p></div>
                        </div></article>
                </div>` : ``}`;
  })}</div></div></div>`;
});
const BannerDaftarAgen = "/_app/immutable/assets/jumbotron-daftar-agen-f2429831.webp";
const AgentFlowProcess = "/_app/immutable/assets/alur-agen-01-c3a985c4.webp";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col bg-black justify-center items-start w-full h-auto p-4 md:p-8 relative"}"><div class="${"grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-zinc-900 border border-yellow-200 md:py-6 relative z-0"}"><div class="${"col-span-full w-full h-auto py-0 md:py-2 bg-white z-20"}"><div class="${"w-full h-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-16"}"><a${add_attribute("href", "/", 0)} class="${"flex flex-row w-auto h-auto border-none md:border-2 border-zinc-900 p-2 md:p-4 z-20"}"><img class="${"w-8 md:w-24 h-auto"}"${add_attribute("src", topImage, 0)} alt="${"Musclefirst Logo"}"></a>
                <div class="${"w-auto h-auto hidden md:block"}"><span class="${"text-xl md:text-4xl font-black uppercase text-zinc-900"}">Be the First.</span></div></div></div>
        <div class="${"col-span-full w-full h-auto py-0 bg-transparent"}"><div class="${"w-full h-full relative"}"><div class="${"w-full h-full absolute inset-x-0 bottom-0 z-10 flex flex-col justify-center"}"><div class="${"flex flex-col justify-center items-start text-left py-4 px-8 md:px-16 bg-transparent rounded"}"><h1 class="${"block text-xl md:text-6xl text-white font-black uppercase"}">Untung <span class="${"text-amber-500"}">Jutaan</span></h1>
                    <h1 class="${"block text-xl md:text-6xl text-white font-black uppercase"}">Hingga <span class="${"text-amber-500"}">Ratusan Juta</span>!</h1>
                    <h2 class="${"font-ttnorms mt-4 block text-xs md:text-2xl text-white font-thin max-w-xs md:max-w-2xl uppercase pr-32 md:pr-0"}">Dengan Daftar Agen Muscle First!
                    </h2>
                    
                    <button class="${"flex justify-center items-center bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 border-black py-1.5 md:py-4 px-4 md:px-8 rounded-full mt-3 md:mt-6"}"><span class="${"font-bold text-xs md:text-2xl uppercase text-zinc-100"}">Cari Tau Lebih Lanjut</span></button></div></div>
                <a class="${"w-full h-full relative"}"${add_attribute("href", "/", 0)}><picture class="${"z-0"}"><source${add_attribute(
    "srcset",
    BannerDaftarAgen,
    0
  )} type="${"image/webp"}">
                    <img${add_attribute(
    "src",
    BannerDaftarAgen,
    0
  )} class="${"rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"}" alt="${"Banner Daftar Agen"}"></picture></a></div></div>
        <div class="${"col-span-full w-full h-auto py-0 bg-transparent"}">${validate_component(CertifiedLabel, "CertifiedLabel").$$render($$result, { id: "certified" }, {}, {})}</div>
        <div class="${"col-span-full w-full h-auto py-4 md:py-16 bg-white"}"><div class="${"w-full h-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-x-4 md:space-y-0 px-8 md:px-16"}"><div class="${"flex flex-row w-auto h-auto border border-black p-4"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-xl md:text-2xl font-black uppercase text-zinc-900 text-center md:text-left max-w-4xl md:max-w-lg"}">Untuk anda yang ingin menjadi Agen <span class="${"font-black text-amber-500"}">\u201CMusclefirst\u201D</span></h1></div>
                <div class="${"w-auto h-auto"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-md md:text-2xl font-black uppercase text-zinc-900 max-w-sm text-center md:text-left leading-none"}">Saat ini kami membuka pendaftaran di wilayah <span class="${"font-black text-amber-500"}">SELURUH KOTA di INDONESIA</span></h1></div></div></div>
        <div id="${"keuntungan-musclefirst"}" class="${"col-span-full w-full h-auto"}"><div class="${"w-full flex flex-col pb-4 md:pb-12 md:py-0 px-4 md:px-0 border-b border-black"}"><div class="${"w-full container mx-auto text-center md:text-left px-8 py-4 flex flex-col justify-start md:justify-center items-center"}"><div class="${"w-full flex flex-col md:flex-row items-start justify-center"}"><div class="${"flex flex-col justify-center items-start space-y-4 w-full mb-4"}"><div class="${"flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8"}"><div class="${"grid grid-cols-1 gap-4 w-full h-auto mb-0"}"><div class="${"w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start space-y-2 md:space-y-0 mb-8 px-8"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-2xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left max-w-2xl"}">Apa Sih Keuntungan Menjadi Agen MUSCLEfIRST?
                                        </h1>
                                        <p class="${"w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0"}">Temukan Alasan Mengapa LEBIH DARI 50++ Orang Sudah Join <span class="${"font-black text-amber-500"}">\u201CMusclefirst\u201D</span></p></div>
                                    <div class="${"flex flex-col space-y-4 w-auto h-auto px-0 md:px-8"}"><div class="${"w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4"}"><div class="${"hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4"}"></div>
                                            <p class="${"w-full text-sm md:text-md font-normal text-zinc-900 text-left"}">Harga tidak rusak. <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> berkomitmen penuh untuk menjaga harga tetap terkontrol di pasaran sehingga agen bisa menghasilkan <b>profit berlimpah</b>. <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> akan bertindak tegas kepada agen reseller yang merusak harga produk <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> dengan sanksi lapaknya akan dihapus dari nama agen resmi <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> dan blacklist untuk setiap pembelian.
                                            </p></div>
                                        <div class="${"w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4"}"><div class="${"hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4"}"></div>
                                            <p class="${"w-full text-sm md:text-md font-normal text-zinc-900 text-left"}"><b>Produk sangat mudah di jual</b>. MUSCLE FIRST telah memiliki <b>berstandar Internasional</b> seperti <b>Labdoor A+</b>, <b>HACCP</b>, <b>ISO 22000</b>, dan <b>GMP</b> yang terbukti aman. Selain itu MUSCLE FIRST aktif untuk mengedukasi pasar secara berkala baik dengan media online, media konvensional, hingga media mainstream.
                                            </p></div>
                                        <div class="${"w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4"}"><div class="${"hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4"}"></div>
                                            <p class="${"w-full text-sm md:text-md font-normal text-zinc-900 text-left"}">Promosi yang update dengan tren kekinian. <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> mendukung agen agar mudah menjual produk dipasaran dengan membuat promosi menggunakan konten yang menjangkau semua usia dan mengikuti tren terkini. 
                                                Produk <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> sendiri aman dikonsumsi oleh semua orang dengan rentan usia 15 - 50 tahun.
                                            </p></div>
                                        <div class="${"w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4"}"><div class="${"hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4"}"></div>
                                            <p class="${"w-full text-sm md:text-md font-normal text-zinc-900 text-left"}">Lokasi yang terjangkau oleh seluruh agen. <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> memberikan kemudahan akses dalam pembelian sehingga menjangkau seluruh agen dimanapun berada. Agen reseller pun bisa leluasa berjualan baik secara offline maupun online karena produk <span class="${"font-bold text-amber-500 uppercase"}">MUSCLE FIRST</span> sudah tersertifikasi <b>Labdoor A+</b>, <b>BPOM</b> dan <b>bersertifikat Halal</b>.
                                            </p></div></div></div></div>
                            
                            <div class="${"flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8"}"><div class="${"grid grid-cols-1 gap-4 w-full h-auto mb-0 px-2 md:px-8"}"><div class="${"w-full h-auto flex flex-col justify-center items-center md:items-start mb-8"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-4xl md:text-4xl text-center md:text-left font-black uppercase text-zinc-100"}">Cerita Sukses Musclefirst 
                                        </h1>
                                        <p class="${"w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0"}">Dokumentasi perjalanan Olahraga Mereka, sehari hari bersama Musclefirst
                                        </p></div>
                                    <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2"}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/77W-x78iYuQ"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2"}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/vvyDi_QE6LQ"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2"}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/kUVbnuJGmMI"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2"}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/zZS6412dT9Y"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe></div></div></div>
                                    
                                    <div class="${"grid grid-cols-3 gap-2 md:gap-4 w-full h-auto"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", Agent01, 0)}></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", Agent02, 0)}></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2"}"><img role="${"presentation"}" alt="${"img"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute("src", Agent03, 0)}></div></div></div></div></div>
                            
                            
                            
                            <div class="${"flex flex-col w-full justify-center items-center text-center pb-4 md:pb-8"}"><div class="${"grid grid-cols-1 gap-4 w-full h-auto mb-0 px-0 md:px-8"}"><div class="${"w-full h-auto flex flex-col justify-center items-center md:items-start mb-8 max-w-4xl"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-3xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left"}">Simak Produk Terbaik Musclefirst yang laris dipasaran dalam solusi pemenuhan asupan nutrisi harian 
                                        </h1>
                                        <p class="${"w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0 max-w-4xl"}">Selain menjadi solusi pemenuhan asupan nutrisi harian  seperti Testimoni yg Anda baca di atas, Musclefirst  adalah memiliki beberapa produk yang juga memiliki banyak khasiat untuk :
                                        </p></div></div>
                                <div class="${"flex flex-col justify-center items-center w-full h-auto space-y-4 md:space-y-2 px-0 md:px-8"}">${each(productList, (val) => {
    return `${validate_component(CardProductAgent, "CardProductAgent").$$render(
      $$result,
      {
        width: 256,
        height: 256,
        id: val.id,
        nameProduct: val.name,
        cocok: val.cocok,
        imgUrl: val.imgUrl,
        imgAlt: val.imgAlt,
        linkHref: val.linkHref
      },
      {},
      {}
    )}`;
  })}</div></div>
                            
                            <div class="${"flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8"}"><div class="${"grid grid-cols-1 gap-4 w-full h-auto mb-0 px-2 md:px-8"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2"}"><img role="${"presentation"}" alt="${"Agent Flow Process"}" class="${"object-contain w-full rounded h-auto dark:bg-gray-500"}"${add_attribute(
    "src",
    AgentFlowProcess,
    0
  )}></div></div></div></div>
                            
                            <div class="${"flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-0"}"><div class="${"flex flex-col lg:flex-row items-start justify-between w-full h-auto px-0 md:px-8"}"><div class="${"flex flex-col w-auto justify-center items-center text-center md:text-left"}"><h1 class="${"font-blackttnorms tracking-tighter w-full text-4xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left"}"><span class="${"text-amber-500"}">Musclefirst </span> and the Media
                                        </h1>
                                        <p class="${"w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0"}">Anda hanya perlu stok produk Musclefirst Tekan Tombol GABUNG SEKARANG
                                        </p></div></div>
                                ${validate_component(Blog, "Blog").$$render(
    $$result,
    {
      styleBlog: "style-two",
      HeaderCondition: false,
      id: "list-blog"
    },
    {},
    {}
  )}</div>
                            
                            <section class="${"flex justify-center items-center w-full h-auto py-4 md:py-0 bg-zinc-900 relative overflow-hidden"}"><div class="${"w-full h-auto flex flex-col justify-center items-center z-0"}"><div class="${"w-full h-auto flex justify-center items-center"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto px-0 md:px-8 pb-4 md:pb-8"}"><div class="${"flex flex-col w-auto h-auto"}"><span class="${"text-amber-600 font-bold text-sm md:text-lg uppercase"}">Klik Disini Untuk Beli Musclefirst
                                                </span>
                                                <h2 class="${"text-3xl md:text-4xl font-black text-white leading-none text-center md:text-left mb-8"}"><span class="${"block uppercase max-w-xl"}">Dapatkan Langsung di Kota Terdekat Kamu
                                                    </span></h2></div>
                                            <ul class="${"text-center md:text-left"}"><li class="${"text-white"}">Pilih Kota Kamu di bawah ini</li>
                                                <li class="${"text-white"}">Cari Distributor dengan alamat terdekat</li>
                                                <li class="${"text-white"}">Klik Tanya &quot;BUY HERE&quot;</li></ul></div></div>
                                    ${validate_component(Index, "IndexAgen").$$render(
    $$result,
    {
      colorType: "default",
      top: true,
      bottom: false,
      id: "list-agent",
      classes: "bg-zinc-900"
    },
    {},
    {}
  )}</div></section>
                            
                            <section class="${"w-full h-auto p-6 py-24 dark:text-gray-900 border-none md:border border-yellow-200"}"><div class="${"container mx-auto w-full h-auto"}"><div class="${"flex flex-col lg:flex-row items-center justify-between w-full h-auto space-y-4 md:space-y-0 px-2"}"><div class="${"flex flex-col w-auto justify-center items-center md:items-start text-center md:text-left"}"><h2 class="${"font-blackttnorms tracking-tighter w-auto text-4xl font-black text-zinc-100"}">TIDAK ADA BIAYA PENDAFTARAN.
                                            </h2>
                                            <p class="${"w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0 max-w-4xl"}">Anda hanya perlu stok produk Musclefirst Tekan Tombol GABUNG SEKARANG
                                            </p></div>
                                        <div class="${"flex justify-center md:justify-end items-center md:items-end"}"><a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://api.whatsapp.com/send/?phone=6281289497391&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0"}" class="${"mt-16 md:mt-0 w-auto h-auto rounded-full py-2 bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 max-w-2xl px-4 md:px-8"}"><span class="${"font-black uppercase text-white text-xl leading-none"}">GABUNG SEKARANG</span></a></div></div></div></section>
                            
                            <a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://shopee.co.id/universal-link/musclefirstofficialshop?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_home_bp&utm_source=website&utm_medium=seller&utm_content=homeweb&smtt=9"}" class="${"text-center w-full h-auto rounded py-4 bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 px-4 md:px-4"}"><span class="${"font-black uppercase text-white text-xl md:text-2xl"}">Beli Musclefirst Sekarang</span></a>
                            
                            <a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://api.whatsapp.com/send/?phone=6281289497391&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0"}" class="${"text-center w-full h-auto rounded py-4 bg-gradient-to-r from-amber-900 to-amber-500 shadow-lg border shadow-orange-600/50 px-4 md:px-4"}"><span class="${"font-black uppercase text-white text-xl md:text-2xl"}">Daftar Jadi Agen</span></a></div></div></div></div></div></div></div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return { segment, currentPage: url.pathname };
}
const Index_agent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Beli Muscle First Terdekat di Kota Kalian",
      description: "Ongkir lebih murah dengan membeli di agen Muscle First terdekat di kota kalian.",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Index_agent as default,
  load
};
