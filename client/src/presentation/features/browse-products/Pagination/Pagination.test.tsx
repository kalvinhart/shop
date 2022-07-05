import { renderWithWrappers, screen } from "../../../common/utils/testUtils";
import Pagination from "./Pagination";

jest.mock("../../../common/hooks/useProductState/useProductState.ts", () => ({
  useProductState: () => ({
    pagination: {
      currentPage: 1,
      totalPages: 3,
      pageSize: 5,
      resultsCount: 12,
    },
  }),
}));

describe("Pagination", () => {
  test("shows correct number of results", () => {
    renderWithWrappers(<Pagination />);

    const resultsCountElement = screen.getByTestId("ResultsCount");

    expect(resultsCountElement.textContent).toBe("12");
  });

  test("shows correct currently displayed number of results", () => {
    renderWithWrappers(<Pagination />);

    const resultsRangeElement = screen.getByTestId("ResultsRange");

    expect(resultsRangeElement.textContent).toBe("1 - 5");
  });
});
