import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logInUser } from "../../actions/authActions";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import AuthForm from "../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logIn = useSelector((state) => state.logInUser);
  const { loading, user, error } = logIn;

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

    if (!error && user) navigate("/");
  };

  return (
    <PageWrapper>
      <Container>
        <AuthForm
          type="LOGIN"
          loading={loading}
          inputConfig={inputConfig}
          formSubmit={formSubmit}
          formError={error}
        />
      </Container>
    </PageWrapper>
  );
};

export default LoginPage;
