import {
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
} from "../constants/cartConstants";

export const getCartReducer = (state = { loading: true, cart: [] }, action) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true };
    case CART_LIST_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
      };
    case CART_LIST_FAIL:
      return {
        loading: false,
        cart: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
