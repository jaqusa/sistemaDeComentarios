import express from 'express'
import {ApolloServer,gql} from 'apollo-server-express'
import consign from 'consign'
import typeDefs from "./schemas"
import resolvers from "./resolvers"

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

consign({
  cwd: __dirname
})
  .include('./libs/middlewares.js')
  .then('./libs/boot.js')
  .into(app)








