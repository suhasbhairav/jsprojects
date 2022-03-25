import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import COntactUs from './COntactUs';
import Location from './Location';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/location"> Where are we?</Link>
          </li>
        </ul>        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<COntactUs />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
