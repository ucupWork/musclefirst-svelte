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
    import { onMount } from 'svelte';
    import { SEO } from '$general/index';
	import { state, lpCountdown } from '$stores/index';
    import { Loading, TransitionPage } from '$general/index';
    import { TopTop, Share } from '$globals/button/index';
    import { CountTime } from '$globals/countdown/index';
    import { ButtonBack, ButtonOrder } from '$components/layout-lp/v-one/index'
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { Notification } from '$shared/notification/index'
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import '$styles/css/app.css';
    
    let productName: string = "Pro Casein";
	let ready: boolean;
    let seconds: number = 0;
    let showNotification: boolean = false;
	let imageNotifiaction: boolean = true;
    let productLink: string = 'https://shopee.co.id/product/8802988/2559112272';
    
    $: {
        if (ready) {
            setInterval(() => {
                state.set({ loading: false })
            }, 1000)
        }
    }

    onMount(async () => {
        ready = true;
        const interval1 = setInterval(() => {
            seconds += 1;
            // console.log(seconds);
            if(seconds === 8) {
                showNotification = true;
            }
            
            if(seconds === 16) {
                showNotification = false;
            }
            
            if(seconds === 24) {
                showNotification = true;
            }
            
            if(seconds === 32) {
                showNotification = false;
            }
        }, 1000);

        return () => {
            // console.log('unmounted');
            clearInterval(interval1);
        }
    });

    function closeNofitication(){
        // clearTimeout();
        showNotification = false;
    }
</script>

<FbPixelScript />
<GoogleTMScript />

<SEO 
    ogImage={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'}
    title={`Whey Protein Penunda Lapar - ${productName}`} 
    description={`${productName} merupakan whey protein dengan daya serap yang lama sehingga cocok buat menahan rasa lapar atau juga sebagai meal replacement, dan sudah halal dan BPOM.`}
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

{#if $state.loading}
<Loading/>
{/if}
<!-- TopTop -->
<TopTop classes="left-2 bottom-6 md:bottom-24" />
<Share {productName} classes="left-2 bottom-20 md:bottom-40" />
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <!-- Header -->
    <ButtonBack buttonType={'black'} linkHref={'/products'} />
    <!-- End Header -->

    <TransitionPage>
        <slot />
    </TransitionPage>


    {#if showNotification}
        <div class="fixed left-4 top-16 w-80 md:w-80 h-auto flex md:hidden flex-row justify-center items-center bg-transparent z-[90]">
            <Notification 
                notificationStyle={'black'}
                on:click={closeNofitication}
                {imageNotifiaction}
                imgLink={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'}
                productName="Pro Casein" 
                productLink={productLink} 
                description="Membeli" 
            />
        </div>

        <div class="fixed right-8 bottom-24 w-80 md:w-80 h-auto hidden md:flex flex-row justify-center items-center bg-transparent z-[90]">
            <Notification 
                notificationStyle={'black'}
                on:click={closeNofitication}
                {imageNotifiaction}
                imgLink={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'}
                productName="Pro Casein" 
                productLink={productLink} 
                description="Membeli" 
            />
        </div>
    {/if}
    <!-- Footer -->
    <div class="fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 z-[90] px-12 md:px-24">
        <!-- YYYY-MM-DD H:m:s -->
        {#if $lpCountdown}
        <CountTime bgColor="zinc-900" flexType="flex-row" textColor="white" width="16" height="12" textSize="xl" borderColor="yellow" dateFormatText="2022-11-09 09:30:00" endTimeText="The time has come!" />    
        {/if}
        <ButtonOrder classes="bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg border shadow-amber-500/50" linkHref={'/products/pro-casein'} />
    </div>
    <!-- End Footer -->
</div>  