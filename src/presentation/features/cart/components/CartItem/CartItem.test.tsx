import {
  fireEvent,
  renderWithWrappers,
  screen,
} from "../../../../common/utils/testUtils";
import CartItem from "./CartItem";

const mockItem = {
  id: "1",
  name: "TestItem",
  brand: "TestBrand",
  imageUrl: "",
  size: "",
  color: "",
  qty: 2,
  price: 9.99,
  total: 19.98,
};

const mockQtyChange = jest.fn();
const mockHandleRemove = jest.fn();

jest.mock("../../hooks/useCartItem.ts", () => ({
  useCartItem: () => ({
    ...mockItem,
    handleQuantityChange: mockQtyChange,
    handleRemove: mockHandleRemove,
  }),
}));

describe("CartItem", () => {
  test("Displays correct product information.", () => {
    renderWithWrappers(<CartItem item={mockItem} />);

    const titleElement = screen.getByText(mockItem.name);
    const brandElement = screen.getByText(mockItem.brand);
    const totalElement = screen.getByTestId("CartItemPrice");

    expect(titleElement).toBeInTheDocument();
    expect(brandElement).toBeInTheDocument();
    expect(totalElement.textContent).toBe("£19.98");
  });

  test("Displays size if given.", () => {
    mockItem.size = "S";
    renderWithWrappers(<CartItem item={mockItem} />);

    const sizeElement = screen.getByText("Size:");

    expect(sizeElement).toBeInTheDocument();
  });

  test("Calls function to remove if button clicked.", () => {
    renderWithWrappers(<CartItem item={mockItem} />);

    const cartItemWrapperElement = screen.getByTestId("CartItemElement");

    fireEvent.focus(cartItemWrapperElement);

    const removeButtonElement = screen.getByTestId("CartItemRemoveButton");

    fireEvent.click(removeButtonElement);

    expect(mockHandleRemove).toHaveBeenCalledTimes(1);
  });

  test("Calls function to change quantity if button clicked.", () => {
    renderWithWrappers(<CartItem item={mockItem} />);

    const plusButtonElement = screen.getByText("+");

    fireEvent.click(plusButtonElement);

    expect(mockQtyChange).toHaveBeenCalledTimes(1);
  });
});
