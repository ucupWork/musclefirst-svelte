<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { LoadEvent } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { recipesQuery } from '$graphql/recipe-queries';
    import { recipeArticlesQuery } from '$graphql/recipe-article-queries';

    export async function load({ url }: LoadEvent) {
        const { recipes } = await client.request(recipesQuery);
        const { recipeArticles } = await client.request(recipeArticlesQuery);
        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            // key: url.pathname,
            currentPage: url.pathname,
            props: { recipes, recipeArticles },
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$section/recipes/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    export let recipes: any;
    export let recipeArticles: any;
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Recipes" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Recipes" 
    linkUrl={currentPage} 
    slug=""
/>

<Main {recipes} {recipeArticles} />