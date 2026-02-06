
import { useState, useEffect } from "react";
import type { Product } from "../../app/models/Product"
import ProductList from "./ProductList"



export default function catalog() {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[products,setProducts]=useState<Product[]>([])


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
      fetch("https://localhost:5001/api/products")
      .then(response=>response.json())
      .then(data =>setProducts(data));
  },[])

  return (
    <>
      <ProductList products={products}/>
  
    </>
  )
}




