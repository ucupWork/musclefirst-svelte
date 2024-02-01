import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';

const config = {
    extensions: [".svelte.md", ".md", ".svx"],

    layout: {},

    smartypants: {
        "dashes": "oldschool"
    },

    remarkPlugins: [emoji, remarkGfm, remarkFootnotes],
    rehypePlugins: [],
};

export default config;