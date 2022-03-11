import {
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
    const { user } = await axios.post("/api/users/register", { email, password });
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
