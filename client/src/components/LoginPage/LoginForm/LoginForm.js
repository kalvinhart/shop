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

const LoginForm = () => {
  return (
    <StyledFormBackground>
      <StyledFormWrapper>
        <H2>Sign In</H2>
        <StyledForm>
          <StyledInputGroup>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput type="text" id="email" placeholder="Email address" />
          </StyledInputGroup>

          <StyledInputGroup>
            <StyledLabel htmlFor="password">Password:</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Password" />
          </StyledInputGroup>

          <Button $primary $large>
            Sign In
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
