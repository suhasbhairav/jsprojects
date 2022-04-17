import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';
import React, {useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const {initialized} = useKeycloak();


  return (    
    <Router>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={ <Login />} />
      </Routes>
    </Router>
    
  );
}

export default App;
