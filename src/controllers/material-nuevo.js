const Material = require('../models/material');


const MaterialNuevo = (req,res,next) => {
    res.render('material-nuevo');
}


const PostMaterial = (req,res,next) => {
    const material = new Material();
    material.titulo_material = req.body.titulo_material;
    material.categ_material = req.body.categ_material;
    material.texto_material = req.body.texto_material;
    material.autor = nombre_user;
    console.log("PASE POR AQUI POST")
    material.save(err => {
         if (err){ return next(err);}
        });
        
            req.flash('Alerta','MATERIAL CREADO CON EXITO!');
             
         res.redirect('/material-nuevo');
}

module.exports = {
    MaterialNuevo,
    PostMaterial
}