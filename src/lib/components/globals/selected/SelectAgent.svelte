<script lang="ts">
	import { selectedRegion } from '$stores';
    export let regions = [];
	export let val: string = '';
	
	$: selectedRegion.set(val);
</script>
  
<div  class="flex flex-wrap items-start text-center justify-start pb-2 md:pb-0 w-full px-2 md:px-8">
    <div class="w-full h-auto relative">
        <select class="w-full py-4 pr-10 pl-4 text-md text-zinc-500 bg-transparent border-b border-zinc-500 dark:bg-black dark:text-zinc-300 dark:border-zinc-900 focus:border-zinc-500 dark:focus:border-zinc-500 focus:outline-none focus:ring" 
        name="menu" 
        id="menu" 
        bind:value={$selectedRegion}>
            <option disabled selected value="">{'Semua Wilayah'}</option>
            <option value="all">{'Pilih Wilayah'}</option>
            {#each regions as region}
                <option value={region}>{region}</option>
            {/each}
        </select>
    </div>
</div>