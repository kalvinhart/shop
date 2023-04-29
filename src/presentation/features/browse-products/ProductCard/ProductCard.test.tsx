import { renderWithWrappers, screen } from "../../../common/utils/testUtils";

import ProductCard from "./ProductCard";

import { Product } from "../../../../domain/models/Product";

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

let mockWishlisted = false;
let mockHandleWishlist = jest.fn();

jest.mock("../hooks/useProductCard.ts", () => ({
  useProductCard: () => ({
    id: mockProduct._id,
    name: mockProduct.name,
    imageUrl: mockProduct.imageUrl,
    price: mockProduct.price,
    isWishlisted: mockWishlisted,
    handleWishlist: mockHandleWishlist,
    handleAddToCart: jest.fn(),
  }),
}));

let mockUser = { id: "1" };

jest.mock("../../../common/hooks/useAuthState/useAuthState.ts", () => ({
  useAuthState: () => ({
    user: mockUser,
  }),
}));

describe("ProductCard", () => {
  test("Renders correct product information.", () => {
    renderWithWrappers(<ProductCard productInfo={mockProduct} />);

    const imageElementAlt = screen.getByAltText(mockProduct.name);
    expect(imageElementAlt).toBeInTheDocument();

    const titleElement = screen.getByText(mockProduct.name);
    expect(titleElement).toBeInTheDocument();

    const moreDetailsLink = screen.getByText("More Details");
    expect(moreDetailsLink.getAttribute("href")).toBe("/product/1");
  });

  test("Displays add to wishlist button if not already wishlisted.", () => {
    renderWithWrappers(<ProductCard productInfo={mockProduct} />);

    const wishlistButton = screen.getByTitle("Add to Wishlist");

    expect(wishlistButton).toBeInTheDocument();
  });

  test("Displays remove from wishlist button if already wishlisted.", () => {
    mockWishlisted = true;

    renderWithWrappers(<ProductCard productInfo={mockProduct} />);

    const wishlistButton = screen.getByTitle("Remove from Wishlist");

    expect(wishlistButton).toBeInTheDocument();
  });
});
