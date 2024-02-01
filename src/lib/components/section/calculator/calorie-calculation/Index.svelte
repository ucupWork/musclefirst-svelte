<script lang="ts">
    import { fade } from "svelte/transition";
    import { Header, Footer } from '$shared/kalsofit';

    import { 
        genderList, 
        activityLevels, 
        commonFoodsCalories,
        calorieDenseFoods 
    } from '$utils/calculator-data';
    
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";

    // Calorie Screen
    import {
        ScreenLevelZero 
    } from '$shared/calorie-screen/index';
    // BMI Screen
    import {
        HealthyScreen,
        ObeseScreen,
        OverweightScreen,
        UnderweightScreen,
        SevereObeseScreen
    } from '$shared/bmi-screen/index';
    
	let selected: any;
	let selectedActivity;

    let height: number = 0;
    let heightCount: number = 0;
    let weight: number = 0;
    let age: number = 0;
    let minAge: number = 18;
    let maxAge: number = 80;

    let bmi: number = 0;
    let bmiResult: string;
    let bmr: number = 0;

    let noTdee: number = 0;
    let kcalResult: string;

    let status: string;
    let statusClass: string;
	let selectedComponent;  
    
    let open: boolean = true;

    function handleSubmit() {

        heightCount = height / 100;
        bmi = (weight / (heightCount * heightCount));
        bmiResult = bmi.toFixed(2);

        if(selected === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            if (selectedActivity.level === 'level_1') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelOne;
                
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
            else if (selectedActivity.level === 'level_2') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelTwo;
                
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
            else if (selectedActivity.level === 'level_3') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelThree;
                
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
            else if (selectedActivity.level === 'level_4') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelFour;
                
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
            else if (selectedActivity.level === 'level_5') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelFive;
                
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
            else if (selectedActivity.level === 'level_6') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelSix;
                
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
            else {
                status = "";
                statusClass = "text-zinc-200";
                selectedComponent = ScreenLevelZero;
            }
        }
        
        if(selected === 'female') {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            if (selectedActivity.level === 'level_1') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelOne;
                
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
            else if (selectedActivity.level === 'level_2') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelTwo;
                
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
            else if (selectedActivity.level === 'level_3') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelThree;
                
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
            else if (selectedActivity.level === 'level_4') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelFour;
                
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
            else if (selectedActivity.level === 'level_5') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelFive;
                
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
            else if (selectedActivity.level === 'level_6') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);        

                status = `${selectedActivity.label}`;
                statusClass = "text-zinc-900";
                // selectedComponent = ScreenLevelSix;
                
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
            else {
                status = "";
                statusClass = "text-zinc-200";
                selectedComponent = ScreenLevelZero;
            }
        }
    }

    function handleReset() {
        age = 0;
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
                        {'Kalkulasi Kalori'}
                    </span>
                </div>
                <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static class="text-zinc-900 w-full h-auto shadow p-4">
                <div class="flex flex-col w-full h-auto mb-4">
                    <!-- Calorie Calculation -->
                    <form on:submit|preventDefault="{handleSubmit}" class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-end w-full h-auto bg-white p-4 border">
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
                                                    {#each genderList as v}
                                                        <option value={v.value}>{v.label}</option>
                                                    {/each}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-full w-full h-auto">
                                        <div class="flex flex-col space-y-1 justify-center items-start">
                                            <div class="flex space-x-1 w-full md:w-auto h-auto">
                                                <small class="text-slate-900 font-bold text-sm uppercase">Age</small>
                                            </div>
                                            <div class="flex flex-col space-y-2 w-full h-auto">
                                                <input type="number" name="age" id="age" max={maxAge} min={minAge} required placeholder="15 - 80" bind:value={age} class="text-slate-400 w-full rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                                                <input bind:value={age} class="in-range:border-green-500 ut-of-range:border-red-500 bg-amber-500" type=range max="80" min="15" step=5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full w-full h-auto">
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
                            </div>
                            <div class="col-span-full w-full md:w-auto h-auto">
                                <div class="w-full md:w-auto h-auto border border-zinc-300 shadow p-4">
                                    <div class="flex flex-col space-y-1 justify-center items-start">
                                        <div class="flex space-x-1 w-full md:w-auto h-auto">
                                            <small class="text-slate-900 font-bold text-sm uppercase">Activity</small>
                                        </div>
                                        <div class="flex flex-col space-y-2 w-full md:w-full h-auto">
                                            <select bind:value={selectedActivity} id="activity" name="activity" autocomplete="activity-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-3 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm">
                                                {#each activityLevels as activity}
                                                    <option value={activity}>{activity.label}</option>
                                                {/each}
                                            </select>
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
                            <h1 class="font-black uppercase text-xs leading-none {statusClass}">{status ? status : '-'} / {kcalResult ? kcalResult : '-'} Kcal/Hari</h1>
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
                                    <small class="uppercase font-bold text-xs text-zinc-500">Calorie Result</small>
                                    <div class="flex justify-between items-end w-full h-auto">
                                        <h1 class="a-text font-black uppercase text-5xl md:text-6xl">{kcalResult ? kcalResult : '-'}</h1>
                                        <div class="flex justify-center items-center w-full md:w-auto px-2 h-12 bg-amber-600 mt-2 md:mt-0">
                                            <h1 class="font-black uppercase text-xl text-amber-100">Kcal/Day</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {#if selectedComponent}
                        <svelte:component {kcalResult} {statusClass} {status} this={selectedComponent} />
                    {/if}
                {/if}
                <!-- End Height && Weight Condition -->
                
                <div class="flex flex-col w-full h-auto pt-4 px-0">
                    <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow" let:open>
                        <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4">
                            <div class="flex items-center space-x-2 w-auto h-auto text-xs">
                                <div class="i-ph:info h-4 w-4 text-amber-500" />
                                <small class="font-bold text-zinc-900 uppercase">Calories in Common Foods</small>
                            </div>
                            <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="text-zinc-900 w-full h-auto shadow p-4">
                            <div class="flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4">
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <table class="table-auto w-full">
                                        <thead class="table-header-group">
                                            <tr class="table-row">
                                            <td class="table-cell font-bold">Food</td>
                                            <td class="table-cell font-bold">Serving</td>
                                            <td class="table-cell font-bold">Calories</td>
                                            <td class="table-cell font-bold">kJ</td>
                                            </tr>
                                        </thead>
                                        {#each commonFoodsCalories as category }
                                        <tbody>
                                            <tr class="category-row border bg-black px-4">
                                                <td class="text-white table-cell font-bold">{category.categoryName}</td>
                                            </tr>
                                            {#each category.categoryRows as row }
                                            <tr class="bg-white shadow border">
                                                <td class="text-sm uppercase text-medium">{row.food}</td>
                                                <td class="text-sm uppercase text-medium">{row.servingSize}</td>
                                                <td class="text-sm uppercase text-medium">{row.calories}</td>
                                                <td class="text-sm uppercase text-medium">{row.kJ}</td>
                                            </tr>
                                            {/each}
                                        </tbody>
                                        {/each}
                                    </table>
                                </div>
                            </div>
                        </DisclosurePanel>
                    </Disclosure>         

                    <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow" let:open>
                        <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto bg-zinc-100 shadow py-2 px-4">
                            <div class="flex items-center space-x-2 w-auto h-auto text-xs">
                                <div class="i-ph:info h-4 w-4 text-amber-500" />
                                <small class="font-bold text-zinc-900 uppercase">Top Calories to Gain Weight</small>
                            </div>
                            <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="text-zinc-900 w-full h-auto shadow p-4">
                            <div class="flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4">
                                <div class="flex flex-row justify-start items-start w-full h-auto">
                                    <table class="table-auto w-full">
                                        <thead class="table-header-group">
                                            <tr class="table-row">
                                            <td class="text-zinc-900 table-cell font-bold">Food</td>
                                            <td class="text-zinc-900 table-cell font-bold">Calories / 100G</td>
                                            </tr>
                                        </thead>
                                        {#each calorieDenseFoods as food }
                                        <tbody>
                                            <tr class="food-row bg-transparent px-4">
                                                <td class="text-sm uppercase text-medium">{food.name}</td>
                                                <td class="text-sm uppercase text-medium">{food.calories}</td>
                                            </tr>
                                        </tbody>
                                        {/each}
                                    </table>
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