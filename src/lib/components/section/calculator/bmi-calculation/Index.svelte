<script lang="ts">
    import { fade } from "svelte/transition";
    import { Header, Footer } from '$shared/kalsofit';
    
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
    
    // BMI Screen
    import {
        HealthyScreen,
        ObeseScreen,
        OverweightScreen,
        UnderweightScreen,
        SevereObeseScreen
    } from '$shared/bmi-screen/index';
    
    let height: number = 0;
    let heightCount: number = 0;
    let weight: number = 0;
    let bmi: number = 0;
    let bmiResult: string;

    let status: string;
    let statusClass: string;
	let selectedComponent;
    
    let open: boolean = true;

    function handleSubmit() {
        
        heightCount = height / 100;
        bmi = (weight / (heightCount * heightCount));
        bmiResult = bmi.toFixed(2);
        
        if (bmi < 18.5) {
            status = "Underweight";
            statusClass = "text-amber-500";
            selectedComponent = UnderweightScreen;
        }
        else if (bmi >= 18.5 && bmi < 25) {
            status = "Healthy";
            statusClass = "text-emerald-500";
            selectedComponent = HealthyScreen;
        }
        else if (bmi >= 25 && bmi < 30) {
            status = "Overweight";
            statusClass = "text-red-500";
            selectedComponent = OverweightScreen;
        }
        else if (bmi >= 30 && bmi < 35) {
            status = "Obese";
            statusClass = "text-red-700";
            selectedComponent = ObeseScreen;
        } 
        else if (bmi >= 35) {
            status = "Severe Obese";
            statusClass = "text-red-900";
            selectedComponent = SevereObeseScreen;
        } 
        else {
            status = "";
            statusClass = "text-zinc-200";
            selectedComponent;
        }
    }
    
    function handleReset() {
        height = 0;
        weight = 0;
    }
</script>

