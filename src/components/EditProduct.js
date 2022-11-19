import React, { useEffect, useState } from 'react'

export default function AddProduct({product, updateProduct}) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    if (product){
      setImage(product.image);
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
    }
  }, [product]);


    function handleSubmit(e){
        e.preventDefault();
        const _product = {
            id: product.id,
            image: image,
            title: title, 
            description: description,
            price: price,
        }

        updateProduct(_product);

        e.target.reset();
    }
  return (
    <>
       <h3>Edit product</h3>
    <form onSubmit={handleSubmit} className="form"> 
       <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
       <br />
       <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
       <br />
       <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
       <br />
       <input type="text" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
       <br />
       <button type="submit">Update</button>
    
 
    </form>
       
    </>

  )
}

