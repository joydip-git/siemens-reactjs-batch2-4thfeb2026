import { useEffect, useState } from "react"
import type { Product } from "../../../models/product"
//import { productRecords } from "../../../data/products"
import ProductRow from "../product-row/ProductRow"
import { getProducts } from "../../../services/product-service"
import type { ApiResponse } from "../../../models/apiresponse"
import { useDispatch, useSelector } from "react-redux"
import type { PmsAppStoreMapType } from "../../../redux/store"
import { failedAction, initiateAction, successAction } from "../../../redux/products-slice"

const ProductList = () => {
    const { error, isRequestOver, products } = useSelector((map: PmsAppStoreMapType) => map.productsState)
    const dispatch = useDispatch()

    const fetchProducts = async () => {

        dispatch(initiateAction())
        try {
            const resp = await getProducts()
            const apiResponse = (await resp.json()) as ApiResponse<Product[]>
            if (apiResponse.data !== null) {
                //dispatch({type:'fetch_success', payload: apiRe})
                dispatch(successAction(apiResponse.data))
            } else {
                //dispatch({type:'fetch_failed', payload:})
                //console.log(apiResponse.message);
                dispatch(failedAction(apiResponse.message))
            }
        } catch (error: any) {
            //dispatch({type:'', payload:})
            dispatch(failedAction(error.message))
        }
    }

    useEffect(
        () => {
            // setTimeout(
            //     () => fetchProducts(),
            //     3000
            // )
            fetchProducts()
        }, []
    )


    let design
    if (!isRequestOver)
        design = <span>Loading...please wait</span>
    else if (error !== '')
        design = <span>{error}</span>
    else if (products.length === 0)
        design = <span>No records found</span>
    else {
        design = (
            <div>
                {/* <button type="button" onClick={fetchProducts}>Load</button> */}
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-dark">
                        {
                            products
                                .map(
                                    (p) => {
                                        return (
                                            <ProductRow product={p} />
                                            //ProductRow({ product: p })
                                        )
                                    }
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return design
}

export default ProductList