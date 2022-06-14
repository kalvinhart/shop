import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";
import { logInUser } from "../../application/slices/thunks/authThunks";
import { InputConfig } from "../shared/useAuthForm/useAuthForm";

type LocationState = {
  from: {
    pathname: string;
  }
}

export const useLoginPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logIn = useAppSelector((state) => state.auth);
  const { loading, user, error } = logIn;

  useEffect(() => {
    if (user) navigate((location.state as LocationState)?.from  ? (location.state as LocationState).from : "/");
  }, [user, navigate, location.state]);

  const inputConfig: InputConfig = {
    email: {
      value: "",
      options: {
        required: true,
        min: 6,
      },
    },
    password: {
      value: "",
      options: {
        required: true,
        min: 8,
      },
    },
  };

  const formSubmit = (formValues: InputConfig) => {
    const { email, password } = formValues;

    dispatch(
      logInUser({
        email: email.value,
        password: password.value,
      })
    );
  };

  return {
    loading,
    error,
    inputConfig,
    formSubmit: (formValues: InputConfig) => formSubmit(formValues),
  };
};
