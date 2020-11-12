const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev':
        return {
            bd_url : 'mongodb://172.19.0.3:27017/',
            bd_options : { user : 'guia_app', pass : 'GuiaApp123' }
        }
    }
}

module.exports = config();