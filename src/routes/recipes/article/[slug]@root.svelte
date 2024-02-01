<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { recipeArticleQuery } from '$graphql/recipe-article-queries';

    export const load: Load = async({ url, session, params }) => {
        const slug = params.slug
        const variables = { slug }

        const { recipeArticle } = await client.request(recipeArticleQuery, variables);

		return {
            currentPage: url.pathname,
			props: { recipeArticle },
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
	import readableDate from '$utils/readable-date';
    
    export let recipeArticle: any;
    
    export let segment: any;
</script>

<SEO 
    title="Recipe | {recipeArticle.title}" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Recipes Article" 
    linkUrl="/recipes/article" 
    slug={recipeArticle.title}
/>

<div class="flex flex-col w-full h-auto bg-black px-8 md:px-16 py-8">

    <div class="flex flex-col w-full h-auto mb-5">
        <h1 class="text-4xl md:text-5xl text-white dark:text-zinc-900 font-black">{recipeArticle.title}</h1>
        <small class="uppercase font-medium text-amber-500">{ recipeArticle.createdAt ? readableDate(recipeArticle.createdAt) : 'No Date Now' }</small>
    </div>

    <div class="grid grid-cols-2 gap-4 w-full h-auto">
        <div class="col-span-full md:col-span-1 flex flex-col w-full h-auto">
            <img
            class="object-cover rounded-t-xl w-full h-full"
            src={recipeArticle.image[0].url}
            alt={recipeArticle.title}
            />
        </div>
        
        <div class="col-span-full md:col-span-1 flex flex-col w-full h-auto bg-transparent dark:bg-zinc-900 relative">
            <div class="flex flex-col w-full h-full bg-zinc-100">
                <div class="flex flex-col w-full h-auto bg-zinc-200">
                    <div class="w-auto h-auto px-4 py-4">
                        <article class="prose prose-sm text-sm font-medium p-2">
                            {@html recipeArticle.ingredients.html}
                        </article>
                    </div>
                </div>
                <div class="flex flex-col w-full h-auto bg-zinc-100">
                    <div class="w-auto h-auto px-4 py-4">
                        <article class="prose prose-xl text-sm font-medium p-2">
                            {@html recipeArticle.description.html}
                        </article>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center w-full h-auto">
                <a rel="noreferrer" href={recipeArticle.videoLink} target="_blank" class="flex justify-center items-center w-full h-auto text-center py-2 px-4 bg-[#fe2c55]">
                    <span class="text-sm uppercase font-bold text-white">Lihat Video Disini</span>
                </a>
            </div>
        </div>
    </div>
</div>