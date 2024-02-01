<script lang="ts">
    export let buttonType: string;
    export let linkHref: string;
</script>

{#if buttonType === 'black'}
<div class="fixed left-1 md:left-4 top-3 md:top-8 z-[100]">
    <a href={linkHref} class="flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50">
        <span class="md:ml-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-3 h-3 fill-current text-white bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </span>
        <span class="ml-4 md:ml-4 font-medium text-white text-xs">
            Back to Home
        </span>
    </a>
</div>
{:else if buttonType === 'pink'}
<div class="fixed left-1 md:left-4 top-3 md:top-8 z-[100]">
    <a href={linkHref} class="flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-pink-500 to-rose-400 shadow shadow-pink-500/50">
        <span class="md:ml-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-3 h-3 fill-current text-white bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </span>
        <span class="ml-4 md:ml-4 font-medium text-white text-xs">
            Back to Home
        </span>
    </a>
</div>
{/if}