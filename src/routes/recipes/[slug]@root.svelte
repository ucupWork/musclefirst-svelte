<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { recipeQuery } from '$graphql/recipe-queries';

    export const load: Load = async({ url, session, params }) => {
        const slug = params.slug
        const variables = { slug }

        const { recipe } = await client.request(recipeQuery, variables);

		return {
            currentPage: url.pathname,
			props: { recipe },
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import { SEO, Breadcrumbs } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    export let recipe: any;
    
    export let segment: any;
</script>

<SEO 
    title="Recipe | {recipe.name}" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
{segment}
title="Recipes" 
linkUrl="/recipes" 
slug={recipe.name}
/>

<div class="flex flex-col w-full h-auto bg-black px-8 md:px-16 py-8">

<div class="mb-5 flex justify-between">
    <div>
    {#if recipe.tags}
        {#each recipe.tags as tag}
        <span
            class="badge text-zinc-100 cursor-pointer"
            >{tag}</span
        >
        {/each}
    {/if}
    </div>
</div>

<div class="flex flex-col w-full h-auto mb-5">
    <h1 class="text-4xl md:text-5xl text-white dark:text-zinc-900 font-black">{recipe.name}</h1>
    <small class="uppercase font-medium text-amber-500">{recipe.date}</small>
</div>

<div class="flex flex-col w-auto h-auto mb-5">
    <img
    class="object-cover rounded-t-xl w-full h-64 md:h-80"
    src={recipe.image[0].url}
    alt={recipe.name}
    />
    <div class="grid grid-cols-4 md:gap-0 w-full h-auto bg-white dark:bg-zinc-900 py-0 md:py-0">
        <div class="border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
            <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                <span class="font-black text-2xl text-zinc-900 dark:text-white">Protein</span>
                <div class="flex items-end space-x-2">
                    <span class="text-2xl font-bold text-zinc-900 dark:text-white">{recipe.protein}</span>
                    <span class="text-md font-medium text-zinc-900 dark:text-white">g</span>
                </div>
            </div>
        </div>
        <div class="border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
            <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                <span class="font-black text-2xl text-zinc-900 dark:text-white">Crabs</span>
                <div class="flex items-end space-x-2">
                    <span class="text-2xl font-bold text-zinc-900 dark:text-white">{recipe.carbs}</span>
                    <span class="text-md font-medium text-zinc-900 dark:text-white">g</span>
                </div>
            </div>
        </div>
        <div class="border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
            <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                <span class="font-black text-2xl text-zinc-900 dark:text-white">Calories</span>
                <div class="flex items-end space-x-2">
                    <span class="text-2xl font-bold text-zinc-900 dark:text-white">{recipe.calories}</span>
                </div>
            </div>
        </div>
        <div class="border dark:border-zinc-800 col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
            <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4">
                <span class="font-black text-2xl text-zinc-900 dark:text-white">Fat</span>
                <div class="flex items-end space-x-2">
                    <span class="text-2xl font-bold text-zinc-900 dark:text-white">{recipe.fat}</span>
                    <span class="text-md font-medium text-zinc-900 dark:text-white">g</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="flex w-full h-auto bg-white dark:bg-zinc-900 relative">
    <div class="grid grid-cols-12 gap-0 w-full h-auto">
        <div class="col-span-full md:col-span-4 flex justify-center items-start w-full h-auto bg-zinc-200">
            <div class="w-auto h-auto px-4 py-8">
                <article class="prose prose-xl text-sm font-medium">
                    {@html recipe.ingredients.html}
                </article>
            </div>
        </div>
        <div class="col-span-full md:col-span-8 flex justify-center items-start w-full h-auto bg-zinc-100">
            <div class="w-auto h-auto px-4 py-8">
                <article class="prose prose-xl text-sm font-medium">
                    {@html recipe.description.html}
                </article>
            </div>
        </div>
        
        <div class="col-span-full w-full h-auto py-0 border-t">
            <div class="grid grid-cols-3 md:gap-0 w-full h-auto">
                <div class="border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center">
                        <div class="flex flex-row items-center space-x-2">
                            <div class="i-ph:fork-knife h-5 w-5" />
                            <span class="font-black text-xl uppercase text-zinc-900 dark:text-white">Servings</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="font-medium text-xl text-zinc-900 dark:text-white">{recipe.servings}</span>
                        </div>
                    </div>
                </div>
                <div class="border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center">
                        <div class="flex flex-row items-center space-x-2">
                            <div class="i-ph:clock h-5 w-5" />
                            <span class="font-black text-xl uppercase text-zinc-900 dark:text-white">Active Time</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="font-medium text-xl text-zinc-900 dark:text-white">{recipe.activeTime}</span>
                        </div>
                    </div>
                </div>
                <div class="border col-span-full md:col-span-1 flex justify-start md:justify-center items-center w-full h-auto">
                    <div class="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto h-auto p-4 text-center">
                        <div class="flex flex-row items-center space-x-2">
                            <div class="i-ph:clock-afternoon h-5 w-5" />
                            <span class="font-black text-xl uppercase text-zinc-900 dark:text-white">Total Time</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="font-medium text-xl text-zinc-900 dark:text-white">{recipe.totalTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>