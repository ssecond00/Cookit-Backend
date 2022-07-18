var UserService = require("../services/User.Servicer");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getUserById = async function (req, res) {
  try {
    var User = await UserService.getUserbyId(req.params.user_id);
    return res.status(200).json({
      status: 200,
      message:"USER_FOUND",
      data: User,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createUser = async function (req, res){
    try {
        var user = await UserService.createUser(req.body);
        return res.status(200).json({
          status: 200,
          message: "Se creo el User Correctamente!",
          data: user
        });
      } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
      }
}

exports.updateUsername = async function (req, res){
  try {
      await UserService.updateUsername(req.body.user_id, req.body.new_username);
      return res.status(200).json({
        status: 200,
        message: "Se creo el User Correctamente!",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
}



exports.getUserByUsername = async function (req, res){
  try {
      var us =  await UserService.getUserByUsername(req.body.username);
      return res.status(200).json({
        status: 200,
        message: "Se recupero el User Correctamente!",
        user: us,
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUsuarioByLogin = async function (req, res){
  try {

    var User = await UserService.getUsuarioByLogin(req.body.mail, req.body.pass);
    return res.status(200).json({
      status: 200,
      message:"Login",
      data: User[0],
    })
  } catch (e) {
    return res.status(400).json({ status: 404, message: "Usuario o contraseña incorrectos. Intente nuevamente." });
  }
}