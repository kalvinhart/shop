import { ProductData } from "./IHttpService";
import { Product } from "../../../domain/models/Product";

export type AllProductsReturn = {
  count: number;
  products: Product[];
};
export interface IProductService {
  getAllProducts: (options: ProductData) => Promise<AllProductsReturn>;
  getProduct: (id: string) => Promise<Product>;
}
