<script lang="ts">
    import { tippy } from '$utils/tippy';
    import { blogList } from '$contents/blog-page/list.blog';

    import MediaArtikelSix from '$images/vendor/blog-6-media-artikel.webp'
    import MediaArtikelSeven from '$images/vendor/blog-7-media-artikel.webp'

    export let id: string;
    export let styleBlog: string;
    export let HeaderCondition: boolean;
</script>
<div id={id} class="w-full sm:h-auto md:h-auto bg-transparent dark:bg-zinc-900 relative md:px-0 sm:py-0 md:py-12">
    {#if HeaderCondition}
    <div  class="w-full flex flex-col pt-8 md:pt-0">
        <div  class="w-full container mx-auto md:text-left text-center px-0 md:px-8 py-4 flex flex-col justify-center items-center">
            <div  class="w-full flex flex-col md:flex-row items-center md:items-start justify-center">
                <div  class="flex flex-col space-y-4 w-full mb-4">
                    <h1 class="font-blackttnorms tracking-tighter w-full whitespace-pre-line text-5xl font-black text-center md:text-left text-zinc-900 dark:text-white">
                        {'Artikel di Media'}
                    </h1>
                    <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-zinc-900 dark:text-white text-md tracking-loose max-w-md">
                        {'Seputar informasi dan tips untuk tambah pengetahuan kamu tentang Musclefirst dan dunia work out'}
                    </p>
                </div>
                <div  class="w-full flex justify-center md:justify-end items-end pb-6">
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'All Blog - Muscle First'}}  href="/" class="mx-1 text-orange-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/if}

    <div  class="flex flex-col w-full h-auto justify-center items-center px-0 lg:px-8 pt-4 pb-12">
        <div class="grid grid-cols-4 gap-2 md:gap-4 w-full h-auto mb-4 md:mb-8">

            <div class="{styleBlog === 'style-one' ? 'col-span-full md:col-span-2' : 'col-span-full'} w-full h-auto">
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        src={MediaArtikelSix}
                        alt={`Media Artikel Muscle First - VOI Indonesia`}
                        class="h-56 w-full object-cover"
                    />
                
                    <div class="w-full h-full bg-white dark:bg-black p-4 sm:p-6">
                        <div class="w-full md:w-auto h-auto">
                            <span class="block text-xs">
                                <small class="font-bold block text-gray-900 uppercase">VOI Indonesia</small>
                            </span>
                            <a rel="noreferrer nofollow external" target="_blank" href="https://voi.id/berita/220636/susu-protein-lokal-ini-ternyata-sudah-labdoor-a" class="uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600">
                                Susu Protein Lokal ini Ternyata Sudah Labdoor A+
                            </a>
                            <p class="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                Labdoor terus meng-update produk yang ada pada website setiap bulannya. Labdoor memilih produk yang akan diuji berdasarkan riset pasar suplemen populer ditambah pasaran langsung dari konsumen. Pada bulan Oktober, Labdoor mempublikasikan hasil pengujian pada susu protein lokal Indonesia merek Muscle First. Hasil yang telah keluar pun mendekati sempurna dengan score kualitas 99 atau setara dengan A+.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            
            <div class="{styleBlog === 'style-one' ? 'col-span-full md:col-span-2' : 'col-span-full'} w-full h-auto">
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        src={MediaArtikelSeven}
                        alt={`Media Artikel Muscle First - Health Detik`}
                        class="h-56 w-full object-cover"
                    />
                
                    <div class="w-full h-full bg-white dark:bg-black p-4 sm:p-6">
                        <div class="w-full md:w-auto h-auto">
                            <span class="block text-xs">
                                <small class="font-bold block text-gray-900 uppercase">Health Detik</small>
                            </span>
                            <a rel="noreferrer nofollow external" target="_blank" href="https://health.detik.com/berita-detikhealth/d-6348510/susu-protein-muscle-first-sudah-halal-lolos-bpom-dan-uji-labdoor" class="uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600">
                                Susu Protein Muscle First: Sudah Halal, Lolos BPOM dan Uji Labdoor
                            </a>
                            <p class="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                Kebiasaan masyarakat Indonesia yang mulai memperhatikan kesehatan tubuh selama pandemi ini secara tidak sengaja membuat mereka ingin berolahraga untuk menjaga kesehatan sekaligus membentuk tubuh ideal. 
                                Hadirnya brand suplemen fitnes Muscle First menjadi solusi menyenangkan untuk hidup sehat dan dapat dikonsumsi oleh penderita diabetes, sehingga menjadi brand 
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div  class="grid grid-cols-3 gap-2 md:gap-4 w-full h-auto mb-4 md:mb-8">
            
            {#each blogList as list }
                {#if list.status == true}
                <div class="col-span-full md:col-span-1 w-full h-auto">
                    <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            src={list.imgUrl}
                            alt={list.imgAlt}
                            class="h-56 w-full object-cover"
                        />
                    
                        <div class="w-full h-full bg-white dark:bg-black p-4 sm:p-6">
                            <div class="w-full md:w-auto h-auto">
                                <span class="block text-xs">
                                    <small class="font-bold block text-gray-900 uppercase">{list.vendor}</small>
                                </span>
                                <a rel="noreferrer nofollow external" target="_blank" href={list.urlLink} class="uppercase block mt-2 text-md font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600">
                                    {list.title}
                                </a>
                                <p class="hidden mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                    {list.summary}
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                {/if}
            {/each}
            
        </div>
    </div>
</div>

