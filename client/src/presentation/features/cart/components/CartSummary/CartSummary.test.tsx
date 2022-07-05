import { renderWithWrappers, screen } from "../../../../common/utils/testUtils";
import CartSummary from "./CartSummary";

let mockCartTotal = 20;

describe("CartSummary", () => {
  test("Displays correct subtotal.", () => {
    renderWithWrappers(<CartSummary cartTotal={mockCartTotal} />);

    const subtotalElement = screen.getByTestId("CartPagePrice");

    expect(subtotalElement.textContent).toBe("£20");
  });
});
