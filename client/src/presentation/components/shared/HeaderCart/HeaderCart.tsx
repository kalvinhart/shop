import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../../domain/models/CartItem";
import {
  H3,
  SpanBold,
  SpanPrice,
  SpanRegular,
  StyledParagraph,
} from "../../../styles/fontStyles";
import Button from "../Button/Button";
import {
  StyledHeaderCartImage,
  StyledHeaderCartItemWrapper,
  StyledHeaderCartPreview,
  StyledHeaderCartWrapper,
} from "./HeaderCart.styles";

type HeaderCartProps = {
  cart: CartItem[] | null;
  cartCount: number;
  cartTotal: number;
};

const HeaderCart = ({ cart, cartCount, cartTotal }: HeaderCartProps) => {
  const navigate = useNavigate();

  if (!cart || cart.length === 0)
    return <StyledParagraph>You have no items in your cart.</StyledParagraph>;

  const cartPreview = (
    <StyledHeaderCartPreview>
      <H3>{`${cartCount} ${cartCount > 1 ? "items" : "item"}.`}</H3>
      <StyledHeaderCartWrapper>
        {cart.map((item) => (
          <StyledHeaderCartItemWrapper>
            <StyledHeaderCartImage src={item.imageUrl} alt={item.name} />
            <SpanBold>{item.name}</SpanBold>
            <SpanRegular>{`x ${item.qty}`}</SpanRegular>
            <SpanPrice>{`£${item.total}`}</SpanPrice>
          </StyledHeaderCartItemWrapper>
        ))}
      </StyledHeaderCartWrapper>
      <Button variant="primary" onClick={() => navigate("/checkout")}>
        Go to Checkout
      </Button>
    </StyledHeaderCartPreview>
  );

  return cartPreview;
};

export default HeaderCart;
