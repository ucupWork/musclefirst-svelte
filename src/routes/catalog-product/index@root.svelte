<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            // key: url.pathname,
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/catalog-product/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FbPixelScript } from '$shared/fb-pixel/index';

    export let segment: any;
	export let currentPage: string;
    export let data;
</script>

<FbPixelScript />

<SEO 
    title="Katalog Produk" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Katalog Produk" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />