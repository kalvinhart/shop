import Container from "../shared/Container/Container";
import PageWrapper from "../shared/PageWrapper/PageWrapper";
import LoginForm from "./LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <PageWrapper>
      <Container>
        <LoginForm />
      </Container>
    </PageWrapper>
  );
};

export default LoginPage;
