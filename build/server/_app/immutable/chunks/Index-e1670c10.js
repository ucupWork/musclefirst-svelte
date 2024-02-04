import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, d as each, e as escape, y as set_store_value } from "./index-b361c760.js";
import { e as searchAgent, f as selectedRegion } from "./index-bd400a30.js";
import { C as CardNoResult } from "./CardNoResult-a13636d9.js";
import { D as Disclosure } from "./common-65c7f3c2.js";
import { D as DisclosureButton, a as DisclosurePanel } from "./DisclosureButton-e519f4d4.js";
const SearchAgent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val = "" } = $$props;
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  {
    searchAgent.set(val);
  }
  return `<div class="${"flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full px-2 md:px-8"}"><div class="${"w-full h-auto relative"}"><input type="${"text"}" class="${"w-full py-4 pr-10 pl-4 rounded text-md text-white bg-transparent border-b border-zinc-500 dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring"}"${add_attribute("placeholder", "Cari Agen Favorit", 0)}${add_attribute("value", val, 0)}>
        
        <span class="${"absolute inset-y-0 right-0 flex items-center pr-4"}"><svg class="${"w-5 h-5 text-white dark:text-white"}" viewBox="${"0 0 24 24"}" fill="${"none"}"><path d="${"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></span></div></div>`;
});
const ListAgents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchAgent, $$unsubscribe_searchAgent;
  $$unsubscribe_searchAgent = subscribe(searchAgent, (value) => $searchAgent = value);
  let { filteredAgents = [] } = $$props;
  let { listAgents = [] } = $$props;
  if ($$props.filteredAgents === void 0 && $$bindings.filteredAgents && filteredAgents !== void 0)
    $$bindings.filteredAgents(filteredAgents);
  if ($$props.listAgents === void 0 && $$bindings.listAgents && listAgents !== void 0)
    $$bindings.listAgents(listAgents);
  $$unsubscribe_searchAgent();
  return `${$searchAgent && (filteredAgents || []).length === 0 ? `${validate_component(CardNoResult, "CardNoResult").$$render($$result, { cardType: "agent" }, {}, {})}` : `${(filteredAgents || []).length > 0 ? `<div class="${"px-0 md:px-8 pt-8 md:pt-10 pb-8 md:pb-16 grid grid-cols-1 gap-4 justify-center items-start w-full"}">${each(filteredAgents, ({ wilayah, listAgen }) => {
    return `<div class="${"col-span-full w-auto h-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Disclosure, "Disclosure").$$render(
      $$result,
      {
        class: "flex flex-col justify-center items-center w-full h-auto shadow border bg-transparent border-zinc-300 p-4 rounded-t-2xl"
      },
      {},
      {
        default: ({ open }) => {
          return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
            $$result,
            {
              class: "flex justify-between items-center w-full h-auto py-4 px-4 bg-zinc-50 rounded-t-2xl"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex flex-row items-center"}"><div class="${"flex justify-center items-center " + escape(open ? "bg-zinc-200" : "bg-zinc-900", true) + " border-2 border-zinc-500 w-8 h-8 rounded-full mr-4"}"><span class="${"text-xs font-black uppercase " + escape(open ? "text-zinc-900" : "text-zinc-200 ", true)}">${escape(listAgen == null ? void 0 : listAgen.length)}</span></div>
                        <h2 class="${"flex bg-transparen py-0"}"><span class="${"text-md font-bold text-black"}">${escape(wilayah)}</span>
                        </h2></div>
                    
                    <div class="${"i-bi-chevron-right text-zinc-900 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>
                `;
              }
            }
          )}
                
                ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
            $$result,
            {
              class: "flex flex-col w-full h-auto bg-transparent border-none shadow-xl py-2 md:py-4 px-2 md:px-4"
            },
            {},
            {
              default: () => {
                return `${validate_component(AgentItem, "AgentItem").$$render($$result, { agent: listAgen }, {}, {})}
                `;
              }
            }
          )}
            `;
        }
      }
    )}</div>
    </div>`;
  })}</div>` : `<div class="${"px-0 md:px-8 pt-12 md:pt-10 pb-8 md:pb-16 grid grid-cols-1 gap-4 justify-center items-start w-full"}">${each(listAgents, ({ wilayah, listAgen }) => {
    return `<div class="${"col-span-full w-auto h-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Disclosure, "Disclosure").$$render(
      $$result,
      {
        class: "flex flex-col justify-center items-center w-full h-auto shadow border bg-transparent hover:bg-inc-900 border-zinc-300 p-4 rounded-t-2xl"
      },
      {},
      {
        default: ({ open }) => {
          return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
            $$result,
            {
              class: "flex justify-between items-center w-full h-auto py-4 px-4 bg-zinc-200 border border-zinc-200 rounded-t-2xl"
            },
            {},
            {
              default: () => {
                return `<div class="${"flex flex-row items-center"}"><div class="${"flex justify-center items-center " + escape(open ? "bg-zinc-200" : "bg-zinc-900", true) + " border-2 border-zinc-500 w-8 h-8 rounded-full mr-4"}"><span class="${"text-xs font-black uppercase " + escape(open ? "text-zinc-900" : "text-zinc-200 ", true)}">${escape(listAgen == null ? void 0 : listAgen.length)}</span></div>
                        <h2 class="${"flex bg-transparent py-0"}"><span class="${"text-md font-bold text-zinc-900"}">${escape(wilayah)}</span>
                        </h2></div>
                    
                    <div class="${"i-bi-chevron-right text-zinc-900 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>
                `;
              }
            }
          )}
                
                ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
            $$result,
            {
              class: "flex flex-col w-full h-auto bg-transparent border-none shadow-xl py-2 md:py-4 px-2 md:px-4"
            },
            {},
            {
              default: () => {
                return `${validate_component(AgentItem, "AgentItem").$$render($$result, { agent: listAgen }, {}, {})}
                `;
              }
            }
          )}
            `;
        }
      }
    )}</div>
    </div>`;
  })}</div>`}`}`;
});
const AgentItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { agent = [] } = $$props;
  if ($$props.agent === void 0 && $$bindings.agent && agent !== void 0)
    $$bindings.agent(agent);
  return `${(agent || []).length > 0 ? `${each(agent, (val) => {
    return `<div class="${"w-full h-auto flex flex-col border-b pb-2 px-4 py-4 border"}"><div class="${"w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-4"}"><div class="${"flex flex-row justify-start items-start w-auto h-auto space-y-0 md:space-y-0 space-x-0 md:space-x-4"}"><div class="${"hidden md:flex flex-row w-auto h-auto"}">${val.waNumber ? `<span class="${"flex justify-center items-center font-bold text-zinc-200 rounded-md w-12 h-12 bg-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-zinc-900 w-6 h-6 bi bi-house-fill"}" viewBox="${"0 0 16 16"}"><path d="${"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"}"></path><path d="${"m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"}"></path></svg>                                      
                    </span>` : ``}</div>
                <div class="${"flex flex-col space-y-0 w-full h-auto text-left"}"><span class="${"flex font-bold text-amber-500"}">${escape(val.personName)}</span>
                    <div class="${"flex flex-row items-center space-x-2 md:space-x-3 w-auto h-auto"}"><div class="${"ml-0 text-sm"}"><small class="${"text-zinc-900 uppercase font-medium italic"}">${escape(val.agenType)}</small></div>
                        ${val.distric ? `<div class="${"text-xs"}"><small class="${"text-zinc-900 uppercase"}">${escape(val.distric)}</small>
                        </div>` : ``}</div>
                </div></div>
            <div class="${"flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto mt-2"}">

                ${val.mapsLink ? `<a id="${"maps_id"}" target="${"_blank"}"${add_attribute("href", val.mapsLink, 0)} class="${"hidden md:flex flex-row space-x-2 justify-center items-center font-bold text-zinc-200 rounded-full w-auto h-auto px-4 py-1 bg-amber-500 shadow-lg border shadow-amber-500/50 ml-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-map-2"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"}"></path><path d="${"M9 4v13"}"></path><path d="${"M15 7v5.5"}"></path><path d="${"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"}"></path><path d="${"M19 18v.01"}"></path></svg>
                    <span class="${"uppercase text-sm"}">Maps</span>                                     
                </a>` : ``}

                ${val.waNumber ? `<a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://wa.me/" + escape(val.waNumber, true) + "/?text=" + escape(val.waChatText, true)}" class="${"hidden md:flex flex-row space-x-2 justify-center items-center font-bold text-zinc-200 rounded-full w-auto h-auto px-4 py-1 bg-green-500 shadow-lg border shadow-green-500/50 ml-4"}"><span class="${"uppercase text-sm"}">Buy Here</span>                                     
                </a>` : ``}
            </div></div>

        </div>
        
    <div class="${"flex flex-col md:flex-row md:space-x-4 w-full md:w-auto h-auto"}"><div class="${"w-full h-auto flex flex-row space-x-2 justify-start items-center py-2 mr-4"}">${val.codType ? `<span class="${"font-bold rounded-full px-2 py-1 bg-cyan-500 text-xs uppercase text-white"}">COD</span>` : ``}
            ${val.gojekType ? `<span class="${"font-bold rounded-full px-2 py-1 bg-green-500 text-xs uppercase text-white"}">Gojek</span>` : ``}
            ${val.grabType ? `<span class="${"font-bold rounded-full px-2 py-1 bg-emerald-500 text-xs uppercase text-white"}">Grab</span>` : ``}</div>

        ${val.waNumber ? `<div class="${"flex md:hidden justify-between items-center w-full h-auto py-4 px-4 border-b"}"><a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://wa.me/" + escape(val.waNumber, true) + "/?text=" + escape(val.waChatText, true)}" class="${"flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full h-auto px-4 py-2 bg-green-500 shadow-lg border shadow-green-500/50"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" class="${"text-white w-6 h-6 bi bi-whatsapp"}" viewBox="${"0 0 16 16"}"><path d="${"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}"></path></svg>
                <span class="${"uppercase text-sm"}">Buy Here</span></a>
        </div>` : ``}

        ${val.mapsLink ? `<div class="${"flex md:hidden justify-between items-center w-full h-auto py-4 px-4 border-b"}"><a id="${"maps_id"}" target="${"_blank"}"${add_attribute("href", val.mapsLink, 0)} class="${"flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full h-auto px-4 py-1 bg-amber-500 shadow-lg border shadow-amber-500/50"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-map-2"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"}"></path><path d="${"M9 4v13"}"></path><path d="${"M15 7v5.5"}"></path><path d="${"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"}"></path><path d="${"M19 18v.01"}"></path></svg>
                <span class="${"uppercase text-sm"}">Maps</span></a>
        </div>` : ``}
    </div>`;
  })}` : `<div class="${"w-full h-auto flex flex-col space-y-2"}">
    <a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://wa.me/6281388328823/?text=Halo,%20saya%20mau%20join%20reseller%20MuscleFirst"}" class="${"px-6 font-bold text-zinc-200 rounded-full p-2 bg-amber-500 shadow-lg border shadow-amber-500/50"}"><span class="${"uppercase font-bold"}">Daftar Reseller</span></a></div>`}`;
});
const DaftarAgen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listAgents = [] } = $$props;
  let { colorType } = $$props;
  let count = 0;
  if ($$props.listAgents === void 0 && $$bindings.listAgents && listAgents !== void 0)
    $$bindings.listAgents(listAgents);
  if ($$props.colorType === void 0 && $$bindings.colorType && colorType !== void 0)
    $$bindings.colorType(colorType);
  return `<div class="${"flex flex-col md:flex-row justify-between w-full h-auto px-8 pb-16 md:pb-0 md:px-8 py-0 md:py-8 space-y-4 md:space-y-0"}"><div class="${"flex flex-col md:flex-row items-center md:space-x-4 w-auto h-auto"}"><div class="${"flex flex-col text-center md:text-left w-auto h-auto mb-4 md:mb-0"}"><h2 class="${"font-black text-4xl hidden"}">${escape(count)}</h2></div>
        <div class="${"flex flex-col -space-y-2 text-center md:text-left w-auto h-auto"}"><span class="${escape(
    colorType === "default" ? "text-amber-500" : "text-pink-500",
    true
  ) + " dark:text-white font-black text-md uppercase"}">Ingin Menjadi</span>
            <span class="${escape(
    colorType === "default" ? "text-amber-900" : "text-pink-900",
    true
  ) + " dark:text-white font-bold text-md uppercase"}">Agen Muscle First ?</span></div></div>
    ${colorType === "default" ? `<a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "https://wa.me/6281289497391/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0", 0)} class="${"w-auto h-auto bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 px-8 py-4 rounded"}"><span class="${"text-white uppercase text-sm font-bold"}">Daftar Agen</span></a>` : `<a rel="${"noreferrer"}" target="${"_blank"}"${add_attribute("href", "https://wa.me/6281289497391/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0", 0)} class="${"w-auto h-auto bg-gradient-to-r from-rose-400 to-pink-400 shadow-lg border shadow-rose-600/50 px-8 py-4 rounded"}"><span class="${"text-white uppercase text-sm font-bold"}">Daftar Agen</span></a>`}</div>
