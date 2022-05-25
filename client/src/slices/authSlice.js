import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerUser, logInUser, loadUserDetails, logOut } from "./thunks/authThunks";

const initialState = { loading: false, isAuthenticated: false, user: null };

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

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
