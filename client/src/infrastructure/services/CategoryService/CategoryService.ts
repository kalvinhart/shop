import { ICategoryService } from "../interfaces/ICategoryService";
import { GetReturnType, IHttpService } from "../interfaces/IHttpService";

export default class CategoryService implements ICategoryService {
  httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllCategories(): Promise<Partial<GetReturnType>> {
    const data = await this.httpService.get({ url: "/api/categories" });
    return data;
  }
}
