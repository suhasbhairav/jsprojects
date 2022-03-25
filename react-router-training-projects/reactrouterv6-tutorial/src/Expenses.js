import React from 'react'
import { getExpenses } from './expensesdata'
import { Link, Outlet } from 'react-router-dom';
const Expenses = () => {

    const expensesData = getExpenses();
  return (
    <div>Expenses
        <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {expensesData.map((expense) => (
            <div>
                <Link to={`/expenses/${expense.id}`} key={expense.id}>{expense.name}: {expense.amount}</Link>
            </div>
        ))}
        </nav>
        <Outlet />
    </div>
  )
}

export default Expenses