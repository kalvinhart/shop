import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { CartItem } from "../../../../domain/models/CartItem";
import { useCartState } from "../../../hooks/useCartState/useCartState";
import { useProductState } from "../../../hooks/useProductState/useProductState";

export const useProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { detailsLoading, detailsError, product, loadProductDetails } = useProductState()
  const {addToCart} = useCartState()

  const { id } = params;

  useEffect(() => {
    loadProductDetails(id as string);
  }, [loadProductDetails, id]);

  useEffect(() => {
    if (detailsError) navigate("/");
  }, [detailsError, navigate]);

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
  };

  return {
    detailsLoading,
    detailsError,
    product,
    handleAddToCart: (item: CartItem) => handleAddToCart(item),
  };
};
