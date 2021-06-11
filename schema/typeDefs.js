const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Status {
    success: Boolean!
    message: String
  }
  
  type File {
    name: String!
    url: String!
  }
  
  enum Category {
    EXCEL
    VIDEO
  }

  type Query {
    uploads(type: Category!): [File]!
  }
  
  type Mutation {
    uploadFile(file: Upload!, type: Category!): Status!
  }
  
`;

module.exports = typeDefs;
