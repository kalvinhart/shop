import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, useParams, useSearchParams } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import { Spinner } from "../common/components/Spinner";

// const HomePage = lazy(() => import("./presentation/components/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const LogOutPage = lazy(() => import("../pages/LogOutPage/LogOutPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage/CheckoutPage"));
const PaymentConfirmationPage = lazy(
  () => import("../pages/PaymentConfirmationPage/PaymentConfirmationPage")
);
const WishlistPage = lazy(() => import("../pages/WishlistPage/WishlistPage"));
const AccountPage = lazy(() => import("../pages/AccountPage/AccountPage"));

const AppRoutes = () => {
  const location = useLocation();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, searchParams]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <ProductsPage />
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
        path="/logout"
        element={
          <Suspense fallback={<Spinner />}>
            <LogOutPage />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<Spinner />}>
            <ProductsPage />
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

        <Route
          path="/wishlist"
          element={
            <Suspense fallback={<Spinner />}>
              <WishlistPage />
            </Suspense>
          }
        />

        <Route
          path="/account"
          element={
            <Suspense fallback={<Spinner />}>
              <AccountPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
