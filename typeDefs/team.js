import { gql } from 'apollo-server-express';

export default gql`
  type Team {
    id: ID!
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
`;
