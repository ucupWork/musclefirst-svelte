import { c as create_ssr_component, a as add_attribute } from "./index-1e319aa9.js";
const ImageResponsive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt } = $$props;
  let { src } = $$props;
  let { classes } = $$props;
  let { style = "" } = $$props;
  let { breakpoints } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { srcsetActive } = $$props;
  const [path, filetype] = src.split(".");
  const srcset = breakpoints.map((breakpoint) => `${path}_${breakpoint}.${filetype} ${breakpoint}w`).join(", ");
  breakpoints.map((breakpoint) => `${path}.${filetype}`).join(", ");
  const sizes = breakpoints.map((breakpoint, i, breakpoints2) => {
    function minQuery() {
      const previousBreakpoint = breakpoints2[i - 1];
      return `(min-width: ${previousBreakpoint + 1}px)`;
    }
    function maxQuery() {
      return `(max-width: ${breakpoint}px)`;
    }
    let mediaQuery = "";
    if (i === 0) {
      mediaQuery = maxQuery();
    } else if (i === breakpoints2.length - 1) {
      mediaQuery = minQuery();
    } else {
      mediaQuery = `(${minQuery()} and ${maxQuery()})`;
    }
    return `${mediaQuery} ${breakpoint}px`;
  }).join(", ");
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.breakpoints === void 0 && $$bindings.breakpoints && breakpoints !== void 0)
    $$bindings.breakpoints(breakpoints);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.srcsetActive === void 0 && $$bindings.srcsetActive && srcsetActive !== void 0)
    $$bindings.srcsetActive(srcsetActive);
  return `${srcsetActive ? `<img${add_attribute("class", classes, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("alt", alt, 0)}${add_attribute("sizes", sizes, 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("style", style, 0)}>` : `<img${add_attribute("class", classes, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("alt", alt, 0)}${add_attribute("sizes", sizes, 0)}${add_attribute("src", src, 0)}${add_attribute("style", style, 0)}>`}`;
});
export {
  ImageResponsive as I
};
