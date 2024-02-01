<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';

    export const load: Load = async({ url }: LoadEvent) => {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            currentPage: url.pathname,
            cache: {
                maxage: 31536000,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO } from '$general/index';
    import { Jumbotron, Service, Product, Contact, Promo, Consultation, CtaAgent, Calculator, CertifiedLabel } from '$section/home/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import ogImageSite from '$images/site/og-img-site.webp';
    import BannerHome from '$components/section/home/Banner/BannerHome.svelte'

    export let promoActive: boolean = false;
    export let cdnActive: boolean = true;
    export let promoType: string = "satu";
</script>

<SEO 
    title="Susu Protein & Suplement Fitness" 
    ogImage={ogImageSite}
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<!-- <Jumbotron id="main" /> -->
<BannerHome/>
<Service id="service" />
<Promo {promoActive} {cdnActive} {promoType} id="promo" />
<Consultation id="consultation" />
<Calculator id="calculator-musclefirst" />
<Product id="product" />
<CtaAgent id="cta-agent" />
<Contact id="contact" />
<CertifiedLabel id="certified" />