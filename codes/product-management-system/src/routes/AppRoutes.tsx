import React, { FC, lazy, Suspense } from 'react'
import { Navigate, useRoutes, RouteObject } from "react-router-dom";

const Home = lazy(() => import('../components/common/home/Home'));
const MainLayout = lazy(() => import('../components/common/main-layout/MainLayout'))

const PageNotFound = lazy(() => import('../components/common/page-not-found/PageNotFound'));
const ProductList = lazy(() => import('../components/products/product-list/ProductList'));
const AddProduct = lazy(() => import('../components/products/add-product/AddProduct'));
const ProductDetail = lazy(() => import('../components/products/product-detail/ProductDetail'));
const EditProduct = lazy(() => import('../components/products/edit-product/EditProduct'));
const Login = lazy(() => import('../components/common/login/Login'));
const PrivateRoutes = lazy(() => import('../auth/PrivateRoutes'));

const LoadingFallback: FC = (): JSX.Element => {
    return <span>Loading Design...</span>
}
const AppRoutes: FC = (): JSX.Element => {
    // <Route path='/' element={<MainLayout />}>
    //     <Route path='home' element={<Home />} />
    // </Route>
    const mainRoutes: RouteObject = {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '404', element: <PageNotFound /> },
            { path: 'home', element: <Home /> },
            { path: '', element: <Navigate to={'/home'} /> },
            { path: '*', element: <Navigate to={'/404'} /> },
            { path: 'login', element: <Login /> }
        ]
    }
    const productRoutes: RouteObject = {
        path: 'products',
        element: <PrivateRoutes />,
        children: [
            { path: '', element: <ProductList /> },
            { path: 'add', element: <AddProduct /> },
            { path: 'view/:id', element: <ProductDetail /> },
            { path: 'edit/:id', element: <EditProduct /> }
        ]
    }
    const router = useRoutes([mainRoutes, productRoutes])
    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                {router}
            </Suspense>
        </>
    )
}

export default AppRoutes