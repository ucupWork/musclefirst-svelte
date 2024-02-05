import { c as create_ssr_component, h as compute_rest_props, x as createEventDispatcher, q as get_current_component, b as subscribe, s as setContext, v as validate_component, a as add_attribute, e as escape, d as each } from "../../../_app/immutable/chunks/index-1e319aa9.js";
import { S as SEO } from "../../../_app/immutable/chunks/SEO-e606abe2.js";
import "../../../_app/immutable/chunks/index-778a8503.js";
import { f as forwardEventsBuilder, j as useTransitionContext, k as useParentNesting, T as TreeStates, N as NESTING_CONTEXT_NAME, w as writable, S as State, l as useOpenClosedProvider, m as RenderStrategy, n as match, R as Render, F as Features, c as useId, o as useNesting, h as useOpenClosed, p as TRANSITION_CONTEXT_NAME, D as Disclosure } from "../../../_app/immutable/chunks/common-3de0477a.js";
import { B as Breadcrumbs } from "../../../_app/immutable/chunks/Breadcrumbs-c48ae040.js";
import { w as websiteSchema, o as organizationSchema } from "../../../_app/immutable/chunks/BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
import { T as TabGroup, a as TabList, b as Tab, c as TabPanels, d as TabPanel } from "../../../_app/immutable/chunks/TabPanel-ea11bf7a.js";
import { D as DisclosureButton, a as DisclosurePanel } from "../../../_app/immutable/chunks/DisclosureButton-f7891f7a.js";
import { I as IndexScript } from "../../../_app/immutable/chunks/IndexScript-80586391.js";
import "../../../_app/immutable/chunks/stores-75875272.js";
import "../../../_app/immutable/chunks/site-data-ef8bff3e.js";
import "../../../_app/immutable/chunks/resolve-button-type-bf5607f2.js";
const TransitionChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strategy;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "use",
    "enter",
    "enterFrom",
    "enterTo",
    "entered",
    "leave",
    "leaveFrom",
    "leaveTo"
  ]);
  let $transitionContext, $$unsubscribe_transitionContext;
  let $nestingContext, $$unsubscribe_nestingContext;
  let $$unsubscribe_nesting;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { enter = "" } = $$props;
  let { enterFrom = "" } = $$props;
  let { enterTo = "" } = $$props;
  let { entered = "" } = $$props;
  let { leave = "" } = $$props;
  let { leaveFrom = "" } = $$props;
  let { leaveTo = "" } = $$props;
  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["beforeEnter", "beforeLeave", "afterEnter", "afterLeave"]);
  let container = null;
  let transitionContext = useTransitionContext();
  $$unsubscribe_transitionContext = subscribe(transitionContext, (value) => $transitionContext = value);
  let nestingContext = useParentNesting();
  $$unsubscribe_nestingContext = subscribe(nestingContext, (value) => $nestingContext = value);
  let state = $transitionContext.initialShow || $$props.unmount !== false ? TreeStates.Visible : TreeStates.Hidden;
  let id = useId();
  let nesting = writable(useNesting(() => {
    {
      state = TreeStates.Hidden;
      $nestingContext.unregister(id);
      dispatch("afterLeave");
    }
  }));
  $$unsubscribe_nesting = subscribe(nesting, (value) => value);
  function splitClasses(classes2 = "") {
    return classes2.split(" ").filter((className) => className.trim().length > 1);
  }
  setContext(NESTING_CONTEXT_NAME, nesting);
  let openClosedState = writable(State.Closed);
  useOpenClosedProvider(openClosedState);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.enter === void 0 && $$bindings.enter && enter !== void 0)
    $$bindings.enter(enter);
  if ($$props.enterFrom === void 0 && $$bindings.enterFrom && enterFrom !== void 0)
    $$bindings.enterFrom(enterFrom);
  if ($$props.enterTo === void 0 && $$bindings.enterTo && enterTo !== void 0)
    $$bindings.enterTo(enterTo);
  if ($$props.entered === void 0 && $$bindings.entered && entered !== void 0)
    $$bindings.entered(entered);
  if ($$props.leave === void 0 && $$bindings.leave && leave !== void 0)
    $$bindings.leave(leave);
  if ($$props.leaveFrom === void 0 && $$bindings.leaveFrom && leaveFrom !== void 0)
    $$bindings.leaveFrom(leaveFrom);
  if ($$props.leaveTo === void 0 && $$bindings.leaveTo && leaveTo !== void 0)
    $$bindings.leaveTo(leaveTo);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    strategy = $$props.unmount === false ? RenderStrategy.Hidden : RenderStrategy.Unmount;
    {
      {
        (() => {
          if (strategy !== RenderStrategy.Hidden)
            return;
          if (!id)
            return;
          if ($transitionContext.show && state !== TreeStates.Visible) {
            state = TreeStates.Visible;
            return;
          }
          match(state, {
            [TreeStates.Hidden]: () => $nestingContext.unregister(id),
            [TreeStates.Visible]: () => $nestingContext.register(id)
          });
        })();
      }
    }
    splitClasses(enter);
    splitClasses(enterFrom);
    splitClasses(enterTo);
    splitClasses(entered);
    splitClasses(leave);
    splitClasses(leaveFrom);
    splitClasses(leaveTo);
    {
      openClosedState.set(match(state, {
        [TreeStates.Visible]: State.Open,
        [TreeStates.Hidden]: State.Closed
      }));
    }
    classes = `${$$props.class || ""} ${entered}`;
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign($$restProps, { as }, { use: [...use, forwardEvents] }, { slotProps: {} }, { name: "TransitionChild" }, { class: classes }, { visible: state === TreeStates.Visible }, { features: Features.RenderStrategy }, { el: container }),
      {
        el: ($$value) => {
          container = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_transitionContext();
  $$unsubscribe_nestingContext();
  $$unsubscribe_nesting();
  return $$rendered;
});
const TransitionRoot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "use", "show", "appear"]);
  let $$unsubscribe_nestingBag;
  let $openClosedState, $$unsubscribe_openClosedState;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["beforeEnter", "beforeLeave", "afterEnter", "afterLeave"]);
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { show = void 0 } = $$props;
  let { appear = false } = $$props;
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  function computeShow(show2, openClosedState2) {
    if (show2 === void 0 && openClosedState2 !== void 0) {
      return match(openClosedState2, {
        [State.Open]: true,
        [State.Closed]: false
      });
    }
    return show2;
  }
  let shouldShow = computeShow(show, openClosedState !== void 0 ? $openClosedState : void 0);
  let initialShow = shouldShow;
  let state = shouldShow ? TreeStates.Visible : TreeStates.Hidden;
  let nestingBag = writable(useNesting(() => {
    state = TreeStates.Hidden;
  }));
  $$unsubscribe_nestingBag = subscribe(nestingBag, (value) => value);
  let initial = true;
  let transitionBag = writable();
  setContext(NESTING_CONTEXT_NAME, nestingBag);
  setContext(TRANSITION_CONTEXT_NAME, transitionBag);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.appear === void 0 && $$bindings.appear && appear !== void 0)
    $$bindings.appear(appear);
  {
    {
      shouldShow = computeShow(show, openClosedState !== void 0 ? $openClosedState : void 0);
      if (shouldShow !== true && shouldShow !== false) {
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      }
    }
  }
  {
    transitionBag.set({
      show: !!shouldShow,
      appear: appear || !initial,
      initialShow: !!initialShow
    });
  }
  $$unsubscribe_nestingBag();
  $$unsubscribe_openClosedState();
  return `${state === TreeStates.Visible || $$props.unmount === false ? `${validate_component(TransitionChild, "TransitionChild").$$render($$result, Object.assign($$restProps, { as }, { use: [...use, forwardEvents] }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``}`;
});
const MainCalculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  const showText = writable(true);
  setContext("show-text", showText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"flex flex-col w-full h-auto bg-zinc-100 relative py-8 md:py-0"}"><div class="${"flex flex-col w-full h-auto bg-transparent relative"}"><div class="${"flex flex-col md:flex-row justify-between items-center w-full h-auto"}"><div class="${"flex flex-col w-full h-auto px-8 md:px-16 max-w-2xl pb-8 md:pb-0 py-0 md:py-8"}"><div class="${"flex items-start flex-row w-full h-auto"}"><h2 class="${"font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl"}">${escape("Musclefirst")}</h2>
                    <h2 class="${"font-blackttnorms tracking-tighter font-black text-amber-500 text-xl"}">${escape("Kalkulator")}</h2></div>
                <span class="${"text-sm font-normal py-2 text-zinc-900 max-w-sm"}">${escape("Kalkulator kesehatan online untuk mengukur asupan nutrisi yang dibutuhkan tubuh secara akurat.")}</span></div></div>
        <div class="${"pb-4 px-4 md:px-16"}">${validate_component(TabGroup, "TabGroup").$$render($$result, { class: "w-full h-auto", defaultIndex: 0 }, {}, {
    default: () => {
      return `${validate_component(TabList, "TabList").$$render(
        $$result,
        {
          class: "grid grid-cols-3 gap-2 w-full h-auto"
        },
        {},
        {
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-start relative"}"><span class="${"text-zinc-900 font-bold"}">Kalkulator</span>
                            <small class="${"diagonal-fractions font-black ml-1 text-amber-700 uppercase"}">BMI
                            </small></div>`;
                }
              }
            )}
                    ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-start relative"}"><span class="${"text-zinc-900 font-bold"}">Kalkulator</span>
                            <small class="${"diagonal-fractions font-black ml-1 text-amber-700 uppercase"}">BMR
                            </small></div>`;
                }
              }
            )}
                    ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2"
              },
              {},
              {
                default: () => {
                  return `<div class="${"flex items-start relative"}"><span class="${"text-zinc-900 font-bold"}">Kalkulator</span>
                            <small class="${"diagonal-fractions font-black ml-1 text-amber-700 uppercase"}">Kal
                            </small></div>`;
                }
              }
            )}`;
          }
        }
      )}
                ${validate_component(TabPanels, "TabPanels").$$render($$result, { class: "w-full h-auto" }, {}, {
        default: () => {
          return `${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "py-2 w-full h-auto" }, {}, {
            default: () => {
              return `<div class="${"flex flex-col justify-center items-center mt-1"}">${validate_component(Index$4, "BmiCalculation").$$render($$result, {}, {}, {})}</div>`;
            }
          })}
                    ${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "py-2 w-full h-auto" }, {}, {
            default: () => {
              return `<div class="${"flex flex-col justify-center items-center mt-1"}">${validate_component(Index$3, "BmrCalculation").$$render($$result, {}, {}, {})}</div>`;
            }
          })}
                    ${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "py-2 w-full h-auto" }, {}, {
            default: () => {
              return `<div class="${"flex flex-col justify-center items-center mt-1"}">${validate_component(Index$2, "CalorieCalculation").$$render($$result, {}, {}, {})}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>
        <div class="${"pb-2 px-4 md:px-16"}">${validate_component(Index, "TdeeCalculation").$$render($$result, {}, {}, {})}</div>
        <div class="${"px-4 md:px-16 pb-2 md:pb-12"}">${validate_component(Index$1, "ProteinCalculation").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-between items-center w-full h-auto bg-white rounded-t border py-2 px-4"}"><a href="${"https://kalsofit.com/"}" target="${"_blank"}" rel="${"noreferrer nofollow"}" class="${"text-xs"}"><div class="${"i-tabler:cell h-5 w-5 text-blue-500"}"></div></a></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-between items-center w-full h-auto bg-white rounded-b border py-2 px-4"}"><span class="${"text-xs"}"><small class="${"font-bold"}">Powered By</small></span>
    <a href="${"https://kalsofit.com/"}" target="${"_blank"}" rel="${"noreferrer nofollow"}" class="${"text-xs hover:text-blue-500"}"><small class="${"font-bold uppercase italic"}">Kalsofit</small></a></div>`;
});
const Index$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height = 0;
  let weight = 0;
  return `<div class="${"flex flex-col w-full h-auto"}"><div class="${"flex justify-center items-center w-full h-auto px-0 md:px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b"
    },
    {},
    {
      default: () => {
        return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
          $$result,
          {
            class: "flex flex-row justify-between items-center w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-row space-x-1 text-left"}"><div class="${"w-2 h-2 bg-emerald-500"}"></div>
                    <span class="${"font-bold text-zinc-900"}">${escape("Kalkulasi BMI (Body Mass Index)")}</span></div>
                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", "transform: rotate(90deg);", 0)}></div>`;
            }
          }
        )}
            ${`${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
          $$result,
          {
            static: true,
            class: "text-zinc-900 w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-col w-full h-auto mb-4"}">
                    <form class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border"}"><div class="${"grid grid-cols-2 gap-2 w-full md:w-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
                                <div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Height</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(CM)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"height"}" id="${"height"}"${add_attribute("value", height, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"230"}" min="${"130"}" step="${"5"}"${add_attribute("value", height, 0)}></div></div></div>
                                    <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Weight</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(KG)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"weight"}" id="${"weight"}"${add_attribute("value", weight, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"160"}" min="${"40"}" step="${"5"}"${add_attribute("value", weight, 0)}></div></div></div></div>
                                ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
                    
                        <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto"}"><button type="${"submit"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md"}"><span class="${"font-bold text-white"}">Send Calculation</span></button>
                            <button type="${"button"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md"}"><span class="${"font-bold text-white"}">Reset Calculation</span></button></div></form></div>

                
                ${``}
                
                
                <div class="${"flex flex-col w-full h-auto pt-4 px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
                $$result,
                {
                  class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                },
                {},
                {
                  default: ({ open }) => {
                    return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                      $$result,
                      {
                        class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                <small class="${"font-bold text-zinc-900 uppercase"}">BMI &amp; Kesehatan</small></div>
                            <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
                        }
                      }
                    )}
                        
                        ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                      $$result,
                      {
                        class: "text-zinc-900 w-full h-auto shadow p-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}"><span class="${"font-bold uppercase"}">Lemak tubuh itu relevan, bukan massa tubuh.</span>
                                        Hal ini menyangkut kesehatan, dimana kelebihan lemak tubuh adalah negatif. Sebaliknya, massa otot di atas rata-rata lebih cenderung positif. BMI tidak membedakan antara lemak tubuh dan massa bebas lemak. Namun, statistik menunjukkan bahwa indeks massa tubuh sekitar 73 persen orang merupakan indikator yang cukup signifikan dari persentase lemak tubuh. Bahkan, dalam tiga dari empat kasus, BMI memiliki relevansi yang signifikan dengan kesehatan. 
                                    </div></div>
                                
                                <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}"><span class="${"font-bold uppercase"}">Persentase lemak tubuh VS BMI</span>
                                        Meskipun relevansinya tinggi dengan kesehatan, persentase lemak tubuh memiliki kekurangan. Timbangan untuk mengukur lemak tubuh mudah digunakan tetapi tidak akurat; metode yang lebih akurat sangat rumit sehingga membutuhkan tenaga ahli. BMI, sebaliknya, dapat dihitung dari dua pengukuran sederhana yang dapat diandalkan dalam banyak kasus. Hal ini menjadi alasan utama mengapa BMI masih menjadi nilai yang paling banyak digunakan untuk memperkirakan lemak tubuh.
                                    </div></div></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}</div>

                <div class="${"flex w-full h-auto bg-white px-4 text-xs mt-2"}"><small class="${"uppercase"}">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small></div>`;
            }
          }
        )}`}`;
      }
    }
  )}</div></div>`;
});
const genderList = [
  {
    label: "Female",
    value: "female"
  },
  {
    label: "Male",
    value: "male"
  }
];
const activityLevels = [
  {
    label: "Little or no exercise",
    level: "level_1",
    value: 1.2
  },
  {
    label: "Exercise 1-2 times/week",
    level: "level_2",
    value: 1.4
  },
  {
    label: "Exercise 2-3 times/week",
    level: "level_3",
    value: 1.6
  },
  {
    label: "Exercise 3-5 times/week",
    level: "level_4",
    value: 1.75
  },
  {
    label: "Exercise 6-7 times/week",
    level: "level_5",
    value: 2
  },
  {
    label: "Professional Athlete",
    level: "level_6",
    value: 2.3
  }
];
const tdeeActivityLevels = [
  {
    label: "Little / No exercise",
    level: "level_1",
    value: 1.2
  },
  {
    label: "Light Exercise 1-2 times/week",
    level: "level_2",
    value: 1.375
  },
  {
    label: "Moderate Exercise 2-3 times/week",
    level: "level_3",
    value: 1.55
  },
  {
    label: "Hard Exercise 4-5 times/week",
    level: "level_4",
    value: 1.725
  },
  {
    label: "Physical Job / Exercise 6-7 times/week",
    level: "level_5",
    value: 1.9
  },
  {
    label: "Professional Athlete",
    level: "level_6",
    value: 2.4
  }
];
const commonFoodsCalories = [
  {
    categoryName: "Fruit",
    categoryRows: [
      {
        food: "Apple",
        servingSize: "1 (4 oz.)",
        calories: "59",
        kJ: "247"
      },
      {
        food: "Banana",
        servingSize: "1 (6 oz.)",
        calories: "151",
        kJ: "632"
      },
      {
        food: "Grapes",
        servingSize: "1 cup",
        calories: "100",
        kJ: "419"
      },
      {
        food: "Orange",
        servingSize: "1 (4 oz.)",
        calories: "53",
        kJ: "222"
      },
      {
        food: "Pear",
        servingSize: "1 (5 oz.)",
        calories: "82",
        kJ: "343"
      },
      {
        food: "Peach",
        servingSize: "1 (6 oz.)",
        calories: "67",
        kJ: "281"
      },
      {
        food: "Pineapple",
        servingSize: "1 cup",
        calories: "82",
        kJ: "343"
      },
      {
        food: "Strawberry",
        servingSize: "1 cup",
        calories: "53",
        kJ: "222"
      },
      {
        food: "Watermelon",
        servingSize: "1 cup",
        calories: "50",
        kJ: "209"
      }
    ]
  },
  {
    categoryName: "Vegetables",
    categoryRows: [
      {
        food: "Asparagus",
        servingSize: "1 cup",
        calories: "27",
        kJ: "113"
      },
      {
        food: "Broccoli",
        servingSize: "1 cup",
        calories: "45",
        kJ: "188"
      },
      {
        food: "Carrots",
        servingSize: "1 cup",
        calories: "50",
        kJ: "209"
      },
      {
        food: "Cucumber",
        servingSize: "4 oz.",
        calories: "17",
        kJ: "71"
      },
      {
        food: "Eggplant",
        servingSize: "1 cup",
        calories: "35",
        kJ: "147"
      },
      {
        food: "Lettuce",
        servingSize: "1 cup",
        calories: "5",
        kJ: "21"
      },
      {
        food: "Tomato",
        servingSize: "1 cup",
        calories: "22",
        kJ: "92"
      }
    ]
  },
  {
    categoryName: "Proteins",
    categoryRows: [
      {
        food: "Beef, regular, cooked",
        servingSize: "2 oz.",
        calories: "142",
        kJ: "595"
      },
      {
        food: "Chicken, cooked",
        servingSize: "2 oz.",
        calories: "136",
        kJ: "569"
      },
      {
        food: "Tofu",
        servingSize: "4 oz.",
        calories: "86",
        kJ: "360"
      },
      {
        food: "Egg",
        servingSize: "1 large",
        calories: "78",
        kJ: "327"
      },
      {
        food: "Fish, Catfish, cooked",
        servingSize: "2 oz.",
        calories: "136",
        kJ: "569"
      },
      {
        food: "Pork, cooked",
        servingSize: "2 oz.",
        calories: "137",
        kJ: "574"
      },
      {
        food: "Shrimp, cooked",
        servingSize: "2 oz.",
        calories: "56",
        kJ: "234"
      }
    ]
  },
  {
    categoryName: "Common Meals/Snacks",
    categoryRows: [
      {
        food: "Bread, white",
        servingSize: "1 slice (1 oz.)",
        calories: "75",
        kJ: "314"
      },
      {
        food: "Butter",
        servingSize: "1 tablespoon",
        calories: "102",
        kJ: "427"
      },
      {
        food: "Caesar salad",
        servingSize: "3 cups",
        calories: "481",
        kJ: "2014"
      },
      {
        food: "Cheeseburger",
        servingSize: "1 sandwich",
        calories: "285",
        kJ: "1193"
      },
      {
        food: "Hamburger",
        servingSize: "1 sandwich",
        calories: "250",
        kJ: "1047"
      },
      {
        food: "Dark Chocolate",
        servingSize: "1 oz.",
        calories: "155",
        kJ: "649"
      },
      {
        food: "Corn",
        servingSize: "1 cup",
        calories: "132",
        kJ: "553"
      },
      {
        food: "Pizza",
        servingSize: '1 slice (14")',
        calories: "285",
        kJ: "1193"
      },
      {
        food: "Potato",
        servingSize: "6 oz.",
        calories: "130",
        kJ: "544"
      },
      {
        food: "Rice",
        servingSize: "1 cup cooked",
        calories: "206",
        kJ: "862"
      },
      {
        food: "Sandwich",
        servingSize: '1 (6" Subway Turkey Sandwich)',
        calories: "200",
        kJ: "837"
      }
    ]
  },
  {
    categoryName: "Beverages/Dairy",
    categoryRows: [
      {
        food: "Beer",
        servingSize: "1 can",
        calories: "154",
        kJ: "645"
      },
      {
        food: "Coca-Cola Classic",
        servingSize: "1 can",
        calories: "150",
        kJ: "628"
      },
      {
        food: "Diet Coke",
        servingSize: "1 can",
        calories: "0",
        kJ: "0"
      },
      {
        food: "Milk (1%)",
        servingSize: "1 cup",
        calories: "102",
        kJ: "427"
      },
      {
        food: "Milk (2%)",
        servingSize: "1 cup",
        calories: "122",
        kJ: "511"
      },
      {
        food: "Milk (Whole)",
        servingSize: "1 cup",
        calories: "146",
        kJ: "611"
      },
      {
        food: "Orange Juice",
        servingSize: "1 cup",
        calories: "111",
        kJ: "465"
      },
      {
        food: "Apple cider",
        servingSize: "1 cup",
        calories: "117",
        kJ: "490"
      },
      {
        food: "Yogurt (low-fat)",
        servingSize: "1 cup",
        calories: "154",
        kJ: "645"
      },
      {
        food: "Yogurt (non-fat)",
        servingSize: "1 cup",
        calories: "110",
        kJ: "461"
      }
    ]
  }
];
const calorieDenseFoods = [
  {
    name: "Homemade Granola",
    calories: "489"
  },
  {
    name: "Meats (Chicken Leg)",
    calories: "184"
  },
  {
    name: "Firm Tofu",
    calories: "144"
  },
  {
    name: "Fish (Salmon)",
    calories: "206"
  },
  {
    name: "Avocados",
    calories: "160"
  },
  {
    name: "Dairy Foods (Milk)",
    calories: "61"
  },
  {
    name: "Chickpeas (Garbanzo Beans)",
    calories: "164"
  },
  {
    name: "Sweet Potatoes",
    calories: "101"
  },
  {
    name: "Whole Grains (Brown Rice)",
    calories: "123"
  },
  {
    name: "Nuts (Macadamia Nuts)",
    calories: "718"
  }
];
let minAge$2 = 18;
let maxAge$2 = 80;
const Index$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height = 0;
  let weight = 0;
  let age = 0;
  return `<div class="${"flex flex-col w-full h-auto"}"><div class="${"flex justify-center items-center w-full h-auto px-0 md:px-2"}">${validate_component(Disclosure, "Disclosure").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b"
    },
    {},
    {
      default: () => {
        return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
          $$result,
          {
            class: "flex flex-row justify-between items-center w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-row space-x-1 text-left"}"><div class="${"w-2 h-2 bg-emerald-500"}"></div>
                    <span class="${"font-bold text-zinc-900"}">${escape("Kalkulasi BMR (Basal Metabolic Rate)")}</span></div>
                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", "transform: rotate(90deg);", 0)}></div>`;
            }
          }
        )}
            ${`${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
          $$result,
          {
            static: true,
            class: "text-zinc-900 w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-col w-full h-auto mb-4"}">
                    <form class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border"}"><div class="${"grid grid-cols-2 gap-2 w-full md:w-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
                                <div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Gender</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"gender"}" name="${"gender"}" autocomplete="${"gender-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}"><option selected disabled value="${"Pilihan"}">Pilihan</option>${each(genderList, (v) => {
                return `<option${add_attribute("value", v.value, 0)}>${escape(v.label)}</option>`;
              })}</select></div></div></div>
                                    <div class="${"col-span-full w-full h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start w-full"}"><div class="${"flex items-center space-x-1 w-full h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Age</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"age"}" id="${"age"}"${add_attribute("value", age, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}"${add_attribute("max", maxAge$2, 0)}${add_attribute("min", minAge$2, 0)}${add_attribute("value", age, 0)}></div></div></div>
                                    <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Height</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(CM)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"height"}" id="${"height"}"${add_attribute("value", height, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"230"}" min="${"130"}" step="${"5"}"${add_attribute("value", height, 0)}></div></div></div>
                                    <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Weight</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(KG)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"weight"}" id="${"weight"}"${add_attribute("value", weight, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"160"}" min="${"40"}" step="${"5"}"${add_attribute("value", weight, 0)}></div></div></div></div>
                                ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
                    
                        <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto"}"><button type="${"submit"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md"}"><span class="${"font-bold text-white"}">Send Calculation</span></button>
                            <button type="${"button"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md"}"><span class="${"font-bold text-white"}">Reset Calculation</span></button></div></form></div>
                
                
                ${``}
                
                
                <div class="${"flex flex-col w-full h-auto pt-4 px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
                $$result,
                {
                  class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                },
                {},
                {
                  default: ({ open }) => {
                    return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                      $$result,
                      {
                        class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                <small class="${"font-bold text-zinc-900 uppercase"}">Apa Itu BMR (Basal Metabolic Rate)?</small></div>
                            <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
                        }
                      }
                    )}
                        
                        ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                      $$result,
                      {
                        class: "text-zinc-900 w-full h-auto shadow p-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">Tingkat Metabolisme Basal adalah jumlah energi yang digunakan tubuh manusia saat beristirahat. hal ini sebagai jumlah energi yang dibutuhkan tubuh Anda untuk mendukung fungsi vitalnya: pernapasan, sirkulasi darah, pengendalian suhu tubuh, fungsi otak dan saraf. Otak,  sistem saraf pusat, dan hati merupakan organ yang paling banyak menggunakan energi saat istirahat . dalam sehari lebih banyak energi yang diperoleh dari volume cairan dan ion dibandingkan kerja mekanis dari otot yang berkontraksi (seperti, pernapasan). BMR akan mengoreksi konsentrasi dan jumlah zat lainnya diberbagai area tubuh untuk mempertahankan homeostasis (keadaan kondisi internal yang stabil). Pada skala seluruh tubuh, ini menghasilkan banyak energi. Ini menjelaskan mengapa sistem saraf pusat kita mengkonsumsi begitu banyak energi dalam hal Tingkat Metabolisme Basal.
                                    </div></div>
                                <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}"><b>Aktivitas seperti berjalan, berlari, bekerja, berbicara, dan bahkan mencerna merupakan tindakan yang membutuhkan energi ekstra lebih besar daripada Tingkat Metabolisme Basal.</b> Itu karena kebanyakan orang tidak menghabiskan sepanjang hari di tempat tidur tanpa bergerak. Untuk mengeluarkan energi yang rendah, Anda harus tidak aktif secara fisik dan psikologis. Dengan kata lain, Anda tidak perlu menggunakan otot atau berpikir secara intensif dan harus sesantai mungkin secara manusiawi. Kriteria lain yang diperlukan termasuk tinggal di lingkungan dengan kenyamanan termal dan tidak makan untuk jangka waktu tertentu. Kondisi terakhir memastikan bahwa Anda tidak akan menggunakan energi untuk mencerna makanan. Dalam pengaturan ilmiah, BMR sering diukur selama periode tidur.
                                    </div></div>
                                <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}"><b>BMR Anda menyumbang sekitar 60% hingga 75% dari Pengeluaran Energi Total</b>, tergantung pada gaya hidup dan tingkat aktivitas Anda. Pengeluaran Energi Total adalah jumlah total kalori yang Anda bakar setiap hari. Sisa Pengeluaran Energi Total Anda berasal dari aktivitas fisik (berjalan, berbicara, makan, dll.) dan pencernaan makanan. Aktivitas fisik menyumbang sekitar 20% dari Pengeluaran Energi Total Anda tetapi dapat sedikit berbeda tergantung pada seberapa intensitas keseringan berolahraga. Pencernaan makanan, atau seperti yang dikatakan beberapa orang termogenesis postprandial (setelah makan), menggunakan sekitar 10% dari Pengeluaran Energi Total Anda. BMR cenderung menurun seiring bertambahnya usia dan dengan massa tubuh tanpa lemak yang lebih rendah. Di sisi lain, meningkatkan massa otot Anda kemungkinan besar akan meningkatkan BMR Anda. Dan masih banyak tentang hal-hal berbeda yang mempengaruhi Tingkat Metabolisme Basal dalam faktor-faktor yang memengaruhi paragraf BMR.
                                    </div></div></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}</div>

                <div class="${"flex w-full h-auto bg-white px-4 text-xs mt-2"}"><small class="${"uppercase"}">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small></div>`;
            }
          }
        )}`}`;
      }
    }
  )}</div></div>`;
});
let minAge$1 = 18;
let maxAge$1 = 80;
const Index$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height = 0;
  let weight = 0;
  let age = 0;
  return `<div class="${"flex flex-col w-full h-auto"}"><div class="${"flex justify-center items-center w-full h-auto px-0 md:px-2"}">${validate_component(Disclosure, "Disclosure").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b"
    },
    {},
    {
      default: () => {
        return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
          $$result,
          {
            class: "flex flex-row justify-between items-center w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-row space-x-1 text-left"}"><div class="${"w-2 h-2 bg-emerald-500"}"></div>
                    <span class="${"font-bold text-zinc-900"}">${escape("Kalkulasi Kalori")}</span></div>
                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", "transform: rotate(90deg);", 0)}></div>`;
            }
          }
        )}
            ${`${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
          $$result,
          {
            static: true,
            class: "text-zinc-900 w-full h-auto shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-col w-full h-auto mb-4"}">
                    <form class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border"}"><div class="${"grid grid-cols-2 gap-2 w-full md:w-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
                                <div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Gender</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"gender"}" name="${"gender"}" autocomplete="${"gender-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(genderList, (v) => {
                return `<option${add_attribute("value", v.value, 0)}>${escape(v.label)}</option>`;
              })}</select></div></div></div>
                                    <div class="${"col-span-full w-full h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Age</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full h-auto"}"><input type="${"number"}" name="${"age"}" id="${"age"}"${add_attribute("max", maxAge$1, 0)}${add_attribute("min", minAge$1, 0)} required placeholder="${"15 - 80"}" class="${"text-slate-400 w-full rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}"${add_attribute("value", age, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"80"}" min="${"15"}" step="${"5"}"${add_attribute("value", age, 0)}></div></div></div></div></div>
                            <div class="${"col-span-full w-full h-auto"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Height</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(CM)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"height"}" id="${"height"}"${add_attribute("value", height, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"230"}" min="${"130"}" step="${"5"}"${add_attribute("value", height, 0)}></div></div></div>
                                    <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Weight</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(KG)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"weight"}" id="${"weight"}"${add_attribute("value", weight, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"160"}" min="${"40"}" step="${"5"}"${add_attribute("value", weight, 0)}></div></div></div></div></div>
                            <div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"w-full md:w-auto h-auto border border-zinc-300 shadow p-4"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Activity</small></div>
                                        <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"activity"}" name="${"activity"}" autocomplete="${"activity-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(activityLevels, (activity) => {
                return `<option${add_attribute("value", activity, 0)}>${escape(activity.label)}</option>`;
              })}</select></div></div></div>
                                ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
    
                        <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto"}"><button type="${"submit"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md"}"><span class="${"font-bold text-white"}">Send Calculation</span></button>
                            <button type="${"button"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md"}"><span class="${"font-bold text-white"}">Reset Calculation</span></button></div></form></div>

                
                ${``}
                
                
                <div class="${"flex flex-col w-full h-auto pt-4 px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
                $$result,
                {
                  class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                },
                {},
                {
                  default: ({ open }) => {
                    return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                      $$result,
                      {
                        class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                <small class="${"font-bold text-zinc-900 uppercase"}">Calories in Common Foods</small></div>
                            <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
                        }
                      }
                    )}
                        
                        ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                      $$result,
                      {
                        class: "text-zinc-900 w-full h-auto shadow p-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><table class="${"table-auto w-full"}"><thead class="${"table-header-group"}"><tr class="${"table-row"}"><td class="${"table-cell font-bold"}">Food</td>
                                            <td class="${"table-cell font-bold"}">Serving</td>
                                            <td class="${"table-cell font-bold"}">Calories</td>
                                            <td class="${"table-cell font-bold"}">kJ</td></tr></thead>
                                        ${each(commonFoodsCalories, (category) => {
                            return `<tbody><tr class="${"category-row border bg-black px-4"}"><td class="${"text-white table-cell font-bold"}">${escape(category.categoryName)}</td></tr>
                                            ${each(category.categoryRows, (row) => {
                              return `<tr class="${"bg-white shadow border"}"><td class="${"text-sm uppercase text-medium"}">${escape(row.food)}</td>
                                                <td class="${"text-sm uppercase text-medium"}">${escape(row.servingSize)}</td>
                                                <td class="${"text-sm uppercase text-medium"}">${escape(row.calories)}</td>
                                                <td class="${"text-sm uppercase text-medium"}">${escape(row.kJ)}</td>
                                            </tr>`;
                            })}
                                        </tbody>`;
                          })}</table></div></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}         

                    ${validate_component(Disclosure, "Disclosure").$$render(
                $$result,
                {
                  class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                },
                {},
                {
                  default: ({ open }) => {
                    return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                      $$result,
                      {
                        class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                <small class="${"font-bold text-zinc-900 uppercase"}">Top Calories to Gain Weight</small></div>
                            <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
                        }
                      }
                    )}
                        
                        ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                      $$result,
                      {
                        class: "text-zinc-900 w-full h-auto shadow p-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><table class="${"table-auto w-full"}"><thead class="${"table-header-group"}"><tr class="${"table-row"}"><td class="${"text-zinc-900 table-cell font-bold"}">Food</td>
                                            <td class="${"text-zinc-900 table-cell font-bold"}">Calories / 100G</td></tr></thead>
                                        ${each(calorieDenseFoods, (food) => {
                            return `<tbody><tr class="${"food-row bg-transparent px-4"}"><td class="${"text-sm uppercase text-medium"}">${escape(food.name)}</td>
                                                <td class="${"text-sm uppercase text-medium"}">${escape(food.calories)}</td></tr>
                                        </tbody>`;
                          })}</table></div></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}</div>

                <div class="${"flex w-full h-auto bg-white px-4 text-xs mt-2"}"><small class="${"uppercase"}">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small></div>`;
            }
          }
        )}`}`;
      }
    }
  )}</div></div>`;
});
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height = 0;
  let weight = 0;
  let age = 0;
  return `<div class="${"flex flex-col w-full h-auto"}"><div class="${"flex justify-center items-center w-full h-auto px-0 md:px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b"
    },
    {},
    {
      default: ({ open }) => {
        return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
          $$result,
          {
            class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-200 shadow px-4 py-2"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-row items-center space-x-1 text-left"}"><div class="${"w-2 h-2 bg-emerald-500"}"></div>
                    <div class="${"flex items-start relative"}"><span class="${"text-zinc-900 font-bold"}">Kalkulator</span>
                        <small class="${"diagonal-fractions font-black ml-1 text-amber-700 uppercase"}">Protein
                        </small></div></div>
                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
            }
          }
        )}
            
            ${validate_component(TransitionRoot, "Transition").$$render(
          $$result,
          {
            class: "w-full h-auto",
            enter: "transition duration-100 ease-out",
            enterFrom: "transform scale-95 opacity-0",
            enterTo: "transform scale-100 opacity-100",
            leave: "transition duration-75 ease-out",
            leaveFrom: "transform scale-100 opacity-100",
            leaveTo: "transform scale-95 opacity-0"
          },
          {},
          {
            default: () => {
              return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                $$result,
                {
                  static: true,
                  class: "text-zinc-900 w-full h-auto shadow p-4"
                },
                {},
                {
                  default: () => {
                    return `<div class="${"flex flex-col w-full h-auto mb-4"}">
                        <form class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border"}"><div class="${"grid grid-cols-2 gap-2 w-full md:w-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
                                    <div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Gender</small></div>
                                                <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"gender"}" name="${"gender"}" autocomplete="${"gender-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(genderList, (v) => {
                      return `<option${add_attribute("value", v.value, 0)}>${escape(v.label)}</option>`;
                    })}</select></div></div></div>
                                        <div class="${"col-span-full w-full h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Age</small></div>
                                                <div class="${"flex flex-col space-y-2 w-full h-auto"}"><input type="${"number"}" name="${"age"}" id="${"age"}" max="${"80"}" min="${"15"}" required placeholder="${"15 - 80"}" class="${"text-slate-400 w-full rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}"${add_attribute("value", age, 0)}>
                                                    <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"80"}" min="${"15"}" step="${"5"}"${add_attribute("value", age, 0)}></div></div></div></div></div>
                                <div class="${"col-span-full w-full h-auto"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Height</small>
                                                    <small class="${"text-slate-900 font-medium text-xs uppercase"}">(CM)</small></div>
                                                <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"height"}" id="${"height"}"${add_attribute("value", height, 0)}>
                                                    <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"230"}" min="${"130"}" step="${"5"}"${add_attribute("value", height, 0)}></div></div></div>
                                        <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Weight</small>
                                                    <small class="${"text-slate-900 font-medium text-xs uppercase"}">(KG)</small></div>
                                                <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"weight"}" id="${"weight"}"${add_attribute("value", weight, 0)}>
                                                    <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"160"}" min="${"40"}" step="${"5"}"${add_attribute("value", weight, 0)}></div></div></div></div></div>
                                <div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"w-full md:w-auto h-auto border border-zinc-300 shadow p-4"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Activity</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"activity"}" name="${"activity"}" autocomplete="${"activity-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(activityLevels, (activity) => {
                      return `<option${add_attribute("value", activity, 0)}>${escape(activity.label)}</option>`;
                    })}</select></div></div></div>
                                    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
        
                            <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto"}"><button type="${"submit"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md"}"><span class="${"font-bold text-white"}">Send Calculation</span></button>
                                <button type="${"button"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md"}"><span class="${"font-bold text-white"}">Reset Calculation</span></button></div></form></div>

                    
                    ${``}
                    
                    
                    <div class="${"flex flex-col w-full h-auto pt-4 px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
                      $$result,
                      {
                        class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                      },
                      {},
                      {
                        default: ({ open: open2 }) => {
                          return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                            $$result,
                            {
                              class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                    <small class="${"font-bold text-zinc-900 uppercase"}">What are proteins?</small></div>
                                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open2 ? "transform: rotate(90deg);" : "", 0)}></div>`;
                              }
                            }
                          )}
                            
                            ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                            $$result,
                            {
                              class: "text-zinc-900 w-full h-auto shadow p-4"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">Proteins, just like carbohydrates and fats, are macronutrients - substances used by organisms to produce energy and sustain basic bodily functions. Being organisms, proteins are essential to our existence. Different types of proteins build our muscles and regulate our hormones and metabolism. Some of them are globulins called antibodies - without proteins, our immune system wouldn&#39;t work.
                                        </div></div>

                                    <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">There is also another group of proteins, albumins. These globular proteins are found in our blood and travel through our body&#39;s blood vessels. Albumins serve many roles. They transport various substances that need to get to every part of our body: cations (Na\u207A, K\u207A, Ca\xB2\u207A, Mg\xB2\u207A), fatty acids, bilirubin, hormones (including thyroxine), and some pharmaceuticals (if administered). It has some serious clinical implications. Clinicians should remember that the serum calcium and magnesium levels can be altered due to hypoalbuminemia \u2013 a state of low albumin level in blood serum. Acquired Ca\xB2\u207A and Mg\xB2\u207A levels have to be corrected using special equations. Our corrected calcium calculator and corrected magnesium calculator use them and perform calculations for doctors!
                                        </div></div>
                                    
                                    <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">Albumins are also responsible for keeping adequate oncotic blood pressure. It is the force that keeps the blood inside the arteries and veins. When there is a low serum albumin level, the patient may suffer from edemas, where fluids escape the bloodstream, enter the tissues, and stay there. Clinicians use this knowledge to determine the source of ascites (an excess of fluid inside the peritoneal cavity). Visit our serum-ascites albumin gradient calculator to learn more on this topic.
                                        </div></div>
                                    
                                    <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">When on a vegan or vegetarian diet, it&#39;s best to consult a professional dietitian to ensure that you consume sufficient amounts of various macronutrients, including protein.
                                        </div></div>

                                    <div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}">Now, if your friends ask you: &quot;what is the function of proteins?&quot; you can already elaborate on many topics concerning the proper functioning of our bodies and mention a few examples of proteins. Now it is time to answer the question: &quot;How much protein do I need?&quot;.
                                        </div></div></div>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}</div>
 
                    <div class="${"flex w-full h-auto bg-white px-4 text-xs mt-2"}"><small class="${"uppercase"}">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small></div>`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    }
  )}</div></div>`;
});
let minAge = 18;
let maxAge = 80;
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height = 0;
  let weight = 0;
  let age = 0;
  return `<div class="${"flex flex-col w-full h-auto"}"><div class="${"flex justify-center items-center w-full h-auto px-0 md:px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
    $$result,
    {
      class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b"
    },
    {},
    {
      default: ({ open }) => {
        return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
          $$result,
          {
            class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-200 shadow px-4 py-2"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-row items-center space-x-1 text-left"}"><div class="${"w-2 h-2 bg-emerald-500"}"></div>
                    <div class="${"flex items-start relative"}"><span class="${"text-zinc-900 font-bold"}">Kalkulator</span>
                        <small class="${"diagonal-fractions font-black ml-1 text-amber-700 uppercase"}">TDEE
                        </small></div>
                    <span class="${"text-xs uppercase font-bold text-zinc-900"}"><small>${escape("( Total Daily Energy Expenditure )")}</small></span></div>
                <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open ? "transform: rotate(90deg);" : "", 0)}></div>`;
            }
          }
        )}
            ${open ? `${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
          $$result,
          {
            static: true,
            class: "text-zinc-900 w-full h-auto bg-white shadow p-4"
          },
          {},
          {
            default: () => {
              return `<div class="${"flex flex-col w-full h-auto mb-4"}">
                    <form class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border"}"><div class="${"grid grid-cols-2 gap-2 w-full md:w-auto"}"><div class="${"col-span-full w-full h-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
                                <div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Gender</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"gender"}" name="${"gender"}" autocomplete="${"gender-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(genderList, (v) => {
                return `<option${add_attribute("value", v.value, 0)}>${escape(v.label)}</option>`;
              })}</select></div></div></div>
                                    <div class="${"col-span-full w-full h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Age</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full h-auto"}"><input type="${"number"}" name="${"age"}" id="${"age"}"${add_attribute("max", maxAge, 0)}${add_attribute("min", minAge, 0)} required placeholder="${"15 - 80"}" class="${"text-slate-400 w-full rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}"${add_attribute("value", age, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"80"}" min="${"15"}" step="${"5"}"${add_attribute("value", age, 0)}></div></div></div></div></div>
                            <div class="${"col-span-full w-full h-auto"}"><div class="${"grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4"}"><div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Height</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(CM)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"height"}" id="${"height"}"${add_attribute("value", height, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"230"}" min="${"130"}" step="${"5"}"${add_attribute("value", height, 0)}></div></div></div>
                                    <div class="${"col-span-full md:col-span-1 w-full md:w-auto h-auto"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex items-center space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Weight</small>
                                                <small class="${"text-slate-900 font-medium text-xs uppercase"}">(KG)</small></div>
                                            <div class="${"flex flex-col space-y-2 w-full md:w-auto h-auto"}"><input required class="${"text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"}" type="${"number"}" name="${"weight"}" id="${"weight"}"${add_attribute("value", weight, 0)}>
                                                <input class="${"in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500"}" type="${"range"}" max="${"160"}" min="${"40"}" step="${"5"}"${add_attribute("value", weight, 0)}></div></div></div></div></div>
                            <div class="${"col-span-full w-full md:w-auto h-auto"}"><div class="${"w-full md:w-auto h-auto border border-zinc-300 shadow p-4"}"><div class="${"flex flex-col space-y-1 justify-center items-start"}"><div class="${"flex space-x-1 w-full md:w-auto h-auto"}"><small class="${"text-slate-900 font-bold text-sm uppercase"}">Activity</small></div>
                                        <div class="${"flex flex-col space-y-2 w-full md:w-full h-auto"}"><select id="${"activity"}" name="${"activity"}" autocomplete="${"activity-name"}" class="${"mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"}">${each(tdeeActivityLevels, (activity) => {
                return `<option${add_attribute("value", activity, 0)}>${escape(activity.label)}</option>`;
              })}</select></div></div></div>
                                ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
    
                        <div class="${"grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto"}"><button type="${"submit"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md"}"><span class="${"font-bold text-white"}">Send Calculation</span></button>
                            <button type="${"button"}" class="${"col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md"}"><span class="${"font-bold text-white"}">Reset Calculation</span></button></div></form></div>

                
                ${``}
                
                
                <div class="${"flex flex-col w-full h-auto pt-4 px-0"}">${validate_component(Disclosure, "Disclosure").$$render(
                $$result,
                {
                  class: "flex flex-col justify-center items-start w-full h-auto bg-white shadow"
                },
                {},
                {
                  default: ({ open: open2 }) => {
                    return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
                      $$result,
                      {
                        class: "flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex items-center space-x-2 w-auto h-auto text-xs"}"><div class="${"i-ph:info h-4 w-4 text-amber-500"}"></div>
                                <small class="${"font-bold text-zinc-900 uppercase"}">What is total daily energy expenditure (TDEE)?</small></div>
                            <div class="${"i-bi-chevron-right text-zinc-800 w-4 h-4"}"${add_attribute("style", open2 ? "transform: rotate(90deg);" : "", 0)}></div>`;
                        }
                      }
                    )}
                        
                        ${validate_component(DisclosurePanel, "DisclosurePanel").$$render(
                      $$result,
                      {
                        class: "text-zinc-900 w-full h-auto shadow p-4"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="${"flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4"}"><div class="${"flex flex-row justify-start items-start w-full h-auto"}"><div class="${"text-sm w-auto h-auto leading-none"}"><span class="${"font-bold uppercase"}">Total daily energy expenditure</span>
                                        is the energy burnt on average during an entire day. It reflects the average amount of energy spent during a typical day, but it is not the same each and every day. It is because our TDEE depends on many different factors, including: 
                                    </div></div></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}</div>

                <div class="${"flex w-full h-auto bg-white px-4 text-xs mt-2"}"><small class="${"uppercase"}">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small></div>`;
            }
          }
        )}` : ``}`;
      }
    }
  )}</div></div>`;
});
const Index_root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let { currentPage } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  return `${validate_component(IndexScript, "FbPixelScript").$$render($$result, {}, {}, {})}

${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Kalkulator BMI | Kalkulator BMR | Kalkulator Kalori Harian - Muscle First",
      description: `Muscefirst Kalkulator merupakan tools untuk mendukung program kalian seperti tools kalkulatr BMI, Kalkulator BMR dan Kalkulator kalori harian.`,
      schemas: [websiteSchema, organizationSchema]
    },
    {},
    {}
  )}

${validate_component(Breadcrumbs, "Breadcrumbs").$$render(
    $$result,
    {
      segment,
      title: "Kalkulator",
      linkUrl: currentPage,
      slug: ""
    },
    {},
    {}
  )}

${validate_component(MainCalculator, "MainCalculator").$$render($$result, { id: "main-calculator" }, {}, {})}`;
});
export {
  Index_root as default
};
