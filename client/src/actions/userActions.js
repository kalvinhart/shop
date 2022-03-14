import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const registerUser = (userDetails) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  const { email, password } = userDetails;

  try {
    console.log("posting");
    const { data } = await axios.post("/api/users/register", {
      email,
      password,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err.message,
    });
  }
};

export const loadUserDetails = (id) => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });

  try {
    const user = await axios.get(`/api/users/${id}`);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: USER_DETAILS_FAIL, payload: err.message });
  }
};
