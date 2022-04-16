import { KeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'

function App() {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App"> ... </div> 
    </KeycloakProvider>
  );
}

export default App;
