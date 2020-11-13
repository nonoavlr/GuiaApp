const mongoose = require('mongoose');
const config = require('./config/config')

async function connectToMongo(){
    await mongoose.connect(config.bd_url, config.bd_options);
    mongoose.set('useCreateIndex', true);
}

connectToMongo();

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
});
 
module.exports = mongoose;