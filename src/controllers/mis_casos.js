
const Casos = require('../models/casos');
const VistaMisCasos = (req,res,next) => {
    
    res.render('mis_casos',{arreglo,arreglo2});
    console.log("arreglo1", arreglo);
    console.log("arreglo2", arreglo2);

}

const PostMisCasos = async(req,res,next) => {
    
    var cerrado = req.body.cerrado;  
  titulazo_edit =arreglo2[cerrado];
  if(titulazo_edit.length > 0){
     req.flash('Alerta','CASO CERRADO !.');
      }

  if(titulazo_edit != ''){
    await Casos.findOneAndUpdate({titulo_caso:titulazo_edit},{cerrado:1})
   }
     res.redirect('/mis_casos');
 
}


module.exports = {
    VistaMisCasos,
    PostMisCasos
}