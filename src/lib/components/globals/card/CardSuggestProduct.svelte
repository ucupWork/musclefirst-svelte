<script lang="ts">
	import type { CardProduct } from '$typings/home/card-product.type';
    import { ImageResponsive } from '$shared/image/index';
	export let cardSuggestList: CardProduct[];
    export let width: number;
    export let height: number;
</script>

{#each cardSuggestList as list (list.id)}
<a target="_blank" href={`/${list.linkHref}`} class="col-span-full md:col-span-1 w-full h-auto">
    <div class="flex flex-row justify-center items-center w-full h-auto bg-zinc-100 hover:bg-white shadow-md border-r-8 border-zinc-900">
        <div class="w-full md:w-24 h-auto">
            <picture>
                <source srcset={list.imgUrl} type="image/webp"/>
                <ImageResponsive 
                    srcsetActive={false}
                    width={width}
                    height={height} 
                    breakpoints={[820, 414, 375]}
                    src={list.imgUrl}
                    classes="drop-shadow-xl w-full md:w-24 h-auto overflow-hidden bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"
                    alt={list.imgAlt}
                    style="margin: 0px"
                />
            </picture>
        </div>
        <div class="flex flex-col justify-start items-start w-full h-auto px-4">
            <h1 class="font-bold uppercase text-sm text-black mb-1">{list.name}</h1>
            {#if list.composition}
                <div class="flex flex-col md:flex-row md:space-x-1 w-full h-auto mt-0">
                {#each list.composition as val}
                <div class="flex justify-center items-center w-auto h-auto py-1 px-2 bg-white border shadow">
                    <span class="text-xs font-normal text-zinc-900">{val.composName}</span>
                </div>
                {/each}
                </div>
            {/if}
        </div>
    </div>
</a>
{/each}