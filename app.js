var rekuire = require('rekuire');
var Logger  = rekuire('Logger');
var Errors  = rekuire('Errors');
var express = require('express');
var app     = express();

require('dotenv').config();

var express_configuration = require("./express-configuration");
express_configuration.init(app, express);

app.use('/v1/poc', require('./routes/pocdemo'));

let port = process.env.PORT || 4000;
app.listen(port, function () {
	Logger.log('info', '[App] Now up and running', {port: port});
});

module.exports = app;
