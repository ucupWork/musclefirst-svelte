<script lang="ts">
	// import type { CertifiedCard } from '$typings/v-one/section-seventeen.type';
    import type { ListCertified } from "$typings/list-certified.type";
	export let certifiedCardList: ListCertified[];
</script>

<section class="flex flex-col justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-900 relative overflow-hidden">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto z-0 px-4 md:px-24">
        <span class="font-black text-sm text-white">Certified Label</span>
        <div class="flex justify-center items-center space-x-4 w-auto h-auto">
            <div class="grid grid-cols-6 gap-4 w-auto h-auto p-4 md:p-2">
                {#each certifiedCardList as list}
                <div class="col-span-3 md:col-span-1 flex justify-center items-center w-auto h-auto bg-transparent p-0">
                    <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                        <span class="w-full h-auto p-4 rounded-xl shadow bg-white">
                            <img class="w-full md:w-32 h-auto rounded-xl" src={list.imgUrl} alt={list.altImg}>
                        </span>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>