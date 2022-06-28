import { renderWithWrappers, screen } from "../../../common/utils/testUtils";
import OrderSummary from "./OrderSummary";

const mockCart = [
  {
    id: "1",
    brand: "Test Brand 1",
    imageUrl: "",
    name: "Test Item 1",
    price: 10,
    qty: 1,
    total: 10,
  },
];

const mockCartTotal = mockCart.reduce((total, curr) => total + curr.total, 0);

describe("OrderSummary", () => {
  test("Renders cart items correctly.", () => {
    renderWithWrappers(<OrderSummary cart={mockCart} cartTotal={mockCartTotal} />);

    const cartItemElement = screen.getByText(mockCart[0].name);

    expect(cartItemElement).toBeInTheDocument();
  });

  test("Renders cart total correctly.", () => {
    renderWithWrappers(<OrderSummary cart={mockCart} cartTotal={mockCartTotal} />);

    const cartTotalElement = screen.getByTestId("OrderSummaryTotal");

    expect(cartTotalElement.textContent).toBe("£10");
  });
});
