import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { T as TabGroup, a as TabList, b as Tab, c as TabPanels, d as TabPanel } from "../../../_app/immutable/chunks/TabPanel-9f657ee1.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const chaTwo = "/_app/immutable/assets/cha-02-c78bd86d.webp";
const Index_challenge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Challenge",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex justify-center items-start w-full h-auto md:h-screen py-8 md:py-0 bg-[#151515] relative"}"><div class="${"grid grid-cols-12 gap-4 w-full h-auto pb-16 md:pb-0"}"><div class="${"col-span-full md:col-span-6 w-full h-auto flex justify-center items-center"}"><div class="${"flex w-full px-8 lg:px-8 pt-0"}"><div class="${"flex flex-nowrap w-full h-auto ml-0 md:ml-0 snap-x space-x-4 md:space-x-8 py-0"}"><div class="${"bg-transparent border border-yellow-200 shadow shadow-amber-400/50 w-auto h-auto mx-auto p-6 md:p-4"}"><div class="${"flex flex-col items-start mt-4"}"><div class="${"bg-white border p-2 mt-4"}"><img class="${"w-96 h-auto"}"${add_attribute("src", chaTwo, 0)} alt="${"Challenge Banner"}"></div>
                            <div class="${"flex flex-col ml-2 justify-between"}"><span class="${"font-semibold text-amber-500 text-sm uppercase"}">Bagi-Bagi BBM
                                </span>
                                <span class="${"text-zinc-100 text-xs flex font-bold items-center uppercase"}">Levelup Challenge
                                </span></div></div></div></div></div></div>
        <div class="${"col-span-full md:col-span-6 w-full h-auto"}"><div class="${"w-full flex flex-col py-12 md:py-0 px-8 md:px-0"}"><div class="${"w-full h-auto md:h-screen md:text-left text-center px-0 md:px-8 py-4 flex flex-col justify-start items-start"}"><div class="${"w-full flex flex-col justify-start items-start pl-4 md:pl-0 pt-0 md:pt-24"}"><div class="${"flex flex-col w-full mb-4 md:mb-0"}"><h1 class="${"font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-left text-white"}">${escape("Musclefirst Challenge")}</h1>
                            <h1 class="${"font-ttnorms w-full whitespace-pre-line text-2xl uppercase font-black text-left text-white"}">Periode 5 Oktober - 5 November 2022
                            </h1>
                            <p class="${"w-full mb-2 leading-relaxed whitespace-pre-line text-left text-white text-xs tracking-loose"}">${escape("Kami tantang sobat Muscle untuk takhlukan tantangan dan menangkan hadiah menarik!")}</p></div>
                        <div class="${"flex w-full h-auto relative px-0"}"><div class="${"flex w-full h-auto relative md:px-0 sm:col-span-8 md:space-y-4"}">${validate_component(TabGroup, "TabGroup").$$render($$result, { class: "w-full h-auto", defaultIndex: 0 }, {}, {
    default: () => {
      return `${validate_component(TabList, "TabList").$$render(
        $$result,
        {
          class: "grid grid-cols-3 gap-2 w-full h-auto mb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-black hover:bg-zinc-900 border border-yellow-200 px-2 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-center relative"}"><span class="${"text-zinc-100 font-medium uppercase text-xs"}">Cara Ikutan Challenge</span></div>`;
                }
              }
            )}
                                        ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-black hover:bg-zinc-900 border border-yellow-200 px-2 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-center relative"}"><span class="${"text-zinc-100 font-medium uppercase text-xs"}">Hadiahnya Apa Aja?</span></div>`;
                }
              }
            )}
                                        ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-black hover:bg-zinc-900 border border-yellow-200 px-2 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-center relative"}"><span class="${"text-zinc-100 font-medium uppercase text-xs"}">Syarat &amp; Ketentuan</span></div>`;
                }
              }
            )}`;
          }
        }
      )}
                                    ${validate_component(TabPanels, "TabPanels").$$render($$result, { class: "flex w-full h-auto pb-4" }, {}, {
        default: () => {
          return `${validate_component(TabPanel, "TabPanel").$$render(
            $$result,
            {
              class: "flex w-full h-auto border-b border-yellow-200"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex flex-col w-full h-auto md:h-96 text-left py-2 bg-black shadow p-4"}"><h3 class="${"font-ttnorms text-xl font-black tracking-wide text-white uppercase mt-2"}">Cara Ikut Challenge</h3>
                                                <time class="${"text-xs tracking-wide uppercase text-amber-500"}">OKT 05 - NOV 05</time>
                                                <div class="${"flex flex-col mt-2 md:mt-4 text-zinc-100 px-4 md:px-4"}"><ul class="${"text-sm list-decimal w-auto space-y-1"}"><li>Follow akun Instagram @musclefirst</li>
                                                        <li>Upload video &quot;Jumping Jack&quot; dengan sound musik yang telah di tentukan</li>
                                                        <li>Jangan lupa gunakan hashtag 
                                                            <a href="${"/"}" target="${"_blank"}">#bebaslemak</a> 
                                                            <a href="${"/"}" target="${"_blank"}">#wheyterbaik</a> dan 
                                                            <a href="${"/"}" target="${"_blank"}">#levelupmuscle</a></li></ul>
                                                    <small class="${"mt-2 text-xs uppercase"}">(Menampilkan produk musclefirst didalam video bisa jadi nilai tambah)</small></div></div>`;
              }
            }
          )}
                                        ${validate_component(TabPanel, "TabPanel").$$render(
            $$result,
            {
              class: "flex w-full h-auto border-b border-yellow-200"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex flex-col w-full h-auto md:h-96 text-left py-2 bg-black shadow p-4"}"><h3 class="${"font-ttnorms text-xl font-black tracking-wide text-white uppercase mt-2"}">Hadiahnya Apa Aja?</h3>
                                                <time class="${"text-xs tracking-wide uppercase text-amber-500"}">OKT 05 - NOV 05</time>
                                                <div class="${"flex flex-col mt-2 md:mt-4 text-zinc-200 px-4 md:px-4"}"><ul class="${"text-sm list-disc w-auto space-y-1"}"><li>1 Orang pemenang berhak mendapatkan 50 Voucher Shell <b>Rp.100.000</b> senilai <b>Rp.5.000.000</b></li>
                                                        <li>50 Orang pemenang berhak mendapatkan masing-masing <b>1 Voucher Pertamina Rp.100.000</b></li></ul></div></div>`;
              }
            }
          )}
                                        ${validate_component(TabPanel, "TabPanel").$$render(
            $$result,
            {
              class: "flex w-full h-auto border-b border-yellow-200"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex flex-col w-full h-auto md:h-96 text-left py-2 bg-black shadow p-4"}"><h3 class="${"font-ttnorms text-xl font-black tracking-wide text-white uppercase mt-2"}">Syarat &amp; Ketentuan</h3>
                                                <time class="${"text-xs tracking-wide uppercase text-amber-500"}">OKT 05 - NOV 05</time>
                                                <div class="${"flex flex-col mt-2 md:mt-4 text-zinc-200 px-4 md:px-4"}"><ul class="${"text-sm list-disc w-auto space-y-1"}"><li>Punya akun &quot;Tiktok&quot; aktif</li>
                                                        <li>Upload video &quot;Jumping Jack&quot; dengan sound musik yang telah ditentukan</li>
                                                        <li>Periode challenge 5 Oktober - 5 November 2022</li>
                                                        <li>Pengumuman akan diumumkan pada tanggal 5 November melalui Instagram @musclefirstofficial</li>
                                                        <li>Tag minimal 1 teman di video yang kamu buat</li>
                                                        <li>Keputusan tim @musclefirstofficial tak bisa diganggu gugat</li>
                                                        <li>Batas pengiriman data 1x24 jam setelah pengumuman</li></ul></div></div>`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</div></div></div></div></div></div></div></div>`;
});
export {
  Index_challenge as default
};
