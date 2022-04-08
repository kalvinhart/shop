import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadProductDetails } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";

import ProductDetails from "./ProductDetails/ProductDetails";
import Spinner from "../shared/Spinner/Spinner";

const ProductPage = () => {
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

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ProductDetails product={product} addToCart={handleAddToCart} />
      )}
    </>
  );
};

export default ProductPage;
