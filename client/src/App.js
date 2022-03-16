import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { loadUserDetails, logOut } from "./actions/authActions";
import { loadCart } from "./actions/cartActions";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/shared/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { loading, user } = auth;

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

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <GlobalStyle />
      <Header loading={loading} user={user} logOut={handleLogOut} cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
