<script lang="ts">
    import { maleFrame } from '$contents/bmr-page/list-products';
    import { CardSuggestProduct } from '$globals/card/index';

    export let bmrResult: string;
</script>

<div class="flex flex-col items-center w-full h-auto">
    <div class="flex justify-between items-center w-full h-auto mb-2">
        <div class="flex flex-row items-center space-x-1 w-auto h-auto">
            <small class="uppercase font-bold text-xs text-zinc-800">
                Suggest Product : 
            </small>
            <h1 class="font-black uppercase text-xs leading-none">
                {bmrResult ? bmrResult : '-'} Kcal/Hari
            </h1>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2 w-full h-auto mb-4 md:mb-4">
        <CardSuggestProduct 
            width={`256`}
            height={`256`}
            cardSuggestList={maleFrame} 
        />
    </div>
</div>