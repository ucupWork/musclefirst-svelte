<script lang="ts">
	import { fade } from 'svelte/transition';

    let names = [
        "Rani", 
        "Maikel", 
        "Samuel", 
        "Adam", 
        "Yudi", 
        "Angela",
        "Elisa",
        "Nova",
        "Jelita",
        "Safina",
        "Andriani",
        "Fadlan",
        "Prasetyo",
        "Satrio",
        "Zulhadi",
        "Firman",
    ];
    
    let towns = [
        "Tangerang",
        "Bekasi",
        "Jakarta",
        "Jakarta Barat",
        "Jakarta Timur",
        "Bandung",
        "Bekasi",
        "Bali",
        "Semarang",
        "Bogor",
        "Yogyakarta"
    ];

    let selectedname = names[Math.floor(Math.random() * names.length)];
    let selectedtown = towns[Math.floor(Math.random() * towns.length)];  
    let timeperiod = fn_RecentTimeGen();

    export let notificationStyle: string;
    export let imageNotifiaction: boolean
    export let productName: string;
    export let productLink: string;
    export let description: string;
    export let imgLink: string;
    
    function fn_RecentTimeGen() {
        if (fn_Percentage(80)) {
            return fn_PluralReturn(10,"hour","hours") + " ago";
        }
        return fn_PluralReturn(59,"min","mins") + " ago";
    }
    
    function fn_Percentage(para_percent: number) {
        if (Math.random() < para_percent/100) {
            return true;
        }
        return false;
    }

    function fn_PluralReturn(para_number: number,para_nonplural: string,para_plural: string) {
        var l_number = Math.ceil(Math.random() * para_number)
        if (l_number == 1) {
            return "" + l_number + " " + para_nonplural
        }
        return "" + l_number + " " + para_plural
    }
    
</script>

{#if notificationStyle === "black"}
<div transition:fade class="flex w-full h-auto mx-auto bg-zinc-900 rounded-xl shadow-xl relative">
    <div class="absolute -left-2 md:-right-2 -top-2 w-auto h-auto">
        <button on:click class="cursor-pointer w-auto h-auto rounded-xl">
            <div class="rounded-xl flex justify-center items-center w-6 h-6 bg-zinc-800 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 text-white bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </button>
    </div>

    <div class="w-2 bg-amber-500"></div>

    <div class="flex items-center w-full px-4 py-3">
        {#if imageNotifiaction}
        <img class="object-cover w-10 h-10 rounded-xl border" alt={productName} src={imgLink}>
        {/if}
        <div class="flex flex-col w-full h-auto ml-4">
            <div class="flex flex-row space-x-1">
                <span class="text-white mr-0">{selectedname}</span>
                <p class="text-white">{description} <a rel="noreferrer" class="font-bold text-yellow-200 underline decoration-solid" target="_blank" href={productLink}>{productName}</a></p>
            </div>
            <div class="flex justify-between w-full h-auto">
                <div class="text-xs w-auto h-auto">
                    <small class="uppercase text-zinc-200">{selectedtown}</small>
                </div>
                <div class="text-xs w-auto h-auto">
                    <small class="block text-zinc-200 font-medium">{ timeperiod }</small>
                </div>
            </div>  
        </div>
    </div>
</div>
{/if}

{#if notificationStyle === "pink"}
<div transition:fade class="flex w-full h-auto mx-auto bg-zinc-900 rounded-xl shadow-xl relative">
    <div class="absolute -left-2 md:-right-2 -top-2 w-auto h-auto">
        <button on:click class="cursor-pointer w-auto h-auto rounded-xl">
            <div class="rounded-xl flex justify-center items-center w-6 h-6 bg-zinc-100 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-4 w-4 text-zinc-900 bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </button>
    </div>

    <div class="w-2 bg-pink-500"></div>

    <div class="flex items-center w-full px-4 py-3">
        {#if imageNotifiaction}
        <img class="object-cover w-10 h-10 rounded-xl border" alt={productName} src={imgLink}>
        {/if}
        <div class="flex flex-col w-full h-auto ml-4">
            <div class="flex flex-row space-x-1">
                <span class="text-zinc-50 mr-0">{selectedname}</span>
                <p class="text-zinc-50">{description} <a rel="noreferrer" class="font-bold text-pink-600 underline decoration-solid" target="_blank" href={productLink}>{productName}</a></p>
            </div>
            <div class="flex justify-between w-full h-auto">
                <div class="text-xs w-auto h-auto">
                    <small class="uppercase text-zinc-50">{selectedtown}</small>
                </div>
                <div class="text-xs w-auto h-auto">
                    <small class="block text-zinc-50 font-medium">{ timeperiod }</small>
                </div>
            </div>  
        </div>
    </div>
</div>
{/if}