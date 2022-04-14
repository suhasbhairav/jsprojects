import Keycloak from 'keycloak-js'

const _kc = new Keycloak('/keycloak.json');

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
    }).then((authenticated) => {
        if(!authenticated){
            console.log("Please login first.")
        }

        onAuthenticatedCallback();
    }).catch(console.error);
};

const doLogin = _kc.Login;
const doLogout = _kc.Logout;
const getToken = () => _kc.token;
const isLoggedIn = () => !!_kc.token;
