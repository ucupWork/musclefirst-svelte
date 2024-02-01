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
    import { Main } from '$section/careers/index';
    
    export let careers: any;
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Lowongan Kerja di Muscle First | Karir - Muscle First"
    description={`Ingin bergabung dan kerja menjadi bagian dari tim Muscle first ? Yuk cari tahu lowongan kerja yang tersedia di Muscle First.`} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Careers" 
    linkUrl={currentPage} 
    slug=""
/>

<Main {careers} />