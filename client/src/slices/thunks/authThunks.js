import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userDetails, { rejectWithValue }) => {
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

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async (userDetails, { rejectWithValue }) => {
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

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadUserDetails = createAsyncThunk(
  "auth/loadUserDetails",
  async (id, token, { rejectWithValue }) => {
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

      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  localStorage.removeItem("user");
  return null;
});
