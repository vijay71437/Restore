import {  Grid } from "@mui/material"
import type { Product } from "../../app/models/Product"
import ProductCard from "./ProductCard"

type Props={
    products:Product[]
}
export default function ProductList({products}:Props) {
  return (

       <Grid container spacing={3}  >
      {products.map((product)=>(
        <Grid  key={product.id} display={'flex'} size={3} >
          <ProductCard product={product} />
        </Grid>
      
      ))}
    </Grid>
   
  )
}
 