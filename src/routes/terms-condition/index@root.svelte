<script lang="ts">
    import { page } from '$app/stores';
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/terms-condition/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    export let segment: any;
	export let currentPage: string = $page.url.pathname;
</script>

<SEO 
    title="Ketentuan & Kondisi" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Ketentuan & Kondisi" 
    linkUrl={currentPage} 
    slug=""
/>

<Main />