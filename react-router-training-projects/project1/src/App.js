import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

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
        </ul>

        <hr />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
