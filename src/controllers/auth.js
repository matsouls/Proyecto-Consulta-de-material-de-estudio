const passport = require('passport');



const VistaRegistro = (req,res,next) => {
    res.render('signup');
}

const PostRegistro = passport.authenticate("local-signup",{
    successRedirect: '/signin',
    failureRedirect: '/signup',
    passReqToCallback: true
});

const VistaLogin = (req,res,next) => {
    arreglo=[];
    arreglo2=[];
    res.render('signin');
}

const PostLogin = passport.authenticate("signin",{
    successRedirect: '/home',
    failureRedirect: '/signin',
    passReqToCallback: true,
    
});



module.exports = {
    VistaLogin,
    PostLogin,
    VistaRegistro, 
    PostRegistro
}