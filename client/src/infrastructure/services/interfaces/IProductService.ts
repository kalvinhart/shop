import { ProductOptions } from "./IHttpService";
import { Product } from "../../../domain/models/Product";

export type AllProductsReturn = {
  count: number;
  products: Product[];
};
export interface IProductService {
  getAllProducts: (options: ProductOptions) => Promise<AllProductsReturn>;
  getProduct: (id: string) => Promise<Product>;
}
