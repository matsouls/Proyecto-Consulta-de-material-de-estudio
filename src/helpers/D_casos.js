const Casos = require('../models/casos');
const Comentarios = require('../models/comentarios');

function getCasos_CAS (parametro) {
    const casos = Casos.findOne({_id:parametro});
    
    return casos;
    
    }
    //obteniendo Comentarios del material
    function getCasos_COM (casos) {
        const comment =  Comentarios.find({coment_id:casos._id})
        
        return comment;
        
        }

function ID_caso (){
                   
    return new Promise (async(resolve, reject)=>{
        var inicial =0 ;
        var final = 0 ;

        let Ultimo = await Casos.find().sort({$natural:-1}).limit(1);
        let func = Ultimo + '';
       
        for(i=0; i<func.length; i++) {

            if(inicial ==0){
            if(func[i] == '"'){
                inicial = i+1;
            }
        }else{
            if (func[i] == '"'){
                final = i;
            }
        }
        
         }

         
        var ID = func.substring(inicial, final);
        //console.log(ID);
        resolve (ID);

    })
       


    }

    function postCasos (body,casos) {
        const newComment = new Comentarios(body);
        newComment.coment_id = casos._id;
         newComment.save();
        
        }
        async function vistas(casos){
            casos.views = casos.views + 1;
           await casos.save();
        }
    module.exports = {
       
        ID_caso:ID_caso,
        getCasos_CAS:getCasos_CAS,
        getCasos_COM:getCasos_COM,
        postCasos:postCasos,
        vistas:vistas
    };