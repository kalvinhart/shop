import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { logInUser } from "../../actions/authActions";

import AuthForm from "../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logIn = useSelector((state) => state.auth);
  const { loading, user, error } = logIn;

  useEffect(() => {
    if (user) navigate(location.state?.from ? location.state.from : "/");
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
  };

  const formSubmit = (formValues) => {
    const { email, password } = formValues;

    dispatch(
      logInUser({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <AuthForm
      type="LOGIN"
      loading={loading}
      inputConfig={inputConfig}
      formSubmit={formSubmit}
      formError={error}
    />
  );
};

export default LoginPage;
