import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./presentation/components/shared/ProtectedRoute/ProtectedRoute";
import Spinner from "./presentation/components/shared/Spinner/Spinner";

const HomePage = lazy(() => import("./presentation/components/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./presentation/components/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./presentation/components/LoginPage/LoginPage"));
const ProductPage = lazy(() => import("./presentation/components/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./presentation/components/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("./presentation/components/CheckoutPage/CheckoutPage"));
const PaymentConfirmationPage = lazy(
  () => import("./presentation/components/PaymentConfirmationPage/PaymentConfirmationPage")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Spinner />}>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Spinner />}>
            <CartPage />
          </Suspense>
        }
      />
      <Route
        path="/confirmation"
        element={
          <Suspense fallback={<Spinner />}>
            <PaymentConfirmationPage />
          </Suspense>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<Spinner />}>
                <CheckoutPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
