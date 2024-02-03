<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let imgLink: string;
    export let altImg: string;
    
    export let titlePrice: string;
    export let descriptionPrice: string;
    export let bonusText: string;
    export let beforePriceLabel: boolean;
    export let beforePrice: string;
    export let afterPrice: string;
    export let bgColorSection: string;
</script>

<section id="get-product" class="flex justify-center items-center w-full h-auto md:h-screen bg-{bgColorSection} relative overflow-hidden py-8 md:py-0">

    <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0">
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center">
            <div class="hidden w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8">
                <div class="flex flex-col text-center md:text-left w-auto h-auto">
                    <span class="text-amber-500 font-bold text-xl md:text-2xl">{subtitle}</span>
                    <h2 class="text-2xl md:text-4xl font-black text-black leading-none text-left">
                        <span class="block">{@html title}</span> 
                    </h2>
                </div>
            </div>
            <div class="flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center">
                <div class="flex w-full h-auto justify-center items-center">
                    <img src={imgLink} class="w-10/12 h-auto" alt={altImg} />
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center md:justify-end items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 md:pl-24 py-4 md:py-8 text-center md:text-left">
                <h2 class="text-2xl md:text-2xl font-black uppercase text-gray-800 tracking-tight text-center md:text-left md:max-w-md mb-4">
                    {@html titlePrice}
                </h2>
                {@html descriptionPrice}

                {#if beforePriceLabel}
                <h2 class="text-amber-700 font-bold text-2xl md:text-4xl line-through">RP. {beforePrice},-</h2>
                {/if}
                <h1 class="text-amber-500 font-black text-3xl md:text-6xl">RP. {afterPrice},</h1>
                <h3 class="text-gray-100 font-base text-xl md:text-2xl">{@html bonusText}</h3>
                <div class="flex flex-col space-y-4 w-full md:w-96 h-auto px-4 md:px-0 py-4 md:py-8 text-center mt-2 md:mt-0">
                    <div class="flex justify-center md:justify-between items-center leading-none text-center bg-gradient-to-r from-amber-500 to-yellow-300 w-full md:w-auto border shadow-lg shadow-amber-500/50 py-3 px-4 md:px-8 rounded-full">
                        <div class="w-auto h-auto md:mr-4">
                            <span class="hidden md:block w-auto h-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                  </svg>
                                   </span>
                        </div>
                        <span class="block text-md md:text-md font-black text-amber-900 uppercase">Cek Agent Terdekat dikotamu</span> 
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>