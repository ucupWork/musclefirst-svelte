<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { Main } from '$section/agent/index';
    import ReviewThree from '$images/review/rv-3.jpeg';
</script>

<SEO 
    title="Beli Muscle First Terdekat di Kota Kalian" 
    description="Ongkir lebih murah dengan membeli di agen Muscle First terdekat di kota kalian."
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Main />