<script lang="ts">
    export let productName: string;
    export let title: string;
	export let products: any = [];
    let filteredProduct = products.filter(product => product.name === productName);
    // console.log(filteredProduct[0])
</script>

{#if filteredProduct}
<section class="w-full h-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-gradient-to-r from-amber-500 to-orange-500 shadow border-b-4">
        <div class="flex w-full md:w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-center">
            <button type="button" class="flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6">
                <span class="uppercase block text-xl font-black text-white">{filteredProduct[0].name}</span> 
            </button>
        </div>
        <div class="flex flex-col w-auto h-auto">
            {#each filteredProduct as list}
            <div class="grid grid-cols-{list.size.length} gap-1 w-auto h-auto">
                {#each list.size as val}
                    <div class="col-span-1 flex flex-row justify-center items-center w-24 h-24 bg-black border">
                        <h2 class="text-2xl md:text-3xl font-black text-white leading-none text-left">
                            <span class="block uppercase text-white">{val.sizeName}</span> 
                        </h2>
                        <h2 class="text-2xl md:text-3xl font-black text-white leading-none text-left">
                            <span class="block uppercase text-white">{val.sizeType}</span> 
                        </h2>
                    </div>
                {/each}
            </div>
            {/each}
        </div>
    </div>
</section>
{/if}