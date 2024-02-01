<script lang="ts">
    import { certifiedList } from '$contents/product-page/list-certified';
    import { CardCertified } from '$components/globals/card/index';
    export let id: string;
</script>

<div {id} class="flex flex-col md:flex-row justify-center items-center w-full h-auto mt-8 md:mt-0">
    <div  class="w-full px-8 py-0 flex flex-col justify-center items-center bg-black">
        <div  class="w-full flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8">
            <div  class="grid grid-cols-6 md:grid-cols-6 gap-4 w-full mb-0">
                {#each certifiedList as certified }
                <div class="col-span-2 md:col-span-1 w-full h-auto flex justify-center items-center rounded-md shadow-lg p-2 bg-white border">
                    <CardCertified imgUrl={certified.imgUrl} altImg={certified.altImg} />
                </div>
                {/each}
            </div>  
        </div>
    </div>
</div>