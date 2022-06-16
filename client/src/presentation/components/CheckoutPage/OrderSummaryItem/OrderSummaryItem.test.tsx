import { render, screen } from "../../../utils/testUtils";
import OrderSummaryItem from "./OrderSummaryItem";

const mockItem = {
  name: "TestItem",
  brand: "TestBrand",
  qty: 1,
  price: 9.99,
  total: 9.99,
};

describe("OrderSummaryItem", () => {
  test("Renders the correct information.", () => {
    render(<OrderSummaryItem item={mockItem} />);

    const nameElement = screen.getByTestId("OrderSummaryItem-Name");
    const brandElement = screen.getByTestId("OrderSummaryItem-Brand");
    const qtyPriceElement = screen.getByTestId("OrderSummaryItem-QtyPrice");
    const totalElement = screen.getByTestId("OrderSummaryItem-Total");

    expect(nameElement.textContent).toBe("TestItem");
    expect(brandElement.textContent).toBe("TestBrand");
    expect(qtyPriceElement.textContent).toBe("£9.99 x 1");
    expect(totalElement.textContent).toBe("£9.99");
  });
});
