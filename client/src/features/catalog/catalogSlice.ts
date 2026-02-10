
import { createSlice } from "@reduxjs/toolkit";
import type { ProductParams } from "../../app/models/productParams";

const initialState : ProductParams={
    pageNumber: 1,
    pageSize: 8,
    brands: [],
    types: [],
    orderBy: 'name',
    searchTerm: ''
}


export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setBrands: (state, action) => {
            state.brands = action.payload;
            state.pageNumber = 1;
        },
        setTypes: (state, action) => {
            state.types = action.payload;
            state.pageNumber = 1;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload;
            state.pageNumber = 1;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.pageNumber = 1;
        },
        resetParams(){
            return initialState;
        }
    }
});

export const { setPageNumber, setPageSize, setBrands, setTypes, setOrderBy, setSearchTerm, resetParams } = catalogSlice.actions;
