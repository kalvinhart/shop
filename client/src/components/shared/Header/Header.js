import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledUserInfoWrapper,
} from "./Header.styles";
import Container from "../Container/Container";
import { SpanLogo } from "../../../styles/fontStyles";
import { StyledInput } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <SpanLogo>My eShop</SpanLogo>
          <StyledInput type="text" name="search" id="search" placeholder="Search" />
          <StyledUserInfoWrapper>
            <Button primary>Login</Button>
            <Button secondary>Register</Button>
            <Link to="/cart">
              <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
            </Link>
          </StyledUserInfoWrapper>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;