import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCartCount,
  StyledCartIconWrapper,
  StyledHeader,
  StyledHeaderWrapper,
  StyledSearchButton,
  StyledSearchForm,
  StyledUserInfoWrapper,
} from "./Header.styles";
import { SpanLogo } from "../../../styles/fontStyles";
import { StyledInput } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";

const Header = ({ loading, user, logOut, cart }) => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <SpanLogo as={Link} to="/">
          My eShop
        </SpanLogo>

        <StyledSearchForm>
          <StyledInput type="text" name="search" id="search" placeholder="Search" />
          <StyledSearchButton>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </StyledSearchButton>
        </StyledSearchForm>

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
    </StyledHeader>
  );
};

export default Header;
