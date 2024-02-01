<script lang="ts">
    import { fade } from "svelte/transition";
    import { openModalCS, openmenuproduct } from '$stores/index';
    import { clickOutside } from '$utils/click-outside';
    // Review Screen
    import {
        BcaaProperty,
        CaseinProperty,
        CreatineProperty,
        GainerProperty,
        IsolateProperty,
        NrgyProperty,
        WheyProperty,
        CollafitProperty
    } from '$shared/review-screen/index';
    
	let currentComponent = IsolateProperty;

    function clickOutsideHandler() {
        openmenuproduct.set(false);
    }
</script>

{#if $openmenuproduct}
<div use:clickOutside={clickOutsideHandler}
    class="absolute left-0 top-48 pt-6 w-full h-auto z-40 hidden md:block shadow-xl" transition:fade>
    <div class="flex flex-col w-full h-auto p-4 rounded-b bg-zinc-300 z-10">
        <div class="grid grid-cols-12 gap-4 w-full h-full border-t border-zinc-600">
            <div class="col-span-full md:col-span-8 flex flex-col space-y-4 justify-start items-start py-6 md:py-12">
                <div class="flex justify-between items-center w-full h-auto p-0 px-12">
                    <h2 class="font-blackttnorms font-black text-xl text-black py-2 uppercase">
                        <span class="text-amber-600">Choose</span> Your Goals
                    </h2>
                    <button on:click={() => { clickOutsideHandler(), ($openModalCS = `contact-support`) }} class="flex items-center space-x-2 text-sm py-2 px-4 bg-zinc-900 text-white rounded-full">
                        <span class="font-ttnorms font-bold text-white text-xs uppercase tracking-widest">
                            <small>{'Contact Support'}</small>
                        </span>
                    </button>
                </div>
                <div class="w-full h-auto p-0 px-12">
                    <div class="grid grid-cols-4 gap-4 w-full h-auto">
                        <div class="col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t  border-zinc-900">
                            <span class="font-blackttnorms uppercase text-sm text-zinc-900 py-2">{'Bentuk Masa Otot'}</span>
                            <ul>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == GainerProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = GainerProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-gainer'}>Pro Gainer</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == IsolateProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = IsolateProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-isolate'}>Pro Isolate</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == CreatineProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = CreatineProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-creatine'}>Pro Creatine</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == CaseinProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = CaseinProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-casein'}>Pro Casein</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t  border-zinc-900">
                            <span class="font-blackttnorms uppercase text-sm text-zinc-900 py-2">{'Turunkan Berat Badan'}</span>
                            <ul>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == WheyProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = WheyProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-whey'}>Pro Whey</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == IsolateProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = IsolateProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-isolate'}>Pro Isolate</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == BcaaProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = BcaaProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-bcaa'}>Pro BCAA</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == CaseinProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = CaseinProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-casein'}>Pro Casein</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t  border-zinc-900">
                            <span class="font-blackttnorms uppercase text-sm text-zinc-900 py-2">{'Tingkatkan Stamina'}</span>
                            <ul>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == CreatineProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = CreatineProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-creatine'}>Pro Creatine</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == NrgyProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = NrgyProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-nrgy'}>Pro Nrgy</a>
                                    </button>
                                </li>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == IsolateProperty ? 'font-bold text-amber-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = IsolateProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-isolate'}>Pro Isolate</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-1 flex flex-col w-auto h-auto px-2 py-2 border-t  border-zinc-900">
                            <span class="font-blackttnorms uppercase text-sm text-zinc-900 py-2">{'Shape & Glow'}</span>
                            <ul>
                                <li class="text-black">
                                    <button on:click={() => { clickOutsideHandler() }} class="{currentComponent == CollafitProperty ? 'font-bold text-pink-600' : 'font-normal'}" on:mouseenter={() => { currentComponent = CollafitProperty; }}>
                                        <a rel="noreferrer" target="_blank" href={'/products/pro-collafit'}>Pro Collafit</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto p-0 px-12">
                    <div class="grid grid-cols-4 gap-4 w-full h-auto mt-4">
                        <div class="col-span-full justify-center items-center w-full h-auto">
                            <div class="grid grid-cols-3 gap-4 w-full h-auto mt-4">
                                <a on:click={() => { clickOutsideHandler() }} href={'/catalog-product'} class="w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5">
                                    <span class="font-ttnorms font-bold text-white text-xs uppercase tracking-widest">
                                        {'E-Katalog'}
                                    </span>
                                    <div class="i-ph:caret-right text-white" />
                                </a>
                                <a on:click={() => { clickOutsideHandler() }} href={'/discount'} class="w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5">
                                    <span class="font-ttnorms font-bold text-white text-xs uppercase tracking-widest">
                                        {'Diskon'}
                                    </span>
                                    <div class="i-ph:caret-right text-white" />
                                </a>
                                <a on:click={() => { clickOutsideHandler() }} href={'/products'} class="w-full h-auto flex justify-between items-start rounded-full bg-amber-900 px-4 py-1.5">
                                    <span class="font-ttnorms font-bold text-white text-xs uppercase tracking-widest">
                                        {'Semua Produk'}
                                    </span>
                                    <div class="i-ph:caret-right text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-4 flex justify-center items-center bg-zinc-300">
                <div class="flex justify-center items-center w-full h-full bg-zinc-300">
                    {#if currentComponent}
                        <svelte:component this={currentComponent} />
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
{/if}