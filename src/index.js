import express from "express"
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from "./graphql/schema"
import { resolvers } from "./graphql/resolver"

const app = express()
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at ${server.graphqlPath}`)
});