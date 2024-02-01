<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    // import { listAffiliateData } from '$contents/list-affiliate';
    import Affiliate01 from '$images/affiliate/img-01.png';
</script>

<SEO 
    title="Cara Menjadi Affiliate Tiktok Musclefirst" 
    description="Keuntungan menjadi affiliator MUSCLEFIRST di TikTok , potensi penghasilan tambahan sebanyak 10% dan berkesempatan memenangkan hadiah JUTAAN RUPIAH serta mendapatkan manfaat lainnya dari program afiliasi MUSCLEFIRST"
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex flex-col bg-zinc-100 dark:bg-zinc-900 justify-center items-start w-full h-auto py-4 md:py-8 px-0 md:px-8">
    <div class="grid grid-cols-12 md:gap-0 justify-center items-center w-full h-auto bg-zinc-800 dark:bg-gray-800 md:py-0 relative">
        <div class="col-span-full w-full h-auto">
            <div class="flex w-full min-h-screen bg-zinc-900 dark:bg-gray-900 rounded-br-4xl overflow-hidden relative">
                <div class="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center w-full h-screen md:h-auto px-6 py-16 md:py-16 md:px-0 overflow-hidden z-10">
                    <div class="flex flex-col w-full h-auto justify-center md:justify-start items-center md:items-start relative pr-0 md:pr-32 z-0">
                        <img src={Affiliate01} class="w-full h-auto mt-0" alt="Affiliate Tiktok">
                    </div>
                    <div class="flex flex-col w-full md:w-full h-auto">
                        <div class="flex flex-col justify-center md:justify-center items-center md:items-start text-center md:text-left w-full md:w-auto h-auto -space-y-1 mb-0">
                            <div class="flex flex-row space-x-2 w-auto h-auto pl-4">
                                <h2 class="font-bold text-xl uppercase text-amber-900 md:text-amber-400">Cara</h2>
                                <h2 class="font-black text-xl uppercase text-amber-200">Menjadi</h2>
                            </div>
                            <h1 class="font-blackttnorms font-black text-4xl md:text-7xl text-white uppercase mb-4 md:mb-0">
                                Affiliate
                            </h1>
                            <h1 class="font-blackttnorms font-black text-4xl md:text-7xl text-white uppercase mb-4 md:mb-0">
                                Tiktok
                            </h1>
                            <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                                <h2 class="text-amber-500 font-bankghotic font-black text-4xl dark:text-white mb-1">
                                    Musclefirst
                                </h2>
                            </span>
                        </div>
                        <div class="hidden md:flex w-full md:w-auto h-auto bg-transparent px-2 md:px-2 py-2 mb-4 max-w-md">
                            <p class="font-ttnorms font-thin text-sm md:text-xl text-center md:text-left text-gray-50 dark:text-gray-300">
                                Promosikan brand suplemen <span class="font-bold">Musclefirst</span> dan raih penghasilan tambahan sebagai afiliasi di <span class="font-bold">Tiktok</span>!
                            </p>
                        </div>
            
                        <div class="flex flex-col md:flex-row pl-2">
                            <button type="button" title="Start buying" class="group w-full md:w-64 py-3 px-8 text-center transition bg-gradient-to-r from-amber-900 to-amber-500 rounded-full shadow">
                                <span class="block text-gray-50 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                    Selengkapnya
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <!-- <div class="col-span-full flex flex-col w-full h-auto">
            <div class="flex w-full h-auto bg-zinc-800 dark:bg-gray-800 overflow-hidden relative">
                <div class="flex flex-col w-full h-auto space-y-4 text-gray-500 px-4 md:px-12 lg:px-24 py-16">
                    <div
                        class="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-0 text-center md:flex md:text-left lg:items-center lg:gap-16 px-4 md:px-16"
                    >   
                        <div class="-space-y-6 md:-space-y-2 mb-2 md:mb-0 w-auto">
                            <h1 class="font-blackttnorms font-black text-4xl md:text-6xl text-white uppercase mb-4 md:mb-0">
                                Leaderboard
                            </h1>
                            <div class="flex flex-row space-x-4 w-auto h-auto">
                                <h1 class="font-blackttnorms font-black text-4xl md:text-6xl text-amber-500 uppercase mb-4 md:mb-0">
                                    Tiktok
                                </h1>
                                
                                <h1 class="font-blackttnorms font-black text-4xl md:text-6xl text-white uppercase mb-4 md:mb-0">
                                    Affiliate
                                </h1>
                            </div>
                            <span class="text-xl font-black text-gray-50">
                                Of The 2 Week
                            </span>
                        </div>
                        {#each listAffiliateData as affiliate}
                            {#if affiliate.sequence}
                                {#if affiliate.sequence === 1}
                                <div class="self-center flex flex-col justify-center items-center w-auto h-auto">
                                    <div class="i-bi:arrow  -up-square-fill w-8 h-8 text-yellow-200" />
                                    <div class="flex w-48 h-48 rounded-xl bg-zinc-50 shadow mb-8 md:mb-8 p-2 relative">
                                        <img class="object-cover object-center rounded-xl" src={affiliate.profilePicture} alt={affiliate.username}>
                                        <div class="absolute inset-x-0 -bottom-4 flex justify-center items-center w-full h-auto">
                                            <div class="flex items-center w-12 h-12 bg-yellow-500 border-2 border-zinc-900 rounded-full">
                                                <span class="mx-auto font-black text-zinc-50">1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="font-bold text-zinc-50">{affiliate.username}</span>
                                </div>
                                {/if}
                            {/if}
                        {/each}
                    </div>
                    
                    <div class="flex flex-col space-y-2 w-full h-auto px-4 py-4">
                        <div class="flex flex-row justify-between items-center w-full h-auto bg-zinc-900 rounded-xl p-4 shadow-xl">
                            <span class="text-md font-black text-gray-50">
                                Rank Point
                            </span>
                            <div class="flex flex-row items-center w-auto h-auto space-x-4">
                                <span class="font-black uppercase text-gray-50"></span>
                                <div class="hidden md:block rounded-xl w-auto h-auto bg-green-500 shadow p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4 text-zinc-900 bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col w-full h-auto space-y-1 md:space-y-2">
                            {#each listAffiliateData as affiliate}
                            <div class="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full h-auto bg-white rounded-xl p-4 
                                {affiliate.sequence === 1 ? 'bg-zinc-900 border border-yellow-500' : ''}
                                {affiliate.sequence === 2 ? 'bg-zinc-900 border border-zinc-400' : ''}
                                {affiliate.sequence === 3 ? 'bg-zinc-900 border border-yellow-800' : ''}">
                                <div class="absolute -left-6 inset-y-0 flex justify-center items-center w-auto h-full">
                                    {#if affiliate.sequence === 1}
                                    <span class="animate-ping absolute inline-flex h-8 w-8 rounded-xl bg-yellow-400 opacity-75"></span>
                                    <div class="animate-bounce flex w-8 h-8 rounded-xl bg-yellow-500">
                                        <span class="font-bold m-auto text-zinc-900">1</span>
                                    </div>
                                    {/if}
                                    {#if affiliate.sequence === 2}
                                    <div class="flex w-8 h-8 rounded-xl bg-zinc-500">
                                        <span class="font-bold m-auto text-zinc-900">2</span>
                                    </div>
                                    {/if}
                                    {#if affiliate.sequence === 3}
                                    <div class="flex w-8 h-8 rounded-xl bg-yellow-800">
                                        <span class="font-bold m-auto text-zinc-900">3</span>
                                    </div>
                                    {/if}
                                </div>
                                <div class="flex flex-row items-center w-auto h-auto space-x-4 mb-4 md:mb-0">
                                    <div class="rounded-xl w-16 h-16 bg-zinc-50 shadow p-0">
                                        <img class="object-cover object-center rounded-xl" src={affiliate.profilePicture} alt={affiliate.username}>
                                    </div>
                                    <span class="text-md font-bold {affiliate.sequence ? 'text-gray-50' : 'text-gray-900' }">
                                        {affiliate.username}
                                    </span>
                                </div>
                                <div class="flex flex-row justify-end items-end md:items-center w-full md:w-auto h-auto space-x-4">
                                    {#if affiliate.sequence === 1}
                                        <div class="i-ph:crown w-6 h-6 text-yellow-200" />
                                    {/if}
                                    <span class="font-black uppercase {affiliate.sequence ? 'text-gray-50' : 'text-gray-900' }">
                                        {affiliate.point} M
                                    </span>
                                </div>
                            </div>
                            {/each}
                        </div>
                    </div>
                </div>            
            </div>
        </div> -->
        <div class="col-span-full flex flex-col w-full h-auto">
            <div class="flex w-full h-auto bg-zinc-900 dark:bg-gray-900 overflow-hidden relative">
                <div class="container m-auto space-y-8 text-gray-500 px-4 md:px-12 lg:px-24 py-16">
                    <div
                        class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16 px-4"
                    >
                        <div class="mb-6 space-y-6 md:mb-0 w-auto">
                            <h1 class="text-4xl font-black text-white md:text-5xl dark:text-white uppercase">
                                Halo Sobat <span class="text-amber-500 dark:text-amber-300">Muscle</span>
                            </h1>
                            <p class="text-md text-gray-100 dark:text-gray-300 max-w-xl">
                                Kami mengundang sobat muscle untuk membuat video promosi dari pengalaman kamu, menggunakan produk <span class="font-bold uppercase">Musclefirst</span>.
                            </p>
                        </div>
                        <div class="flex flex-wrap gap-6">
                            <a
                                href="https://chat.whatsapp.com/H8Urj4iUJb2A9YtdamQKkM"
                                target="_blank"
                                rel="noreferrer nofollow"
                                class="relative flex h-12 w-full md:w-64 items-center justify-center px-8 bg-gradient-to-r from-amber-900 to-amber-500 border border-amber-900 rounded-full"
                            >
                                <span
                                class="relative text-base font-semibold text-white dark:text-white"
                                >Gabung Sekarang</span
                                >
                            </a>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        <div class="col-span-full flex flex-col w-full h-auto">
            <div class="flex w-full h-auto bg-zinc-800 dark:bg-gray-800 overflow-hidden relative">
                <div class="container flex flex-col m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-24 py-16">
                    <div
                        class="flex justify-center md:justify-between items-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16 px-4"
                    >
                        <div class="mb-6 space-y-6 md:mb-0 w-auto">
                            <h1 class="text-4xl font-bold text-white md:text-5xl dark:text-white">
                                Benefit <span class="text-amber-500 dark:text-amber-300 font-black">10% ++</span>
                            </h1>
                            <p class="text-lg text-gray-100 dark:text-gray-300 max-w-2xl">
                                Keuntungan menjadi afiliasi <span class="font-bold uppercase">Musclefirst</span> di TikTok, potensi penghasilan tambahan sebanyak 10% dan berkesempatan memenangkan hadiah
                                JUTAAN RUPIAH serta mendapatkan manfaat lainnya dari program afiliasi <span class="font-bold uppercase">Musclefirst</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start items-start w-full h-auto bg-transparent">
                        <div class="w-full h-auto py-4 px-4">
                            <h1 class="font-black text-2xl text-amber-500 uppercase">Apa yang akan kamu dapatkan ?</h1>
                        </div>
                        <div class="flex flex-col space-y-2 w-full h-auto px-4 py-4">
                            <div class="flex flex-row justify-start items-center bg-white rounded-xl p-4 shadow-xl">
                                <div class="hidden md:block rounded-full w-4 h-4 bg-zinc-900 mr-4"></div>
                                <p class="text-sm text-gray-900 max-w-2xl">
                                    Sample gratis <span class="font-bold uppercase">Musclefirst</span> terbaik! <span class="font-bold uppercase">Halal, BPOM, SO 22000, HACCP dan sudah Labdoor!</span>
                                </p>
                            </div>
                            
                            <div class="flex flex-row justify-start items-center bg-white rounded-xl p-4 shadow-xl">
                                <div class="hidden md:block rounded-full w-4 h-4 bg-zinc-900 mr-4"></div>
                                <p class="text-sm text-gray-900 max-w-2xl">
                                    Peluang untuk memenangkan hadiah <span class="font-bold uppercase">jutaan</span> rupiah
                                </p>
                            </div>
                            
                            <div class="flex flex-row justify-start items-center bg-white rounded-xl p-4 shadow-xl">
                                <div class="hidden md:block rounded-full w-4 h-4 bg-zinc-900 mr-4"></div>
                                <p class="text-sm text-gray-900 max-w-2xl">
                                    Komisi tinggi untuk setiap penjualan produk <span class="font-bold uppercase">Musclefirst</span>
                                </p>
                            </div>
                            
                            <div class="flex flex-row justify-start items-center bg-white rounded-xl p-4 shadow-xl">
                                <div class="hidden md:block rounded-full w-4 h-4 bg-zinc-900 mr-4"></div>
                                <p class="text-sm text-gray-900 max-w-2xl">
                                    Akses ke bahan pemasaran dan dukungan ahli untuk membantu kamu, memasarkan produk dengan lebih efektif
                                </p>
                            </div>
                            
                            <div class="flex flex-row justify-start items-center bg-white rounded-xl p-4 shadow-xl">
                                <div class="hidden md:block rounded-full w-4 h-4 bg-zinc-900 mr-4"></div>
                                <p class="text-sm text-gray-900 max-w-2xl">
                                    Menjadi <span class="font-bold uppercase">Musclefirst Team</span> dengan <span class="font-bold uppercase">Exposure</span> tinggi serta berkesempatan mendapat dukungan dari <span class="font-bold uppercase">CEO Musclefirst</span>, mulai dari support produk, gala dinner, gathering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        <div class="col-span-full flex flex-col w-full h-auto">
            <div class="flex w-full h-auto bg-zinc-900 dark:bg-gray-900 overflow-hidden relative">
                <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-24 py-16">
                    <div
                        class="flex justify-center md:justify-between items-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16 px-4"
                    >
                        <div class="mb-6 space-y-6 md:mb-0 w-auto">
                            <p class="text-md text-gray-100 dark:text-gray-300 max-w-xl">
                                Terimakasih telah mempercayai <span class="font-bold uppercase">Musclefirst</span>, dan semoga kamu bisa mendapatkan hasil yang maksimal dari penggunaan produk kami.
                            </p>
                            <div class="flex flex-col -space-y-2 w-auto h-auto">
                                <span class="text-2xl font-bold text-amber-500 dark:text-white font-bankghotic">Musclefirst</span>
                                <span class="text-xl text-white font-bankghotic">Be The First</span>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
</div>