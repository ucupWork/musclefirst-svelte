<script lang="ts">
	import type { RasaRoundedFull } from '$typings/v-two/section-four.type';
    import type { CocokCard } from '$typings/v-one/section-three.type';
	export let rasaList: RasaRoundedFull[];
	export let cocokCardOtherList: CocokCard[];

    export let productName: string;
    export let sizeOne: string;
    export let sizeTwo: string;

    export let bgImg: string;
    export let imgLink: string;
    export let altImg: string;
    
    export let subTitle: string;
    export let title: string;
    export let btnText: string;
</script>

<section class="w-full h-auto md:h-screen bg-amber-500 relative bg-cover bg-center bg-no-repeat" style="background-image: url({bgImg});">
    <div class="flex justify-end items-end w-full h-auto relative pb-16 md:pb-0 md:py-0 bg-amber-500 md:bg-transparent">
        <div class="absolute inset-x-0 top-0 md:top-4 w-full h-auto justify-center items-center z-10">
            <div class="hidden md:flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8">
                <div class="w-auto h-auto py-4 md:py-8 max-w-sm text-center">
                    <span class="block uppercase font-black text-white text-3xl md:text-6xl mb-1">{productName}</span>
                    <span class="font-bankghotic block uppercase font-bold bg-zinc-900 text-zinc-100 text-xl md:text-2xl">Musclefirst</span>
                </div>
            </div>
        </div>

        <div class="absolute inset-x-0 -bottom-4 md:-bottom-32 w-full h-auto justify-center items-center z-10">
            <div class="flex flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8">
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-8 md:px-16 py-8 md:py-4">
                    
                    <div class="flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto">
                        {#if sizeTwo}
                        <div class="rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center">
                            <h2 class="leading-none font-black text-3xl md:text-5xl text-white mt-2">
                                {sizeTwo}
                            </h2>
                        </div>
                        {/if}
                        {#if sizeOne}
                        <div class="rounded md:rounded-full w-full md:w-32 h-16 md:h-32 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center">
                            <h2 class="leading-none font-black text-3xl text-white mt-2">
                                {sizeOne}
                            </h2>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-end md:items-center md:px-0 z-10 bg-transparent pb-10 md:pb-0 md:py-0">
            <div class="flex flex-col justify-center items-center w-full md:w-auto h-auto px-8 md:px-8 py-4 md:py-8 bg-transparent">
                <div class="flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-4 md:py-8">
                    <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4">
                        
                        <div class="flex flex-row space-x-2 :space-x-4 justify-center items-center w-full md:w-auto h-auto">
                            <div class="rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center">
                                <h2 class="leading-none font-black text-2xl md:text-4xl text-white mt-0">
                                    Rasa
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start space-y-4 w-full h-auto bg-transparen rounded-xl px-0 md:px-8 py-4 md:py-8">
                    
                    {#each rasaList as list (list.id)}
                    <div id="{list.title}_{list.id}" class="flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto">
                        {#if list.linkImg}
                        <span class="w-auto h-auto rounded-xl md:rounded-full p-0 bg-white border border-amber-500 shadow-xl">
                            <img class="w-16 md:w-24 h-auto" src={list.linkImg} alt={list.altImg}>
                        </span>
                        {/if}
                        <div class="flex justify-center items-center w-full h-auto px-4 py-4 md:py-2 rounded-xl md:rounded-full bg-white border border-yellow-200">
                            <h2 class="leading-none font-bold text-zinc-900 text-md md:text-md mt-0">
                                {@html list.title}
                            </h2>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
            <div class="flex flex-col w-auto h-auto px-8 md:px-8 py-2 md:py-8 bg-transparent">
                <div class="flex md:hidden flex-col space-y-2 justify-center items-center w-full h-auto py-2 md:py-8">
                    <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full h-auto text-left bg-transparent px-0 md:px-16 py-4 md:py-4">
                        
                        <div class="flex flex-row space-x-2 md:space-x-4 justify-center items-center w-full md:w-auto h-auto">
                            <div class="rounded md:rounded-full w-full md:w-40 h-16 md:h-40 bg-gradient-to-r from-zinc-800 to-gray-900 border-yellow-200 shadow-lg flex justify-center items-center">
                                <h2 class="leading-none font-black text-2xl md:text-4xl text-white mt-0">
                                    Cocok Untuk
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-end items-end space-y-4 w-full h-auto bg-transparent rounded-xl px-0 md:px-8 py-8 md:py-8 md:max-w-sm">
			        {#each cocokCardOtherList as list (list.id)}
                    <div id="{list.title}_{list.id}" class="flex flex-row space-x-2 justify-center items-center w-full md:w-auto h-auto">
                        <div class="flex justify-center items-center w-full md:w-auto h-auto px-8 py-4 rounded-xl md:rounded-full bg-white border border-yellow-200">
                            <h2 class="leading-none font-medium text-zinc-900 text-sm mt-0 uppercase">
                                {@html list.txtDesc}
                            </h2>
                        </div>
                        <span class="w-auto h-auto rounded-xl md:rounded-full p-4 bg-white border border-amber-500 shadow-xl">
                            <div class="i-ph:check-circle text-emerald-500 w-8 h-8" />
                        </span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>