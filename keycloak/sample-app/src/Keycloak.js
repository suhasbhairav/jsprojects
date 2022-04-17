import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8180/auth",
 realm: "KEYCLOAK-AUTH",
 clientId: "react-auth",
});

export default keycloak;