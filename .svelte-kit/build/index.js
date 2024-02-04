
import root from '__GENERATED__/root.svelte';
import { respond } from '../runtime/server/index.js';
import { set_paths, assets, base } from '../runtime/paths.js';
import { set_prerendering } from '../runtime/env.js';
import { set_private_env } from '../runtime/env-private.js';
import { set_public_env } from '../runtime/env-public.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n    <meta name=\"color-scheme\" content=\"light dark\" />\n    <meta name=\"application-name\" content=\"Musclefirst\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"Musclefirst\" />\n    <meta name=\"keywords\" content=\"Fuel You With Best Nutrition, Muscle, Musclefirst, Protein, Healthy, Workout\">\n    <meta name=\"facebook-domain-verification\" content=\"2cymz8aojmsxp08jgckxqkiwek3sqv\" />\n    <meta name=\"google-site-verification\" content=\"IqZczZDTghmjrwfRLcFsLwc5-gS-T0yEf6toJ1wZYFE\" />\n    <link rel=\"icon\" href=\"/assets/site/favicon.ico\" type=\"image/x-icon\">\n    <link rel=\"icon\" href=\"/assets/site/logo-32x32.png\" sizes=\"32x32\" type=\"image/png\">\n    <link rel=\"icon\" href=\"/assets/site/logo-192x192.png\" sizes=\"192x192\" type=\"image/png\">\n    <link rel=\"apple-touch-icon-precomposed\" href=\"/assets/site/logo-180x180.png\" sizes=\"180x180\">\n    <!-- Google tag (gtag.js) -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-8JPZ3MR32T\"></script>\n    <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', 'G-8JPZ3MR32T');\n    </script>\n    \n    <!-- Musclefirst Newsletter Tag -->\n    <script id=\"mcjs\">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,\"script\",\"https://chimpstatic.com/mcjs-connected/js/users/11903fbf931b8f42bb65b0613/897438493fdb2c4f7f6103306.js\");</script>\n    <!-- End Musclefirst Newsletter Tag -->\n    \n    <!-- Meta Pixel Code -->\n    <script>\n        !function(f,b,e,v,n,t,s)\n        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n        n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n        n.queue=[];t=b.createElement(e);t.async=!0;\n        t.src=v;s=b.getElementsByTagName(e)[0];\n        s.parentNode.insertBefore(t,s)}(window, document,'script',\n        'https://connect.facebook.net/en_US/fbevents.js');\n        fbq('init', '3678634185747395');\n        fbq('track', 'PageView');\n    </script>\n    <noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n        src=\"https://www.facebook.com/tr?id=3678634185747395&ev=PageView&noscript=1\"\n    /></noscript>\n    <!-- End Meta Pixel Code -->\n    <script>\n    !function (w, d, t) {\n    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i=\"https://analytics.tiktok.com/i18n/pixel/events.js\";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement(\"script\");o.type=\"text/javascript\",o.async=!0,o.src=i+\"?sdkid=\"+e+\"&lib=\"+t;var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(o,a)};\n\n    ttq.load('CKIGGURC77UE2IQFLLKG');\n    ttq.page();\n    }(window, document, 'ttq');\n    </script>\n    " + head + "\n</head>\n\n<body>\n    <div id=\"svelte\">" + body + "</div>\n    <!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TH3CF5T\"\n    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n    <!-- End Google Tag Manager (noscript) -->\n    <!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TH3CF5T\"\n    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n    <!-- End Google Tag Manager (noscript) -->\n</body>\n\n</html>";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":["PUT","PATCH","DELETE"]},
			paths: { base, assets },
			prefix: assets + '/',
			prerender: {
				default: false,
				enabled: true
			},
			public_env: {},
			read,
			root,
			service_worker: base + '/service-worker.js',
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("..\\..\\src\\hooks\\index.ts");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
