import { useEffect, useState } from "react"
import type { Product } from "../models/Product";




function App() {
  const[products,setProducts]=useState<Product[]>([])

  useEffect(()=>{
      fetch("https://localhost:5001/api/products")
      .then(response=>response.json())
      .then(data =>setProducts(data));
  },[])

  const addProduct=()=>{
    setProducts(prevState =>[...prevState,
      {
        id:prevState.length+1,
        name:'Product'+(prevState.length+1),
        price:(prevState.length*100)+100,
        quantityInStock:100,
        description:'test',
        pictureUrl:'test',
        type:'test',
        brand:'test' 

    }]);
  }

  return (
   <div>
    <h1>Restore</h1>
    <ul>
      {products.map((item,index)=>(
        <li key={index}>{item.name}-{item.price}</li>
      ))}
    </ul>
    <button onClick={addProduct}>Add product</button>
   </div>
  )
}

export default App
