import { useCallback } from "react";

import { useAppDispatch } from "../../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../../application/hooks/useAppSelector";

import {
  loadUserDetails,
  logInUser,
  logOut,
  registerUser,
  removeFromWishlist,
  saveToWishlist,
} from "../../../application/slices/thunks/authThunks";

import {
  UserCredentials,
  UserIdToken,
} from "../../../infrastructure/services/interfaces/IAuthService";

import { getUserTokenFromStorage } from "../../utils/token";

export const useAuthState = () => {
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated, user, error, wishlist } = useAppSelector(
    (state) => state.auth
  );

  const addToWishlist = useCallback(
    (productId: string) => {
      const { id, token } = getUserTokenFromStorage();

      return dispatch(saveToWishlist({ userId: id, productId, token }));
    },
    [dispatch]
  );

  const deleteFromWishlist = useCallback(
    (productId: string) => {
      const { id, token } = getUserTokenFromStorage();

      return dispatch(removeFromWishlist({ userId: id, productId, token }));
    },
    [dispatch]
  );

  return {
    loading,
    isAuthenticated,
    user,
    error,
    wishlist,
    registerUser: useCallback(
      (userCredentials: UserCredentials) => {
        dispatch(registerUser(userCredentials));
      },
      [dispatch]
    ),
    logInUser: useCallback(
      (userCredentials: UserCredentials) => {
        dispatch(logInUser(userCredentials));
      },
      [dispatch]
    ),
    loadUserDetails: useCallback(
      (userDetails: UserIdToken) => {
        dispatch(loadUserDetails(userDetails));
      },
      [dispatch]
    ),
    logOut: useCallback(() => {
      dispatch(logOut());
    }, [dispatch]),
    addToWishlist,
    deleteFromWishlist,
  };
};
