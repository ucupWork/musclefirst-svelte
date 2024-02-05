import { c as create_ssr_component } from "./index-1e319aa9.js";
const IndexScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `<script type="${"text/partytown"}" data-svelte="svelte-1vpqdsk">!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '783058296248079');
    fbq('track', 'PageView');
    <\/script><noscript data-svelte="svelte-1vpqdsk"><img height="${"1"}" width="${"1"}" style="${"display:none"}" src="${"https://www.facebook.com/tr?id=783058296248079&ev=PageView&noscript=1"}" data-svelte="svelte-1vpqdsk"></noscript>`, ""}`;
});
export {
  IndexScript as I
};
