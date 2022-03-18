import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCartCount,
  StyledCartIconWrapper,
  StyledHeader,
  StyledHeaderWrapper,
  StyledUserInfoWrapper,
} from "./Header.styles";
import Container from "../Container/Container";
import { SpanLogo } from "../../../styles/fontStyles";
import { StyledInput } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";

const Header = ({ loading, user, logOut, cart }) => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <SpanLogo as={Link} to="/">
            My eShop
          </SpanLogo>

          <StyledInput type="text" name="search" id="search" placeholder="Search" />

          <StyledUserInfoWrapper>
            {loading ? null : user ? (
              <>
                <Link to="/profile">
                  <FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />
                </Link>
                <Button $primary onClick={logOut}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" $primary>
                  Login
                </Button>
                <Button as={Link} to="/register" $secondary>
                  Register
                </Button>
              </>
            )}

            <Link to="/cart">
              <StyledCartIconWrapper>
                {cart && cart.cartCount > 0 && (
                  <StyledCartCount>{cart.cartCount}</StyledCartCount>
                )}
                <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
              </StyledCartIconWrapper>
            </Link>
          </StyledUserInfoWrapper>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
