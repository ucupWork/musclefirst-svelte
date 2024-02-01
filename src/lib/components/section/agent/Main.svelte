<script lang="ts">
    import topImage from '$images/site/icons/1024.png';
    import { IndexAgen } from '$components/section/list-agent/index';
    import { Blog } from '$section/home/index';
    import { CardProductAgent } from "$globals/card/index";
    import { productList } from "$contents/home-page/list-products";
    import { scrollTo as animatedScroll } from 'svelte-scrollto';
    import { CertifiedLabel } from '$section/home/index';

    import BannerDaftarAgen from '$images/jumbotron/jumbotron-daftar-agen.webp';
    
    import Agent01 from '$images/agent/agent-01.webp';
    import Agent02 from '$images/agent/agent-02.webp';
    import Agent03 from '$images/agent/agent-03.webp';
    
    import AgentFlowProcess from '$images/agent/alur-agen-01.webp';

    // CDN Set to Digita Ocean Space
    let cdn: boolean = false;
    function scrollTo(element: string, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<div class="flex flex-col bg-black justify-center items-start w-full h-auto p-4 md:p-8 relative">
    <div class="grid grid-cols-12 gap-4 justify-center items-center w-full h-auto bg-zinc-900 border border-yellow-200 md:py-6 relative z-0">
        <div class="col-span-full w-full h-auto py-0 md:py-2 bg-white z-20">
            <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-16">
                <a href={'/'} class="flex flex-row w-auto h-auto border-none md:border-2 border-zinc-900 p-2 md:p-4 z-20">
                    <img class="w-8 md:w-24 h-auto" src={topImage} alt="Musclefirst Logo">
                </a>
                <div class="w-auto h-auto hidden md:block">
                    <span class="text-xl md:text-4xl font-black uppercase text-zinc-900">Be the First.</span>
                </div>
            </div>
        </div>
        <div class="col-span-full w-full h-auto py-0 bg-transparent">
            <div class="w-full h-full relative">
                <div class="w-full h-full absolute inset-x-0 bottom-0 z-10 flex flex-col justify-center">
                <div class="flex flex-col justify-center items-start text-left py-4 px-8 md:px-16 bg-transparent rounded">
                    <h1 class="block text-xl md:text-6xl text-white font-black uppercase">Untung <span class="text-amber-500">Jutaan</span></h1>
                    <h1 class="block text-xl md:text-6xl text-white font-black uppercase">Hingga <span class="text-amber-500">Ratusan Juta</span>!</h1>
                    <h2 class="font-ttnorms mt-4 block text-xs md:text-2xl text-white font-thin max-w-xs md:max-w-2xl uppercase pr-32 md:pr-0">
                        Dengan Daftar Agen Muscle First!
                    </h2>
                    
                    <button on:click={() => scrollTo('#keuntungan-musclefirst')} class="flex justify-center items-center bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 border-black py-1.5 md:py-4 px-4 md:px-8 rounded-full mt-3 md:mt-6">
                        <span class="font-bold text-xs md:text-2xl uppercase text-zinc-100">Cari Tau Lebih Lanjut</span>
                    </button>
                </div>
                </div>
                <a class="w-full h-full relative" href={'/'}>
                <picture class="z-0">
                    <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/jumbotron-daftar-agen.webp` : BannerDaftarAgen} type="image/webp"/>
                    <img 
                        src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/jumbotron-daftar-agen.webp` : BannerDaftarAgen}
                        class="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                        alt="Banner Daftar Agen"/>
                </picture>
                </a>
            </div>
        </div>
        <div class="col-span-full w-full h-auto py-0 bg-transparent">
            <CertifiedLabel id="certified" />
        </div>
        <div class="col-span-full w-full h-auto py-4 md:py-16 bg-white">
            <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-x-4 md:space-y-0 px-8 md:px-16">
                <div class="flex flex-row w-auto h-auto border border-black p-4">
                    <h1 class="font-blackttnorms tracking-tighter w-full text-xl md:text-2xl font-black uppercase text-zinc-900 text-center md:text-left max-w-4xl md:max-w-lg">
                        Untuk anda yang ingin menjadi Agen <span class="font-black text-amber-500">“Musclefirst”</span>
                    </h1>
                </div>
                <div class="w-auto h-auto">
                    <h1 class="font-blackttnorms tracking-tighter w-full text-md md:text-2xl font-black uppercase text-zinc-900 max-w-sm text-center md:text-left leading-none">
                        Saat ini kami membuka pendaftaran di wilayah <span class="font-black text-amber-500">SELURUH KOTA di INDONESIA</span>
                    </h1>
                </div>
            </div>
        </div>
        <div id="keuntungan-musclefirst" class="col-span-full w-full h-auto">
            <div  class="w-full flex flex-col pb-4 md:pb-12 md:py-0 px-4 md:px-0 border-b border-black">
                <div  class="w-full container mx-auto text-center md:text-left px-8 py-4 flex flex-col justify-start md:justify-center items-center">
                    <div  class="w-full flex flex-col md:flex-row items-start justify-center">
                        <div  class="flex flex-col justify-center items-start space-y-4 w-full mb-4">                            
                            
                            <div class="flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8">
                                <div class="grid grid-cols-1 gap-4 w-full h-auto mb-0">
                                    <div class="w-full h-auto flex flex-col justify-center md:justify-start items-center md:items-start space-y-2 md:space-y-0 mb-8 px-8">
                                        <h1 class="font-blackttnorms tracking-tighter w-full text-2xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left max-w-2xl">
                                            Apa Sih Keuntungan Menjadi Agen MUSCLEfIRST?
                                        </h1>
                                        <p class="w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0">
                                            Temukan Alasan Mengapa LEBIH DARI 50++ Orang Sudah Join <span class="font-black text-amber-500">“Musclefirst”</span>
                                        </p>
                                    </div>
                                    <div class="flex flex-col space-y-4 w-auto h-auto px-0 md:px-8">
                                        <div class="w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4">
                                            <div class="hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4" />
                                            <p class="w-full text-sm md:text-md font-normal text-zinc-900 text-left">
                                                Harga tidak rusak. <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> berkomitmen penuh untuk menjaga harga tetap terkontrol di pasaran sehingga agen bisa menghasilkan <b>profit berlimpah</b>. <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> akan bertindak tegas kepada agen reseller yang merusak harga produk <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> dengan sanksi lapaknya akan dihapus dari nama agen resmi <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> dan blacklist untuk setiap pembelian.
                                            </p>
                                        </div>
                                        <div class="w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4">
                                            <div class="hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4" />
                                            <p class="w-full text-sm md:text-md font-normal text-zinc-900 text-left">
                                                <b>Produk sangat mudah di jual</b>. MUSCLE FIRST telah memiliki <b>berstandar Internasional</b> seperti <b>Labdoor A+</b>, <b>HACCP</b>, <b>ISO 22000</b>, dan <b>GMP</b> yang terbukti aman. Selain itu MUSCLE FIRST aktif untuk mengedukasi pasar secara berkala baik dengan media online, media konvensional, hingga media mainstream.
                                            </p>
                                        </div>
                                        <div class="w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4">
                                            <div class="hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4" />
                                            <p class="w-full text-sm md:text-md font-normal text-zinc-900 text-left">
                                                Promosi yang update dengan tren kekinian. <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> mendukung agen agar mudah menjual produk dipasaran dengan membuat promosi menggunakan konten yang menjangkau semua usia dan mengikuti tren terkini. 
                                                Produk <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> sendiri aman dikonsumsi oleh semua orang dengan rentan usia 15 - 50 tahun.
                                            </p>
                                        </div>
                                        <div class="w-full h-auto flex justify-center items-start bg-white rounded p-4 px-4">
                                            <div class="hidden md:block i-ph:check h-8 w-8 text-green-600 mr-4" />
                                            <p class="w-full text-sm md:text-md font-normal text-zinc-900 text-left">
                                                Lokasi yang terjangkau oleh seluruh agen. <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> memberikan kemudahan akses dalam pembelian sehingga menjangkau seluruh agen dimanapun berada. Agen reseller pun bisa leluasa berjualan baik secara offline maupun online karena produk <span class="font-bold text-amber-500 uppercase">MUSCLE FIRST</span> sudah tersertifikasi <b>Labdoor A+</b>, <b> BPOM</b> dan <b>bersertifikat Halal</b>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8">
                                <div class="grid grid-cols-1 gap-4 w-full h-auto mb-0 px-2 md:px-8">
                                    <div class="w-full h-auto flex flex-col justify-center items-center md:items-start mb-8">
                                        <h1 class="font-blackttnorms tracking-tighter w-full text-4xl md:text-4xl text-center md:text-left font-black uppercase text-zinc-100">
                                            Cerita Sukses Musclefirst 
                                        </h1>
                                        <p class="w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0">
                                            Dokumentasi perjalanan Olahraga Mereka, sehari hari bersama Musclefirst
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 md:gap-4 w-full h-auto">
                                        <div class="col-span-full md:col-span-1 w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/77W-x78iYuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div class="col-span-full md:col-span-1 w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/vvyDi_QE6LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div class="col-span-full md:col-span-1 w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/kUVbnuJGmMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div class="col-span-full md:col-span-1 w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zZS6412dT9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="grid grid-cols-3 gap-2 md:gap-4 w-full h-auto">
                                        <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                                                <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent01}>
                                            </div>
                                        </div>
                                        <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                                                <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent02}>
                                            </div>
                                        </div>
                                        <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                            <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                                                <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent03}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            <div class="flex flex-col w-full justify-center items-center text-center pb-4 md:pb-8">
                                <div class="grid grid-cols-1 gap-4 w-full h-auto mb-0 px-0 md:px-8">
                                    <div class="w-full h-auto flex flex-col justify-center items-center md:items-start mb-8 max-w-4xl">
                                        <h1 class="font-blackttnorms tracking-tighter w-full text-3xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left">
                                            Simak Produk Terbaik Musclefirst yang laris dipasaran dalam solusi pemenuhan asupan nutrisi harian 
                                        </h1>
                                        <p class="w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0 max-w-4xl">
                                            Selain menjadi solusi pemenuhan asupan nutrisi harian  seperti Testimoni yg Anda baca di atas, Musclefirst  adalah memiliki beberapa produk yang juga memiliki banyak khasiat untuk :
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-center w-full h-auto space-y-4 md:space-y-2 px-0 md:px-8">
                                    {#each productList as val}
                                    <CardProductAgent 
                                        width={256}
                                        height={256}
                                        id={val.id} 
                                        nameProduct={val.name} 
                                        cocok={val.cocok} 
                                        imgUrl={val.imgUrl} 
                                        imgAlt={val.imgAlt} 
                                        linkHref={val.linkHref} 
                                    />
                                    {/each}
                                </div>
                            </div>
                            
                            <div class="flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-8">
                                <div class="grid grid-cols-1 gap-4 w-full h-auto mb-0 px-2 md:px-8">
                                    <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                        <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                                            <img role="presentation" alt="Agent Flow Process" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/agent/alur-agen-01.webp` : AgentFlowProcess}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex flex-col w-full justify-center items-center text-center md:text-left pb-4 md:pb-0">
                                <div class="flex flex-col lg:flex-row items-start justify-between w-full h-auto px-0 md:px-8">
                                    <div class="flex flex-col w-auto justify-center items-center text-center md:text-left">
                                        <h1 class="font-blackttnorms tracking-tighter w-full text-4xl md:text-4xl font-black uppercase text-zinc-100 text-center md:text-left">
                                            <span class="text-amber-500">Musclefirst </span> and the Media
                                        </h1>
                                        <p class="w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0">
                                            Anda hanya perlu stok produk Musclefirst Tekan Tombol GABUNG SEKARANG
                                        </p>
                                    </div>
                                </div>
                                <Blog styleBlog="style-two" HeaderCondition={false} id="list-blog" />
                            </div>
                            
                            <section class="flex justify-center items-center w-full h-auto py-4 md:py-0 bg-zinc-900 relative overflow-hidden">
                                <div class="w-full h-auto flex flex-col justify-center items-center z-0">               
                                    <div class="w-full h-auto flex justify-center items-center">
                                        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-0 md:px-8 pb-4 md:pb-8">
                                            <div class="flex flex-col w-auto h-auto">
                                                <span class="text-amber-600 font-bold text-sm md:text-lg uppercase">
                                                    Klik Disini Untuk Beli Musclefirst
                                                </span>
                                                <h2 class="text-3xl md:text-4xl font-black text-white leading-none text-center md:text-left mb-8">
                                                    <span class="block uppercase max-w-xl">
                                                        Dapatkan Langsung di Kota Terdekat Kamu
                                                    </span> 
                                                </h2>
                                            </div>
                                            <ul class="text-center md:text-left">
                                                <li class="text-white">Pilih Kota Kamu di bawah ini</li>
                                                <li class="text-white">Cari Distributor dengan alamat terdekat</li>
                                                <li class="text-white">Klik Tanya "BUY HERE"</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <IndexAgen colorType={'default'} top={true} bottom={false} id="list-agent" classes="bg-zinc-900" />
                                </div>
                            </section>
                            
                            <section class="w-full h-auto p-6 py-24 dark:text-gray-900 border-none md:border border-yellow-200">
                                <div class="container mx-auto w-full h-auto">
                                    <div class="flex flex-col lg:flex-row items-center justify-between w-full h-auto space-y-4 md:space-y-0 px-2">
                                        <div class="flex flex-col w-auto justify-center items-center md:items-start text-center md:text-left">
                                            <h2 class="font-blackttnorms tracking-tighter w-auto text-4xl font-black text-zinc-100">
                                                TIDAK ADA BIAYA PENDAFTARAN.
                                            </h2>
                                            <p class="w-auto leading-relaxed text-zinc-100 text-lg tracking-loose text-center md:text-left px-4 md:px-0 max-w-4xl">
                                                Anda hanya perlu stok produk Musclefirst Tekan Tombol GABUNG SEKARANG
                                            </p>
                                        </div>
                                        <div class="flex justify-center md:justify-end items-center md:items-end">
                                            <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=6281289497391&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0" class="mt-16 md:mt-0 w-auto h-auto rounded-full py-2 bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 max-w-2xl px-4 md:px-8">
                                                <span class="font-black uppercase text-white text-xl leading-none">GABUNG SEKARANG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <a rel="noreferrer" target="_blank" href="https://shopee.co.id/universal-link/musclefirstofficialshop?deep_and_web=1&utm_campaign=s8802988_ss_id_webs_home_bp&utm_source=website&utm_medium=seller&utm_content=homeweb&smtt=9" class="text-center w-full h-auto rounded py-4 bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 px-4 md:px-4">
                                <span class="font-black uppercase text-white text-xl md:text-2xl">Beli Musclefirst Sekarang</span>
                            </a>
                            
                            <a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=6281289497391&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0" class="text-center w-full h-auto rounded py-4 bg-gradient-to-r from-amber-900 to-amber-500 shadow-lg border shadow-orange-600/50 px-4 md:px-4">
                                <span class="font-black uppercase text-white text-xl md:text-2xl">Daftar Jadi Agen</span>
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>