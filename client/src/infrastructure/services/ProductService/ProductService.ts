import { Product } from "../../../domain/models/Product";
import { IHttpService, ProductData } from "../interfaces/IHttpService";
import { AllProductsReturn, IProductService } from "../interfaces/IProductService";

export default class ProductService implements IProductService {
  httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllProducts(data: ProductData): Promise<AllProductsReturn> {
    const response = await this.httpService.post<AllProductsReturn>({
      url: "/api/products",
      data,
    });
    return response;
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.httpService.get<Product>({ url: `/api/products/${id}` });
    return response;
  }
}
