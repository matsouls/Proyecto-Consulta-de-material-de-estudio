const D_casos = require("../helpers/D_casos.js");
const users = require('../models/user');
const Casos = require('../models/casos');
const { Name_User } = require("../helpers/D_usuario.js");

async function EL_ID (){
    await D_casos.ID_caso().then((respuesta => ID_C = respuesta) );
        var ID = ID_C; 
        return ID ;
    }


const CasoNuevo = async(req,res,next) => {
    res.render('caso-nuevo');
    console.log("arreglo1", arreglo);
    console.log("arreglo2", arreglo2);
    ID_CASO= await EL_ID();
         console.log("IDCASO",ID_CASO);
         USUARIO_ACTIVOX//await EL_ID_Usuario();
         console.log("USER ACTIVO",USUARIO_ACTIVOX);
         if(guardado==1){
         await users.updateOne({
             _id: ("ObjectId:(\"%s\")",USUARIO_ACTIVOX)}, {
                 $push:{
                   mis_casos: ID_CASO
                 }
                 

           });

        }
}


const PostCaso = async(req,res) => {
   
    const caso = new Casos();

    guardado = 0;
    caso.titulo_caso = req.body.titulo_caso;
    categ_name = req.body.categ_caso;
    caso.cerrado = 0;
    caso.categ_caso = req.body.categ_caso;
    caso.texto_caso = req.body.texto_caso;
    caso.autor = nombre_user;
   
     await caso.save(err => {
         if (err){ return next(err);}
        });
 
      guardado=1
            
                req.flash('Alerta','CASO CREADO CON EXITO!');
                 
                console.log("arreglo1", arreglo);
                console.log("arreglo2", arreglo2);
     res.redirect('/caso-nuevo');
    

}

module.exports = {
    CasoNuevo,
    PostCaso
}