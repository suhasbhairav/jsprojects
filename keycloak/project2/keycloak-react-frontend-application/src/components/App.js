import './App.css';
import {BrowserRouter as Router} from 'react-redux-dom';
import StoreService from '../../../react-frontend/src/services/StoreService';
import RenderOnAnonymous from './RenderOnAnonymous';
import RenderOnAuthenticated from './RenderOnAuthenticated';
import { Provider } from 'react-redux';
import Menu from '../../../react-frontend/src/components/Menu';
import ProtectedComponents from './ProtectedComponents';

const store = StoreService.setup();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <RenderOnAnonymous>
            <Menu />
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <ProtectedComponents />
          </RenderOnAuthenticated>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
