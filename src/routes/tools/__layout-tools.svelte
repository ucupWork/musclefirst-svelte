<script lang="ts">
    import { onMount } from 'svelte';
	import { state } from '$stores/index';
    import { Loading } from '$general/index';
    import { Transition } from '$general/index';
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

{#if $state.loading}
<Loading/>
{/if}

<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-[#151515]">
    <Transition transition={{ type: 'fade', duration: 250 }}>
        <slot />
    </Transition>
</div>