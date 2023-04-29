import { Category } from "../../../domain/models/Category";
import { ICategoryService } from "../interfaces/ICategoryService";
import { IHttpService } from "../interfaces/IHttpService";

export default class CategoryService implements ICategoryService {
  httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async getAllCategories(): Promise<Category[]> {
    const data = await this.httpService.get<Category[]>({ url: "/api/categories" });
    return data;
  }
}
