var RecetaService = require("../services/Receta.service");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getRecetaById = async function (req, res) {
  try {
    var receta = await RecetaService.getRecetaById(req.params.idReceta);
    var res;
    return res.status(200).json({
      status: 200,
      message: "Se recupero la receta correctamente.",
      data: receta,
      
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getAllRecetas = async function (req,res) {
  try {
    var Recetas = await RecetaService.getAllRecetas();
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getRecetasByCriteria = async function (req,res) {
  try {
    var Recetas = await RecetaService.getRecetasByCriteria(req.body.idCriteria);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};