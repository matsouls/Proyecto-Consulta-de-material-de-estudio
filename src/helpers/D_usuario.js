const users = require('../models/user');


    function Name_User (id_user){
                   
        return new Promise (async(resolve, reject)=>{
            var inicial =0 ;
            var final = 0 ;
    
            let Ultimo = await users.find({_id: ("ObjectId:(\"%s\")",id_user)},{usuario:1}) ;
            let func = Ultimo + '';
           
            for(i=0; i<func.length; i++) {
    
                if(inicial ==0){
                if(func[i] == "'"){
                    inicial = i+1;
                }
            }else{
                if (func[i] == "'"){
                    final = i;
                }
            }
            
             }
    
             
            var NAME = func.substring(inicial, final);
            //console.log(ID);
            resolve (NAME);
    
        })
    
           
    
    
        }

        module.exports = {
            Name_User:Name_User,
            
        };