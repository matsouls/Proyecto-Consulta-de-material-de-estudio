const Casos = require('../models/casos');
const Material = require('../models/material');

const AllCasos = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;


    Casos
    .find()
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, casos) => {
        Casos.count((err, count) => {
            if (err) return next(err);
            res.render('casos', {
                casos,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

const InfCasos = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;
    

    Casos
    .find({categ_caso:"Informatica"})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, casos) => {
        Casos.count((err, count) => {
            if (err) return next(err);
            res.render('casos', {
                casos,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

const GenCasos = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;
    
    Casos
    .find({categ_caso:"General"})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, casos) => {
        Casos.count((err, count) => {
            if (err) return next(err);
            res.render('casos', {
                casos,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

const AllMateriales = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;


    Material
    .find()
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, material) => {
        Material.count((err, count) => {
            if (err) return next(err);
            res.render('materiales', {
                material,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

const InfMateriales = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;
    
    Material
    .find({categ_material:"Informatica"})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, material) => {
        Material.count((err, count) => {
            if (err) return next(err);
            res.render('materiales', {
                material,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

const MateMateriales = (req,res,next) => {
    let perPage = 9;
    let page = req.params.page || 1;
    
    Material
    .find({categ_material:"Matematicas"})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err, material) => {
        Material.count((err, count) => {
            if (err) return next(err);
            res.render('materiales', {
                material,
                current: page,
                pages: Math.ceil(count / perPage),
                
            });
        });
    });
}

module.exports = {
    AllCasos,
    InfCasos,
    GenCasos,
    AllMateriales,
    InfMateriales, 
    MateMateriales 
}