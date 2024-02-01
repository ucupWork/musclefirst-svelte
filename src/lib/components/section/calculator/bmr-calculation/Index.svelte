<script lang="ts">
    import { fade } from "svelte/transition";
    import { Header, Footer } from '$shared/kalsofit';

    import { 
        genderList
    } from '$utils/calculator-data';

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
    
	let selected: any;
	// let selectedKalkulasi: any;

    let height: number = 0;
    let heightCount: number = 0;
    let weight: number = 0;
    let age: number = 0;
    let minAge: number = 18;
    let maxAge: number = 80;
    
    let bmi: number = 0;
    let bmiResult: string;
    
    let bmr: number = 0;
    // let bmrCount: number = 0;

    let bodyFat: number = 0;
    let bmrResult: string;
    
    let error: string;
    let errorClass: string;

	let selectedComponent;
    
    let open: boolean = true;

    function handleSubmit() {
    
        heightCount = height / 100;
        bmi = (weight / (heightCount * heightCount));
        bmiResult = bmi.toFixed(2);

        if(age >= 18 && age < 80) {
            if(selected === 'male') {

                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
                bmrResult = bmr.toFixed(0);

                if (bmi < 18.5) {
                    selectedComponent = UnderweightScreen;
                }
                else if (bmi >= 18.5 && bmi < 25) {
                    selectedComponent = HealthyScreen;
                }
                else if (bmi >= 25 && bmi < 30) {
                    selectedComponent = OverweightScreen;
                }
                else if (bmi >= 30 && bmi < 35) {
                    selectedComponent = ObeseScreen;
                } 
                else if (bmi >= 35) {
                    selectedComponent = SevereObeseScreen;
                } 
                else {
                    selectedComponent;
                }

            }
            
            if(selected === 'female') {

                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
                bmrResult = bmr.toFixed(0);

                if (bmi < 18.5) {
                    selectedComponent = UnderweightScreen;
                }
                else if (bmi >= 18.5 && bmi < 25) {
                    selectedComponent = HealthyScreen;
                }
                else if (bmi >= 25 && bmi < 30) {
                    selectedComponent = OverweightScreen;
                }
                else if (bmi >= 30 && bmi < 35) {
                    selectedComponent = ObeseScreen;
                } 
                else if (bmi >= 35) {
                    selectedComponent = SevereObeseScreen;
                } 
                else {
                    selectedComponent;
                }

            }
        } else {
            error = "This calculation was created for adults aged 18-80, choose the \"Teenagers\" field option at the top";
            errorClass = "text-red-500";
        }
    }
    
    function handleReset() {
        height = 0;
        weight = 0;
    }
</script>

