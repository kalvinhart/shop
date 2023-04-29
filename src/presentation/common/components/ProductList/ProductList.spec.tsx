import { renderWithWrappers, screen } from "../../utils/testUtils";
import ProductList from "./ProductList";
import { Product } from "../../../../domain/models/Product";

let mockProducts: Product[] = [
  {
    _id: "1",
    amountSold: 0,
    brand: "TestBrand",
    name: "TestName",
    price: 19.99,
    stockQty: 100,
    imageUrl: "/images/no-image.jpg",
    categories: [],
  },
  {
    _id: "2",
    amountSold: 0,
    brand: "TestBrand1",
    name: "TestName2",
    price: 9.99,
    stockQty: 100,
    imageUrl: "/images/no-image.jpg",
    categories: [],
  },
];

describe("ProductList", () => {
  test("given a list of 2 products, renders those products", () => {
    renderWithWrappers(<ProductList products={mockProducts} testId="testing" />);

    expect(screen.getAllByTestId("productlist-item").length).toBe(2);
  });

  test("renders correct product details", () => {
    mockProducts = [
      {
        _id: "1",
        amountSold: 0,
        brand: "TestBrand",
        name: "TestName",
        price: 19.99,
        stockQty: 100,
        imageUrl: "/images/no-image.jpg",
        categories: [],
      },
    ];

    renderWithWrappers(<ProductList products={mockProducts} testId="testing" />);

    expect(screen.getByText("TestBrand")).toBeInTheDocument();
    expect(screen.getByText("TestName")).toBeInTheDocument();
    expect(screen.getByText("£19.99")).toBeInTheDocument();
    expect(screen.getAllByRole("link")[0]).toHaveProperty(
      "href",
      "http://localhost/product/1"
    );
    expect(screen.getAllByRole("link")[1]).toHaveProperty(
      "href",
      "http://localhost/product/1"
    );
    expect(screen.getByRole("img")).toHaveAccessibleName("TestName");
  });
});
