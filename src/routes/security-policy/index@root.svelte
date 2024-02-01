<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { SEO, Breadcrumbs } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { Main } from '$section/security-policy/index';

    export let segment: any;
	export let currentPage: string = $page.url.pathname;
</script>

<SEO 
    title="Kebijakan Keamanan" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Kebijakan Keamanan" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />