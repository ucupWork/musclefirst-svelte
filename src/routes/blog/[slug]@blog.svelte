<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import { client } from '$config/graphql-client';
    
    import { 
        articleQuery,
        recentArticlesQuery
    } from '$graphql/article-queries';

    export const load: Load = async({ url, params }) => {
        const slug = params.slug
        const variables = { slug }

        const { article } = await client.request(articleQuery, variables); 
        const recentArticles = await client.request(recentArticlesQuery); 

		return {
            currentPage: url.pathname,
			props: { article, recentArticles },
            cache: {
                maxage: 3600,
                private: false
            }
		};
	}
</script>

<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
	import readableDate from '$utils/readable-date';
    
	let scroll: number;
    export let article: any;
    export let recentArticles: any;
</script>

<svelte:window bind:scrollY={scroll} />

<SEO 
    title={article.title}
    description={article.excerpt} 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex justify-center w-full h-auto bg-zinc-100 relative pt-4 md:pt-10">
    <div class="fixed hidden md:flex left-4 md:top-32 w-auto h-auto">
        <a href={`/blog`} class="flex justify-between items-center w-auto h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50">
            <span class="md:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-3 h-3 bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </span>
            <span class="ml-4 md:ml-4 font-medium text-white text-xs">
                Kembali
            </span>
        </a>
    </div>
    <div class="grid grid-cols-12 gap-4 w-full h-auto max-w-7xl">
        <div class="col-span-full w-full h-auto">
            <div class="flex flex-col w-full h-auto bg-transparent px-4 md:px-16 py-8">
                <div class="sticky top-0 flex md:hidden w-full h-auto mt-4 z-40">
                    <a href={`/blog`} class="flex justify-between items-center w-full h-auto py-2 px-4 md:px-4 rounded-full bg-gradient-to-t from-black to-zinc-900 shadow shadow-zinc-500/50">
                        <span class="md:ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-3 h-3 bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </span>
                        <span class="ml-4 md:ml-4 font-medium text-white text-xs">
                            Kembali
                        </span>
                    </a>
                </div>
                <div class="flex flex-col w-full h-auto mb-5 mt-8">
                    <h1 class="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-900 font-black">{article.title}</h1>
                </div>

                <div class="flex flex-col w-auto h-auto mb-2">
                    <div class="flex flex-row justify-between items-center w-full h-auto bg-white px-2 p-2">
                        <span class="font-medium text-sm text-zinc-900 -mt-1">Penulis Artikel</span>
                        <span class="font-bold text-md text-zinc-900">{article.author.name ? article.author.name : `Anonymous`}</span>
                    </div>
                    <div class="flex justify-between items-center w-full h-auto py-2">
                        <small class="uppercase font-medium text-amber-500 mb-1">{article.date}</small>
                    </div>
                    <div class="w-auto h-auto relative">
                        <img
                            class="object-cover rounded-t-xl w-full h-64 md:h-auto"
                            src={article.image[0].url}
                            alt={article.imageTitle}
                        />
                    </div>
                    <div class="flex justify-between items-center w-full h-auto py-2">
                        <div class="text-xs space-x-1">
                        {#if article.hashtag}
                            {#each article.hashtag as tag}
                            <small
                                class="badge text-zinc-100 cursor-pointer bg-zinc-900 p-1 rounded uppercase"
                                >#{tag}</small
                            >
                            {/each}
                        {/if}
                        </div>
                    </div>
                </div>
                
                <div class="flex w-full h-auto bg-white/50 md:bg-white dark:bg-zinc-900 relative">
                    <div class="grid grid-cols-12 gap-0 w-full h-auto">
                        <div class="col-span-full flex justify-center items-center w-full h-auto bg-zinc-50">
                            <div class="w-full h-auto px-4 md:px-8 py-4 md:py-8">
                                <article class="max-w-none prose whitespace-normal text-sm md:text-md lg:text-lg leading-relaxed antialiased prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
                                    {@html article.description.html ? article.description.html : `Not Found`}
                                </article>
                            </div>
                        </div>
                        <div class="col-span-full flex justify-center items-start w-auto h-auto bg-zinc-100">
                            <div class="flex space-x-2 w-full md:w-9/12 h-auto px-2 md:px-8 py-8">
                                <div class="h-3 text-3xl text-left text-gray-600">“</div>
                                    <article class="max-w-none prose whitespace-normal text-sm md:text-md lg:text-lg italic prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
                                        {@html article.summary.html ? article.summary.html : `Not Found`}
                                    </article>
                                <div class="h-3 text-3xl text-right text-gray-600">”</div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full h-auto bg-white px-8 py-4 md:py-8 mt-5">
                    <div class="flex flex-col justify-start items-start w-full h-auto">
                        <div class="flex flex-row md:space-x-2 items-center">
                            <div class="hidden md:flex justify-center items-center w-16 h-16 border border-zinc-900 bg-white rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-8 w-8 text-zinc-900 bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-md text-zinc-900">{article.author.name ? article.author.name : `Anonymous`}</span>
                                <span class="font-medium text-sm text-zinc-900 -mt-1">Penulis Artikel</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end w-full h-auto">
                        <div class="flex flex-col mb-2 text-left md:text-right">
                            <span class="font-bold text-md text-zinc-900">Kontak Media</span>
                            <span class="font-medium text-sm text-zinc-900 -mt-1">Penulis Artikel</span>
                        </div>
                        <div class="flex flex-row md:flex-row-reverse space-x-2 items-center">
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/intent/tweet?text=${article.title}+https%3A%2F%musclefirst.com+%MusclefirstChallenge" class="flex justify-center items-center w-12 h-12 border bg-white rounded shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-zinc-900 bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                                </svg>
                            </a>
                            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://musclefirst.co.id/article/${article.slug}" class="flex justify-center items-center w-12 h-12 border bg-white rounded shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-zinc-900 bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                            </a>
                            <button type="button" class="flex justify-center items-center w-12 h-12 border bg-white rounded shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-zinc-900 bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                </svg>
                            </button>
                            <span class="text-sm font-medium text-zinc-900">Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full justify-start items-start w-full h-auto px-16">
            <div class="bg-transparent w-full h-full px-4 py-8 pb-8 border">
                <div class="flex flex-col w-full h-auto px-4 py-2 pb-4 border-b">
                    <h1 class="font-bold text-xl text-black">Artikel Terbaru</h1>
                </div>
                <div class="grid grid-cols-3 gap-6 justify-center w-full h-auto px-4 py-2">
                    {#each recentArticles.articles as list (list.id)}
                    <article class="col-span-full md:col-span-1 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            src={list.image[0].url} 
                            alt={list.imageTitle}
                            class="h-56 w-full object-cover"
                        />
                    
                        <div class="w-full h-full bg-white dark:bg-black p-4 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-white">
                            { list.date ? readableDate(list.date) : 'No Date Now' }
                        </time>
                    
                        <a href={ list.slug ? `/blog/${list.slug}` : `/` }>
                            <h3 class="leading-none mt-1.5 font-bold text-lg text-gray-900 dark:text-white">
                                {list.title ? list.title : 'No Title'}
                            </h3>
                        </a>
                        </div>
                    </article>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>