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
    import { IndexAgen } from '$components/section/list-agent/index';

    import sixBackground from '$images/anniversary/sixtreme-main-bg.webp';
    import sixLogo from '$images/anniversary/sixtreme-logo.webp';
    import sixBarcode from '$images/anniversary/barcode.png';
    import sixDenah from '$images/anniversary/denah-lokasi.png';
    import Produk021 from '$images/special-event/ramadan/01/produk-02-1.webp';
    import LogoImage from '$images/site/logo-white.webp';

    let titleName = 'Sixstreme Anniversary';
    
    let sixtremeForm = {
        name: "",        
        email: "",
        jenkel: "",
        umur: "",
        telephone: "",
        info: "",
        komunitas: "",
    }
    
    $: prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSckUYOrG5pxN9XSTyICJXoXqQK9AEpUFBkehXb1Cp0_qp_yQA/viewform?usp=pp_url&entry.333035749=${sixtremeForm.name}&entry.347653200=${sixtremeForm.umur}&entry.1192249613=${sixtremeForm.telephone}&entry.643843235=${sixtremeForm.jenkel}&entry.1707897179=${sixtremeForm.komunitas}.791176416=${sixtremeForm.info}`
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
        
        <div class="z-10 absolute inset-x-4 top-8 hidden md:flex justify-between items-center w-auto h-auto rounded-xl py-3 px-4 md:px-4 bg-transparent">
            <div class="bg-gradient-to-b from-black to-zinc-900 p-4 rounded-xl">
                <img src={LogoImage} alt="Musclefirst" class="w-10 h-auto">
            </div>
            <h1 class="font-blackttnorms text-xl md:text-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-white uppercase z-10">Let's Celebrate</h1>
        </div>
        <div class="z-10 absolute inset-x-0 top-0 flex md:hidden justify-between items-center w-full h-16 rounded-b-xl py-3 px-4 bg-gradient-to-b from-black to-zinc-900">
            <div class="flex flex-col -space-y-3 w-auto h-auto">
                <span class="font-bankghotic font-black text-md text-white">Musclefirst</span>
                <span class="font-bankghotic font-black text-md text-white">Sixstreme</span>
            </div>
            <img src={LogoImage} alt="Musclefirst" class="w-10 h-auto">
        </div>
        <div class="flex flex-col justify-center items-center w-full h-full relative">
            <div class="flex flex-col justify-center items-center w-full h-full p-4 md:p-4 z-10">
                <img src={sixLogo} alt="Six Logo" class="w-96 md:w-auto h-auto md:h-full object-contain md:object-cover object-center">
            </div>
            <div class="absolute inset-0 flex flex-col w-full h-full overflow-hidden z-0">
                <img src={sixBackground} alt="JumbotronImage" class="w-full h-full object-cover object-center">
            </div>
        </div>
    </section>

    <section class="flex flex-col justify-center items-center w-full h-auto bg-gradient-to-t from-black to-zinc-900 relative py-8 md:py-16">
        <div class="flex flex-col w-full h-auto py-4 md:py-0 px-4 md:max-w-6xl">
            <div class="flex flex-col md:flex-row justify-center md:justify-between items-center w-auto md:w-full h-auto text-center md:text-left md:space-x-2 border border-orange-700 rounded-xl p-4">
                <h1 class="font-ttnorms font-normal text-4xl text-white">Sunday, <b>24</b>th <b>September</b> 2023</h1>
                <h1 class="font-ttnorms font-normal text-2xl md:text-4xl text-white">06:00 WIB - END</h1>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4 w-full h-auto py-4 md:py-8 md:px-32">
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-row w-full h-32 md:h-24 justify-between items-center bg-zinc-900 py-4 px-4 shadow-md shadow-orange-600">
                    <div class="w-auto h-auto p-4 rounded-xl border mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-gift" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                            <path d="M12 8l0 13"></path>
                            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"></path>
                            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col -space-y-2 w-auto h-auto text-right md:text-right">
                        <span class="uppercase font-ttnorms font-bold text-white">Exclusive</span>
                        <span class="uppercase font-ttnorms font-bold text-white">Anniversary</span>
                        <span class="uppercase font-ttnorms font-bold text-white">Suprise</span>
                    </div>
                </div>
            </div>

            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-row w-full h-32 md:h-24 justify-between items-center bg-zinc-900 py-4 px-4 shadow-md shadow-orange-600">
                    <div class="w-auto h-auto p-4 rounded-xl border mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-ball-football" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z"></path>
                            <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col -space-y-2 w-auto h-auto text-right md:text-right">
                        <span class="uppercase font-ttnorms font-bold text-white">Marathon</span>
                        <span class="uppercase font-ttnorms font-bold text-white">Classes</span>
                    </div>
                </div>
            </div>

            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-row w-full h-32 md:h-24 justify-between items-center bg-zinc-900 py-4 px-4 shadow-md shadow-orange-600">
                    <div class="w-auto h-auto p-4 rounded-xl border mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-tools-kitchen-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col -space-y-2 w-auto h-auto text-right md:text-right">
                        <span class="uppercase font-ttnorms font-bold text-white">Gourmet</span>
                        <span class="uppercase font-ttnorms font-bold text-white">Delicacies</span>
                    </div>
                </div>
            </div>

            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-row w-full h-32 md:h-24 justify-between items-center bg-zinc-900 py-4 px-4 shadow-md shadow-orange-600">
                    <div class="w-auto h-auto p-4 rounded-xl border mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-music" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M9 17v-13h10v13"></path>
                            <path d="M9 8h10"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col -space-y-2 w-auto h-auto text-right md:text-right">
                        <span class="uppercase font-ttnorms font-bold text-white">Live Music And</span>
                        <span class="uppercase font-ttnorms font-bold text-white">Entertainment</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center w-full h-auto px-4 bg-gradient-to-r from-orange-600 to-orange-900 py-4">
            <div class="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:max-w-6xl h-auto md:space-x-2 border border-orange-700 rounded-xl py-4 px-6">
                <div class="flex flex-col items-center md:items-start -space-y-2 md:space-y-0 w-auto h-auto mb-16 md:mb-0">
                    <h2 class="font-blackttnorms font-black text-2xl md:text-4xl uppercase text-white">Instant-Scan</h2>
                    <h2 class="font-blackttnorms font-black text-2xl md:text-4xl uppercase text-white">Untuk Temukan</h2>
                    <h2 class="font-blackttnorms font-black text-2xl md:text-4xl uppercase text-white">Lokasi</h2>
                </div>
                <img src={sixBarcode} alt="Barcode Anniversary" class="w-48 md:w-64 h-auto rounded-xl">
            </div>
        </div>
    </section>

    <section id="kol-list" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-black relative overflow-hidden py-0 md:py-0">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto relative py-8 md:py-8 px-4 md:px-32 bg-zinc-900">
            <div class="flex flex-col w-full h-auto px-0 md:px-4 text-left">
                <div class="flex flex-row justify-between items-center w-full h-auto py-4 mb-4">
                    <div class="flex flex-col w-auto h-auto">
                        <h2 class="font-black font-ttnorms text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Get Fit</span></h2>
                        <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Together</h2>
                    </div>
                    <div class="flex justify-center items-center w-auto h-auto rounded-xl p-3 bg-gradient-to-b from-zinc-900 to-black">
                        <img src={LogoImage} alt="Musclefirst" class="w-8 md:w-10 h-auto">
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 md:gap-4 w-full h-auto px-4 md:px-24">
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272664/Six%20Stream%20Anniversary/KOL/MF-THUMB_khu6fx.png'} alt="Kol 1" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272665/Six%20Stream%20Anniversary/KOL/MF-THUMB01_a7yrdn.png'} alt="Kol 2" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272665/Six%20Stream%20Anniversary/KOL/MF-THUMB02_kcf0no.png'} alt="Kol 3" class="w-full md:w-auto h-auto">
            </div>
        </div>
    </section>

    <section id="kol-list" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-black relative overflow-hidden py-0 md:py-0">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto relative py-8 md:py-8 px-4 md:px-32 bg-zinc-900">
            <div class="flex flex-col w-full h-auto px-0 md:px-4 text-left">
                <div class="flex flex-row justify-between items-center w-full h-auto py-4 mb-4">
                    <div class="flex flex-col w-auto h-auto">
                        <h2 class="font-black font-ttnorms text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Meet The</span></h2>
                        <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Guest Star</h2>
                    </div>
                    <div class="flex justify-center items-center w-auto h-auto rounded-xl p-3 bg-gradient-to-b from-zinc-900 to-black">
                        <img src={LogoImage} alt="Musclefirst" class="w-8 md:w-10 h-auto">
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-4 md:gap-4 w-full h-auto px-4 md:px-24">
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272665/Six%20Stream%20Anniversary/KOL/MF-THUMB03_zuncfk.png'} alt="Kol 4" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272666/Six%20Stream%20Anniversary/KOL/MF-THUMB04_hzlmlx.png'} alt="Kol 5" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272665/Six%20Stream%20Anniversary/KOL/MF-THUMB06_adibhs.png'} alt="Kol 6" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272665/Six%20Stream%20Anniversary/KOL/MF-THUMB05_znfl0e.png'} alt="Kol 7" class="w-full md:w-auto h-auto">
            </div>
        </div>
        <div class="grid grid-cols-5 md:gap-4 w-full h-auto px-4 md:px-24">
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272667/Six%20Stream%20Anniversary/KOL/MF-THUMB07_s4kwec.png'} alt="Kol 8" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272666/Six%20Stream%20Anniversary/KOL/MF-THUMB08_ngjuh6.png'} alt="Kol 9" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272667/Six%20Stream%20Anniversary/KOL/MF-THUMB09_g9gbdh.png'} alt="Kol 10" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272667/Six%20Stream%20Anniversary/KOL/MF-THUMB10_yedbcn.png'} alt="Kol 11" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272670/Six%20Stream%20Anniversary/KOL/MF-THUMB11_qmqjmw.png'} alt="Kol 12" class="w-full md:w-auto h-auto">
            </div>
        </div>
        <div class="grid grid-cols-5 md:gap-4 w-full h-auto px-4 md:px-24">
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272669/Six%20Stream%20Anniversary/KOL/MF-THUMB12_u3guub.png'} alt="Kol 13" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272670/Six%20Stream%20Anniversary/KOL/MF-THUMB13_yyr5eq.png'} alt="Kol 14" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272664/Six%20Stream%20Anniversary/KOL/MF-THUMB14_myhuvf.png'} alt="Kol 15" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272664/Six%20Stream%20Anniversary/KOL/MF-THUMB15_owh88y.png'} alt="Kol 16" class="w-full md:w-auto h-auto">
            </div>
            <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto border border-zinc-800">
                <img src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695272664/Six%20Stream%20Anniversary/KOL/MF-THUMB16_w0tppv.png'} alt="Kol 17" class="w-full md:w-auto h-auto">
            </div>
        </div>
    </section>
    
    <section id="get-product" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-black relative overflow-hidden py-8 md:py-16">
        <div class="grid grid-cols-3 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24 py-8 md:py-16">
            <div class="col-span-full w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="flex flex-col md:flex-row justify-between items-center relative py-8 md:py-8 px-4 md:px-8">
                        <div class="flex flex-col w-full h-auto px-0 md:px-4 text-left">
                            <div class="flex flex-row justify-between items-center w-full h-auto py-4">
                                <div class="flex flex-col w-auto h-auto">
                                    <h2 class="font-black font-bankghotic text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Musclefirst</span></h2>
                                    <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Roundown</h2>
                                </div>
                                <div class="flex justify-center items-center w-auto h-auto rounded-xl p-3 bg-gradient-to-b from-zinc-900 to-black">
                                    <img src={LogoImage} alt="Musclefirst" class="w-8 md:w-10 h-auto">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-start md:items-center w-full h-auto mb-4">
                                <div class="col-span-full md:col-span-4 flex flex-col w-full h-auto">
                                    <div class="bg-orange-900 w-full h-auto py-2 px-4 text-left md:text-left">
                                        <h2 class="font-bold font-blackttnorms uppercase text-2xl text-white">Time</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">06:00 - 07:00 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:00 - 07:15 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:15 - 07:25 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:25 - 07:30 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:30 - 07:35 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:35 - 07:40 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:40 - 07:45 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">07:45 - 08:00 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">08:00 - 08:10 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">08:10 - 08:20 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">08:20 - 10:20 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">10:20 - 11:30 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">11:30 - 11:45 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">11:45 - 12:00 WIB</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-left">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">12:00 - 12:30 WIB</h2>
                                    </div>
                                </div>
                                <div class="col-span-full md:col-span-8 flex flex-col w-full h-auto">
                                    <div class="bg-orange-900 w-full h-auto py-2 px-4 text-left md:text-right">
                                        <h2 class="font-bold font-blackttnorms uppercase text-2xl text-white">Activity</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Registration</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Opening Act - Cheerleaders</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Opening Act - HipHop Dance</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Menyanyikan Indonesia Raya</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Opening MC</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Opening Speech Dari Musclefirst</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Opening Speech Dari Kemenpora</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Sesi Pemotongan Dan Penyerahan Kue</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Sesi Penyerahan Bantuan Suplemen</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Traditional Dance Performance</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Class Gym Marathon</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Free Time</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Pengumuman Pemenang Challenge</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">Closing</h2>
                                    </div>
                                    <div class="bg-transparent border-b w-full h-auto py-2 px-0 md:px-4 text-left md:text-right">
                                        <h2 class="font-bold font-ttnorms uppercase text-xs md:text-xl text-white">DJ Performance & Launch</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="roadmap" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-black relative overflow-hidden py-4 md:py-4 px-4 md:px-24 rounded-xl">
            <div class="w-full h-auto p-4 md:p-8 border border-orange-800 rounded-xl">
                <img
                    src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695280219/Six%20Stream%20Anniversary/roadmap_okpgbp.webp'}
                    width="1080"
                    height="1080"
                    class="m-auto w-full h-auto rounded-xl"
                    alt="Roadmap"
                />
            </div>
        </div>

        <div class="w-full h-auto bg-gradient-to-r from-orange-600/50 to-orange-900/50 py-8 md:px-4">
            <img src={sixDenah} alt="Denah Anniversary" class="w-full h-auto">
        </div>
        
        <div class="grid grid-cols-4 md:grid-cols-5 gap-2 w-full h-auto justify-center items-center z-0 px-4 md:px-24 py-4 md:py-16">
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092874/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-08_nj8erf.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Indomaret"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092870/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-03_jrd5pe.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Granova"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092873/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-07_sanwqa.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Eiger Tropical Adventure"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092869/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-10_ub7qil.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Giggly Coco"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092869/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-09_rnxd2f.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Oasis"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092871/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-06_df2qs7.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Heavenly blush"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092870/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-05_d7cdu5.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Techno Gym"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092869/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-01_imxebu.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Cypruz"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092869/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-02_tnhqe3.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Dapur Cokelat"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092869/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-11_hevffx.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Naia"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695092871/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-04_ernvf2.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Ecentio"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695268854/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-12_w0nkcs.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Tjap"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695268853/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-13_m7mmkf.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="L"
                    />
                </div>
            </div>
            <div class="col-span-2 md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695268854/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-14_hcs5ua.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Taisho"
                    />
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-auto h-auto">
                <div class="flex justify-center w-full h-32 rounded-xl p-4 border border-orange-800 shadow-xl">
                    <img
                        src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1695279566/Six%20Stream%20Anniversary/Sponsor/White/logo_sponsor_versi_white-15_khx7ek.png'}
                        width="100"
                        height="100"
                        class="m-auto w-32 h-auto"
                        alt="Taisho"
                    />
                </div>
            </div>
        </div>
    </section>

    <section id="fillForm" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-zinc-900 relative overflow-hidden py-8 md:py-16">
        
        <div class="flex flex-col w-full h-auto py-8 md:py-16 px-4 md:px-24">
            <div class="flex flex-col md:mt-4 p-8 md:p-12 bg-transparent rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500">
                <div class="flex flex-col justify-start items-start text-left mb-8">
                    <h2 class="font-black font-bankghotic text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Musclefirst</span></h2>
                    <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Sixstreme Form</h2>
                </div>
                <div class="grid grid-cols-2 gap-2 w-full h-auto">
                    <div class="col-span-full flex-1">
                        <label for="nama-lengkap" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Nama Lengkap</label>
                        <input type="text" bind:value={sixtremeForm.name} name="name" class="block w-full px-5 py-4 mt-2 text-zinc-50 bg-zinc-900 border rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-600 dark:focus:border-amber-600 focus:ring-amber-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="col-span-full flex-1">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Email</label>
                        <input type="text" bind:value={sixtremeForm.email} name="email" class="block w-full px-5 py-4 mt-2 text-zinc-50 bg-zinc-900 border rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-600 dark:focus:border-amber-600 focus:ring-amber-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 w-full h-auto mt-3">
                    <div class="col-span-full flex-1">
                        <label for="jenis-kelamin" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Jenis Kelamin</label>
                        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto gap-4">
                            <div class="flex items-center w-full md:w-auto">
                                <div class="flex justify-start items-center w-full md:w-80 bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                    <input bind:group={sixtremeForm.jenkel} value={'Laki - Laki'}  name="jenkel" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                    <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                        Laki-Laki
                                    </label>
                                </div>
                            </div>
                            <div class="flex items-center w-full md:w-auto">
                                <div class="flex justify-start items-center w-full md:w-80 bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                    <input bind:group={sixtremeForm.jenkel} value={'Perempuan'} name="jenkel" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                    <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                        Perempuan
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-full flex-1">
                        <label for="umur" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Umur</label>
                        <input type="number" bind:value={sixtremeForm.umur} name="umur" class="block w-full px-5 py-4 mt-2 text-zinc-50 bg-zinc-900 border rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-600 dark:focus:border-amber-600 focus:ring-amber-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div class="flex-1 mt-3">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Nomor Handphone</label>
                    <input type="text" bind:value={sixtremeForm.telephone} name="telephone" class="block w-full px-5 py-4 mt-2 text-zinc-50 bg-zinc-900 border rounded-xl dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-600 dark:focus:border-amber-600 focus:ring-amber-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="flex-1 mt-3">
                    <label for="komunitas" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Komunitas Tergabung</label>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full h-auto gap-4">
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Indo Runners'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Indo Runners
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Hoka Run'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Hoka Run
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'United Bike'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    United Bike
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={`Road Bike 'Commestudios'`} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Road Bike 'Commestudios'
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Monas Street Workout'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Monas Street Workout
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Magnus'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Magnus
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Komunitas Internal Kemenpora'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Komunitas Internal Kemenpora
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'KOL Invitation'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    KOL Invitation
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Basah 2gether'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Basah 2gether
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Naia Beauty Representation'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Naia Beauty Representation
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'TCC and Partners'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    TCC and Partners
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Meta Run'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Meta Run
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Eiger Rock Climbing'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Eiger Rock Climbing
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Agent Reseller Muscle First'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Agent Reseller Muscle First
                                </label>
                            </div>
                        </div>
                        <div class="col-span-full flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full h-auto bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.komunitas} value={'Other'} name="komunitas" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-1 mt-3">
                    <label for="info-acara" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-200">Sumber Informasi</label>
                    <div class="flex flex-col justify-between items-center w-full h-auto gap-4">
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Social Media Muscle First (Instagram / Tiktok)'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Social Media Muscle First (Instagram / Tiktok)
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Google'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Google
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Grup Komunitas'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Grup Komunitas
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Kerabat (Teman, Saudara, Keluarga)'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Kerabat (Teman, Saudara, Keluarga)
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Tempat Kerja'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Tempat Kerja
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-center w-full bg-zinc-900 border shadow rounded-xl py-2 px-4">
                                <input bind:group={sixtremeForm.info} value={'Other'} name="info" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                                <label for="remember" class="ml-3 w-auto block text-sm font-medium text-gray-50">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center w-full h-auto px-6 py-3 mt-3">
                    <a href="{prefilledLink}" class="flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                        <span class="font-bold text-white">Kirim</span>
                        <div class="i-bi:send-fill h-4 w-4 text-white" />
                    </a>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24">
            <div class="col-span-full w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="flex flex-col md:flex-row justify-between items-center relative py-8 md:py-0 px-4">
                        <img
                            src={Produk021}
                            width="512"
                            height="512"
                            class="m-auto w-[512px]"
                            alt="musclefirst"
                        />
                        <div class="flex flex-col w-full h-auto px-4 md:px-8 text-left">
                            <div class="flex flex-col justify-start items-start text-left mb-4">
                                <h2 class="font-black font-bankghotic text-2xl md:text-4xl text-zinc-50 uppercase"><span class="text-yellow-200">Musclefirst</span></h2>
                                <h2 class="font-black font-blackttnorms text-2xl md:text-4xl text-zinc-50 uppercase">Sixstreme 2023</h2>
                            </div>
                            <p class="text-left text-zinc-200 dark:text-zinc-300 mb-8 md:mb-16 max-w-xl">
                                Dapatkan penawaran istimewa selama bulan September ini dengan promo tebus murah Pro Nrgy, Pro BCAA, Pro Collafit dan FREE exclusive drawstring bag. Promo ini hanya berlaku selama bulan September, dan stok terbatas. So, jangan sampai ketinggalan, selengkapnya klik 'dapatkan sekarang' di bawah ini.
                            </p>
                            <div class="flex justify-center md:justify-end items-center md:items-end w-full h-auto">
                                <a href="/" target="_blank" rel="noreferrer nofollow" class="relative flex h-11 w-64 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span class="relative text-base font-semibold text-zinc-100 dark:text-white">
                                        Dapatkan Sekarang
                                    </span>
                                </a>
                            </div>
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
        <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0 px-4 md:px-24">

            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500"
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
                            src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1694504058/Six%20Stream%20Anniversary/KV_PROMO_LP_SIXTREME-01_mfdwx2.png'}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="musclefirst"
                        />
                        <a href="/"  target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <div class="flex flex-row justify-between items-center">
                          <h5 class="text-xl font-blackttnorms font-semibold text-zinc-50 dark:text-white">
                              Pro BCAA
                          </h5>
                          <div class="flex justify-center items-center w-auto h-auto rounded-xl p-2 mb-2 bg-gradient-to-b from-black to-zinc-900">
                              <img src={LogoImage} alt="Musclefirst" class="w-8 h-auto">
                          </div>
                        </div>
                        <img
                            src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1694504059/Six%20Stream%20Anniversary/KV_PROMO_LP_SIXTREME-02_krouhn.png'}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="musclefirst"
                        />
                        <a href="/" target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500"
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
                            src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1694504061/Six%20Stream%20Anniversary/KV_PROMO_LP_SIXTREME-03_bbltvr.png'}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="musclefirst"
                        />
                        <a href="https://shopee.co.id/Musclefirst-Pro-NRGY-Pre-Workout-Energy-Drink-minuman-gamers-10-Servings-Suplemen-Fitness-i.8802988.19326557130?sp_atk=5427715d-6532-4b98-a2c1-1ec3d4bf7046&xptdk=5427715d-6532-4b98-a2c1-1ec3d4bf7046" target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="group relative z-10 mx-auto w-full">
                    <div
                      aria-hidden="true"
                      class="absolute top-0 h-full w-full rounded-3xl border border-yellow-900 dark:border-yellow-700 bg-zinc-900 dark:bg-gray-800 shadow-xl shadow-orange-800 dark:shadow-none transition duration-500"
                    ></div>
                    <div class="relative space-y-8 p-8">
                        <div class="flex flex-row justify-between items-center">
                          <h5 class="text-xl font-blackttnorms font-semibold text-zinc-50 dark:text-white">
                              Drawstring Bag
                          </h5>
                          <div class="flex justify-center items-center w-auto h-auto rounded-xl p-2 mb-2 bg-gradient-to-b from-black to-zinc-900">
                              <img src={LogoImage} alt="Musclefirst" class="w-8 h-auto">
                          </div>
                        </div>
                        <img
                            src={'https://res.cloudinary.com/dyfxfdgsy/image/upload/v1694504060/Six%20Stream%20Anniversary/KV_PROMO_LP_SIXTREME-04_fmrqxo.png'}
                            width="512"
                            height="512"
                            class="m-auto w-full"
                            alt="musclefirst"
                        />
                        <a href="https://shopee.co.id/Musclefirst-Pro-NRGY-Pre-Workout-Energy-Drink-minuman-gamers-10-Servings-Suplemen-Fitness-i.8802988.19326557130?sp_atk=5427715d-6532-4b98-a2c1-1ec3d4bf7046&xptdk=5427715d-6532-4b98-a2c1-1ec3d4bf7046" target="_blank" rel="norefeere nofollow" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r from-orange-600 to-amber-900 rounded-xl before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-base font-semibold text-zinc-100 dark:text-white">Selengkapnya</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<section class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-zinc-900 relative overflow-hidden">
    <div class="w-full h-auto flex flex-col justify-center items-center px-2 md:px-16 z-0">               
        <div class="w-full h-auto flex justify-center items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center">
                <span class="text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-4xl">{'Temukan Agen Tedekat di Kota mu'}</span>
                <h2 class="text-3xl md:text-4xl font-black text-white leading-none text-center">
                    <span class="block uppercase max-w-2xl">{'Musclefirst Sixstreme Event'}</span> 
                </h2>
            </div>
        </div>
        <IndexAgen colorType={'default'} top={true} bottom={false} id="list-agent" classes="bg-zinc-900" />
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