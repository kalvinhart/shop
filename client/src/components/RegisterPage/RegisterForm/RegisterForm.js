import { Link } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
  StyledFormBackground,
  StyledFormWrapper,
} from "../../../styles/formStyles";
import { H2, StyledParagraph } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const RegisterForm = () => {
  return (
    <StyledFormBackground>
      <StyledFormWrapper>
        <H2>Register</H2>
        <StyledForm>
          <StyledInputGroup>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput type="text" id="email" placeholder="Email address" />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Password" />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
            <StyledInput
              type="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </StyledInputGroup>

          <Button $primary $large>
            Register Account
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
