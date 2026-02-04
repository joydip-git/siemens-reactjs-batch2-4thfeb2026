import { PRODUCT_API_BASE_URL } from "../config/constants";
import Axios from "axios";
import type { ApiResponse } from "../models/apiresponse";
import type { Product } from "../models/product";

export function getProducts() {
    return fetch(PRODUCT_API_BASE_URL)
}

export function getProduct(id: number) {
   return Axios.get<ApiResponse<Product>>(`${PRODUCT_API_BASE_URL}/${id}`)
}