import { Link } from "react-router-dom";
import { InputConfig, useAuthForm } from "./hooks/useAuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

import {
  Form,
  Input,
  InputGroup,
  Label,
  FormBackground,
  FormWrapper,
  SpanErrorBox,
} from "../../styles";
import { H2, SpanError, StyledParagraph } from "../../styles";

type AuthFormProps = {
  type: "LOGIN" | "REGISTER";
  loading: boolean;
  inputConfig: InputConfig;
  formSubmit: (formValues: InputConfig) => void;
  formError: boolean | string;
};

const AuthForm = ({
  type,
  loading,
  inputConfig,
  formSubmit,
  formError,
}: AuthFormProps) => {
  const { formValues, error, handleChange, handleSubmit } = useAuthForm(
    inputConfig,
    formSubmit
  );

  return (
    <FormBackground>
      <FormWrapper>
        <H2>{type === "REGISTER" ? "Register" : "Sign In"}</H2>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
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
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
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
          </InputGroup>

          {type === "REGISTER" && (
            <InputGroup>
              <Label htmlFor="confirmPassword">Confirm Password:</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formValues.confirmPassword!.value}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {error.confirmPassword && (
                <SpanError>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {error.confirmPassword}
                </SpanError>
              )}
            </InputGroup>
          )}

          {formError && <SpanErrorBox>{formError}</SpanErrorBox>}

          <Button
            variant="primary"
            size="large"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                {type === "REGISTER" ? "Registering..." : "Signing in..."}
              </>
            ) : type === "REGISTER" ? (
              "Register Account"
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>

        {type === "REGISTER" ? (
          <>
            <StyledParagraph>Already have an account?</StyledParagraph>
            <StyledParagraph>
              <Link to="/login">Sign in!</Link>
            </StyledParagraph>
          </>
        ) : (
          <>
            <StyledParagraph>Don't have an account?</StyledParagraph>
            <StyledParagraph>
              <Link to="/register">Sign up!</Link>
            </StyledParagraph>
          </>
        )}
      </FormWrapper>
    </FormBackground>
  );
};

export default AuthForm;
