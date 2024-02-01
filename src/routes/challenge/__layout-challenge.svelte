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
	import { state } from '$stores/index';
    import { Loading, TransitionOther } from '$general/index';
    import { TopTop } from '$globals/button/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { HotjarScript } from '$shared/hotjar-tracking/index';
    import { partytownSnippet } from '@builder.io/partytown/integration';
    import LogoWhite from '$images/site/logo-white.webp';
    import '$styles/css/app.css';
    
	// CDN Set to Digita Ocean Space
	let cdn: boolean = true;
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
<!-- TopTop -->
<TopTop classes="right-2 bottom-24 md:bottom-24" />
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <!-- Header -->
    <div class="flex flex-row justify-between items-center w-full h-auto fixed py-4 px-4 md:px-8 insex-x-0 top-0 z-[100]">
        <div class="w-auto h-auto z-[100]">
            <a href={'/'} class="flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4">
                <span class="md:mr-0">
                    <img width="647px" height="504px" class="w-8 md:w-16 h-auto" src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp` : LogoWhite} alt="Musclefirst Logo">
                </span>
            </a>
        </div>
        
        <div class="w-auto h-auto z-[100]">
            <a href={'/'} class="flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4 rounded-full bg-zinc-900 shadow shadow-zinc-900/50 border border-black">
                <span class="md:mr-0">
                    <div class="i-bi:x-lg text-white w-3 h-3" />
                </span>
            </a>
        </div>
    </div>
    <!-- End Header -->

    <TransitionOther>
        <slot />
    </TransitionOther>
    
    <div class="flex flex-row justify-between items-center w-full h-auto fixed py-4 px-4 md:px-12 insex-x-0 bottom-0 z-[100]">
        <div class="flex flex-row w-auto h-auto z-[100]">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://musclefirst.co.id" class="md:mr-3 p-2 rounded">
                <div class="i-bi:facebook text-white w-6 h-6" />
            </a>
            <a target="_blank" href="https://twitter.com/intent/tweet?text=Join+me+at+Musclefirst+Challenge+2022%21+Find+out+more+at+https%3A%2F%musclefirst.com+%MusclefirstChallenge" class="md:mr-3 p-2 rounded">
                <div class="i-bi:twitter text-white w-6 h-6" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://musclefirst.com&title=Musclefirst+Challange+2022&summary=I%27m+attending+Musclefirst+Challenge+2022.+If+you%27re+interested%2C+why+not+check+it+out+here%3A+https%3A%2F%2Fmusclefirst.co.id%2Fchallenge" class="md:mr-3 p-2 rounded">
                <div class="i-bi:linkedin text-white w-6 h-6" />
            </a>
        </div>
        
        <div class="flex flex-col items-start space-x-1 w-auto h-auto z-[100]">
            <span class="text-sm text-white">
                <a href="." class="text-sm hover:underline text-yellow-600 font-bold">
                    <small class="uppercase">Musclefirst™</small>
                </a>
                <small>© 2021</small>
            </span>
            <span class="text-xs text-white uppercase">
                <small>PT Unggulan Bugar Indonesia</small> 
                <small>All Rights Reserved.</small>
            </span>
        </div>
    </div>
</div>