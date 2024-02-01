<script lang="ts">
    // import { productList } from "$contents/home-page/list-products";
    import { productList as productShopList } from '$contents/shop-page/list-products';
    import { CardProductHome } from "$globals/card/index";
    import LogoImage from '$images/site/logo-white.webp';

    export let typeAgent: boolean;
    export let urlAgentMainLogo: string;
    export let title: string;
    export let namaAgen: string;
    export let agentName: string;
    export let kontakAgen: string;
    export let kontakAgenName: string;
    export let descriptionAgen: string;
    export let btnText: string;
    
    export let tokopediaLink: string;
    export let shopeeLink: string;
    export let waLink: string;
    export let listPickAgen;
</script>

<section class="flex flex-col w-full h-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-zinc-900 shadow border-b-4 border-zinc-800">
        <div class="flex w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-left">
            <h2 class="text-2xl md:text-3xl font-black font-blackttnorms text-white leading-none text-left">
                <span class="block uppercase text-white">
                    {title}
                </span> 
            </h2>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-4 items-center w-full h-auto py-8 md:py-6 px-8 md:px-24 bg-black shadow border-b-4 border-yellow-200">
        <div class="col-span-full md:col-span-8 w-full h-auto px-0 md:px-0 py-4 md:py-8">
            <div class="order-last mb-6 space-y-6 md:mb-0 w-auto h-auto">
                {#if typeAgent}
                <div class="py-4 px-4 md:px-6 w-auto h-auto bg-transparent">
                    <span class="font-black text-xl text-amber-200">Exclusive</span>
                </div>
                {:else}
                <div class="py-4 px-4 md:px-6 w-auto h-auto bg-transparent">
                    <span class="font-black text-xl text-amber-200">Basic</span>
                </div>
                {/if}
                <div class="flex flex-col md:flex-row items-center w-full h-auto">
                    <div class="flex justify-center items-center w-full md:w-auto h-full bg-zinc-900 rounded-xl border border-yellow-200 mb-4 md:mb-0 p-4">
                        <img class="w-40 h-auto" src={LogoImage} alt="Agent Logo">
                    </div>
                    <div class="flex flex-col w-auto h-auto ml-4 md:ml-8">
                        <h1 class="font-black text-white text-4xl md:text-5xl uppercase">
                            {@html namaAgen}
                        </h1>
                        <address class="text-sm md:text-lg text-zinc-100">
                            {descriptionAgen}
                        </address>
                        
                        <div class="flex flex-col md:flex-row mt-4 md:mt-8">
                            <div
                                class="relative flex h-12 w-full items-center justify-center px-8 border"
                            >
                                <span class="relative text-base font-semibold text-white dark:text-dark"
                                >{kontakAgenName}</span
                                >
                            </div>
                            <a
                                rel="noreferrer" 
                                href={waLink} 
                                target="_blank" 
                                class="relative flex h-12 w-full items-center justify-center px-8 border"
                            >
                                <span
                                class="relative text-base font-semibold text-yellow-200"
                                >{kontakAgen}</span
                                >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-4 flex justify-end items-end w-full h-full px-0 md:px-0 py-4 md:py-8">
            <a rel="noreferrer" href={waLink} target="_blank" class="flex justify-between items-center leading-none text-center uppercase bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl w-full md:w-64 py-4 px-6 md:mb-4">
                <span class="block text-xl font-black text-emerald-900">{btnText}</span> 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </svg>
                </span>
            </a>
        </div>
    </div>
    <div class="flex flex-col w-full h-auto py-8 md:py-4 px-2 md:px-2">
    {#if listPickAgen}
        {#each listPickAgen as pick}
        <div class="grid grid-cols-12 gap-4 items-center w-full h-auto py-8 md:py-6 px-8 md:px-24 bg-black shadow border-b-4 border-zinc-800">
            <div class="col-span-full md:col-span-8 w-full h-auto px-0 md:px-0 py-4 md:py-8">
                <div class="order-last mb-6 space-y-6 md:mb-0 w-auto h-auto">
                    <div class="flex flex-col md:flex-row items-center w-full h-auto">
                        <div class="flex justify-center items-center w-full md:w-auto h-full bg-zinc-900 rounded-xl border mb-4 md:mb-0 p-4">
                            <img class="w-24 h-auto" src={LogoImage} alt="Musclefirst Logo">
                        </div>
                        <div class="flex flex-col w-auto h-auto ml-4 md:ml-8">
                            <h1 class="font-black text-white text-4xl md:text-4xl uppercase">
                                {pick.personName}
                            </h1>
                            <address class="text-sm md:text-lg text-zinc-100">
                                {pick.address ? pick.address : ''}
                            </address>
                            
                            <div class="flex flex-col md:flex-row mt-4 md:mt-8">
                                <div
                                    class="relative flex h-12 w-full items-center justify-center px-8 border"
                                >
                                    <span class="relative text-base font-semibold text-white dark:text-dark"
                                    >{pick.personName}</span
                                    >
                                </div>
                                <a
                                    rel="noreferrer" 
                                    href={`https://wa.me/${pick.waNumber}/?text=${pick.waChatText}`} 
                                    target="_blank" 
                                    class="relative flex h-12 w-full items-center justify-center px-8 border"
                                >
                                    <span
                                    class="relative text-base font-semibold text-yellow-500"
                                    >{pick.waNumber}</span
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-4 flex justify-end items-end w-full h-full px-0 md:px-0 py-4 md:py-8">
                <a rel="noreferrer" href={`https://wa.me/${pick.waNumber}/?text=${pick.waChatText}`} target="_blank" class="flex justify-between items-center leading-none text-center uppercase bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl w-full md:w-64 py-4 px-6 md:mb-4">
                    <span class="block text-xl font-black text-emerald-900">{btnText}</span> 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
        {/each}
    {/if}
    </div>
    <div class="flex flex-col w-full h-auto py-8 md:py-4 px-8 md:px-24">
        <div  class="grid grid-cols-4 gap-4 w-full h-full pb-0 px-0 md:px-0">
            {#each productShopList as val}
            <div class="col-span-2 md:col-span-1 flex flex-col snap-center w-full h-full rounded-xl shadow-xl">
                <div class="relative w-full h-full">
                    <a id={val.id} href={`/${val.linkHref}`}>
                    <img 
                        loading="lazy"
                        src={val.imgUrl}
                        width={450}
                        height={450}
                        alt={val.imgAlt}
                        style="margin: 0px"
                        class="shadow-lg rounded-t-xl {val.productVarian === 'white' ? 'shadow-white' : 'shadow-black'} mx-auto w-full h-full overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                    /></a>
                </div>
                <div class="flex flex-col w-full h-auto p-0 border {val.productVarian === 'white' ? 'border-zinc-50' : 'border-zinc-900'} rounded-b-xl">
                    <a id={val.id} href={`/${val.linkHref}`} class="flex justify-between items-center w-full h-auto py-4 px-4 {val.productVarian === 'white' ? 'bg-white shadow-white border-zinc-50' : 'bg-black shadow-black border-zinc-900'}">
                        <span class="text-xs uppercase font-black font-blackttnorms {val.productVarian === 'white' ? 'text-black' : 'text-white'}">
                            {val.name}
                        </span>
                    </a>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>