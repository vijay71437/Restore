import { configureStore } from "@reduxjs/toolkit";
import { catalogApi } from "../../features/catalog/catalogAPI";

import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";

export const store=configureStore({
    reducer:{
        [errorApi.reducerPath]:errorApi.reducer,
        [catalogApi.reducerPath]:catalogApi.reducer,
        ui:uiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(errorApi.middleware,catalogApi.middleware)
});


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

export const useAppDispatch=useDispatch.withTypes<AppDispatch>();
export const useAppSelector=useSelector.withTypes<RootState>();

export function configureTheStore() {
    return store;
}
