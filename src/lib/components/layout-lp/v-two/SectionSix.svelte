<script lang="ts">
	import type { CocokCard } from '$typings/v-one/section-three.type';
	export let cocokCardList: CocokCard[];
    export let title: string;
    export let subtitle: string;
</script>

<section class="flex justify-start items-center w-full h-auto md:h-screen py-8 md:py-16 bg-white/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24">
            <span class="text-amber-600 font-bold uppercase text-2xl md:text-xl">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs">
                <span class="block uppercase">{@html title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-5 gap-2 w-full h-auto px-8 md:px-24">
			{#each cocokCardList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-zinc-100 p-8 shadow">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                    <span class="w-auto h-auto p-2 rounded-full shadow bg-white">
                        <img class="w-12 h-auto hidden" src={list.linkImg} alt={list.altImg}>
                        <div class="w-auto flex justify-center items-center h-auto p-2 rounded-full">
                            <div class="i-ph:check-circle text-emerald-600 w-8 h-8" />
                        </div>
                    </span>
                    <p class="leading-none text-gray-600 text-center text-md font-medium uppercase">
                        {list.txtDesc}
                    </p>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>