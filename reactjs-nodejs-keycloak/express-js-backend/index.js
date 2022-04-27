/*var express = require("express");
const session = require("express-session");
var router = express.Router();
var app = express();

const keycloak = require("./keycloak-config.js").initKeycloak();
//app.use(session(keycloak));
app.use(keycloak.middleware());
const testController = require('./controller/test-controller.js');

router.get('/', keycloak.protect('user'), function(req, res){
    res.send('Hello User');
});

router.get('/admin', keycloak.protect('admin'), function(req, res){
    req.send('Hello Admin');
});

router.get('/all', keycloak.protect(['user', 'admin']), function(req, res){
    res.send('Hello All');
});

app.get('/', function(req, res){
    res.send('Server is up');
});

app.listen(5000);*/
var express = require('express');
var app = express();

const keycloak = require('./keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./test-controller.js');
app.use('/test', testController);

app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(5000);