import React from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {
    let params = useParams();   

  return (
    <div>InvoiceId: {params.invoiceId}</div>
  )
}

export default Invoice