import { renderWithWrappers, screen } from "../../common/utils/testUtils";
import ProductPage from "./ProductPage";

let mockLoading: boolean;

jest.mock("./hooks/useProductPage.ts", () => ({
  useProductPage: () => ({
    detailsLoading: mockLoading,
    detailsError: false,
    product: {
      _id: "TestId",
      name: "TestName",
      brand: "TestBrand",
      price: 9.99,
      description: "Test product",
      imageUrl: "/images/no-image.jpg",
      categories: ["Test1", "Test2"],
      stockQty: 24,
      amountSold: 75,
    },
  }),
}));

describe("ProductPage", () => {
  test("Spinner is shown when loading.", () => {
    mockLoading = true;

    renderWithWrappers(<ProductPage />);

    const spinnerElement = screen.getByTestId("product-page-loading");

    expect(spinnerElement).toBeInTheDocument();
  });

  test("Spinner is not shown when not loading.", () => {
    mockLoading = false;

    renderWithWrappers(<ProductPage />);

    const spinnerElement = screen.queryByTestId("product-page-loading");

    expect(spinnerElement).not.toBeInTheDocument();
  });
});
