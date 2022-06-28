import { useEffect } from "react";
import { useNavigate } from "react-router";

import { InputConfig } from "../../../common/components/AuthForm/hooks/useAuthForm";
import { useAuthState } from "../../../common/hooks/useAuthState";

export const useRegisterPage = () => {
  const navigate = useNavigate();

  const { loading, error, user, registerUser } = useAuthState();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

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
    confirmPassword: {
      value: "",
      options: {
        required: true,
      },
    },
  };

  const formSubmit = (formValues: InputConfig) => {
    const { email, password } = formValues;

    registerUser({
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
