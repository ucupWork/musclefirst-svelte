<script lang="ts">
    export let imgUrlTop: string;
    export let imgUrlBottom: string;
</script>

<div class="flex justify-center items-center w-full h-auto md:h-auto bg-zinc-100 border">
    <div class="py-16">
        <div class="xl:container m-auto px-0 text-gray-600 md:px-12 xl:px-16">
        <div class="lg:bg-gray-50 dark:lg:bg-darker md:rounded-[4rem] space-y-6 md:flex flex-row-reverse justify-end md:space-y-0 lg:items-end shadow-xl overflow-hidden relative">
            <div class="absolute top-0 right-0 z-0">
                <img src={imgUrlTop} class="w-full h-full object-cover mt-0" alt="Pro Collafit" />
            </div>
            <div class="hidden md:flex md:5/12 lg:w-1/2 w-full h-full justify-end items-end relative">
                <img src={imgUrlBottom} class="w-full h-full object-cover mt-0 z-10" alt="Pro Collafit" />
            </div>
            <div class="md:7/12 lg:w-1/2 lg:p-16 md:gap-6 items-center z-10 px-4">
                <h2 class="text-left text-3xl font-black text-gray-900 md:text-4xl dark:text-white p-2 md:p-0">
                    Manfaat Pro Collafit <br> Untuk Tubuh.
                </h2>
                <p class="text-left my-8 text-gray-600 dark:text-gray-300 p-2 md:p-0">
                    Seiring bertambahnya usia, produksi kolagen pada tubuh akan semakin menurun. Padahal Kolagen berfungsi penting untuk merawat kulit dan menstimulasi pembentukkan jaringan otot, memperkuat rambut, kuku, dan tulang. Pro Collafit dari Muscle First akan membantu anda menambah asupan Kolagen yang dibutuhkan tubuh setiap hari.
                </p>
                <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div class="mt-8 flex gap-4 md:items-center">
                    <div class="w-12 h-12 hidden md:flex justify-center items-center gap-4 rounded-full bg-pink-100 dark:bg-indigo-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>     
                    </div>
                    <div class="bg-white shadow w-full md:w-5/6 p-4 md:p-4 rounded-xl">
                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Menyehatkan kulit, kuku, rambut</h4>
                        <p class="text-gray-500 dark:text-gray-400">Kolagen dapat membantu meningkatkan kelembapan dan elastisitas kulit, menjaga kuku dan rambut tetap kuat dan sehat, serta membantu mengurangi kerusakan akibat paparan sinar matahari dan polusi.</p>
                    </div> 
                    </div> 
                </div>
                <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div class="mt-8 flex gap-4 md:items-center">
                    <div class="w-12 h-12 hidden md:flex justify-center items-center gap-4 rounded-full bg-pink-100 dark:bg-indigo-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>     
                    </div>
                    <div class="bg-white shadow w-full md:w-5/6 p-4 md:p-4 rounded-xl">
                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Memperlambat penuaan dini</h4>
                        <p class="text-gray-500 dark:text-gray-400">Kolagen membantu memperlambat penuaan dini dengan cara menjaga sendi, memperkuat tulang, dan melindungi kulit dari sinar matahari, serta meningkatkan elastisitas, kekencangan, dan kelembapan kulit.</p>
                    </div> 
                    </div> 
                </div>
                <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div class="mt-8 flex gap-4 md:items-center">
                    <div class="w-12 h-12 hidden md:flex justify-center items-center gap-4 rounded-full bg-pink-100 dark:bg-indigo-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>     
                    </div>
                    <div class="bg-white shadow w-full md:w-5/6 p-4 md:p-4 rounded-xl">
                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Mendukung sistem metabolisme</h4>
                        <p class="text-gray-500 dark:text-gray-400">Kolagen mengandung asam amino penting yang dapat membantu proses pencernaan, penyerapan nutrisi, dan pembakaran lemak.</p>
                    </div> 
                    </div> 
                </div>
                <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div class="mt-8 flex gap-4 md:items-center">
                    <div class="w-12 h-12 hidden md:flex justify-center items-center gap-4 rounded-full bg-pink-100 dark:bg-indigo-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>     
                    </div>
                    <div class="bg-white shadow w-full md:w-5/6 p-4 md:p-4 rounded-xl">
                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Membantu pemulihan otot</h4>
                        <p class="text-gray-500 dark:text-gray-400">Kolagen memiliki peran penting dalam membantu pemulihan otot karena merupakan protein struktural yang terdapat pada jaringan ikat, termasuk otot. Cara kolagen membantu pemulihan otot adalah dengan meningkatkan sintesis kolagen, menjaga kesehatan sendi, meningkatkan kekuatan, elastisitas, dan pemulihan otot.</p>
                    </div> 
                    </div> 
                </div>
                <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div class="mt-8 flex gap-4 md:items-center">
                    <div class="w-12 h-12 hidden md:flex justify-center items-center gap-4 rounded-full bg-pink-100 dark:bg-indigo-900/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-4 h-4 bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>     
                    </div>
                    <div class="bg-white shadow w-full md:w-5/6 p-4 md:p-4 rounded-xl">
                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Menjaga kesehatan sendi dan tulang</h4>
                        <p class="text-gray-500 dark:text-gray-400">Kolagen memiliki peran penting dalam menjaga kesehatan sendi dan tulang rawan dengan cara meningkatkan kepadatan tulang, meningkatkan fleksibilitas tulang rawan, meningkatkan produksi cairan sendi, mengurangi peradangan pada sendi, dan meningkatkan kekuatan ligamen dan tendon.</p>
                    </div> 
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
</div>