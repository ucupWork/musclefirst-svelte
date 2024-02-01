<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    import { infoAllArticlesQuery } from '$graphql/article-queries';

    export const load: Load = async({ url }) => {
        const infoAllArticles = await client.request(infoAllArticlesQuery);

		return {
            currentPage: url.pathname,
			props: { infoAllArticles }
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { InformasiMain } from '$section/blog/index';
    import { websiteSchema, organizationSchema, blogSchema } from '$utils/json-ld';

    export let infoAllArticles: any;
</script>

<SEO 
    title="Informasi Blog" 
    schemas={[
        websiteSchema, 
        organizationSchema,
        blogSchema
    ]}  
/>

<div class="w-full h-auto pt-4 md:pt-10">
    <InformasiMain allArticles={infoAllArticles} />
</div>