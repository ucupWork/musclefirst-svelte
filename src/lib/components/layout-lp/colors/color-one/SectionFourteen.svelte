<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';

    export let subtitle: string;
    export let title: string;
    export let descriptionOne: string;
    export let descriptionTwo: string;
    export let linkVideo: string;
    export let classTxtBtnOrder: string;
    export let orderBtnText: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<div class="flex justify-center items-center w-full h-auto md:h-screen py-16 md:py-16 bg-zinc-300/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-start z-0">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto pb-4 md:pb-8 px-8 md:px-24">
            <div class="flex flex-col w-auto h-auto text-center md:text-start">
                <span class="text-amber-600 font-bold text-2xl md:text-3xl">{subtitle}</span>
                <h2 class="text-4xl md:text-5xl font-black text-gray-900 leading-none text-center md:text-start max-w-sm md:max-w-md">
                    {@html title}
                </h2>
            </div>
            <div class="w-full md:w-auto h-auto mt-8 md:mt-0">
                <button on:click={() => scrollTo('#get-product')} class="cursor-pointer flex justify-center items-center w-full h-auto py-4 px-8 bg-gradient-to-r from-zinc-900 to-gray-900 shadow-lg shadow-zinc-400/50 mt-4 md:mt-8 rounded-full">
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
        <div class="grid grid-cols-4 gap-4 w-full h-auto px-8 md:px-24">
            <div class="col-span-full md:col-span-2 w-full h-auto rounded-xl border shadow bg-zinc-100 p-8">
                <div class="mb-4 md:mb-8 flex w-full h-96 justify-center items-center bg-white rounded-xl shadow-xl p-2">
                    <iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Buat kamu yang pengen pertahankan bentuk otot, INI SOLUSINYA" class="w-full h-full" src={linkVideo}></iframe>
                </div>
            </div>
            <div class="col-span-full md:col-span-2 flex flex-col justify-center items-center space-y-4 w-full h-auto rounded-xl border bg-transparent p-8">
                <div class="w-full h-auto ml-2 md:ml-4">
                    <p class="leading-relaxed text-gray-600 text-left text-lg">
                        {@html descriptionOne}
                    </p>
                </div>
                <div class="w-full h-auto ml-2 md:ml-4">
                    <p class="leading-relaxed text-gray-600 text-left text-lg">
                        {@html descriptionTwo}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>