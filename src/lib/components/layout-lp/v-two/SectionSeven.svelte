<script lang="ts">
	import type { TestimonialCard } from '$typings/v-two/section-seven.type';
	export let testimonialCardList: TestimonialCard[];

    export let title: string;
    export let subtitle: string;
</script>

<section class="flex justify-start items-center w-full h-auto py-12 md:py-16 bg-zinc-300/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-left px-8 md:px-24">
            <span class="text-amber-600 font-bold text-2xl md:text-3xl uppercase">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24">
			{#each testimonialCardList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-transparent p-0">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                    <span class="w-full h-auto p-4 rounded-xl shadow bg-white">
                        <img class="w-full h-auto" src={list.linkImg} alt={list.altImg}>
                    </span>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>