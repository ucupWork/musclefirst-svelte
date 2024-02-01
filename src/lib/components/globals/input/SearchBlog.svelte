<script lang="ts">
	import { searchBlog } from '$stores';
	export let val: string = '';
	
	$: searchBlog.set(val);

    export const clearText = () => {
        searchBlog.set('');
        val = '';
    };
</script>

<div class="w-full h-auto relative">
    <input type="text" bind:value={val} on:input class="w-full py-3 pr-10 pl-6 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring" placeholder={'Cari Judul Disini'}>
    
    {#if val}
    <button on:click={() => clearText} type="button" class="absolute inset-y-0 right-2 flex items-center pr-3">
        <div class="i-ph:x text-red-500 w-5 h-5 mr-0" />
    </button>
    {:else}
    <button type="button" class="absolute inset-y-0 right-2 flex items-center pr-3">
        <div class="i-ph:magnifying-glass text-amber-500 w-5 h-5 mr-0" />
    </button>
    {/if}
</div>