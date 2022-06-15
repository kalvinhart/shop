import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { InputConfig } from "../../shared/AuthForm/hooks/useAuthForm";
import { useAuthState } from "../../../hooks/useAuthState/useAuthState";

type LocationState = {
  from: {
    pathname: string;
  };
};

export const useLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { loading, user, error, logInUser } = useAuthState();

  useEffect(() => {
    if (user)
      navigate(
        (location.state as LocationState)?.from
          ? (location.state as LocationState).from
          : "/"
      );
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

    logInUser({
      email: email.value,
      password: password.value,
    });
  };

  return {
    loading,
    error,
    inputConfig,
    formSubmit: (formValues: InputConfig) => formSubmit(formValues),
  };
};
