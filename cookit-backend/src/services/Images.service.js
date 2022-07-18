_this = this

var cloudinary = require('cloudinary');

var formidable = require('formidable');


cloudinary.config({
    cloud_name: 'cookitdb',
    api_key: '626845486871269',
    api_secret: '41dIm6TkTYUeEoKwHpQNt8ptUM8'
});

exports.uploadImage = async function (usrImage) {
    console.log("image - ", usrImage);



    let imagen = "imagenes/"+ usrImage.nombreImagen;

    cloudinary.uploader.upload( imagen, function(result){
        console.log(result);
    } )
    
  };
  

  exports.createUserImg = async function (userImg) {
    
    //subir imagen a cloudinary
    console.log("userImg",userImg)
    let urlImg;
    let imagen = process.env.UPLOAD_DIR + userImg.nombreImagen;
    cloudinary.uploader.upload(imagen, function(result) { 
        console.log("Resultado",result);
        //urlImg=result.url;
        // Creating a new Mongoose Object by using the new keyword
        var newUserImg = new UserImg({      
            mail: userImg.email,
            date: new Date(),
            nombreImagen: result.url
        })
        
        savedUserImg(newUserImg);
    });
  }


  async function savedUserImg (newUserImg){

    try {
        // Saving the Control 
        var savedUserImg = await newUserImg.save();
        
        return savedUserImg;
    } catch (e) {
        // return a Error message describing the reason 
    console.log(e)    
    throw Error("Error while Creating Imagen User")
}}