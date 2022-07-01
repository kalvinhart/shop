import { Product } from "../../../domain/models/Product";
import { IHttpService } from "../interfaces/IHttpService";
import {
  AllProductsReturn,
  FiltersReturn,
  IProductService,
} from "../interfaces/IProductService";

export default class ProductService implements IProductService {
  httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllProducts(params: URLSearchParams): Promise<AllProductsReturn> {
    const searchParams = params.toString();
    const url =
      searchParams.length > 0 ? `/api/products?${searchParams}` : "/api/products";

    const response = await this.httpService.get<AllProductsReturn>({
      url,
    });
    return response;
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.httpService.get<Product>({ url: `/api/products/${id}` });
    return response;
  }

  async getAllFilters(): Promise<FiltersReturn> {
    const response = await this.httpService.get<FiltersReturn>({
      url: "/api/products/filters",
    });
    return response;
  }
}
