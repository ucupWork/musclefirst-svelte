<script lang="ts">
	import { onMount } from 'svelte';
    import { fade } from "svelte/transition";
    let start: boolean = false

    onMount(()=> {
        start = true;
    })
</script>

<div class="wrapper w-full h-screen bg-zinc-900" out:fade>
    {#if start}
    <div class="flex flex-col justify-center items-center w-full h-auto">
        <div class="flex justify-center items-center py-8 px-2">
            <div class="flex flex-col justify-center items-center w-auto h-auto p-4 md:p-2 rounded-full bg-white shadow-xl border-2 border-gray-200">
                <svg class="animate-spin  h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        </div>
    </div>
    {/if}
</div>

<style lang="scss">
    .wrapper {
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
</style>