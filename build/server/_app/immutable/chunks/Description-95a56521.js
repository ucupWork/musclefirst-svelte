import { c as create_ssr_component, h as compute_rest_props, q as get_current_component, b as subscribe, v as validate_component } from "./index-b361c760.js";
import { f as forwardEventsBuilder, u as useDialogContext, b as DialogStates, R as Render, c as useId, e as useDescriptionContext } from "./common-65c7f3c2.js";
const DialogTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let { as = "h2" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useDialogContext("DialogTitle");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-dialog-title-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  propsWeControl = { id };
  slotProps = {
    open: $api.dialogState === DialogStates.Open
  };
  $$unsubscribe_api();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DialogTitle" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const DialogOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useDialogContext("DialogOverlay");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-dialog-overlay-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  propsWeControl = { id, "aria-hidden": true };
  slotProps = {
    open: $api.dialogState === DialogStates.Open
  };
  $$unsubscribe_api();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign({ ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DialogOverlay" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $contextStore, $$unsubscribe_contextStore;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { as = "p" } = $$props;
  let { use = [] } = $$props;
  const id = `headlessui-description-${useId()}`;
  let contextStore = useDescriptionContext();
  $$unsubscribe_contextStore = subscribe(contextStore, (value) => $contextStore = value);
  if (!contextStore) {
    throw new Error("You used a <Description /> component, but it is not inside a relevant parent.");
  }
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  slotProps = $contextStore.slotProps || {};
  $$unsubscribe_contextStore();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign({ name: "Description" }, $$restProps, { as }, { slotProps }, $contextStore == null ? void 0 : $contextStore.props, { id }, { use: [...use, forwardEvents] }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
export {
  DialogOverlay as D,
  DialogTitle as a,
  Description as b
};
