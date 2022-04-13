import session from "express-session";
import Keycloak from "keycloak-connect";
import chalk from "chalk";

let keycloak = null;
var keycloakConfig = {
    "realm": "",
    "auth-server-url": "",
    "ssl-required": "",
    "resource": "",
    "realmPublicKey": "",
    "bearer-only": true
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
    }
};

export default initKeycloak;