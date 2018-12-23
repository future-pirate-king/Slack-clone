import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  // no eslint
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);