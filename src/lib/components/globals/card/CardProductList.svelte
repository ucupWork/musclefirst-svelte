<script lang="ts">
	import type { Product } from '$typings/shop/shop.type';
    import { ImageResponsive } from "$shared/image";
    import { openModal } from '$stores/index';

	export let cardProductList: Product[];
    export let typeProduct: string;
    export let width: number;
    export let height: number;
    export let breakpoints: number[];

    import LabdoorCertified from '$images/certified/optimize/logo-label-06.webp';
</script>

{#each cardProductList.filter(product => product.category === typeProduct) as list (list.id)}
<div id={list.id} class="col-span-full md:col-span-1 flex flex-col md:flex-row md:p-4 w-full h-auto justify-center items-center bg-transparent md:rounded shadow hover:shadow-lg">
    <div class="flex flex-col w-full h-auto items-center">
        <a href={`/${list.linkHref}`} class="grid grid-cols-2 gap-0 w-full md:w-auto h-auto md:rounded-xl border border-yellow-200">
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
                        src={list.imgUrl}
                        width={width}
                        height={height}
                        breakpoints={breakpoints}
                        srcsetActive={false}
                        classes="drop-shadow-xl w-full md:w-96 h-auto overflow-hidden bg-black transition-shadow duration-300 ease-in-out flex items-center justify-center"
                        alt={list.imgAlt}
                        style="margin: 0px"
                    />
                </picture>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-full flex flex-col justify-center items-start bg-white hover:bg-zinc-50 md:rounded-r-xl py-4 md:py-0 relative">
                {#if list.labdoor}
                <div class="absolute right-4 top-2 hidden md:flex w-auto h-auto z-10">
                    <div class="w-auto h-auto p-1 shadow-md rounded-full border bg-zinc-100">
                        <img class="w-10 h-auto" src={LabdoorCertified} alt="Labdoor Certified">
                    </div>
                </div>
                {/if}

                <div class="flex flex-col w-auto h-auto py-0 px-8 bg-transparent mb-2 leading-none tracking-tighter">
                    <h2 class="font-bold uppercase text-md text-zinc-600">{list.typeProduct}</h2>
                    <h2 class="font-black uppercase text-xl text-black tracking-wide">{list.name}</h2>
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

                <div class="absolute inset-x-0 bottom-2 hidden md:flex justify-center items-center w-full h-auto px-4">
                    <small class="font-thin font-bankghotic uppercase leading-relaxed tracking-widest text-yellow-400">Musclefirst</small>
                </div>
            </div>
        </a>
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-full md:py-4 px-2 md:px-8 md:pl-4">
            <button on:click={() => ($openModal = `${list.code}`)} class="{list.code} md:rounded-lg flex flex-row md:flex-col justify-between md:justify-center items-center px-8 md:px-0 w-full md:w-16 h-16 md:h-20 bg-black hover:bg-zinc-900 shadow">
                <span class="font-black text-xs uppercase md:hidden text-white">Barcode Scan</span>
                <span class="font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-8 w-8 text-zinc-100 bi bi-qr-code" viewBox="0 0 16 16">
                        <path d="M2 2h2v2H2z"/>
                        <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
                        <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
                        <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
                        <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
                    </svg>
                </span>
                <span class="font-thin text-xs uppercase hidden md:block text-white">
                    <small>Scan</small>
                </span>
            </button>

            {#if list.size}
            <div class="flex flex-row space-x-2 md:space-x-2 w-auto h-auto px-2 mt-4 pb-4 md:pb-0">
                {#each list.size as val}
                <div class="flex justify-center items-center w-auto h-auto px-2 md:px-4 py-2 rounded bg-zinc-900">
                    <span class="uppercase font-bold text-xs text-zinc-100">{val.sizeNumber} {val.sizeType}</span>
                </div>
                {/each}
            </div>
            {/if}
        </div>
    </div>
</div>
{/each}
