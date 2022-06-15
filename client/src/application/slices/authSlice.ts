import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "../../domain/models/User";
import { registerUser, logInUser, loadUserDetails, logOut } from "./thunks/authThunks";

type AuthState = {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  error: boolean;
};

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addMatcher(
        isAnyOf(registerUser.fulfilled, logInUser.fulfilled, loadUserDetails.fulfilled),
        (state, action) => {
          state.error = false;
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.pending, logInUser.pending, loadUserDetails.pending),
        (state, action) => {
          state.error = false;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, logInUser.rejected, loadUserDetails.rejected),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export default authSlice.reducer;
