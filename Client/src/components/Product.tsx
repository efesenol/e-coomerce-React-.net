import { IProduct } from "../model/IProduct";

interface Props{
    product : IProduct
}

export default function Product({product}: Props){
  return(
    <>
    {product.isActive ?(
      <>
      <h3>{product.name} </h3>
      <p> {product.price}</p>
      <p> {product.description}</p>
      </>
      ):<p> Ürün Satışta Değil</p>}
    
    </>
  );
}