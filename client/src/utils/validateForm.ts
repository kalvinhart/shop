import { InputConfig } from "../components/shared/AuthForm/hooks/useAuthForm";

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const validateForm = (formValues: InputConfig) => {
  let errors: Errors = {};

  for (const field in formValues) {
    if (formValues[field as keyof InputConfig]!.options.required && formValues[field as keyof InputConfig]!.value === "") {
      errors[field as keyof InputConfig] = "This field is required.";
    }

    if (
      formValues[field as keyof InputConfig]!.options.min &&
      formValues[field as keyof InputConfig]!.value !== "" &&
      formValues[field as keyof InputConfig]!.value.length < formValues[field as keyof InputConfig]!.options.min!
    ) {
      errors[
        field as keyof Errors
      ] = `This field must contain a minimum of ${formValues[field as keyof InputConfig]!.options.min} characters.`;
    }
  }

  if (formValues.confirmPassword) {
    if (
      !errors.confirmPassword &&
      formValues.password.value !== formValues.confirmPassword.value
    ) {
      errors.confirmPassword = "Passwords do not match.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return [errors];
  }

  return [];
};
