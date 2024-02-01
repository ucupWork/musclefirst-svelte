<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';

    import { 
        recentRamadansQuery
    } from '$graphql/ramadan-queries';
    
    export async function load({ url }: LoadEvent) {
        const ramadans = await client.request(recentRamadansQuery);
        
		return {
            currentPage: url.pathname,
            props: { 
                ramadans: ramadans
            },
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import moment from 'moment';
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { IndexAgen } from '$components/section/list-agent/index';

    import Produk011 from '$images/special-event/ramadan/01/produk-01-1.webp';
    import Produk021 from '$images/special-event/ramadan/01/produk-02-1.webp';
    import Produk031 from '$images/special-event/ramadan/01/produk-03-1.webp';
    import Produk032 from '$images/special-event/ramadan/01/produk-03-2.webp';
    import Produk033 from '$images/special-event/ramadan/01/produk-03-3.webp';
    import LogoImage from '$images/site/logo-white.webp';

    let titleName = 'Spesial Event Ramadan';
    export let ramadans: any;
    const currentdate = moment().format("YYYY-MM-DD"); 
    const currenttime = moment().format("h:mm");
</script>

<SEO 
    title={titleName} 
    description={'Tetap bugar dan optimal selama bulan ramadan dengan suplemen terbaik dari Musclefirst'}
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex flex-col w-full justify-center items-center h-auto">
        
    <section class="flex flex-col md:flex-row justify-end md:justify-center items-center w-full h-screen md:h-screen bg-gradient-to-b from-gray-900 to-zinc-900 relative">
        
        <div class="absolute right-24 top-8 hidden md:flex justify-center items-center w-auto h-auto rounded-xl p-3 bg-gradient-to-b from-black to-zinc-900">
            <img src={LogoImage} alt="Musclefirst" class="w-10 h-auto">
        </div>
        <div class="absolute inset-x-0 top-0 flex md:hidden justify-center items-center w-full h-16 rounded-xl p-3 bg-gradient-to-b from-black to-zinc-900">
            <img src={LogoImage} alt="Musclefirst" class="w-10 h-auto">
        </div>
        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-auto px-4 md:px-24">
            <div class="flex flex-col w-full h-auto px-0 md:py-16 text-center relative overflow-hidden">
                <img src={Produk011} alt="RamdanImage" class="w-full h-full">
            </div>
            <div class="flex flex-col w-full h-auto px-6 py-12 md:py-16 mx-auto text-center relative">
                <div class="flex flex-col items-center w-full h-auto mx-auto">
                    <div class="w-auto h-auto max-w-md mx-auto mt-0 md:mt-4 text-left">
                        <h1 class="text-4xl md:text-8xl font-blackttnorms font-semibold text-white">
                            Menangkan Ramadan
                        </h1>
                        <p class="py-2 md:py-6 mb-4 md:mb-0 text-gray-300 leading-none">
                            Tetap bugar dan optimal selama bulan ramadan dengan suplemen terbaik dari Musclefirst.
                        </p>
                        <a href="https://shopee.co.id/Paket-Parsel-Menangkan-Ramadhan-Pro-Collafit-220gr-Pro-Casein-2Lbs-(900gr)-Pro-NRGY-10-Servings-i.8802988.22334476574?sp_atk=9b95ddb6-f84e-4fc2-961a-bf788a47080a&xptdk=9b95ddb6-f84e-4fc2-961a-bf788a47080a" target="_blank" rel="noreferrer nofollow" class="px-8 py-2 mt-6 md:mt-0 text-md md:text-lg font-black leading-5 text-center text-zinc-900 capitalize bg-gradient-to-r from-yellow-900 to-yellow-300 rounded-lg">
                            Dapatkan Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="get-product" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-black relative overflow-hidden py-8 md:py-16">
        
        <div class="grid grid-cols-3 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24">
            <div class="col-span-full md:col-span-1 w-auto h-auto">
                <!-- svelte-ignore a11y-media-has-caption -->
                <div class="flex justify-center items-center p-8 w-auto h-auto bg-transparent shadow overflow-hidden rounded-xl">
                    <video 
                        controls
                        width="356" 
                        height="633"
                        poster="https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/event/ramadan/cover_bantu_turki-01_pz2ik7.jpg">
                        <source src="https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/event/ramadan/m1-video-turkey_rydez3.webm" type="video/webm">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="col-span-full md:col-span-2 w-auto h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-zinc-900 dark:border-gray-700 bg-zinc-900 dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="flex flex-col md:flex-row justify-between items-center relative py-8 md:py-8 px-4 md:px-8">
                        <div class="flex flex-col w-full h-auto px-4 md:px-8 text-left">
                            <h1 class="text-2xl md:text-5xl font-bankghotic font-bold text-yellow-200 mb-2">
                                Musclefirst
                            </h1>
                            <h1 class="text-2xl md:text-5xl font-blackttnorms font-semibold text-zinc-100 mb-2 max-w-xl">
                                Mengucapkan Terimakasik Banyak
                            </h1>
                            <div class="flex flex-col md:flex-row space-x-4 items-start md:items-center w-full h-auto">
                                <p class="text-left text-zinc-200 dark:text-zinc-200 mb-4 md:mb-6">
                                    Kepada <span class="uppercase font-bold text-xs">Sobat Muscle</span> yang telah ikut berpartisipasi bersama <span class="uppercase font-bold text-xs">musclefirst</span>, mampu bekerja sama dengan tim penyelamat dan juga bantuan internasional untuk membantu korban gempa di turki.
                                </p>
                                <p class="text-left text-zinc-200 dark:text-zinc-200 mb-4 md:mb-6">
                                    Untuk <span class="uppercase font-bold text-xs">Sobat Muscle</span> yang belum berpartisipasi, jangan bersedih karena kalian juga bisa ikut berbagi kebaikan dengan membeli parsel ramadan, karena satu paresl menangkan ramadan sama dengan satu kebaikan bagi teman-teman kita yang membutuhkan.
                                </p>
                            </div>
                            <a href="https://shopee.co.id/Paket-Parsel-Menangkan-Ramadhan-Pro-Collafit-220gr-Pro-Casein-2Lbs-(900gr)-Pro-NRGY-10-Servings-i.8802988.22334476574?sp_atk=9b95ddb6-f84e-4fc2-961a-bf788a47080a&xptdk=9b95ddb6-f84e-4fc2-961a-bf788a47080a" target="_blank" rel="noreferrer nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-black before:border before:border-zinc-900 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-200 dark:text-white">
                                Selengkapnya
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="flex flex-col md:flex-row justify-start md:justify-start items-start w-full h-auto md:h-auto bg-zinc-900 relative py-8">
        
        <div class="flex flex-col justify-start items-start w-full h-auto px-4 md:px-24 py-16 md:py-0">
            <div class="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end w-full h-auto px-6 md:px-0 mb-4 md:mb-8">
                <div class="flex flex-col w-auto h-auto -space-y-1">
                    <h1 class="font-blackttnorms font-bold text-white text-2xl md:text-4xl">Jadwal Imsakiyah</h1>
                    <h1 class="font-blackttnorms font-bold text-white text-2xl md:text-4xl">Ramadan <span class="text-yellow-200">1444 H</span></h1>
                </div>
                <span class="font-ttnorms font-medium text-zinc-100 text-lg md:text-xl">Wilayah Jakarta & Sekitarnya</span>
            </div>
            <div class="w-full h-auto overflow-auto border border-gray-900 dark:border-gray-700 md:rounded-lg shadow-xl shadow-gray-800 px-4 md:px-8">

                <table class="min-w-full divide-y divide-gray-900 dark:divide-gray-700">
                    <thead class="bg-zinc-900 dark:bg-gray-800">
                        <tr>
                            <th scope="col" class="px-8 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                <button class="flex items-center gap-x-3 focus:outline-none">
                                    <span>Hari</span>
                                </button>
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Tanggal
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Imsak
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Subuh
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Terbit
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Dhuha
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Zuhur
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Ashar
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Maghrib
                            </th>

                            <th scope="col" class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-yellow-200 dark:text-gray-400">
                                Isya
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-zinc-800 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {#each ramadans.ramadans as list (list.id)}
                        <tr class="w-full h-full {currentdate === list.date ? 'bg-zinc-900' : ''}">
                            <td class="px-8 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.title}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.date}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.imsak}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.subuh}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.terbit}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.dhuha}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.zuhur}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.ashar}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.maghrib}
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div class="inline px-0 py-1 text-sm rounded-full {currentdate === list.date ? 'font-bold text-yellow-200' : 'font-normal text-zinc-50'}">
                                    {list.isya}
                                </div>
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>

            </div>
        </div>
    </section>

    <section id="get-product" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-zinc-900 relative overflow-hidden py-8 md:py-16">
        <div class="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end w-full h-auto px-10 md:px-24 mb-4 md:mb-8">
            <div class="flex flex-col justify-start items-start text-left">
                <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Parsel Menangkan</h2>
                <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Ramadan</span> 2023</h2>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24">
            <div class="col-span-full w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-gray-900 dark:border-gray-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-gray-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="flex flex-col md:flex-row justify-between items-center relative py-8 md:py-0 px-4">
                      <img
                        src={Produk021}
                        width="512"
                        height="512"
                        class="m-auto w-[512px]"
                        alt="tanzanite illustration"
                      />
                      <div class="flex flex-col w-full h-auto px-4 md:px-8 text-left">
                        <h1 class="text-2xl md:text-5xl font-blackttnorms font-semibold text-zinc-50 mb-2">
                            Menangkan Ramadan
                        </h1>
                        <p class="text-left text-zinc-200 dark:text-zinc-300 mb-4 md:mb-6 max-w-xl">
                            Dapatkan kesempatan menarik untuk meningkatkan body goals planner kamu di bulan ramadan bersama <span class="uppercase font-bold text-xs">musclefirst</span>, tersedia untuk paket bulking, cutting dengan harga terjangkau loh, selengkapnya klik tombol dibawah ini.
                        </p>
                        <a href="https://shopee.co.id/Paket-Parsel-Menangkan-Ramadhan-Pro-Collafit-220gr-Pro-Casein-2Lbs-(900gr)-Pro-NRGY-10-Servings-i.8802988.22334476574?sp_atk=9b95ddb6-f84e-4fc2-961a-bf788a47080a&xptdk=9b95ddb6-f84e-4fc2-961a-bf788a47080a" target="_blank" rel="noreferrer nofollow" class="relative flex h-11 w-64 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-zinc-800 before:border before:border-zinc-900 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                          <span class="relative text-base font-semibold text-zinc-100 dark:text-white">
                              Dapatkan Sekarang
                          </span>
                        </a>
                      </div>
                      
                        <div class="absolute right-4 md:right-8 top-4 md:top-8 flex justify-center items-center w-auto h-auto rounded-xl p-3 bg-gradient-to-b from-zinc-900 to-black">
                            <img src={LogoImage} alt="Musclefirst" class="w-8 md:w-10 h-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="get-product" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-zinc-900 relative overflow-hidden py-8 md:py-16">
        <div class="grid grid-cols-3 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24">

            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-zinc-900 dark:border-gray-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-gray-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <div class="flex flex-row justify-between items-center">
                            <h5 class="text-xl font-blackttnorms font-semibold text-zinc-50 dark:text-white">
                                Pro Casein
                            </h5>
                            <div class="flex justify-center items-center w-auto h-auto rounded-xl p-2 mb-2 bg-gradient-to-b from-black to-zinc-900">
                                <img src={LogoImage} alt="Musclefirst" class="w-8 h-auto">
                            </div>
                        </div>
                        <img
                            src={Produk031}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="tanzanite illustration"
                        />
                        <p class="text-sm text-center text-gray-200 dark:text-gray-300">
                            Suplemen efektif membangun massa otot, menambah kekuatan otot, dan meningkatkan metabolisme tubuh.
                        </p>
                        <a href="https://shopee.co.id/Muscle-First-Pro-Gold-Casein-With-Egg-Power-2Lbs-M1-Whey-Protein-Suplemen-i.8802988.2559112272"  target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-zinc-800 before:border before:border-zinc-900 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-zinc-900 dark:border-gray-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-gray-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <div class="flex flex-row justify-between items-center">
                          <h5 class="text-xl font-blackttnorms font-semibold text-zinc-50 dark:text-white">
                              Pro Collafit
                          </h5>
                          <div class="flex justify-center items-center w-auto h-auto rounded-xl p-2 mb-2 bg-gradient-to-b from-black to-zinc-900">
                              <img src={LogoImage} alt="Musclefirst" class="w-8 h-auto">
                          </div>
                        </div>
                        <img
                            src={Produk032}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="tanzanite illustration"
                        />
                        <p class="text-sm text-center text-gray-200 dark:text-gray-300">
                            Cegah resiko penuaan dini dengan menjaga kesehatan dan kecantikan dari luar maupun dalam tubuh.
                        </p>
                        <a href="https://shopee.co.id/Muscle-First-Pro-Collafit-Collagen-Drink-220gr-Kolagen-Beauty-Drink-i.8802988.19575249995" target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-zinc-800 before:border before:border-zinc-900 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-zinc-900 dark:border-gray-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-gray-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <div class="flex flex-row justify-between items-center">
                          <h5 class="text-xl font-blackttnorms font-semibold text-zinc-50 dark:text-white">
                              Pro Nrgy
                          </h5>
                          <div class="flex justify-center items-center w-auto h-auto rounded-xl p-2 mb-2 bg-gradient-to-b from-black to-zinc-900">
                              <img src={LogoImage} alt="Musclefirst" class="w-8 h-auto">
                          </div>
                        </div>
                        <img
                            src={Produk033}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="tanzanite illustration"
                        />
                        <p class="text-sm text-center text-gray-200 dark:text-gray-300">
                            Suplemen efektif untuk meningkatkan fokus dan menambah energi untuk performa lebih baik.
                        </p>
                        <a href="https://shopee.co.id/Musclefirst-Pro-NRGY-Pre-Workout-Energy-Drink-minuman-gamers-10-Servings-Suplemen-Fitness-i.8802988.19326557130?sp_atk=5427715d-6532-4b98-a2c1-1ec3d4bf7046&xptdk=5427715d-6532-4b98-a2c1-1ec3d4bf7046" target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-zinc-800 before:border before:border-zinc-900 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="hidden md:grid grid-cols-3 gap-4 md:gap-2 w-full h-auto px-8 md:px-20 py-2 bg-black">
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center md:justify-start items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:instagram h-4 w-4 text-zinc-100" />
                <span class="text-xs font-bold text-white uppercase">Instagram | @musclefirst</span>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:facebook h-4 w-4 text-zinc-100" />
                <span class="text-xs font-bold text-white uppercase">Facebook Page | Musclefirst</span>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto px-2 py-2 md:py-0 border md:border-none border-black">
            <div class="flex flex-row justify-center md:justify-end items-center md:space-x-4 w-full h-auto text-center">
                <div class="hidden md:block i-bi:facebook h-4 w-4 text-zinc-100" />
                <span class="text-xs font-bold text-white uppercase">Facebook Group | Komunitas Musclefirst</span>
            </div>
        </div>
    </div>

    <section class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-900 relative overflow-hidden">
        <div class="w-full h-auto flex flex-col justify-center items-center px-2 md:px-16 z-0">               
            <div class="w-full h-auto flex justify-center items-center">
                <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center">
                    <span class="text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-4xl">{'Temukan Agen Tedekat di Kota mu'}</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white leading-none text-center">
                        <span class="block uppercase max-w-2xl">{'Musclefirst Menangkan Ramadan'}</span> 
                    </h2>
                </div>
            </div>
            <IndexAgen colorType={'default'} top={true} bottom={false} id="list-agent" classes="bg-zinc-900" />
        </div>
    </section>
</div>