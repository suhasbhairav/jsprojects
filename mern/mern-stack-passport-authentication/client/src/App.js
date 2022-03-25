import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Register} from "./components/Register/Register";
import {Login} from "./components/Login/Login";
import {Home} from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
