<script lang="ts">
    export let title: string;
    export let subtitle: string;
    
    import BAReviewOne from '$images/review-grid/optimize/ba-rvg-1.webp'
    import BAReviewTwo from '$images/review-grid/optimize/ba-rvg-2.webp'
    import BAReviewThree from '$images/review-grid/optimize/ba-rvg-3.webp'
    import BAReviewFour from '$images/review-grid/optimize/ba-rvg-4.webp'
    import BAReviewFive from '$images/review-grid/optimize/ba-rvg-5.webp'
    import BAReviewSix from '$images/review-grid/optimize/ba-rvg-6.webp'
    import BAReviewSeven from '$images/review-grid/optimize/ba-rvg-7.webp'
    import BAReviewEight from '$images/review-grid/optimize/ba-rvg-8.webp'
</script>

<section class="flex flex-col justify-start items-center w-full h-auto py-12 md:py-16 bg-black relative overflow-hidden">
    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-center md:text-left px-8 md:px-24">
            <span class="font-bankghotic text-amber-600 font-bold text-2xl md:text-3xl uppercase">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-100 leading-none max-w-xs">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full h-auto px-8 md:px-24">
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent p-0">
                <div class="w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto">
                    <div class="grid md:grid-cols-5">
                        <img
                            src={BAReviewOne}
                            class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                            alt="KOL"
                            width="640"
                            height="422"
                            loading="lazy"
                        />
                        <div class="md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100">
                            <p class="text-sm">
                                <span class="font-serif">"</span> 
                                    Sejak menemukan suplemen musclefirst ini ke dalam rutinitas pasca-latihan, aku melihat peningkatan yang signifikan dalam pemulihan dan pertumbuhan otot. Tidak hanya itu rasanya enak. akhirnya aku bisa mengatakan bahwa suplemen protein dari musclefirst sempurna!
                                <span class="font-serif">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent p-0">
                <div class="w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto">
                    <div class="grid md:grid-cols-5">
                        <img
                            src={BAReviewTwo}
                            class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                            alt="KOL"
                            width="640"
                            height="422"
                            loading="lazy"
                        />
                        <div class="md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100">
                            <p class="text-sm">
                            <span class="font-serif">"</span> 
                                Sebagai seseorang dengan jadwal kerja yang padat, saya sering kesulitan menemukan waktu untuk menyiapkan makanan seimbang. Suplemen protein ini telah menjadi terobosan bagi saya.
                            <span class="font-serif">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent p-0">
                <div class="w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto">
                    <div class="grid md:grid-cols-5">
                        <img
                            src={BAReviewThree}
                            class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                            alt="KOL"
                            width="640"
                            height="422"
                            loading="lazy"
                        />
                        <div class="md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100">
                            <p class="text-sm">
                            <span class="font-serif">"</span> 
                                Menemukan suplemen protein berkualitas telah menjadi tantangan bagi saya. Produk ini telah melampaui ekspektasi saya. Sumber protein lengkap yang mendukung pemulihan otot.
                            <span class="font-serif">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent p-0">
                <div class="w-full h-auto p-2 rounded-3xl bg-zinc-900 shadow-md shadow-gray-600/10 dark:shadow-none md:mx-auto">
                    <div class="grid md:grid-cols-5">
                        <img
                            src={BAReviewSeven}
                            class="md:col-span-2 h-full w-full rounded-2xl object-cover"
                            alt="KOL"
                            width="640"
                            height="422"
                            loading="lazy"
                        />
                        <div class="md:col-span-3 flex justify-center items-center w-full h-full mx-auto space-y-6 p-6 text-left sm:p-8 text-zinc-100">
                            <p class="text-sm">
                            <span class="font-serif">"</span> 
                                Saya telah menjalani perjalanan penurunan berat badan selama setahun terakhir, dan suplemen protein ini telah menjadi bagian penting dari kesuksesan saya.
                            <span class="font-serif">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    <!-- <div class="flex justify-center items-end w-full h-full pt-4 md:pt-8 px-16 md:px-32">
        <a rel="noreferrer" href={'https://wa.me/6282353238430/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+dengan+produk+Muscle+First+ini+,+Saya+Dapat+Penawaran+Dari+Website%22&type=phone_number&app_absent=0'} target="_blank"  class="flex justify-between items-center leading-none text-center uppercase bg-gradient-to-r from-emerald-600 to-green-500 shadow-lg shadow-emerald-500/50 rounded-xl w-full md:w-full py-4 px-6">
            <span class="block text-xl font-black text-emerald-900">{'Pesan Disini'}</span> 
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-emerald-900 w-8 h-8 icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                </svg>
            </span>
        </a>
    </div> -->
</section>