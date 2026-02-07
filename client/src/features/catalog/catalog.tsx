
import { useGetProductsQuery } from "./catalogAPI";
import ProductList from "./ProductList"



export default function catalog() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const {data:products,isLoading}=useGetProductsQuery();
if(!products ||isLoading) return <h2>Loading...</h2>

  return (
    <>
      <ProductList products={products}/>
  
    </>
  )
}




