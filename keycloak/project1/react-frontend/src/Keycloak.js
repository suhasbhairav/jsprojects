import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8180/auth",
 realm: "KEYCLOAK-REACT-FRONTEND-APP",
 clientId: "react-frontend-app",
 onLoad: 'login-required'
});

export default keycloak;