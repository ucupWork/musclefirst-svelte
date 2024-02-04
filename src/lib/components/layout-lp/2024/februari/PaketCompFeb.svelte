<script>
    // image import
    import BulkingImg from '$images/special-event/chinese-new-year/pro-gainer.webp'
    import CuttingImg from '$images/special-event/chinese-new-year/pro-isolate.webp'
    import GlowingImg from '$images/special-event/chinese-new-year/pro-whey-collafit.webp'

    let paketResolusi = [
		{ image: BulkingImg, packageName: 'Paket Bulking', linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=246254074#product_list" },
		{ image: CuttingImg, packageName: 'Paket Cutting', linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=246253966#product_list" },
		{ image: GlowingImg, packageName: 'Paket Glowing', linkShopee: "https://shopee.co.id/musclefirstofficialshop?shopCollection=248465402#product_list" }
	];

</script>
  
  <div>
    {#each paketResolusi as { image, packageName, linkShopee }}
    <section class=" bg-black">
        <a href={linkShopee}>
        <div class="container mx-auto py-10 px-4 sm:px-0 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 items-baseline gap-8">
                <div class="mt-5 md:mt-0">
                    <h1 class="text-white uppercase text-center font-bold text-3xl lg:text-5xl">{packageName}</h1>
                    <img src={image} alt={packageName} class="object-cover mt-4 rounded-lg bg-warmGray-600 shadow-md p-2 lg:p-5">
                </div>
                <div class="col-span-2">
                    <h1 class=" text-white text-2xl mb-6 font-semibold text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</h1>
                        <div class="flex flex-row my-3 gap-4">
                            <button class="p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300">pro sesuatu</button>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                        </div>
                        <div class="flex flex-row my-3 gap-4">
                            <button class="p-1 px-6 uppercase rounded-full font-semibold my-3 bg-yellow-400 hover:bg-yellow-300">pro sesuatu</button>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                            <div class="p-2 text-center border border-white font-bold text-white">55 G <br> Protein</div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    {/each}
  </div>