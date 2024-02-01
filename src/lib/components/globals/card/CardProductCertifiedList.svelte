<script lang="ts">
	import type { CardProduct } from '$typings/home/card-product.type';
    import { ImageResponsive } from "$shared/image";
    import { openModal } from '$stores/index';

	export let cardProductList: CardProduct[];
    export let labdoor: boolean;
    export let width: number;
    export let height: number;
    export let breakpoints: number[];
</script>

{#each cardProductList.filter(product => product.labdoor === labdoor) as list (list.id)}
<div class="col-span-full flex flex-col md:flex-row md:p-4 w-full h-auto justify-center items-center bg-zinc-100 shadow hover:shadow-lg">
    <a href={`/${list.linkHref}`} class="grid grid-cols-2 gap-0 w-full h-auto border border-yellow-200">
        <div class="col-span-full md:col-span-1 flex justify-start w-full h-full bg-white relative">
            <div class="flex flex-col md:flex-row justify-center items-start space-x-4 md:space-x-8 w-auto h-auto">
                <div class="flex justify-center items-center w-full md:w-auto h-auto">
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

                <div class="flex flex-col justify-center items-start w-full md:w-1/2 h-full p-4">
                    <div class="rounded p-2 bg-white mb-1 shadow">
                        <img class="w-20 h-auto" src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/labdoor-logo-2022_wc9xem.svg'} alt="Labdoor Logo">
                    </div>
                    <div class="flex flex-col justify-center items-start -space-y-1 w-full md:w-auto h-auto mb-8">
                        <h1 class="text-2xl font-blackttnorms font-black uppercase text-zinc-900">{list.name}</h1>
                        <span class="text-sm font-bankghotic font-medium text-yellow-900 uppercase">Musclefirst</span>
                    </div>
                    <div class="flex flex-row justify-start md:justify-end items-end md:items-end space-x-2 w-full md:w-auto h-auto">
                        <div class="flex flex-col space-y-0 justify-center items-center">
                            <div class="w-4 h-16 bg-emerald-600 rounded"></div>
                            <span class="font-bold text-emerald-600">A</span>
                        </div>
                        <div class="flex flex-col space-y-0 justify-center items-center">
                            <div class="w-4 h-8 bg-zinc-300 rounded"></div>
                            <span class="font-bold text-zinc-300">B</span>
                        </div>
                        <div class="flex flex-col space-y-0 justify-center items-center">
                            <div class="w-4 h-8 bg-zinc-300 rounded"></div>
                            <span class="font-bold text-zinc-300">C</span>
                        </div>
                        <div class="flex flex-col space-y-0 justify-center items-center">
                            <div class="w-4 h-8 bg-zinc-300 rounded"></div>
                            <span class="font-bold text-zinc-300">D</span>
                        </div>
                        <div class="flex flex-col space-y-0 justify-center items-center">
                            <div class="w-4 h-8 bg-zinc-300 rounded"></div>
                            <span class="font-bold text-zinc-300">F</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-full flex flex-row justify-end md:space-x-12 items-center bg-white px-8 md:px-0 py-4 md:py-0 relative">
            <div class="flex flex-row md:flex-col space-y-1 justify-between md:justify-center items-center w-full md:w-auto">
                <span class="w-auto h-auto p-4 bg-emerald-600">
                    <h1 class="font-black text-xl md:text-7xl text-white">A</h1>
                </span>
                <div class="flex flex-row justify-center items-center space-x-2 md:space-x-2 md:space-y-1 w-auto md:w-40 h-auto md:h-auto p-2 md:p-2 rounded-none md:rounded-md border-2 border-emerald-600 bg-emerald-50 mb-2 leading-none tracking-tighter">
                    <h2 class="font-bold uppercase text-xl md:text-2xl text-emerald-600">{list.labdoorData[0].score}</h2>
                    <h2 class="font-normal text-xs md:text-md text-zinc-500">of {list.labdoorData[0].scoreTotal}</h2>
                </div>
            </div>
            {#if list.labdoor}
            <div class="hidden md:flex justify-center items-center w-auto h-auto md:h-full bg-zinc-200 px-4 relative">
                <div class="absolute inset-x-0 top-0 w-full h-auto text-center bg-black rounded-b p-2">
                    <span class="font-medium text-white text-sm uppercase">Labdoor Certified</span>
                </div>
                <div class="hidden md:flex w-auto h-auto relative">
                    <div class="w-auto h-auto shadow-md rounded-full border bg-zinc-100 p-2">
                        <img class="w-20 md:w-40 h-auto" src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/labdoor-logo-2022_wc9xem.svg'} alt="Labdoor Certified">
                    </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 flex flex-col w-full h-auto text-center bg-transparent rounded-b p-2">
                    <span class="font-bold text-zinc-900 text-xs uppercase">Lot: {list.labdoorData[0].lot}</span>
                    <span class="font-bold text-zinc-900 text-xs uppercase">Tested: {list.labdoorData[0].tested}</span>
                </div>
            </div>
            {/if}
        </div>
    </a>
    <div class="w-full md:w-auto h-full flex flex-col justify-between items-center md:py-4 md:pl-4">
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
    </div>
</div>
{/each}
