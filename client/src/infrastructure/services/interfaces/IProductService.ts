import { GetReturnType, PostReturnType, ProductOptions } from "./IHttpService";

export interface IProductService {
  getAllProducts: (options: ProductOptions) => Promise<Partial<PostReturnType>>;
  getProduct: (id: string) => Promise<Partial<GetReturnType>>;
}
