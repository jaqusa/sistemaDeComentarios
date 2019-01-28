const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

import typeDefs from "./schemas"
import resolvers from "./resolvers"


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 3000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);