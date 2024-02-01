import { partytownVite } from '@builder.io/partytown/utils'
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

import svelteSVG from 'vite-plugin-svelte-svg';
import replace from '@rollup/plugin-replace';

import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';
import * as path from 'path';
import {
    pwaConfiguration,
    replaceOptions
} from './pwa-config.js';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));
/** @type {import('vite').UserConfig} */
const config = {
    server: {
        fs: {
            strict: false,
            allow: [
                '.',
                '..',
                'src/lib/images',
                'static',
            ],
        },
    },
    optimizeDeps: {
        include: [
            'svelte',
            'svelte-carousel',
            'svelte-scrollto',
            'svelte/transition',
            'svelte/internal',
            'lodash.get',
            'lodash.isequal',
            'lodash.clonedeep',
            'lodash.debounce',
            '@rgossiaux/svelte-headlessui',
            'embla-carousel-svelte',
            'pixi.js'
        ]
    },
    resolve: {
        alias: {
            $components: path.resolve('./src/lib/components'),
            $general: path.resolve('./src/lib/components/general'),
            $globals: path.resolve('./src/lib/components/globals'),
            $section: path.resolve('./src/lib/components/section'),
            $shared: path.resolve('./src/lib/components/shared'),
            $translations: path.resolve('./src/lib/translations'),
            $contents: path.resolve('./src/lib/contents'),
            $typings: path.resolve('./src/lib/typings'),
            $images: path.resolve('./src/lib/images'),
            $helper: path.resolve('./src/lib/helper'),
            $stores: path.resolve('./src/lib/stores'),
            $utils: path.resolve('./src/lib/utils'),
            $config: path.resolve('./src/lib/config'),
            $graphql: path.resolve('./src/lib/graphql'),
            $styles: path.resolve('./src/styles'),
            $i18n: path.resolve('./src/i18n'),
        }
    },
    ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
    },
    plugins: [
        sveltekit(),
        partytownVite({
            dest: join(
                process.cwd(), 
                'static', 
                '~partytown'
            )
        }),
        svelteSVG({
            svgoConfig: {}, // See https://github.com/svg/svgo#configuration
            requireSuffix: false, // Set false to accept '.svg' without the '?component'
        }),
        // VitePWA(pwaConfiguration),
        replace(replaceOptions),
        imagetools({ force: true }),
    ],
};

export default config;