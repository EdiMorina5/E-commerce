import React from 'react'

export default function Product({details, deleteProduct, editProduct}) {
    const description = details.description.substring(0, 100) + '...';
    const price = parseFloat(details.price).toFixed(2);



  return (
    <div className='product'>
        <img src={details.image} alt={details.title}></img>
        <h3>{details.title}</h3>
        <p>{description}</p>
        <p className='price'>
          <span>{price} &euro;</span>
          <span>
          <button onClick={() => deleteProduct(details.id)}>Delete</button>
          <button onClick={() => editProduct(details.id)}>Edit</button>
          </span>
        </p>

    </div>
  );
}
