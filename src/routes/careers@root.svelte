<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { careersQuery } from '$graphql/career-queries';

    export async function load({ url }: LoadEvent) {
        const { careers } = await client.request(careersQuery);
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            cache: { maxage: 31536000 },
            currentPage: url.pathname,
            props: { careers }
		};
	}
</script>

<script lang="ts">
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/careers/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    export let careers: any;
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Careers" 
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