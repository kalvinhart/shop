import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "../../../hooks/useAuthState/useAuthState";
import { useCartState } from "../../../hooks/useCartState/useCartState";

import Spinner from "../Spinner/Spinner";

import {
  LI,
  StyledCartCount,
  StyledCartDropDownWrapper,
  StyledCartIconWrapper,
  StyledDropDownLI,
  StyledDropDownUL,
  StyledHeaderUserButton,
  StyledHoverableLI,
  StyledUserDropDownWrapper,
  StyledUserInfoWrapper,
  StyledUserUL,
} from "./HeaderUserNav.styles";
import { StyledHeaderNavOverlay } from "../HeaderNav/HeaderNav.styles";
import HeaderCart from "../HeaderCart/HeaderCart";

const HeaderUserNav = () => {
  const { loading, user } = useAuthState();
  const cart = useCartState();

  return (
    <StyledUserInfoWrapper>
      <StyledUserUL>
        <StyledHoverableLI>
          <StyledHeaderUserButton aria-label="User Account Drop Down Menu">
            <FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />
          </StyledHeaderUserButton>

          <StyledUserDropDownWrapper>
            {loading ? (
              <Spinner />
            ) : (
              <StyledDropDownUL>
                {user ? (
                  <>
                    <StyledDropDownLI>
                      <Link to="/profile">My Account</Link>
                    </StyledDropDownLI>
                    <StyledDropDownLI>
                      <Link to="/logout">Log Out</Link>
                    </StyledDropDownLI>
                  </>
                ) : (
                  <>
                    <StyledDropDownLI>
                      <Link to="/login">Sign In</Link>
                    </StyledDropDownLI>
                    <StyledDropDownLI>
                      <Link to="/register">Register</Link>
                    </StyledDropDownLI>
                  </>
                )}
              </StyledDropDownUL>
            )}
          </StyledUserDropDownWrapper>
        </StyledHoverableLI>

        <LI>
          <Link to="/wishlist" aria-label="View Wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} size="lg" />
          </Link>
        </LI>

        <StyledHoverableLI>
          <Link to="/cart">
            <StyledCartIconWrapper>
              {cart && cart.cartCount > 0 && (
                <StyledCartCount>{cart.cartCount}</StyledCartCount>
              )}
              <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
            </StyledCartIconWrapper>
          </Link>
          <StyledCartDropDownWrapper>
            <HeaderCart
              cart={cart.cart}
              cartCount={cart.cartCount}
              cartTotal={cart.cartTotal}
            />
          </StyledCartDropDownWrapper>
        </StyledHoverableLI>

        <StyledHeaderNavOverlay data-name="overlay" />
      </StyledUserUL>
    </StyledUserInfoWrapper>
  );
};

export default HeaderUserNav;
