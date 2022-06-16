import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Filters from "./Filters";
import { useFilters } from "../hooks/useFilters";

import * as hook from "../hooks/useFilters";
import { createTestStore } from "../../../utils/testUtils";
import Button from "../../shared/Button/Button";

let store: any;

const mockOptionTag = (
  <Button variant="filter" key="test">
    Categories: Test
  </Button>
);

jest.mock("../hooks/useFilters.tsx", () => ({
  useFilters: () => ({
    count: 5,
    handleSelectChange: (e: React.SyntheticEvent) => {},
    hasOptions: true,
    optionsTags: [mockOptionTag],
    searchOptions: {
      categories: "PS5",
      sortBy: "test2",
    },
    sortOptions: [
      { name: "test", text: "Tag Test" },
      { name: "test2", text: "Tag Test2" },
    ],
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

  // test("Does not display filter option when no filters are selected.", () => {
  //   render(
  //     <Provider store={store}>
  //       <Filters />
  //     </Provider>
  //   );
  // });

  test("Displays correct current filter option.", () => {
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
