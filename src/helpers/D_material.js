


const Comentarios = require('../models/comentarios');
const material = require('../models/material');
const Material = require('../models/material');

function postMaterial (parametro) {
const material =  Material.findOne({_id:parametro});

return material;

}
//subiendo Comentario material
function postMaterial2 (newComment,material) {
    newComment.coment_id = material._id;
     newComment.save();
    
    }
//Obteniendo Material
function getMaterial_M (parametro) {
    const material2 = Material.findOne({_id:parametro});
    
    return material2;
    
    }
    //obteniendo Comentarios del material
    function getMaterial_C (parametro2) {
        const comment =  Comentarios.find({coment_id:parametro2})
        
        return comment;
        
        }
        async function vistas(material){
            material.views = material.views + 1;
           await material.save();
        }

module.exports = {
    postMaterial:postMaterial,
    postMaterial2:postMaterial2,
    getMaterial_M:getMaterial_M,
    getMaterial_C:getMaterial_C,
    vistas:vistas
};