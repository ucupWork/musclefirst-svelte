<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export async function load({ url }: LoadEvent) {
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
    import { derived } from 'svelte/store';
	import { navigating } from '$app/stores';
	import { prefetch } from '$app/navigation';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import { FbPixelScript, fb } from '$shared/fb-pixel/index';
	import { prefersReducedData } from '$utils/prefers-reduced-data';
    import { HotjarScript } from '$shared/hotjar-tracking/index';
    import { MobileMenu } from '$shared/navigation/index';
    import { ModalContactCustomer } from '$globals/modal/index';
	import { state, openmobile, openModalCS, disabledScroll } from '$stores/index';
    import { partytownSnippet } from '@builder.io/partytown/integration';
    import localforage from 'localforage';

    import 'css-doodle';
    import '$styles/css/app.css';
    
    import { 
        Header, 
        SubHeader,
        Footer, 
        Loading, 
        Preloading, 
        TransitionPage,
        MiniBanner,
        BannerPromo
    } from '$general/index';

    // export let key: string;
    export let segment: any;
    export let currentPage: string;
    
    let scriptEl: HTMLScriptElement
	let ready: boolean;
    
    const delayedPreloading = derived(
        navigating, (_, set) => {
            set(true);
            setTimeout(() => set(true), 250);
        }
    );

    $: {
        if (ready) {
            setInterval(() => {
                state.set({ loading: false })
            }, 1000)
        }
    }

    onMount(async () => {
        ready = true;
        console.log('localforage config');
        console.log(currentPage);
        
        localforage.config({
            driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
            name: 'musclefirst',
            version: 1.7,
            description: 'Musclefirst Local Storage',
        });

        fb.track('PageView', { view: 'Home' });
		if (!prefersReducedData()) {
			prefetch('/')
			prefetch('/blog')
			prefetch('/careers')
		}
        
        if (scriptEl) {
            scriptEl.textContent = partytownSnippet();
        }
    });
</script>
  
<svelte:head>
  <!-- Config options -->
  <script>
    // Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  </script>

  <!-- `partytownSnippet` is inserted here -->
  <script bind:this={scriptEl}></script>
</svelte:head>

<GoogleTMScript />
<FbPixelScript />
<HotjarScript />

{#if $state.loading}
<Loading/>
{/if}

{#if $navigating}
    <Preloading />
{/if}

{#if $openmobile}   
    <MobileMenu />
{/if}

<div class="w-full h-auto relative z-0 {$disabledScroll ? 'scroll-lock' : ''}">
    <MiniBanner />
    <Header {segment} />
    <SubHeader />
    <BannerPromo />
        <main class="w-full h-auto overflow-auto relative {$disabledScroll ? 'scroll-lock' : ''}">
            <TransitionPage>
                <slot />
            </TransitionPage>
        </main>
    <Footer classes="m-0" />

    <div class="fixed bottom-2 left-1 h-auto bg-transparent w-auto z-[100] px-4 py-4">
        <div class="flex flex-col space-y-2 justify-center items-center">
            <a rel="noreferrer" href="https://api.whatsapp.com/send/?phone=6282261111868&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0" target="_blank" class="cursor-pointer w-14 md:w-16 h-14 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg border shadow-green-500/50 flex justify-center items-center">
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                </span>
            </a>
            <a href="https://shopee.co.id/universal-link/musclefirstofficialshop?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_home_bp&utm_source=website&utm_medium=seller&utm_content=homeweb&smtt=9" target="_blank" class="cursor-pointer w-14 md:w-16 h-14 md:h-16 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg border shadow-orange-500/50 flex justify-center items-center">
                <span class="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    class="w-6 md:w-6 h-6 md:h-6 fill-current text-white"
                    width="16" height="16"
                    viewBox="0 0 50 50"
                    style=" fill:#undefined;"><path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"></path></svg>
                </span>
            </a>
        </div>
    </div>
</div>

{#if $openModalCS}
<ModalContactCustomer 
    title="Customer Support" 
    modalType={`Global`} 
/>
{/if}

<style lang="postcss">
    :global(.tippy-box[data-theme='a-link']) {
      @apply inline-block py-1 px-2.5 text-sm font-medium rounded-lg shadow-sm;
      @apply text-white bg-gray-900;
    }
</style>