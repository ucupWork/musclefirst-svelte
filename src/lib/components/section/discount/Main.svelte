<script lang="ts">
    import Lazy from 'svelte-lazy';
    import ProductOne from '$images/product/optimize/pro-1.png'
    import ProductTwo from '$images/product/optimize/pro-2.png'
    import ProductThree from '$images/product/optimize/pro-3.png'
    import ProductFour from '$images/product/optimize/pro-4.png'
    import ProductFive from '$images/product/optimize/pro-5.png'
    import ProductSix from '$images/product/optimize/pro-6.png'
    import ProductSeven from '$images/product/optimize/pro-7.png'
    
    export let id: string;
</script>
<div id={id} class="w-full sm:h-auto md:h-auto bg-[#151515] relative sm:px-4 md:px-8 sm:py-0 md:py-12 border-t border-zinc-900">
    <div  class="w-full flex flex-col">
        <div  class="w-full md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center">
            <div  class="w-full flex flex-col md:flex-row items-start justify-center">
                <div  class="flex flex-col space-y-4 w-full mb-4">
                    <h1 class="w-full whitespace-pre-line text-5xl font-black text-left text-white">
                        {'Diskon Product'}
                    </h1>
                    <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-left text-white text-md tracking-loose">
                        {'Cek semua platform Musclefirst untuk dapatkan diskon produk setiap waktunya!'}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 pt-4 pb-8">
        <div  class="grid grid-cols-2 gap-2 w-full h-auto justify-center items-center">
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/2457217504'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductOne} type="image/webp"/>
                        <img 
                            src={ProductOne}
                            class="w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Isolate"/>
                    </picture>
                    <div class="flex flex-col justify-center items-start w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">Bentuk <b>badan idealmu</b> dengan cukupi kebutuhan protein</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'/products/pro-whey'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductThree} type="image/webp"/>
                        <img 
                            src={ProductThree}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Whey"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white"><b>Susu protein</b> untuk pemula harga ekonomis kualitas juara</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/2559112272'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductFour} type="image/webp"/>
                        <img 
                            src={ProductFour}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Casein"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">Perbaiki <b>otot</b> dan bentuk badan selagi tidur nenyak</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/896956194'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductTwo} type="image/webp"/>
                        <img 
                            src={ProductTwo}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Gainer"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">Tambah <b>berat badan</b> dengan efektif dan anti ribet</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/789609619'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductFive} type="image/webp"/>
                        <img 
                            src={ProductFive}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro BCAA"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">Juaranya <b>memperbaiki otot</b> setelah olahraga</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/289998377'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductSix} type="image/webp"/>
                        <img 
                            src={ProductSix}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Creatine"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">Tambah <b>massa otot</b> dengan mudah dan ekonomis</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            
            <a  target="_blank" href={'https://shopee.co.id/product/8802988/19406803308'} class="col-span-full md:col-span-1 flex flex-row p-2 w-full h-auto md:h-96 justify-center items-center bg-transparent rounded-xl border border-yellow-200 relative">
                <div class="flex flex-col md:flex-row justify-center items-center md:space-x-4 w-full h-auto py-4 md:py-8 px-6">
                    <picture>
                        <source srcset={ProductSeven} type="image/webp"/>
                        <img 
                            src={ProductSeven}
                            class=" w-auto h-auto overflow-hidden md:rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                            alt="Muscle First Pro Pro Nrgy"/>
                    </picture>
                    <div class="flex justify-center items-center w-full h-auto md:h-96 py-4 md:py-0 px-4 md:px-8 leading-none bg-black relative">
                        <div class="absolute inset-x-0 top-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-yellow-200 mb-2 rounded">
                                <span class="font-black text-black uppercase">Diskon 50%</span>
                            </div>
                        </div>
                        <span class="font-thin text-xl md:text-2xl text-white">meningkatkan <b>fokus</b> saat beraktivitas</span>
                        <div class="absolute inset-x-0 bottom-2 w-full h-auto hidden md:flex justify-center items-center">
                            <div class="w-auto h-auto px-4 py-2 bg-black border border-yellow-200 mb-2 rounded">
                                <span class="font-bold text-white uppercase text-xs">Lihat Disini</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
