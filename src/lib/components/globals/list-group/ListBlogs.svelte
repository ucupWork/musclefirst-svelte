<script lang="ts">
    import { goto } from '$app/navigation';
    import { CardNoResult } from '$globals/card';
	import { searchBlog } from '$stores';

	export let filteredBlogs = [];
	export let allArticles = [];
    
    function routeToPage(route: string) {
        goto(route, { replaceState: true });
        searchBlog.set('');
    }
</script>

{#if $searchBlog && (filteredBlogs || []).length === 0}
<CardNoResult cardType="blog" />		
{:else if $searchBlog && (filteredBlogs || []).length > 0}
<div class="absolute top-0 w-full h-auto pt-10 z-20">
    {#each filteredBlogs as { title, slug }}
    <button on:click={() => routeToPage(`/blog/${slug}`)}  class="w-full h-auto">
        <div class="flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow">
            <div class="flex flex-row items-center w-auto h-auto">
                <div class="flex flex-col ml-2">
                    <span class="text-black hover:text-amber-500 text-sm font-normal">{title}</span>
                </div>
            </div>

            <div class="w-auto h-auto">
                <div class="i-ph:caret-right h-4 w-4 text-zinc-900" />
            </div>
        </div>
    </button>
    {/each}
</div>
{:else}
    {#if $searchBlog }
    <div class="absolute top-0 w-full h-auto pt-10 z-20">
        {#each allArticles as {title, slug}}
        <button on:click={() => routeToPage(`/blog/${slug}`)} class="w-full h-auto">
            <div class="flex flex-row justify-between items-center w-full h-auto px-4 py-2 border-b border-black bg-white shadow">
                <div class="flex flex-row items-center w-auto h-auto">
                    <div class="flex flex-col ml-2">
                        <span class="text-black hover:text-amber-500 text-sm font-normal">{title}</span>
                    </div>
                </div>

                <div class="w-auto h-auto">
                    <div class="i-ph:caret-right h-4 w-4 text-zinc-900" />
                </div>
            </div>
        </button>
        {/each}
    </div>
    {/if}
{/if}
