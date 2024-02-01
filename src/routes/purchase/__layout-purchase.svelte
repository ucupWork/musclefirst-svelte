<script lang="ts">
	import { onMount } from 'svelte';
    import { SEO } from '$general/index';
	import { state } from '$stores/index';
    import { Loading, TransitionPage } from '$general/index';
    import { TopTop } from '$globals/button/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
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
    title="Purchase Complete" 
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
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <TransitionPage>
        <slot />
    </TransitionPage>
</div>