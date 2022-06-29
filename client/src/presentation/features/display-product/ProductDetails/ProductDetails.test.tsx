import { renderWithWrappers, screen } from "../../../common/utils/testUtils";
import ProductDetails from "./ProductDetails";
import { Product } from "../../../../domain/models/Product";

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

describe("ProductDetails", () => {
  test("Details are rendered correctly.", () => {
    renderWithWrappers(<ProductDetails product={mockProduct} />);

    const imageElement = screen.getByAltText(mockProduct.name);
    const productTitleElement = screen.getByText(mockProduct.name);
    const priceElement = screen.getAllByText(`£${mockProduct.price}`);
    const brandElement = screen.getByText(mockProduct.brand);
    const descriptionElement = screen.getByText(mockProduct.description!);

    expect(imageElement).toBeInTheDocument();
    expect(productTitleElement).toBeInTheDocument();
    expect(priceElement[0]).toBeInTheDocument();
    expect(brandElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test("Shows in stock if stock quantity above 0.", () => {
    renderWithWrappers(<ProductDetails product={mockProduct} />);

    const inStockElement = screen.getByText("In Stock");

    expect(inStockElement).toBeInTheDocument();
  });

  test("Shows out of stock if stock quantity is 0.", () => {
    mockProduct.stockQty = 0;

    renderWithWrappers(<ProductDetails product={mockProduct} />);

    const inStockElement = screen.getByText("Out of Stock");

    expect(inStockElement).toBeInTheDocument();
  });
});
