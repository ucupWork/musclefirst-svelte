<script lang="ts">
    import type { CocokCard } from '$typings/v-one/section-three.type';
	export let cocokCardOtherList: CocokCard[];

    export let id: string;
    export let pinLogo: boolean;
    export let title: string;
    export let subtitle: string;
    export let titlePart: string;
    export let image: string;
</script>

<div {id} class="flex justify-center items-center w-full h-auto md:h-screen overflow-hidden bg-white border-b-4 border-zinc-200">
    <div class="grid grid-cols-12 gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-white py-16 md:py-16 md:px-24">
        <div class="col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-yellow-400 font-black text-2xl md:text-4xl">{title}</h2>
                <span class="text-zinc-800 font-black text-4xl md:text-5xl uppercase">{subtitle}</span>
            </div>
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-zinc-500 font-black text-3xl md:text-4xl">{titlePart}</h2>
            </div>
        </div>
        <div class="col-span-full md:col-span-4 w-full h-auto flex justify-center md:justify-end items-center mb-8 md:mb-0">
            <div class="flex flex-col justify-center items-center w-auto h-auto px-8 p-4 md:p-0 rounded bg-gradient-to-t from-[#c18f48] to-[#e7c17a] shadow-xl border-2 border-gray-200">
                <picture>
                    <source srcset={image} type="image/webp"/>
                    <img 
                        src={image}
                        class="w-full md:w-auto h-auto object-contain  object-center"
                        alt="AboutImage"/>
                </picture>
            </div>
        </div>
        <div class="col-span-full md:col-span-8 w-full h-auto flex justify-center md:justify-end items-center">
            <div class="grid grid-cols-4 gap-4 w-auto justify-center items-center md:items-end h-auto px-8 md:px-0">
                {#each cocokCardOtherList as list (list.id)}
                    <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 justify-center items-center w-full md:w-full h-auto md:h-96 shadow relative">
                        <div class="flex justify-center items-center text-center w-full md:w-full h-auto md:h-96 px-8 py-4 rounded bg-white border border-yellow-200">
                            <h2 class="leading-none font-medium text-zinc-900 text-sm mt-0 uppercase">
                                {@html list.txtDesc}
                            </h2>
                        </div>
                        <span class="absolute right-0 top-0 w-auto h-auto rounded-xl md:rounded-full p-4 bg-white border border-amber-500 shadow">
                            <div class="i-ph:check-circle text-emerald-500 w-8 h-8" />
                        </span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>