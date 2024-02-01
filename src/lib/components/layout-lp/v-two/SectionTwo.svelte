<script lang="ts">
	import type { CocokCard } from '$typings/v-one/section-three.type';
	export let cocokCardList: CocokCard[];
    export let gridCount: number;
    export let title: string;
    export let subtitle: string;

    export let bgColor: string;
    export let textHead: string;
    export let textSubHead: string;
    export let cardColor: string;
    export let borderColor: string;
    export let bgImgColor: string;
    export let txtDescColor: string;
    export let onBgColor: boolean;
</script>

<section class="flex justify-start items-center w-full h-auto py-8 md:py-24 { onBgColor ? 'bg-{bgColor}' : 'bg-[#2b2b2b]'} relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24">
            <span class="text-{textSubHead} font-bold text-2xl md:text-3xl">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-{textHead} leading-none max-w-xl">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-{gridCount} gap-2 w-full h-auto px-8 md:px-24">
			{#each cocokCardList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-{cardColor} border border-{borderColor} p-8 shadow">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                    <span class="w-auto h-auto p-4 rounded-full shadow bg-{bgImgColor}">
                        <img class="w-12 h-auto" src={list.linkImg} alt={list.altImg}>
                    </span>
                    <p class="leading-none text-{txtDescColor} text-center text-md font-medium uppercase">
                        {list.txtDesc}
                    </p>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>