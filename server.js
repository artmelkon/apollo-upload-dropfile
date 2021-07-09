const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const express = require("express");

const app = express();

const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:4000/`)
);
