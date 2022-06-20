import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Product } from "../../../../domain/models/Product";
import { createTestStore } from "../../../utils/testUtils";
import ProductCard from "./ProductCard";

let store: any;

const mockProduct: Product = {
  _id: "1",
  name: "Test Product",
  brand: "Test Brand",
  price: 9.99,
  categories: ["Category1"],
  imageUrl: "../../../../../public/images/no-image.jpg",
  stockQty: 100,
  amountSold: 50,
  description: "A fake product used for testing.",
};

describe("ProductCard", () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test("Renders correct product information.", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductCard productInfo={mockProduct} />
        </MemoryRouter>
      </Provider>
    );

    const imageElementAlt = screen.getByAltText(mockProduct.name);
    expect(imageElementAlt).toBeInTheDocument();

    const titleElement = screen.getByText(mockProduct.name);
    expect(titleElement).toBeInTheDocument();

    const moreDetailsLink = screen.getByText("More Details");
    expect(moreDetailsLink.getAttribute("href")).toBe("/product/1");
  });
});
