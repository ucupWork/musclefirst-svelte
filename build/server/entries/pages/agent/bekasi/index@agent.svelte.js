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
let agentDomisili = "Bekasi";
let labelTxtPembelian = false;
let crownPin = false;
const Index_agent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listAgen = [];
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Agent Domisili - Bekasi",
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
      banner: "https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/domisili/bekasi/main-banner-bekasi.jpg",
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
