import { gql } from 'graphql-request';

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
`

export const recipeArticlesQuery = gql`
  ${RECIPE_ARTICLE_FRAGMENT}
  query GetRecipeArticles {
    recipeArticles(last: 50) {
      ...RecipeArticleDetails
    }
  }
`

export const recipeArticleQuery = gql`
  ${RECIPE_ARTICLE_FRAGMENT}
  query GetRecipeArticle($slug: String!) {
    recipeArticle(where: { slug: $slug }) {
      ...RecipeArticleDetails
    }
  }
`