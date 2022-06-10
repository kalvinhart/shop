import { Product } from "../../../domain/models/Product";
import { Category } from "../../../domain/models/Category";
import { User } from "../../../domain/models/User";
import { String } from "aws-sdk/clients/cloudhsm";

export type GetReturnType = Promise<Product | Category[] | User>;
export type PostReturnType = Promise<Product[] | User>;

type UserOptions = {
  email: string;
  password: string;
};

export type ProductOptions = {
  categories: string;
  sortBy: string;
};

export type Options = UserOptions | ProductOptions;

export type GetOptions = {
  url: String;
};

export type PostOptions = {
  url: string;
  options: Options;
};

export interface IHttpService {
  get: ({ url }: GetOptions) => GetReturnType;
  post: ({ url, options }: PostOptions) => PostReturnType;
}
