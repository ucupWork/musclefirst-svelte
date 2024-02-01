<script lang="ts">
	import type { ManfaatCardList } from '$typings/v-two/section-five.type';
	export let manfaatList: ManfaatCardList[];
    export let title: string;
    export let subtitle: string;
</script>

<section class="flex justify-center items-center w-full h-auto md:h-auto py-8 md:py-16 bg-white relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24">
            <span class="text-amber-600 font-bold uppercase text-2xl md:text-3xl">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-4xl">
                <span class="block uppercase">{@html title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24">
			{#each manfaatList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-zinc-100 p-8 shadow">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-2">
                    <span class="w-auto h-auto p-4 rounded-full shadow bg-white">
                        <img class="w-12 h-auto" src={list.linkImg} alt={list.altImg}>
                    </span>
                    <h2 class="font-bold uppercase text-md text-zinc-900 leading-none tracking-normal">{list.title}</h2>
                    <p class="leading-relaxed text-gray-600 text-center text-sm font-normal">
                        {@html list.txtDesc}
                    </p>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>