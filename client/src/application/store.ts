import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { IProductService } from "../infrastructure/services/interfaces/IProductService";
import { ICategoryService } from "../infrastructure/services/interfaces/ICategoryService";

import ProductService from "../infrastructure/services/ProductService/ProductService";
import CategoryService from "../infrastructure/services/CategoryService/CategoryService";
import HttpService from "../infrastructure/services/HttpService/HttpService";

import productsReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import { IAuthService } from "../infrastructure/services/interfaces/IAuthService";

const httpService = new HttpService();
const productApi = new ProductService(httpService);
const categoryApi = new CategoryService(httpService);

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: { productApi, categoryApi } } }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AsyncThunkConfig<T> {
  extra: {
    productApi: IProductService;
    categoryApi: ICategoryService;
    authApi: IAuthService;
  };
  rejectValue: T;
}

export default store;
