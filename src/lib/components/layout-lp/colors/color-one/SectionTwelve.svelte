<script lang="ts">
	import type { EducationCard } from '$typings/v-one/section-twelve.type';
	export let educationCardList: EducationCard[];

    export let id: string;
    export let pinLogo: boolean;
    export let title: string;
    export let subtitle: string;
    export let titlePart: string;
    export let image: string;
</script>

<div  {id} class="flex justify-center items-center w-full h-auto md:h-screen overflow-hidden bg-white border-b-4 border-zinc-200">
    <div class="grid grid-cols-12 gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-white py-16 md:py-16 md:px-16">
        <div class="col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-rose-400 font-black text-2xl md:text-4xl">{title}</h2>
                <span class="text-zinc-800 font-black text-4xl md:text-5xl uppercase">{subtitle}</span>
            </div>
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-zinc-500 font-black text-3xl md:text-4xl">{titlePart}</h2>
            </div>
        </div>
        <div class="col-span-full md:col-span-4 w-full h-auto flex justify-center md:justify-end items-center mb-8 md:mb-0">
            <div class="flex flex-col justify-center items-center w-auto h-auto p-4 md:p-0 rounded bg-gradient-to-t from-pink-600 to-rose-400/50 shadow-xl border-2 border-gray-200">
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
            <div class="grid grid-cols-4 gap-4 md:gap-8 w-auto justify-center items-center md:items-end h-auto px-8 space-y-4 md:px-0">
                {#each educationCardList as list (list.id)}
                <div id="{list.title}_{list.id}" class="col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-50 shadow rounded-xl border p-4 md:p-6 relative">
                    <div class="absolute -top-4 -right-4 w-auto h-auto">
                        <div class="flex justify-center items-center bg-gradient-to-r from-pink-400 to-rose-400 shadow border rounded-full w-12 h-12">
                            {#if pinLogo}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {:else}
                            <span class="font-black text-white">{list.id}</span>
                            {/if}
                        </div>
                    </div>

                    <p class="leading-relaxed text-base text-gray-800 md:text-lg">
                        {@html list.txtDesc}
                    </p>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>