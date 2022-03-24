import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_SEARCH_OPTIONS,
} from "../constants/productConstants";
import axios from "axios";

export const loadProducts =
  (options = {}) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    try {
      const { data } = await axios.post("/api/products", options);
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: err.message,
      });
    }
  };

export const loadProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
  });

  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: err.message,
    });
  }
};

export const updateSearchOptions = (optionName, newOption) => (dispatch, getState) => {
  const {
    products: { searchOptions },
  } = getState();

  const updatedOptions = {
    ...searchOptions,
  };

  if (optionName === "sortBy") {
    updatedOptions.sortBy = newOption;
  } else {
    if (newOption) {
      updatedOptions.options[optionName] = newOption;
    } else {
      delete updatedOptions.options[optionName];
    }
  }

  dispatch({
    type: PRODUCT_UPDATE_SEARCH_OPTIONS,
    payload: updatedOptions,
  });
};
