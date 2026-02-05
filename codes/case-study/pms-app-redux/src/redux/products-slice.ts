import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/product";

interface ProductsStateType {
    products: Product[],
    isRequestOver: boolean,
    error: string
}

const initialProductsState: ProductsStateType = {
    products: [],
    isRequestOver: false,
    error: ''
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        initiate_fetch: (state) => {
            state.error = ''
            state.isRequestOver = false
            state.products = []
        },
        fetch_success: (state, action: PayloadAction<Product[]>) => {
            state.error = ''
            state.isRequestOver = true
            state.products = action.payload
        },
        fetch_failed: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isRequestOver = true
            state.products = []
        }
    }
})

export const productsReducer = productsSlice.reducer
export const {
    initiate_fetch: initiateAction,
    fetch_failed: failedAction,
    fetch_success: successAction
} = productsSlice.actions