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
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/promotion/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Promotion" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Promotion" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />
