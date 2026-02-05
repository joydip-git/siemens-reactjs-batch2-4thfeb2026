import { Route, Routes, useRoutes, type RouteObject } from "react-router-dom"
import ProductList from "../components/products/product-list/ProductList"
import ProductDetail from "../components/products/product-detail/ProductDetail"
import UpdateProduct from "../components/products/update-product/UpdateProduct"
import AddProduct from "../components/products/add-product/AddProduct"
import Home from "../components/common/home/Home"
import PageNotFound from "../components/common/page-not-found/PageNotFound"

const AppRoutes = () => {
    /*
    return (
        <Routes>
            <Route path="products">
                <Route path="all" element={<ProductList />} />
                <Route path="view/:id" element={<ProductDetail />} />
                <Route path="edit" element={<UpdateProduct />} />
                <Route path="add" element={<AddProduct />} />
            </Route>
            <Route path="">
                <Route path="home" element={<Home />} />
                <Route path="" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
    */
    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: 'all', element: <ProductList />
            },
            {
                path: 'view/:id', element: <ProductDetail />
            },
            {
                path: 'edit', element: <UpdateProduct />
            },
            {
                path: 'add', element: <AddProduct />
            }
        ]
    }

    const commonRoutes: RouteObject = {
        path: '',
        children: [
            {
                path: 'home', element: <Home />
            },
            {
                path: '', element: <Home />
            },
            {
                path: '*', element: <PageNotFound />
            }
        ]
    }
    const allRoutes = useRoutes([productRoutes, commonRoutes])
    return allRoutes
}

export default AppRoutes