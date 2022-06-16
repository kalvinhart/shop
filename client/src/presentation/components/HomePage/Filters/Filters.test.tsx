import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Filters from "./Filters";
import Button from "../../shared/Button/Button";

import { createTestStore } from "../../../utils/testUtils";

let store: any;

let mockHasOptions: boolean;

const mockOptionTag = (
  <Button variant="filter" key="test">
    Categories: Test
  </Button>
);

const mockSearchOptions = {
  categories: "PS5",
  sortBy: "test2",
};

const mockSortOptions = [
  { name: "test", text: "Tag Test" },
  { name: "test2", text: "Tag Test2" },
];

jest.mock("../hooks/useFilters.tsx", () => ({
  useFilters: () => ({
    count: 5,
    handleSelectChange: (e: React.SyntheticEvent) => {},
    hasOptions: mockHasOptions,
    optionsTags: [mockOptionTag],
    searchOptions: mockSearchOptions,
    sortOptions: mockSortOptions,
  }),
}));

describe("Filters", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test("Displays correct results count.", () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const countText = screen.getByText("5 Results");
    expect(countText).toBeInTheDocument();
  });

  test("Does not display filter option when no filters are selected.", () => {
    mockHasOptions = false;

    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const optionsTagElement = screen.queryByText("Categories: Test");
    expect(optionsTagElement).not.toBeInTheDocument();
  });

  test("Displays correct current filter option.", () => {
    mockHasOptions = true;

    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const optionsTagElement = screen.getByText("Categories: Test");
    expect(optionsTagElement).toBeInTheDocument();
  });

  test("Select element displays correct default selected filter option.", () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const selectText = screen.getByText("Tag Test2");
    expect(selectText).toBeInTheDocument();
  });

  test("Select element displays correct current selected filter option.", () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const selectElement: HTMLSelectElement = screen.getByText("Tag Test2");
    expect(selectElement.value).toBe("test2");

    fireEvent.change(selectElement, {
      target: {
        value: "test",
      },
    });

    expect(selectElement.value).toBe("test");
  });
});
