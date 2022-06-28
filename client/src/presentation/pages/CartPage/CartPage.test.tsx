import { CartItem } from "../../../domain/models/CartItem";
import { renderWithWrappers, screen } from "../../common/utils/testUtils";
import CartPage from "./CartPage";

const item1 = {
  id: "1",
  brand: "Test Brand 1",
  imageUrl: "",
  name: "Test Item 1",
  price: 10,
  qty: 1,
  total: 10,
};

const item2 = {
  id: "2",
  brand: "Test Brand 2",
  imageUrl: "",
  name: "Test Item 2",
  price: 10,
  qty: 1,
  total: 10,
};

const item3 = {
  id: "3",
  brand: "Test Brand 3",
  imageUrl: "",
  name: "Test Item 3",
  price: 10,
  qty: 1,
  total: 10,
};

const item4 = {
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

let mockCartTotal: number = mockCart.reduce((total, curr) => total + curr.total, 0);

const mockNavigate = jest.fn();

jest.mock("./hooks/useCartPage.ts", () => ({
  useCartPage: () => ({
    cart: mockCart,
    cartTotal: mockCartTotal,
    navigate: mockNavigate,
  }),
}));

describe("CartPage", () => {
  test("Cart length <= 3 displays 1 checkout buttons.", () => {
    renderWithWrappers(<CartPage />);

    const checkoutButtonElements = screen.queryAllByText("Continue to Checkout");

    expect(checkoutButtonElements.length).toBe(1);
  });

  test("Cart length > 3 displays 2 checkout buttons.", () => {
    mockCart.push(item4);

    renderWithWrappers(<CartPage />);

    const checkoutButtonElements = screen.queryAllByText("Continue to Checkout");

    expect(checkoutButtonElements.length).toBe(2);
  });

  test("Cart length = 0 displays No Cart Items.", () => {
    mockCart = [];

    renderWithWrappers(<CartPage />);

    const noItemsElement = screen.getByText("You have no items in your cart.");

    expect(noItemsElement).toBeInTheDocument();
  });

  test("Cart length > 0 displays items.", () => {
    mockCart = [{ ...item1 }];
    renderWithWrappers(<CartPage />);

    const cartItems = screen.getAllByTestId("CartItemElement");

    expect(cartItems.length).toBe(1);
  });

  test("Cart length > 0 displays subtotal.", () => {
    mockCartTotal = 20;
    renderWithWrappers(<CartPage />);

    const subtotalElement = screen.getByTestId("CartPagePrice");

    expect(subtotalElement.textContent).toBe("£20");
  });
});
