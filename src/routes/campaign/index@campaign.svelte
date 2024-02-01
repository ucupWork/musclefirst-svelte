<script lang="ts">
    import ProductOne from '$images/product/optimize/pro-1.webp'
    import ProductTwo from '$images/product/optimize/pro-2.webp'
    import ProductThree from '$images/product/optimize/pro-3.webp'
    import ProductFour from '$images/product/optimize/pro-4.webp'
    import ProductFive from '$images/product/optimize/pro-5.webp'
    import ProductSix from '$images/product/optimize/pro-6.webp'
    import ProductSeven from '$images/product/optimize/pro-7.webp'
    
</script>

<div class="grid grid-cols-12 gap-0 justify-center items-start w-full h-screen bg-zinc-900 relative">
    <div class="col-span-full md:col-span-4 w-full h-auto">
        <div  class="w-full flex flex-col py-12 md:py-24 px-8 md:px-16">
            <div  class="w-full container mx-auto md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center">
                <div  class="w-full flex flex-col md:flex-row items-start justify-center">
                    <div  class="flex flex-col space-y-4 w-full mb-4">
                        <h1 class="w-full whitespace-pre-line text-5xl font-black text-left text-white">
                            All Campaign
                        </h1>
                        <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-left text-white text-md tracking-loose">
                            We choose from several existing superior products. Enjoy a different taste with so many benefits
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-full md:col-span-8 w-full h-screen justify-start items-start p-4 md:p-8">
        <div  class="flex overflow-x-scroll snap-mandatory snap-x scroll-smooth scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-bg-transparent px-8 lg:px-8 pt-4 pb-16">
            <div  class="grid grid-cols-4 gap-4 w-full h-auto">
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductOne} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductTwo} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductThree} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductFour} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductFive} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductSix} />
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 w-full h-auto">
                    <div class="flex flex-col justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow shadow-amber-400/50 w-56 h-56 mx-auto rounded-xl p-6 md:p-8">
                        <img alt="RandomImage"  class="shadow-lg shadow-yellow-500/50 mx-3 w-56 h-56 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center" src={ProductSeven} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>