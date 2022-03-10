import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <PageWrapper>
      <Container>
        <RegisterForm />
      </Container>
    </PageWrapper>
  );
};

export default RegisterPage;
