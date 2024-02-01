<script lang="ts">
    import { tippy } from '$utils/tippy';
	import { slide } from "svelte/transition";
    import { CardService } from "$globals/card/index";
    import { AccordionService } from "$globals/accordion/index";
    import { CardProductHome } from "$globals/card/index";
    import { 
        productGainMuscleList,
        productWeightLossList,
        productStrengthList 
    } from "$contents/home-page/list-products";
    // CDN Set to Digita Ocean Space
    let cdn: boolean = true;
    import ServiceOne from '$images/service/optimize/srv-1.webp'
    import ServiceTwo from '$images/service/optimize/srv-2.webp'
    import ServiceThree from '$images/service/optimize/srv-3.webp'

	let isOpenOne = false;
	let isOpenTwo = false;
	let isOpenThree = false;
    
	const toggleOne = () => {
        isOpenOne = !isOpenOne;
        isOpenTwo = false;
        isOpenThree = false;
    }
	const toggleTwo = () => {
        isOpenTwo = !isOpenTwo;
        isOpenOne = false;
        isOpenThree = false;
    }
	const toggleThree = () => {
        isOpenThree = !isOpenThree;
        isOpenOne = false;
        isOpenTwo = false;
    }

    export let id: string;
</script>

<div id={id} class="w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12">
    <div  class="grid grid-cols-3 md:gap-4 justify-center py-0 md:py-4 w-full">
        <CardService 
            on:click={toggleOne} 
            initService="all"
            colorTypeOuter="bg-transparent md:bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700/50"
            colorTypeInner="bg-cyan-600/50 hover:bg-cyan-800/75"
            bgUrl={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-1.webp` : ServiceOne}
            cardText={'Bentuk Masa Otot'}
        />

        <CardService 
            on:click={toggleTwo} 
            initService="all"
            colorTypeOuter="bg-transparent md:bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-700/50"
            colorTypeInner="bg-purple-600/50 hover:bg-purple-800/75"
            bgUrl={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-2.webp` : ServiceTwo}
            cardText={'Turunkan Berat Badan'}
        />

        <CardService 
            on:click={toggleThree} 
            initService="all"
            colorTypeOuter="bg-transparent md:bg-amber-500 shadow-lg shadow-amber-500/50 hover:shadow-amber-700/50"
            colorTypeInner="bg-amber-600/50 hover:bg-amber-800/75"
            bgUrl={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/service/optimize/srv-3.webp` : ServiceThree}
            cardText={'Tingkatkan Stamina'}
        />
    </div>
</div>

<div id="service-all" class="w-full h-auto">
    {#if isOpenOne}
    <AccordionService gridCount={productGainMuscleList.length} open={isOpenOne}>
        <div class="border-b border-zinc-900" slot="details">
            <div class="w-full h-auto px-8 md:px-20 py-4 text-center md:text-left">
                <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center">
                    <span class="block text-4xl md:text-5xl font-black text-white dark:text-zinc-900">
                        <span class="font-blackttnorms tracking-tighter text-white">{'Pilihan'}</span> 
                        {'Produk'}
                    </span>
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'All Products - Muscle First'}}  href={'/products'} class="mx-1 text-white font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-cyan-500">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
                <p class="w-auto h-auto mb-2 text-white dark:text-zinc-900">{'Dapatkan body goals impianmu dengan order produk Musclefirst, sekarang!'}</p>
                <span class="block text-lg md:text-xl font-black uppercase text-white dark:text-zinc-900">
                    <span class="text-cyan-500">{'Bentuk Masa Otot'}</span>
                </span>
            </div>
            <div class="w-full h-auto justify-center md:justify-start items-center md:items-start flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 px-0 md:px-16 mt-4 py-8">
                {#each productGainMuscleList as val}
                <CardProductHome 
                    width={`256`}
                    height={`256`}
                    id={val.id} 
                    imgUrl={val.imgUrl} 
                    imgAlt={val.imgAlt}     
                    linkHref={val.linkHref} 
                />
                {/each}
            </div>
        </div>
    </AccordionService>
    {/if}

    {#if isOpenTwo}
    <AccordionService gridCount={productWeightLossList.length} open={isOpenTwo}>
        <div class="border-b border-zinc-900" slot="details">
            <div class="w-full h-auto px-8 md:px-20 py-4 text-center md:text-left">
                <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center">
                    <span class="block text-4xl md:text-5xl font-black text-white dark:text-zinc-900">
                        <span class="font-blackttnorms tracking-tighter text-white">{'Pilihan'}</span> 
                        {'Produk'}
                    </span>
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'All Products - Muscle First'}}  href={'/products'} class="mx-1 text-white font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-cyan-500">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
                <p class="w-auto h-auto mb-2 text-white dark:text-zinc-900">{'Dapatkan body goals impianmu dengan order produk Musclefirst, sekarang!'}</p>
                <span class="block text-lg md:text-xl font-black uppercase text-white dark:text-zinc-900">
                    <span class="text-purple-500">{'Turunkan Berat Badan'}</span>
                </span>
            </div>
            <div class="w-full h-auto justify-center md:justify-start items-center md:items-start flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 px-0 md:px-16 mt-4 py-8">
                {#each productWeightLossList as val}
                <CardProductHome 
                    width={`256`}
                    height={`256`}
                    id={val.id} 
                    imgUrl={val.imgUrl} 
                    imgAlt={val.imgAlt}     
                    linkHref={val.linkHref} 
                />
                {/each}
            </div>
        </div>
    </AccordionService>
    {/if}

    {#if isOpenThree}
    <AccordionService gridCount={productStrengthList.length} open={isOpenThree}>
        <div class="border-b border-zinc-900" slot="details">
            <div class="w-full h-auto px-8 md:px-20 py-4 text-center md:text-left">
                <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center">
                    <span class="block text-4xl md:text-5xl font-black text-white dark:text-zinc-900">
                        <span class="font-blackttnorms tracking-tighter text-white">{'Pilihan'}</span> 
                        {'Produk'}
                    </span>
                    <div class="w-auto flex flex-col md:flex-row"> 
                        <a use:tippy={{content: 'All Products - Muscle First'}}  href={'/products'} class="mx-1 text-white font-bold px-6 py-4 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-cyan-500">
                            {'Lihat Semua'}
                        </a>
                    </div>
                </div>
                <p class="w-auto h-auto mb-2 text-white dark:text-zinc-900">{'Dapatkan body goals impianmu dengan order produk Musclefirst, sekarang!'}</p>
                <span class="block text-lg md:text-xl font-black uppercase text-white dark:text-zinc-900">
                    <span class="text-amber-700">{'Tingkatkan Stamina'}</span>
                </span>
            </div>
            <div class="w-full h-auto justify-center md:justify-start items-center md:items-start flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 px-0 md:px-16 mt-4 py-8">
                {#each productStrengthList as val}
                <CardProductHome 
                    width={`256`}
                    height={`256`}
                    id={val.id} 
                    imgUrl={val.imgUrl} 
                    imgAlt={val.imgAlt}     
                    linkHref={val.linkHref} 
                />
                {/each}
            </div>
        </div>
    </AccordionService>
    {/if}
</div>
