import "../../_app/immutable/chunks/index-b361c760.js";
import { c as client } from "../../_app/immutable/chunks/graphql-client-72eb4369.js";
import { gql } from "graphql-request";
import { d as data } from "../../_app/immutable/chunks/site-data-ef8bff3e.js";
const removeTrailingSlash = (site) => {
  return site.replace(/\/$/, "");
};
const website = "https://www.musclefirst.co.id";
const sitemap = (articles, recipes, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
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
  ${pages.map(
  (page) => `
    <url>
      <loc>${data.siteUrl}${removeTrailingSlash(page)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
).join("")}
  ${articles.map(
  (post) => `
    <url>
      <loc>${data.siteUrl}blog/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
).join("")}
  ${recipes.map(
  (recipe) => `
    <url>
      <loc>${data.siteUrl}recipes/${recipe.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
).join("")}
</urlset>`;
const GET = async () => {
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
  `;
  const { articles, recipeArticles } = await client.request(query);
  const pages = [
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
    `sitemap`
  ];
  const body = sitemap(articles, recipeArticles, pages);
  return new Response(body, {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    }
  });
};
export {
  GET
};
