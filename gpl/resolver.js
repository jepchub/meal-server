const User = require("../controllers/user.controller");

const resolver = {
  Query:{
    // Seccion para usuarios
    getUser:() => {
      console.log('Retornando usuarios');
      return null;
    }
  },
  Mutation: {
    // Seccion para nuevos usuarios
    newUser:(_,{ input }) => User.newUser(input)
  }
};

module.exports = resolver;