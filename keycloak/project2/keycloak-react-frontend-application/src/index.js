import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HttpService from '../../react-frontend/src/services/HttpService';
import UserService from '../../react-frontend/src/services/UserService';

const renderApp = () => ReactDOM.createRoot(document.getElementById('root'));


UserService.initKeycloak(renderApp);
HttpService.configure();
