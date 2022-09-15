import { Link } from "react-router-dom";

import { useAuthState } from "../../../common/hooks/useAuthState";
import { useCartState } from "../../../common/hooks/useCartState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  LI,
  CartCount,
  CartIconWrapper,
  HeaderUserNavWrapper,
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
    <HeaderUserNavWrapper>
      <UserUL>
        {loading ? null : (
          <HeaderDropDownMenu
            facing="right"
            categories={userCategories}
            menuTitle={<FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />}
          />
        )}

        <LI>
          <Link to="/wishlist" aria-label="View Wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} size="lg" />
          </Link>
        </LI>

        <HeaderDropDownMenu
          facing="left"
          menuTitle={
            <CartIconWrapper>
              {cart && cart.cartCount > 0 && <CartCount>{cart.cartCount}</CartCount>}
              <FontAwesomeIcon className="icon" icon={faCartShopping} size="lg" />
            </CartIconWrapper>
          }
          content={
            <HeaderCart
              cart={cart.cart}
              cartCount={cart.cartCount}
              cartTotal={cart.cartTotal}
            />
          }
        />
      </UserUL>
    </HeaderUserNavWrapper>
  );
};

export default HeaderUserNav;
