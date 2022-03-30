import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_UPDATE_SEARCH_OPTIONS,
} from "../constants/productConstants";

export const productsReducer = (
  state = { loading: true, products: [], searchOptions: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        products: action.payload.products,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PRODUCT_UPDATE_SEARCH_OPTIONS: {
      return {
        ...state,
        searchOptions: action.payload,
      };
    }
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { loading: true, product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
