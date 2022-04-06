import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { logOut } from "../../../actions/authActions";

import SearchBar from "../SearchBar/SearchBar";

import {
  StyledCartCount,
  StyledCartIconWrapper,
  StyledHeader,
  StyledHeaderWrapper,
  StyledUserInfoWrapper,
} from "./Header.styles";
import { SpanLogo } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <SpanLogo as={Link} to="/">
          My eShop
        </SpanLogo>

        <SearchBar />

        <StyledUserInfoWrapper>
          {loading ? null : user ? (
            <>
              <Link to="/profile">
                <FontAwesomeIcon className="icon" icon={faUserAlt} size="lg" />
              </Link>
              <Button type="primary" onClick={handleLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button type="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button type="secondary" onClick={() => navigate("/register")}>
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
