// Saving the context of this module inside the _the variable
_this = this;
const usuario = require("../../models").usuario;

exports.getUserbyId = async function (user_id){
    console.log("Se consigue el usuario de id "+user_id);
    return usuario.findOrCreate({
      where:{
        id: user_id
      }
    })   
}

exports.createUser = async function (createUserRequest){
  console.log("Se crea el user "+createUserRequest.username);
  return usuario.findOrCreate({
    where:{
      email: createUserRequest.email
    },
     defaults: {
      email: createUserRequest.email,
      password:  createUserRequest.password,
      username: createUserRequest.username,
      phone_number: createUserRequest.phone_number,
      nombre: createUserRequest.nombre
    },
  })
  
}

exports.updateUsername = async function (user_id, new_username){
  console.log("Se setea un nuevo username "+new_username+"    "+user_id);
  return usuario.upsert({
    id: user_id,
    username: new_username
  })   
}