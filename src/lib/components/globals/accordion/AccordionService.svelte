<script lang="ts">
    import { slide } from 'svelte/transition';
    
    export let open: boolean;
    export let gridCount: number;
</script>

{#if open}
<div class="w-full h-auto p-4 bg-black dark:bg-zinc-900 py-4 md:py-8 grid-{gridCount}" transition:slide>
	<slot name="details"></slot>
</div>
{/if}