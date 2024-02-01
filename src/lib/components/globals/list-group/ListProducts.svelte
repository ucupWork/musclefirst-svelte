<script lang="ts">
    import { productList } from "$contents/home-page/list-products";
    import { CardNoResult } from '$globals/card';
	import { searchTerm } from '$stores';

	export let filteredProducts = [];
</script>

{#if $searchTerm && filteredProducts.length === 0}
<CardNoResult cardType="product" />		
{:else if $searchTerm && filteredProducts.length > 0}
<div class="absolute top-0 w-full max-w-xl h-auto pt-10 z-20">
    {#each filteredProducts as {name, linkHref, imgUrl, imgAlt}}
    <a class="w-full h-auto" href={`/${linkHref}`}>
        <div class="flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow">
            <div class="flex flex-row items-center w-auto h-auto">
                <img class="w-16 h-16" src={imgUrl} alt={imgAlt} />
                <div class="flex flex-col ml-8">
                    <span class="text-xs uppercase font-bold">
                        <small class="text-zinc-900">Musclefirst</small>
                    </span>
                    <span class="text-black uppercase text-sm font-bold">{name}</span>
                </div>
            </div>

            <div class="w-auto h-auto">
                <div class="i-ph:caret-right h-4 w-4 text-zinc-900" />
            </div>
        </div>
    </a>
    {/each}
</div>
{:else}
    {#if $searchTerm }
    <div class="absolute top-0 w-full max-w-xl h-auto pt-10 z-20">
        {#each productList as {name, linkHref, imgUrl, imgAlt}}
        <a class="w-full h-auto" href={`/${linkHref}`}>
            <div class="flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow">
                <div class="flex flex-row items-center w-auto h-auto">
                    <img class="w-16 h-16" src={imgUrl} alt={imgAlt} />
                    <div class="flex flex-col ml-8">
                        <span class="text-xs uppercase font-bold">
                            <small class="text-zinc-900">Musclefirst</small>
                        </span>
                        <span class="text-black uppercase text-sm font-bold">{name}</span>
                    </div>
                </div>

                <div class="w-auto h-auto">
                    <div class="i-ph:caret-right h-4 w-4 text-zinc-900" />
                </div>
            </div>
        </a>
        {/each}
    </div>
    {/if}
{/if}
