export const validateForm = (formValues) => {
  let errors = {};

  for (const field in formValues) {
    if (formValues[field].options.required && formValues[field].value === "") {
      errors[field] = "This field is required.";
    }

    if (
      formValues[field].options.min &&
      formValues[field].value !== "" &&
      formValues[field].value.length < formValues[field].options.min
    ) {
      errors[
        field
      ] = `This field must contain a minimum of ${formValues[field].options.min} characters.`;
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
