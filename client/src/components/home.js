import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Home = () => {
  return (
    <Query
      query={gql`
        {
          getAllUsers {
            id
            email
            username
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error}</p>;

        return data.getAllUsers.map(({ id, email, username }) => (
          <div key={id}>
            <span>
              {id}: {username} | {email}
            </span>
          </div>
        ));
      }}
    </Query>
  );
};

export default Home;
