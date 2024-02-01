<script lang="ts">
    import { fade } from "svelte/transition";
    import { Header, Footer } from '$shared/kalsofit';

    import { 
        genderList, 
        activityLevels,
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
	let selectedActivity;

    // USDA Dietary Guideline (2020) - 10-30%
    let btr: number = 0.1; // 10%
    let btrCount: number; // Count
    let btt: number = 0.3; // 30%
    let bttCount: number; // Count
    let proteinValue: number = 4; // Value
    let btrProtein: number; // Count
    let bttProtein: number; // Count

    let height: number = 0;
    let heightCount: number = 0;
    let weight: number = 0;
    let age: number = 0;

    let bmi: number = 0;
    let bmiResult: string;
    let bmr: number = 0;

    let noTdee: number = 0;
    let kcalResult: string;

    let status: string;
    let gramsInTake: string;
    let kcalInTake: string;
    let proteinInTake: string;
    let statusClass: string;
	let selectedComponent;  

    function handleSubmit() {

        heightCount = height / 100;
        bmi = (weight / (heightCount * heightCount));
        bmiResult = bmi.toFixed(2);

        if(selected === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            if (selectedActivity.level === 'level_1') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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
                selectedComponent;
            }
        }
        
        if(selected === 'female') {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            if (selectedActivity.level === 'level_1') {
                noTdee = bmr * selectedActivity.value;
                kcalResult = noTdee.toFixed(1);

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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

                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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
                
                btrCount = noTdee * btr;
                bttCount = noTdee * btt;
                btrProtein = btrCount/proteinValue;
                bttProtein = bttCount/proteinValue;

                status = `USDA Dietary Guideline (2020)`;
                gramsInTake = `${btrProtein.toFixed()} - ${bttProtein.toFixed()} Grams`
                kcalInTake = `(${btrCount.toFixed()} - ${bttCount.toFixed()} kcal)`
                proteinInTake = `10-30% Energi` 
                statusClass = "text-zinc-100";
                
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
                selectedComponent;
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
    <div class="flex justify-center items-center w-full h-auto px-0 md:px-0">
        <Disclosure class="flex flex-col justify-center items-start w-full h-auto bg-white shadow border-b" let:open>
            <DisclosureButton class="flex flex-row justify-between items-center w-full h-auto bg-zinc-200 shadow px-4 py-2">
                <div class="flex flex-row items-center space-x-1 text-left">
                    <div class="w-2 h-2 bg-emerald-500"></div>
                    <div class="flex items-start relative">
                        <span class="text-zinc-900 font-bold">Kalkulator</span>
                        <small class="diagonal-fractions font-black ml-1 text-amber-700 uppercase">
                            Protein
                        </small>
                    </div>
                </div>
                <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
            </DisclosureButton>
            <!-- This example uses Tailwind's transition classes -->
            <Transition
                class="w-full h-auto"
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
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
                                                    <input type="number" name="age" id="age" max="80" min="15" required placeholder="15 - 80" bind:value={age} class="text-slate-400 w-full rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
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
                                <h1 class="font-black uppercase text-xs leading-none text-zinc-900">{proteinInTake ? proteinInTake : '-'}</h1>
                            </div>
                        </div>
                        
                        <div transition:fade class="flex flex-col md:flex-row w-full h-auto px-0 md:px-2 border border-zinc-600 rounded-md mb-2">
                            <div class="grid grid-cols-4 gap-2 md:gap-4 justify-center items-center w-full h-auto">
                                <div class="col-span-full md:col-span-2 flex flex-col space-y-2 w-full h-auto p-4">
                                    <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-white shadow-md">
                                        <small class="uppercase font-bold text-xs text-zinc-500">Height (CM)</small>
                                        <div class="flex justify-between items-end w-full h-auto">
                                            <h1 class="font-black uppercase text-5xl md:text-6xl">{height}</h1>
                                            <div class="flex justify-center items-center w-12 h-12 bg-amber-600">
                                                <h1 class="font-black uppercase text-xl text-amber-100">CM</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-span-full md:col-span-2 flex flex-col space-y-2 w-full h-auto p-4">
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
                                <div class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4">
                                    <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-200 shadow-md selection:border-b-4 {kcalResult ? `border-black` : `border-zinc-500`}">
                                        <small class="uppercase font-bold text-xs text-zinc-500">Calorie Result</small>
                                        <div class="flex flex-col space-y-1 justify-center items-start w-full h-auto">
                                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full h-auto">
                                                <h1 class="font-black uppercase text-2xl md:text-4xl">{kcalResult ? kcalResult : '-'}</h1>
                                                <div class="flex justify-center items-center w-full md:w-auto px-2 h-auto bg-amber-600 mt-2 md:mt-0">
                                                    <h1 class="font-black uppercase text-md text-amber-100">Kcal/Day</h1>
                                                </div>
                                            </div>
                                            <h1 class="font-bold uppercase text-sm leading-none text-zinc-400">{status ? status : '-'}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4">
                                    <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-900 shadow-md border-b-4 {kcalResult ? `border-black` : `border-zinc-500`}">
                                        <small class="uppercase font-bold text-xs text-zinc-200">Recommendation Protein in Grams</small>
                                        <div class="flex flex-col space-y-1 justify-center items-start w-full h-auto">
                                            <h1 class="font-black uppercase text-xl md:text-2xl leading-none {statusClass ? statusClass : `text-zinc-200`}">{gramsInTake ? gramsInTake : '-'}</h1>
                                            <h1 class="font-bold uppercase text-sm leading-none text-yellow-200">{status ? status : '-'}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4">
                                    <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-900 shadow-md border-b-4 {kcalResult ? `border-black` : `border-zinc-500`}">
                                        <small class="uppercase font-bold text-xs text-zinc-200">Recommendation Protein in Kcal</small>
                                        <div class="flex flex-col space-y-1 justify-center items-start w-full h-auto">
                                            <h1 class="font-black uppercase text-xl md:text-2xl leading-none {statusClass ? statusClass : `text-zinc-200`}">{kcalInTake ? kcalInTake : '-'}</h1>
                                            <h1 class="font-bold uppercase text-sm leading-none text-yellow-200">{status ? status : '-'}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-full md:col-span-1 flex flex-col space-y-2 w-full h-auto p-4">
                                    <div class="relative flex flex-col w-full md:w-auto h-auto p-4 bg-zinc-900 shadow-md border-b-4 {kcalResult ? `border-black` : `border-zinc-500`}">
                                        <small class="uppercase font-bold text-xs text-zinc-200">Recommendation Protein inTake</small>
                                        <div class="flex flex-col space-y-1 justify-center items-start w-full h-auto">
                                            <h1 class="font-black uppercase text-xl md:text-2xl leading-none {statusClass ? statusClass : `text-zinc-200`}">{proteinInTake ? proteinInTake : '-'}</h1>
                                            <h1 class="font-bold uppercase text-sm leading-none text-yellow-200">{status ? status : '-'}</h1>
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
                                    <small class="font-bold text-zinc-900 uppercase">What are proteins?</small>
                                </div>
                                <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                            </DisclosureButton>
                            
                            <DisclosurePanel class="text-zinc-900 w-full h-auto shadow p-4">
                                <div class="flex flex-col space-y-4 w-full h-auto border-l-8 border-amber-500 px-2 md:px-4">
                                    <div class="flex flex-row justify-start items-start w-full h-auto">
                                        <div class="text-sm w-auto h-auto leading-none">
                                            Proteins, just like carbohydrates and fats, are macronutrients - substances used by organisms to produce energy and sustain basic bodily functions. Being organisms, proteins are essential to our existence. Different types of proteins build our muscles and regulate our hormones and metabolism. Some of them are globulins called antibodies - without proteins, our immune system wouldn't work.
                                        </div>
                                    </div>

                                    <div class="flex flex-row justify-start items-start w-full h-auto">
                                        <div class="text-sm w-auto h-auto leading-none">
                                            There is also another group of proteins, albumins. These globular proteins are found in our blood and travel through our body's blood vessels. Albumins serve many roles. They transport various substances that need to get to every part of our body: cations (Na⁺, K⁺, Ca²⁺, Mg²⁺), fatty acids, bilirubin, hormones (including thyroxine), and some pharmaceuticals (if administered). It has some serious clinical implications. Clinicians should remember that the serum calcium and magnesium levels can be altered due to hypoalbuminemia – a state of low albumin level in blood serum. Acquired Ca²⁺ and Mg²⁺ levels have to be corrected using special equations. Our corrected calcium calculator and corrected magnesium calculator use them and perform calculations for doctors!
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-row justify-start items-start w-full h-auto">
                                        <div class="text-sm w-auto h-auto leading-none">
                                            Albumins are also responsible for keeping adequate oncotic blood pressure. It is the force that keeps the blood inside the arteries and veins. When there is a low serum albumin level, the patient may suffer from edemas, where fluids escape the bloodstream, enter the tissues, and stay there. Clinicians use this knowledge to determine the source of ascites (an excess of fluid inside the peritoneal cavity). Visit our serum-ascites albumin gradient calculator to learn more on this topic.
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-row justify-start items-start w-full h-auto">
                                        <div class="text-sm w-auto h-auto leading-none">
                                            When on a vegan or vegetarian diet, it's best to consult a professional dietitian to ensure that you consume sufficient amounts of various macronutrients, including protein.
                                        </div>
                                    </div>

                                    <div class="flex flex-row justify-start items-start w-full h-auto">
                                        <div class="text-sm w-auto h-auto leading-none">
                                            Now, if your friends ask you: "what is the function of proteins?" you can already elaborate on many topics concerning the proper functioning of our bodies and mention a few examples of proteins. Now it is time to answer the question: "How much protein do I need?".
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
            </Transition>
        </Disclosure>                  
    </div>
</div>