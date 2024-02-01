<script lang="ts">
    import AboutImage from '$images/about/optimize/about-main.webp';
</script>

<div class="w-full h-auto bg-zinc-100 relative py-8 md:py-16">
    <div class="grid grid-cols-2 w-full h-auto justify-center px-8 md:px-0">
        <div class="col-span-full md:col-span-1 flex md:justify-start md:text-left mb-8 md:mb-0 text-center">
            <div class="w-full flex-grow text-left justify-start flex flex-col space-y-4 md:p-16 p-4">
                <h1 class="text-4xl font-black text-black">{'Tentang Kami'}</h1>
                <div class="w-full h-auto flex flex-col">
                    <p class="text-sm my-2 text-justify text-zinc-900">
                        ( PT Unggulan Bugar Indonesia ) Muscle First adalah pelopor suplemen fitnes terbaik dari Indonesia dengan banyak varian rasa anti-bosan yang telah bersertifikat <b>Labdoor, GMP, HACCP, ISO, dan Halal BPOM</b>. Muscle First didirikan pada tahun 2017 dan telah mengalami peningkatan sebesar 17.000% sejak diluncurkan dalam 2 tahun, sehingga produk Muscle First memimpin penjualan suplemen terbaik di pasar Indonesia dan telah bekerjasama dengan lebih dari 100+ agen di Indonesia. 
                    </p>
                </div>
                <div class="w-full h-auto flex flex-col">
                    <p class="text-sm my-2 text-justify text-zinc-900">
                        {'Muscle First membantu pria dan wanita dalam recovery dan memelihara massa otot, membangun tubuh ideal seperti menurunkan atau menambah berat badan, memenuhi nutrisi harian tubuh, meningkatkan stamina, dan meningkatkan fokus. Visi Muscle First adalah Menjadi brand suplemen fitness nomor satu di Indonesia dengan standar kebugaran Internasional.'}
                    </p>
                </div>
                <div class="my-4 py-4">
                    <a rel="noreferrer" href="/products" target="_blank" class="font-bold px-8 py-4 rounded-full outline-none focus:outline-none mb-2 uppercase text-sm shadow hover:shadow-lg bg-black text-white" style="transition:all .15s ease">
                        {'Lihat Produk'}
                    </a>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 overflow-hidden hidden md:flexflex flex-row justify-end items-center">
            <div class="w-1/2 flex items-center rounded-xl md:mr-16">
                <a href={'/'}>
                    <picture>
                        <source srcset={AboutImage} type="image/webp"/>
                        <img 
                            src={AboutImage}
                            class="rounded-xl object-cover object-center"
                            alt="AboutPicture"/>
                    </picture>
                </a>
            </div>
        </div>

    </div>
</div>