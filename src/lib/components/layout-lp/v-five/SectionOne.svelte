<script lang="ts">
    import LogoBlack from '$images/site/logo-black.webp';
    export let imgUrl: string;
</script>

<div class="flex w-full min-h-screen bg-white md:bg-white dark:bg-gray-900 overflow-hidden relative">
    <div class="absolute inset-0 flex flex-col justify-between items-center w-full h-screen md:h-auto px-6 py-16 md:py-0 md:px-24 overflow-hidden z-10">
        <div class="flex md:hidden flex-col w-auto h-auto">
            <span class="hidden space-x-2 md:ml-2">
                <span class="block w-14 mb-2 border-b-2 border-gray-600"></span>
                <span class="font-medium text-gray-600 dark:text-gray-400">Produk Baru</span>
            </span>
            <div class="flex flex-col justify-start md:justify-center items-start text-left w-auto h-auto mb-4">
                <small class="font-bold text-sm text-pink-900 md:text-pink-400">Series</small>
                <h2 class="font-black text-xl uppercase text-pink-900">White</h2>
                <h1 class="text-zinc-900 font-blackttnorms font-black text-4xl md:text-8xl dark:text-white uppercase mb-4 md:mb-0">
                  Pro Collafit
                </h1>
                <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                    <h2 class="text-[#d34d80] font-ttnorms font-black text-2xl md:text-4xl dark:text-white mb-1">Shape & Glow</h2>
                    <span class="block w-32 md:w-48 mb-0 border-b-1 border-[#d34d80]"></span>
                </span>
            </div>
            <div class="hidden md:flex w-full md:w-auto h-auto bg-white px-2 md:px-6 py-2 rounded-full border md:border-2 border-[#d34d80] mb-4">
                <p class="font-ttnorms font-bold text-sm md:text-xl text-center md:text-left text-gray-700 dark:text-gray-300">
                    Minuman kolagen terbaru dari musclefirst
                </p>
            </div>
        </div>
                
        <div class="flex md:hidden flex-row space-x-2 md:space-x-4">
            <button type="button" title="Start buying" class="w-full py-3 px-6 text-center transition rounded-full bg-gradient-to-r from-[#ce4379] to-[#e27f9f] shadow md:shadow-xl shadow-[#d34d80] sm:w-max">
                <span class="block text-white font-semibold">
                    Beli Sekarang
                </span>
            </button>
            <button type="button" title="Start buying" class="group w-full py-3 px-6 text-center transition bg-white rounded-full border shadow sm:w-max">
                <span class="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                    Selengkapnya
                </span>
            </button>
        </div>

        <div class="hidden md:flex flex-col-reverse md:flex-wrap justify-center items-center w-full h-full gap-12 lg:gap-0">
            <div class="lg:w-6/12 px-0 py-0">
                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left w-auto h-auto mb-4">
                    <small class="font-bold text-sm text-pink-900 md:text-pink-400 ml-2">Series</small>
                    <h2 class="font-black text-xl uppercase text-pink-900 ml-2">White</h2>
                    <h1 class="text-zinc-50 md:text-zinc-900 font-blackttnorms font-black text-4xl md:text-8xl dark:text-white uppercase mb-4 md:mb-0">
                      Pro Collafit
                    </h1>
                    <span class="flex flex-col md:flex-row items-center md:space-x-2 space-y-0 md:space-y-0">
                        <h2 class="text-[#d34d80] font-ttnorms font-black text-2xl md:text-4xl dark:text-white">Shape & Glow</h2>
                        <span class="block w-48 mb-0 border-b-1 border-[#d34d80]"></span>
                    </span>
                </div>
                <div class="hidden md:flex w-full md:w-auto h-auto bg-white px-2 md:px-6 py-2 rounded-full border md:border-2 border-[#d34d80] mb-4">
                    <p class="font-ttnorms font-bold text-sm md:text-xl text-center md:text-left text-gray-700 dark:text-gray-300">
                        Minuman serbuk kolagen terbaru dari musclefirst
                    </p>
                </div>
                
                <div class="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 z-40 md:z-0">
                    <button type="button" title="Start buying" class="w-full py-3 px-6 text-center transition rounded-full bg-gradient-to-r from-[#ce4379] to-[#e27f9f] shadow md:shadow-xl shadow-[#d34d80] sm:w-max">
                        <span class="block text-white font-semibold">
                            Beli Sekarang
                        </span>
                    </button>
                    <button type="button" title="Start buying" class="group w-full py-3 px-6 text-center transition bg-white rounded-full border shadow sm:w-max">
                        <span class="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                            Selengkapnya
                        </span>
                    </button>
                </div>
            </div>

            <div class="hidden md:flex w-full h-full lg:w-6/12 justify-end items-end relative">
                <img src={imgUrl} class="absolute bg-fixed bottom-0 md:-bottom-8 w-[640px] h-auto mt-0 z-10" alt="Pro Collafit">
            </div>
        </div>
    </div>
    <div class="absolute bottom-8 w-full z-10">
        <div class="container m-auto px-6 hidden md:flex items-center md:items-end justify-center md:justify-between md:px-12 lg:px-7">
            <div class="w-auto h-auto px-4 md:px-10">
                <a href="/" class="text-zinc-900 md:text-zinc-50 font-medium">Tiktok /</a>
                <a href="/" class="text-zinc-900 md:text-zinc-50 font-medium">Facebook / </a>
                <a href="/" class="text-zinc-900 md:text-zinc-50 font-medium">Instagram</a>
            </div>
        </div>
    </div>
    <div class="block absolute w-full h-auto bottom-0 overflow-hidden z-20 md:z-20">
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(154, 59, 95,0.7)" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(154, 59, 95,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(154, 59, 95,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#d34d80" />
            </g>
            </svg>
        </div>
    </div>

    <div class="flex md:hidden w-full h-screen justify-center items-center relative z-0">
        <img src={imgUrl} class="absolute bottom-0 inset-x-0 w-full md:w-[640px] h-auto mt-0" alt="Pro Collafit">
    </div>
</div>                            

<style>
    .waves {
        position:relative;
        width: 100%;
        height:25vh;
        min-height:100px;
        max-height:150px;
    }
    .parallax > use {
      animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }
    @keyframes move-forever {
      0% {
       transform: translate3d(-90px,0,0);
      }
      100% { 
        transform: translate3d(85px,0,0);
      }
    }
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
      .waves { 
        height:80px;
        min-height:80px;
        width: 100%;
      }
    }
</style>