import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { logOut } from "../../../actions/authActions";

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
import { useDispatch, useSelector } from "react-redux";
import { updateSearchOptions } from "../../../actions/productActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value) {
      dispatch(updateSearchOptions("name", e.target[0].value));
      navigate(`/?name=${e.target[0].value}`);
      e.target[0].value = "";
    }
  };

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <SpanLogo as={Link} to="/">
          My eShop
        </SpanLogo>

        <StyledSearchForm onSubmit={handleSearchSubmit}>
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
              <Button $primary onClick={handleLogOut}>
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
