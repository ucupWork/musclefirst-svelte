<script lang="ts">
	import type { CardProduct } from '$typings/home/card-product.type';
    import { ImageResponsive } from '$shared/image/index';

	export let cardProductList: CardProduct[];
    export let codeProduct: string;
    export let width: number;
    export let height: number;

    import LabdoorCertified from '$images/certified/svg/labdoor-logo-2022.svg';
</script>

{#each cardProductList.filter(product => product.code === codeProduct) as list (list.id)}
<div class="flex flex-col md:flex-row md:p-4 w-full h-auto justify-center items-center bg-transparent md:rounded-xl shadow hover:shadow-lg">
    <div class="grid grid-cols-2 gap-0 w-full md:w-auto h-auto md:rounded-xl border border-yellow-200">
        <div class="col-span-full md:col-span-1 w-full h-full relative">
            {#if list.labdoor}
            <div class="absolute left-4 top-2 flex md:hidden w-auto h-auto z-10">
                <div class="w-auto h-auto p-1 shadow-md rounded-full border bg-zinc-100">
                    <img class="w-10 h-auto" src={LabdoorCertified} alt="Labdoor Certified">
                </div>
            </div>
            {/if}

            <picture>
                <source srcset={list.imgUrl} type="image/webp"/>
                <ImageResponsive 
                    srcsetActive={false}
                    width={width}
                    height={height} 
                    breakpoints={[820, 414, 375]}
                    src={list.imgUrl}
                    classes="drop-shadow-xl w-full md:w-72 h-auto md:h-72 overflow-hidden rounded-xl bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"
                    alt={list.imgAlt}
                    style="margin: 0px"
                />
            </picture>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-full flex flex-col justify-center items-start bg-white hover:bg-zinc-50 md:rounded-r-xl py-4 md:py-0">
            <div class="flex flex-col w-auto h-auto py-0 px-8 bg-transparent mb-2 leading-none tracking-tighter">
                <h2 class="font-bold uppercase text-md text-zinc-600">{list.type}</h2>
                <a  href={`/${list.linkHref}`} 
                    class="font-black uppercase text-xl text-black tracking-wide">
                    {list.name}
                </a>
            </div>
            {#if list.composition}
            <div class="flex flex-col w-full h-auto px-8">
                <div class="flex flex-col space-y-1 w-full h-auto mt-2">
                    {#each list.composition as val}
                    <div class="flex justify-between items-center w-full h-auto">
                        <span class="text-sm font-normal text-zinc-900">{val.composName}</span>
                        <span class="w-auto h-auto">
                            <div class="i-ph:caret-right text-black" />
                        </span>
                    </div>
                    {/each}
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>
{/each}