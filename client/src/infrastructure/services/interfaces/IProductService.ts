import { ProductData } from "./IHttpService";
import { Product } from "../../../domain/models/Product";

export interface AllProductsReturn extends FiltersReturn {
  count: number;
  products: Product[];
}

export type Filters = {
  _id: string;
  count: number;
};

export type FiltersReturn = {
  allBrands: Filters[];
  allColors: Filters[];
  allSizes: Filters[];
};
export interface IProductService {
  getAllProducts: (options: ProductData) => Promise<AllProductsReturn>;
  getProduct: (id: string) => Promise<Product>;
  getAllFilters: () => Promise<FiltersReturn>;
}
