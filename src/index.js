import express from "express"
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from "./graphql/schema"
import { resolvers } from "./graphql/resolver"

const app = express()
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at ${server.graphqlPath}`)
});