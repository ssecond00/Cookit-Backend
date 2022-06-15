// Saving the context of this module inside the _the variable
_this = this;

exports.getUserByMail = async function (mail) {
  try {
    console.log("GetUserByMail --> ", mail);
    var User = mail; //Llamado a la base de datos
    return User;
  } catch (e) {
    console.log("error services", e);
    throw Error("Error while Paginating Users");
  }
};

exports.UpdateUsername = async function (mail, newUsername){
    try {
        console.log("UpdateUsername -- mail: ", mail," -  new username: ",newUsername );
        var User = mail; //Llamado a la base de datos

        // Metodo Void, nop tiene response
      } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Users");
      }
}

exports.UpdatePassword = async function (mail, newPassword){
    try {
        console.log("UpdatePassword -- mail: ", mail," -  new Password: ",newPassword );
        var User = mail; //Llamado a la base de datos

        // Metodo Void, nop tiene response
      } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Users");
      }
}

exports.CreateUser = async function (UserDTO){
    try {
        console.log("CreateUser -- request: ", UserDTO );
        // Metodo Void, nop tiene response
      } catch (e) {
        console.log("error services", e);
        throw Error("Error while Paginating Users");
      }
}