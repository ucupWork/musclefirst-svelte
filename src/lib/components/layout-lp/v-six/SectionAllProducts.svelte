<script lang="ts">
	export let products: any = [];
    // console.log(filteredProduct[0])
</script>

{#if products}
<section class="flex justify-center items-center w-full h-auto">
    <div class="flex flex-col md:flex-row justify-center items-center w-full h-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 overflow-x-auto py-8 md:py-4 px-4 md:px-0 bg-zinc-300 shadow border-b-4">
        {#each products as list}
        <div class="flex flex-row w-full md:w-auto h-auto">
            <a href={`https://musclefirst.co.id/${list.linkHref}`} target="_blank"  rel="noreferrer" class="flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-auto border py-2 px-4 md:px-8">
                <span class="uppercase block text-sm md:text-sm font-black text-white">{list.name}</span> 
            </a>
        </div>
        {/each}
    </div>
</section>
{/if}