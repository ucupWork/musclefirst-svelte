<script lang="ts">
    import { slide } from 'svelte/transition';
    const handleClick = () => open = !open;
    export let open = false;
</script>

<div class="w-full h-auto p-4 bg-white dark:bg-zinc-900 rounded">
    <div class="header w-full h-auto flex justify-between items-center">
        <div class="header-text w-auto h-auto">
            <slot name="header"></slot>
        </div>
        <button on:click={handleClick} class="w-auto h-auto p-2 rounded bg-white dark:bg-zinc-900">
            <div class="i-ph:caret-down h-3 w-3 text-zinc-900 dark:text-white" />
        </button>
    </div>
    
    {#if open}
	<div class="details w-full h-auto flex flex-col justify-center items-center" transition:slide>
		<slot name="details"></slot>
	</div>
	{/if}
</div>