import React from 'react'

export default function AddProduct({storeProduct}) {
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target.elements;
        const product = {
            id: parseInt(Math.random() * 100),
            image: form.image.value,
            title: form.title.value, 
            description: form.description.value,
            price: form.price.value,
        }

        storeProduct(product);

        e.target.reset();
    }
  return (
    <>
       <h3>Add new product</h3>
    <form onSubmit={handleSubmit} className="form"> 
       <input type="text" name="image" placeholder="Image URL" />
       <br />
       <input type="text" name="title" placeholder="Title" />
       <br />
       <input type="text" name="description" placeholder="Description" />
       <br />
       <input type="text" name="price" placeholder="Price" />
       <br />
       <button type="submit">Add</button>
    
 
    </form>
       
    </>

  )
}
