import express from 'express';
import initKeycloak from './keycloak-config.js';

var router = express.Router();
var app = express();

const keycloak = initKeycloak();

app.use(keycloak.middleware());

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

app.listen(5000);