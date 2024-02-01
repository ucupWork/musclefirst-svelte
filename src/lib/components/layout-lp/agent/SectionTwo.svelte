<script lang="ts">
	import {onMount} from 'svelte';

    export let id: string;
    export let title: string;
    export let subtitle: string;
    export let titlePart: string;
    
	onMount(() => {
        // Load
	})
</script>

<section {id} class="flex justify-center items-center w-full h-auto md:h-auto overflow-hidden bg-zinc-800 border-b border-zinc-900 relative">
    <div class="grid grid-cols-12 gap-0 md:gap-4 w-full h-auto md:h-auto justify-center items-center relative bg-center bg-cover bg-black py-12 md:py-16 md:px-16">
        <div class="col-span-full w-full h-auto flex flex-col md:flex-row space-y-0 md:space-y-0 justify-between items-start md:items-end md:px-8 mb-4 md:mb-8">
            <div class="flex flex-col -space-y-1 w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-amber-600 font-black font-blackttnorms text-4xl md:text-5xl uppercase">{title}</h2>
                <span class="text-zinc-50 font-black font-blackttnorms text-4xl md:text-5xl uppercase">{subtitle}</span>
            </div>
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <h2 class="text-zinc-500 font-black text-3xl md:text-4xl">{titlePart}</h2>
            </div>
        </div>
        <div class="col-span-full w-full h-auto flex justify-center md:justify-end items-center pb-16 md:pb-16">
            <div class="grid grid-cols-4 gap-0 md:gap-8 w-auto justify-center items-center md:items-end h-auto px-8 space-y-4 md:px-8">
                <div class="col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative">
                    <div class="absolute -top-4 -right-4 w-auto h-auto">
                        <div class="flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12">
                            <span class="font-black text-white">1</span>
                        </div>
                    </div>
                    <p class="leading-relaxed text-base text-gray-100 md:text-lg">
                        Protein itu seperti makanan untuk otot, dengan protein maka otot akan lebih mudah terbentuk. Normalnya kebutuhan protein orang yang sedang gym adalah dua kali berat badan
                    </p>
                </div>
                <div class="col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative">
                    <div class="absolute -top-4 -right-4 w-auto h-auto">
                        <div class="flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12">
                            <span class="font-black text-white">2</span>
                        </div>
                    </div>
                    <p class="leading-relaxed text-base text-gray-100 md:text-lg">
                        Jika Anda punya berat 50kg, maka kebutuhan protein harian Anda adalah 100gr protein.
                    </p>
                </div>
                <div class="col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-zinc-900 shadow rounded-xl border p-4 md:p-6 relative">
                    <div class="absolute -top-4 -right-4 w-auto h-auto">
                        <div class="flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12">
                            <span class="font-black text-white">3</span>
                        </div>
                    </div>
                    <p class="leading-relaxed text-base text-gray-100 md:text-lg">
                        Jika kebutuhan protein harian tidak terpenuhi, maka akan menyebabkan otot bisa terkikis sehingga latihan bertahun-tahunmu tidak menunjukkan hasil yang signifikan
                    </p>
                </div>
                <div class="col-span-full md:col-span-2 w-full h-auto md:max-w-md bg-gradient-to-r from-amber-500 to-yellow-600 shadow rounded-xl border p-4 md:p-6 relative">
                    <div class="absolute -top-4 -right-4 w-auto h-auto">
                        <div class="flex justify-center items-center bg-gradient-to-r from-amber-400 to-yellow-600 shadow border rounded-full w-12 h-12">
                            <span class="font-black text-white">4</span>
                        </div>
                    </div>
                    <p class="leading-relaxed text-base text-gray-100 md:text-lg">
                        <span class="font-black uppercase text-yellow-900 tracking-widest">Musclefirst</span> bisa menjadi solusi mudah dalam mencukupi kebutuhan protein
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>