<script lang="ts">
    import { onMount } from 'svelte';
    import { SEO } from '$general/index';
    import { fade } from 'svelte/transition';
    import { Confetti } from "svelte-confetti";
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { setLoading, setListPerson, setListPersonData, setResult, urlLink, countData, switchLayer } from '$stores/random-picker';
    import { randomPick, addItem, deleteItem, deleteAllItem, goBack  } from '$helper/action/random-picker';
    import { LoadingCountdown } from '$shared/loading/index';
    import { Loading  } from '$general/index';

    import LogoWhite from '$images/site/logo-white.webp';
    import CrownImage from '$images/global/crown.png';

    export let inputValueName: string;  
    export let inputValueLink: string;  

    let urlLinkSite: string;
    let countDataPerson: number = 939;

    const handleSwitchLayerOne = () => {
        urlLink.set(urlLinkSite);
        countData.set(countDataPerson);
        setLoading.set(true);
        setTimeout(() => {
            switchLayer.set("L1");
            setLoading.set(false);
        }, 7500);
    };
    
    const handleSwitchLayerTwo = () => {
        switchLayer.set("L2");
        setLoading.set(true);
        setTimeout(() => {
            setLoading.set(false);
        }, 9500);
    };
    
    const handleSubmit = () => {
        const valueName = inputValueName.trim();
        const valueLink = inputValueLink.trim();
        addItem(valueName, valueLink);
    };
    
    onMount(async () => {
        // Load
    });
</script>

<SEO 
    title="Tools Random Picker" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

