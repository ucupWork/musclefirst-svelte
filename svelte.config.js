/** @type {import('@sveltejs/kit').Config} */
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: [".svelte", ...mdsvexConfig.extensions],
    trailingSlash: 'always',
    preprocess: [
        mdsvex(mdsvexConfig),
        preprocess({
            postcss: true,
            scss: true,
            sourceMap: true,
            preserve: [
                'ld+json',
                'partytown'
            ]
        })
    ],

    onwarn: (warning, handler) => {
        const suppress = ["a11y-", "css-", "unused-", "css-unused-selector"];
        if (warning.code.startsWith("a11y")) return;
        if (suppress.some((s) => warning.code.startsWith(s))) {
            return;
        }
        handler(warning);
    },

    kit: {
        adapter: adapterNode(),
        methodOverride: {
            allowed: [
                'PUT',
                'PATCH',
                'DELETE'
            ]
        },
        files: { serviceWorker: 'src/service-worker' },
        serviceWorker: { register: true },
    }
};

export default config;