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