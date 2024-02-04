import { gql } from "graphql-request";
const RECIPE_ARTICLE_FRAGMENT = gql`
  fragment RecipeArticleDetails on RecipeArticle {
    id
    title
    slug
    imageLink
    videoLink
    published
    publishedAt
    createdAt
    image {
      url
      imageRecipeArticle {
        title
      }
    }
    ingredients {
      html
    }
    description {
      html
    }
  }
`;
const recipeArticlesQuery = gql`
  ${RECIPE_ARTICLE_FRAGMENT}
  query GetRecipeArticles {
    recipeArticles(last: 50) {
      ...RecipeArticleDetails
    }
  }
`;
const recipeArticleQuery = gql`
  ${RECIPE_ARTICLE_FRAGMENT}
  query GetRecipeArticle($slug: String!) {
    recipeArticle(where: { slug: $slug }) {
      ...RecipeArticleDetails
    }
  }
`;
export {
  recipeArticlesQuery as a,
  recipeArticleQuery as r
};
