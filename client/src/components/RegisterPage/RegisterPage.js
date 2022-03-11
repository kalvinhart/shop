import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../../actions/userActions";

import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegistration = useSelector((state) => state.registerUser);
  const { loading, error, user } = userRegistration;

  const formSubmit = (formValues) => {
    const { email, password } = formValues;

    dispatch(registerUser({ email, password }));

    if (!error && user) navigate("/");
  };

  return (
    <PageWrapper>
      <Container>
        <RegisterForm formSubmit={formSubmit} loading={loading} registerError={error} />
      </Container>
    </PageWrapper>
  );
};

export default RegisterPage;
