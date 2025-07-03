import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";

export default function CatlogPage(){
    
    const[products, setProduct] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      fetch("http://localhost:5224/api/products")
      .then(response => response.json())
      .then(data => setProduct(data))
      .finally(() => setLoading(false));

  }, []);

  if(loading) return <CircularProgress/>
  
  return(  

    <ProductList products={products}/>
  );
}