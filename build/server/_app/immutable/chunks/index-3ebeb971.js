import { parse, serialize } from "cookie";
import { v as v4 } from "./index-778a8503.js";
import "@sveltejs/kit/hooks";
const headers = {
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "no-referrer",
  "Permissions-Policy": `accelerometer=(), autoplay="*", camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()`,
  "X-Content-Type-Options": "nosniff",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
};
const handle = async ({ event, resolve }) => {
  event.url.pathname.split("/");
  const cookies = parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies.userid || v4();
  if (event.url.pathname == "/id")
    return Response.redirect(event.url.origin + "/");
  if (event.url.pathname == "/en")
    return Response.redirect(event.url.origin + "/");
  if (event.url.pathname == "/products/bcaa")
    return Response.redirect(event.url.origin + "/products/pro-bcaa");
  if (event.url.pathname == "/products/casein")
    return Response.redirect(event.url.origin + "/products/pro-casein");
  if (event.url.pathname == "/products/creatine")
    return Response.redirect(event.url.origin + "/products/pro-creatine");
  if (event.url.pathname == "/products/gainer")
    return Response.redirect(event.url.origin + "/products/pro-gainer");
  if (event.url.pathname == "/products/isolate")
    return Response.redirect(event.url.origin + "/products/pro-isolate");
  if (event.url.pathname == "/products/whey")
    return Response.redirect(event.url.origin + "/products/pro-whey");
  if (event.url.pathname == "/article")
    return Response.redirect(event.url.origin + "/blog");
  if (event.url.pathname == "/agen")
    return Response.redirect(event.url.origin + "/agent");
  if (event.url.pathname == "/sixtreme")
    return Response.redirect(event.url.origin + "/sixstreme");
  if (event.url.pathname == "/sixtream")
    return Response.redirect(event.url.origin + "/sixstreme");
  if (event.url.pathname == "/sixstream")
    return Response.redirect(event.url.origin + "/sixstreme");
  const response = await resolve(event);
  for (const key in headers) {
    response.headers.set(`${key}`, `${headers[key]}`);
  }
  if (!cookies["userid"]) {
    response.headers.set(
      "set-cookie",
      serialize("userid", event.locals.userid, {
        path: "/",
        httpOnly: true
      })
    );
  }
  return response;
};
export {
  handle
};
