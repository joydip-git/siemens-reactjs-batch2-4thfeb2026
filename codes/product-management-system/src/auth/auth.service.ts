import axiosInstance from "../config/axios.config"
import { ApiResponse } from "../models/api-response.model"
import { User } from "../models/user.model"

export function registerUser(user: User) {
    return axiosInstance.post<ApiResponse<User>>('auth/register', user)
}
export function authenticate(userObject: User) {
    return axiosInstance.post<ApiResponse<string>>('auth/authenticate', userObject)
}

export function saveToken(token: string): void {
    localStorage.setItem('token', token)
}

export function getToken(): string | null {
    return localStorage.getItem('token')
}

export function isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
        return true
    } else
        return false
}
export function removeToken(): void {
    if (localStorage.getItem('token') !== undefined)
        localStorage.removeItem('token')
}