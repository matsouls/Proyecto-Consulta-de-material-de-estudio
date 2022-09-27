const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
const {ObjectId} = Schema;


const categoriaSchema = new Schema({
    name_categ: String,
    id_caso: Schema.Types.ObjectId,
        
     
    

});

categoriaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Categ', categoriaSchema);