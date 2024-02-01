<script lang="ts">
    import { certifiedList } from '$contents/product-page/list-certified';
    import { CardCertified } from '$components/globals/card/index';
</script>

<div class="w-full h-auto bg-black relative border-b border-zinc-900">
    <div  class="w-full flex flex-col px-8 md:px-16 py-8 md:py-24">
        <div class="grid grid-cols-6 gap-2 mx-auto dark:text-gray-400 w-full justify-center items-center">
            {#each certifiedList as certified }
            <div class="col-span-2 md:col-span-1 w-full h-auto flex justify-center items-center rounded-md shadow-lg p-2 bg-white border">
                <CardCertified imgUrl={certified.imgUrl} altImg={certified.altImg} />
            </div>
            {/each}
        </div>
    </div>
</div>