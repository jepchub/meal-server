
const {gql} = require("apollo-server"); // va interpretar lo que queremos hacer en graphql
// Los querys son los que nos permiten obtener los valores
// Los mutaction modifican valores
const typeDefs = gql`
  type User{
    id: ID,
    name: String,
    username: String,
    email: String,
    avatar: String,
    website: String,
    description: String,
    password: String
  }

  input UserInput {
    name: String!,
    username: String!,
    email: String!,
    password: String!
  }

  type Query {
    getUser: User
  }

  type Mutation {
    newUser(input: UserInput): User
  }
`;

module.exports = typeDefs;
// 3.3
