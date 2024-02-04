import { c as create_ssr_component, h as compute_rest_props, q as get_current_component, b as subscribe, s as setContext, v as validate_component, g as getContext, n as noop } from "./index-b361c760.js";
import { f as forwardEventsBuilder, g as useDisclosureContext, h as useOpenClosed, S as State, i as DisclosureStates, R as Render, F as Features, w as writable } from "./common-65c7f3c2.js";
import { r as resolveButtonType } from "./resolve-button-type-bf5607f2.js";
let DISCLOSURE_PANEL_CONTEXT_NAME = "headlessui-disclosure-panel-context";
function usePanelContext() {
  return getContext(DISCLOSURE_PANEL_CONTEXT_NAME);
}
const DisclosurePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panelStore;
  let visible;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $openClosedState, $$unsubscribe_openClosedState;
  let $panelStore, $$unsubscribe_panelStore = noop, $$subscribe_panelStore = () => ($$unsubscribe_panelStore(), $$unsubscribe_panelStore = subscribe(panelStore, ($$value) => $panelStore = $$value), panelStore);
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useDisclosureContext("DisclosurePanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  setContext(DISCLOSURE_PANEL_CONTEXT_NAME, $api.panelId);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_panelStore(panelStore = $api.panelStore);
    visible = $openClosedState !== null ? $openClosedState === State.Open : $api.disclosureState === DisclosureStates.Open;
    propsWeControl = { id: $api.panelId };
    slotProps = {
      open: $api.disclosureState === DisclosureStates.Open,
      close: $api.close
    };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign(
        { ...$$restProps, ...propsWeControl },
        { as },
        { slotProps },
        { use: [...use, forwardEvents] },
        { name: "DisclosurePanel" },
        { visible },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $panelStore }
      ),
      {
        el: ($$value) => {
          $panelStore = $$value;
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
  $$unsubscribe_openClosedState();
  $$unsubscribe_panelStore();
  return $$rendered;
});
const DisclosureButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let panelStore;
  let isWithinPanel;
  let type;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $panelStore, $$unsubscribe_panelStore = noop, $$subscribe_panelStore = () => ($$unsubscribe_panelStore(), $$unsubscribe_panelStore = subscribe(panelStore, ($$value) => $panelStore = $$value), panelStore);
  let $ourStore, $$unsubscribe_ourStore = noop, $$subscribe_ourStore = () => ($$unsubscribe_ourStore(), $$unsubscribe_ourStore = subscribe(ourStore, ($$value) => $ourStore = $$value), ourStore);
  let $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $$value), buttonStore);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useDisclosureContext("DisclosureButton");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const panelContext = usePanelContext();
  let ourStore = writable(null);
  $$subscribe_ourStore();
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
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    $$subscribe_panelStore(panelStore = $api.panelStore);
    isWithinPanel = panelContext === null ? false : panelContext === $api.panelId;
    {
      if (!isWithinPanel)
        $$subscribe_ourStore(ourStore = buttonStore);
    }
    type = resolveButtonType({ type: $$props.type, as }, $ourStore);
    propsWeControl = isWithinPanel ? { type } : {
      id: $api.buttonId,
      type,
      "aria-expanded": disabled ? void 0 : $api.disclosureState === DisclosureStates.Open,
      "aria-controls": $panelStore ? $api.panelId : void 0,
      disabled: disabled ? true : void 0
    };
    slotProps = {
      open: $api.disclosureState === DisclosureStates.Open,
      close: $api.close
    };
    $$rendered = `${isWithinPanel ? `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DisclosureButton" }, { el: $ourStore }),
      {
        el: ($$value) => {
          $ourStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}` : `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DisclosureButton" }, { el: $ourStore }),
      {
        el: ($$value) => {
          $ourStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_panelStore();
  $$unsubscribe_ourStore();
  $$unsubscribe_buttonStore();
  return $$rendered;
});
export {
  DisclosureButton as D,
  DisclosurePanel as a
};
