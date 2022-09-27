const express = require('express');
const passport = require('passport');
const {VistaLogin, PostLogin, VistaRegistro, PostRegistro} = require('../controllers/auth');
const {VistaHome, Salir} = require('../controllers/home');
const {VistaMisCasos, PostMisCasos} = require('../controllers/mis_casos');
const {MaterialNuevo, PostMaterial} = require('../controllers/material-nuevo');
const {CasoNuevo, PostCaso} = require('../controllers/caso-nuevo');
const {AllCasos, InfCasos, GenCasos, AllMateriales,InfMateriales, MateMateriales } = require('../controllers/casosYmateriales');
const {CasoAbierto, Comment_C, Likes_C, MaterialAbierto, Comment_M , Likes_M, Likes_C_C, Likes_M_C} = require('../controllers/C_Y_M_abiertos');

const router = express.Router();




router.get('/signup', VistaRegistro);
router.post('/signup',PostRegistro );

router.get('/signin', VistaLogin);
router.post('/signin',PostLogin );

router.get('/logout', Salir);

router.get('/home', isAuthenticated, VistaHome );

router.get('/mis_casos', VistaMisCasos);
router.post('/mis_casos', PostMisCasos );

router.get('/material-nuevo', MaterialNuevo);
router.post('/material-nuevo', PostMaterial );

router.get('/caso-nuevo', CasoNuevo);
router.post('/caso-nuevo', PostCaso );

router.get('/casos/:page', AllCasos);
router.get('/casos/Informatica/:page', InfCasos );
router.get('/casos/General/:page', GenCasos);

router.get('/materiales/:page', AllMateriales);
router.get('/materiales/Informatica/:page', InfMateriales );
router.get('/materiales/Matematicas/:page', MateMateriales);

router.get('/caso-abierto/:caso_id', isAuthenticated, CasoAbierto);
router.post('/caso-abierto/:caso_id/comentario', Comment_C );
router.post('/caso-abierto/:caso_id/like', Likes_C);
router.post('/caso-abierto/:caso_id/likeC', Likes_C_C);


router.get('/material-abierto/:material_id', MaterialAbierto);
router.post('/material-abierto/:material_id/comentario', Comment_M );
router.post('/material-abierto/:material_id/like', Likes_M);
router.post('/material-abierto/:material_id/likeC', Likes_M_C);


















router.use((req, res, next)=>{
    isAuthenticated(req, res, next);
    next();
});
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();

    }
    arreglo=[];
    arreglo2=[];
    res.redirect('/signin');
}


module.exports = {
    routes:router
}
