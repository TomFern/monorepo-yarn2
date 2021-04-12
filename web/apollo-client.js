// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

// const BASE_URL = ;
// const BASE_URL = "https://n7b67.sse.codesandbox.io/graphql";
const client = new ApolloClient({ 
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;