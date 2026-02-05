import { useEffect, useState } from "react"
import type { Product } from "../../../models/product"
//import { productRecords } from "../../../data/products"
import ProductRow from "../product-row/ProductRow"
import { getProducts } from "../../../services/product-service"
import type { ApiResponse } from "../../../models/apiresponse"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isRequestOver, setIsRequestOver] = useState(false)
    const [error, setError] = useState('')

    const fetchProducts = async () => {
        try {
            const resp = await getProducts()
            const apiResponse = (await resp.json()) as ApiResponse<Product[]>
            if (apiResponse.data !== null) {
                setProducts(apiResponse.data)
                setIsRequestOver(true)
                setError('')
            } else {
                setProducts([])
                setError(apiResponse.message)
                setIsRequestOver(true)
                //console.log(apiResponse.message);
            }
        } catch (error:any) {
            setProducts([])
            setError(error.message)
            setIsRequestOver(true)
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
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
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