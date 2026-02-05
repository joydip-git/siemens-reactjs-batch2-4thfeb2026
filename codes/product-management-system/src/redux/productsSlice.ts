import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../models/product.model"
import fetchProductsAsyncCallbackCreator from "./fetchProductsAsyncCallbackCreator"
// import fetchProductsAsyncCallbackCreator from "./fetchProductsAsyncCallbackCreator"
import { initialProductsState } from "./initialStates"

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {

        initiate: (state, action: PayloadAction<undefined>) => {
            state.loading = true
            state.products = []
            state.errorMessage = ''
        },
        success: (state, action: PayloadAction<Product[]>) => {
            state.loading = false
            state.errorMessage = ''
            state.products = action.payload
        },
        failure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.errorMessage = action.payload
            state.products = null
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsyncCallbackCreator.pending, (state) => {
                state.loading = true
                state.products = []
                state.errorMessage = ''
            })
            .addCase(fetchProductsAsyncCallbackCreator.fulfilled, (state, { payload }) => {
                state.loading = false
                state.errorMessage = ''
                state.products = payload
            })
            .addCase(fetchProductsAsyncCallbackCreator.rejected, (state, { payload }) => {
                state.loading = false
                state.errorMessage = payload as string
                state.products = null
            })


    }
})

export const { initiate: initiateActionCreator, success: successActionCreator, failure: failureActionCreator } = productsSlice.actions

export const productsReducer = productsSlice.reducer