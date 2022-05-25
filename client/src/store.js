import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productSlice";
import productDetailsReducer from "./slices/productDetailsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
