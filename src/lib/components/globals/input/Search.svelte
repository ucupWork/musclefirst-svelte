<script lang="ts">
	import { searchTerm } from '$stores';
	export let val: string = '';
	
	$: searchTerm.set(val);
</script>

<div  class="flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full">
    <div class="w-full h-auto relative">
        <input bind:value={val} on:input type="text" class="w-full py-3 pr-10 pl-4 text-sm text-zinc-700 bg-transparent border-b border-zinc-500 rounded-full dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring" placeholder={'Ketik Produk Disini'}>
        
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="w-5 h-5 text-amber-500 dark:text-white" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>
    </div>
</div>