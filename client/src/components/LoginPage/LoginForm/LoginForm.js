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

const LoginForm = ({ loading, formSubmit }) => {
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
        <H2>Sign In</H2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputGroup>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput
              type="text"
              id="email"
              value={formValues.email.value}
              onChange={handleChange}
              placeholder="Email address"
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
              id="password"
              value={formValues.password.value}
              onChange={handleChange}
              placeholder="Password"
            />
            {error.password && (
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} />
                {error.password}
              </SpanError>
            )}
          </StyledInputGroup>

          <Button $primary $large>
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </StyledForm>
        <StyledParagraph>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </StyledParagraph>
      </StyledFormWrapper>
    </StyledFormBackground>
  );
};

export default LoginForm;
