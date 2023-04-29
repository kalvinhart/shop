import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { useCartState } from "../../../common/hooks/useCartState";
import { useProductState } from "../../../common/hooks/useProductState";

import { CartItem } from "../../../../domain/models/CartItem";
import { useAppDispatch } from "../../../app/hooks/useAppDispatch";
import { addProductToRecentlyViewed } from "../../../features/recently-viewed/slice/recentlyViewedSlice";

export const useProductPage = () => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    if (product._id !== "") {
      dispatch(addProductToRecentlyViewed(product));
    }
  }, [product, dispatch]);

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
  };

  return {
    detailsLoading,
    product,
    handleAddToCart: (item: CartItem) => handleAddToCart(item),
  };
};
