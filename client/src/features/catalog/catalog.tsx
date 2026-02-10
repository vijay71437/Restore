
import { Grid, Typography } from "@mui/material";
import { useGetFiltersQuery, useGetProductsQuery } from "./catalogApi";
import ProductList from "./ProductList"

import Filters from "./Filters";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import AppPagination from "../../app/shared/components/AppPagination";
import { setPageNumber } from "./catalogSlice";



export default function Catalog() {

const productParams=useAppSelector(state=>state.catalog);
const {data:products,isLoading}=useGetProductsQuery(productParams);
  const {data:filtersData,isLoading:filtersLoading}=useGetFiltersQuery();
const dispatch=useAppDispatch();
if(!products ||isLoading || filtersLoading || !filtersData) return <h2>Loading...</h2>

  return (
    < Grid container spacing={4}>
      <Grid size={3}>
        <Filters filtersData={filtersData}/> 
      </Grid>

      <Grid size={9}>
        {products.items && products.items.length >0 ?(

  <>
            <ProductList products={products.items}/>
            <AppPagination metadata={products.pagination} onPageChange={(page:number)=>{dispatch(setPageNumber(page));
                 window.scrollTo({top: 0, behavior: 'smooth'})
            }} />
        </>
        ):(
          <Typography variant="h4">There are no result for this filter</Typography>
        )}
      

      </Grid>
  
    </Grid>
  )
}



