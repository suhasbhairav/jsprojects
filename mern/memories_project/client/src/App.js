import React, {useState, useEffect} from 'react';
import {Container, Grow, AppBar, Typography, Row, Grid} from '@material-ui/core';
import useStyles from './styles';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/auth" exact element={Auth}/>
        </Routes>
    </Container>
    </BrowserRouter>
  )
}

export default App;