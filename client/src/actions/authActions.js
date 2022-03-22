import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/authConstants";
import axios from "axios";

export const registerUser = (userDetails) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  const { email, password } = userDetails;

  try {
    const { data } = await axios.post("/api/users/register", {
      email,
      password,
    });

    const user = {
      id: data.id,
      email: data.email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        token: data.token,
      })
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err.message,
    });
  }
};

export const logInUser = (userDetails) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const { email, password } = userDetails;

  try {
    const { data } = await axios.post("/api/users/login", { email, password });

    const user = {
      id: data.id,
      email: data.email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        token: data.token,
      })
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: err.message });
  }
};

export const loadUserDetails = (id, token) => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`/api/users/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const user = {
      id: data.id,
      email: data.email,
    };

    dispatch({ type: USER_DETAILS_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: USER_DETAILS_FAIL, payload: err.message });
  }
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
};
