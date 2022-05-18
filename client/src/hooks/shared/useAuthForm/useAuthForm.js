import { useState } from "react";
import { validateForm } from "../../../utils/validateForm";

export const useAuthForm = (inputConfig, formSubmit) => {
  const [formValues, setFormValues] = useState(inputConfig);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    if (error) setError({});

    setFormValues({
      ...formValues,
      [e.target.name]: {
        value: e.target.value,
        options: { ...formValues[e.target.name].options },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formValues);

    if (errors.length > 0) {
      setError(errors[0]);
      return;
    }

    formSubmit(formValues);
  };

  return {
    formValues,
    error,
    handleChange: (e) => handleChange(e),
    handleSubmit: (e) => handleSubmit(e),
  };
};
