import { Product } from "../../../domain/models/Product";

export interface AllProductsReturn extends FiltersReturn {
  products: Product[];
  pagination: {
    currentPage: number;
    pageSize: number;
    resultsCount: number;
    totalPages: number;
  };
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
  getAllProducts: (options: URLSearchParams) => Promise<AllProductsReturn>;
  getProduct: (id: string) => Promise<Product>;
  getAllFilters: () => Promise<FiltersReturn>;
}
