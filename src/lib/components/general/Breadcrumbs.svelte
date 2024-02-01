<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    
    export let segment: any;
    export let title: string;
    export let linkUrl: string;
    export let slug: string;
</script>

<div class="bg-zinc-50 dark:bg-zinc-900 flex items-center py-2 overflow-y-auto whitespace-nowrap px-12 md:px-16 border-b">
    <a aria-label={segment} href="/" class="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
        <div class="i-ph:house text-black dark:text-white mr-4" />
        <span class="text-sm font-medium text-black dark:text-white">Beranda</span>
    </a>

    <span class="mx-5 text-zinc-400">
        /
    </span>

    <a href="/" class="hover:underline">
        <span class="text-sm font-medium text-black dark:text-white">{title}</span>
    </a>
    
    {#if slug}
    <span class="mx-5 text-zinc-400">
        /
    </span>

    <span class="hover:underline">
        <span class="text-sm font-medium capitalize text-amber-500">{slug}</span>
    </span>
    {/if}
</div>