<div class="flex flex-col w-full h-auto">
    <div class="flex justify-center items-center w-full h-auto px-0 md:px-0">
        <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b">
            <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto shadow p-4">
                <div class="flex flex-row space-x-1 text-left">
                    <div class="w-2 h-2 bg-emerald-500"></div>
                    <span class="font-bold text-zinc-900">
                        {'Kalkulasi BMI (Body Mass Index)'}
                    </span>
                </div>
                <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static class="text-zinc-900 w-full h-auto shadow p-4">
                <div class="flex flex-col w-full h-auto mb-4">
                    <!-- BMI Calculation -->
                    <form on:submit|preventDefault={handleSubmit} class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border">
                        <div class="grid grid-cols-2 gap-2 w-full md:w-auto">
                            
                            <div class="col-span-full w-full h-auto">
                                <Header />
                                <div class="grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4">
                                    <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                        <div class="flex flex-col space-y-1 justify-center items-start">
                                            <div class="flex items-center space-x-1 w-full md:w-auto h-auto">
                                                <small class="text-slate-900 font-bold text-sm uppercase">Height</small>
                                                <small class="text-slate-900 font-medium text-xs uppercase">(CM)</small>
                                            </div>
                                            <div class="flex flex-col space-y-2 w-full md:w-auto h-auto">
                                                <input required bind:value={height} class="text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700" type="number" name="height" id="height">
                                                <input bind:value={height} class="in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500" type=range max="230" min="130" step=5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                                        <div class="flex flex-col space-y-1 justify-center items-start">
                                            <div class="flex items-center space-x-1 w-full md:w-auto h-auto">
                                                <small class="text-slate-900 font-bold text-sm uppercase">Weight</small>
                                                <small class="text-slate-900 font-medium text-xs uppercase">(KG)</small>
                                            </div>
                                            <div class="flex flex-col space-y-2 w-full md:w-auto h-auto">
                                                <input required bind:value={weight} class="text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700" type="number" name="weight" id="weight">
                                                <input bind:value={weight} class="in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500" type=range max="160" min="40" step=5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    
                        <div class="grid grid-cols-2 gap-2 md:gap-4 w-full md:w-auto h-auto">
                            <button type="submit" class="col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-emerald-500 rounded-md">
                                <span class="font-bold text-white">Send Calculation</span>
                            </button>
                            <button on:click={handleReset} type="button" class="col-span-full md:col-span-1 w-full md:w-64 h-auto py-2 bg-rose-500 rounded-md">
                                <span class="font-bold text-white">Reset Calculation</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Height && Weight Condition -->
                {#if height && weight}
                    <div class="flex justify-between items-center w-full h-auto">
                        <div class="flex flex-row items-center space-x-1 w-auto h-auto">
                            <small class="uppercase font-bold text-xs text-zinc-800">Status :</small>
                            <h1 class="font-black uppercase text-xs leading-none {statusClass}">{status ? status : '-'}</h1>
                        </div>
                    </div>
                    <div transition:fade class="flex flex-col md:flex-row w-full h-auto px-0 md:px-2 border border-zinc-600 rounded-md mb-2">
                        <div class="grid grid-cols-2 gap-2 md:gap-4 justify-center items-center w-full h-auto">
                            <div class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4">
                                <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-white shadow-md">
                                    <small class="uppercase font-bold text-xs text-zinc-500">Height (CM)</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="font-black uppercase text-5xl md:text-6xl">{height}</h1>
                                        <div class="flex justify-center items-center w-12 h-12 bg-amber-600">
                                            <h1 class="font-black uppercase text-xl text-amber-100">CM</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-white shadow-md">
                                    <small class="uppercase font-bold text-xs text-zinc-500">Weight (KG)</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="font-black uppercase text-5xl md:text-6xl">{weight}</h1>
                                        <div class="flex justify-center items-center w-12 h-12 bg-amber-600">
                                            <h1 class="font-black uppercase text-xl text-amber-100">KG</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div 
                                class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4"
                            >
                                <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-200 shadow-md">
                                    <small class="uppercase font-bold text-xs text-zinc-500">BMI Result</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="a-text font-black uppercase text-5xl md:text-6xl">{bmiResult ? bmiResult : '-'}</h1>
                                        <div class="flex justify-center items-center w-12 h-12 bg-amber-600">
                                            <h1 class="font-black uppercase text-xl text-amber-100">BMI</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-900 shadow-md border-b-4 {bmiResult ? `border-black` : `border-zinc-500`}">
                                    <small class="uppercase font-bold text-xs text-zinc-200">Status</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="a-text font-black uppercase text-5xl md:text-6xl leading-none {statusClass ? statusClass : `text-zinc-200`}">{status ? status : '-'}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {#if selectedComponent}
                        <svelte:component {statusClass} {status} this={selectedComponent} />
                    {/if}
                {/if}
                <!-- End Height && Weight Condition -->
                
                <div class="flex flex-col w-full h-auto pt-4 px-0">
                    <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow" let:open>
                        <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4">
                            <div class="flex items-center space-x-2 w-auto h-auto text-xs">
                                <div class="i-ph:info h-4 w-4 text-amber-500" />
                                <small class="font-bold text-zinc-900 uppercase">BMI & Kesehatan</small>
                            </div>
                            <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="text-zinc-900 w-full h-auto shadow p-4">
                            <div class="flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4">
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <div class="text-sm w-auto h-auto leading-none">
                                        <span class="font-bold uppercase">Lemak tubuh itu relevan, bukan massa tubuh.</span>
                                        Hal ini menyangkut kesehatan, dimana kelebihan lemak tubuh adalah negatif. Sebaliknya, massa otot di atas rata-rata lebih cenderung positif. BMI tidak membedakan antara lemak tubuh dan massa bebas lemak. Namun, statistik menunjukkan bahwa indeks massa tubuh sekitar 73 persen orang merupakan indikator yang cukup signifikan dari persentase lemak tubuh. Bahkan, dalam tiga dari empat kasus, BMI memiliki relevansi yang signifikan dengan kesehatan. 
                                    </div>
                                </div>
                                
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <div class="text-sm w-auto h-auto leading-none">
                                        <span class="font-bold uppercase">Persentase lemak tubuh VS BMI</span>
                                        Meskipun relevansinya tinggi dengan kesehatan, persentase lemak tubuh memiliki kekurangan. Timbangan untuk mengukur lemak tubuh mudah digunakan tetapi tidak akurat; metode yang lebih akurat sangat rumit sehingga membutuhkan tenaga ahli. BMI, sebaliknya, dapat dihitung dari dua pengukuran sederhana yang dapat diandalkan dalam banyak kasus. Hal ini menjadi alasan utama mengapa BMI masih menjadi nilai yang paling banyak digunakan untuk memperkirakan lemak tubuh.
                                    </div>
                                </div>
                            </div>
                        </DisclosurePanel>
                    </Disclosure>           
                </div>

                <div class="flex w-full h-auto bg-white px-4 text-xs mt-2">
                    <small class="uppercase">Tools dan kalkulasi ini masih dalam pengembangan, untuk lebih detail nya bisa kunjungi dokter dan pihak nutrisi favorit anda.</small>
                </div>
            </DisclosurePanel>
            {/if}
        </Disclosure>                  
    </div>
</div>