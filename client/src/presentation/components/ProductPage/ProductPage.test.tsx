import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createTestStore } from "../../utils/testUtils";
import ProductPage from "./ProductPage";

let store: any;

let mockLoading: boolean;

jest.mock("./hooks/useProductPage.ts", () => ({
  useProductPage: () => ({
    detailsLoading: mockLoading,
    detailsError: false,
    product: {},
  }),
}));

describe("ProductPage", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test("Spinner is shown when loading.", () => {
    mockLoading = true;

    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );

    const spinnerElement = screen.getByTestId("ProductPageTest");

    expect(spinnerElement).toBeInTheDocument();
  });
});
