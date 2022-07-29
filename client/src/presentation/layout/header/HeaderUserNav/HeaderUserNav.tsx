import { Link } from "react-router-dom";

import { useAuthState } from "../../../common/hooks/useAuthState";
import { useCartState } from "../../../common/hooks/useCartState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  LI,
  CartCount,
  CartDropDownWrapper,
  CartIconWrapper,
  HoverableLI,
  UserInfoWrapper,
  UserUL,
} from "./HeaderUserNav.styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import { DropDownCategory } from "../../../features/header-navigation/types/DropDownCategory";
import { HeaderDropDownMenu } from "../../../features/header-navigation/components/HeaderDropDownMenu";

const HeaderUserNav = () => {
  const { loading, user } = useAuthState();
  const cart = useCartState();

  const userCategories: DropDownCategory[] = [
    {
      name: "My Account",
      url: "/account",
    },
    {
      name: user ? "Log Out" : "Sign In",
      url: user ? "/logout" : "/login",
    },
  ];

  return (
    <UserInfoWrapper>
      <UserUL>
        {loading ? null : (
          <HeaderDropDownMenu
            categories={userCategories}
            menuTitle={<FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />}
          />
        )}

        <LI>
          <Link to="/wishlist" aria-label="View Wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} size="lg" />
          </Link>
        </LI>

        <HoverableLI>
          <Link to="/cart" aria-label="Go to cart">
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
