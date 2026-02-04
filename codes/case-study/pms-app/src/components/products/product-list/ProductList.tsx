import { useState } from "react"
import type { Product } from "../../../models/product"
import { productRecords } from "../../../data/products"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>(productRecords)
    return (
        <div>
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
                        products.map(
                            (p) => {
                                return (
                                    <tr>
                                        <td>
                                            <img
                                                src={p.imageUrl}
                                                alt="NA"
                                                title={p.productName}
                                                style={{ width: '80px', margin: '2px' }} />
                                        </td>
                                        <td>{p.productName}</td>
                                        <td>{p.price}</td>
                                        <td>{p.starRating}</td>
                                    </tr>
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