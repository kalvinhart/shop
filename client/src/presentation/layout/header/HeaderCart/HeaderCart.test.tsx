import { CartItem } from "../../../../domain/models/CartItem";
import { renderWithWrappers, screen } from "../../../common/utils/testUtils";
import HeaderCart from "./HeaderCart";

let mockCart: CartItem[] = [];
let mockCartCount = 0;
let mockCartTotal = 0;

describe("HeaderCart", () => {
  test("displays no items message if cart is empty", () => {
    renderWithWrappers(
      <HeaderCart cart={mockCart} cartCount={mockCartCount} cartTotal={mockCartTotal} />
    );

    const noItemsElement = screen.getByText("You have no items in your cart.");

    expect(noItemsElement).toBeInTheDocument();
  });

  test("displays correct cart item count", () => {
    mockCart = [
      {
        id: "1",
        brand: "Test",
        imageUrl: "/no-image.jpg",
        name: "Test Item",
        price: 9.99,
        qty: 2,
        total: 18.98,
      },
    ];
    mockCartCount = 5;

    renderWithWrappers(
      <HeaderCart cart={mockCart} cartCount={mockCartCount} cartTotal={mockCartTotal} />
    );

    const cartCountElement = screen.getByTestId("CartCountHeading");

    expect(cartCountElement.textContent).toBe("5 items.");
  });

  test("displays correct cart subtotal", () => {
    mockCartTotal = 19.99;
    renderWithWrappers(
      <HeaderCart cart={mockCart} cartCount={mockCartCount} cartTotal={mockCartTotal} />
    );

    const subtotalElement = screen.getByTestId("HeaderCartSubtotal");

    expect(subtotalElement.textContent).toBe("£19.99");
  });
});
