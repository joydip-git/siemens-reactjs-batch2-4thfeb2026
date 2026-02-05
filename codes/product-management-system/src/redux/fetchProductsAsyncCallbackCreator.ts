import { createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import { getAllProducts } from "../services/productService";

const fetchProductsAsyncCallbackCreator = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await getAllProducts()
            const apiResponse = response.data
            if (apiResponse.data !== null)
                return apiResponse.data
            else
                return 'no record found'
        } catch (error: any) {
            return error.message
        }
    }
)
export default fetchProductsAsyncCallbackCreator