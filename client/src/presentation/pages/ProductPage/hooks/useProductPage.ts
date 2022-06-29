import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { useCartState } from "../../../common/hooks/useCartState";
import { useProductState } from "../../../common/hooks/useProductState";

import { CartItem } from "../../../../domain/models/CartItem";

export const useProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { detailsLoading, detailsError, product, loadProductDetails } = useProductState();
  const { addToCart } = useCartState();

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
    product,
    handleAddToCart: (item: CartItem) => handleAddToCart(item),
  };
};
