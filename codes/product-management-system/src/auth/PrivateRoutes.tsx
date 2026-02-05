import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import ProductsLayout from '../components/products/products-layout/ProductsLayout'
import { isLoggedIn } from './auth.service'

const PrivateRoutes = () => {
    const { pathname } = useLocation()
    const url = pathname.replace('/', '')
    const loggedIn = isLoggedIn()
    return (
        loggedIn ? <ProductsLayout /> : <Navigate to={`/login?returnUrl=${url}`} replace />
    )
}
 
export default PrivateRoutes