import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Invoices from "./Invoices";
import Expenses from "./Expenses";
import Cars from "./Cars";
import Tata from "./Tata";
import RollsRoyce from "./RollsRoyce";
import Invoice from "./Invoice";
import Expense from "./Expense";
import NoMatch from "./NoMatch";

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="invoices" element={<Invoices />} >
        <Route index element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        } />
        <Route path=":invoiceId" element={<Invoice />}/>
      </Route>
      <Route path="expenses" element={<Expenses />} >
        <Route path=":expenseId" element={<Expense />} />
      </Route>
      <Route path="/cars" element={<Cars />} />
      <Route path="/tata" element={<Tata />} />
      <Route path="/rollsroyce" element={<RollsRoyce />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
