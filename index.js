// import { ApolloServer, gql } from "apollo-server-express";
const { ApolloServer } = require("apollo-server");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Products");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { typeDefs } = require("./schema");
const { db } = require("./db");

//String, int, boolean, float -- Scalar Types || ID!
//there are also object types

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log("Server up and runnning at " + url);
});
