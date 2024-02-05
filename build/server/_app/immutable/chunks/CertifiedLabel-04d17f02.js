import { c as create_ssr_component, a as add_attribute, d as each, v as validate_component } from "./index-1e319aa9.js";
import { c as certifiedList } from "./list-certified-e272f300.js";
import { C as CardCertified } from "./CardCertified-3b8efa0e.js";
const CertifiedLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"flex flex-col md:flex-row justify-center items-center w-full h-auto mt-8 md:mt-0"}"><div class="${"w-full px-8 py-0 flex flex-col justify-center items-center bg-black"}"><div class="${"w-full flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8"}"><div class="${"grid grid-cols-6 md:grid-cols-6 gap-4 w-full mb-0"}">${each(certifiedList, (certified) => {
    return `<div class="${"col-span-2 md:col-span-1 w-full h-auto flex justify-center items-center rounded-md shadow-lg p-2 bg-white border"}">${validate_component(CardCertified, "CardCertified").$$render(
      $$result,
      {
        imgUrl: certified.imgUrl,
        altImg: certified.altImg
      },
      {},
      {}
    )}
                </div>`;
  })}</div></div></div></div>`;
});
export {
  CertifiedLabel as C
};
