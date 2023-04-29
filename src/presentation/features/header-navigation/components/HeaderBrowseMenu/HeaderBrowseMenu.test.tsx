let mockCategoriesLoading: boolean = false;
let mockLoadCategories = jest.fn();
let mockCategories = [
  { name: "Category1", subcategories: ["SubCategory1"] },
  { name: "Category2", subcategories: [] },
  { name: "Category3", subcategories: [] },
];

jest.mock("../../../../common/hooks/useCategoryState/useCategoryState.ts", () => ({
  useCategoryState: () => ({
    categoriesLoading: mockCategoriesLoading,
    categories: mockCategories,
    loadCategories: mockLoadCategories,
  }),
}));

describe("HeaderBrowseMenu", () => {
  it("n/a", () => {});
});
