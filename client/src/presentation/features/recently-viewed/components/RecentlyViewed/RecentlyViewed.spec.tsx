import { Product } from "../../../../../domain/models/Product";
import { renderWithWrappers, screen } from "../../../../common/utils/testUtils";
import { RecentlyViewed } from "./index";

let mockProducts: Product[] = [];

jest.mock("../../hooks/useRecentlyViewed.ts", () => ({
  useRecentlyViewed: () => ({
    products: mockProducts,
  }),
}));

describe("RecentlyViewed", () => {
  test("renders a header with text 'Recently Viewed'", () => {
    renderWithWrappers(<RecentlyViewed />);

    expect(screen.getByText("Recently Viewed")).toBeInTheDocument();
  });

  test("is not displayed when there is are no recently viewed products", () => {
    renderWithWrappers(<RecentlyViewed />);

    expect(screen.queryByTestId("recently-viewed")).not.toBeInTheDocument();
  });

  test("is displayed when there is are recently viewed products", () => {
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

    renderWithWrappers(<RecentlyViewed />);

    expect(screen.getByTestId("recently-viewed")).toBeInTheDocument();
  });
});
