<script lang="ts">
	import type { CocokCard } from '$typings/v-one/section-three.type';
	export let cocokCardList: CocokCard[];
    export let gridCount: number;
    export let title: string;
    export let subtitle: string;
    export let subTitlePin: boolean;
</script>

<div class="flex justify-start items-center w-full h-auto md:h-auto py-16 md:py-16 bg-zinc-400/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24">
            {#if subTitlePin}
            <span class="text-amber-600 font-bold text-2xl md:text-3xl">{subtitle}</span>
            {/if}
            <h2 class="text-4xl md:text-5xl font-black text-zinc-900 leading-none max-w-xs">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-{gridCount} gap-2 w-full h-auto px-8 md:px-24">
			{#each cocokCardList as list (list.id)}
            <div class="col-span-full md:col-span-1 w-full h-full bg-transparent">
                <div class="flex flex-col space-y-2 justify-center items-center w-full h-auto">
                    <div id="{list.title}_{list.id}" class="flex justify-center items-center w-full h-aut md:h-64 border-b bg-gradient-to-b from-[#c18f48] to-[#e7c17a] p-8 shadow">
                        <div class="flex flex-col w-full justify-center items-center text-center">
                            {#if list.linkImg}
                            <span class="w-auto h-auto p-4 rounded-full shadow bg-white mb-4 md:mb-8">
                                <img class="w-12 h-auto" src={list.linkImg} alt={list.altImg}>
                            </span>
                            {/if}
                            <h2 class="leading-none text-gray-900 text-center text-md font-medium uppercase">
                                {list.txtDesc}
                            </h2>
                        </div>
                    </div>
                    {#if list.txtSubDesc}
                    <div id="{list.title}_{list.id}" class="w-full h-auto border-b bg-white p-8 shadow">
                        <div class="w-full h-full flex justify-center items-center">
                                <p class="text-sm text-zinc-700 leading-relaxed">
                                    {@html list.txtSubDesc}
                                </p>
                        </div>
                    </div>
                    {/if}
                </div>
            </div>
			{/each}
        </div>
    </div>
</div>