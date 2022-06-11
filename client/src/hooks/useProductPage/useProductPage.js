import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";
import { addToCart } from "../../application/slices/thunks/cartThunks";
import { loadProductDetails } from "../../application/slices/thunks/productDetailsThunks";

export const useProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const productDetails = useAppSelector((state) => state.productDetails);
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
