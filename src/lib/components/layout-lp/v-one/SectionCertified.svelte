<script lang="ts">
	// import type { CertifiedCard } from '$typings/v-one/section-seventeen.type';
    import type { ListCertified } from "$typings/list-certified.type";
	export let certifiedCardList: ListCertified[];
</script>

<section class="flex justify-start items-center w-full h-auto py-4 md:py-8 bg-zinc-400/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-row justify-center items-center space-x-4 w-full h-auto">
			{#each certifiedCardList as list}
            <div class="flex justify-center items-center w-auto h-auto border-b bg-transparent p-0">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                    <span class="w-full h-auto p-4 rounded-xl shadow bg-white">
                        <img class="w-full md:w-32 h-auto rounded-xl" src={list.imgUrl} alt={list.altImg}>
                    </span>
                </div>
            </div>
			{/each}
        </div>
    </div>
</section>