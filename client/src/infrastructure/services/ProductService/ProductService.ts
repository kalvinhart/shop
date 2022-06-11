import { Product } from "../../../domain/models/Product";
import { IHttpService, ProductOptions } from "../interfaces/IHttpService";
import { IProductService } from "../interfaces/IProductService";

export default class ProductService implements IProductService {
  httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllProducts(options: ProductOptions): Promise<Product[]> {
    const data = await this.httpService.post<Product[]>({
      url: "/api/products",
      options,
    });
    return data;
  }

  async getProduct(id: string): Promise<Product> {
    const data = await this.httpService.get<Product>({ url: `/api/products/${id}` });
    return data;
  }
}
