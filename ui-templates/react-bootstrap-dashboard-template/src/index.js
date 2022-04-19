import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardComponent from './DashboardComponent';
import NavBarComponent from './NavBarComponent';
import ContactUsComponent from './ContactUsComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent />
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/contactus" element={<ContactUsComponent />} />
        </Routes>
      </Router>
    
  </React.StrictMode>
);
