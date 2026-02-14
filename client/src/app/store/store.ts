import { configureStore } from "@reduxjs/toolkit";
import { catalogApi } from "../../features/catalog/catalogApi";

import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";
import { basketApi } from "../../features/basket/basketApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";

export const store=configureStore({
    reducer:{
        [errorApi.reducerPath]:errorApi.reducer,
        [catalogApi.reducerPath]:catalogApi.reducer,
        [basketApi.reducerPath]:basketApi.reducer,
        [accountApi.reducerPath]:accountApi.reducer,
        ui:uiSlice.reducer,
        catalog:catalogSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(errorApi.middleware,catalogApi.middleware,basketApi.middleware,accountApi.middleware)
});


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

export const useAppDispatch=useDispatch.withTypes<AppDispatch>();
export const useAppSelector=useSelector.withTypes<RootState>();

export function configureTheStore() {
    return store;
}
