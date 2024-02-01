<script lang="ts">
    import { onMount } from 'svelte';
	import { state } from '$stores/index';
    import { Loading, TransitionPage } from '$general/index';
    import { FbPixelScript } from '$shared/fb-pixel/index';
    import { HotjarScript } from '$shared/hotjar-tracking/index';
    import { GoogleTMScript } from '$shared/google-tm/index';
	import { partytownSnippet } from '@builder.io/partytown/integration';
    import '$styles/css/app.css';

    // Add the Partytown script to the DOM head
    let scriptEl: { textContent: string; }
	let ready: boolean;
	let scroll: number;

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

<svelte:window bind:scrollY={scroll} />

<FbPixelScript />
<HotjarScript />
<GoogleTMScript />

{#if $state.loading}
<Loading/>
{/if}

<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-white">
    <TransitionPage>
        <slot />
    </TransitionPage>
</div>

<style lang="postcss">
</style>