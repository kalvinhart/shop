import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import {
  StyledForm,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
  StyledFormBackground,
  StyledFormWrapper,
} from "../../../styles/formStyles";
import { H2, SpanError, StyledParagraph } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { validateForm } from "../../../utils/validateForm";

const RegisterForm = ({ loading, formSubmit, registerError }) => {
  const [formValues, setFormValues] = useState({
    email: {
      value: "",
      options: {
        required: true,
        min: 6,
      },
    },
    password: {
      value: "",
      options: {
        required: true,
        min: 8,
      },
    },
    confirmPassword: {
      value: "",
      options: {
        required: true,
      },
    },
  });
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

  return (
    <StyledFormBackground>
      <StyledFormWrapper>
        <H2>Register</H2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputGroup>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput
              type="text"
              name="email"
              id="email"
              value={formValues.email.value}
              placeholder="Email address"
              onChange={handleChange}
            />
            {error.email && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} />
                {error.email}
              </SpanError>
            )}
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput
              type="password"
              name="password"
              id="password"
              value={formValues.password.value}
              placeholder="Password"
              onChange={handleChange}
            />
            {error.password && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} />
                {error.password}
              </SpanError>
            )}
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
            <StyledInput
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formValues.confirmPassword.value}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {error.confirmPassword && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} />
                {error.confirmPassword}
              </SpanError>
            )}
          </StyledInputGroup>

          <Button $primary $large disabled={loading} onClick={handleSubmit}>
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                Registering...
              </>
            ) : (
              "Register Account"
            )}
          </Button>
        </StyledForm>

        <StyledParagraph>
          Already have an account? <Link to="/login">Sign in.</Link>
        </StyledParagraph>
      </StyledFormWrapper>
    </StyledFormBackground>
  );
};

export default RegisterForm;
