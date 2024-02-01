<script lang="ts">
    import { onMount } from 'svelte';
	import { state } from '$stores/index';
    import { Loading } from '$general/index';
    import { Transition } from '$general/index';
    import { TopTop } from '$globals/button/index';
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
<!-- TopTop -->
<TopTop classes="right-2 bottom-24 md:bottom-24" />
<div class="relative flex flex-col justify-center items-center w-full h-auto overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-bg-transparent bg-[#151515]">
    <!-- Header -->
    <div class="fixed right-4 md:right-12 top-4 md:top-8 z-[100]">
        <a href={'/'} class="flex justify-between items-center w-auto h-auto px-4 md:px-4 py-4 rounded-full bg-zinc-900 shadow shadow-zinc-500/50 border">
            <span class="md:mr-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-3 h-3 bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </span>
        </a>
    </div>
    <!-- End Header -->

    <Transition transition={{ type: 'fade', duration: 250 }}>
        <slot />
    </Transition>
</div>