var session = require("express-session");
var Keycloak = require("keycloak-connect")
const dotenv = require('dotenv').config();
let _keycloak;
/*var keycloakConfig = {
    "realm": "Demo-Realm",
    "bearer-only": true,
    "auth-server-url": "http://localhost:8180/auth/",
    "ssl-required": "external",
    "resource": "new-node-microservice",
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    'realmPublicKey': "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApt2B47lxZsDFLSTDwhP9VA86nqZe5Kv1wcBZL3sGlqAe2hXmtNl52EUT3ERZdJw7EYT82aNYd13mxy9JQ5ZCYz9wGxIAVed6b6t+CkB6Ihdfx7BY1KWi8/okSWoHkRqfrPyDYpjkLrcovpnir4Iq2Z+fhp4mk8BET13GOdGRbBfO2ZZcym8tm0r46xMkaTIDkIDiY1nSgtlQxtudsNqjhdN/WMbCz6+8GghAZ7sqQk7+arpssSDzOLtuvbIupBOW9zxnA957mQj9vINo0+1IX2u6IW1hTiXtFpj0wCaCrkHx/TppFp5/9vkV4S1CubsAHEWMcrUeYpLxjm5TA56esQIDAQAB",
    "confidential-port": 0
  };*/

  var keycloakConfig = {
    "realm": "Demo-Realm",
    "bearer-only": true,
    "auth-server-url": "http://localhost:8180/auth/",
    "ssl-required": "external",
    "resource": "new-node-microservice",
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0,
    "credentials": {
        "secret": "3623deb3-b577-468e-8ccc-52f0399baa1d"
    }
    //"realmPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApt2B47lxZsDFLSTDwhP9VA86nqZe5Kv1wcBZL3sGlqAe2hXmtNl52EUT3ERZdJw7EYT82aNYd13mxy9JQ5ZCYz9wGxIAVed6b6t+CkB6Ihdfx7BY1KWi8/okSWoHkRqfrPyDYpjkLrcovpnir4Iq2Z+fhp4mk8BET13GOdGRbBfO2ZZcym8tm0r46xMkaTIDkIDiY1nSgtlQxtudsNqjhdN/WMbCz6+8GghAZ7sqQk7+arpssSDzOLtuvbIupBOW9zxnA957mQj9vINo0+1IX2u6IW1hTiXtFpj0wCaCrkHx/TppFp5/9vkV4S1CubsAHEWMcrUeYpLxjm5TA56esQIDAQAB"
  };
/*
function initKeycloak(){
    if(keycloak){
        console.log("Returning existing Keycloak instance");
        return keycloak;
    }else{
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        keycloak = new Keycloak({
            store: memoryStore,
            secret: '6c03956a-4a71-4512-bb0f-4b25272c88a7',
            resave: false,
            saveUninitialized: true
        }, keycloakConfig);
        return keycloak;
    }
};*/
function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({
            secret:process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true,
            store: memoryStore
          }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};
