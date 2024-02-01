<script lang="ts">
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    export let title: string;
    export let btnText: string;

    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section class="w-full h-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto py-8 md:py-0 px-8 md:px-24 bg-gradient-to-r from-amber-500 to-orange-500 shadow border-b-4">
        <div class="flex w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-left">
            <h2 class="text-2xl md:text-3xl font-black text-white leading-none text-left">
                <span class="block uppercase text-white">{title}</span> 
            </h2>
        </div>
        <div class="flex w-full md:w-auto h-auto px-0 md:px-0 py-4 md:py-8 text-center">
            <button on:click={() => scrollTo('#get-product')} type="button" class="flex justify-between items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6">
                <span class="block text-xl font-black text-white">{btnText}</span> 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 fill-current text-white bi bi-basket-fill" viewBox="0 0 16 16">
                        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</section>