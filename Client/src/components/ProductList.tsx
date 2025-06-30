import { IProduct } from "../model/IProduct";
import Product from "./Product";

interface Props {
    products: IProduct[],
    addProduct: () => void;
}

export default function ProductList( {products, addProduct} : Props){
  return(
    <>
      <h2>ProductList</h2>  

      { products.map((p: IProduct) => {
          return (

              <Product key={p.id} product={p} />
          );
      })}

      <button onClick={ addProduct }>Add Product</button>

    </>
  );
}