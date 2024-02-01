<script lang="ts">
    export let title: string;
</script>

<section class="flex justify-center items-center w-full h-auto py-16 md:py-16 bg-black relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-start z-0">
        <div class="flex flex-col justify-center items-center w-auto h-auto py-2 md:py-4 px-8 md:px-24">
            <h1 class="items-center text-3xl md:text-4xl font-black font-blackttnorms text-white leading-none uppercase">
                {@html title}
            </h1>
        </div>
        <div class="grid grid-cols-3 gap-2 md:gap-4 w-full h-auto px-8 md:px-24 pt-16">
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative">
                <div class="flex flex-col space-y-4 justify-center items-center w-full h-auto">
                    <div class="flex flex-col w-full h-auto space-y-4 justify-start items-start">
                        <span class="font-black text-lg uppercase text-white">Protein Mudah Diserap Tubuh</span>
                    </div>
                    <div class="flex flex-row w-full h-auto justify-start items-center space-y-2">
                        <div class="flex flex-col w-full justify-start items-start space-y-2">
                            <p class="leading-relaxed text-left text-md text-gray-100">
                                Suplemen Muscle First telah melalui filtrasi sehingga menghasilkan kandungan yang berkualitas tinggi dan cepat diserap oleh tubuh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative">
                <div class="flex flex-col space-y-4 justify-center items-center w-full h-auto">
                    <div class="flex flex-col w-full h-auto space-y-4 justify-start items-start">
                        <span class="font-black text-lg uppercase text-white">Komposisi Terbaik</span>
                    </div>
                    <div class="flex flex-row w-full h-auto justify-start items-center space-y-2">
                        <div class="flex flex-col w-full justify-start items-start space-y-2">
                            <p class="leading-relaxed text-left text-md text-gray-100">
                                Susu protein <span class="font-bold">MUSCLEFIRST</span> memiliki protein yang tinggi dan rendah lemak, sehingga bisa memenuhi kebutuhan protein harianmu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto bg-transparent hover:bg-zinc-900 border border-zinc-900 shadow p-6 md:p-8 relative">
                <div class="flex flex-col space-y-4 justify-center items-center w-full h-auto">
                    <div class="flex flex-col w-full h-auto space-y-4 justify-start items-start">
                        <span class="font-black text-lg uppercase text-white">Hemat Uang & Waktu</span>
                    </div>
                    <div class="flex flex-row w-full h-auto justify-start items-center space-y-2">
                        <div class="flex flex-col w-full justify-start items-start space-y-2">
                            <p class="leading-relaxed text-left text-md text-gray-100">
                                Susu whey <span class="font-bold">MUSCLEFIRST</span> mengandung 27 gram protein per serving hampir setara dengan 300 gram daging sapi tanpa lemak atau 135 gram ikan salmon mentah. MUSCLEFIRST menyajikan protein dalam bentuk bubuk sehingga mudah diolah tubuh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>