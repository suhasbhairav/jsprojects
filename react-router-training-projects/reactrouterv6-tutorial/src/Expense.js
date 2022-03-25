import React from 'react'
import { useParams } from 'react-router-dom'

const Expense = () => {

  let params =  useParams();
  return (
    <div>Expense ID: {params.expenseId}</div>
  )
}

export default Expense