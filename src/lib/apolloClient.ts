import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_HASURA_URL;
const secret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

if (!uri || !secret) {
  throw new Error("Missing environment variables");
}

const client = new ApolloClient({
  link: new HttpLink({
    uri,
    headers: {
      "x-hasura-admin-secret": secret,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;