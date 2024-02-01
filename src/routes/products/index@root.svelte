<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            cache: { maxage: 31536000 },
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO, Breadcrumbs } from '$general/index';
    import { MainProduct } from '$section/product/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    
    export let segment: any;
	export let currentPage: string;
</script>

<FbPixelScript />

<SEO 
    title="Products" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Products" 
    linkUrl={currentPage} 
    slug=""
/>

<MainProduct id="main-products" />