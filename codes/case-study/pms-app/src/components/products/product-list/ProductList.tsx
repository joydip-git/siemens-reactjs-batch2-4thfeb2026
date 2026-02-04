import { useState } from "react"
import type { Product } from "../../../models/product"
//import { productRecords } from "../../../data/products"
import ProductRow from "../product-row/ProductRow"
import { getProducts } from "../../../services/product-service"
import type { ApiResponse } from "../../../models/apiresponse"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])

    const fetchProducts = async () => {
        try {
            const resp = await getProducts()
            const apiResponse = (await resp.json()) as ApiResponse<Product[]>
            if (apiResponse.data !== null) {
                setProducts(apiResponse.data)
            } else {
                setProducts([])
                console.log(apiResponse.message);
            }
        } catch (error) {
            setProducts([])
            console.log(error);
        }
    }
    return (
        <div>
            <button type="button" onClick={fetchProducts}>Load</button>
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

export default ProductList