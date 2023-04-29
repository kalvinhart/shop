import { fireEvent, renderWithWrappers, screen } from "../../../common/utils/testUtils";
import PaginationButtons from "./PaginationButtons";

const pages = {
  currentPage: 1,
  totalPages: 3,
};

const mockOnChange = jest.fn();

describe("PaginationButtons", () => {
  test("displays all buttons with no dots if total pages is less than max number of pages to show", () => {
    renderWithWrappers(<PaginationButtons pages={pages} onChange={mockOnChange} />);

    const paginationButtons = screen.getAllByTestId("PaginationButton");

    expect(paginationButtons.length).toBe(1);

    const leadingDotsElements = screen.queryByTestId("LeadingDots");
    const trailingDotsElements = screen.queryByTestId("TrailingDots");

    expect(leadingDotsElements).not.toBeInTheDocument();
    expect(trailingDotsElements).not.toBeInTheDocument();
  });

  test("displays trailing dots when total pages is 4", () => {
    pages.totalPages = 4;
    renderWithWrappers(<PaginationButtons pages={pages} onChange={mockOnChange} />);

    const trailingDotsElement = screen.getByTestId("TrailingDots");

    expect(trailingDotsElement).toBeInTheDocument();
  });

  test("displays leading dots when total pages is 4 and current page is 4", () => {
    pages.totalPages = 4;
    pages.currentPage = 4;

    renderWithWrappers(<PaginationButtons pages={pages} onChange={mockOnChange} />);

    const leadingDotsElement = screen.getByTestId("LeadingDots");

    expect(leadingDotsElement).toBeInTheDocument();
  });

  test("calls the page change function when a page number is clicked", () => {
    renderWithWrappers(<PaginationButtons pages={pages} onChange={mockOnChange} />);

    const firstPageElement = screen.getByText("1");

    fireEvent.click(firstPageElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
