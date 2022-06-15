import { Category } from "../../../domain/models/Category";
export interface ICategoryService {
  getAllCategories: () => Promise<Category[]>;
}
