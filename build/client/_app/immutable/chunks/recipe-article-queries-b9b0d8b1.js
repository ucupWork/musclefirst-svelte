import{d as e}from"./graphql-client-47f6858c.js";const i=e.gql`
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
`,r=e.gql`
  ${i}
  query GetRecipeArticles {
    recipeArticles(last: 50) {
      ...RecipeArticleDetails
    }
  }
`,l=e.gql`
  ${i}
  query GetRecipeArticle($slug: String!) {
    recipeArticle(where: { slug: $slug }) {
      ...RecipeArticleDetails
    }
  }
`;export{r as a,l as r};
