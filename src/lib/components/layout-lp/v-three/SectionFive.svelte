<script lang="ts">
	import type { CocokCard } from '$typings/v-one/section-three.type';
	export let cocokCardList: CocokCard[];
    export let gridCount: number;
    export let title: string;
    export let subtitle: string;
</script>
<section class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-white relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center mb-4">
            <span class="text-rose-900 font-bold text-xl md:text-2xl">{subtitle}</span>
            <h2 class="text-lg md:text-3xl font-black text-gray-900 leading-none text-center">
                {@html title}
            </h2>
        </div>
        <div class="grid grid-cols-{gridCount} gap-2 md:gap-4 w-full h-auto px-8 md:px-24">
            {#each cocokCardList as list (list.id)}
            <div class="col-span-full md:col-span-1 w-full h-auto border rounded-xl shadow p-6 md:p-8">
                <div id="{list.title}_{list.id}" class="flex flex-col w-full justify-center items-center space-y-2">
                    {#if list.linkImg}
                    <span><img class="w-auto h-12" src={list.linkImg} alt={list.altImg}></span>
                    {/if}
                    <span class="font-black text-lg">{list.title}</span>
                    <p class="leading-relaxed text-left text-sm text-gray-700">
                        {@html list.txtDesc}
                    </p>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>