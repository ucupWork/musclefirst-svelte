<script lang="ts">
	import type { ManfaatCardList } from '$typings/v-one/section-six.type';
	export let manfaatList: ManfaatCardList[];

    export let subtitle: string;
    export let title: string;
</script>

<section class="flex justify-center items-center w-full h-auto py-16 md:py-16 bg-white relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-start z-0">
        <div class="flex flex-col w-auto h-auto pb-4 md:pb-8 text-start px-8 md:px-24">
            <span class="text-amber-600 font-bold text-2xl md:text-3xl">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 leading-none text-start max-w-xs">
                {@html title}
            </h2>
        </div>
        <div class="grid grid-cols-4 gap-2 md:gap-4 w-full h-auto px-8 md:px-24">
            {#each manfaatList as list (list.id)}
            <div class="col-span-full md:col-span-1 w-full h-80 bg-white hover:bg-zinc-300/50 border rounded-xl shadow p-6 md:p-8 relative">
                <div class="flex flex-col space-y-4 justify-center items-center w-full h-auto">
                    <div class="flex flex-col w-full h-auto space-y-4 justify-start items-start">
                        {#if list.linkImg}
                        <span class="w-auto h-auto p-4 rounded-full bg-white shadow border">
                            <img class="w-8 h-auto" src={list.linkImg} alt={list.altImg}>
                        </span>
                        {/if}
                        <span class="font-black text-lg uppercase text-gray-900">{list.title}</span>
                    </div>
                    <div class="flex flex-row w-full h-auto justify-start items-center space-y-2">
                        <div class="flex flex-col w-full justify-start items-start space-y-2">
                            <p class="leading-relaxed text-left text-sm text-gray-700">
                                {@html list.txtDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>