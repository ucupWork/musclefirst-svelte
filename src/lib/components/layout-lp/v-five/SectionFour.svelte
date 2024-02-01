<script lang="ts">
    export let imgUrl: string;
</script>


<div class="flex justify-center items-center w-full h-auto bg-zinc-100 border">
    <div class="py-16 md:py-24"> 
        <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div
            class="flex flex-col-reverse md:flex-row justify-center gap-6 text-center md:text-left items-center lg:gap-16"
        >
            <div class="mb-6 space-y-6 md:mb-0 w-full md:w-6/12">
                <h1 class="font-black text-xl">Promo Produk</h1>
                <span class="text-6xl md:text-8xl uppercase font-black text-primary dark:text-sky-300">30% off</span>
                <div class="w-full h-auto">
                    <p class="text-lg text-gray-600 dark:text-gray-300">
                        Yuk, jangan sampai terlewat kesempatan untuk dapetin promo menarik produk Pro Collafit dari Muscle First dengan harga yang cukup terjangkau nih!
                    </p>
                </div>
                <div class="flex flex-wrap w-full md:w-auto justify-start md:gap-6">
                    <a
                        rel="noreferrer nofollow external"
                        href="https://shopee.co.id/Muscle-First-Pro-Collafit-Collagen-Drink-220gr-Kolagen-Beauty-Drink-i.8802988.19575249995"
                        class="relative flex h-12 w-64 md:w-auto items-center justify-center bg-gradient-to-r from-pink-400 to-pink-500 rounded-full px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                    <span class="relative text-base font-semibold text-white dark:text-dark"
                        >Beli Sekarang</span
                    >
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center w-full md:w-6/12">
                <img src={imgUrl} class="relative ml-auto" alt="Pro Collafit" />
            </div>
        </div>
        </div>
    </div>  
</div>