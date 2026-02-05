//design to use

import { useEffect, useState } from "react"
import StoreInstance from "../../../services/storage"
import type { Subscription } from "rxjs"

/**
 * <div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-6 col-md-6-offest-3">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="productId">Id:</label>
                    <input type="number" name="productId" id="productId" class="form-control" readonly>
                </div>

                <div class="form-group">
                    <label for="productName">Name:</label>
                    <input type="text" name="productName" id="productName" class="form-control">
                </div>

                <div class="form-group">
                    <label for="productCode">Code:</label>
                    <input type="text" name="productCode" id="productCode" class="form-control">
                </div>

                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="description" class="form-control">
                </div>

                <div class="form-group">
                    <label for="releaseDate">Released On:</label>
                    <input type="datetime" name="releaseDate" id="releaseDate" class="form-control">
                </div>

                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="number" name="price" id="price" class="form-control">
           </div>

                <div class="form-group">
                    <label for="starRating">Rating:</label>
                    <input type="number" name="starRating" id="starRating" class="form-control">
                </div>

                <div class="form-group">
                    <label for="imageUrl">URL:</label>
                    <input type="text" name="imageUrl" id="imageUrl" class="form-control">
                </div>

                <div class="container-fluid centerStyle">
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger">
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

        }, [id]
    )

    return (
        <div>UpdateProduct: &nbsp;{id}</div>
    )
}

export default UpdateProduct