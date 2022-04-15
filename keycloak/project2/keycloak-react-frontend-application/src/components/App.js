import './App.css';
import {BrowserRouter} from 'react-router-dom';
import StoreService from '../services/StoreService';
import RenderOnAnonymous from './RenderOnAnonymous';
import { Provider } from 'react-redux';
import MenuComponent from './MenuComponent';

const store = StoreService.setup();

const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div className='container'>
          <RenderOnAnonymous>
            <MenuComponent />
          </RenderOnAnonymous>
          {/*<RenderOnAuthenticated>
            <ProtectedComponents />
          </RenderOnAuthenticated>*/}
        </div>
      </BrowserRouter>
    </Provider>
  );

export default App;
