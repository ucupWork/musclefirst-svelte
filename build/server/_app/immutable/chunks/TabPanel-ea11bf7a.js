import { c as create_ssr_component, h as compute_rest_props, q as get_current_component, x as createEventDispatcher, b as subscribe, s as setContext, v as validate_component, A as globals, g as getContext, n as noop } from "./index-1e319aa9.js";
import { f as forwardEventsBuilder, R as Render, w as writable, c as useId, F as Features } from "./common-3de0477a.js";
import { r as resolveButtonType } from "./resolve-button-type-bf5607f2.js";
const { Object: Object_1$2 } = globals;
const TABS_CONTEXT_NAME = "headlessui-tabs-context";
function useTabsContext(component) {
  let context = getContext(TABS_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error(`<${component} /> is missing a parent <TabGroup /> component.`);
  }
  return context;
}
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "defaultIndex", "vertical", "manual"]);
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { defaultIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let { manual = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["change"]);
  const dispatch = createEventDispatcher();
  let selectedIndex = null;
  let tabs = [];
  let panels = [];
  let listRef = writable(null);
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  let api = writable({
    selectedIndex,
    orientation: vertical ? "vertical" : "horizontal",
    activation: manual ? "manual" : "auto",
    tabs,
    panels,
    listRef,
    setSelectedIndex(index) {
      if (selectedIndex === index)
        return;
      selectedIndex = index;
      dispatch("change", index);
    },
    registerTab(tab) {
      if (tabs.includes(tab))
        return;
      if (!$listRef) {
        tabs = [...tabs, tab];
        return;
      }
      let currentSelectedTab = selectedIndex !== null ? tabs[selectedIndex] : null;
      let orderMap = Array.from($listRef.querySelectorAll('[id^="headlessui-tabs-tab-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
      let nextTabs = [...tabs, tab];
      nextTabs.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
      tabs = nextTabs;
      selectedIndex = (() => {
        if (currentSelectedTab === null)
          return null;
        return tabs.indexOf(currentSelectedTab);
      })();
    },
    unregisterTab(tab) {
      tabs = tabs.filter((t) => t !== tab);
    },
    registerPanel(panel) {
      if (!panels.includes(panel))
        panels = [...panels, panel];
    },
    unregisterPanel(panel) {
      panels = panels.filter((p) => p !== panel);
    }
  });
  setContext(TABS_CONTEXT_NAME, api);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.defaultIndex === void 0 && $$bindings.defaultIndex && defaultIndex !== void 0)
    $$bindings.defaultIndex(defaultIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.manual === void 0 && $$bindings.manual && manual !== void 0)
    $$bindings.manual(manual);
  {
    api.update((obj) => {
      return {
        ...obj,
        selectedIndex,
        orientation: vertical ? "vertical" : "horizontal",
        activation: manual ? "manual" : "auto",
        tabs,
        panels
      };
    });
  }
  slotProps = { selectedIndex };
  $$unsubscribe_listRef();
  return `${validate_component(Render, "Render").$$render($$result, Object_1$2.assign($$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabGroup" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let myIndex;
  let selected;
  let myPanelRef;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $myPanelRef, $$unsubscribe_myPanelRef = noop, $$subscribe_myPanelRef = () => ($$unsubscribe_myPanelRef(), $$unsubscribe_myPanelRef = subscribe(myPanelRef, ($$value) => $myPanelRef = $$value), myPanelRef);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("Tab");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-tabs-tab-${useId()}`;
  let tabRef = null;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    myIndex = tabRef ? $api.tabs.indexOf(tabRef) : -1;
    selected = myIndex === $api.selectedIndex;
    $$subscribe_myPanelRef(myPanelRef = (_a = $api.panels[myIndex]) == null ? void 0 : _a.ref);
    propsWeControl = {
      id,
      role: "tab",
      type: resolveButtonType({ type: $$props.type, as }, tabRef),
      "aria-controls": $myPanelRef ? (_b = $api.panels[myIndex]) == null ? void 0 : _b.id : void 0,
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1,
      disabled: disabled ? true : void 0
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1$1.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "Tab" }, { el: tabRef }),
      {
        el: ($$value) => {
          tabRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_myPanelRef();
  return $$rendered;
});
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabList");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let listRef = $api.listRef;
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    propsWeControl = {
      role: "tablist",
      "aria-orientation": $api.orientation
    };
    slotProps = { selectedIndex: $api.selectedIndex };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabList" }, { el: $listRef }),
      {
        el: ($$value) => {
          $listRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_listRef();
  return $$rendered;
});
const TabPanels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabPanels");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  slotProps = { selectedIndex: $api.selectedIndex };
  $$unsubscribe_api();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign($$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabPanels" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1 } = globals;
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let panelData;
  let myIndex;
  let selected;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $elementRef, $$unsubscribe_elementRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let elementRef = writable(null);
  $$unsubscribe_elementRef = subscribe(elementRef, (value) => $elementRef = value);
  let api = useTabsContext("TabPanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-tabs-panel-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    panelData = { id, ref: elementRef };
    myIndex = $api.panels.indexOf(panelData);
    selected = myIndex === $api.selectedIndex;
    propsWeControl = {
      id,
      role: "tabpanel",
      "aria-labelledby": (_a = $api.tabs[myIndex]) == null ? void 0 : _a.id,
      tabIndex: selected ? 0 : -1
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1.assign(
        { ...$$restProps, ...propsWeControl },
        { as },
        { use: [...use, forwardEvents] },
        { name: "TabPanel" },
        { slotProps },
        { visible: selected },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $elementRef }
      ),
      {
        el: ($$value) => {
          $elementRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_elementRef();
  return $$rendered;
});
export {
  TabGroup as T,
  TabList as a,
  Tab as b,
  TabPanels as c,
  TabPanel as d
};
