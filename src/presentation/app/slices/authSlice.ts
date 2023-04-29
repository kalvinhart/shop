import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "../../../domain/models/User";
import {
  registerUser,
  logInUser,
  loadUserDetails,
  logOut,
  saveToWishlist,
  removeFromWishlist,
} from "./thunks/authThunks";

type AuthState = {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  error: boolean | string;
  wishlist: string[];
};

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: false,
  wishlist: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.wishlist = [];
      })
      .addCase(saveToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.wishlist.push(action.payload);
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.wishlist = state.wishlist.filter((item) => item !== action.payload);
      })
      .addMatcher(
        isAnyOf(registerUser.fulfilled, logInUser.fulfilled, loadUserDetails.fulfilled),
        (state, action) => {
          state.error = false;
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
          state.wishlist = action.payload.wishlist;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          logInUser.pending,
          loadUserDetails.pending,
          saveToWishlist.pending,
          removeFromWishlist.pending
        ),
        (state, action) => {
          state.error = false;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          logInUser.rejected,
          loadUserDetails.rejected,
          saveToWishlist.rejected,
          removeFromWishlist.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
