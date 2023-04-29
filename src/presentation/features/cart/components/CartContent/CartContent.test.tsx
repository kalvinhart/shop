import { CartItem } from "../../../../../domain/models/CartItem";
import { renderWithWrappers, screen } from "../../../../common/utils/testUtils";
import CartContent from "./CartContent";

const item1: CartItem = {
  id: "1",
  brand: "Test Brand 1",
  imageUrl: "",
  name: "Test Item 1",
  price: 10,
  qty: 1,
  total: 10,
};

const item2: CartItem = {
  id: "2",
  brand: "Test Brand 2",
  imageUrl: "",
  name: "Test Item 2",
  price: 10,
  qty: 1,
  total: 10,
};

const item3: CartItem = {
  id: "3",
  brand: "Test Brand 3",
  imageUrl: "",
  name: "Test Item 3",
  price: 10,
  qty: 1,
  total: 10,
};

let mockCart: CartItem[] = [
  {
    ...item1,
  },
  {
    ...item2,
  },
  {
    ...item3,
  },
];

let mockCartTotal: number = mockCart.reduce((total, curr) => total + curr.total, 0);

describe("CartContent", () => {
  test("Cart length = 0 displays No Cart Items.", () => {
    mockCart = [];

    renderWithWrappers(<CartContent cart={mockCart} cartTotal={mockCartTotal} />);

    const noItemsElement = screen.getByText("You have no items in your cart.");

    expect(noItemsElement).toBeInTheDocument();
  });

  test("Cart length > 0 does not display No Cart Items.", () => {
    mockCart = [{ ...item1 }];
    renderWithWrappers(<CartContent cart={mockCart} cartTotal={mockCartTotal} />);

    const noItemsElement = screen.queryByText("You have no items in your cart.");

    expect(noItemsElement).not.toBeInTheDocument();
  });
});
