<script lang="ts">
  import { fade } from 'svelte/transition';
  let currentPosition: number;
  export let classes: string = '';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<svelte:window bind:scrollY={currentPosition} />

{#if currentPosition > 50}
<button on:click={scrollToTop} transition:fade={{ duration: 100 }} class="fixed {classes} rounded-xl md:rounded-full mr-3 p-4 w-auto h-auto flex justify-center items-center z-[100] bg-gradient-to-t from-black to-zinc-900 hover:bg-zinc-800">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 text-white bi bi-chevron-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
  </svg>
</button>
{/if}
