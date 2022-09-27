const mongoose = require('mongoose');
const { mongodb } = require('./keys');
const winstone = require('winston')


mongoose.connect(mongodb.URI, {
  
    useNewUrlParser: true, 

    useUnifiedTopology: true 
})
    .then(() => winstone.info('CONECTADO CORRECTAMENTE'));