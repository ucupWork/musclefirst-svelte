<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';

    import { 
        articlesQuery,
        infoArticlesQuery,
        funFactArticlesQuery,
        recentArticlesQuery,
        categoriesQuery
    } from '$graphql/article-queries';
    
    export async function load({ url }: LoadEvent) {
        const articles = await client.request(articlesQuery);
        const infoArticles = await client.request(infoArticlesQuery); 
        const funFactArticles = await client.request(funFactArticlesQuery); 
        const recentArticles = await client.request(recentArticlesQuery); 
        const listCategories = await client.request(categoriesQuery); 

        const segment = url.pathname.substring(1).split('/')[0]; // first part after locale

		return {
            segment,
            currentPage: url.pathname,
            props: { 
                allArticles: articles,
                infoArticles: infoArticles,
                funFactArticles: funFactArticles,
                recentArticles: recentArticles,
                categories: listCategories
            },
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import { SEO, Breadcrumbs } from '$general/index';
    import { Main } from '$components/section/blog/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    
    // $: console.log(categories);
    export let allArticles: any;
    export let recentArticles: any;
    export let infoArticles: any;
    export let funFactArticles: any;
    export let categories: any;
    
    export let segment: any;
	export let currentPage: string;
</script>

<SEO 
    title="Blog" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<Breadcrumbs 
    {segment}
    title="Blog" 
    linkUrl={currentPage} 
    slug=""
/>

<Main 
    {allArticles} 
    {recentArticles} 
    {infoArticles} 
    {funFactArticles}
    {categories}
/>