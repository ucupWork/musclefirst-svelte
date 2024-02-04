import { GraphQLClient } from "graphql-request";
const GRAPHQL_ENDPOINT = "https://api-ap-southeast-2.hygraph.com/v2/cl5kgogo92u9w01uofmq94177/master";
const client = new GraphQLClient(GRAPHQL_ENDPOINT);
export {
  client as c
};
