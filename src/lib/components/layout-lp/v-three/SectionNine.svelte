<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let title: string;
    export let subtitle: string;
    export let btnText: string;
    export let imgLink: string;
    export let altImg: string;
    
    export let titlePriceHead: string;
    export let flavorDescription: string;
    export let priceDescription: string;
    export let priceBefore: string;
    export let priceAfter: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>
<section class="flex justify-center items-center w-full h-auto md:h-screen bg-white relative overflow-hidden">

    <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0">
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center">
            <div class="flex w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8">
                <div class="flex flex-col text-left w-auto h-auto">
                    <span class="text-rose-900 font-bold text-xl md:text-2xl">{subtitle}</span>
                    <h2 class="text-2xl md:text-4xl font-black text-gray-900 leading-none text-left">
                        {@html title}
                    </h2>
                </div>
            </div>
            <div class="flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center">
                <div class="flex w-full h-auto justify-center items-center">
                    <img src={imgLink} class="w-10/12 h-auto" alt={altImg} />
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-end items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-16 py-4 md:py-8 text-left">
                <h2 class="text-2xl md:text-4xl font-black text-gray-900 leading-none text-left max-w-sm mb-4">
                    <span class="block">{titlePriceHead}</span> 
                </h2>
                <h3 class="text-gray-900 font-base text-xl md:text-2xl">{flavorDescription}</h3>
                <h3 class="text-gray-900 font-base text-xl md:text-2xl">{priceDescription}</h3>
                <h2 class="text-gray-900 font-bold text-2xl md:text-4xl line-through">{priceBefore}</h2>
                <h1 class="text-rose-900 font-black text-3xl md:text-6xl">{priceAfter}</h1>
                
                <div class="flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-4">
                    <button on:click={() => scrollTo('#get-product')} class="flex justify-between items-center leading-none text-center bg-rose-800 shadow-lg shadow-rose-500/50 w-64 border rounded-full py-4 px-6">
                        <span class="block text-xl font-black text-white">{btnText}</span> 
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 fill-current text-white bi bi-basket-fill" viewBox="0 0 16 16">
                                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>