import { c as create_ssr_component, b as subscribe, v as validate_component, a as add_attribute, e as escape } from "../../../_app/immutable/chunks/index-b361c760.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-a75d61d4.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { a as Dialog } from "../../../_app/immutable/chunks/common-65c7f3c2.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-b286f9d3.js";
import { c as commonjsGlobal, w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { m as modalOpen } from "../../../_app/immutable/chunks/index-bd400a30.js";
import { Q as QrCode } from "../../../_app/immutable/chunks/QrCode-aa55fa70.js";
import { D as DialogOverlay, a as DialogTitle, b as Description } from "../../../_app/immutable/chunks/Description-95a56521.js";
/* empty css                                                                            */import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-ff9b4fcb.js";
import "../../../_app/immutable/chunks/stores-290123b5.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
const ModalEkatalog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalOpen, $$unsubscribe_modalOpen;
  $$unsubscribe_modalOpen = subscribe(modalOpen, (value) => $modalOpen = value);
  let { title } = $$props;
  let { modalType } = $$props;
  const closeModal = () => {
    modalOpen.set(false);
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.modalType === void 0 && $$bindings.modalType && modalType !== void 0)
    $$bindings.modalType(modalType);
  if ($$props.closeModal === void 0 && $$bindings.closeModal && closeModal !== void 0)
    $$bindings.closeModal(closeModal);
  $$unsubscribe_modalOpen();
  return `${$modalOpen ? `${validate_component(Dialog, "Dialog").$$render(
    $$result,
    {
      open: $modalOpen === true,
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
            <div class="${"inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"}"><div class="${"flex flex-col w-full h-auto space-y-2 border-1 p-4 mb-2 rounded-xl"}"><div${add_attribute("id", modalType, 0)} class="${"flex flex-col w-full h-auto"}">${validate_component(DialogTitle, "DialogTitle").$$render(
          $$result,
          {
            as: "div",
            class: "flex justify-between items-center w-full h-auto"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex justify-start items-start w-full h-auto"}"><span class="${"text-left text-sm uppercase font-medium leading-6 text-black dark:text-white"}">${escape(title)}</span></div>
                            <div class="${"flex justify-end items-end w-full h-auto"}"><span class="${"text-right text-sm uppercase font-medium leading-6 text-black dark:text-white"}">${$modalOpen ? `<div class="${"w-4 h-4 bg-green-500 rounded-full"}"></div>` : ``}</span></div>`;
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
                            <label${add_attribute("for", modalType, 0)}></label>
                            
                            ${validate_component(QrCode, "QrCode").$$render(
                $$result,
                {
                  codeValue: "https://musclefirst.co.id/assets/site/all-products-catalog.pdf",
                  squareSize: 240
                },
                {},
                {}
              )}`;
            }
          }
        )}</div></div>

                <button class="${"p-2 w-full h-auto flex justify-center items-center bg-zinc-900 rounded-xl"}"><span class="${"font-bold text-white"}">Close</span></button></div></div>`;
      }
    }
  )}` : ``}`;
});
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", "string" != typeof f2)
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
        return c(b2, d2, e2);
      var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
let gDriveDocument = "https://drive.google.com/file/d/1ybK1t0dcMDTzapWMDp-LJbAfuY8_Zy0k/preview";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modalOpen;
  $$unsubscribe_modalOpen = subscribe(modalOpen, (value) => value);
  $$unsubscribe_modalOpen();
  return `<div class="${"w-full h-auto bg-zinc-100 relative py-8 md:py-0"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto px-8 md:px-16 max-w-3xl py-4 md:py-8"}"><span class="${"text-md font-black mt-2 text-amber-500 uppercase"}">${escape("Musclefirst")}<br></span>
			<h2 class="${"font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl mb-4"}">${escape("E-Katalog Produk")}</h2>
            <div class="${"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-auto h-auto"}"><button type="${"button"}" class="${"flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded"}"><span class="${"font-black text-xs uppercase md:hidden text-black"}">Download</span>
                    <span class="${"font-thin text-xs uppercase hidden md:block text-black"}"><small class="${"font-medium"}">Download</small></span>
                    <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-zinc-900 bi bi-download"}" viewBox="${"0 0 16 16"}"><path d="${"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"}"></path><path d="${"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"}"></path></svg></span></button>

                <button type="${"button"}" class="${"flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded"}"><span class="${"font-black text-xs uppercase md:hidden text-black"}">Download</span>
                    <span class="${"font-thin text-xs uppercase hidden md:block text-black"}"><small class="${"font-medium"}">Print</small></span>
                    <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-zinc-900 bi bi-printer-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"}"></path><path d="${"M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"}"></path></svg></span></button>
                
                <a rel="${"noreferrer"}" target="${"_blank"}" href="${"/assets/site/all-products-catalog.pdf"}" class="${"flex flex-row justify-between items-center w-full md:w-40 h-auto bg-white hover:bg-zinc-200 px-4 md:px-4 py-4 md:py-1 shadow rounded"}"><span class="${"font-black text-xs uppercase md:hidden text-black"}">Download</span>
                    <span class="${"font-thin text-xs uppercase hidden md:block text-black"}"><small class="${"font-medium"}">View on Browser</small></span>
                    <span class="${"w-auto h-auto"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-3 w-3 text-zinc-900 bi bi-box-arrow-up-right"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"}"></path><path fill-rule="${"evenodd"}" d="${"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"}"></path></svg></span></a></div></div>
		<div class="${"flex flex-row space-x-2 md:space-x-4 justify-end items-end w-full h-auto px-8 md:px-20 max-w-xl py-8 md:py-16"}"><button class="${"md:rounded-lg flex flex-row md:flex-col justify-between md:justify-center items-center px-8 md:px-0 w-full md:w-16 h-16 md:h-20 bg-black hover:bg-zinc-900 shadow"}"><span class="${"font-black text-xs uppercase md:hidden text-white"}">Barcode Scan</span>
                <span class="${"font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"h-8 w-8 text-zinc-100 bi bi-qr-code"}" viewBox="${"0 0 16 16"}"><path d="${"M2 2h2v2H2z"}"></path><path d="${"M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"}"></path><path d="${"M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"}"></path><path d="${"M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"}"></path><path d="${"M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"}"></path></svg></span>
                <span class="${"font-thin text-xs uppercase hidden md:block text-white"}"><small>Scan</small></span></button></div></div>
    
	<div class="${"w-full h-auto overflow-auto"}">
        ${`<div class="${"w-full h-auto p-1 bg-transparent shadow pb-4 md:pb-8 px-8 md:px-16"}"><iframe${add_attribute("src", gDriveDocument, 0)} title="${"Resume"}" width="${"100%"}" height="${"1000"}" allow="${"autoplay"}"></iframe></div>`}</div>
    
    ${validate_component(ModalEkatalog, "ModalEkatalog").$$render(
    $$result,
    {
      title: "E-Katalog",
      modalType: `Qrcode-Ekatalog`
    },
    {},
    {}
  )}
</div>`;
});
async function load({ url }) {
  const segment = url.pathname.substring(1).split("/")[0];
  return {
    segment,
    currentPage: url.pathname
  };
}
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { currentPage } = $$props;
  let { data } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(IndexScript, "FbPixelScript").$$render($$result, {}, {}, {})}

${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Katalog Produk",
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Katalog Produk",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Index_root as default,
  load
};