`;
});
const SelectAgent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedRegion;
  $$unsubscribe_selectedRegion = subscribe(selectedRegion, (value) => value);
  let { regions = [] } = $$props;
  let { val = "" } = $$props;
  if ($$props.regions === void 0 && $$bindings.regions && regions !== void 0)
    $$bindings.regions(regions);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  {
    selectedRegion.set(val);
  }
  $$unsubscribe_selectedRegion();
  return `<div class="${"flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full px-2 md:px-8"}"><div class="${"w-full h-auto relative"}"><select class="${"w-full py-4 pr-10 pl-4 text-md text-zinc-500 bg-transparent border-b border-zinc-500 dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring"}" name="${"menu"}" id="${"menu"}"><option disabled selected value="${""}">${escape("Semua Wilayah")}</option><option value="${"all"}">${escape("Pilih Wilayah")}</option>${each(regions, (region) => {
    return `<option${add_attribute("value", region, 0)}>${escape(region)}</option>`;
  })}</select></div></div>`;
});
let waMessage = "Info%20Dari%20Website%20%3A%22Hallo%2C%20Saya%20tertarik%20dengan%20promo%20Muscle%20First%20terbaru%22";
const listAgenData = [
  {
    id: "LSAD01",
    wilayah: "Aceh",
    listAgen: [
      {
        id: "LSAD01-01",
        personName: "Andi Putra",
        agenType: "Basic",
        waNumber: "+6285262525252",
        address: "Apotek Sentral - Jalan Perdagangan no.21 Lhokseumawe",
        noteAddress: "Belakang Masjid",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD02",
    wilayah: "Bali",
    listAgen: [
      {
        id: "LSAD02-01",
        personName: "Bali Gym Store",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+08113808058",
        address: "Hotel Quest, Jl. Mahendradatta No.100, Seberang, Kec. Denpasar Bar., Kota Denpasar, Bali 80234",
        waChatText: waMessage,
        mapsLink: "https://maps.app.goo.gl/4ng6g6o1HN9wciFVA"
      },
      {
        id: "LSAD02-02",
        personName: "Limitless Gym Store",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6289655019024",
        address: "JL. Pantai Kuta, Kuta, Kec. Kuta Sel. Kabupaten Badung, Bali 80361",
        waChatText: waMessage,
        mapsLink: "https://maps.app.goo.gl/cxbZxvaSV8edvEpB7"
      },
      {
        id: "LSAD02-03",
        personName: "Canggu Gym Store",
        agenType: "Basic",
        waNumber: "+081996778882",
        address: "Jl. Raya Uma Buluh No.30, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351",
        waChatText: waMessage,
        mapsLink: "https://maps.app.goo.gl/c1SqdvhxT8u2YHkA6"
      },
      {
        id: "LSAD02-04",
        personName: "Garuda Gym Store",
        agenType: "Basic",
        waNumber: "+081236676568",
        address: "Jl. Tukad Badung No.17e, Renon, Denpasar Selatan, Kota Denpasar, Bali 80234",
        waChatText: waMessage,
        mapsLink: "https://maps.app.goo.gl/c1SqdvhxT8u2YHkA6"
      },
      {
        id: "LSAD02-05",
        personName: "Limitless Nutrition - Beachwalk Kuta",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6289655019024",
        address: "JL. Pantai Kuta, Kuta, Kec. Kuta Sel. Kabupaten Badung, Bali 80361",
        waChatText: waMessage,
        mapsLink: "https://maps.app.goo.gl/3nvNmhVccMfvQMfr7"
      },
      {
        id: "LSAD02-06",
        personName: "Zaen Gym Store",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6282147800028",
        address: "Jl. Raya Sesetan No 84A, Denpasar Selatan, Bali 80223",
        waChatText: waMessage,
        tokpedLink: "https://www.tokopedia.com/zaengymstore",
        shopeeLink: "https://shopee.co.id/zaengymstore"
      }
    ]
  },
  {
    id: "LSAD03",
    wilayah: "Bangka Belitung",
    listAgen: [
      {
        id: "LSAD03-01",
        personName: "Kris-MAX Gym",
        agenType: "Basic",
        waNumber: "+6285382091010",
        address: "Jl. A. Yani Dalam (Jl.baru)",
        noteAddress: "300m Dari SPBU sebelah kanan arah Pasar Pagi",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD03-02",
        personName: "Jimmy",
        agenType: "Basic",
        waNumber: "+6282289364370",
        address: "Jl.Selan",
        noteAddress: "Sebelah Pangkal Pinang Bangka Belitung",
        waChatText: waMessage
      },
      {
        id: "LSAD03-03",
        personName: "Amie",
        agenType: "Basic",
        waNumber: "+6285281332555",
        address: "Jl. Puput Atas No.154 Parit 3 Jebus Bangka Barat 33362",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD04",
    wilayah: "Bengkulu",
    listAgen: []
  },
  {
    id: "LSAD05",
    wilayah: "Bandung",
    listAgen: [
      {
        id: "LSAD05-01",
        personName: "Wilson",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6285721221151",
        waChatText: waMessage,
        address: "Jl.Mahar Martanegara NO.7 (Dekat Flayover Cimindi) - Toko Bagus,Cimahi"
      },
      {
        id: "LSAD05-02",
        personName: "Gorilla Suplement",
        distric: "Bandung",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6281212142810",
        address: "Jl Taman Kopo Indah",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD05-03",
        personName: "Ahmad Zadi",
        distric: "Bandung",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6285875333516",
        address: "Jl Pasir Mas I No 10",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD06",
    wilayah: "Bekasi",
    listAgen: [
      {
        id: "LSAD06-01",
        personName: "Suplemen Indonesia",
        distric: "Bekasi",
        agenType: "Basic",
        waNumber: "+628988183595",
        address: "Cluster Bluebeli Blok FC 06 Summarecon Bekasi",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD07",
    wilayah: "Bogor",
    listAgen: []
  },
  {
    id: "LSAD08",
    wilayah: "Depok",
    listAgen: [
      {
        id: "LSAD08-01",
        personName: "Ultra Suplemen Cibubur",
        distric: "Depok",
        agenType: "Basic",
        waNumber: "+628119332804",
        address: "Ruko City Walk Raffles Hills Blok Lt No 19, Kota Depok, Jawa Barat 16455",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD08-02",
        personName: "Viropana Store",
        distric: "Depok",
        agenType: "Basic",
        waNumber: "+6282110070248",
        address: "-",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD08-03",
        personName: "Musclepotions",
        distric: "Depok",
        agenType: "Basic",
        waNumber: "+6281226487182",
        address: "Perumahan bukit cengkeh 2, blok b3 no5, cimanggis, depok",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD09",
    wilayah: "Gorontalo",
    listAgen: []
  },
  {
    id: "LSAD10",
    wilayah: "Indramayu",
    listAgen: [
      {
        id: "LSAD10-01",
        personName: "Starfitenss",
        agenType: "Basic",
        address: "Star Jaya, Futsal & Gym, Desa Kopyah, kec. Anjatan Kabupaten Indramayu",
        waNumber: "+6281315150004",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD11",
    wilayah: "Jakarta Pusat",
    listAgen: [
      {
        id: "LSAD11-01",
        personName: "Bandaneira",
        agenType: "Basic",
        waNumber: "+6283899362673",
        address: "Jl.Belakang Pasar Baru III No.20 BRT.1/RW.4 Jakarta Pusat 10710",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD12",
    wilayah: "Jakarta Selatan",
    listAgen: [
      {
        id: "LSAD12-01",
        personName: "The Next Store",
        agenType: "Basic",
        waNumber: "+6281282100141",
        waChatText: waMessage,
        address: "Komplek Kodam Tanah Kusir Jl. Cendrawasih 2 Rt 002 / Rw 008 No. 59B",
        noteAddress: "Dekat Pasar kebayoran Lama",
        codType: true
      }
    ]
  },
  {
    id: "LSAD13",
    wilayah: "Jakarta Timur",
    listAgen: [
      {
        id: "LSAD13-01",
        personName: "Suplemenplus",
        agenType: "Basic",
        waNumber: "+6285340160006",
        address: "Jl.Kemuning Dalam No 36C, Utan Kayu Utara - Jakarta Utara",
        noteAddress: "( Gang Masjid Al Ahyar )"
      }
    ]
  },
  {
    id: "LSAD14",
    wilayah: "Jakarta Utara",
    listAgen: [
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
        personName: "Vitamin Diskon",
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
      }
    ]
  },
  {
    id: "LSAD15",
    wilayah: "Jakarta Barat",
    listAgen: [
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
      }
    ]
  },
  {
    id: "LSAD16",
    wilayah: "Jawa Tengah",
    listAgen: [
      {
        id: "LSAD16-01",
        personName: "Calvin",
        distric: "Purwokerto",
        agenType: "Basic",
        waNumber: "+6281273364990",
        address: "JL.Parang Kusumo Raya No.36 Kec.Pedurungan Kota Semarang 50196",
        waChatText: waMessage
      },
      {
        id: "LSAD16-02",
        personName: "Eldwin",
        distric: "Purwokerto",
        agenType: "Basic",
        waNumber: "+6287832270892",
        address: "Candi Mutiara Raya F-57 Pasadena Semarang Barat, Semarang",
        waChatText: waMessage
      },
      {
        id: "LSAD16-03",
        personName: "Maximum",
        distric: "Purwokerto",
        agenType: "Basic",
        waNumber: "+6281392475818",
        address: "JL.H.R.Bunyamin No.80 Purwokerto",
        noteAddress: "( Depan Banyumas Motor )",
        waChatText: waMessage
      },
      {
        id: "LSAD16-04",
        personName: "My Gym",
        distric: "Magelang",
        agenType: "Basic",
        waNumber: "+6289502340280",
        address: "Jl. Medang 11 (Nanggulan) Kel. Panjang Kec. Magelang Tengah",
        noteAddress: "Depan SD Bunda",
        waChatText: waMessage
      },
      {
        id: "LSAD16-05",
        personName: "Omah Suplemen",
        distric: "Semarang",
        agenType: "Basic",
        waNumber: "+6281805948988",
        address: "Puri Njasmoro Blok O1/30, Tawangsari, Semarang",
        waChatText: waMessage
      },
      {
        id: "LSAD16-06",
        personName: "Suplement Fitness Kroya",
        distric: "Cilacap",
        agenType: "Basic",
        waNumber: "+62895339678160",
        address: "Jl. Carikan No 72 Jepara Kulon, Binangun, Cilacap, Jawa Tengah 53281",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD17",
    wilayah: "Jawa Barat",
    listAgen: [
      {
        id: "LSAD17-01",
        personName: "Kelvin Fitness Center",
        distric: "Cirebon",
        agenType: "Basic",
        waNumber: "+628128024158",
        address: "JL.Merdeka barat No. 57, Kec. Ciledug, Kab. CIrebon, Jawa Barat 45188",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD17-01",
    wilayah: "Jawa Timur",
    listAgen: [
      {
        id: "LSAD-01-17-01",
        personName: "Suplemen Banyuwangi",
        distric: "Banyuwangi",
        agenType: "Basic",
        waNumber: "+6281999548500",
        address: "JL. Yos Sudarso No 83 Banyuwangi",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD18",
    wilayah: "Jambi",
    listAgen: []
  },
  {
    id: "LSAD19",
    wilayah: "Kalimantan Utara",
    listAgen: [
      {
        id: "LSAD19-01",
        personName: "Wansa ( Suplemen Kita )",
        distric: "Tarakan",
        agenType: "Basic",
        address: "Jl. Jembatan Bongkok RT.01 NO.74. Tarakan",
        noteAddress: "seberang SD Sebelum Tanjakan Jembatan Bongkok",
        waNumber: "+6281258457201",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD20",
    wilayah: "Kalimantan Barat",
    listAgen: [
      {
        id: "LSAD20-01",
        personName: "JNK",
        distric: "Pontianak",
        agenType: "Basic",
        waNumber: "+6282256423398",
        waChatText: waMessage
      },
      {
        id: "LSAD20-02",
        personName: "Agustina Victoria / Vania",
        agenType: "Basic",
        waNumber: "+62811310487",
        waChatText: waMessage
      },
      {
        id: "LSAD20-03",
        personName: "Exp GYM Supplement",
        agenType: "Basic",
        waNumber: "+6282251375525",
        address: "Jl. Lintas Melawi No 20E-20F, Sintang. Kalimantan Barat",
        waChatText: waMessage
      },
      {
        id: "LSAD20-04",
        personName: "MYGYM",
        agenType: "Basic",
        waNumber: "+6282151607265",
        address: "Jl. Parti Makmur No 9A, Siantan Hilir, Pontianak Utara",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD21",
    wilayah: "Kalimantan Selatan",
    listAgen: [
      {
        id: "LSAD21-01",
        personName: "Olan Suplemen Gym",
        distric: "Banjarmasin",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6285251421334",
        address: "Jl Kayu Tangi 2 Jalur 2 RT 15 No. 23 Pangeran, Kec. Banjarmasin Utara",
        waChatText: waMessage
      },
      {
        id: "LSAD21-02",
        personName: "Ncek Suplemen",
        distric: "Banjarmasin",
        agenType: "Basic",
        waNumber: "+6285102559963",
        address: "Jl Mayjen Sutoyo S Gg, St, Pelambuan. Kec Banjarmasin Barat",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD22",
    wilayah: "Kalimantan Tengah",
    listAgen: [
      {
        id: "LSAD22-01",
        personName: "Toko Terang Abadi",
        distric: "Sampit",
        agenType: "Basic",
        waNumber: "+6281255553732",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD23",
    wilayah: "Kalimantan Timur",
    listAgen: [
      {
        id: "LSAD23-01",
        personName: "Albert Weliyanto",
        distric: "Samarinda",
        agenType: "Basic",
        waNumber: "+6282353238430",
        address: "Jl. Pm Noor Deret Ruko 88 NO.01 Sempaja Selatan - Samarinda",
        waChatText: waMessage
      },
      {
        id: "LSAD23-02",
        personName: "Borneo Suplement",
        distric: "Balikpapan",
        agenType: "Basic",
        waNumber: "+6282151930329",
        address: "Komplek Bukit Damai Indah Blok E NO.33 , Balikpapan, 76114",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD24",
    wilayah: "Lampung",
    listAgen: [
      {
        id: "LSAD24-01",
        personName: "Medika Herbal",
        distric: "Lampung",
        agenType: "Basic",
        waNumber: "+6281296138422",
        address: "Jl. Teuku Umar No.21, Kedaton. Bandar Lampung",
        noteAddress: "Samping Puskesmas Rawat Inap Kedaton, Sebelum Fly Over Mall Bumi Kedaton",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD25",
    wilayah: "Maluku",
    listAgen: [
      {
        id: "LSAD25-01",
        personName: "Ambon Suplement Center",
        distric: "Ambon",
        agenType: "Basic",
        waNumber: "+6282151479397",
        address: "Jl. Jendral Sudirman, Kota Ambon, Provinsi Maluku.",
        noteAddress: "( Lantai 2, Ruko Janji Jiwa 978 )",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD26",
    wilayah: "Maluku Utara",
    listAgen: []
  },
  {
    id: "LSAD27",
    wilayah: "Malang",
    listAgen: [
      {
        id: "LSAD27-01",
        personName: "Yogy Prasetyo",
        agenType: "Basic",
        waNumber: "+6285646751470",
        address: "Perumahan Delta Dieng Blok E5, Kel.Pisang Candi, Sukun, Malang",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD28",
    wilayah: "NTT",
    listAgen: [
      {
        id: "LSAD28-01",
        personName: "Richard Foes (Gudang Suplemen)",
        distric: "Kupang",
        agenType: "Basic",
        waNumber: "+6281246390819",
        address: "Jl. Timor Raya, Kelapa Lima",
        noteAddress: "Belakang Gereja Galed, Gang Ke 2 Sebelah Kanan",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD29",
    wilayah: "NTB",
    listAgen: [
      {
        id: "LSAD29-01",
        personName: "Lastreps!",
        distric: "Mataram",
        agenType: "Basic",
        waNumber: "+6282340584919",
        address: "Jl. Sandubaya Mandalika, Mataram NTB, 83236",
        noteAddress: "Toko Grosir Dewata Samping Index Bangunan",
        waChatText: waMessage
      },
      {
        id: "LSAD29-02",
        personName: "Suplemen Mataram Sejahtera",
        distric: "Mataram",
        agenType: "Basic",
        waNumber: "+6285955165360",
        address: "Jl. Caturwarga No 18 Mataram Kelurahan, Mataram Timur, Kec Mataram Kota Mataram NTB",
        waChatText: waMessage
      },
      {
        id: "LSAD29-03",
        personName: "Suplemen Store & Apparel",
        distric: "Mataram",
        agenType: "Basic",
        waNumber: "+62895365281958",
        address: "Jl. Arif Rahman Hakim No. 51, Mataram Tim, Kec. Mataram, Kota Mataram, Nusa Tenggara Bar. 83127",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD30",
    wilayah: "Kep Riau",
    listAgen: [
      {
        id: "LSAD30-01",
        personName: "EQ Healthcare & Beauty",
        distric: "Tanjung Balai",
        agenType: "Basic",
        waNumber: "+6282140686666",
        address: "Baran 1, Jl. Jendral. A. Yani",
        waChatText: waMessage
      },
      {
        id: "LSAD30-02",
        personName: "Nutrition Paradise",
        distric: "Tanjung Pinang",
        agenType: "Basic",
        waNumber: "+",
        address: "Jl. MT Haryono, No.24 KM 3, Kec Bukit Lestari",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD31",
    wilayah: "Riau",
    listAgen: [
      {
        id: "LSAD31-01",
        personName: "RIT Fitness",
        distric: "Pekanbaru",
        agenType: "Basic",
        waNumber: "+6282289882335",
        address: "Jln. Tamtama no.10C & 10D Kec, Payung Sekaki Labuh Baru Timur. Pekanbaru Riau 28292",
        waChatText: waMessage
      },
      {
        id: "LSAD31-02",
        personName: "Starsfits",
        distric: "Batam",
        agenType: "Basic",
        waNumber: "+6282255882290",
        address: "Ruko Royal Sincom Blok E NO.17, Batam Center",
        waChatText: waMessage
      },
      {
        id: "LSAD31-03",
        personName: "Win Suplemen",
        distric: "Batam",
        agenType: "Basic",
        waNumber: "+6285264142666",
        address: "Ruko Buana Central Park Blok Jefferson No 27, Batam",
        noteAddress: "Sebelum TOP100 Tembesi ( Dari Arah Muka Kuning )",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD32",
    wilayah: "Sulawesi Barat",
    listAgen: []
  },
  {
    id: "LSAD33",
    wilayah: "Sulawesi Selatan",
    listAgen: [
      {
        id: "LSAD33-01",
        personName: "Diff Suplement Store",
        agenType: "Basic",
        waNumber: "+628114134088",
        address: "Jln Sunu No 176, Tallo, Makassar",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD33-02",
        personName: "Mars Gym",
        agenType: "Basic",
        waNumber: "+6281241445412",
        address: "Gedung Graha Pena, Lantai basment, Panaikang, Panakukang, Pampang Makassar",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD33-03",
        personName: "Satrio Suplemen Store",
        agenType: "Basic",
        waNumber: "6282349888939",
        address: "Wua-wua, Jl. Ichsan Perdana",
        noteAddress: "( Jalur Dua Depan spadzio / D'icon Hotel )",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD34",
    wilayah: "Sulawesi Tengah",
    listAgen: [
      {
        id: "LSAD34-01",
        personName: "Agen Thor Gym Palu",
        agenType: "Basic",
        waNumber: "+6281283507262",
        address: "Pandanjakaya Kota Palu, Sulawesi Tengah",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD34-02",
        personName: "Andi Moh Ilham",
        agenType: "Basic",
        waNumber: "+6281341065669",
        address: "Jl. Padanjakaya No. 133, Kelurahan Pengawu Kecamatan Tatanga Kota Palu Sulawesi Tengah",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD35",
    wilayah: "Sulawesi Tenggara",
    listAgen: [
      {
        id: "LSAD35-01",
        personName: "Ujang Pratama",
        agenType: "Basic",
        waNumber: "+6282349888939",
        address: "Jl. Benteng 1,NO.8RT.005 RW 002 Kec.Kadia Kota Kendari",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD36",
    wilayah: "Sulawesi Utara",
    listAgen: [
      {
        id: "LSAD36-01",
        personName: "Fromzero Gym Store",
        distric: "Manado",
        agenType: "Basic",
        waNumber: "+6285162876003",
        address: "Jl. Piere Tendean Kawasan Megamas Kompleks Goedang Gadget Blok W16-W17 Kec. Wenang Selatan, Manado 95111",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD36-02",
        personName: "Gudang Sehat Manado",
        distric: "Manado",
        agenType: "Basic",
        waNumber: "+628124458399",
        address: "Jl. 14 Februrari No 68, Kel Teling Atas Lingkungan 8, Kec Wanea, Manado 95119",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD37",
    wilayah: "Sumatera Barat",
    listAgen: [
      {
        id: "LSAD37-01",
        personName: "Marsal",
        distric: "Solok",
        agenType: "Basic",
        waNumber: "+6287810606003",
        address: "Jl.Rajin No.15 Perumnas Nusa Indahii, Kel. Tanah Garam, Kec. Lubuk Sikarah,  Kota Solok",
        waChatText: waMessage
      },
      {
        id: "LSAD37-02",
        personName: "Official Distributor Sumbar",
        agenType: "Basic",
        waNumber: "+6282199650981",
        waChatText: waMessage,
        address: "Jl. Panorama No. 29 Keluarahan kayu Kubu, Kec Guguak Panjang Kota Bukit Tinggi, Sumatera Barat",
        noteAddress: "( Dekat Seberang SMP 4 Bukit Tinggi)"
      },
      {
        id: "LSAD37-03",
        personName: "Global Wellness",
        agenType: "Basic",
        waNumber: "+6288271810980",
        waChatText: waMessage,
        address: "Batang Toman, Simpang Empat Selatan, Nagari Lingkuang, Kec Pasaman, Kab Pasaman Barat, Sumatera Barat",
        noteAddress: "( Su4tive Fitness )"
      }
    ]
  },
  {
    id: "LSAD38",
    wilayah: "Sumatera Utara",
    listAgen: [
      {
        id: "LSAD38-01",
        personName: "SuperFit Store",
        distric: "Medan",
        agenType: "\u{1F451} Exclusive",
        waNumber: "+6285281818919",
        address: "Jl. Pasar 3 Krakatau Komplek Bima No. 37 A Medan",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD38-02",
        personName: "Nutrihouse",
        distric: "Medan Sunggal",
        agenType: "Basic",
        waNumber: "+6281991847110",
        address: "Jl. Sei Serayu No 101 ( SPBU ), Medan",
        waChatText: waMessage
      },
      {
        id: "LSAD38-03",
        personName: "Twocare Store",
        distric: "Medan",
        agenType: "Basic",
        linkTokped: "twocare x muscle nutrition",
        linkShopee: "fenz92",
        linkInstagram: "@twocare.id",
        waNumber: "+628116486777",
        address: "Jl. Wahidin No. 100 E",
        noteAddress: "Sebelah Restoran Vegetarian Loving HUT",
        waChatText: waMessage,
        codType: true,
        gojekType: true,
        grabType: true
      },
      {
        id: "LSAD38-04",
        personName: "Toko Kristal",
        distric: "Kota Binjai",
        agenType: "Basic",
        waNumber: "+6281370394577",
        address: "Jl. Perintis Kemerdekaan No 7, Medan Sunggal",
        noteAddress: "Kebun Lada",
        waChatText: waMessage
      },
      {
        id: "LSAD38-05",
        personName: "Merci Gallery Id",
        distric: "Medan",
        agenType: "Basic",
        waNumber: "+628116481177",
        address: "Gagak Hitam / Ringroad Jalan Pasar III, Medan Sunggal",
        noteAddress: "Komplek Habitat",
        waChatText: waMessage
      },
      {
        id: "LSAD38-06",
        personName: "PRO.FIT BINJAI",
        distric: "Binjai",
        agenType: "Basic",
        waNumber: "+6285372367468",
        address: "Jl. T. Amir Hamzah Pasar 5 Kel. Jatikarya Kec. Binjai Utara, Kota Binjai, Sumatera Utara. 20374",
        noteAddress: "( Seberang TMS Auto Service )",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD39",
    wilayah: "Sumatera Selatan",
    listAgen: [
      {
        id: "LSAD39-01",
        personName: "Rio (Volcano Gym)",
        distric: "Palembang",
        agenType: "Basic",
        waNumber: "+6281273364990",
        address: "Volcano Supplement & Gym, Inspektur Marzuki No.732B, Kel. Siring Agung, Kec. Ilir Barat 1, Kota Palembang, Sumatera Selatan 30138",
        noteAddress: "Sebelah Masjid Syuhada",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD39-02",
        personName: "Febryanto (AXL Supplement)",
        distric: "Lubuk Linggau",
        agenType: "Basic",
        waNumber: "+6282282817430",
        address: "Jl.Yos Sudarso Komplek Pertokoan Mitra Bangunan Supermarket, Lubuk Linggau",
        noteAddress: "Sebelah Masjid Syuhada",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD39-03",
        personName: "Supergym",
        distric: "Lubuk Linggau",
        agenType: "Basic",
        waNumber: "+6282376801663",
        address: "Jl.Kenanga II Permai 05 RT 04, Lubuk Linggau Utara",
        waChatText: waMessage,
        codType: true,
        grabType: true,
        gojekType: true
      },
      {
        id: "LSAD39-05",
        personName: "Bella",
        distric: "Lubuk Linggau",
        agenType: "Basic",
        waNumber: "+6289682068342",
        waChatText: waMessage
      },
      {
        id: "LSAD39-06",
        personName: "Ninefit Fitness Studio",
        distric: "Jakabaring",
        agenType: "Basic",
        waNumber: "+6281367601063",
        address: "Komplek Ruko Permata Indah Residence Jl. Tegal Binangun R11 Jakabaring",
        waChatText: waMessage
      },
      {
        id: "LSAD39-07",
        personName: "Ten Fitness Studio",
        distric: "Jakabaring",
        agenType: "Basic",
        waNumber: "+6281367601063",
        address: "Komplek Ruko Permata Indah Residence Jl. Tegal Binangun R11 Jakabaring",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD40",
    wilayah: "Sumatera Barat",
    listAgen: [
      {
        id: "LSAD40-01",
        personName: "Daffa Gym",
        distric: "Payakumbuh",
        agenType: "Basic",
        waNumber: "081256951937",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD41",
    wilayah: "Surabaya",
    listAgen: [
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
        id: "LSAD41-02",
        personName: "Redfitness",
        distric: "Surabaya",
        agenType: "Basic",
        waNumber: "+6281219879796",
        waChatText: waMessage,
        address: "JL.Leo No.28, Kel.Ploso Kec. Tambak Sari, Surabaya"
      },
      {
        id: "LSAD41-03",
        personName: "Afuk",
        distric: "Surabaya",
        agenType: "Basic",
        waNumber: "+6285755858358",
        waChatText: waMessage
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
        personName: "Tokonielsby (Merr Rungkut & Free Gojek)",
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
        id: "LSAD41-08",
        personName: "Sehat Shop",
        distric: "Semarang",
        agenType: "Basic",
        waNumber: "+6287757737773",
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
    ]
  },
  {
    id: "LSAD42",
    wilayah: "Tangerang",
    listAgen: [
      {
        id: "LSAD42-01",
        personName: "PT Global Digital Naga",
        agenType: "Basic",
        waNumber: "+6281585251495",
        address: "Jl. Halim Perdana Kusuma No.27 RT 04/04, Batu Ceper, Tangerang",
        waChatText: waMessage
      },
      {
        id: "LSAD42-02",
        personName: "Renardi",
        agenType: "Basic",
        waNumber: "+6289516603993",
        address: "Green Royal Condo House GR 6 1A, Jl. H. Aseni Raya No.88, RT.10/RW.8, Semanan, Kec. Kalideres",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD43",
    wilayah: "Tangerang Selatan",
    listAgen: [
      {
        id: "LSAD43-01",
        personName: "Natalia",
        agenType: "Basic",
        waNumber: "+6281328397977",
        address: "Perumahan Bumi Puspitek Asri Blok 4E No.15 BSD Tangerang Selatan",
        noteAddress: "Dekat ICE, AEON, Lulu, Qbig",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD43-02",
        personName: "Aesnutrition",
        agenType: "Basic",
        waNumber: "+628118456690",
        address: "Graha Raya Bintaro jaya Komp.Anggrek Loka Blok A4 No.7, Serpong Utara, Tangerang Selatan",
        noteAddress: "Dekat ICE, AEON, Lulu, Qbig",
        waChatText: waMessage,
        codType: true
      },
      {
        id: "LSAD43-03",
        personName: "PT Renergi Solusi Integrasi",
        agenType: "Basic",
        waNumber: "+628111949440",
        address: "Golden Boulevard, Gg. Blk. S No.3 Lengkong Karya,Kec. Serpong Utara, Tangerang Selatan",
        waChatText: waMessage,
        codType: true
      }
    ]
  },
  {
    id: "LSAD44",
    wilayah: "Papua",
    listAgen: [
      {
        id: "LSAD44-01",
        personName: "Jason Jayapura",
        agenType: "Basic",
        waNumber: "+6281299889228",
        waChatText: waMessage
      }
    ]
  },
  {
    id: "LSAD45",
    wilayah: "Papua Barat",
    listAgen: []
  },
  {
    id: "LSAD46",
    wilayah: "Yogyakarta",
    listAgen: [
      {
        id: "LSAD46-01",
        personName: "Victor / Ferry",
        agenType: "Basic",
        waNumber: "+6289699999640",
        waChatText: waMessage
      },
      {
        id: "LSAD46-02",
        personName: "Muscle Gainz",
        agenType: "Basic",
        waNumber: "+6281291256562",
        address: "Jl.Jambon No.25, Kricak Kec.Tegal Rejo Kota Yogyakarta",
        waChatText: waMessage
      }
    ]
  }
];
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchAgent, $$unsubscribe_searchAgent;
  let $selectedRegion, $$unsubscribe_selectedRegion;
  $$unsubscribe_searchAgent = subscribe(searchAgent, (value) => $searchAgent = value);
  $$unsubscribe_selectedRegion = subscribe(selectedRegion, (value) => $selectedRegion = value);
  let { id } = $$props;
  let { classes } = $$props;
  let { top } = $$props;
  let { bottom } = $$props;
  let { colorType } = $$props;
  let regions = [];
  let filteredAgents = [];
  const getAgentsByRegion = () => {
    set_store_value(searchAgent, $searchAgent = "", $searchAgent);
    if ($selectedRegion === "all") {
      return filteredAgents = [];
    }
    return filteredAgents = listAgenData.filter((agent) => agent.wilayah === $selectedRegion);
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.colorType === void 0 && $$bindings.colorType && colorType !== void 0)
    $$bindings.colorType(colorType);
  {
    if ($searchAgent)
      set_store_value(selectedRegion, $selectedRegion = "", $selectedRegion);
  }
  {
    if ($selectedRegion)
      getAgentsByRegion();
  }
  $$unsubscribe_searchAgent();
  $$unsubscribe_selectedRegion();
  return `<section${add_attribute("id", id, 0)} class="${"text-gray-600 pb-0 md:pb-0 body-font w-full h-auto px-2 py-0 md:px-0 " + escape(classes, true)}">${top ? `${validate_component(DaftarAgen, "DaftarAgen").$$render($$result, { colorType, listAgents: listAgenData }, {}, {})}` : ``}

    <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-auto h-auto mt-0 md:mt-6"}"><div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto"}">${validate_component(SelectAgent, "SelectAgent").$$render($$result, { regions, val: $selectedRegion }, {}, {})}</div>
        <div class="${"col-span-full md:col-span-1 flex justify-center items-center w-full h-auto"}">${validate_component(SearchAgent, "SearchAgent").$$render($$result, { val: $searchAgent }, {}, {})}</div></div>
    ${validate_component(ListAgents, "ListAgents").$$render($$result, { filteredAgents, listAgents: listAgenData }, {}, {})}
    
    ${bottom ? `${validate_component(DaftarAgen, "DaftarAgen").$$render($$result, { colorType, listAgents: listAgenData }, {}, {})}` : ``}</section>`;
});
export {
  Index as I
};
