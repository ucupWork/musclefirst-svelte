<script context="module" lang="ts">
  import { dev } from '$app/env'
  import type { ErrorLoadParams, ErrorLoadResult } from '$typings/interfaces/global';
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }: ErrorLoadParams): ErrorLoadResult {
    return {
      props: {
        status,
        error: error.message,
      }
    };
  }
  export const prerender = false;
</script>

<script lang="ts">
  import { SEO } from '$general/index';
  import { websiteSchema } from '$utils/json-ld';
  import LogoWhite from '$images/site/logo-white.webp'
  import '$styles/css/app.css';
  

  // CDN Set to Digita Ocean Space
  let cdn: boolean = true;
  export let status: number;
  export let error: Error;
</script>

<SEO title={`${status}`} noindex={true} description={`Error: ${status}`} schemas={[websiteSchema]} canonical="/" />

<svelte:head>
  <!-- <meta http-equiv="refresh" content="5;https://musclefirst.net/" /> -->
</svelte:head>

<main class="flex justify-center items-center error-page w-full h-screen md:h-screen bg-[#151515]" id="error-page">
  <div class="flex w-full h-auto justify-center items-center">
    <div class="flex flex-col wrapper-choose w-auto h-auto">
      <picture>
        <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp` : LogoWhite} type="image/webp"/>
        <img 
            width="647px"
            height="504px"
            src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/site/logo-white.webp` : LogoWhite}
            class="w-12 h-auto"
            alt="AboutImage"/>
    </picture>
    <h1 class="title text-white text-6xl md:text-8xl font-black">
      {#if status === 404}
        <span>Error: {status}</span>
      {:else}
        <span class="uppercase">Page not found</span>
      {/if}
    </h1>
      <p class="text-thin art text-rose-600 text-md font-medium">
        {#if error}
          Error Message
        {:else}
          Requested page wasn't found
        {/if}
      </p>
      <p class="text-thin art text-white text-xs font-light">You will be redirected to main site in 10 seconds</p>
      <a href="/" class="w-auto h-auto py-2 px-4 border hover:bg-zinc-900 flex justify-between items-center mt-4">
        <span class="font-bold text-white">Back to Home</span>
        <div class="i-ph:caret-right text-white" />
      </a>
    </div>
  </div>
</main>

{#if dev && error?.stack}
  <h2>Stack Trace</h2>
  <pre class="text-white text-md uppercase">Error Stack</pre>
{/if}