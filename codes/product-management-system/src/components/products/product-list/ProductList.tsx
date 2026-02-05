import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { failureActionCreator, initiateActionCreator, successActionCreator } from '../../../redux/productsSlice'
// import { getAllProducts } from '../../../services/productService'
// import axios, { AxiosResponse, CancelToken } from "axios";
// import { ApiResponse } from "../../../models/api-response.model";
// import FilterProduct from './filter-product/FilterProduct'
// import ProductCard from './product-card/ProductCard'
import { Product } from '../../../models/product.model';
import { RootState } from '../../../redux/store';
// import { initiateActionCreator, failureActionCreator, successActionCreator } from '../../../redux/productsSlice';
// import axiosInstance from '../../../config/axios.config';
import fetchProductsAsyncCallbackCreator from '../../../redux/fetchProductsAsyncCallbackCreator';
// import fetchProductsAsyncCallbackCreator from '../../../redux/fetchProductsAsyncCallbackCreator';

const ProductList = () => {
    const productState = useSelector((states: RootState) => states.product)
    const dispatchFnRef = useDispatch<any>()

    const { loading, errorMessage, products } = productState

    /*
        const fetchData = (cancelToken: CancelToken, subscribed: boolean) => {
            const initiateAction = initiateActionCreator()
            dispatchFnRef(initiateAction)
            const promise = getAllProducts(cancelToken)
            promise
                .then(
                    (resp: AxiosResponse<ApiResponse<Product[]>>) => {
                        if (subscribed) {
                            const apiResponse = resp.data
                            if (apiResponse.data !== null) {
                                const successAction = successActionCreator(apiResponse.data)
                                dispatchFnRef(successAction)
                            } else {
                                const failureAction = failureActionCreator(apiResponse.message)
                                dispatchFnRef(failureAction)
                            }
                        }
                    },
                    (err) => {
                        if (axios.isCancel(err)) {
                            const failureAction = failureActionCreator('successfully aborted')
                            dispatchFnRef(failureAction)
                        } else {
                            const failureAction = failureActionCreator(err.message)
                            dispatchFnRef(failureAction)
                        }
                    }
                )
        }
    */
    useEffect(
        () => {
            // const cancelToken = axios.CancelToken;
            // const source = cancelToken.source()
            // let isApiSubscribed = true;
            //fetchData(source.token, isApiSubscribed)
            dispatchFnRef(fetchProductsAsyncCallbackCreator())
            return () => {
                // isApiSubscribed = false
                // source.cancel('cancelling request before component unmounts')
            }
        },
        []
    )

    let design: ReactElement;
    if (loading) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (products === null || products.length === 0) {
        design = <span>No record found</span>
    } else {
        design = (
            <ul>
                {
                    products.map(
                        (p: Product) => <li key={p.productId}>{p.productName}</li>
                    )
                }
            </ul>
        )
    }
    return design
}

export default ProductList