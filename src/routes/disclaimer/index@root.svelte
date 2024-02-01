<script lang="ts">
    import { page } from '$app/stores';
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/disclaimer/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    export let segment: any;
	export let currentPage: string = $page.url.pathname;
</script>

<SEO 
    title="Disclaimer Kesehatan" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Disclaimer Kesehatan" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />