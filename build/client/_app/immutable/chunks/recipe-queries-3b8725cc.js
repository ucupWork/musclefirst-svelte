import{d as e}from"./graphql-client-47f6858c.js";const i=e.gql`
  fragment RecipeDetails on Recipe {
    id
    name
    slug
    date
    tags
    totalTime
    protein
    servings
    linkVideo
    fat
    carbs
    calories
    activeTime
    ingredients {
      html
    }
    description {
      html
    }
    image {
      url
    }
  }
`,t=e.gql`
  ${i}
  query GetRecipes {
    recipes {
      ...RecipeDetails
    }
  }
`,r=e.gql`
  ${i}
  query GetRecipe($slug: String!) {
    recipe(where: { slug: $slug }) {
      ...RecipeDetails
    }
  }
`;export{t as a,r};
