import { AxiosRequestHeaders } from "axios";

type UserData = {
  email: string;
  password: string;
};

type AuthData = {
  id: string;
  token: string;
};

export type WishlistData = {
  userId: string;
  productId: string;
  token: string;
};

export type Data = UserData | AuthData | WishlistData;

export type GetOptions = {
  url: string;
};

export type PostOptions = {
  url: string;
  data: Data;
  options?: {
    headers?: AxiosRequestHeaders;
  };
};

export interface IHttpService {
  get<T>({ url }: GetOptions): Promise<T>;
  post<T>({ url, data, options }: PostOptions): Promise<T>;
}
