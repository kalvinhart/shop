import { useRegisterPage } from "../../hooks/useRegisterPage/useRegisterPage";

import AuthForm from "../shared/AuthForm/AuthForm";

const RegisterPage = () => {
  const { loading, error, inputConfig, formSubmit } = useRegisterPage();

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
