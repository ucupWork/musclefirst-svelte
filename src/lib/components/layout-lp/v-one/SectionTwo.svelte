<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let title: string;
    export let subtitle: string;
    export let description: string;
    export let image: string;
    export let classTxtBtnOrder: string;
    export let orderBtnText: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="w-full h-auto md:h-screen overflow-hidden">
    <div class="grid grid-cols-2 gap-4 w-full h-auto md:h-screen relative bg-center bg-cover bg-white py-16 md:py-0 md:px-16">
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-start items-center md:px-8">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-zinc-900 font-black text-5xl md:text-6xl">{title}</h2>
                <span class="text-orange-500 font-bold text-2xl md:text-4xl">{subtitle}</span>
                <div class="flex flex-col w-full h-auto py-4 mt-4 md:mt-8 md:max-w-md">
                    <p class="leading-relaxed text-base text-gray-700 md:text-lg">{@html description}</p>
                </div>
                <button on:click={() => scrollTo('#get-product')} class="cursor-pointer hidden md:flex justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8 rounded-full">
                    <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto">
                        <span class="uppercase font-black {classTxtBtnOrder} text-lg">{orderBtnText}</span>
                        <span class="w-auto h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="{classTxtBtnOrder} w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                    </div>
                </button>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-end items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0">
                <picture>
                    <source srcset={image} type="image/webp"/>
                    <img 
                        src={image}
                        class="w-full md:w-auto h-auto"
                        alt="AboutImage"/>
                </picture>
                <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex md:hidden justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-amber-500 to-yellow-300 shadow-lg shadow-orange-500/50 mt-4 md:mt-8 rounded-full">
                    <div class="flex flex-row justify-between items-center space-x-4 w-full h-auto">
                        <span class="uppercase font-black {classTxtBtnOrder} text-lg">{orderBtnText}</span>
                        <span class="w-auto h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="{classTxtBtnOrder} w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>