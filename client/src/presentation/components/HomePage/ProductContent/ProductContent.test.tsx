import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Product } from "../../../../domain/models/Product";
import { createTestStore } from "../../../utils/testUtils";
import ProductContent from "./ProductContent";

let store: any;

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

describe("ProductContent", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test("Renders a spinner whilst loading.", () => {
    render(
      <Provider store={store}>
        <ProductContent products={[]} productsLoading={true} />
      </Provider>
    );
    const loadingElement = screen.getByTestId("products-spinner");
    expect(loadingElement).toBeInTheDocument();
  });

  test("Does not render a spinner when loading is finished.", () => {
    render(
      <Provider store={store}>
        <ProductContent products={[]} productsLoading={false} />
      </Provider>
    );
    const loadingElement = screen.queryByTestId("products-spinner");
    expect(loadingElement).not.toBeInTheDocument();
  });

  test("Renders no results if no products exist.", () => {
    render(
      <Provider store={store}>
        <ProductContent products={[]} productsLoading={false} />
      </Provider>
    );
    const noResultsElement = screen.getByText(
      "Unfortunately we could not find any results matching your search."
    );
    expect(noResultsElement).toBeInTheDocument();
  });

  test("Renders products correctly.", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductContent products={testProducts} productsLoading={false} />
        </MemoryRouter>
      </Provider>
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
