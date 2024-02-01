<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { funFactAllArticlesQuery } from '$graphql/article-queries';

    export const load: Load = async({ url }) => {
        const funFactAllArticles = await client.request(funFactAllArticlesQuery);

		return {
            currentPage: url.pathname,
			props: { funFactAllArticles }
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { FunfactsMain } from '$section/blog/index';
    import { websiteSchema, organizationSchema, blogSchema } from '$utils/json-ld';
    
    export let funFactAllArticles: any;
</script>

<SEO 
    title="Funfact Blog" 
    schemas={[
        websiteSchema, 
        organizationSchema,
        blogSchema
    ]}  
/>

<div class="w-full h-auto pt-4 md:pt-10">
    <FunfactsMain allArticles={funFactAllArticles} />
</div>