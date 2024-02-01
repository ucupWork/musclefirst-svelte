<script lang="ts">
    import { ModalBarcode } from '$globals/modal/index';
    import { productList as productList } from '$contents/home-page/list-products';
    import { productList as productShopList } from '$contents/shop-page/list-products';
    import { certifiedList } from '$contents/product-page/list-certified';
    import { 
        CardProductList, 
        CardCertified,
        CardProductCertifiedList
    } from '$components/globals/card/index';
    
    import { TakeSurvey } from '$section/product/index';
    
    import UspIcon1 from '$images/product/usp/optimize/usp-01.png'
    import UspIcon2 from '$images/product/usp/optimize/usp-02.png'
    import UspIcon3 from '$images/product/usp/optimize/usp-03.png'

    // CDN Set to Digita Ocean Space
    let popupLabdoor: boolean = true;
    let cdn: boolean = true;
    export let id: string;
    
	const togglePopup = () => {
        popupLabdoor = !popupLabdoor;
    }
</script>

<div id={id} class="w-full sm:h-auto md:h-auto bg-zinc-50 relative sm:px-4 md:px-8 sm:py-0 md:py-12 border-t border-zinc-700">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto">
        <div  class="w-full flex flex-col">
            <div  class="w-full md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center">
                <div  class="flex flex-col justify-start items-start w-full">
                    <div  class="flex flex-col space-y-4 w-full mb-4">
                        <h1 class="w-full whitespace-pre-line text-5xl font-black text-left text-zinc-900">
                            {'Semua Produk'}
                        </h1>
                        <p class="w-full mb-8 leading-relaxed whitespace-pre-line text-left text-zinc-800 text-md tracking-loose md:max-w-xl">
                            {'Susu Protein & Suplemen Fitness Musclefirst dengan varian rasa anti boring.'}
                        </p>
                    </div>
                    <a href={'/catalog-product'}  class="flex justify-center items-center text-center w-48 h-8 bg-black hover:shadow-md border border-yellow-200 rounded">
                        <span class="font-ttnorms nav-link text-zinc-100 font-black text-xs uppercase">
                            {'Katalog Produk'}
                        </span>
                    </a>
                </div>
            </div>
        </div>
        
        {#if popupLabdoor}
        <div  class="w-full md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center relative">
            <div class="absolute right-2 top-0 w-auto h-auto z-10">
                <button type="button" on:click={togglePopup} class="flex justify-center items-center w-8 h-8 bg-black border-2 border-zinc-900 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 text-white bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>

            <a target="_blank" href="https://labdoor.com/review/muscle-first-pro-creatine#see-more" rel="noreferrer nofollow external"  class="flex flex-col justify-center items-center w-full bg-zinc-200 hover:bg-zinc-300/75 shadow rounded p-4">

                <div class="grid grid-cols-12 gap-2 w-full h-auto justify-center items-center">
                    <div class="col-span-full md:col-span-2 hidden md:flex justify-center items-center w-full h-auto">
                        <img class="w-24 h-auto" src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png'} alt="Pro Creatine">
                    </div>
                    <div class="col-span-full md:col-span-8 w-full h-auto">
                        <div class="flex flex-col w-full h-auto">
                            <div  class="flex flex-col w-full px-4 md:px-0 py-2 text-left">
                                <h1 class="w-full whitespace-pre-line text-xl font-black uppercase text-zinc-900">
                                    {'Muscle First PRO CREATINE'}
                                </h1>
                                <span class="text-sm uppercase font-normal text-zinc-700">LABDOOR CERTIFICATIONS</span>
                            </div>
                            <div class="flex flex-row justify-between items-center w-auto h-auto text-center px-4 bg-green-600 rounded-full">
                                <span class="uppercase font-normal text-xs text-white">Score :</span>
                                <span class="uppercase font-bold text-white">A+</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 md:col-span-2 hidden md:flex justify-center items-center w-full h-auto">
                        <div class="w-auto h-auto p-2 shadow-md rounded-full bg-white">
                            <img class="w-16 h-16" src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/certified/cloud/labdoor-logo-2022_wc9xem.svg'} alt="Labdoor Certification">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        {/if}
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">Labdoor</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductCertifiedList 
                    width={675}
                    height={675}
                    labdoor={true}
                    cardProductList={productList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">Collagen Protein</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="collagen" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">Protein Powder</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="powder" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">Weight Gainer</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="gainer" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">BCAA</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="bcaa" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">Creatine</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="creatine" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 py-4 pt-0 pb-4">
        <div class="flex justify-between items-center w-full h-auto bg-zinc-100 md:bg-zinc-50 rounded border-b border-yellow-200 shadow px-4 py-4 mb-4">
            <h2 class="font-bold text-2xl text-zinc-900">PreWorkout</h2>
        </div>
        <div class="w-full h-auto justify-center items-center">
            <div  class="grid grid-cols-2 gap-4 md:gap-4 w-full h-auto justify-center items-center">
                <CardProductList 
                    width={675}
                    height={675}
                    typeProduct="workout" 
                    cardProductList={productShopList} 
                    breakpoints={[675]}
                />
            </div>
        </div>
    </div>
</div>

<TakeSurvey id="take-survey" />

<div class="w-full flex flex-col bg-black py-8 md:py-16">
    <div  class="w-full md:text-left text-center px-8 md:px-16 py-4 flex flex-col justify-start md:justify-center items-center">
        <div  class="w-full flex flex-col md:flex-row items-center justify-end">
            <div  class="grid grid-cols-3 gap-2 w-full mb-4">
                <div class="col-span-full md:col-span-1 w-full h-auto flex flex-row md:flex-col justify-between md:justify-center items-center shadow-md shadow-yellow-300/25 p-4 bg-black">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                        <picture>
                            <source srcset={UspIcon1} type="image/webp"/>
                            <img 
                                src={UspIcon1}
                                class="w-24 md:w-48 h-auto overflow-hidden rounded-md bg-transparent transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                alt="USP One"/>
                        </picture>
                        <span class="uppercase font-medium text-white text-md md:text-xl italic">Great Tasting</span>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-full h-auto flex flex-row md:flex-col justify-between md:justify-center items-center shadow-md shadow-yellow-300/25 p-4 bg-black">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                        <picture>
                            <source srcset={UspIcon2} type="image/webp"/>
                            <img 
                                src={UspIcon2}
                                class="w-24 md:w-48 h-auto overflow-hidden rounded-md bg-transparent transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                alt="USP One"/>
                        </picture>
                        <span class="uppercase font-medium text-white text-md md:text-xl italic">Unique Flavor</span>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-full h-auto flex flex-row md:flex-col justify-between md:justify-center items-center shadow-md shadow-yellow-300/25 p-4 bg-black">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                        <picture>
                            <source srcset={UspIcon3} type="image/webp"/>
                            <img 
                                src={UspIcon3}
                                class="w-24 md:w-48 h-auto overflow-hidden rounded-md bg-transparent transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                alt="USP One"/>
                        </picture>
                        <span class="uppercase font-medium text-white text-md md:text-xl italic">Best Ingredients</span>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>

<div class="w-full h-auto bg-black">
    <div class="flex flex-col md:flex-row justify-center items-center w-full h-auto mt-8 md:mt-0">
        <div  class="w-full px-8 py-0 flex flex-col justify-center items-center bg-black">
            <div  class="w-full flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-4 md:px-8">
                <div  class="grid grid-cols-4 md:grid-cols-6 gap-2 w-full mb-0">
                    {#each certifiedList as certified }
                    <div class="col-span-2 md:col-span-1 w-full h-auto flex justify-center items-center rounded-md shadow-lg p-2 bg-white border">
                        <CardCertified imgUrl={certified.imgUrl} altImg={certified.altImg} />
                    </div>
                    {/each}
                </div>  
            </div>
        </div>
    </div>
</div>

<ModalBarcode 
    title="Product" 
    modalType={`Global`} 
/>
