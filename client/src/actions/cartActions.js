import axios from "axios";
import {
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
} from "../constants/cartConstants";

export const loadCart = () => async (dispatch) => {
  dispatch({
    type: CART_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get("/api/cart");
    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CART_LIST_FAIL,
      payload: err.message,
    });
  }
};
