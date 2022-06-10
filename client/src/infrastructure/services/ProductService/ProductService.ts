import {
  GetReturnType,
  PostReturnType,
  IHttpService,
  ProductOptions,
} from "../interfaces/IHttpService";
import { IProductService } from "../interfaces/IProductService";

export default class ProductService implements IProductService {
  httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllProducts(options: ProductOptions): Promise<Partial<PostReturnType>> {
    const data = await this.httpService.post({ url: "/api/products", options });
    return data;
  }

  async getProduct(id: string): Promise<Partial<GetReturnType>> {
    const data = await this.httpService.get({ url: `/api/products/${id}` });
    return data;
  }
}
