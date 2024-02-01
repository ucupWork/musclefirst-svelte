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
    import { Loading, TransitionPage } from '$general/index';
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

<FbPixelScript />
<HotjarScript />

{#if $state.loading}
<Loading/>
{/if}

<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-black">
    <TransitionPage>
        <slot />
    </TransitionPage>
    <div class="hidden md:grid grid-cols-3 gap-4 md:gap-2 w-full h-auto px-8 md:px-16 py-2 bg-black">
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center md:justify-start items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:instagram h-4 w-4 text-zinc-100" />
                <span class="text-sm font-bold text-white uppercase">Instagram | @musclefirst</span>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:facebook h-4 w-4 text-zinc-100" />
                <span class="text-sm font-bold text-white uppercase">Facebook Page | Musclefirst</span>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center md:justify-end items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:facebook h-4 w-4 text-zinc-100" />
                <span class="text-sm font-bold text-white uppercase">Facebook Group | Komunitas Musclefirst</span>
            </div>
        </div>
    </div>
</div>