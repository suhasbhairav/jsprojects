import React from 'react'
import {useParams} from 'react-router';

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails