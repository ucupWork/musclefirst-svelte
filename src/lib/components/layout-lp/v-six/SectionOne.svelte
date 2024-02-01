<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let banner: string;
    export let txtPenawaran: string;
    export let classTxtPenawaran: string;
    export let txtSubPenawaran: string;
    export let classtxtSubPenawaran: string;
    export let orderBtnText: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="w-full h-auto md:h-screen overflow-hidden relative">
    <div class="grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-screen relative bg-left md:bg-center bg-no-repeat bg-cover bg-zinc-900" style="background-image: url({banner});">
        <div class="col-span-full w-full h-screen flex justify-start items-center bg-transparent">
            <div class="flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-24 relative">
                <div class="flex flex-col md:flex-row w-full h-auto justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <div class="flex flex-col justify-start items-start space-y-2 w-full h-auto md:mt-0">
                        <div class="flex flex-col space-y-4 w-full h-auto max-w-xl md:max-w-xl text-start bg-black/50 md:bg-transparent rounded p-8 md:p-0">
                            <!-- <span class="font-black uppercase text-yellow-200 font-bankghotic">Musclefirst</span> -->
                            <h1 id="header-text" class="uppercase font-extrabold font-benmojinhei text-transparent bg-clip-text bg-gradient-to-br from-[#c18f48] to-[#e7c17a] text-2xl md:text-4xl { classTxtPenawaran } leading-none tracking-tight">
                                {txtPenawaran}
                            </h1>

                            <h2 class="text-gradient font-display font-benmojinhei { classtxtSubPenawaran } text-white text-2xl md:text-4xl leading-none p-2">
                                <span class="block uppercase">{txtSubPenawaran}</span> 
                            </h2>
                        </div>
                    </div>
                </div>

                {#if orderBtnText}
                <div class="hidden md:flex flex-col md:flex-row justify-center items-center w-full">
                    <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex justify-center items-center w-full max-w-xs md:max-w-2xl h-auto py-2 px-8 bg-gradient-to-r from-[#c18f48] to-[#e7c17a] shadow-lg shadow-orange-500/50 border-4 border-yellow-900 mt-4 md:mt-8 rounded-full">
                        <div class="w-auto h-auto mr-4">
                            <span class="text-2xl uppercase font-black text-zinc-900">{orderBtnText}</span>
                        </div>
                    </button>
                </div>
                {/if}
            </div>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div class="absolute inset-x-0 bottom-0 w-full h-auto">
        <div class="grid md:hidden grid-cols-2 gap-0 w-full">
            
            <button on:click={() => scrollTo('#get-product')} class="col-span-full cursor-pointer flex justify-center items-center w-full md:max-w-2xl h-auto py-8 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8">
                <div class="w-full h-auto rounded-full bg-gradient-to-r from-amber-600 to-yellow-500">
                    <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto p-4 px-8">
                        <span class="uppercase font-black text-white text-lg">{orderBtnText}</span>
                        <span class="w-auto">
                            <!-- <ChevronRight class="text-white w-4 h-4" /> -->
                        </span>
                    </div>
                </div>
            </button>
        </div>
    </div>
</section>

<style>
    /* @font-face {
        font-family: 'AcrossTheStreet';
        font-style: normal;
        font-weight: 800;
        src: local('AcrossTheStreetRegular'), local('Across-The-Street'), url('/assets/fonts/across-the-street.otf') format('otf');
    }

    .header-text {
        font-family: AcrossTheStreet
    } */
</style>