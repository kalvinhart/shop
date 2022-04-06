import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { loadUserDetails } from "./actions/authActions";
import { loadCart } from "./actions/cartActions";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/shared/Header/Header";
import PageWrapper from "./components/shared/PageWrapper/PageWrapper";
import Container from "./components/shared/Container/Container";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/shared/ProtectedRoute/ProtectedRoute";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import PaymentConfirmationPage from "./components/PaymentConfirmationPage/PaymentConfirmationPage";

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
      <Toaster position="top-right" containerStyle={{ top: 80 }} />
      <Header />
      <PageWrapper>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/confirmation" element={<PaymentConfirmationPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </PageWrapper>
    </>
  );
};

export default App;
