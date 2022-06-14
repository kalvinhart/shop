import { useLoginPage } from "../../hooks/useLoginPage/useLoginPage";

import AuthForm from "../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const { loading, error, inputConfig, formSubmit } = useLoginPage();

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
