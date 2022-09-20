import { useState } from "react";
import { useAuthState } from "../../../hooks/useAuthState";
import { validateForm } from "../../../utils/validateForm";

export type FormErrors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

type InputOptions = {
  required?: boolean;
  min?: number;
};

export type InputConfig = {
  email: {
    value: string;
    options: InputOptions;
  };
  password: {
    value: string;
    options: InputOptions;
  };
  confirmPassword?: {
    value: string;
    options: InputOptions;
  };
};

export const useAuthForm = (
  inputConfig: InputConfig,
  formSubmit: (formValues: InputConfig) => void
) => {
  const { error: responseError, clearErrors } = useAuthState();
  const [formValues, setFormValues] = useState(inputConfig);

  const initialErrorState: FormErrors = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [error, setError] = useState<FormErrors>(initialErrorState);

  const handleChange = (e: React.SyntheticEvent) => {
    if (error) setError({});
    if (responseError) clearErrors();

    setFormValues({
      ...formValues,
      [(e.target as HTMLInputElement).name]: {
        value: (e.target as HTMLInputElement).value,
        options: {
          ...formValues[(e.target as HTMLInputElement).name as keyof InputConfig]!
            .options,
        },
      },
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
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
    handleChange: (e: React.SyntheticEvent) => handleChange(e),
    handleSubmit: (e: React.SyntheticEvent) => handleSubmit(e),
  };
};
