const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;



const casosSchema = new Schema({
    titulo_caso: String,
    categ_caso: String,
    texto_caso: String,
    autor: String,
    cerrado:{ type: Number, default: 0 },
 
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    Usuario: Schema.Types.ObjectId,

});

casosSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Casos', casosSchema);