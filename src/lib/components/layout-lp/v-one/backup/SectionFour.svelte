<script lang="ts">
	import type { RasaRoundedFull } from '$typings/v-one/section-four.type';
	export let rasaList: RasaRoundedFull[];

    export let bgImg: string;
    export let imgLink: string;
    export let altImg: string;
    
    export let subTitle: string;
    export let title: string;
    export let btnText: string;
    export let rasaCount: number;
</script>

<section class="w-full h-auto md:h-screen bg-zinc-900 relative bg-cover bg-center bg-no-repeat overflow-hidden" style="background-image: url({bgImg});">
    <div class="grid grid-cols-2 gap-4 w-full h-auto relative py-16 md:py-0 bg-zinc-900 md:bg-transparent">

        <div class="col-span-full w-full h-auto justify-center md:justify-end items-center z-0">
            <div class="flex flex-col space-y-2 justify-center md:justify-end items-center w-full h-auto py-4 md:py-8">
                <div class="w-auto h-auto p-4 md:p-0 hidden">
                    <img src={imgLink} class="w-[620px] md:w-[520px] h-auto" alt={altImg} />
                </div>
                <div class="grid grid-cols-{rasaCount} flex justify-center md:justify-end items-center space-y-0 md:space-y-0 space-x-4 md:space-x-4 w-full h-auto text-left bg-zinc-900/50 px-8 md:px-16 py-8 md:py-4">
			        {#each rasaList as list (list.id)}
                    <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 justify-center md:justify-center items-center w-full md:w-auto h-auto">
                        {#if list.linkImg}
                        <span class="flex justify-center items-center w-full md:w-auto h-auto rounded-full p-1 bg-white border border-amber-500 shadow-xl">
                            <img class="w-20 h-auto" src={list.linkImg} alt={list.altImg}>
                        </span>
                        {/if}
                        <div class="w-full md:w-auto h-auto p-2 bg-white md:bg-transparent items-end px-8 md:px-0 rounded-full border md:border-0 border-amber-500">
                            <span class="leading-none font-bold text-zinc-900 md:text-white mt-2">
                                {@html list.title}
                            </span>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </div>

        <div class="col-span-full w-full h-auto flex justify-start items-center md:px-0 z-10 bg-transparent py-10 md:py-20">
            <div class="flex flex-col justify-center items-center w-full md:w-full md:max-w-xl h-auto px-8 md:px-8 py-4 md:py-8 bg-white">
                <span class="text-yellow-400 font-black text-4xl md:text-5xl uppercase tracking-tight">{subTitle}</span>
                <h2 class="text-5xl md:text-6xl font-black  leading-none text-left tracking-tight">
                    <span class="text-zinc-900 block font-black uppercase">{title}</span> 
                </h2>
                <button type="button" class="mt-8 flex justify-center items-center leading-none text-center bg-zinc-900 shadow-lg shadow-zinc-500/50 w-full md:w-64 border py-2 px-6">
                    <span class="block text-xl font-black text-white uppercase">{btnText}</span> 
                </button>
            </div>
        </div>
    </div>
</section>