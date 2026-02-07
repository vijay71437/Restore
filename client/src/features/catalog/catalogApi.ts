import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/Product"
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
export const catalogApi=createApi({
    reducerPath:"catalogApi",
    baseQuery:baseQueryWithErrorHandling,
    endpoints(builder){
        return {
            getProducts:builder.query<Product[],void>({
                query:()=>"products"
            }),
            getProduct:builder.query<Product,number>  ({
                query:(id)=>`products/${id}`
            })
        }
    }
})

export const {useGetProductsQuery,useGetProductQuery}=catalogApi;