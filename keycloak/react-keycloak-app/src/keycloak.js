import Keycloak from 'keycloak-js'
const keycloakConfig = {
   url: 'http://localhost:8180/auth', 
   realm: 'KEYCLOAK-REACT-FRONTEND-APP', 
   clientId: 'react-frontend-app'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak