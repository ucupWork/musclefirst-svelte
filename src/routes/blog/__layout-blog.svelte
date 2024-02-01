<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
    /** @type {import('@sveltejs/kit').ErrorLoad} */
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
	import { state } from '$stores/index';
    import { Loading, TransitionOther } from '$general/index';
    import { TopTop } from '$globals/button/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { GoogleTMScript } from '$shared/google-tm/index';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { HotjarScript } from '$shared/hotjar-tracking/index';
    import { partytownSnippet } from '@builder.io/partytown/integration';
    
    import { 
        HeaderBlog,
        Footer
    } from '$general/index';

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

<GoogleTMScript />
<FbPixelScript />
<HotjarScript />

<SEO 
    title="Blog" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

{#if $state.loading}
<Loading/>
{/if}
<!-- TopTop -->
<TopTop classes="left-4 bottom-6 md:bottom-8" />
<HeaderBlog classes="max-w-7xl md:px-16 m-0" />
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <TransitionOther>
        <slot />
    </TransitionOther>
</div>
<div class="flex justify-center w-full h-auto bg-[#0a0908] relative">
    <Footer classes="max-w-7xl m-0" />
</div>