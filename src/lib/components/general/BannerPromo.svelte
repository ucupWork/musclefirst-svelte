<script lang="ts">
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Autoplay from 'embla-carousel-autoplay';
    import { ecommerceMode } from '$stores/shop';
    import { CountTime } from '$globals/countdown/index';
    
    const emblaConfig = {
        options: { 
            loop: true 
        },
        axis: 'y',
        plugins: [Autoplay()],
    }
</script>

<div class="embla" use:emblaCarouselSvelte={emblaConfig}>
    <div class="embla__container">
        <div class="embla__slide">
            {#if $ecommerceMode}
            <div class="hidden md:flex flex-col md:flex-row justify-between items-center bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 border-b border-zinc-900 w-full h-auto px-4 md:px-16 py-6">
                <div class="flex flex-col justify-start items-start text-left -space-y-2">
                    <div class="w-auto h-auto">
                        <span class="font-normal text-xs md:text-sm uppercase">
                            <small class="text-xl text-amber-500 font-blackttnorms font-bold">BELI LEBIH BANYAK,</small>
                            <small class="text-xl text-zinc-900 dark:text-zinc-100 font-blackttnorms">LEBIH HEMAT</small>
                        </span>
                    </div>
                    <div class="w-auto h-auto">
                        <span class="font-normal text-xs md:text-sm uppercase">
                            <small class="text-lg text-zinc-900 dark:text-zinc-100 font-ttnorms font-bold">DISKON 5% TANPA MINIMAL PEMBELIAN</small>
                        </span>
                    </div>
                </div>
                
                <div class="flex flex-row items-center space-x-2 justify-end">
                    <button type="button" class="py-1 px-8 bg-gradient-to-r from-amber-500 to-amber-900 border border-zinc-900 text-zinc-900 hover:bg-zinc-900 focus:ring-zinc-900 focus:ring-offset-zinc-2 w-full transition ease-in duration-200 text-center text-sm font-blackttnorms font-normal uppercase shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
                        Daftar Disini
                    </button>
                </div>
            </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
    }
    .embla__slide {
        flex: 0 0 100%;
    }
</style>