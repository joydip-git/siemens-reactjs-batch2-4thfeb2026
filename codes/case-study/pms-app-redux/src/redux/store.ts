import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products-slice";

const reducerMap = combineReducers({
    productsState: productsReducer
})
const PmsAppStore = configureStore({
    reducer: reducerMap,
})

export default PmsAppStore
export type PmsAppStoreMapType = ReturnType<typeof PmsAppStore.getState>