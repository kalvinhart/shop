import { Routes, Route } from "react-router";

import Header from "../components/shared/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import ProductPage from "../components/ProductPage/ProductPage";
import CartPage from "../components/CartPage/CartPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import LoginPage from "../components/LoginPage/LoginPage";

const ShopRoutes = () => {
  return (
    <>
      <Header />
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

export default ShopRoutes;
