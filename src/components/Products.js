import React from 'react'
import Product from './Product';

export default function Products({products, deleteProduct, editProduct}) {
  return (
    <div className='products'>
    {products.length 
    ? products.map((product) => ( 
    <Product key={product.id} details={product} deleteProduct={deleteProduct} editProduct={editProduct}/>
    ))
    : "No products"}
    </div>
  );
}
