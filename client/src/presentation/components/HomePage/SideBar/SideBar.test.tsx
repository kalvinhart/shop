import { faHandsWash } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createTestStore } from "../../../utils/testUtils";
import SideBar from "./SideBar";

let store: any;

let mockCategoriesLoading: boolean = false;
let mockSearchOptions = {};
let mockHandleChange = jest.fn();

jest.mock("../hooks/useSideBar.ts", () => ({
  useSideBar: () => ({
    categoriesLoading: mockCategoriesLoading,
    categories: [{ name: "Category1" }, { name: "Category2" }, { name: "Category3" }],
    searchOptions: mockSearchOptions,
    handleCategoryChange: mockHandleChange,
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
        <SideBar />
      </Provider>
    );

    const allButtonElement = screen.getByText("All");
    expect(allButtonElement).toBeDisabled();
  });

  test("'All' button is not disabled if search option is present", () => {
    mockSearchOptions = {
      categories: "Category1",
    };

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const allButtonElement = screen.getByText("All");
    expect(allButtonElement).not.toBeDisabled();
  });

  test("Clicking 'All' calls the update function correctly.", () => {
    mockSearchOptions = {
      categories: "Category1",
    };

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const allButtonElement = screen.getByText("All");

    fireEvent.click(allButtonElement);

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith("");
  });

  test("Clicking a category calls the update function correctly.", () => {
    mockSearchOptions = {};

    render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const category1Element = screen.getByText("Category1");

    fireEvent.click(category1Element);

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith("Category1");
  });
});
