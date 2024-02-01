const colors = require('tailwindcss/colors');

const config = {
    content: [
        './src/**/**/*.{html,js,svelte,ts}',
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
    ],
    theme: {
        colors: colors,
        screens: {
            'sm': '360px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                accross: ['Across the Street'],
                solois: ['Solois'],
                bankghotic: ['Bank Ghotic'],
                ttnorms: ['TTNorms'],
                exttnorms: ['TTNorms Extra Bold'],
                blackttnorms: ['TTNorms Black'],
                mightybrush: ['Mighty Brush'],
                benmojinhei: ['Benmo Jinhei'],
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('flowbite/plugin'),
        require('tailwind-scrollbar')
    ],
    darkMode: 'class',
    variants: {
        scrollbar: ['dark']
    }
};

module.exports = config;