import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "../../../hooks/useAuthState/useAuthState";
import { useCartState } from "../../../hooks/useCartState/useCartState";

import Spinner from "../Spinner/Spinner";

import {
  LI,
  CartCount,
  CartDropDownWrapper,
  CartIconWrapper,
  DropDownLI,
  DropDownUL,
  HeaderUserButton,
  HoverableLI,
  UserDropDownWrapper,
  UserInfoWrapper,
  UserUL,
} from "./HeaderUserNav.styles";
import { HeaderNavOverlay } from "../HeaderNav/HeaderNav.styles";
import HeaderCart from "../HeaderCart/HeaderCart";

const HeaderUserNav = () => {
  const { loading, user } = useAuthState();
  const cart = useCartState();

  return (
    <UserInfoWrapper>
      <UserUL>
        <HoverableLI>
          <HeaderUserButton aria-label="User Account Drop Down Menu">
            <FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />
          </HeaderUserButton>

          <UserDropDownWrapper>
            {loading ? (
              <Spinner />
            ) : (
              <DropDownUL>
                {user ? (
                  <>
                    <DropDownLI>
                      <Link to="/profile">My Account</Link>
                    </DropDownLI>
                    <DropDownLI>
                      <Link to="/logout">Log Out</Link>
                    </DropDownLI>
                  </>
                ) : (
                  <>
                    <DropDownLI>
                      <Link to="/login">Sign In</Link>
                    </DropDownLI>
                    <DropDownLI>
                      <Link to="/register">Register</Link>
                    </DropDownLI>
                  </>
                )}
              </DropDownUL>
            )}
          </UserDropDownWrapper>
        </HoverableLI>

        <LI>
          <Link to="/wishlist" aria-label="View Wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} size="lg" />
          </Link>
        </LI>

        <HoverableLI>
          <Link to="/cart">
            <CartIconWrapper>
              {cart && cart.cartCount > 0 && <CartCount>{cart.cartCount}</CartCount>}
              <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
            </CartIconWrapper>
          </Link>
          <CartDropDownWrapper>
            <HeaderCart
              cart={cart.cart}
              cartCount={cart.cartCount}
              cartTotal={cart.cartTotal}
            />
          </CartDropDownWrapper>
        </HoverableLI>
      </UserUL>
    </UserInfoWrapper>
  );
};

export default HeaderUserNav;
