var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = function() {

    var app = express();
    app.use(express.static('./aplicacao/public'));
    app.set('view engine', 'ejs');
    app.set('views','./views');
    app.use(bodyParser.urlencoded());// esse cara recebe funçoes que serão aplicadas antes do load,que será aplicada aos request das paginas

    load('routes').then('mongoDB').into(app);
    return app;
};