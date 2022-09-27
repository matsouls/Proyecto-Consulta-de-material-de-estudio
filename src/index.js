const express = require('express');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session'); 
const flash = require('connect-flash');   
const bodyParser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override');
const routex = require('./routes/index');
const app = express();
const cors= require('cors');

const err = require('./middleware/errors');


//const { allowedNodeEnvironmentFlags } = require('process');

// Inicializaciones
//const app = express();
require('./database');
require('./passport/local-auth');
require('./loggging');

app.use(express.json());

app.use('/resources',express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//settings
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) =>{
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.Alerta = req.flash('Alerta');
    app.locals.USUARIO_ACTIVOX = 0;
    app.locals.user = req.user;
    app.locals.arreglo = new Array(); 
    app.locals.arreglo2 = new Array(); 
    app.locals.titulazo_edit = '';
    app.locals.guardado = 0;
    app.locals.nombre_user = '';
    //arreglo para los titulos de casos
    
    next();
    /*//app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage'); 
    next() VIDEO  1:30:00  Nodejs Login con passport, express , y mongodb desde cero mensaje si es que ya existe ese usuario*/
})
app.use(err);
//routes

app.use(routex.routes) 


//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

