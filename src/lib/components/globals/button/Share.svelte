<script lang="ts">
    import { v4 as uuid } from '@lukeed/uuid';
    import { fade } from 'svelte/transition';
	  import { share, canWebShare } from '$utils/webshare';
    let currentPosition: number;
    export let productName: string;
    export let classes: string = '';
    
	  const isBrowser = typeof window !== 'undefined';
</script>

<svelte:window bind:scrollY={currentPosition} />

{#if currentPosition > 80}
  {#if isBrowser && canWebShare()}
    <div 
    on:click={() => {
      let loc = new URL(window.location.href);
      loc.hash = uuid();
      share(`Musclefirst ${productName}`, loc.toString());
    }}
    class="fixed {classes} rounded-full mr-3 p-4 w-auto h-auto flex justify-center items-center z-[100] bg-zinc-900 hover:bg-zinc-800" transition:fade={{ duration: 100 }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 text-white bi bi-share-fill" viewBox="0 0 16 16">
        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
      </svg>
    </div>
  {/if}
{/if}
  