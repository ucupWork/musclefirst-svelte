<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale
        
		return {
            segment,
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO } from '$general/index';
	import { state, lpCountdown } from '$stores/index';
    import { Loading, TransitionPage } from '$general/index';
    import { TopTop, Share } from '$globals/button/index';
    import { CountTime } from '$globals/countdown/index';
    import { ButtonBack, ButtonOrder } from '$components/layout-lp/v-one/index'
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import '$styles/css/app.css';
    
    let productName: string = "Pro Nrgy";
	let ready: boolean;
    
    $: {
        if (ready) {
            setInterval(() => {
                state.set({ loading: false })
            }, 1000)
        }
    }

    onMount(async () => {
        ready = true;
    });
</script>

<FbPixelScript />
<GoogleTMScript />

<SEO 
    ogImage={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png'}
    title={`Pre Workout - Energy Drinks - Meningkatkan Stamina - ${productName}`} 
    description={`${productName} merupakan minuman energy sebagai pre workout agar menambah fokus dan power tanpa efek samping. Pro NRGY sudah bersertifikat halal dan BPOM.`}
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

{#if $state.loading}
<Loading/>
{/if}
<!-- TopTop -->
<TopTop classes="right-2 bottom-24 md:bottom-24" />
<Share {productName} classes="right-2 bottom-40 md:bottom-40" />
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <!-- Header -->
    <ButtonBack buttonType={'black'} linkHref={'/products'} />
    <!-- End Header -->

    <TransitionPage>1B3mY3Fi8W
        <slot />
    </TransitionPage>

    <!-- Footer -->
    <div class="fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 z-[100] px-12 md:px-24">
        <!-- YYYY-MM-DD H:m:s -->
        {#if $lpCountdown}
        <CountTime bgColor="zinc-900" flexType="flex-row" textColor="white" width="16" height="12" textSize="xl" borderColor="rose" dateFormatText="2022-11-09 09:30:00" endTimeText="The time has come!" />
        {/if}      
        <ButtonOrder classes="rounded-full text-center bg-rose-800 w-64 border border-gray-900" linkHref="/products/pro-nrgy" />
    </div>
    <!-- End Footer -->
</div>