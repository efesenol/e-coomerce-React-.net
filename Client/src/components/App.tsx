import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";




function App() {
   const[products, setProduct] = useState<IProduct[]>([]);

useEffect(() => {
  fetch("http://localhost:5224/api/products")
    .then(response => response.json())
    .then(data => setProduct(data));
  }, []);


  function addProduct(){
    setProduct([...products,{
      id :Date.now(), 
      name : "Product 4", 
      price : 4000, 
      isActive : true,
      stock : 1,
      description : "açıklama"
    }])
  }
  return (
    <>
    <Header products={products}/>
    <ProductList products={products} addProduct={addProduct}/>
    
    </>
  );
}



export default App
