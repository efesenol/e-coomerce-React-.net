import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";

export default function CatlogPage(){
    
    const[products, setProduct] = useState<IProduct[]>([]);

    useEffect(() => {
    fetch("http://localhost:5224/api/products")
    .then(response => response.json())
    .then(data => setProduct(data));
  }, []);
  return(  
    <ProductList products={products}/>
  );
}