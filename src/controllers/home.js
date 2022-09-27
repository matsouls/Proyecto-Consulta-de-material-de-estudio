const passport = require('passport');
const Casos = require('../models/casos');
const Material = require('../models/material');
const D_usuario = require("../helpers/D_usuario.js");
const users = require('../models/user');

var ID_usuario;
async function EL_Name_Usuario (){
    await D_usuario.Name_User(ID_usuario).then((respuesta => name2 = respuesta) ) 
         console.log("Nombre usuario = ",name2)
        return name2 ;
        
    }

const VistaHome =  async(req,res,next) => {
    const casos = await Casos.find();
    const material = await Material.find();
    guardado=0;
    //para casos cerrado titulazo
    titulazo_edit='';
    console.log("HOME ID USUARIO: ",USUARIO_ACTIVOX);
     ID_usuario = USUARIO_ACTIVOX//await EL_ID_Usuario();
   completo = await users.find({_id: ("ObjectId:(\"%s\")",ID_usuario)},{mis_casos:1}) ;
  arreglo =capturando(completo);
  titulos = await Casos.find ({_id: ("ObjectId:(\"%s\")",arreglo)},{titulo_caso:1}) ;
  //conseguimos el nombre de usuario
  nombre_user= await EL_Name_Usuario ();
  arreglo2 = capturando(titulos);
  function capturando(completo){
   var arreglox = new Array(); 
   var n =0;
   var inicial =0 ;
   var final = 0 ;
  
   let todo = completo + '';
   for(i=0; i<todo.length; i++) {

       if(inicial == 0){
       if(todo[i] == "'"){
           inicial = i+1;
       }
   }else{
       if (todo[i] == "'"){
           final = i;
       }
   }

   if(final != 0){
    arreglox[n]= todo.substring(inicial, final);
      inicial = 0;
      final=0;
      n++
   }
  
}

return arreglox;
  }



 res.render('home',{casos, material});
    
}

const Salir = (req,res,next) => {
    req.logout();
    res.redirect('/signin');
    USUARIO_ACTIVOX = '';
    arreglo=[];
    arreglo2=[];

};


module.exports = {
    Salir,
    VistaHome
}