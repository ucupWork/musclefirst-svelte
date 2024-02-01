<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';

	export async function load({ url }: LoadEvent) {
        const segment: string = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            cache: { maxage: 31536000 },
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { onMount } from 'svelte';
	import { state } from '$stores/index';
    import { Loading, TransitionPage } from '$general/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { HotjarScript } from '$shared/hotjar-tracking/index';
    import { partytownSnippet } from '@builder.io/partytown/integration';
    import '$styles/css/app.css';
    
	let ready: boolean;
    let scriptEl: HTMLScriptElement;

    $: {
        if (ready) {
            setInterval(() => {
                state.set({ loading: false })
            }, 1000)
        }
    }

    onMount(async () => {
        ready = true;
        
        if (scriptEl) {
            scriptEl.textContent = partytownSnippet();
        }
    });
</script>
  
<svelte:head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TH3CF5T');</script>
    <!-- End Google Tag Manager -->
</svelte:head>

<GoogleTMScript />
<FbPixelScript />
<HotjarScript />

{#if $state.loading}
<Loading/>
{/if}

<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-black">
    <TransitionPage>
        <slot />
    </TransitionPage>
    
    <!-- <div class="fixed bottom-2 left-1 h-auto bg-transparent w-auto z-[100] px-4 py-4">
        <div class="flex flex-col space-y-2 justify-center items-center">
            <a rel="noreferrer nofollow"  href={`https://wa.me/${kontakAgen}/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0`} target="_blank" class="flex flex-row space-x-4">
                <div class="bg-white flex items-center w-64 h-16 rounded-full border py-4 relative shadow-md">
                    <div class="absolute left-0 inset-y-0 cursor-pointer w-14 md:w-16 h-14 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg border shadow-green-500/50 flex justify-center items-center">
                        <span class="w-auto h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                        </span>
                    </div>
                    <div class="pl-20 flex flex-col w-auto h-auto">
                        <p class="text-sm text-gray-600 dark:text-gray-300">Buruan daftar jadi agen musclefirst <span class="text-green-600 hover:underline uppercase font-bold text-xs">Sekarang</span>. </p>
                    </div>
                </div>
            </a>
        </div>
    </div> -->
</div>