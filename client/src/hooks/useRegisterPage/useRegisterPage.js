import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../application/hooks/useAppDispatch";
import { useAppSelector } from "../../application/hooks/useAppSelector";
import { registerUser } from "../../application/slices/thunks/authThunks";

export const useRegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userRegistration = useAppSelector((state) => state.auth);
  const { loading, error, user } = userRegistration;

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const inputConfig = {
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

  const formSubmit = (formValues) => {
    const { email, password } = formValues;

    dispatch(
      registerUser({
        email: email.value,
        password: password.value,
      })
    );
  };

  return {
    loading,
    error,
    inputConfig,
    formSubmit: (formValues) => formSubmit(formValues),
  };
};
