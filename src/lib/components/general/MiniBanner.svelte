<script lang="ts">
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Autoplay from 'embla-carousel-autoplay';
    import { ButtonThemes } from '$general/index';
    
    const emblaConfig = {
        options: { loop: false },
        plugins: [Autoplay()],
    }
</script>
<div class="hidden md:flex flex-col md:flex-row justify-between items-center bg-[#0a0908] border-b border-zinc-900 w-full h-auto px-4 md:px-14 py-2">
    <div class="flex justify-start items-start">
        
        <div class="embla" use:emblaCarouselSvelte={emblaConfig}>
            <div class="embla__container">
                <div class="embla__slide">
                    <span class="font-normal text-xs md:text-sm uppercase">
                        <small class="text-amber-500 font-bold">90% off</small>
                        <small class="text-white">tokopedia flash sale zona sehat</small>
                    </span>
                </div>
                <div class="embla__slide">
                    <span class="font-normal text-xs md:text-sm uppercase">
                        <small class="text-amber-500 font-bold">Musclefirst kalkulator</small>
                        <small class="text-white">, membantu kesehatan anda secara online</small>
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="flex justify-end items-end">
        <ButtonThemes />
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