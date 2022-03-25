import React from 'react'
import { getInvoices } from './data';
import { Link, Outlet } from 'react-router-dom';

const Invoices = () => {

    let invoices = getInvoices();
    

  return (
    <div>Invoices
        <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
          {invoices.map((invoice) => (
              <div><Link to={`/invoices/${invoice.number}`} key={invoice.number} >{invoice.name} </Link></div>
          ))}
      </nav>
      <Outlet/>
    </div>
  )
}

export default Invoices