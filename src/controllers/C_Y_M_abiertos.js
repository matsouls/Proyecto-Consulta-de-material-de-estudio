const Comentarios = require('../models/comentarios');
const Casos = require('../models/casos');
const users = require('../models/user');
const D_casos = require("../helpers/D_casos.js");
const D_material = require("../helpers/D_material.js");
const Material = require('../models/material');


const CasoAbierto = async(req,res,next) => {
    const parametro = req.params.caso_id;
    const casos = await D_casos.getCasos_CAS(parametro);
  
    const comment = await D_casos.getCasos_COM(casos);
   //agregando vistas
    await D_casos.vistas(casos);
    
    console.log("TITULAZO",titulazo_edit);
    
  
    res.render('caso-abierto', {casos, comment:comment,nombre_user});
    titulazo_edit='';
}

const MaterialAbierto = async(req,res,next) => {
    const parametro = req.params.material_id;   
    const material = await D_material.getMaterial_M(parametro);
    const comment = await D_material.getMaterial_C(material);
    //agregando vistas
    await D_material.vistas(material);
    
    res.render('material-abierto', {material, comment:comment,nombre_user});
}

const Comment_C = async(req,res,next) => {
    const casos = await Casos.findOne({_id:req.params.caso_id});

    if(casos){
     const body = req.body;
     await D_casos.postCasos(body,casos);
     res.redirect('/caso-abierto/' + casos._id);
    }
}
const Likes_C_C = async(req,res,next) => {
    const comment = await Comentarios.findOne({coment_id:req.params.caso_id});
    if(comment){
        comment.likes = comment.likes + 1
        await comment.save();
        res.json({likes: comment.likes})
       }
}
const Likes_C = async(req,res,next) => {
    const casos = await Casos.findOne({_id:req.params.caso_id});
    if(casos){
        casos.likes = casos.likes + 1
        await casos.save();
        res.json({likes: casos.likes})
       }
}
const Likes_M_C = async(req,res,next) => {
   const comment = await Comentarios.findOne({coment_id:req.params.material_id});
    if(comment){
        comment.likes = comment.likes + 1
        await comment.save();
        res.json({likes: comment.likes})
       }
}

const Likes_M = async(req,res,next) => {
    const material = await Material.findOne({_id:req.params.material_id});
    if(material){
        material.likes = material.likes + 1
        await material.save();
        res.json({likes: material.likes})
    }
}



const Comment_M = async(req,res,next) => {
    const parametro = req.params.material_id;
    const material = await D_material.postMaterial(parametro);
 if(material){
    const newComment = new Comentarios(req.body);
    D_material.postMaterial2(newComment,material);
    res.redirect('/material-abierto/' + material._id);
   }
}



module.exports = {
    Likes_C_C,
    Likes_M_C,
    CasoAbierto,
    Comment_C,
    Likes_C,
    MaterialAbierto, 
    Comment_M, 
    Likes_M
}
