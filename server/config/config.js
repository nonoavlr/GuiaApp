const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev':
        return {
            bd_url : 'mongodb://localhost:27017',
            bd_options : {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                user : 'guia_app', pass : 'GuiaApp123',
                dbName : 'app'
            }
        }
    }
}

module.exports = config();