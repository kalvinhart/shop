import { useRegisterPage } from "./hooks/useRegisterPage";

import AuthForm from "../shared/AuthForm/AuthForm";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const RegisterPage = () => {
  const { loading, error, inputConfig, formSubmit } = useRegisterPage();

  usePageTitle("Sign Up");

  return (
    <AuthForm
      type="REGISTER"
      inputConfig={inputConfig}
      formSubmit={formSubmit}
      loading={loading}
      formError={error}
    />
  );
};

export default RegisterPage;
