const TAG         = '[PocDemoMongoDB]';
const mongoose    = require('mongoose');
const rekuire     = require('rekuire');
const Logger      = rekuire('Logger');

let connection = null;
if(process.env.SKIP_CONNECT_MONGODB != 'true') {
    connection = mongoose.createConnection('mongodb+srv://'+ process.env.POC_MONGODB_USERNAME +':'+ process.env.POC_MONGODB_PASSWORD +'@'+ process.env.POC_MONGODB_HOSTNAME+'/'+ process.env.POC_MONGODB_DBNAME +'?retryWrites=true&w=majority', { useNewUrlParser: true });

    connection.on('connected', function(){
        Logger.log('info', TAG + ' Database connected', {status: "success"});
    });
    
    connection.on('disconnected', function(){
        Logger.log('info', TAG, {status: "failed"});
    });
    
    connection.on('error', function(error){
        Logger.log('error', TAG + ' Database error in connection', {status: error});
    });
    
    process.on('SIGINT', function(){
        connection.close(function(){
            Logger.log('info', TAG, {status: "terminated"});
            process.exit(0);
        });
    });    
}

module.exports = connection;