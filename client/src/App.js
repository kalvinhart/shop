import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { loadUserDetails } from "./actions/authActions";
import { loadCart } from "./actions/cartActions";

import GlobalStyle from "./GlobalStyle";

import ShopRoutes from "./Routes/ShopRoutes";
import AdminRoutes from "./Routes/AdminRoutes";

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

      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<ShopRoutes />} />
      </Routes>
    </>
  );
};

export default App;
