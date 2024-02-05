import { c as create_ssr_component, v as validate_component } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { S as SectionOne, a as SectionFour, b as SectionThree, c as SectionCertified, d as SectionTwo, e as SectionFive } from "../../../../_app/immutable/chunks/SectionCertified-55e42e30.js";
import { c as certifiedList } from "../../../../_app/immutable/chunks/list-certified-e272f300.js";
import "../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../../_app/immutable/chunks/crown-f3b9967b.js";
import "../../../../_app/immutable/chunks/logo-white-bbda6e5d.js";
import "../../../../_app/immutable/chunks/list-products-fcdc0a2c.js";
let pilihButton = 3;
let discountTag = false;
let agentDomisili = "Jakarta";
let labelTxtPembelian = false;
let crownPin = false;
let waMessage = "Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20promo%20Muscle%20First%20terbaru%22";
const Index_agent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listAgen = [
    {
      id: "LSAD11-01",
      personName: "Bandaneira",
      agenType: "Basic",
      waNumber: "+6283899362673",
      address: "Jl.Belakang Pasar Baru III No.20 BRT.1/RW.4 Jakarta Pusat 10710",
      waChatText: waMessage
    },
    {
      id: "LSAD12-01",
      personName: "The Next Store",
      agenType: "Basic",
      waNumber: "+6281282100141",
      waChatText: waMessage,
      address: "Komplek Kodam Tanah Kusir Jl. Cendrawasih 2 Rt 002 / Rw 008 No. 59B",
      noteAddress: "Dekat Pasar kebayoran Lama",
      codType: true
    },
    {
      id: "LSAD14-01",
      personName: "Bodyfitstation",
      agenType: "Basic",
      waNumber: "+6281291795558",
      address: "Jl.Teluk Gong No.114 RT 014 RW 10 - Jakarta Utara",
      noteAddress: "Belakang SMP N 112"
    },
    {
      id: "LSAD14-02",
      personName: "Herry Tjandra",
      agenType: "Basic",
      waNumber: "+6282111718883",
      address: "JL.Pademangan III GG.8 No.19,RT 011/09 Kec.Pademangan Jakarta Utara"
    },
    {
      id: "LSAD14-03",
      personName: "David Boufort",
      agenType: "Basic",
      waNumber: "+6287885841000",
      address: "Jl.L Melintang Teluk Gong Blok P, No.18 Penjaringan, Jakarta Utara"
    },
    {
      id: "LSAD14-04",
      personName: "Suplement Factory",
      agenType: "Basic",
      waNumber: "+628812139532",
      address: "Ruka Nirawan Sunter Asri Blok A2 No.17 Sunter Agung, Jakarta Utara"
    },
    {
      id: "LSAD14-05",
      personName: "PT Samudra Retail Indonesia",
      agenType: "Basic",
      waNumber: "+6282110370779",
      address: "Jl. Pluit Karang Permai Blok 0-8 No.17 Pluit, Penjaringan, Jakarta Utara"
    },
    {
      id: "LSAD14-06",
      personName: "Carry Lady",
      agenType: "Basic",
      waNumber: "+6281281984197",
      address: "Jakarta Utara"
    },
    {
      id: "LSAD15-01",
      personName: "Fit Addict",
      agenType: "Basic",
      waNumber: "+6287880987018",
      waChatText: waMessage,
      address: "Jelambar Utama 3 No.34 A Grogol Petamburan ,Jakarta Barat"
    },
    {
      id: "LSAD15-02",
      personName: "Rocket Store Jakarta",
      agenType: "Basic",
      waNumber: "+6285881659191",
      waChatText: waMessage,
      address: "Jl.Kembang Ayu 3 Blok E 5 No,12 Puri Indah,Jakarta Barat 11610"
    },
    {
      id: "LSAD15-03",
      personName: "Platinum Star",
      agenType: "Basic",
      waNumber: "+6281281095606",
      waChatText: waMessage,
      address: "Durimas 1 Blok D No.98 RT 04/RW 10 Duri Kepa, Kebon Jeruk, Jakarta Barat"
    },
    {
      id: "LSAD15-04",
      personName: "Susu Fitnessku ( Wiliam )",
      agenType: "Basic",
      waNumber: "+6287823796367",
      waChatText: waMessage
    },
    {
      id: "LSAD15-05",
      personName: "The Good Palmy ( Dave Fernando )",
      agenType: "Basic",
      waNumber: "+6283861245943",
      waChatText: waMessage
    },
    {
      id: "LSAD15-06",
      personName: "Global Wellness",
      agenType: "Basic",
      waNumber: "+6285777802256",
      waChatText: waMessage,
      address: "Jl. HJ Majah Kamp Muk RT06 RW04 NO37 Cengkaraeng Kedaung Kali Jakarta Barat"
    }
  ];
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Agent Domisili - Jakarta",
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
      banner: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/jakarta/main-banner-jakarta.jpg",
      txtMainText: "Be the first",
      classTxtMainText: "text-zinc-100",
      classTxtBtnOrder: "text-emerald-900",
      txtPembelian: "Agent " + agentDomisili,
      classTxtPembelian: "text-zinc-900",
      persenPotongan: "11",
      discountTag,
      orderBtnText: "Pesan Disini",
      bannerBawah: 'MUSCLE FIRST AGENT <span class="font-black">' + agentDomisili + "</span>",
      waLink: "https://wa.me/628988183595/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0",
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
      descriptionAgen: "Cluster BlueBell Blok FC 06. Summarecon Bekasi. Patokan Exit tol Bekasi barat.",
      agentName: "Suplemen Indonesia Official",
      kontakAgenName: "Suplemen Indonesia Official",
      kontakAgen: "+628988183595",
      listPickAgen: listAgen,
      tokopediaLink: "https://www.tokopedia.com/suplemenindonesia?source=universe&st=product",
      shopeeLink: "https://shopee.co.id/suplemenindonesiaofficial",
      waLink: "https://wa.me/628988183595/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0"
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
