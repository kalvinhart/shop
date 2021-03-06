export type Product = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size?: string;
  color?: string;
  description?: string;
  imageUrl: string;
  categories: string[];
  stockQty: number;
  amountSold: number;
};
