import { useRegisterPage } from "./hooks/useRegisterPage";
import { usePageTitle } from "../../common/hooks/usePageTitle";

import { AuthForm } from "../../common/components/AuthForm";

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
