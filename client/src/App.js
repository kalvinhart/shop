import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { loadUserDetails } from "./actions/authActions";
import { loadCart } from "./actions/cartActions";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/shared/Header/Header";
import PageWrapper from "./components/shared/PageWrapper/PageWrapper";
import Container from "./components/shared/Container/Container";
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

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      const { id, token } = JSON.parse(localStorage.getItem("user"));
      dispatch(loadUserDetails(id, token));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart") && !cart) {
      dispatch(loadCart());
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" containerStyle={{ top: 120 }} />
      <Header />
      <PageWrapper>
        <Container>
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
        </Container>
      </PageWrapper>
    </>
  );
};

export default App;
