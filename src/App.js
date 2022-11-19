
import data  from "./data/products";
import Products from "./components/Products";
import Search from "./components/Search";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {

  const [products, setProducts] = useState(data);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState({});

  function search(query){
    //filterv

    if(query.length > 0){
      const filtered_products = products.filter((product) => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered_products.length > 0) setProducts(filtered_products);

    }else{
      setProducts(data);
    }

  }

  function deleteProduct(id){
    const p = products.filter((product) => product.id !== id);
    setProducts(p);
  }

  function storeProduct(product){
    setProducts([...products, product]);
    setCreate(false);
  }

  function editProduct(id) {
    setEdit(true);
    const p = products.filter(product => product.id === id)[0]
    setProduct(p);
    

  }

  function updateProduct(product){
    const id = product.id;
    const _products = products.map(p => {
      if(p.id === id){
        return product
      }else{
        return p;
      }
    });

    setProducts(_products);
    setEdit(false);

  }

  return (
    <div className="container">
      <button onClick={() => setCreate(!create)}>{create ? 'Hide' : 'Create Product'}</button>
      {create && <AddProduct storeProduct={storeProduct}/>}
      {edit && <EditProduct  product={product}  updateProduct={updateProduct}/>}
      <br/>
      <br/>
      <Search search={search} />
      <Products products={products} deleteProduct={deleteProduct} editProduct={editProduct}/>
      
    </div>
  );

}

export default App;
