import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { User } from "../../../../domain/models/User";
import {
  UserCredentials,
  UserIdToken,
} from "../../../../infrastructure/services/interfaces/IAuthService";
import { WishlistData } from "../../../../infrastructure/services/interfaces/IHttpService";
import { AsyncThunkConfig } from "../../store";

export const registerUser = createAsyncThunk<
  User,
  UserCredentials,
  AsyncThunkConfig<any>
>(
  "auth/registerUser",
  async (userCredentials, { rejectWithValue, extra: { authApi } }) => {
    try {
      const data: User = await authApi.registerUser(userCredentials);

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data,
          token: data.token,
        })
      );

      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logInUser = createAsyncThunk<User, UserCredentials, AsyncThunkConfig<any>>(
  "auth/logInUser",
  async (userCredentials, { rejectWithValue, extra: { authApi } }) => {
    try {
      const data: User = await authApi.signIn(userCredentials);

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data,
          token: data.token,
        })
      );

      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const loadUserDetails = createAsyncThunk<User, UserIdToken, AsyncThunkConfig<any>>(
  "auth/loadUserDetails",
  async (userDetails, { rejectWithValue, extra: { authApi } }) => {
    try {
      const data: User = await authApi.getUserDetails(userDetails);

      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk<null, void, AsyncThunkConfig<any>>(
  "auth/logOut",
  async (_, { extra: { authApi } }) => {
    localStorage.removeItem("user");
    return authApi.signOut();
  }
);

export const saveToWishlist = createAsyncThunk<
  string,
  WishlistData,
  AsyncThunkConfig<any>
>(
  "auth/saveToWishList",
  async (data: WishlistData, { rejectWithValue, extra: { authApi } }) => {
    try {
      await authApi.saveToWishlist(data);
      toast.success("Product saved to wishlist!");
      return data.productId;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const removeFromWishlist = createAsyncThunk<
  string,
  WishlistData,
  AsyncThunkConfig<any>
>(
  "auth/removeFromWishList",
  async (data: WishlistData, { rejectWithValue, extra: { authApi } }) => {
    try {
      await authApi.removeFromWishlist(data);
      toast.success("Product removed from wishlist!");
      return data.productId;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
