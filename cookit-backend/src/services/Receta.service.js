// Saving the context of this module inside the _the variable
_this = this;
const receta = require('../../models').receta;
const ingrediente = require('../../models').ingredientes_receta;
const valoracion = require('../../models').valoraciones_receta;
let date_ob = new Date();
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let today = (year + "-" + month + "-" + date);


exports.getRecetaById = async function (id_receta){
    console.log("Se recupera la receta de id "+id_receta);
    return receta
			.findOrCreate({
				raw: true,
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



exports.createReceta = async function (createRecetaRequest){
    console.log("Se crea la receta: "+createRecetaRequest);    
    return receta
			.findOrCreate({
				where: {
					title: createRecetaRequest.title,
				},
				defaults: {
					title: createRecetaRequest.title,
					date: createRecetaRequest.date,
					user: createRecetaRequest.user ,
					dificultad: createRecetaRequest.dificultad ,
					estrellas: createRecetaRequest.estrellas ,
					categoria: createRecetaRequest.categoria ,
					pasos_a_seguir: createRecetaRequest.pasos_a_seguir ,
					description: createRecetaRequest.description ,
					createdAt: createRecetaRequest.createdAt ,
					updatedAt: createRecetaRequest.updatedAt ,
				}
			})
            .catch(error => res.status(400).send(error))
}


exports.addIngredientesToReceta = async function (receta_id, ingrediente_nuevo){
    console.log("Id receta: "+receta_id+" ingrediente agregado: "+ingrediente_nuevo);  
	console.log(today);  
    return ingrediente
			.create({
					id_receta: receta_id,
					ingrediente: ingrediente_nuevo,
					createdAt: today,
					updatedAt: today
			})
            .catch(error => res.status(404).send(error))
}


exports.getIngredientesFromReceta = async function (receta_id){
    console.log("Id receta: "+receta_id);
    return ingrediente
			.findAll({
					where:{
						id_receta: receta_id,
					}
			})
            .catch(error => res.status(404).send(error))
}


exports.getIdRecetaByIngrediente = async function (ingrediente_nuevo){
    console.log("Ingredeinte buscado: "+ingrediente_nuevo);
    return ingrediente
			.findAll({
					where:{
						ingrediente: ingrediente_nuevo,
					}
			})
            .catch(error => res.status(404).send(error));
}

exports.deleteRecetaById = async function (id_receta_delete){
    console.log("id de la receta a eliminar: "+id_receta_delete);
    return receta
			.destroy({
					where:{
						id: id_receta_delete,
					}
			})
            .catch(error => res.status(404).send(error));
}

exports.addValoraciontoReceta = async function (id_receta_valorar, valoracion_receta){
    console.log("id de la receta a valorar: "+id_receta_valorar+" Con una valoracion de "+valoracion_receta+" estrellas");
    return valoracion
			.create({
				id_receta: id_receta_valorar,
				valoracion: valoracion_receta,
				createdAt: today ,
				updatedAt: today ,
			})
            .catch(error => res.status(404).send(error));
}

exports.getValoracionesRecetaById = async function (id_receta){
    console.log("id de la receta: "+id_receta);
    return await valoracion
			.findAll({
				raw: true,
				where:{
					id_receta: id_receta,
					
				}
			})
            .catch(error => res.status(404).send(error));
}

