// Saving the context of this module inside the _the variable
_this = this;
const foto = require("../../models").imagen_receta;

var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'cookitdb', //reemplazar con sus credenciales
    api_key: '626845486871269', 
    api_secret: '41dIm6TkTYUeEoKwHpQNt8ptUM8'
});

exports.createUserImg = async function (userImg, receta_id) {
    
    //subir imagen a cloudinary
    console.log("body req     - ", userImg )
    let newUserImg ;
    let imagen = "imagenes/" + userImg.nombreImagen;
    await cloudinary.uploader.upload(imagen, function(result) { 
        newUserImg = ({      
            mail: userImg.email,
            date: new Date(),
            nombreImagen: result.url
        })
        // Creating a new Mongoose Object by using the new keyword
        
        if((newUserImg.nombreImagen !== null)){
            console.log("newUserImg 1 ", newUserImg);
            console.log("receta_id 1 ",receta_id);
            let resp = savedUserImg(newUserImg, receta_id );
            console.log(resp)
        }
        
    });
    
    


    
    
}

async function savedUserImg (newUserImg, receta_id)
{

    console.log("newUserImg", newUserImg);
    console.log("receta_id",receta_id);


        try {
            // Saving the Control 
            return foto
                    .create({
                    id_receta: receta_id,
                    imagen: newUserImg.nombreImagen
                    })
                    .catch((error) => res.status(404).send(error));
            
        } catch (e) {
            // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Imagen User")
    }
    }
