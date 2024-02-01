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
    import { Notification } from '$shared/notification/index';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import '$styles/css/app.css';
    
    let productName: string = "Pro Collafit";
	let ready: boolean;
    let seconds: number = 0;
    let showNotification: boolean = false;
	let imageNotifiaction: boolean = true;
    let productLink: string = '';
   
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

    function closeNofitication() {
        showNotification = false;
    }
</script>

<FbPixelScript />
<GoogleTMScript />

<SEO 
    ogImage={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png'}
    title={`Shape & Glow - ${productName}`} 
    description={`${productName} menjaga kesehatan dan kecantikan dari luar maupun dalam tubuh.`}
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
    <ButtonBack buttonType={'pink'} linkHref={'/products'} />
    <!-- End Header -->

    <TransitionPage>
            <slot />
    </TransitionPage>

    {#if showNotification}
        <div class="fixed left-4 top-16 w-80 md:w-80 h-auto flex md:hidden flex-row justify-center items-center bg-transparent z-[90]">
            <Notification 
                notificationStyle={'pink'}
                on:click={closeNofitication}
                {imageNotifiaction}
                imgLink={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png'}
                productName="Pro Collafit" 
                productLink={productLink} 
                description="Membeli" 
            />
        </div>

        <div class="fixed right-8 bottom-24 w-80 md:w-80 h-auto hidden md:flex flex-row justify-center items-center bg-transparent z-[90]">
            <Notification 
                notificationStyle={'pink'}
                on:click={closeNofitication}
                {imageNotifiaction}
                imgLink={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-collafit/pronew-08_o2a7lq.png'}
                productName="Pro Collafit" 
                productLink={productLink} 
                description="Membeli" 
            />
        </div>
    {/if}
    <!-- Footer -->
    <div class="fixed inset-x-0 bottom-0 w-full h-auto hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-900 border-t border-pink-300 shadow-xl z-[90] px-12 md:px-24">
        <!-- YYYY-MM-DD H:m:s -->
        {#if $lpCountdown}
            <CountTime bgColor="zinc-900" flexType="flex-row" textColor="white" width="16" height="12" textSize="xl" borderColor="yellow" dateFormatText="2022-11-09 09:30:00" endTimeText="The time has come!" />
        {/if}       
        <ButtonOrder classes="bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg border shadow-rose-500/50" linkHref={'/products/pro-collafit'} />
    </div>
    <!-- End Footer -->
</div>