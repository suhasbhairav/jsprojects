import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';
import React, {useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  /*const {initialized} = useKeycloak();

  useEffect(() => {
    if(!initialized){
      return <div>...Loading</div>
    }
  }, []);*/
  
  

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
      {<Route path="/home" element={<Home />} />}
      {/*<Route path="/login" element={ <Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
