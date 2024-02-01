<script lang="ts">
    export let id: string;
    export let title: string;
    export let subtitle: string;
    export let imgLink: string;
    export let altImg: string;
</script>
<section {id} class="w-full h-auto md:h-screen bg-[#0e1d32] relative overflow-hidden">
    <div class="grid grid-cols-2 gap-4 w-full h-screen">
        <div class="col-span-full md:col-span-1 w-full h-auto flex justify-center items-center md:px-8 z-10 bg-transparent">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-left">
                <span class="text-red-600 font-bold text-2xl">{subtitle}</span>
                <h2 class="text-2xl md:text-5xl font-black text-white leading-none text-left">
                    {@html title}
                </h2>
                <p class="leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4"><span class="font-bold">PRO NRGY</span> diformulasikan secara khusus untuk menambah energi dan fokus tanpa efek samping seperti deg-degan, gelisah atau susah tidur</p>
                <p class="leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4">Harga lebih murah untuk meningkatkan fokus dan tanpa efek samping dibandingkan meminum kopi</p>
                <p class="leading-relaxed text-left text-sm text-gray-300 max-w-md mt-4">Tahan lama karena tidak hanya mendapat tambahan energi di awal konsumsi, tapi <span class="font-bold">PRO NRGY</span> juga dapat memberikan booster selama beberapa jam.</p>
            </div>
        </div>
    
        <div class="col-span-full md:col-span-1 w-full h-auto flex justify-end items-end z-0">
            <img src={imgLink} class="w-full md:w-[870px] h-auto" alt={altImg} />
        </div>
    </div>
    
</section>