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
        <div class="col-span-full w-full h-screen flex justify-center items-center bg-transparent">
            <div class="flex flex-col w-auto h-auto py-12 md:py-0 px-4 md:px-0 relative">
                <div class="flex flex-col md:flex-row w-full h-auto justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <div class="flex flex-col justify-center items-center space-y-2 w-auto h-auto md:mt-0">
                        <div class="flex flex-col space-y-4 w-auto h-auto max-w-xl md:max-w-4xl text-center bg-black/50 md:bg-transparent rounded p-8 md:p-0">
                            <span class="font-black uppercase text-yellow-200 font-bankghotic">Musclefirst</span>
                            <h1 id="header-text" class="uppercase font-extrabold font-blackttnorms text-white text-7xl md:text-8xl { classTxtPenawaran } leading-none tracking-tight">{txtPenawaran}</h1>

                            <h2 class="text-gradient font-display { classtxtSubPenawaran } text-white text-2xl md:text-7xl leading-none p-2">
                                <span class="block uppercase">{txtSubPenawaran}</span> 
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="hidden md:flex flex-col md:flex-row justify-center items-center w-full">
                    <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex justify-center items-center w-full max-w-xs md:max-w-2xl h-auto py-4 px-8 bg-gradient-to-r from-amber-200 to-yellow-200 shadow-lg shadow-orange-500/50 border-4 border-yellow-900 mt-4 md:mt-8 rounded-full">
                        <div class="w-auto h-auto mr-4">
                            <span class="text-2xl uppercase font-black text-amber-900">{orderBtnText}</span>
                        </div>
                    </button>
                </div>
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

<style>
    @font-face {
        font-family: 'AcrossTheStreet';
        font-style: normal;
        font-weight: 800;
        src: local('AcrossTheStreetRegular'), local('Across-The-Street'), url('/assets/fonts/across-the-street.otf') format('otf');
    }

    .header-text {
        font-family: AcrossTheStreet
    }
</style>