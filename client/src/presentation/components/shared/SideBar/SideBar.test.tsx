import { screen, renderWithWrappers } from "../../../utils/testUtils";
import SideBar from "./SideBar";

let mockCategoriesLoading: boolean = false;
let mockLoadCategories = jest.fn();
let mockCategories = [
  { name: "Category1", subcategories: ["SubCategory1"] },
  { name: "Category2", subcategories: [] },
  { name: "Category3", subcategories: [] },
];

jest.mock("../../../hooks/useCategoryState/useCategoryState.ts", () => ({
  useCategoryState: () => ({
    categoriesLoading: mockCategoriesLoading,
    categories: mockCategories,
    loadCategories: mockLoadCategories,
  }),
}));

describe("SideBar", () => {
  test("Displays spinner whilst loading.", () => {
    mockCategoriesLoading = true;

    renderWithWrappers(<SideBar show={true} setShow={() => {}} />);

    const spinnerElement = screen.getByTestId("SideBarTest");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("Displays correct categories.", () => {
    mockCategoriesLoading = false;

    renderWithWrappers(<SideBar show={true} setShow={() => {}} />);

    const category1Element = screen.getByText("Category1");
    const category2Element = screen.getByText("Category2");
    const category3Element = screen.getByText("Category3");
    const subcategory1Element = screen.getByText("SubCategory1");

    expect(category1Element).toBeInTheDocument();
    expect(category2Element).toBeInTheDocument();
    expect(category3Element).toBeInTheDocument();
    expect(subcategory1Element).toBeInTheDocument();
  });

  test("Having no categories calls the function to load them.", () => {
    mockCategories = [];

    renderWithWrappers(<SideBar show={true} setShow={() => {}} />);

    expect(mockLoadCategories).toHaveBeenCalledTimes(1);
  });
});
