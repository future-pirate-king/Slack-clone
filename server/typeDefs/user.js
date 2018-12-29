import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    teams: [Team!]!
  }

  type Query {
    getUser(id: ID!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): Boolean!
  }
`;
