<script lang="ts">
    import { shopeepromo, globalpromo } from '$stores/index';
    
    export let classWa: string;
    export let classShopee: string;
    export let subtitle: string;
    export let title: string;
    export let description: string;
    export let linkShopee: string;
    export let linkWhatsapp: string;
    export let orderButton: boolean;
    export let linkOrderOnline: string;
</script>

<div class="flex justify-center items-center w-full h-auto md:h-screen py-16 md:py-16 bg-gray-200/50 relative overflow-hidden">

    <div id="get-product" class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center">
            <span class="text-pink-600 font-bold text-xl uppercase">{subtitle}</span>
            <h2 class="text-6xl font-black text-zinc-900 leading-none text-center">
                <span class="block uppercase max-w-3xl">{title}</span> 
            </h2>
        </div>
        <div class="flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-2 md:mt-0">
            <p class="text-xl text-gray-600 leading-relaxed max-w-xl">
                {@html description}
            </p>
        </div>
                
        <div class="flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 px-8 md:px-0 py-4 md:py-8 text-center">
            {#if $shopeepromo}
            <a rel="noreferrer" href={linkShopee} target="_blank" class="{classShopee} flex justify-start md:justify-center items-center leading-none text-center bg-pink-500 w-full md:w-auto border shadow-lg shadow-pink-500/50 py-4 px-8 md:px-8 rounded-xl md:rounded-full">
                <div class="w-auto h-auto mr-4">
                    <span class="w-auto h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        class="w-8 h-8 fill-current text-white"
                        width="16" height="16"
                        viewBox="0 0 50 50"
                        style=" fill:#undefined;"><path d="M 25 1 C 19.672869 1 15.604123 5.9531422 15.166016 12 L 5.0585938 12 C 3.9235937 12 2.999376 12.980995 3.0625 14.113281 L 4.7871094 44.285156 C 4.9365844 46.922145 7.1369035 49 9.7773438 49 L 40.222656 49 C 42.863851 49 45.063433 46.921831 45.212891 44.285156 L 46.9375 14.115234 C 47.002643 12.982141 46.076406 12 44.941406 12 L 34.833984 12 C 34.395877 5.9531422 30.327131 1 25 1 z M 25 3 C 29.036936 3 32.408924 6.8867916 32.835938 12 L 17.164062 12 C 17.591075 6.8867916 20.963064 3 25 3 z M 25.080078 18 C 28.920078 18 31.799062 20.060938 32.039062 20.210938 L 31.009766 21.880859 C 30.759766 21.710859 30.310625 21.439844 30.140625 21.339844 C 29.120625 20.789844 27.240078 19.970703 25.080078 19.970703 C 21.830078 19.970703 19.480469 21.77 19.480469 24.25 C 19.480469 26.72 21.660234 27.699766 25.240234 29.009766 C 28.870234 30.329766 32.970703 31.829609 32.970703 36.599609 C 32.970703 40.189609 29.430156 43.009766 24.910156 43.009766 C 20.920156 43.009766 17.640078 40.560156 16.830078 39.910156 L 17.939453 38.259766 C 17.969453 38.289766 21.160156 41.029297 24.910156 41.029297 C 28.270156 41.029297 31 39.039609 31 36.599609 C 31 33.439609 28.570547 32.319375 24.560547 30.859375 C 21.260547 29.649375 17.509766 28.28 17.509766 24.25 C 17.509766 20.69 20.760078 18 25.080078 18 z"></path></svg>
                    </span>
                </div>
                <span class="block text-lg md:text-xl font-black text-white">Order Via Shopee</span> 
            </a>
            {/if}
            {#if $globalpromo}
            <a rel="noreferrer" href={linkWhatsapp} target="_blank" class="{classWa} flex justify-start md:justify-center items-center leading-none text-center bg-pink-500 w-full md:w-auto border shadow-lg shadow-pink-500/50 py-4 px-8 md:px-8 rounded-xl md:rounded-full">
                <div class="w-auto h-auto mr-4">
                    <span class="w-auto h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-8 h-8 bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </span>
                </div>
                <span class="block text-lg md:text-xl font-black text-white">Order Via Whatsapp</span> 
            </a>
            {/if}
        </div>
        {#if orderButton}
        <div class="flex justify-center items-center w-full h-auto px-8 md:px-0">
            <a rel="noreferrer" href={linkOrderOnline} target="_blank" class="flex justify-center items-center uppercase leading-none text-center bg-zinc-800 w-full md:w-64 border-2 border-pink-500 shadow-lg shadow-pink-500/50 py-4 px-6">
                <span class="block text-xl font-black text-white">Beli Sekarang</span> 
            </a>
        </div>
        {/if}
    </div>
</div>