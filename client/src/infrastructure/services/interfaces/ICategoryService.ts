import { GetReturnType } from "./IHttpService";

export interface ICategoryService {
  getAllCategories: () => Promise<Partial<GetReturnType>>;
}
