const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const Pass = require('../routes/index');
var usuario_activo1 = '';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, usuario, password, done) => {
    const newUser = new User();
    newUser.usuario = usuario;
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();
    done(null, newUser);
}));


passport.use('signin', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, usuario, password, done) => {
    
    const usuariox = await User.findOne({usuario: usuario});
    if(!usuariox){
        return done(null, false, req.flash('signinMessage','Usuario no encontrado.'));
    }
    if(!usuariox.comparePassword(password)){
        return done(null, false, req.flash('signinMessage','Contraseña incorrecta'));
    }
    USUARIO_ACTIVOX='';
   
    
    let yo = usuariox + '';
    var inicial =0 ;
    var final = 0 ;
   

    for(i=0; i<yo.length; i++) {
       
        if(inicial ==0){
        if(yo[i] == '"'){
            inicial = i+1;
        }
    }else{
        if (yo[i] == '"'){
            final = i;
        }
    }
    
     }
     usuario_activo1 = yo.substring(inicial, final);
    // Pass.usuario_activo = usuario_activo1;
     console.log( usuario_activo1 );
     USUARIO_ACTIVOX = usuario_activo1;
   /* var ultima='';
    ultima = await Login.find().sort({$natural:-1}).limit(1);
    console.log( ultima );*/
    done(null, usuariox);
    return usuariox;


}));



