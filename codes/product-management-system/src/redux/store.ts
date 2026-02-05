import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import { productsReducer } from "./productsSlice"
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger()

const store = configureStore({
    reducer: {
        product: productsReducer,
    },
    middleware: [loggerMiddleware, thunkMiddleware]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store