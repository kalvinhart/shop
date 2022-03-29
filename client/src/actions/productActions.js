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

    console.log(options);
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

export const updateSearchOptions =
  (...args) =>
  (dispatch, getState) => {
    if (args.length === 1) {
      console.log("optionsObject");
      return dispatch({
        type: PRODUCT_UPDATE_SEARCH_OPTIONS,
        payload: args[0],
      });
    }

    console.log("no optionsObject");

    const {
      products: { searchOptions },
    } = getState();

    const updatedOptions = {
      ...searchOptions,
    };

    const optionName = args[0];
    const newOption = args[1];

    if (newOption) {
      updatedOptions[optionName] = newOption;
    } else {
      delete updatedOptions[optionName];
    }

    dispatch({
      type: PRODUCT_UPDATE_SEARCH_OPTIONS,
      payload: updatedOptions,
    });
  };
