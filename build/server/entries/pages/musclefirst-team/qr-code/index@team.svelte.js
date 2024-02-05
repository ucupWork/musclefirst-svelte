import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from "../../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../../_app/immutable/chunks/index-778a8503.js";
import "../../../../_app/immutable/chunks/common-3de0477a.js";
import { w as websiteSchema, o as organizationSchema } from "../../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { M as MusclefirstTeam } from "../../../../_app/immutable/chunks/musclefirst-team-d080d861.js";
import { Q as QrCode } from "../../../../_app/immutable/chunks/QrCode-c85ba43c.js";
import "../../../../_app/immutable/chunks/index-e87efd75.js";
import "../../../../_app/immutable/chunks/stores-75875272.js";
import "../../../../_app/immutable/chunks/site-data-ef8bff3e.js";
/* empty css                                                                               */const Index_team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Musclefirst Team QrCode",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

<div class="${"flex justify-center items-center w-full h-auto md:h-screen py-32 md:py-0 bg-[#151515] relative"}"><div class="${"w-full h-full z-0 overflow-hidden"}"><css-doodle click-to-update>${escape(`
                :doodle {
                    @grid: 18 / 100vmax;
                    background: #0a0c27;
                }
                --hue: calc(180 + 1.5 * @row * @col);
                background: hsl(var(--hue), 50%, 70%);
                margin: -.5px;
                transition: @r(.5s) ease;
                clip-path: polygon(@pick(
                    '0 0, 100% 0, 100% 100%',
                    '0 0, 100% 0, 0 100%',
                    '0 0, 100% 100%, 0 100%',
                    '100% 0, 100% 100%, 0 100%'
                ));
            `)}</css-doodle></div>
    <div class="${"absolute inset-0 w-full h-full z-10"}"><div class="${"grid grid-cols-12 md:gap-4 w-full h-full"}"><div class="${"col-span-full md:col-span-6 w-full h-auto hidden md:flex justify-center items-center text-center md:text-left"}"><div class="${"flex flex-col w-full h-auto justify-center items-center relative"}"><div class="${"flex w-full justify-center items-center h-auto z-0"}"><img class="${"w-auto h-auto"}"${add_attribute("src", MusclefirstTeam, 0)} alt="${"Musclefirst Team"}"></div></div></div>
            <div class="${"col-span-full md:col-span-6 w-full h-auto flex justify-center items-center text-center md:text-left"}"><div class="${"flex flex-col w-full h-auto space-y-2 justify-center items-center relative"}"><div class="${"flex flex-col w-auto h-auto bg-white p-8 rounded-xl shadow"}">${validate_component(QrCode, "QrCode").$$render(
    $$result,
    {
      codeValue: `https://musclefirst.co.id/musclefirst-team`,
      squareSize: 240
    },
    {},
    {}
  )}</div>
                    <div class="${"bg-transparent px-4 py-2 rounded"}"><span class="${"font-bold text-white"}">Scan Me</span></div></div></div></div></div></div>`;
});
export {
  Index_team as default
};
