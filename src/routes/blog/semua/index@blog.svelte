<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { allArticlesQuery } from '$graphql/article-queries';

    export const load: Load = async({ url }) => {
        const articles = await client.request(allArticlesQuery);

		return {
            currentPage: url.pathname,
			props: { allArticles: articles }
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { AllMain } from '$section/blog/index';
    import { websiteSchema, organizationSchema, blogSchema } from '$utils/json-ld';

    export let allArticles: any;
</script>

<SEO 
    title="Semua Blog" 
    schemas={[
        websiteSchema, 
        organizationSchema,
        blogSchema
    ]}  
/>

<div class="w-full h-auto pt-4 md:pt-10">
    <AllMain {allArticles} />
</div>