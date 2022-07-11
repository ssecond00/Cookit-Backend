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
      receta_resp: receta,
      
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Async Controller function to get the To do List
exports.getRecetaByDificultad = async function (req, res) {
  try {
    var receta = await RecetaService.getRecetaByDificultad(req.params.nivel_dificultad);
    var res;
    return res.status(200).json({
      status: 200,
      message: "Se recupero la receta correctamente.",
      receta: receta,
      
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Async Controller function to get the To do List
exports.getRecetaByTitulo = async function (req, res) {
  try {
    var receta = await RecetaService.getRecetaByTitulo(req.params.titulo_receta);
    var res;
    return res.status(200).json({
      status: 200,
      message: "Se recupero la receta correctamente.",
      data: receta,
      
    });
  } catch (e) {
    return res.status(404).json({ status: 404, message: "No encontramos esa receta." });
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
    var Recetas = await RecetaService.getRecetasByCriteria(req.params.categoria_receta);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getRecetasFromUser = async function (req,res) {
  try {
    var Recetas = await RecetaService.getRecetasFromUser(req.params.username);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createReceta = async function (req,res) {
  try {
    
    console.log(req.body);
    var Recetas = await RecetaService.createReceta(req.body);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addIng = async function (req,res) {
  try {
    
    var Recetas = await RecetaService.addIngredientesToReceta(req.body.receta_id, req.body.ingrediente_nuevo);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data:Recetas
    });
  } catch (e) {
    console.log("rompe")
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getIngredientesFromReceta = async function (req,res) {
  try {
    var Recetas = await RecetaService.getIngredientesFromReceta(req.params.receta_id);
    var array = [];
    for (const valoracion of await Recetas) {

      array.push(valoracion.ingrediente);
    }
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      ingredientes:array
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getRecetasByIngrediente = async function (req,res) {
  try {
    var list = await RecetaService.getIdRecetaByIngrediente(req.params.ingrediente);
    var array = [];
    list.forEach(function(item){
      array.push(item.id_receta);
      console.log(item.id_receta)
    });
    var recetasPorIngrediente = [];

    var receta;

    for(const id of array){
      receta = await RecetaService.getRecetaById(id);
      recetasPorIngrediente.push(receta[0]);
    }
    return res.status(200).json({
    status: 200,
    message: "Se recuperaron todas las recetas correctamente",
    data: recetasPorIngrediente

    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.deleteRecetaById = async function (req,res) {
  try {
    var Recetas = await RecetaService.deleteRecetaById(req.params.receta_id);
    return res.status(200).json({
      status: 200,
      message: "Se elimino la receta de id "+req.params.receta_id+" correctamente"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addValoraciontoReceta = async function (req,res) {
  try {
    var Recetas = await RecetaService.addValoraciontoReceta(req.body.receta_id, req.body.valoracion);
    return res.status(200).json({
      status: 200,
      message: "Se cargo la valoracion de la receta correctamente"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getValoracionesRecetaById = async function (req,res) {
  try {
    var prom = await RecetaService.getValoracionById(req.params.receta_id);

    return res.status(200).json({
      status: 200,
      message: "Se consigue la valoracion de la receta",
      stars: prom
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.updateReceta = async function (req,res) {
  try {
    var Recetas = await RecetaService.updateReceta(req.body);

    return res.status(200).json({
      status: 200,
      message: "Se actualizo la receta de id"+req.body.id_receta,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getFeaturedPost = async function (req,res) {
  try {
    var receta = await RecetaService.getRecetaById(req.params.receta_id);
    var estrella = await RecetaService.getValoracionById(req.params.receta_id);
    var  fp1 =  {
      titulo_receta:receta[0].title,
      date:receta[0].date,
      description: receta[0].description,
      estrellas: estrella   
    };
    return res.status(200).json({
      status: 200,
      message: "Se recuperan los Featured posts",
      featuredPosts: fp1
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};