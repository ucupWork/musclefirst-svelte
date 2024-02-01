<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let hashtag: string;
    export let title: string;
    export let btnText: string;
    export let bgImage: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="w-full h-auto md:h-screen overflow-hidden">
    <div class="grid grid-cols-2 gap-4 w-full h-screen relative bg-center bg-cover" style="background-image: url({bgImage});">
        <div class="col-span-full md:col-span-1 w-full h-screen flex justify-center items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0">
                <span class="text-rose-700 p-1 font-bold text-2xl max-w-xs text-left rounded-full">{hashtag}</span>
                <h2 class="text-3xl md:text-5xl font-black text-white max-w-xl leading-none">
                    {@html title}
                </h2>
                <button on:click={() => scrollTo('#musclefirst-education')} class="flex justify-between items-center w-full max-w-xs md:max-w-sm h-auto py-4 px-8 rounded-full bg-rose-800 shadow-lg shadow-rose-500/50 mt-4 md:mt-8">
                    <span class="uppercase font-black text-white">{btnText}</span>
                    <span class="w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</section>