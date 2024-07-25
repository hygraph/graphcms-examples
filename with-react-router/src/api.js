import { request } from 'graphql-request';
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_SLUG } from './graphql/queries';
const GRAPHQL_URL =
  'https://api-us-east-1.graphcms.com/v2/cl4ji8xe34tjp01yrexjifxnw/master';

export async function getAllCocktails() {
  return await request(GRAPHQL_URL, GET_ALL_PRODUCTS);
}

export async function getProductBySlug(slug) {
  return await request(GRAPHQL_URL, GET_PRODUCT_BY_SLUG, { slug });
}
