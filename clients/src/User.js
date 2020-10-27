import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query {
    users {
      name
      age
    }
  }
`;

const User = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>
      Hello from GraphQL
      Current user is {data.users.name} and {data.users.age} years old.
  </div>;
};

export default User;
