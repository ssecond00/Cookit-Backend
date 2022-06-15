var UserService = require("../services/User.Servicer");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getUserByMail = async function (req, res) {
  try {
    var User = await UserService.getUserByMail(req.body.mail);
    return res.status(200).json({
      status: 200,
      data: User,
      message: "Se recupero el usuario correctamente",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.UpdateUsername = async function (req, res) {
  try {
    await UserService.UpdateUsername(req.body.mail, req.body.newUsername);
    return res.status(200).json({
      status: 200,
      message: "Se Actualizo el username Correctamente!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.UpdatePassword = async function (req, res) {
    try {
      await UserService.UpdatePassword(req.body.mail, req.body.newPassword);
      return res.status(200).json({
        status: 200,
        message: "Se Actualizo la password Correctamente!",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

exports.CreateUser = async function (req, res){
    try {
        await UserService.CreateUser(req.body);
        return res.status(200).json({
          status: 200,
          message: "Se creo el User Correctamente!",
        });
      } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
      }
}
