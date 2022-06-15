import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../../application/slices/productSlice";
import productDetailsReducer from "../../application/slices/productDetailsSlice";
import categoriesReducer from "../../application/slices/categoriesSlice";
import authReducer from "../../application/slices/authSlice";
import cartReducer from "../../application/slices/cartSlice";

import HttpService from "../../infrastructure/services/HttpService/HttpService";
import ProductService from "../../infrastructure/services/ProductService/ProductService";
import CategoryService from "../../infrastructure/services/CategoryService/CategoryService";
import AuthService from "../../infrastructure/services/AuthService/AuthService";

const httpService = new HttpService();
const productApi = new ProductService(httpService);
const categoryApi = new CategoryService(httpService);
const authApi = new AuthService(httpService);

export const createTestStore = () => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      productDetails: productDetailsReducer,
      categories: categoriesReducer,
      auth: authReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { productApi, categoryApi, authApi } },
    }),
  });

  return store;
};
