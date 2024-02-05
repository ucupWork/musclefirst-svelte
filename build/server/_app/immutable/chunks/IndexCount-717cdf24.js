import { c as create_ssr_component, v as validate_component, e as escape } from "./index-1e319aa9.js";
import { d as dayjs, u as utc, a as duration, b as customParseFormat, t as tz } from "./BannerPromo.svelte_svelte_type_style_lang-7d8a4bd9.js";
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { borderColor } = $$props;
  let { dateFormatText } = $$props;
  let { endTimeText } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { bgColor } = $$props;
  let { textSize } = $$props;
  let { textColor } = $$props;
  let { flexType } = $$props;
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.dateFormatText === void 0 && $$bindings.dateFormatText && dateFormatText !== void 0)
    $$bindings.dateFormatText(dateFormatText);
  if ($$props.endTimeText === void 0 && $$bindings.endTimeText && endTimeText !== void 0)
    $$bindings.endTimeText(endTimeText);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textSize === void 0 && $$bindings.textSize && textSize !== void 0)
    $$bindings.textSize(textSize);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.flexType === void 0 && $$bindings.flexType && flexType !== void 0)
    $$bindings.flexType(flexType);
  return `<div class="${"w-auto h-auto py-2 px-0"}">${validate_component(IndexCount, "Countdown").$$render(
    $$result,
    {
      zone: "Asia/Bangkok",
      from: dateFormatText,
      dateFormat: "YYYY-MM-DD H:m:s"
    },
    {},
    {
      default: ({ remaining }) => {
        return `<div class="${"flex flex-row w-full h-auto justify-center items-center space-x-2 md:space-x-4"}">${remaining.done === false ? `<div class="${"flex " + escape(flexType, true) + " justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-" + escape(bgColor, true) + " shadow w-" + escape(width, true) + " h-" + escape(height, true) + " border border-" + escape(borderColor, true) + "-200"}"><span class="${"font-bold text-" + escape(textSize, true) + " text-" + escape(textColor, true)}">${escape(remaining.days)}</span></div>
                <span class="${"font-bold text-sm uppercase text-" + escape(textColor, true)}">Hari</span></div>
            <div class="${"flex " + escape(flexType, true) + " justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-" + escape(bgColor, true) + " shadow w-" + escape(width, true) + " h-" + escape(height, true) + " border border-" + escape(borderColor, true) + "-200"}"><span class="${"font-bold text-" + escape(textSize, true) + " text-" + escape(textColor, true)}">${escape(remaining.hours)}</span></div>
                <span class="${"font-bold text-sm uppercase text-" + escape(textColor, true)}">Jam</span></div>
            <div class="${"flex " + escape(flexType, true) + " justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-" + escape(bgColor, true) + " shadow w-" + escape(width, true) + " h-" + escape(height, true) + " border border-yellow-200"}"><span class="${"font-bold text-" + escape(textSize, true) + " text-" + escape(textColor, true)}">${escape(remaining.minutes)}</span></div>
                <span class="${"font-bold text-sm uppercase text-" + escape(textColor, true)}">Menit</span></div>
            <div class="${"flex " + escape(flexType, true) + " justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto"}"><div class="${"flex justify-center items-center bg-" + escape(bgColor, true) + " shadow w-" + escape(width, true) + " h-" + escape(height, true) + " border border-yellow-200"}"><span class="${"font-bold text-" + escape(textSize, true) + " text-" + escape(textColor, true)}">${escape(remaining.seconds)}</span></div>
                <span class="${"font-bold text-sm uppercase text-" + escape(textColor, true)}">Detik</span></div>` : `<div class="${"w-full h-auto flex justify-center items-center bg-" + escape(bgColor, true) + " px-8 py-2 border border-yellow-200"}"><h2 class="${"font-bold uppercase text-md text-" + escape(textColor, true)}">${escape(endTimeText)}</h2></div>`}</div>`;
      }
    }
  )}</div>`;
});
const IndexCount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(utc);
  dayjs.extend(duration);
  dayjs.extend(customParseFormat);
  dayjs.extend(tz);
  let { from, dateFormat, zone } = $$props;
  let remaining = {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: true
  };
  if ($$props.from === void 0 && $$bindings.from && from !== void 0)
    $$bindings.from(from);
  if ($$props.dateFormat === void 0 && $$bindings.dateFormat && dateFormat !== void 0)
    $$bindings.dateFormat(dateFormat);
  if ($$props.zone === void 0 && $$bindings.zone && zone !== void 0)
    $$bindings.zone(zone);
  return `${slots.default ? slots.default({ remaining }) : ``}`;
});
export {
  Index as I
};
