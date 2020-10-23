const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');



const resolvers = {
  Query: {
    users: () => {
        return {
            name: "Obaid",
            age: 24
        }
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

