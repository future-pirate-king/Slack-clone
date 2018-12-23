import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import { models } from './models';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

models.sequelize.sync({ logging: false }).then(() => {
  app.listen({ port: 4001 }, () =>
    // no eslint
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
