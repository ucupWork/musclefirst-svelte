<script lang="ts">
    import CrownImage from '$images/global/crown.png';
    import LogoWhite from '$images/site/logo-white.webp';

    export let agentDomisili: string;
    export let pilihButton: number;
    export let banner: string;
    export let txtMainText: string;
    export let classTxtMainText: string;
    export let classTxtBtnOrder: string;
    export let txtPembelian: string;
    export let classTxtPembelian: string;
    export let persenPotongan: string;
    export let bannerBawah: string;
    export let waLink: string;
    export let orderBtnText: string;
    export let discountTag: boolean;
    export let labelTxtPembelian: boolean;
    export let hashtagText: string;
    export let crownPin: boolean;
</script>

<section class="w-full h-auto md:h-screen overflow-hidden relative">
    <div class="grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900 relative" style="background-image: url({banner});">
        <!-- <div class="absolute top-0 left-0 w-auto h-auto bg-black">
            <div class="w-72 h-20 p-4"></div>
        </div> -->
        <div class="col-span-full w-full h-screen flex justify-center md:justify-start items-center md:items-center bg-transparent">
            <div class="flex flex-col justify-center items-center w-auto h-auto py-12 md:py-0 px-4 md:px-24 ml-0 md:ml-0 relative">
                <div class="flex flex-col md:flex-row w-full h-auto justify-center items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <div class="flex flex-col space-y-2 w-full h-auto">
                        <div class="flex flex-col w-full h-auto max-w-xl">
                            {#if crownPin}
                            <span class="font-bold uppercase text-yellow-800">
                                <img class="w-16 h-auto" src={CrownImage} alt="Musclefirst Crown">
                            </span>
                            {/if}

                            {#if hashtagText}
                            <span class="font-bold uppercase text-2xl text-[#f9bc00]">{hashtagText}</span>
                            {/if}
                            <div class="flex flex-col-reverse md:flex-col w-auto h-auto">
                                <div class="flex justify-between md:justify-start bg-transparent items-center p-0 md:p-4 w-full md:w-auto md:rounded-full h-auto py-1 md:py-4 px-2 md:px-4">
                                    <div class="flex w-12 h-12 bg-transparent rounded-full shadow-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="m-auto text-blue-500 w-8 h-8 icon icon-tabler icon-tabler-discount-check-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <span class="font-bold text-white text-md">Verified</span>
                                </div>
                                <div class="flex flex-col md:flex-row items-center w-auto h-auto border-b border-white">
                                    <picture>
                                        <source srcset={LogoWhite} type="image/webp"/>
                                        <img 
                                            width="647px"
                                            height="504px"
                                            src={LogoWhite}
                                            class="w-40 md:w-40 h-auto"
                                            alt="AboutImage"/>
                                    </picture>
                                    <div class="flex flex-col items-center w-auto h-auto ml-4 py-4 border-white">
                                        <span class="font-bankghotic font-bold text-4xl md:text-5xl uppercase text-zinc-100">
                                            Musclefirst
                                        </span>
                                        <div class="flex flex-col md:flex-row md:space-x-4 text-center md:text-left w-auto h-auto">
                                            <span class="text-white uppercase text-2xl font-black">Distributor</span>
                                            <span class="text-white uppercase text-2xl font-normal">{agentDomisili}</span>
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                            {#if labelTxtPembelian}
                            <h2 class="{ classTxtPembelian } text-xl md:text-2xl leading-none border border-amber-500 p-2">
                                <span class="block uppercase">{txtPembelian}</span> 
                            </h2>
                            {/if}
                        </div>
                    </div>
                    
                    {#if discountTag}
                    <div class="flex justify-center items-center space-x-2 w-auto h-auto rounded-xl p-4 bg-gradient-to-r from-yellow-200 to-amber-500 shadow-lg shadow-orange-500/50">
                        <span class="font-black text-6xl md:text-8xl text-white">{persenPotongan}</span>
                        <div class="flex flex-col w-auto h-auto">
                            <span class="font-black text-2xl md:text-4xl text-white">%</span>
                            <span class="font-black text-2xl md:text-4xl text-white">OFF</span>
                        </div>
                    </div>
                    {/if}
                </div>
                <div class="hidden md:flex flex-col md:space-y-4 w-full {pilihButton == 1 ? 'max-w-xl' : 'max-w-2xl'} pt-8 md:pt-16">
                    <a rel="noreferrer" href={waLink} target="_blank" class="cursor-pointer flex justify-center items-center w-auto h-auto py-4 px-8 bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl mt-4 md:mt-8">
                        <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto">
                            <span class="uppercase font-black {classTxtBtnOrder} text-2xl">{orderBtnText}</span>
                            <span class="w-auto h-auto">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 w-full p-2 h-auto md:h-8 bg-black hidden md:flex justify-start items-center md:px-24 shadow">
        <span class="uppercase font-thin text-white text-sm"> {@html bannerBawah} 
            {#if discountTag}
                / {agentDomisili} <span class="font-bold text-zinc-800">DISCOUNT {persenPotongan}%</span> LIMITED TIME. 
            {/if}
        </span>
    </div>
    <!-- Mobile Menu -->
    <div class="absolute inset-x-0 bottom-0 w-full h-auto">
        <div class="grid md:hidden grid-cols-2 gap-0 w-full">
            <a rel="noreferrer" href={waLink} target="_blank" class="col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-zinc-900 shadow-lg shadow-zinc-500/50 mt-4 md:mt-8">
                <div class="w-full h-auto rounded-full bg-gradient-to-r from-emerald-600 to-green-500">
                    <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8">
                        <span class="uppercase font-black text-white text-lg">{orderBtnText}</span>
                        <span class="w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</section>