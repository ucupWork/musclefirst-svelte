import { gql } from "graphql-request";
const RECIPE_FRAGMENT = gql`
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
`;
const recipesQuery = gql`
  ${RECIPE_FRAGMENT}
  query GetRecipes {
    recipes {
      ...RecipeDetails
    }
  }
`;
const recipeQuery = gql`
  ${RECIPE_FRAGMENT}
  query GetRecipe($slug: String!) {
    recipe(where: { slug: $slug }) {
      ...RecipeDetails
    }
  }
`;
export {
  recipesQuery as a,
  recipeQuery as r
};
