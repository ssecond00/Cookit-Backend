// Saving the context of this module inside the _the variable
_this = this;
const usuario = require("../../models").usuario;

exports.getUserbyId = async function (user_id) {
  console.log("Se consigue el usuario de id " + user_id);
  return usuario.findOrCreate({
    where: {
      id: user_id
    }
  })
}

exports.createUser = async function (createUserRequest) {
  console.log("Se crea el user " + createUserRequest.username);
  return usuario.findOrCreate({
    where: {
      email: createUserRequest.email
    },
    defaults: {
      email: createUserRequest.email,
      password: createUserRequest.password,
      username: createUserRequest.username,
      phone_number: createUserRequest.phone_number,
      nombre: createUserRequest.nombre
    },
  })

}

exports.updateUsername = async function (usrname, new_username) {
  console.log("nuevo username para " + usrname);
  return usuario.update({ username: new_username }, { where: { username: usrname } });
}


exports.getUsuarioByLogin = async function (mail, pass) {
  console.log("Usuario " + mail + " de password " + pass);
  return usuario.findOrCreate({
    raw: true,
    where: {
      email: mail,
      password: pass
    }
  })
}

exports.updatePassword = async function (mail, new_password) {
  console.log("nueva password para " + mail + " es: " + new_password);
  return usuario.update({ password: new_password }, { where: { email: mail } });
}