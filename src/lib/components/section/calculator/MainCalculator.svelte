<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";
    
    import { 
        BmiCalculation, 
        BmrCalculation,
        CalorieCalculation,
        TdeeCalculation,
        ProteinCalculation,
    } from './index';
    
    export let id: string;
    
    const showText = writable(true);
    setContext("show-text", showText);
</script>

<div {id} class="flex flex-col w-full h-auto bg-zinc-100 relative py-8 md:py-0">
    <div class="flex flex-col w-full h-auto bg-transparent relative">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto">
            <div class="flex flex-col w-full h-auto px-8 md:px-16 max-w-2xl pb-8 md:pb-0 py-0 md:py-8">
                <div class="flex items-start flex-row w-full h-auto">
                    <h2 class="font-blackttnorms tracking-tighter font-black text-black text-5xl md:text-6xl">
                        {'Musclefirst'}
                    </h2>
                    <h2 class="font-blackttnorms tracking-tighter font-black text-amber-500 text-xl">
                        {'Kalkulator'}
                    </h2>
                </div>
                <span class="text-sm font-normal py-2 text-zinc-900 max-w-sm">
                    {'Kalkulator kesehatan online untuk mengukur asupan nutrisi yang dibutuhkan tubuh secara akurat.'}
                </span>
            </div>
        </div>
        <div class="pb-4 px-4 md:px-16">
            <TabGroup class="w-full h-auto" defaultIndex={0}>
                <TabList class="grid grid-cols-3 gap-2 w-full h-auto">
                    <Tab class="col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2">
                        <div class="flex items-start relative">
                            <span class="text-zinc-900 font-bold">Kalkulator</span>
                            <small class="diagonal-fractions font-black ml-1 text-amber-700 uppercase">
                                BMI
                            </small>
                        </div>
                    </Tab>
                    <Tab class="col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2">
                        <div class="flex items-start relative">
                            <span class="text-zinc-900 font-bold">Kalkulator</span>
                            <small class="diagonal-fractions font-black ml-1 text-amber-700 uppercase">
                                BMR
                            </small>
                        </div>
                    </Tab>
                    <Tab class="col-span-full md:col-span-1 w-full h-auto bg-zinc-200 rounded-t-xl border-b border-zinc-900 px-4 py-2">
                        <div class="flex items-start relative">
                            <span class="text-zinc-900 font-bold">Kalkulator</span>
                            <small class="diagonal-fractions font-black ml-1 text-amber-700 uppercase">
                                Kal
                            </small>
                        </div>
                    </Tab>
                </TabList>
                <TabPanels class="w-full h-auto">
                    <TabPanel class="py-2 w-full h-auto">
                        <div class="flex flex-col justify-center items-center mt-1">
                            <BmiCalculation />
                        </div>
                    </TabPanel>
                    <TabPanel class="py-2 w-full h-auto">
                        <div class="flex flex-col justify-center items-center mt-1">
                            <BmrCalculation />
                        </div>
                    </TabPanel>
                    <TabPanel class="py-2 w-full h-auto">
                        <div class="flex flex-col justify-center items-center mt-1">
                            <CalorieCalculation />
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
        <div class="pb-2 px-4 md:px-16">
            <TdeeCalculation />
        </div>
        <div class="px-4 md:px-16 pb-2 md:pb-12">
            <ProteinCalculation />
        </div>
    </div>
</div>

<style>
</style>