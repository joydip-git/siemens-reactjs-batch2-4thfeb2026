import { Link } from "react-router-dom"
import type { Product } from "../../../models/product"
import './ProductRow.css'

type ProductRowPropType = {
    product: Product
}
const ProductRow = ({ product }: Readonly<ProductRowPropType>) => {
    return (
        <tr>
            <td>
                <Link to={`/products/view/${product.productId}`}>
                    <img
                        src={product.imageUrl}
                        alt="NA"
                        title={product.productName}
                        style={{width:'80px', margin:'2px'}} />
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow