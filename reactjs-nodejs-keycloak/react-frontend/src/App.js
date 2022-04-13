import React, {useState, useEffect} from 'react';
import './App.css';
import Keycloak from 'keycloak-js';


function App() {

  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakObject = Keycloak('/keycloak.json');
    
    keycloakObject.init({
      onLoad: 'login-required'
    }).then(authenticatedValue => {
      setKeycloak(keycloakObject);
      setAuthenticated(authenticatedValue);
      if(authenticatedValue){
        window.accessToken = keycloakObject.token;
      }
    });
  
    
  }, []);
  

  return (
    <div className="App">
      {keycloak && authenticated && <div>
          <div>
            This is a keycloak-secured page
          </div>
        </div>}
        {!keycloak && !authenticated && <div>
            Unable to authenticate
          </div>}
    </div>
  );
}

export default App;
