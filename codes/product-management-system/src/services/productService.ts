import { CancelToken } from "axios"
import axiosInstance from "../config/axios.config"
import { ApiResponse } from "../models/api-response.model"
import { Product } from "../models/product.model"

export const getAllProducts = () => {
    // return axiosInstance.get<ApiResponse<Product[]>>('products', { cancelToken: cancelToken })
    return axiosInstance.get<ApiResponse<Product[]>>('products')
}
export const getProductById = (id: number) => {
    return axiosInstance.get<ApiResponse<Product>>(`products/${id}`)
}
export const addProduct = (product: Product) => {
    return axiosInstance.post<ApiResponse<Product>>('products', product)
}
export const updateProduct = (product: Product, id: number) => {
    return axiosInstance.put<ApiResponse<Product>>(`products/${id}`, product)
}
export const deleteProduct = (id: number) => {
    return axiosInstance.delete<ApiResponse<Product>>(`products/${id}`)
}