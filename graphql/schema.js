const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type File {
    file: String!
  }

  type RootQuery {
    getAllFiles: String!
  }

  type RootMutation {
    uploadFile(file:Upload!): File!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
