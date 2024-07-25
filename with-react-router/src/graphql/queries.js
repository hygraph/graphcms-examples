import { gql } from "graphql-tag";

export const GET_ALL_PRODUCTS = gql`
  {
    cocktails {
      id
      name
      slug
      info
      ingredients
      instructions
      image {
        url
      }
      category
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    cocktail(where: { slug: $slug }) {
      name
      category
      info
      ingredients
      instructions
      image {
        url
      }
    }
  }
`;