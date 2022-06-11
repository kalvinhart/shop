import { ProductOptions } from "./IHttpService";
import { Product } from "../../../domain/models/Product";

export interface IProductService {
  getAllProducts: (options: ProductOptions) => Promise<Product[]>;
  getProduct: (id: string) => Promise<Product>;
}