{#if $setLoading}
<LoadingCountdown />
{:else}
    {#if $setResult}
    <div class="flex justify-center items-center w-full h-screen relative">
        <div class="absolute w-full inset-0 h-full flex justify-center items-start overflow-hidden z-0">
            <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration=15000 amount=200 fallDistance="100vh" />
        </div>
        <div class="absolute w-full inset-0 h-full bg-gradient-to-r from-zinc-900/50 to-slate-900/50 z-10"></div>
        <div class="w-auto h-auto p-4 border border-yellow-500 z-20">
            <div class="flex flex-col justify-center items-center space-y-4 w-72 md:w-96 h-96 bg-zinc-50 shadow-xl p-4 px-8 py-16">
                <div class="flex flex-col justify-center items-center w-auto h-auto">
                    <img class="w-10 h-auto" src={CrownImage} alt="Musclefirst Crown">
                    <div class="flex flex-col justify-center items-center w-auto h-auto bg-black p-2 shadow">
                        <img 
                            width="647px"
                            height="504px"
                            src={LogoWhite}
                            class="w-12 h-auto"
                            alt="Musclefirst Logo"/>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center w-auto h-auto mb-2 md:mb-10 pb-2 md:pb-10">
                    <div class="flex flex-col justify-center items-center -space-y-1 w-auto h-auto">
                        <span class="text-md font-bold text-yellow-500">The Winner</span>
                    </div>
                    <div class="border border-black py-2 px-4">
                        <span class="text-black font-black uppercase text-xl leading-none tracking-tighter">{$setResult}</span>
                    </div>
                </div>
                <div class="w-auto h-auto border border-yellow-900 p-2">
                    <button type="button" class="w-auto h-auto bg-black text-white py-2 px-4" on:click={() => goBack()}>
                        <span class="uppercase text-xs font-bold">Kembali</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {:else}
    <div class="flex flex-col justify-center items-center w-full {$setListPerson.length > 3 ? 'h-screen' : 'h-screen'} px-4 md:px-24">
        <div class="grid grid-cols-2 gap-4 w-full h-auto">
            <div class="col-span-full flex flex-col w-full h-auto">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 w-full h-auto pt-12 md:pt-24">
                    <a href="/" rel="no-referrer" class="flex flex-row justify-between md:justify-start items-center px-4 md:px-0 w-full md:w-full">
                        <img src={LogoWhite} class="w-24 md:w-20 block" alt="Musclefirst Logo" />
                        <div class="flex flex-col text-right md:text-left w-auto h-auto">
                            <h1 class="text-lg text-bold font-bankghotic text-white">Musclefirst</h1>
                        </div>
                    </a>
                    <!-- {#if urlLinkSite}
                    <div transition:fade class="flex flex-row space-x-2 w-auto h-auto">
                        <span class="text-md md:text-2xl tracking-tight uppercase font-thin text-white">Comment /</span>
                        <span class="text-md md:text-2xl tracking-widest uppercase font-bold text-white">
                            {countDataPerson ? countDataPerson : 0}
                        </span>
                    </div>
                    {/if} -->
                </div>

                <!-- {#if $switchLayer === "L2"}
                    {#if $urlLink && $countData}
                    <div class="flex flex-col w-full h-auto mt-4 md:mt-8 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10">
                        <h3 class="text-center md:text-left uppercase text-lg md:text-xl font-bold text-gray-50 dark:text-white mb-2">Verification Data</h3>
                        <form 
                            class="flex flex-col justify-center items-center w-full h-auto bg-transparent"
                            on:submit|preventDefault="{handleSubmit}">
                            <div class="flex flex-row space-x-2 w-full h-auto mb-4">
                                <div class="relative flex items-center">
                                    <div class="i-bi:person w-6 h-6 absolute left-2 md:left-4 inset-y-0 my-auto text-zinc-900" />              
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Masukkan Nama"
                                        bind:value={inputValueName}
                                        class="focus:outline-none block w-full rounded placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-10 md:pl-12 pr-4 h-12 text-gray-600"
                                    />
                                </div>
                                <div class="relative flex items-center">
                                    <div class="i-bi:link w-6 h-6 absolute left-2 md:left-4 inset-y-0 my-auto text-zinc-900" />              
                                    <input
                                        type="text"
                                        name="link"
                                        id="link"
                                        placeholder="Masukkan URL Link"
                                        bind:value={inputValueLink}
                                        class="focus:outline-none block w-full rounded placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-10 md:pl-12 pr-4 h-12 text-gray-600"
                                    />
                                </div>
                            </div>
                            <div class="w-full h-auto">
                                <button disabled={!inputValue} type="submit" class="flex justify-center md:justify-between items-center w-full h-auto {!inputValue ? 'bg-zinc-300' : 'bg-amber-500'} px-0 md:px-4 py-3 md:py-4 rounded-xl">
                                    <span class="relative text-xs font-black text-zinc-900 sm:block uppercase">Send</span>
                                    <div class="hidden md:block i-bi:send-fill w-4 h-4 text-zinc-900" />                    
                                </button>
                            </div>
                        </form>
                    </div>
                    {/if}
                {/if} -->

                {#if !$switchLayer}
                <div class="flex flex-col w-full h-auto mt-4 md:mt-8 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10">
                    <h3 class="text-center md:text-left uppercase text-lg md:text-xl font-bold text-gray-50 dark:text-white mb-2">Welcome back</h3>
                    <form 
                        class="flex flex-col justify-center items-center w-full h-auto bg-transparent"
                        on:submit|preventDefault="{handleSwitchLayerOne}">
                        <div class="grid grid-cols-2 gap-2 w-full h-auto mb-4">
                            <div class="col-span-full w-full h-auto relative flex items-center">
                                <div class="i-bi:person w-6 h-6 absolute left-2 md:left-4 inset-y-0 my-auto text-zinc-900" />              
                                <input
                                    type="text"
                                    name="url"
                                    id="url"
                                    placeholder="Masukkan Url"
                                    bind:value={urlLinkSite}
                                    class="focus:outline-none block w-full rounded placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-10 md:pl-12 pr-4 h-12 text-gray-600"
                                />
                            </div>
                            <!-- {#if urlLinkSite}
                            <div transition:fade class="col-span-full md:col-span-1 w-full h-auto relative flex items-center">
                                <div class="i-bi:person w-6 h-6 absolute left-2 md:left-4 inset-y-0 my-auto text-zinc-900" />              
                                <input
                                    disabled
                                    type="number"
                                    name="jumlah"
                                    id="jumlah"
                                    placeholder="Masukkan Jumlah"
                                    bind:value={countDataPerson}
                                    class="focus:outline-none block w-full rounded placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-10 md:pl-12 pr-4 h-12 text-gray-600"
                                />
                            </div>
                            {/if} -->
                        </div>
                        <div class="w-full h-auto">
                            <button disabled={!urlLinkSite && !countDataPerson} type="submit" class="flex justify-center md:justify-between items-center w-full h-auto {!inputValueName ? 'bg-zinc-300' : 'bg-amber-500'} px-0 md:px-4 py-3 md:py-4 rounded-xl">
                                <span class="relative text-xs font-black text-zinc-900 sm:block uppercase">Kirim</span>
                                <div class="hidden md:block i-bi:send-fill w-4 h-4 text-zinc-900" />                    
                            </button>
                        </div>
                    </form>
                </div>
                {/if}

            </div>
            
            {#if $switchLayer === "L1"}
                {#if $urlLink && $countData}
                    {#if $setListPersonData.length}
                    <div class="col-span-full flex flex-col w-full h-auto">
                        <div class="flex flex-col w-full h-auto mt-4 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10">
                            <div class="flex flex-col md:flex-row justify-between items-center">
                                <div class="flex flex-col w-auto h-auto pb-2">
                                    <span class="text-center md:text-left uppercase text-sm text-white font-bold">Daftar Akun</span>
                                    <span class="text-center md:text-left text-xs text-zinc-50 uppercase">Hasil pengambilan data dari pengguna instagram</span>
                                </div>
                            </div>
                            <div class="flex flex-col w-full h-96 space-y-2 overflow-y-auto">
                                {#each $setListPersonData as item (item.id)}
                                <div class="flex flex-row justify-between items-center md:items-center w-full h-auto bg-white p-4">
                                    <h3 class="uppercase text-sm md:text-md font-bold text-zinc-900 mb-0 md:mb-0">{item.text}</h3>
                                    <div class="flex flex-row justify-between md:justify-end items-center space-x-1 w-auto md:w-auto h-auto">
                                        <!-- <span class="flex items-center w-auto h-fit py-1 px-4 bg-black mr-4 md:mr-8">
                                            <span class="font-bold text-xs text-white">Profile</span>
                                        </span> -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 md:w-6 h-4 md:h-6 text-zinc-800 bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </div>
                                </div>
                                {/each}
                            </div>
                            <div class="flex flex-col md:flex-row justify-between items-center">
                                <div transition:fade class="flex flex-row space-x-2 w-auto h-auto mt-2 md:mt-0">
                                    <span class="text-sm tracking-tight uppercase font-thin text-white">Comment /</span>
                                    <span class="text-sm tracking-widest uppercase font-bold text-white">
                                        {countDataPerson ? countDataPerson : 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center items-center w-full h-auto mt-2 px-4 md:px-8">
                            <button type="button" class="w-full h-auto bg-gradient-to-r from-zinc-50 to-gray-100 text-center border border-gray-50 text-black rounded-xl p-2" on:click={() => handleSwitchLayerTwo()}>
                                <span class="uppercase text-xs font-black">Selanjutnya</span>
                            </button>
                        </div>
                    </div>
                    {/if}
                {/if}
            {/if}
            
            {#if $switchLayer === "L2"}
                {#if $urlLink && $countData}
                    {#if $setListPersonData.length}
                    <div class="col-span-full flex flex-col w-auto h-auto">
                        <div class="flex flex-col w-full h-96 overflow-y-auto mt-4 space-y-2 rounded-3xl bg-transparent border-none md:border border-zinc-400 p-4 sm:p-10">
                            <div class="flex flex-col w-auto h-auto pb-2">
                                <span class="text-center md:text-left uppercase text-sm text-white font-bold">Shorting Selected List</span>
                                <span class="text-center md:text-left text-xs text-zinc-50 uppercase">Hasil akhir, data pemilihan giveaway.</span>
                            </div>
                            {#each $setListPersonData as item (item.id)}
                            <div class="flex justify-between items-center w-full h-auto bg-white p-4">
                                <h3 class="uppercase text-sm md:text-md font-bold text-zinc-900">{item.text}</h3>
                                <!-- <button type="button" on:click={() => deleteItem(item.id)}>
                                    <div class="i-bi:trash w-4 md:w-6 h-4 md:h-6 text-red-500" /> 
                                </button> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 md:w-6 h-4 md:h-6 text-zinc-800 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                            {/each}
                        </div>
                        {#if $setListPersonData.length > 1 }
                        <div class="flex justify-center items-center w-full h-auto mt-2 px-4 md:px-8">
                            <button type="button" class="w-full h-auto p-2 bg-gradient-to-r from-amber-500 to-yellow-900 border border-amber-500 rounded-xl" on:click={() => randomPick($setListPerson)}>
                                <span class="uppercase text-xs font-black">Pilih Pemenang</span>
                            </button>
                        </div>
                        {/if}
                        <!-- <div class="flex justify-center items-center w-full h-auto mt-2 px-4 md:px-0">
                            <button type="button" class="w-full h-auto bg-gradient-to-r from-red-500 to-rose-900 border border-red-500 text-white rounded-xl p-2" on:click={() => deleteAllItem()}>
                                <span class="uppercase text-xs font-bold">Delete All</span>
                            </button>
                        </div>
                        <div class="flex justify-center items-center w-full h-auto mt-2 px-4 md:px-0">
                            <a href="/" rel="no-referrer" class="w-full h-auto bg-gradient-to-r from-zinc-50 to-gray-100 text-center border border-gray-50 text-black rounded-xl p-2" on:click={() => deleteAllItem()}>
                                <span class="uppercase text-xs font-black">Go to Application</span>
                            </a>
                        </div> -->
                    </div>
                    {/if}
                {/if}
            {/if}
        </div>
        <div class="flex flex-col w-auto h-auto mt-4 md:mt-16 pb-8">
            <div class="space-x-4 text-center">
                <span class="text-white text-xs">
                    <small>&copy; PT Unggulan Bugar Indonesia</small>
                </span>
            </div>
            <div class="flex flex-col space-y-1 text-center -mt-2">
                <span class="text-white text-xs">
                    <small>BETA V0.1</small>
                </span>
                <span class="text-white text-xs uppercase font-bold">
                    <small>Tools</small>
                </span>
            </div>
        </div>
    </div>
    {/if}
{/if}