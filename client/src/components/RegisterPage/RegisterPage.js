import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../../actions/userActions";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import AuthForm from "../shared/AuthForm/AuthForm";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegistration = useSelector((state) => state.registerUser);
  const { loading, error, user } = userRegistration;

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

    if (!error && user) navigate("/");
  };

  return (
    <PageWrapper>
      <Container>
        <AuthForm
          type="REGISTER"
          inputConfig={inputConfig}
          formSubmit={formSubmit}
          loading={loading}
          formError={error}
        />
      </Container>
    </PageWrapper>
  );
};

export default RegisterPage;
