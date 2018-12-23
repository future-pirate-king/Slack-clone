import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { models } from './models';

const app = express();

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')), {
  all: true
});
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers')),
  {
    all: true
  }
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models
  }
});

server.applyMiddleware({ app });

models.sequelize.sync({ logging: false }).then(() => {
  app.listen({ port: 4001 }, () =>
    // no eslint
    console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
  );
});
