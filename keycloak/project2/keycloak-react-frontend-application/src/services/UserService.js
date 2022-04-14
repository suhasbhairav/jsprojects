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
const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);
const getUsername = () => _kc.tokenParsed?._preferred_username;
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
};


export default UserService;