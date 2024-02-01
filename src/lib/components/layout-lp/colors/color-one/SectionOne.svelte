<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    import CrownImage from '$images/global/crown.png';

    export let productName: string;
    export let pilihButton: number;
    export let banner: string;
    export let txtPenawaran: string;
    export let classTxtPenawaran: string;
    export let classTxtBtnOrder: string;
    export let txtPembelian: string;
    export let classTxtPembelian: string;
    export let hargaAwal: string;
    export let hargaAkhir: string;
    export let persenPotongan: string;
    export let bannerBawah: string;
    export let waLink: string;
    export let shopeeLink: string;
    export let orderBtnText: string;
    export let discountTag: boolean;
    export let disablePriceJumbotron: boolean;
    export let labelTxtPembelian: boolean;
    export let hashtagText: string;
    export let crownPin: boolean;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="w-full h-auto md:h-screen overflow-hidden relative">
    <div class="grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900" style="background-image: url({banner});">
        <div class="col-span-full w-full h-screen flex justify-center md:justify-start items-center md:items-center bg-transparent">
            <div class="flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-24 relative">
                <div class="flex flex-col md:flex-row w-full h-auto justify-center items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <div class="flex flex-col space-y-2 w-full h-auto">
                        <div class="flex flex-col w-full h-auto max-w-xl">
                            {#if crownPin}
                            <span class="font-bold uppercase text-rose-800">
                                <img class="w-16 h-auto" src={CrownImage} alt="Musclefirst Crown">
                            </span>
                            {/if}

                            {#if hashtagText}
                            <span class="font-bold uppercase text-2xl text-pink-400">{hashtagText}</span>
                            {/if}
                            <span class="uppercase font-extrabold { classTxtPenawaran } text-5xl md:text-6xl leading-none tracking-tight">{txtPenawaran}</span>
                            {#if labelTxtPembelian}
                            <h2 class="{ classTxtPembelian } text-xl md:text-2xl leading-none border border-pink-500 p-2">
                                <span class="block uppercase">{txtPembelian}</span> 
                            </h2>
                            {/if}
                        </div>
                        {#if disablePriceJumbotron}
                        <div class="flex flex-row w-auto h-auto justify-center items-center space-y-2 md:space-y-0 space-x-2 md:space-x-2">
                            <span class="leading-none font-black text-xl md:text-4xl text-rose-400 line-through tracking-tighter">{hargaAwal}</span>
                            <span class="leading-none font-extrabold text-4xl md:text-6xl text-pink-500 tracking-tighter">{hargaAkhir}</span>
                        </div>
                        {/if}
                    </div>
                    
                    {#if discountTag}
                    <div class="flex justify-center items-center space-x-2 w-auto h-auto rounded-xl p-4 bg-gradient-to-r from-rose-200 to-pink-500 shadow-lg shadow-rose-400/50">
                        <span class="font-black text-6xl md:text-8xl text-white">{persenPotongan}</span>
                        <div class="flex flex-col w-auto h-auto">
                            <span class="font-black text-2xl md:text-4xl text-white">%</span>
                            <span class="font-black text-2xl md:text-4xl text-white">OFF</span>
                        </div>
                    </div>
                    {/if}
                </div>
                <div class="hidden md:flex flex-col md:flex-row md:space-x-4 w-full {pilihButton == 1 ? 'max-w-xl' : 'max-w-2xl'}">
                    {#if pilihButton == 1}
                    <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8">
                        <div class="w-auto h-auto mr-4">
                            <span class="text-xl uppercase font-black text-white">{orderBtnText}</span>
                        </div>
                        <div class="flex flex-row justify-center items-center space-x-4 w-auto h-auto">
                            <span class="w-auto">
                                <div class="i-ph:caret-right text-white" />
                            </span>
                        </div>
                    </button>
                    {:else if pilihButton == 2}
                    <a rel="noreferrer" href={waLink} target="_blank" class="cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8">
                        <div class="w-auto h-auto mr-4">
                            <span class="w-auto h-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 md:w-12 h-8 bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                            </span>
                        </div>
                        <div class="flex flex-row justify-center items-center space-x-4 w-auto h-auto">
                            <span class="uppercase font-black text-white">Order Via <br> Whatsapp</span>
                            <span class="w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                        </div>
                    </a>
                    
                    <a rel="noreferrer" href={shopeeLink} target="_blank" class="cursor-pointer flex justify-between items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8">
                        <div class="w-auto h-auto mr-4">
                            <span class="w-auto h-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                class="w-8 md:w-12 h-8 md:h-12 fill-current text-white"
                                width="16" height="16"
                                viewBox="0 0 50 50"
                                style=" fill:#undefined;"><path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"></path></svg>
                            </span>
                        </div>
                        <div class="flex flex-row justify-center items-center space-x-4 w-auto h-auto">
                            <span class="uppercase font-black text-white">Order Via <br> Shopee</span>
                            <span class="w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                        </div>
                    </a>
                    {:else}
                    <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex justify-center items-center w-auto h-auto py-4 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8 rounded-full">
                        <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto">
                            <span class="uppercase font-black {classTxtBtnOrder} text-2xl">{orderBtnText}</span>
                            <span class="w-auto h-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="{classTxtBtnOrder} w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                        </div>
                    </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 w-full p-2 h-auto md:h-8 bg-pink-500 hidden md:flex justify-start items-center md:px-24 shadow">
        <span class="uppercase font-thin text-white text-sm"> {@html bannerBawah} 
            {#if discountTag}
                / {productName} <span class="font-bold text-zinc-800">DISCOUNT {persenPotongan}%</span> LIMITED TIME. 
            {/if}
        </span>
    </div>
    <!-- Mobile Menu -->
    <div class="absolute inset-x-0 bottom-0 w-full h-auto">
        <div class="grid md:hidden grid-cols-2 gap-0 w-full">
            <button on:click={() => scrollTo('#musclefirst-education')} class="col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-pink-500 to-rose-300 shadow-lg shadow-rose-400/50 mt-4 md:mt-8">
                <div class="w-full h-auto rounded-full bg-gradient-to-r from-pink-600 to-rose-500">
                    <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8">
                        <span class="uppercase font-black text-white text-lg">{orderBtnText}</span>
                        <span class="w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </button>
        </div>
    </div>
</section>