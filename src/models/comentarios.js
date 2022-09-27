const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
const {ObjectId} = Schema;

const ComentariosSchema = new Schema({
    coment_id: { type: ObjectId },
    name: { type: String },
    gravatar: { type: String },
    comentario: { type: String },
    timestamp: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },

});

module.exports = mongoose.model('Comentarios', ComentariosSchema);