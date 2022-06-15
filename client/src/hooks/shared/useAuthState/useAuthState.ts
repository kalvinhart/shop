import { useCallback } from "react";
import { useAppDispatch } from "../../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../../application/hooks/useAppSelector";
import {
  loadUserDetails,
  logInUser,
  logOut,
  registerUser,
} from "../../../application/slices/thunks/authThunks";
import {
  UserCredentials,
  UserIdToken,
} from "../../../infrastructure/services/interfaces/IAuthService";

export const useAuthState = () => {
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated, user, error } = useAppSelector((state) => state.auth);

  return {
    loading,
    isAuthenticated,
    user,
    error,
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
  };
};
