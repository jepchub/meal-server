// git init
// Toda la logia de usuario va aqui
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

// saca los valores de lo que le manda el resolver el input
const newUser = ({ name, username, email, password }) => {
  // validar que el usuario o email exista en la base de datos
  email = email.toLowerCase();
  username = username.toLowerCase();

  // Validar el correo electronico
  const findEmail = await User.findOne({email});
  if(findEmail) throw new Error('El correo ya existe o se encuentra registrado');
  // Validar el nombre del usuario
  const findUsername = await User.findOne({username});
  if(findUsername) throw new Error('El nombre de usuario ya se encuentra registrado');
  
  // generando la encriptacion
  const salt = await bcryptjs.genSaltSync(10);
  password = await bcryptjs.hash(password, salt);

  const user = new User({email,username,name,password});
  user.save();
  return user;

};

module.exports = {
  newUser
}