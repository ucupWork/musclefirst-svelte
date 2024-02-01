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
    import { SEO, Breadcrumbs } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { Main } from '$section/brand-center/index';
    import ReviewThree from '$images/review/rv-3.jpeg';

    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Brand Center" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Brand Center" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />