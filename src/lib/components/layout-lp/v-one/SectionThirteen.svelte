<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let subtitleOne: string;
    export let titleOne: string;
    export let subtitleTwo: string;
    export let titleTwo: string;
    export let btnText: string;
    export let descText: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="flex justify-center items-center w-full h-auto md:h-screen bg-zinc-700 relative overflow-hidden">
    <div class="w-full h-auto flex flex-col justify-center items-center z-0 py-8 md:py-16 px-4 md:px-32">
        <div class="grid grid-cols-2 gap-4 w-full h-auto">
            <div class="col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-start items-center">
                <div class="flex flex-col w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left">
                    <span class="font-black text-2xl md:text-3xl uppercase text-zinc-400">{subtitleOne}</span>
                    <h2 class="text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16">
                        {@html titleOne}
                    </h2>
                    <p class="leading-none text-2xl  text-center md:text-left text-white w-full border shadow-lg py-3 md:py-3 px-6">
                        {@html descText} 
                    </p>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-end items-center">
                <div class="flex flex-col w-full md:w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left">
                    <span class="font-black text-2xl md:text-3xl uppercase text-zinc-500">{subtitleTwo}</span>
                    <h2 class="text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16">
                        {@html titleTwo}
                    </h2>
                    <button on:click={() => scrollTo('#get-product')} type="button" class="flex justify-center items-center leading-none text-center bg-zinc-900 w-full border shadow-lg py-3 md:py-3 px-6">
                        <span class="block text-xl font-black text-white">{btnText}</span> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>