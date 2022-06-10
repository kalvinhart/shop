import { Product } from "../../../domain/models/Product";
import { Category } from "../../../domain/models/Category";
import { User } from "../../../domain/models/User";

export type GetReturnType = Promise<Product | Category[] | User>;
export type PostReturnType = Promise<Product[] | User>;

type UserOptions = {
  email: string;
  password: string;
};

type ProductOptions = {
  categories: string;
  sortBy: string;
};

export type Options = UserOptions | ProductOptions;

export interface IHttpService {
  get: (url: string) => GetReturnType;
  post: (url: string, options: Options) => PostReturnType;
}
