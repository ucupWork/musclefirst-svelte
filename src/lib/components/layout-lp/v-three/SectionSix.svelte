<script lang="ts">
	import type { CocokCard } from '$typings/v-one/section-three.type';
	export let butuhCardList: CocokCard[];
    export let title: string;
    export let subtitle: string;
</script>
<section class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-[#0e1d32] relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center mb-4">
            <span class="text-rose-900 font-bold text-2xl">{subtitle}</span>
            <h2 class="text-3xl font-black text-white leading-none text-center">
                {@html title}
            </h2>
        </div>
        <div class="grid grid-cols-4 gap-4 w-full h-auto px-8 md:px-24">
            {#each butuhCardList as list (list.id)}
            <div id="{list.title}_{list.id}"  class="col-span-full md:col-span-1 w-full h-auto rounded-xl shadow-xl bg-gray-900 p-8">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-2">
                    {#if list.linkImg}
                    <span><img class="w-auto h-12" src={list.linkImg} alt={list.altImg}></span>
                    {/if}
                    <span class="text-white font-black text-lg">{list.title}</span>
                    <p class="leading-relaxed text-white text-left text-sm">
                        {@html list.txtDesc}
                    </p>
                </div>
            </div>
			{/each}
        </div>
        <div class="flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-16 md:mt-8">
            <h2 class="text-md md:text-xl font-black text-white leading-none text-center md:max-w-md bg-rose-800 p-4 rounded-2xl shadow-xl">
                <span class="block uppercase">JIKA KAMU ADALAH SALAH SATU ORANG DIATAS, ITU TANDANYA KAMU PERLU PRO NRGY!</span>
            </h2>
        </div>
    </div>
</section>