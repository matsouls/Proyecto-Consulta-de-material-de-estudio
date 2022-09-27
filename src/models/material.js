const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const MaterialSchema = new Schema({
    titulo_material: String,
    categ_material: String,
    texto_material: String,
    autor: String,
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },

});

MaterialSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Material', MaterialSchema);