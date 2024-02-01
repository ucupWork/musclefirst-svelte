import type { RequestHandler } from "@sveltejs/kit";
import { removeTrailingSlash } from "$utils/helpers";
import { client } from '$config/graphql-client';
import { gql } from 'graphql-request';
import site from '$utils/site-data';

const website = "https://www.musclefirst.co.id";

const sitemap = (
  articles: any[],
  recipes: any[],
  pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${removeTrailingSlash(website)}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page: string) => `
    <url>
      <loc>${site.siteUrl}${removeTrailingSlash(page)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
  ).join('')}
  ${articles
    .map((post) =>`
    <url>
      <loc>${site.siteUrl}blog/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
  ).join('')}
  ${recipes
    .map((recipe) =>`
    <url>
      <loc>${site.siteUrl}recipes/${recipe.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
  ).join('')}
</urlset>`;

export const GET: RequestHandler = async () => {
  const query = gql`
    query GetPosts {
      articles(last: 99999999, orderBy: createdAt_DESC) {
        title
        slug
      }
      recipeArticles(last: 99999999, orderBy: createdAt_DESC) {
        title
        slug
      }
    }
  `
  const { articles, recipeArticles } = await client.request(query);
  const pages = [
      // Default
      `about`,
      `agent`,
      `blog`,
      `brand-center`,
      `campaign`,
      `careers`,
      `challenge`,
      `calculator`,
      `community`,
      `contact`,
      `discount`,
      `links`,
      `list-agent`,
      `privacy-policy`,
      `products`,
      `promotion`,
      `purchase`,
      `recipes`,
      `testimonials`,
      `products/pro-bcaa`,
      `products/pro-casein`,
      `products/pro-creatine`,
      `products/pro-gainer`,
      `products/pro-isolate`,
      `products/pro-nrgy`,
      `products/pro-whey`,
      `sitemap`,
  ];

  const body = sitemap(articles, recipeArticles, pages);

  return new Response(body, {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    },
  })
}