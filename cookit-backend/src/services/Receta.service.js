// Saving the context of this module inside the _the variable
_this = this;
const receta = require('../../models').receta;

exports.getRecetaById = async function (id_receta){
    console.log("Se recupera la receta de id "+id_receta);
    return receta
			.findOrCreate({
				where: {
					id: id_receta,
				},
			})
	},


exports.getAllRecetas = async function (){
    console.log("Se recuperan todas las recetas");
    return receta.findAll({})
    },

exports.getRecetasByCriteria = async function (categoria_receta){
    console.log("La categoria solicitada es : "+categoria_receta);
    return receta
			.findOrCreate({
				where: {
					categoria: categoria_receta,
				},
			})
}


exports.getRecetaByDificultad = async function (nivel_dificultad){
    console.log("La dificultad solicitada es : "+nivel_dificultad);
    return receta
			.findAll({
				where: {
					dificultad: nivel_dificultad,
				},
			})
}


exports.getRecetaByTitulo = async function (titulo_receta){
    console.log("La dificultad solicitada es : "+titulo_receta);    
    return receta
			.findOrCreate({
				where: {
					title: titulo_receta,
				},
			})
            .catch(error => res.status(404).send(error))
}

exports.getRecetasFromUser = async function (username){
    console.log("El usuario es : "+username);    
    return receta
			.findAll({
				where: {
					user: username,
				},
			})
            .catch(error => res.status(404).send(error))
}