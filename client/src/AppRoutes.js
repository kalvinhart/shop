import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/shared/ProtectedRoute/ProtectedRoute";
import Spinner from "./components/shared/Spinner/Spinner";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./components/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage"));
const ProductPage = lazy(() => import("./components/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./components/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("./components/CheckoutPage/CheckoutPage"));
const PaymentConfirmationPage = lazy(() =>
  import("./components/PaymentConfirmationPage/PaymentConfirmationPage")
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
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
