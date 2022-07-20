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
      recetas: receta,

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
      receta: receta[0],

    });
  } catch (e) {
    return res.status(404).json({ status: 404, message: "No encontramos esa receta." });
  }
};


exports.getAllRecetas = async function (req, res) {
  try {
    var Recetas = await RecetaService.getAllRecetas();
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      all: Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getRecetasByCriteria = async function (req, res) {
  try {
    var Recetas = await RecetaService.getRecetasByCriteria(req.params.categoria_receta);

    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      recetas: Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getRecetasFromUser = async function (req, res) {
  try {
    var Recetas = await RecetaService.getRecetasFromUser(req.params.username);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      recetas: Recetas
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createReceta = async function (req, res) {
  try {
    var Recetas = await RecetaService.createReceta(req.body);
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      data: Recetas
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addIng = async function (req, res) {
  try {
    console.log("entra", req.body.ingrediente_nuevo)
    for (const ing of await req.body.ingrediente_nuevo) {
      console.log(ing.name)
      var Recetas = await RecetaService.addIngredientesToReceta(req.body.receta_id, ing.name);
    }
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
    });
  } catch (e) {
    console.log("rompe")
    return res.status(400).json({ status: 400, message: e.message });
  }
};



exports.getFP = async function (req,res) {
  try {
    
    var Recetas = await RecetaService.getfeaturedPostsMian();
    
    var array = [];
    for (const rec of await Recetas) {

      array.push(rec.id);
    }

    
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron los fp",
      data: array
    });
  } catch (e) {
    console.log("rompe")
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getIngredientesFromReceta = async function (req, res) {
  try {
    var Recetas = await RecetaService.getIngredientesFromReceta(req.params.receta_id);
    var array = [];
    for (const valoracion of await Recetas) {

      array.push(valoracion.ingrediente);
    }
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      ingredientes: array
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.getRecetasByIngrediente = async function (req, res) {
  try {
    var list = await RecetaService.getIdRecetaByIngrediente(req.params.ingrediente);
    var array = [];
    list.forEach(function (item) {
      array.push(item.id_receta);
    });
    var recetasPorIngrediente = [];

    var receta;

    for (const id of array) {
      receta = await RecetaService.getRecetaById(id);
      recetasPorIngrediente.push(receta[0]);
    }
    return res.status(200).json({
      status: 200,
      message: "Se recuperaron todas las recetas correctamente",
      recetas: recetasPorIngrediente

    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.deleteRecetaById = async function (req, res) {
  try {
    var Recetas = await RecetaService.deleteRecetaById(req.params.receta_id);
    return res.status(200).json({
      status: 200,
      message: "Se elimino la receta de id " + req.params.receta_id + " correctamente"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addValoraciontoReceta = async function (req, res) {
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


exports.getValoracionesRecetaById = async function (req, res) {
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


exports.updateReceta = async function (req, res) {
  try {
    console.log(req.body);
    var receta = await RecetaService.updateReceta(req.body.id_receta, req.body.titulo, req.body.fecha, req.body.usuario, req.body.dif, req.body.est, req.body.cat, req.body.pasos, req.body.desc, req.body.crat, req.body.upat);
    return res.status(200).json({
      status: 200,
      message: "Se actualizo la receta",
      data: receta
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "error" });
  }
};


exports.getFeaturedPost = async function (req, res) {
  try {
    var receta = await RecetaService.getRecetaById(req.params.receta_id);
    var estrella = await RecetaService.getValoracionById(req.params.receta_id);
    var foto = await RecetaService.getFotoFromRecetaId(req.params.receta_id);
    var  fp1 =  {
      titulo_receta:receta[0].title,
      date:receta[0].date,
      description: receta[0].description,
      estrellas: estrella ,
      foto: foto 
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

exports.addfotoToReceta = async function (req,res) {
  try {
    RecetaService.addfotoToReceta(req.body.receta_id, req.body.foto_url);
    return res.status(200).json({
      status: 200,
      message: "Se guardo la imagen correctamente",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }


};


exports.getFotoFromReceta = async function (req,res) {
  try {
    var resp = await RecetaService.getFotoFromRecetaId(req.params.receta_id);

    return res.status(200).json({
      status: 200,
      message: "Se consiguio la imagen",
      response: resp[0].imagen
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }


};

