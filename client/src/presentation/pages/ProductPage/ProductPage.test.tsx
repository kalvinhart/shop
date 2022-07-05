import { renderWithWrappers, screen } from "../../common/utils/testUtils";
import ProductPage from "./ProductPage";

let mockLoading: boolean;

jest.mock("./hooks/useProductPage.ts", () => ({
  useProductPage: () => ({
    detailsLoading: mockLoading,
    detailsError: false,
    product: {},
  }),
}));

describe("ProductPage", () => {
  test("Spinner is shown when loading.", () => {
    mockLoading = true;

    renderWithWrappers(<ProductPage />);

    const spinnerElement = screen.getByTestId("ProductPageSpinner");

    expect(spinnerElement).toBeInTheDocument();
  });

  test("Spinner is not shown when not loading.", () => {
    mockLoading = false;

    renderWithWrappers(<ProductPage />);

    const spinnerElement = screen.queryByTestId("ProductPageSpinner");

    expect(spinnerElement).not.toBeInTheDocument();
  });
});
