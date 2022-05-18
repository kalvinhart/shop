import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../../actions/authActions";

export const useRegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegistration = useSelector((state) => state.auth);
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
