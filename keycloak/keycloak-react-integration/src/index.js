import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens) => {
  console.log('onKeycloakTokens', tokens);
};

root.render(
  <React.StrictMode>
    <ReactKeycloakProvider
      authClient={keycloak}
      onTokens={tokenLogger}
      onEvent={eventLogger}
    >
    <App />
    </ReactKeycloakProvider>
    
  </React.StrictMode>
);
