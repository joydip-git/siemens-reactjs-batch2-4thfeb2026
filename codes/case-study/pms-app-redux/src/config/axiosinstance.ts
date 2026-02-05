import axios from "axios";
import { PRODUCT_API_BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: PRODUCT_API_BASE_URL,
    timeout: 2000,
    timeoutErrorMessage: 'request timed out...'
})
// axiosInstance.interceptors.request.use(
//     (req) => {
//         req.headers.Authorization = "Bearer "
//         return req
//     }
// )
export default axiosInstance