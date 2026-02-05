import type { AxiosResponse } from "axios";
import type { ApiResponse } from "../../../models/apiresponse";
import { getProduct } from "../../../services/product-service";
import type { Product } from "../../../models/product";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StoreInstance from "../../../services/storage";


const ProductDetail = () => {
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const [error, setError] = useState('')
    const [isRequestOver, setIsRequestOver] = useState(false)

    //{id:'2',x:'10',name:''}

    const paramObj = useParams()
    const id = Number(paramObj['id'])

    const navigate = useNavigate()

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
            fetchProductById()
            return () => console.log('PD unmounted');
        },
        []
    )

    useEffect(
        () => { StoreInstance.publish(id) }
    )
    if (!isRequestOver) {
        return <span>Loading...</span>
    } else if (error !== '') {
        return <span>{error}</span>
    } else if (!product) {
        return <span>No such product exists</span>
    } else
        return (
            <>
                {/* <div>
                <label htmlFor="txtId">Id: &nbsp;</label>
                <input type="text" id="txtId" onInput={
                    (e) => {
                        const txtBox = e.target as HTMLInputElement;
                        fetchProductById(Number(txtBox.value))
                    }
                } />
            </div>
            <br />
            <div>
                Fetched Product Name: &nbsp;{product ? product.productName : error}
            </div>
            */}
                <div>
                    <div className="container">
                        <div className="panel panel-primary">
                            <div className="panel-heading fontSize">
                                Detail: &nbsp;{product.productName}
                                <Link to={'/products/edit'}>
                                    <a className="btn btn-primary">
                                        Edit
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-3">Name:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.productName}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">Code:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.productCode}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">Description:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.description}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">Availability:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.releaseDate}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">Price:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.price}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">Rating:&nbsp;</div>
                                        <div className="col-md-6">
                                            {product.starRating}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img className="center-block img-responsive" width="200px" src={product.imageUrl} title={product.productName} />
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer" onClick={() => navigate(`/products/all`)}>
                            <a className="btn btn-primary">
                                <i className="glyphicon glyphicon-chevron-left"></i>Back
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ProductDetail