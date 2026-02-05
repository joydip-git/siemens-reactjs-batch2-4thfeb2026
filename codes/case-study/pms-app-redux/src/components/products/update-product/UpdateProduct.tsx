//design to use

import { useEffect, useState } from "react"
import StoreInstance from "../../../services/storage"
import type { Subscription } from "rxjs"
import type { Product } from "../../../models/product"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"
import { getProduct } from "../../../services/product-service"

/**
 * <div className="container">
    <div className="row">
        <div className="col-xs-12 col-md-6 col-md-6-offest-3">
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="productId">Id:</label>
                    <input type="number" name="productId" id="productId" className="form-control" readonly>
                </div>

                <div className="form-group">
                    <label for="productName">Name:</label>
                    <input type="text" name="productName" id="productName" className="form-control">
                </div>

                <div className="form-group">
                    <label for="productCode">Code:</label>
                    <input type="text" name="productCode" id="productCode" className="form-control">
                </div>

                <div className="form-group">
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="description" className="form-control">
                </div>

                <div className="form-group">
                    <label for="releaseDate">Released On:</label>
                    <input type="datetime" name="releaseDate" id="releaseDate" className="form-control">
                </div>

                <div className="form-group">
                    <label for="price">Price:</label>
                    <input type="number" name="price" id="price" className="form-control">
           </div>

                <div className="form-group">
                    <label for="starRating">Rating:</label>
                    <input type="number" name="starRating" id="starRating" className="form-control">
                </div>

                <div className="form-group">
                    <label for="imageUrl">URL:</label>
                    <input type="text" name="imageUrl" id="imageUrl" className="form-control">
                </div>

                <div className="container-fluid centerStyle">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
 */
const UpdateProduct = () => {
    const [id, setId] = useState(0)
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const [error, setError] = useState('')
    const [isRequestOver, setIsRequestOver] = useState(false)

    const [pName, setPName] = useState('')
    const productUpdateHandler = (propName: string, propValue: any) => {
        setProduct(
            (oldProduct) => {
                return {
                    ...oldProduct,
                    [propName]: propValue
                }
            }
        )
    }

    const fetchProductById = async () => {
        try {
            const resp: AxiosResponse<ApiResponse<Product>> = await getProduct(id)
            const apiRespone: ApiResponse<Product> = resp.data;
            if (apiRespone.data !== null) {
                setProduct(apiRespone.data)
                setIsRequestOver(true)
                setError('')
            } else {
                setProduct(undefined)
                //console.log(apiRespone.message);
                setError(apiRespone.message)
                setIsRequestOver(true)
            }
        } catch (error: any) {
            setProduct(undefined)
            //console.log(error);
            setError(error.message)
            setIsRequestOver(true)
        }
    }

    useEffect(
        () => {
            const subscription: Subscription = StoreInstance
                .storeObservable
                .subscribe(
                    (data) => {
                        setId(data)
                    }
                )

            return () => {
                subscription?.unsubscribe()
            }
        }, []
    )

    useEffect(
        () => {
            fetchProductById()
        }, [id]
    )

    if (!isRequestOver) {
        return <span>Loading...</span>
    } else if (error !== '') {
        return <span>{error}</span>
    } else if (!product) {
        return <span>No such product exists</span>
    } else
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-6-offest-3">
                        <form className="form-horizontal"
                            onSubmit={(e) => {
                                e.preventDefault()
                                //code 
                            }}>
                            <div className="form-group">
                                <label htmlFor="productId">Id:</label>
                                <input type="number" name="productId" id="productId" value={product.productId} className="form-control" readOnly />
                            </div>

                            <div className="form-group">
                                <label htmlFor="productName">Name:</label>
                                <input type="text" name="productName" id="productName" className="form-control" value={product.productName} onInput={(e) => productUpdateHandler('productId', (e.target as HTMLInputElement).value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="productCode">Code:</label>
                                <input type="text" name="productCode" id="productCode" className="form-control" value={product.productCode} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <input type="text" name="description" id="description" className="form-control" value={product.description} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="releaseDate">Released On:</label>
                                <input type="text" name="releaseDate" id="releaseDate" className="form-control" value={product.releaseDate} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="number" name="price" id="price" className="form-control" value={product.price} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="starRating">Rating:</label>
                                <input type="number" name="starRating" id="starRating" className="form-control" value={product.starRating} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="imageUrl">URL:</label>
                                <input type="text" name="imageUrl" id="imageUrl" className="form-control" value={product.imageUrl} />
                            </div>

                            <div className="container-fluid centerStyle">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-danger">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default UpdateProduct