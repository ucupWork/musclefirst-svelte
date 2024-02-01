<script lang="ts">
	import type { 
        ServingHead,
        AmountServing,
        IngredientsList,
        VitaminList,
        BcaaList,
        NutritionDescription,
        IngredientsDescription,
        ServingSuggestion,
        Storage,
        Warning
    } from '$typings/v-one/modal-ingredients.type';

    import { modal } from '$stores/index'

	export let servingHead: ServingHead[];
	export let amountServing: AmountServing[];
	export let ingredientsList: IngredientsList[];
	export let vitaminList: VitaminList[];
	export let bcaaList: BcaaList[];
	export let nutritionDescription: NutritionDescription;
	export let ingredientsDescription: IngredientsDescription;
	export let servingSuggestion: ServingSuggestion;
	export let storage: Storage;
	export let warning: Warning;
    export let modalType: string;
    export let vitaminPin: boolean;
    export let bcaaPin: boolean;
    export let CollafitPin: boolean;
    
    const closeModal = () => modal.set(false);
</script>

<div id="{modalType}" class="flex flex-col w-full h-auto space-y-4 p-4 pb-8 overflow-y-auto z-[100]">
    <div class="flex flex-col w-full h-auto space-y-2 border-4 p-4">
        <div class="w-full h-auto max-w-lg">
            <h2 class="font-black uppercase text-xl md:text-3xl text-zinc-900">Nutrition Facts / <br> Informasi Nilai Gizi</h2>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {servingHead[0].title} : {servingHead[0].gram}G <br>
                {servingHead[1].title} : {servingHead[1].sachet} Sachet
            </p>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <h2 class="text-sm md:text-md font-bold uppercase text-zinc-900">Amount Per Serving / Jumlah Persajian</h2>
            {#each amountServing as list (list.id)}
            <div class="flex justify-between items-center">
                <span class="text-sm md:text-md font-medium text-zinc-900">{list.title}</span>
                <span class="text-sm md:text-md font-medium text-zinc-900">{list.kkal}kkal</span>
            </div>
            {/each}
        </div>
        <div class="flex justify-end items-center w-full h-auto">
            <h2 class="text-sm md:text-md font-bold uppercase text-zinc-900">%AKG*</h2>
        </div>
        <div class="flex flex-col w-full h-auto py-4 border-b">
            {#each ingredientsList as list (list.id)}
            <div id="{list.title}_{list.id}" class="flex w-full h-auto justify-between items-center">
                <span class="text-sm md:text-md font-bold text-zinc-900">{list.title}</span>
                <div class="flex flex-row space-x-4 md:space-x-8 w-auto h-auto">
                    <span class="text-sm md:text-md font-bold text-zinc-900">
                        {#if list.gram}{list.gram}g{/if}
                        {#if list.mgram}{list.mgram}mg{/if}
                    </span>
                    <span class="text-sm md:text-md font-bold text-zinc-900">{list.percent}%</span>
                </div>
            </div>
            {/each}
        </div>
        
        {#if vitaminPin}
        <div class="grid grid-cols-2 gap-0 w-full h-auto justify-end items-center pb-2 border-b">
            {#each vitaminList as list (list.id)}
            <div id="{list.title}_{list.id}" class="flex w-full h-auto {list.percent ? 'col-span-full justify-between items-center' : 'col-span-1 justify-between items-center'} border">
                <span class="text-sm md:text-md font-bold text-zinc-900 {list.alignItem} {list.alignItem === 'text-right' ? 'ml-auto' : ''}">{list.title}</span>
                {#if list.percent}
                    <span class="text-sm md:text-md font-bold text-zinc-900 ml-auto">{list.percent}</span>
                {/if}
            </div>
            {/each}
        </div>
        {/if}
        
        {#if bcaaPin}
        <div class="flex flex-col w-full h-auto pb-2 border-b">
            <div class="flex justify-start items-center w-full h-auto">
                <h2 class="text-sm md:text-md font-bold uppercase text-zinc-900">BCAA</h2>
            </div>
            {#each bcaaList as list (list.id)}
            <div class="flex w-full h-auto justify-between items-center">
                <span class="text-sm md:text-md font-bold text-zinc-900">{list.title}</span>
                <div class="flex flex-row space-x-4 md:space-x-8 w-auto h-auto">
                    <span class="text-sm md:text-md font-bold text-zinc-900">{list.mgram}mg</span>
                </div>
            </div>
            {/each}
        </div>
        {/if}
        
        <div class="w-full h-auto">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {@html nutritionDescription.description}
            </p>
        </div>
    </div>
    
    <div class="flex flex-col w-full h-auto space-y-2 px-4 py-2">
        <div class="w-full h-auto max-w-lg">
            <h2 class="font-bold text-sm md:text-md text-zinc-900">Ingredients / Komposisi :</h2>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {@html ingredientsDescription.description}
            </p>
        </div>
    </div>
    
    <div class="flex flex-col w-full h-auto space-y-2 px-4 py-2">
        <div class="w-full h-auto max-w-lg">
            <h2 class="font-bold text-sm md:text-md text-zinc-900">Serving Suggestion / Saran Penyajian :</h2>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {@html servingSuggestion.description}
            </p>
        </div>
    </div>
    
    <div class="flex flex-col w-full h-auto space-y-2 px-4 py-2">
        <div class="w-full h-auto max-w-lg">
            <h2 class="font-bold text-sm md:text-md text-zinc-900">Storage / Penyimpanan :</h2>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {@html storage.description}
            </p>
        </div>
    </div>
    {#if warning}
    <div class="flex flex-col w-full h-auto space-y-2 px-4 py-2">
        <div class="w-full h-auto max-w-lg">
            <h2 class="font-bold text-sm md:text-md text-zinc-900">Warning / Peringatan :</h2>
        </div>
        <div class="w-full h-auto py-2 border-b">
            <p class="text-sm leading-relaxed tracking-normal text-zinc-900">
                {@html warning.description}
            </p>
        </div>
    </div>
    {/if}

    <button on:click={closeModal} class="p-2 w-full h-auto flex justify-center items-center bg-zinc-900 rounded-xl">
        <span class="font-bold text-white">Close</span>
    </button>
    
</div>