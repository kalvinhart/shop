import ProductContent from "./ProductContent";
import { Product } from "../../../../domain/models/Product";
import { screen, renderWithWrappers } from "../../../common/utils/testUtils";

const testProducts: Product[] = [
  {
    _id: "1",
    name: "Test Product",
    brand: "Test Brand",
    price: 9.99,
    imageUrl: "noImage.jpg",
    categories: ["Category1"],
    stockQty: 1,
    amountSold: 10,
  },
];

jest.mock("../../../common/hooks/useFilterState/useFilterState.ts", () => ({
  useFilterState: () => ({
    filters: null,
    selectedFilters: { brand: "", color: "", size: "" },
    isFiltered: false,
    isFilterApplied: false,
  }),
}));

describe("ProductContent", () => {
  test("Renders a spinner whilst loading.", () => {
    renderWithWrappers(<ProductContent products={[]} productsLoading={true} />);
    const loadingElement = screen.getByTestId("products-loading1");
    expect(loadingElement).toBeInTheDocument();
  });

  test("Does not render a spinner when loading is finished.", () => {
    renderWithWrappers(<ProductContent products={[]} productsLoading={false} />);

    const loadingElement = screen.queryByTestId("products-loading1");
    expect(loadingElement).not.toBeInTheDocument();
  });

  test("Renders no results if no products exist.", () => {
    renderWithWrappers(<ProductContent products={[]} productsLoading={false} />);

    const noResultsElement = screen.getByText(
      "Unfortunately we could not find any results matching your search."
    );
    expect(noResultsElement).toBeInTheDocument();
  });

  test("Renders products correctly.", () => {
    renderWithWrappers(
      <ProductContent products={testProducts} productsLoading={false} />
    );

    const noResultsElement = screen.queryByText(
      "Unfortunately we could not find any results matching your search."
    );
    expect(noResultsElement).not.toBeInTheDocument();

    const testProductName = screen.getByText(testProducts[0].name);
    const testProductPrice = screen.getByText(`£${testProducts[0].price}`);

    expect(testProductName.textContent).toBe(testProducts[0].name);
    expect(testProductPrice.textContent).toBe(`£${testProducts[0].price}`);
  });
});
