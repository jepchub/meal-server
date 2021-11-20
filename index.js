
console.log('Empezando...');
const { ApolloServer } = require("apollo-server");
const resolvers = require("./gpl/resolver");
const typeDefs = require("./gpl/typeDefs");

const serverApollo = new ApolloServer({resolvers,typeDefs});

try {
  ( async () =>{
    const response = await serverApollo.listen();
    console.log(`Servidor corriendo exitosamente en la url ${response.url}`);
  })();
} catch (error) {
  console.log(error.message)
}