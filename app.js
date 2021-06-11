const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongodb = require("./connections/mongodb");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs.js");
const resolvers = require("./schema/resolvers.js");

const app = express();
const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.applyMiddleware({ app, cors: true, path: "/" });
app.listen(port, () => console.log(`Hola! Listening at port ${port}.`));
