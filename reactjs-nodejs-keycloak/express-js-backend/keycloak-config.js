var session = require("express-session");
var Keycloak = require("keycloak-connect")

let keycloak;
var keycloakConfig = {
    "realm": "Demo-Realm",
    "bearer-only": true,
    "auth-server-url": "http://localhost:8180/auth/",
    "ssl-required": "external",
    "resource": "new-node-microservice",
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
  };

function initKeycloak(){
    if(keycloak){
        console.log("Returning existing Keycloak instance");
        return keycloak;
    }else{
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        keycloak = new Keycloak({
            store: memoryStore,
            secret: 'any_key',
            resave: false,
            saveUninitialized: true
        }, keycloakConfig);
        return keycloak;
    }
};

module.exports = {
    initKeycloak
};
