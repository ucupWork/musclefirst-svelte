// <reference types="@sveltejs/kit" />

declare module 'cookie';
declare module 'daisyui';
declare module 'svelte-slidy';
declare module 'html-minifier';
declare module 'svelte-scrollto';
declare module 'tailwind-scrollbar';
declare module '@tailwindcss/typography';
declare module '@tailwindcss/line-clamp';
declare module '@tailwindcss/aspect-ratio';
declare module 'flowbite/plugin';
declare module 'svelte-countdown/src/index.js';
declare module 'svelte-carousel';
declare module 'lodash.debounce';
declare module 'intl';
declare module 'animejs';

declare module '*.gif' {
    const value: string;
    export = value;
}

declare module '*.jpg' {
    const value: string;
    export = value;
}

declare module '*.jpeg' {
    const value: string;
    export = value;
}

declare module '*.png' {
    const value: string;
    export = value;
}

declare module '*.svg' {
    const value: string;
    export = value;
}

declare module '*.webp' {
    const value: string;
    export = value;
}