<div class="flex flex-col w-full h-auto">
    <div class="flex justify-center items-center w-full h-auto px-0 md:px-2">
        <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b">
            <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto shadow p-4">
                <div class="flex flex-row space-x-1 text-left">
                    <div class="w-2 h-2 bg-emerald-500"></div>
                    <span class="font-bold text-zinc-900">
                        {'Kalkulasi BMR (Basal Metabolic Rate)'}
                    </span>
                </div>
                <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static class="text-zinc-900 w-full h-auto shadow p-4">
                <div class="flex flex-col w-full h-auto mb-4">
                    <!-- Body Fat Calculation -->
                    <form on:submit|preventDefault={handleSubmit} class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border">
                        <div class="grid grid-cols-2 gap-2 w-full md:w-auto">
                            
                            <div class="col-span-full w-full h-auto">
                                <Header />
                                <div class="grid grid-cols-2 gap-4 w-full h-auto border border-zinc-300 shadow p-4">
                                    <div class="col-span-full w-full md:w-auto h-auto">
                                        <div class="flex flex-col space-y-1 justify-center items-start">
                                            <div class="flex space-x-1 w-full md:w-auto h-auto">
                                                <small class="text-slate-900 font-bold text-sm uppercase">Gender</small>
                                            </div>
                                            <div class="flex flex-col space-y-2 w-full md:w-full h-auto">
                                                <select bind:value={selected} id="gender" name="gender" autocomplete="gender-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm">
                                                    <option selected disabled>Pilihan</option>
                                                    {#each genderList as v}
                                                        <option value={v.value}>{v.label}</option>
                                                    {/each}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-full w-full h-auto">
                                        <div class="flex flex-col space-y-1 justify-center items-start w-full">
                                            <div class="flex items-center space-x-1 w-full h-auto">
                                                <small class="text-slate-900 font-bold text-sm uppercase">Age</small>
                                            </div>
                                            <div class="flex flex-col space-y-2 w-full h-auto">
                                                <input required bind:value={age} class="text-slate-400 w-full md:w-auto rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700" type="number" name="age" id="age">
                                                <input bind:value={age} class="in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500" type=range max={maxAge} min={minAge}>
                                            </div>
                                        </div>
                                    </div>
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
                    <div class="flex justify-between items-center w-full h-auto mb-2">
                        <div class="flex flex-row items-center space-x-1 w-auto h-auto">
                            <small class="uppercase font-bold text-xs text-zinc-800">Status :</small>
                            <h1 class="font-black uppercase text-xs leading-none">{bmrResult ? bmrResult : '-'} Kcal/Hari</h1>
                        </div>
                    </div>
                    <div transition:fade class="flex flex-col md:flex-row w-full h-auto px-0 md:px-2 border border-zinc-600 rounded-md mb-2">
                        <div class="grid grid-cols-2 gap-2 md:gap-4 justify-center items-end w-full h-auto">
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
                                    <small class="uppercase font-bold text-xs text-zinc-500">BMR (Basal Metabolic Rate) Result</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="a-text font-black uppercase text-5xl md:text-6xl">{bmrResult ? `${bmrResult}` : '-'}</h1>
                                        <div class="flex justify-center items-center w-auto h-auto p-2 bg-amber-600">
                                            <h1 class="font-black uppercase text-xl text-amber-100">Kcal/Day</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {#if selectedComponent}
                        <svelte:component {bmrResult} this={selectedComponent} />
                    {/if}
                {/if}
                <!-- End Height && Weight Condition -->
                
                <div class="flex flex-col w-full h-auto pt-4 px-0">
                    <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow" let:open>
                        <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4">
                            <div class="flex items-center space-x-2 w-auto h-auto text-xs">
                                <div class="i-ph:info h-4 w-4 text-amber-500" />
                                <small class="font-bold text-zinc-900 uppercase">Apa Itu BMR (Basal Metabolic Rate)?</small>
                            </div>
                            <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="text-zinc-900 w-full h-auto shadow p-4">
                            <div class="flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4">
                
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <div class="text-sm w-auto h-auto leading-none">
                                        Tingkat Metabolisme Basal adalah jumlah energi yang digunakan tubuh manusia saat beristirahat. hal ini sebagai jumlah energi yang dibutuhkan tubuh Anda untuk mendukung fungsi vitalnya: pernapasan, sirkulasi darah, pengendalian suhu tubuh, fungsi otak dan saraf. Otak,  sistem saraf pusat, dan hati merupakan organ yang paling banyak menggunakan energi saat istirahat . dalam sehari lebih banyak energi yang diperoleh dari volume cairan dan ion dibandingkan kerja mekanis dari otot yang berkontraksi (seperti, pernapasan). BMR akan mengoreksi konsentrasi dan jumlah zat lainnya diberbagai area tubuh untuk mempertahankan homeostasis (keadaan kondisi internal yang stabil). Pada skala seluruh tubuh, ini menghasilkan banyak energi. Ini menjelaskan mengapa sistem saraf pusat kita mengkonsumsi begitu banyak energi dalam hal Tingkat Metabolisme Basal.
                                    </div>
                                </div>
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <div class="text-sm w-auto h-auto leading-none">
                                        <b>Aktivitas seperti berjalan, berlari, bekerja, berbicara, dan bahkan mencerna merupakan tindakan yang membutuhkan energi ekstra lebih besar daripada Tingkat Metabolisme Basal.</b> Itu karena kebanyakan orang tidak menghabiskan sepanjang hari di tempat tidur tanpa bergerak. Untuk mengeluarkan energi yang rendah, Anda harus tidak aktif secara fisik dan psikologis. Dengan kata lain, Anda tidak perlu menggunakan otot atau berpikir secara intensif dan harus sesantai mungkin secara manusiawi. Kriteria lain yang diperlukan termasuk tinggal di lingkungan dengan kenyamanan termal dan tidak makan untuk jangka waktu tertentu. Kondisi terakhir memastikan bahwa Anda tidak akan menggunakan energi untuk mencerna makanan. Dalam pengaturan ilmiah, BMR sering diukur selama periode tidur.
                                    </div>
                                </div>
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <div class="text-sm w-auto h-auto leading-none">
                                        <b>BMR Anda menyumbang sekitar 60% hingga 75% dari Pengeluaran Energi Total</b>, tergantung pada gaya hidup dan tingkat aktivitas Anda. Pengeluaran Energi Total adalah jumlah total kalori yang Anda bakar setiap hari. Sisa Pengeluaran Energi Total Anda berasal dari aktivitas fisik (berjalan, berbicara, makan, dll.) dan pencernaan makanan. Aktivitas fisik menyumbang sekitar 20% dari Pengeluaran Energi Total Anda tetapi dapat sedikit berbeda tergantung pada seberapa intensitas keseringan berolahraga. Pencernaan makanan, atau seperti yang dikatakan beberapa orang termogenesis postprandial (setelah makan), menggunakan sekitar 10% dari Pengeluaran Energi Total Anda. BMR cenderung menurun seiring bertambahnya usia dan dengan massa tubuh tanpa lemak yang lebih rendah. Di sisi lain, meningkatkan massa otot Anda kemungkinan besar akan meningkatkan BMR Anda. Dan masih banyak tentang hal-hal berbeda yang mempengaruhi Tingkat Metabolisme Basal dalam faktor-faktor yang memengaruhi paragraf BMR.
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