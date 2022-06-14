import { Link } from "react-router-dom";
import { useHeader } from "../../../hooks/useHeader/useHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../SearchBar/SearchBar";

import {
  StyledCartCount,
  StyledCartIconWrapper,
  StyledHeader,
  StyledHeaderWrapper,
  StyledLowerHeader,
  StyledUserInfoWrapper,
} from "./Header.styles";
import { SpanLogo } from "../../../styles/fontStyles";
import Button from "../Button/Button";

const Header = () => {
  const { navigate, loading, user, cart, handleLogOut } = useHeader();

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <SpanLogo as={Link} to="/">
          My eShop
        </SpanLogo>

        <StyledLowerHeader>
          <SearchBar />
        </StyledLowerHeader>

        <StyledUserInfoWrapper>
          {loading ? null : user ? (
            <>
              <Link to="/profile" aria-label="View Profile">
                <FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />
              </Link>
              <Button variant="primary" onClick={handleLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button
                className="mobileHidden"
                type="secondary"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          )}
        </StyledUserInfoWrapper>

        <Link to="/cart" aria-label="View Cart">
          <StyledCartIconWrapper>
            {cart && cart.cartCount > 0 && (
              <StyledCartCount>{cart.cartCount}</StyledCartCount>
            )}
            <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
          </StyledCartIconWrapper>
        </Link>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
