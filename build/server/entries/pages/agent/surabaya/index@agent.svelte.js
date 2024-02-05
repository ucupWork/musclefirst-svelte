import { c as create_ssr_component, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionFour, b as SectionThree, c as SectionCertified, d as SectionTwo, e as SectionFive } from "../../../../_app/immutable/chunks/SectionCertified-55e42e30.js";
import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-ca5808f6.js";
import "../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/crown-f3b9967b.js";
import "../../../../_app/immutable/chunks/logo-white-bbda6e5d.js";
import "../../../../_app/immutable/chunks/list-products-fcdc0a2c.js";
let pilihButton = 3;
let discountTag = false;
let agentDomisili = "Surabaya";
let labelTxtPembelian = false;
let crownPin = false;
let waMessage = "Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20promo%20Muscle%20First%20terbaru%22";
const Index_agent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listAgen = [
    {
      id: "LSAD41-01",
      personName: "The Fitzone Store",
      distric: "Surabaya",
      agenType: "\u{1F451} Exclusive",
      waNumber: "+6281937080389",
      waChatText: waMessage,
      address: "Jl.Mastrip Kemlaten No.28,Kebraon Kec.Karang Pilang ,Surabaya 60222"
    },
    {
      id: "LSAD41-04",
      personName: "Jay",
      distric: "Surabaya",
      agenType: "Basic",
      waNumber: "+6281252941680",
      waChatText: waMessage,
      address: "Gubeng Kertajaya VII E/5/ Surabaya-60286"
    },
    {
      id: "LSAD41-06",
      personName: "Daniel Alexander Gunawan",
      distric: "Semarang/Surabaya",
      agenType: "Basic",
      waNumber: "+6282233717303",
      address: "JL.Baruk Utara X/11 Perum, Rungkut-Surabaya",
      noteAddress: "Pondok Nirwana Sebrang Superindo",
      waChatText: waMessage
    },
    {
      id: "LSAD41-07",
      personName: "Clara/Billy",
      distric: "Semarang/Surabaya",
      agenType: "Basic",
      waNumber: "+6289612895293",
      waChatText: waMessage
    },
    {
      id: "LSAD41-09",
      personName: "Kana Mart",
      distric: "Surabaya",
      agenType: "Basic",
      waNumber: "+6281313103099",
      address: "JL.Tambak Windu No. 66",
      waChatText: waMessage
    }
  ];
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Agent Domisili - Surabaya",
      description: "Dapatkan keuntungan menarik menjadi bintang agent Muscle First Buruan",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}


${validate_component(SectionOne, "SectionOne").$$render(
    $$result,
    {
      crownPin,
      hashtagText: "",
      agentDomisili,
      pilihButton,
      banner: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/surabaya/main-banner-surabaya.jpg",
      txtMainText: "Be the first",
      classTxtMainText: "text-zinc-100",
      classTxtBtnOrder: "text-emerald-900",
      txtPembelian: "Agent " + agentDomisili,
      classTxtPembelian: "text-zinc-900",
      persenPotongan: "11",
      discountTag,
      orderBtnText: "Pesan Disini",
      bannerBawah: 'MUSCLE FIRST AGENT <span class="font-black">' + agentDomisili + "</span>",
      waLink: "https://wa.me/628983393131/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
      labelTxtPembelian
    },
    {},
    {}
  )}

${validate_component(SectionFour, "SectionFour").$$render(
    $$result,
    {
      typeAgent: true,
      title: "Dapatkan Langsung",
      btnText: "Pesan Disini",
      urlAgentMainLogo: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/batam/agent-01.png",
      namaAgen: 'Agen Fitness / <span class="text-primary dark:text-amber-600">' + agentDomisili + "</span>",
      descriptionAgen: "Jl. Leo No. 28, Kel. Ploso, Kec. Tambaksari, Surabaya",
      agentName: "Red Fitness",
      kontakAgenName: "Red Fitness",
      kontakAgen: "+628983393131",
      listPickAgen: listAgen,
      tokopediaLink: "https://tokopedia.com/amp/redfitness",
      shopeeLink: "https://shopee.co.id/redfitness",
      waLink: "https://wa.me/628983393131/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
    },
    {},
    {}
  )}

${validate_component(SectionThree, "SectionThree").$$render($$result, { title: "Kenapa Memilih Musclefirst" }, {}, {})}

${validate_component(SectionCertified, "SectionCertified").$$render($$result, { certifiedCardList: certifiedList }, {}, {})}

${validate_component(SectionTwo, "SectionTwo").$$render(
    $$result,
    {
      id: "musclefirst-education",
      title: "Tahukah",
      subtitle: "Anda?",
      titlePart: ""
    },
    {},
    {}
  )}


${validate_component(SectionFive, "SectionFive").$$render(
    $$result,
    {
      subtitle: "Musclefirst",
      title: "Testimonial"
    },
    {},
    {}
  )}  

`;
});
export {
  Index_agent as default
};
