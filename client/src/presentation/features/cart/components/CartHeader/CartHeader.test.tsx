import { CartItem } from "../../../../../domain/models/CartItem";
import { renderWithWrappers, screen } from "../../../../common/utils/testUtils";
import CartHeader from "./CartHeader";

const item1: CartItem = {
  id: "1",
  brand: "Test Brand 1",
  imageUrl: "",
  name: "Test Item 1",
  price: 10,
  qty: 1,
  total: 10,
};

const item2: CartItem = {
  id: "2",
  brand: "Test Brand 2",
  imageUrl: "",
  name: "Test Item 2",
  price: 10,
  qty: 1,
  total: 10,
};

const item3: CartItem = {
  id: "3",
  brand: "Test Brand 3",
  imageUrl: "",
  name: "Test Item 3",
  price: 10,
  qty: 1,
  total: 10,
};

const item4: CartItem = {
  id: "4",
  brand: "Test Brand 4",
  imageUrl: "",
  name: "Test Item 4",
  price: 10,
  qty: 1,
  total: 10,
};

let mockCart: CartItem[] = [
  {
    ...item1,
  },
  {
    ...item2,
  },
  {
    ...item3,
  },
];

describe("CartHeader", () => {
  test("Cart length <= 3 does not display checkout button.", () => {
    renderWithWrappers(<CartHeader cart={mockCart} />);

    const checkoutButtonElement = screen.queryByText("Continue to Checkout");

    expect(checkoutButtonElement).not.toBeInTheDocument();
  });

  test("Cart length > 3 displays checkout button.", () => {
    mockCart.push(item4);

    renderWithWrappers(<CartHeader cart={mockCart} />);

    const checkoutButtonElement = screen.queryByText("Continue to Checkout");

    expect(checkoutButtonElement).toBeInTheDocument();
  });
});
