<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO, Breadcrumbs } from '$general/index';
    import { MainCalculator } from '$section/calculator/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FbPixelScript } from '$shared/fb-pixel/index';

    export let segment: any;
	export let currentPage: string;
</script>

<FbPixelScript />

<SEO 
    title="Kalkulator BMI | Kalkulator BMR | Kalkulator Kalori Harian - Muscle First"
    description={`Muscefirst Kalkulator merupakan tools untuk mendukung program kalian seperti tools kalkulatr BMI, Kalkulator BMR dan Kalkulator kalori harian.`} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Kalkulator" 
    linkUrl={currentPage} 
    slug=""
/>

<MainCalculator id="main-calculator" />