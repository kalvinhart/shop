import { useLoginPage } from "./hooks/useLoginPage";

import AuthForm from "../shared/AuthForm/AuthForm";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const LoginPage = () => {
  const { loading, error, inputConfig, formSubmit } = useLoginPage();

  usePageTitle("Sign In");

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
