import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Book Keeper</h1>
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
          <div><Link to="/invoices">Invoices</Link></div>
          <div><Link to="/expenses">Expenses</Link></div>
          <div><Link to="/cars">Cars</Link></div>
          <div><Link to="/tata">Tata</Link></div>
          <div><Link to="/rollsroyce">Rolls Royce</Link></div>
          
      </nav>
    </div>
  );
}

export default App;
