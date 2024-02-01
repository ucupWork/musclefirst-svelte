<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0];  // first part after locale
        
		return {
            segment,
            cache: { maxage: 31536000 },
            currentPage: url.pathname,
		};
	}
</script>

<script lang="ts">
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main, Partner, Reason } from '$section/about/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="About" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="About" 
    linkUrl={currentPage} 
    slug=""
/>

<Main  />
<Reason />
<Partner />