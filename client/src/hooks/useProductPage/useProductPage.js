import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addToCart } from "../../slices/thunks/cartThunks";
import { loadProductDetails } from "../../slices/thunks/productDetailsThunks";

export const useProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const { id } = params;

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, []);

  useEffect(() => {
    if (error) navigate("/");
  }, [error]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return {
    loading,
    error,
    product,
    handleAddToCart: (item) => handleAddToCart(item),
  };
};
