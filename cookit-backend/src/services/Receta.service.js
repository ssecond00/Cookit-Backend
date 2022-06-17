// Saving the context of this module inside the _the variable
_this = this;

exports.getRecetaById = async function (idReceta){

    try{
        console.log("getRecetaById --> ", idReceta);
        var Receta = idReceta; //Llamado a la base de datos
        return Receta;
    }catch (e){
        console.log("error services", e);
        throw Error("Error while Paginating Users");
    }
}

exports.getAllRecetas = async function (){
    try{
        console.log("Recuperando todas las recetas disponibles...");
        var recetas =  [
            {
                "nombre":"Francisco",
                "apellido":"troncoso",
                "fecha_de_nacimiento":"12/12/2012",
                "sexo":"hombre",
                "edad":21,

            }
        ]
        return recetas;
    }catch(e){
        console.log("error services", e);
        throw Error("Error while Paginating Users");
    }
}

exports.getRecetasByCriteria = async function (idCriteria){
    try{
        var recetas =  [
            {
                "nombre":"Francisco",
                "apellido":"troncoso",
                "fecha_de_nacimiento":"12/12/2012",
                "sexo":"hombre",
                "edad":21,

            }
        ]
        console.log("Recuperando todas las recetas disponibles...");

        return recetas;
        
    }catch(e){
        console.log("error services", e);
        throw Error("Error while Paginating Users");
    }
}