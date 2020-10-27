import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import User from './User';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <User />
      </ApolloProvider>
    </div>
  );
};

export default App;
