import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../domain/models/User";
import {
  UserCredentials,
  UserIdToken,
} from "../../../infrastructure/services/interfaces/IAuthService";
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
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const logInUser = createAsyncThunk<User, UserCredentials, AsyncThunkConfig<any>>(
  "auth/logInUser",
  async (userCredentials, { rejectWithValue, extra: { authApi } }) => {
    try {
      const data: User = await authApi.signIn(userCredentials);

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
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadUserDetails = createAsyncThunk<User, UserIdToken, AsyncThunkConfig<any>>(
  "auth/loadUserDetails",
  async (userDetails, { rejectWithValue, extra: { authApi } }) => {
    try {
      const data: User = await authApi.getUserDetails(userDetails);

      const user = {
        id: data.id,
        email: data.email,
      };

      return user;
    } catch (err: any) {
      return rejectWithValue(err.message);
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
