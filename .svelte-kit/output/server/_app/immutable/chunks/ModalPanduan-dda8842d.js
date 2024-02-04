import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, a as add_attribute } from "./index-b361c760.js";
import { h as openModalPanduan } from "./index-29c1f748.js";
import { Q as QrCode } from "./QrCode-aa55fa70.js";
import { a as Dialog } from "./common-65c7f3c2.js";
import { D as DialogOverlay, a as DialogTitle, b as Description } from "./Description-95a56521.js";
const ModalPanduan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $openModalPanduan, $$unsubscribe_openModalPanduan;
  $$unsubscribe_openModalPanduan = subscribe(openModalPanduan, (value) => $openModalPanduan = value);
  let { title } = $$props;
  const closeModal = () => {
    openModalPanduan.set("");
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.closeModal === void 0 && $$bindings.closeModal && closeModal !== void 0)
    $$bindings.closeModal(closeModal);
  $$unsubscribe_openModalPanduan();
  return `${$openModalPanduan ? `${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      open: $openModalPanduan === $openModalPanduan,
      as: "div",
      class: "fixed inset-0 z-10 overflow-y-auto"
    },
    {},
    {
      default: () => {
        return `<div class="${"flex justify-center items-center w-full h-full min-h-screen p-4"}">${validate_component(DialogOverlay, "DialogOverlay").$$render(
          $$result,
          {
            class: "fixed inset-0 bg-black opacity-30"
          },
          {},
          {}
        )}
        
            
            <span class="${"inline-block h-screen align-middle"}" aria-hidden="${"true"}"></span>
            <div class="${"inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"}"><div class="${"flex flex-col w-full h-auto space-y-2 border-1 p-4 mb-2 rounded-xl"}"><div class="${"flex flex-col w-full h-auto"}">${validate_component(DialogTitle, "DialogTitle").$$render(
          $$result,
          {
            as: "div",
            class: "flex justify-between items-center w-full h-auto"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex justify-start items-start w-full h-auto"}"><span class="${"text-left text-sm uppercase font-medium leading-6 text-black dark:text-white"}">${escape(title)} <span class="${"uppercase"}">${escape($openModalPanduan)}</span></span></div>
                            <div class="${"flex justify-end items-end w-full h-auto"}"><span class="${"text-right text-sm uppercase font-medium leading-6 text-black dark:text-white"}">${$openModalPanduan ? `<div class="${"w-4 h-4 bg-green-500 rounded-full"}"></div>` : ``}</span></div>`;
            }
          }
        )}</div>
                    <div class="${"w-full h-auto py-2 bg-transparent"}">${validate_component(Description, "DialogDescription").$$render(
          $$result,
          {
            class: "flex justify-center items-center w-full h-auto"
          },
          {},
          {
            default: () => {
              return `
                            <label${add_attribute("for", $openModalPanduan, 0)}></label>
                            
                            ${$openModalPanduan === "bulking" ? `${validate_component(QrCode, "QrCode").$$render(
                $$result,
                {
                  codeValue: "https://musclefirst.co.id/assets/site/paket/bulking.pdf",
                  squareSize: 240
                },
                {},
                {}
              )}` : `${validate_component(QrCode, "QrCode").$$render(
                $$result,
                {
                  codeValue: "https://musclefirst.co.id/assets/site/paket/cutting.pdf",
                  squareSize: 240
                },
                {},
                {}
              )}`}`;
            }
          }
        )}</div></div>

                <button class="${"p-2 w-full h-auto flex justify-center items-center bg-zinc-900 rounded-xl"}"><span class="${"font-bold text-white"}">Close</span></button></div></div>`;
      }
    }
  )}` : ``}`;
});
export {
  ModalPanduan as M
};
