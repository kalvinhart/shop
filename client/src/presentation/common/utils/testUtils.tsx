import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../../app/slices/productSlice";
import productDetailsReducer from "../../app/slices/productDetailsSlice";
import categoriesReducer from "../../app/slices/categoriesSlice";
import authReducer from "../../app/slices/authSlice";
import cartReducer from "../../features/cart/slice/cartSlice";

import HttpService from "../../../infrastructure/services/HttpService/HttpService";
import ProductService from "../../../infrastructure/services/ProductService/ProductService";
import CategoryService from "../../../infrastructure/services/CategoryService/CategoryService";
import AuthService from "../../../infrastructure/services/AuthService/AuthService";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

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

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={createTestStore()}>{children}</Provider>;
};

const RouterWrapper = ({ children }: { children: React.ReactNode }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const AllWrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderWrapper>
      <RouterWrapper>{children}</RouterWrapper>
    </ProviderWrapper>
  );
};

export const renderWithWrappers = (ui: JSX.Element, options?: any) => {
  render(ui, { wrapper: AllWrappers, ...options });
};

export * from "@testing-library/react";
