import { Product } from "../../../../domain/models/Product";
import { fireEvent, renderWithWrappers, screen } from "../../../common/utils/testUtils";
import AddToCart from "./AddToCart";

const mockProduct: Product = {
  _id: "1",
  name: "Test Product",
  brand: "Test Brand",
  price: 9.99,
  categories: ["Category1"],
  imageUrl: "../../../../../public/images/no-image.jpg",
  stockQty: 50,
  amountSold: 50,
  description: "A fake product used for testing.",
};

let mockQuantity: number = 1;

const mockHandleQuantityChange = jest.fn();

const mockHandleAddToCart = jest.fn();

jest.mock("../hooks/useAddToCart.ts", () => {
  return {
    useAddToCart: (product: Product) => ({
      quantity: mockQuantity,
      price: mockProduct.price,
      stockQty: mockProduct.stockQty,
      handleQuantityChange: (val: number) => mockHandleQuantityChange(val),
      handleAddToCart: mockHandleAddToCart,
    }),
  };
});

describe("AddToCart", () => {
  test("Correct initial price is displayed.", () => {
    renderWithWrappers(<AddToCart product={mockProduct} />);

    const priceElement = screen.getByTestId("TotalPriceTest");

    expect(priceElement.textContent).toBe(`£${mockProduct.price}`);
  });

  test("Add to cart button is disabled if stock quantity is 0.", () => {
    mockProduct.stockQty = 0;

    renderWithWrappers(<AddToCart product={mockProduct} />);

    const addToCartButtonElement = screen.getByText("Add to Cart");

    expect(addToCartButtonElement).toBeDisabled();
  });

  test("Add to cart button is enabled if stock quantity is > 0.", () => {
    mockProduct.stockQty = 50;

    renderWithWrappers(<AddToCart product={mockProduct} />);

    const addToCartButtonElement = screen.getByText("Add to Cart");

    expect(addToCartButtonElement).not.toBeDisabled();
  });

  test("Clicking 'Add to Cart' calls the handler function.", () => {
    renderWithWrappers(<AddToCart product={mockProduct} />);

    const addToCartButtonElement = screen.getByText("Add to Cart");

    fireEvent.click(addToCartButtonElement);

    expect(mockHandleAddToCart).toHaveBeenCalledTimes(1);
  });

  test("Adjusting quantity updates the total price correctly.", () => {
    mockQuantity = 2;

    renderWithWrappers(<AddToCart product={mockProduct} />);

    const totalPriceElement = screen.getByTestId("TotalPriceTest");

    expect(totalPriceElement.textContent).toBe("£19.98");
  });

  test("Adjusting the quantity calls the function correctly.", () => {
    renderWithWrappers(<AddToCart product={mockProduct} />);

    const plusButtonElement = screen.getByText("+");
    fireEvent.click(plusButtonElement);

    expect(mockHandleQuantityChange).toHaveBeenCalledTimes(1);
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(1);

    const minusButtonElement = screen.getByText("-");
    fireEvent.click(minusButtonElement);

    expect(mockHandleQuantityChange).toHaveBeenCalledTimes(2);
    expect(mockHandleQuantityChange).toHaveBeenCalledWith(-1);
  });
});
