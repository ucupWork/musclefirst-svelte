<script lang="ts">
	import type { BeforeAfterCard } from '$typings/v-one/section-sixteen.type';
	export let beforeAfterCardList: BeforeAfterCard[];

    export let title: string;
    export let subtitle: string;
</script>

<section class="flex justify-start items-center w-full h-auto py-12 md:py-16 bg-zinc-400/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-center md:text-left px-8 md:px-24">
            <span class="text-amber-600 font-bold text-2xl md:text-3xl uppercase">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-2 gap-2 w-full h-auto px-8 md:px-24">
			{#each beforeAfterCardList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-transparent p-0">
                {#if list.person}
                <div class="flex flex-row w-full h-auto justify-center items-center text-center bg-white p-2">
                    {#each list.person as person}
                        <div class={`flex flex-col justify-center items-center space-y-2 w-full h-auto bg-white ${person.tag === "before" ? 'border-2 border-dotted border-y-red-500 p-4' : 'border-2 border-double border-y-emerald-500 p-4'} `}>
                            <img class="w-full h-auto" src={person.linkImg} alt={person.altImg}>
                            <span class="text-xs uppercase font-bold">{person.tag}</span>
                        </div>
                    {/each}
                </div>
                {/if}
            </div>
			{/each}
        </div>
    </div>
</section>