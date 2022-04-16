import ReactDOM from 'react-dom';
import HttpService from './services/HttpService';
import UserService from './services/UserService';
import App from './components/App';

const renderApp = () => ReactDOM.render(<App />, document.getElementById("root"));

UserService.initKeycloak(renderApp);
HttpService.configure();
