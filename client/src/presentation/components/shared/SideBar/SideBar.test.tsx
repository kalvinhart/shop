import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createTestStore } from "../../../utils/testUtils";
import SideBar from "./SideBar";

let store: any;

let mockCategoriesLoading: boolean = false;
let mockShowCategory = jest.fn();
let mockShowAllCategories = jest.fn();
let mockURLParams = new URLSearchParams({});

jest.mock("./hooks/useSideBar.ts", () => ({
  useSideBar: () => ({
    categoriesLoading: mockCategoriesLoading,
    categories: [{ name: "Category1" }, { name: "Category2" }, { name: "Category3" }],
    searchParams: mockURLParams,
    showCategory: (category: string) => mockShowCategory(category),
    showAllCategories: () => mockShowAllCategories(),
  }),
}));

describe("SideBar", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test("Displays spinner whilst loading.", () => {
    mockCategoriesLoading = true;

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const spinnerElement = screen.getByTestId("SideBarTest");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("Displays correct categories.", () => {
    mockCategoriesLoading = false;

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const category1Element = screen.getByText("Category1");
    const category2Element = screen.getByText("Category2");
    const category3Element = screen.getByText("Category3");

    expect(category1Element).toBeInTheDocument();
    expect(category2Element).toBeInTheDocument();
    expect(category3Element).toBeInTheDocument();
  });

  test("'All' button is disabled if no search option is present", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/products"]}>
          <SideBar />
        </MemoryRouter>
      </Provider>
    );

    const allButtonElement = screen.getByText("All");
    expect(allButtonElement).toBeDisabled();
  });

  test("'All' button is not disabled if search option is present", () => {
    mockURLParams = new URLSearchParams({ category: "Category1" });
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/products?category=Category1"]}>
          <SideBar />
        </MemoryRouter>
      </Provider>
    );

    const allButtonElement = screen.getByText("All");
    expect(allButtonElement).not.toBeDisabled();
  });

  test("Clicking 'All' calls the update function correctly.", () => {
    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const allButtonElement = screen.getByText("All");

    fireEvent.click(allButtonElement);

    expect(mockShowAllCategories).toHaveBeenCalledTimes(1);
  });

  test("Clicking a category calls the update function correctly.", () => {
    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const category1Element = screen.getByText("Category2");

    fireEvent.click(category1Element);

    expect(mockShowCategory).toHaveBeenCalledTimes(1);
    expect(mockShowCategory).toHaveBeenCalledWith("Category2");
  });
});
