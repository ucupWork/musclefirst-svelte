<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    
    export async function load({ url }: LoadEvent) {
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            currentPage: url.pathname
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import Affiliate01 from '$images/affiliate/img-01.png';
    import Affiliate02 from '$images/affiliate/img-02.webp';
</script>

<SEO 
    title="Cara Menjadi Affiliate Tiktok Musclefirst" 
    description="Keuntungan menjadi affiliator MUSCLEFIRST di TikTok , potensi penghasilan tambahan sebanyak 10% dan berkesempatan memenangkan hadiah JUTAAN RUPIAH serta mendapatkan manfaat lainnya dari program afiliasi MUSCLEFIRST"
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex justify-center items-center w-full h-screen bg-zinc-900">
    <div class="flex flex-col w-full h-auto py-4 md:py-8 px-4 md:px-16">
        <div class="flex flex-col w-full md:w-full h-auto">
            <div class="flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0">
                <h1 class="font-blackttnorms font-black text-4xl md:text-7xl text-white uppercase mb-4 md:mb-0">
                    Affiliate
                </h1>
                <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                    <h2 class="text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1">
                        Musclefirst
                    </h2>
                </span>
            </div>
            <div class="hidden md:flex w-full md:w-auto h-auto bg-transparent px-2 md:px-2 py-2 mb-4 max-w-md">
                <p class="font-ttnorms font-thin text-sm md:text-xl text-center md:text-left text-gray-50 dark:text-gray-300">
                    Promosikan brand suplemen <span class="font-bold">Musclefirst</span> dan raih penghasilan tambahan sebagai afiliasi!
                </p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 w-full h-auto">
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <a href="/affiliate/tiktok" class="flex flex-row justify-between items-center w-full h-auto p-8 rounded-xl border border-yellow-900">
                    <div class="flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0">
                        <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                            <h2 class="text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1">
                                Musclefirst
                            </h2>
                        </span>
                        <h1 class="font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0">
                            Affiliate
                        </h1>
                        <h1 class="font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0">
                            Tiktok
                        </h1>
                    </div>
                    <img src={Affiliate01} class="w-96 h-auto mt-0" alt="Affiliate Tiktok">
                </a>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <a href="/affiliate/shopee" class="flex flex-row justify-between items-center w-full h-auto p-8 rounded-xl border border-yellow-900">
                    <div class="flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0">
                        <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                            <h2 class="text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1">
                                Musclefirst
                            </h2>
                        </span>
                        <h1 class="font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0">
                            Affiliate
                        </h1>
                        <h1 class="font-blackttnorms font-black text-4xl text-white uppercase mb-4 md:mb-0">
                            Shopee
                        </h1>
                    </div>
                    <img src={Affiliate02} class="w-96 h-auto mt-0" alt="Affiliate Shopee">
                </a>
            </div>
        </div>
    </div>
</div>